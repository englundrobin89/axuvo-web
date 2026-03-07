'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Clock, ArrowRight, TrendingUp, Layers, Zap, Send, Bot, CheckCircle, Plus, X } from 'lucide-react';
import { BookingModal } from '@/components/ui/BookingModal';
import type { EstimateResult, SuggestedFeature } from '@/app/api/estimate/route';


interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
  estimate?: EstimateResult;
  showEstimate?: boolean;
  isQuestion?: boolean;
  confirmed?: boolean;
  previousSelections?: string[];
}

interface PriceEstimatorProps {
  compact?: boolean;
}

export default function PriceEstimator({ compact = false }: PriceEstimatorProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [pendingEstimate, setPendingEstimate] = useState<EstimateResult | null>(null);
  const [confirmedEstimate, setConfirmedEstimate] = useState<EstimateResult | null>(null);
  const [originalDescription, setOriginalDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // Feature selection state: map of feature name → selected boolean
  const [featureSelection, setFeatureSelection] = useState<Map<string, boolean>>(new Map());
  // Custom feature input
  const [customFeatures, setCustomFeatures] = useState<SuggestedFeature[]>([]);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customFeatureInput, setCustomFeatureInput] = useState('');
  const [suggestMoreLoading, setSuggestMoreLoading] = useState(false);
  // ─── EstimateCard state (lifted up to survive re-renders) ───
  const [removedFeatures, setRemovedFeatures] = useState<Set<string>>(new Set());
  const [recalculating, setRecalculating] = useState(false);
  const [priceOverride, setPriceOverride] = useState<{
    complexity: string;
    priceRange: string;
    priceMin: number;
    priceMax: number;
    timelineWeeks: string;
    summary: string;
    monthlyFrom: string;
  } | null>(null);
  const recalcTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const customFeatureInputRef = useRef<HTMLInputElement>(null);

  function autoResize(el: HTMLTextAreaElement) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 150) + 'px';
  }

  useEffect(() => {
    const el = chatContainerRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, loading, confirmLoading, pendingEstimate, customFeatures]);

  // Initialize feature selection when we get suggestedFeatures
  function initFeatureSelection(features: SuggestedFeature[]) {
    const map = new Map<string, boolean>();
    features.forEach(f => map.set(f.name, f.included));
    setFeatureSelection(map);
  }

  function toggleFeature(name: string) {
    setFeatureSelection(prev => {
      const next = new Map(prev);
      next.set(name, !next.get(name));
      return next;
    });
  }

  function addCustomFeature() {
    const name = customFeatureInput.trim();
    if (!name) return;
    // Don't add duplicates
    if (featureSelection.has(name)) {
      setCustomFeatureInput('');
      setShowCustomInput(false);
      return;
    }
    const newFeature: SuggestedFeature = { name, description: 'Tillagd av dig', included: true };
    setCustomFeatures(prev => [...prev, newFeature]);
    setFeatureSelection(prev => {
      const next = new Map(prev);
      next.set(name, true);
      return next;
    });
    setCustomFeatureInput('');
    setShowCustomInput(false);
  }

  async function handleSuggestMore() {
    if (!pendingEstimate || suggestMoreLoading) return;
    setSuggestMoreLoading(true);
    try {
      // Split features into selected and deselected based on current toggle state
      const allFeatures = [
        ...(pendingEstimate.suggestedFeatures || []),
        ...customFeatures,
      ];
      const selectedFeatures: string[] = [];
      const deselectedFeatures: string[] = [];
      allFeatures.forEach(f => {
        const isSelected = featureSelection.get(f.name) ?? f.included;
        if (isSelected) {
          selectedFeatures.push(f.name);
        } else {
          deselectedFeatures.push(f.name);
        }
      });
      const res = await fetch('/api/suggest-features', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: originalDescription,
          selectedFeatures,
          deselectedFeatures,
        }),
      });
      const data = await res.json();
      if (data.features && data.features.length > 0) {
        // Add new features as custom (so they don't disappear on re-render)
        const newFeatures: SuggestedFeature[] = data.features.filter(
          (f: SuggestedFeature) => !featureSelection.has(f.name)
        );
        setCustomFeatures(prev => [...prev, ...newFeatures]);
        setFeatureSelection(prev => {
          const next = new Map(prev);
          newFeatures.forEach((f: SuggestedFeature) => next.set(f.name, false));
          return next;
        });
      }
    } catch {
      // Silently fail
    } finally {
      setSuggestMoreLoading(false);
    }
  }

  async function handleSend() {
    const text = input.trim();
    if (!text || loading || confirmLoading) return;

    const isFirst = messages.length === 0;
    if (isFirst) setOriginalDescription(text);

    // Save current feature state before resetting pending estimate
    const prevFeatureSelection = new Map(featureSelection);
    const prevCustomFeatures = [...customFeatures];

    // Gather previously selected feature names for display
    const prevSelectedNames = !isFirst
      ? Array.from(prevFeatureSelection.entries())
          .filter(([, selected]) => selected)
          .map(([name]) => name)
      : [];

    setMessages((prev) => [...prev, {
      role: 'user',
      content: text,
      previousSelections: prevSelectedNames.length > 0 ? prevSelectedNames : undefined,
    }]);
    setInput('');
    if (inputRef.current) inputRef.current.style.height = 'auto';
    setLoading(true);
    setPendingEstimate(null);
    setShowCustomInput(false);
    setCustomFeatureInput('');

    try {
      const desc = isFirst ? text : originalDescription;
      const currentMessages = [...messages, { role: 'user' as const, content: text }];
      // Build richer history so AI sees its own previous responses fully
      const history = currentMessages.map(m => {
        if (m.role === 'ai' && m.estimate) {
          // Include understanding + summary + features so AI remembers what it said
          const parts = [m.content];
          if (m.estimate.summary) parts.push(`[Min sammanfattning: ${m.estimate.summary}]`);
          if (m.estimate.features?.length) parts.push(`[Funktioner jag föreslog: ${m.estimate.features.join(', ')}]`);
          return { role: m.role, content: parts.join('\n') };
        }
        return { role: m.role, content: m.content };
      });

      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: desc,
          clarification: isFirst ? undefined : text,
          history: isFirst ? undefined : history,
          previouslySelectedFeatures: isFirst ? undefined : prevSelectedNames.length > 0 ? prevSelectedNames : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [...prev, { role: 'ai', content: data.error || 'Något gick fel. Försök igen.' }]);
        return;
      }

      // AI asked a clarifying question
      if (data.question && !data.complexity) {
        setMessages((prev) => [...prev, {
          role: 'ai',
          content: data.question,
          isQuestion: true,
        }]);
        return;
      }

      // AI understood — store estimate and show understanding + feature chips
      setPendingEstimate(data);
      if (data.suggestedFeatures && data.suggestedFeatures.length > 0) {
        // Merge: new AI features + ALL previously selected features + custom features
        const mergedMap = new Map<string, boolean>();
        const newNames = new Set(data.suggestedFeatures.map((f: SuggestedFeature) => f.name));

        // 1. Add all new AI-suggested features, preserving user's previous toggle state
        data.suggestedFeatures.forEach((f: SuggestedFeature) => {
          mergedMap.set(f.name, prevFeatureSelection.has(f.name) ? (prevFeatureSelection.get(f.name) ?? f.included) : f.included);
        });

        // 2. Carry over ALL previously selected features that AI didn't include in new suggestions
        const carryOverFeatures: SuggestedFeature[] = [];
        prevFeatureSelection.forEach((wasSelected, name) => {
          if (!newNames.has(name) && wasSelected) {
            mergedMap.set(name, true);
            // Check if it was a custom feature or an AI-suggested one
            const isCustom = prevCustomFeatures.some(f => f.name === name);
            if (!isCustom) {
              // Was an AI feature from a previous round — carry over as custom
              carryOverFeatures.push({ name, description: 'Tidigare vald', included: true });
            }
          }
        });

        // 3. Carry over custom features that aren't in new AI suggestions
        const keptCustom = prevCustomFeatures.filter(f => !newNames.has(f.name));
        keptCustom.forEach(f => {
          mergedMap.set(f.name, prevFeatureSelection.get(f.name) ?? true);
        });

        setCustomFeatures([...keptCustom, ...carryOverFeatures]);
        setFeatureSelection(mergedMap);
      } else {
        // No new features from AI — keep previous state
        setCustomFeatures(prevCustomFeatures);
        setFeatureSelection(prevFeatureSelection);
      }
      setMessages((prev) => [...prev, {
        role: 'ai',
        content: data.understanding,
        estimate: data,
        showEstimate: false,
      }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'ai', content: 'Kunde inte nå servern. Försök igen.' }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  async function handleConfirm() {
    if (!pendingEstimate) return;

    // Reset EstimateCard toggle state for fresh confirmed card
    setRemovedFeatures(new Set());
    setPriceOverride(null);

    // Get selected feature names
    const selectedFeatures = Array.from(featureSelection.entries())
      .filter(([, selected]) => selected)
      .map(([name]) => name);

    // Check if selection differs from original suggestedFeatures
    const originalSelected = (pendingEstimate.suggestedFeatures || [])
      .filter(f => f.included)
      .map(f => f.name)
      .sort();
    const currentSelected = [...selectedFeatures].sort();
    const selectionChanged = JSON.stringify(originalSelected) !== JSON.stringify(currentSelected);

    if (selectionChanged && selectedFeatures.length > 0) {
      // Re-estimate with selected features
      setConfirmLoading(true);
      try {
        const res = await fetch('/api/estimate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            description: originalDescription,
            selectedFeatures,
          }),
        });
        const data = await res.json();
        if (res.ok && data.complexity) {
          // Use the re-estimated data but keep the selected features as the features list
          data.features = selectedFeatures;
          setConfirmedEstimate(data);
          setMessages((prev) => {
            const updated = [...prev];
            for (let i = updated.length - 1; i >= 0; i--) {
              if (updated[i].estimate && !updated[i].showEstimate) {
                updated[i] = { ...updated[i], estimate: data, showEstimate: true, confirmed: true };
                break;
              }
            }
            return updated;
          });
          setPendingEstimate(null);
          return;
        }
      } catch {
        // Fall through to use original estimate
      } finally {
        setConfirmLoading(false);
      }
    }

    // Use original estimate (no feature change or re-estimate failed)
    const finalEstimate = { ...pendingEstimate, features: selectedFeatures.length > 0 ? selectedFeatures : pendingEstimate.features };
    setConfirmedEstimate(finalEstimate);
    setMessages((prev) => {
      const updated = [...prev];
      for (let i = updated.length - 1; i >= 0; i--) {
        if (updated[i].estimate && !updated[i].showEstimate) {
          updated[i] = { ...updated[i], estimate: finalEstimate, showEstimate: true, confirmed: true };
          break;
        }
      }
      return updated;
    });
    setPendingEstimate(null);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // ─── Feature chips component ───
  function FeatureChips() {
    if (!pendingEstimate?.suggestedFeatures || pendingEstimate.suggestedFeatures.length === 0) return null;

    const allFeatures = [...pendingEstimate.suggestedFeatures, ...customFeatures];

    return (
      <div className="space-y-2.5">
        <p className="text-xs text-slate">Välj vilka funktioner som ska ingå:</p>
        <div className="flex flex-wrap gap-2">
          {allFeatures.map((feature) => {
            const isSelected = featureSelection.get(feature.name) ?? feature.included;
            return (
              <button
                key={feature.name}
                onClick={() => toggleFeature(feature.name)}
                title={feature.description}
                className={`
                  inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                  border transition-all cursor-pointer select-none
                  ${isSelected
                    ? 'bg-mint/10 border-mint/30 text-mint hover:bg-mint/20'
                    : 'bg-white/5 border-white/10 text-silver/70 hover:bg-white/10 hover:text-silver'
                  }
                `}
              >
                {isSelected ? (
                  <CheckCircle className="w-3 h-3" />
                ) : (
                  <Plus className="w-3 h-3" />
                )}
                {feature.name}
              </button>
            );
          })}

          {/* Add custom feature */}
          {showCustomInput ? (
            <div className="inline-flex items-center gap-1 rounded-full border border-mint/30 bg-mint/5 overflow-hidden">
              <input
                ref={customFeatureInputRef}
                type="text"
                value={customFeatureInput}
                onChange={(e) => setCustomFeatureInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') { e.preventDefault(); addCustomFeature(); }
                  if (e.key === 'Escape') { setShowCustomInput(false); setCustomFeatureInput(''); }
                }}
                placeholder="T.ex. SMS-notiser"
                className="bg-transparent text-xs text-white placeholder-slate/50 px-3 py-1.5 w-32 sm:w-40 focus:outline-none"
                autoFocus
              />
              <button
                onClick={addCustomFeature}
                disabled={!customFeatureInput.trim()}
                className="px-2 py-1.5 text-mint hover:text-white transition-colors cursor-pointer disabled:opacity-30"
              >
                <CheckCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => { setShowCustomInput(true); setTimeout(() => customFeatureInputRef.current?.focus(), 50); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-dashed border-white/20 text-slate hover:border-mint/30 hover:text-mint transition-all cursor-pointer select-none"
            >
              <Plus className="w-3 h-3" />
              Lägg till
            </button>
          )}

          {/* Suggest more features via AI */}
          <button
            onClick={handleSuggestMore}
            disabled={suggestMoreLoading}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-dashed border-white/20 text-slate hover:border-mint/30 hover:text-mint transition-all cursor-pointer select-none disabled:opacity-50"
          >
            {suggestMoreLoading ? (
              <div className="w-3 h-3 border-[1.5px] border-slate/30 border-t-mint rounded-full animate-spin" />
            ) : (
              <Sparkles className="w-3 h-3" />
            )}
            {suggestMoreLoading ? 'Tänker...' : 'Föreslå fler'}
          </button>
        </div>
      </div>
    );
  }

  // ─── EstimateCard recalculation logic (at parent level) ───
  async function recalculatePrice(features: string[]) {
    if (features.length === 0) return;
    setRecalculating(true);
    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: originalDescription,
          selectedFeatures: features,
        }),
      });
      const data = await res.json();
      if (res.ok && data.complexity) {
        setPriceOverride({
          complexity: data.complexity,
          priceRange: data.priceRange,
          priceMin: data.priceMin,
          priceMax: data.priceMax,
          timelineWeeks: data.timelineWeeks,
          summary: data.summary,
          monthlyFrom: data.monthlyFrom,
        });
        // Update confirmedEstimate for BookingModal
        setConfirmedEstimate(prev => prev ? {
          ...prev,
          complexity: data.complexity,
          priceRange: data.priceRange,
          priceMin: data.priceMin,
          priceMax: data.priceMax,
          timelineWeeks: data.timelineWeeks,
          summary: data.summary,
          monthlyFrom: data.monthlyFrom,
          features,
        } : prev);
      }
    } catch {
      // Silently fail — keep current values
    } finally {
      setRecalculating(false);
    }
  }

  function toggleEstimateFeature(feature: string, allFeatures: string[]) {
    const newRemoved = new Set(removedFeatures);
    if (newRemoved.has(feature)) {
      newRemoved.delete(feature);
    } else {
      newRemoved.add(feature);
    }
    setRemovedFeatures(newRemoved);

    const newActiveFeatures = allFeatures.filter(f => !newRemoved.has(f));

    // Update confirmedEstimate features immediately for BookingModal
    setConfirmedEstimate(prev => prev ? { ...prev, features: newActiveFeatures } : prev);

    // Reset override if all features are back
    if (newRemoved.size === 0) {
      setPriceOverride(null);
      if (recalcTimer.current) clearTimeout(recalcTimer.current);
      return;
    }

    // Debounce API call for price recalculation (600ms)
    if (recalcTimer.current) clearTimeout(recalcTimer.current);
    if (newActiveFeatures.length > 0) {
      recalcTimer.current = setTimeout(() => {
        recalculatePrice(newActiveFeatures);
      }, 600);
    }
  }

  // ─── Estimate card (pure render — state lives in parent) ───
  function EstimateCard({ estimate }: { estimate: EstimateResult }) {
    const activeFeatures = estimate.features.filter(f => !removedFeatures.has(f));

    // Display values — use recalculated override when available
    const displayComplexity = priceOverride?.complexity ?? estimate.complexity;
    const displayPriceRange = priceOverride?.priceRange ?? estimate.priceRange;
    const displayTimeline = priceOverride?.timelineWeeks ?? estimate.timelineWeeks;
    const displaySummary = priceOverride?.summary ?? estimate.summary;
    const displayMonthly = priceOverride?.monthlyFrom ?? estimate.monthlyFrom;

    return (
      <div className="mt-3 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="bg-midnight/60 rounded-lg p-3 text-left">
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-1">
              <Layers className="w-3 h-3" /> Komplexitet
            </div>
            <span className={`inline-block text-sm font-semibold px-2 py-0.5 rounded border bg-mint/10 border-mint/20 text-mint transition-opacity ${recalculating ? 'opacity-40' : ''}`}>
              {displayComplexity}
            </span>
          </div>
          <div className="bg-midnight/60 rounded-lg p-3 text-left">
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-1">
              <TrendingUp className="w-3 h-3" /> Indikativt pris
            </div>
            <div className={`text-sm font-semibold text-white transition-opacity ${recalculating ? 'opacity-40' : ''}`}>
              {recalculating ? (
                <span className="inline-flex items-center gap-1.5">
                  <div className="w-3 h-3 border-[1.5px] border-mint/30 border-t-mint rounded-full animate-spin" />
                  Räknar om...
                </span>
              ) : displayPriceRange}
            </div>
          </div>
          <div className="bg-midnight/60 rounded-lg p-3 text-left">
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-1">
              <Clock className="w-3 h-3" /> Uppskattad tid
            </div>
            <div className={`text-sm font-semibold text-white transition-opacity ${recalculating ? 'opacity-40' : ''}`}>
              ca {displayTimeline} v
            </div>
          </div>
        </div>

        {estimate.features.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider">
                <Zap className="w-3 h-3" /> Funktioner i uppskattningen
              </div>
              <span className="text-[10px] text-slate/60">Klicka för att justera priset</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {estimate.features.map((f, i) => {
                const isRemoved = removedFeatures.has(f);
                return (
                  <button
                    key={i}
                    onClick={() => toggleEstimateFeature(f, estimate.features)}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all cursor-pointer select-none ${
                      isRemoved
                        ? 'bg-white/5 border-white/10 text-slate line-through opacity-50 hover:border-mint/30 hover:text-mint/70'
                        : 'bg-mint/10 border-mint/20 text-mint hover:bg-mint/5 hover:border-red-400/30 hover:text-red-300'
                    }`}
                  >
                    {isRemoved ? <Plus className="w-3 h-3 inline mr-1" /> : <X className="w-3 h-3 inline mr-1" />}
                    {f}
                  </button>
                );
              })}
            </div>
            {removedFeatures.size > 0 && (
              <p className="text-[11px] text-mint/70 mt-1.5">
                {activeFeatures.length} av {estimate.features.length} funktioner valda
                {priceOverride && !recalculating && priceOverride.complexity !== estimate.complexity
                  ? ` — priset sänktes till ${priceOverride.complexity}`
                  : ' — priset uppdateras automatiskt'}
              </p>
            )}
          </div>
        )}

        <p className={`text-base text-silver leading-relaxed transition-opacity ${recalculating ? 'opacity-40' : ''}`}>{displaySummary}</p>

        {/* Indikativt pris notice */}
        <div className="bg-white/[0.02] border border-white/5 rounded-lg px-3 py-2 text-xs text-slate">
          💡 Detta är en <span className="text-silver">indikativ uppskattning</span> baserad på din beskrivning. Exakt pris bestäms efter ett blueprint-möte där vi går igenom projektet i detalj.
        </div>

        {/* Blueprint + prototype CTA */}
        <div className="bg-mint/5 border border-mint/15 rounded-lg px-4 py-3 space-y-1">
          <p className="text-sm text-white font-medium">Nästa steg: gratis blueprint-möte (~1h)</p>
          <p className="text-xs text-silver">Du får en klickbar prototyp inom 48 timmar och ett exakt prisförslag — helt utan kostnad eller förpliktelse.</p>
        </div>

        <div className={`bg-white/[0.03] rounded-lg px-3 py-2 text-xs text-slate transition-opacity ${recalculating ? 'opacity-40' : ''}`}>
          Förvaltning efter leverans från <span className="text-silver font-medium">{displayMonthly}</span>
        </div>
      </div>
    );
  }

  // ─── Chat message renderer (shared) ───
  function renderMessages(size: 'sm' | 'lg') {
    const iconSize = size === 'sm' ? 'w-7 h-7' : 'w-8 h-8';
    const botIcon = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
    const bubble = size === 'sm' ? 'rounded-xl px-4 py-3' : 'rounded-2xl px-5 py-4';
    const textClass = size === 'sm' ? 'text-sm text-white' : 'text-white leading-relaxed';

    return (
      <>
        {messages.map((msg, i) => (
          <div key={i} className="space-y-2">
            {/* Show previous selections summary above user follow-up */}
            {msg.role === 'user' && msg.previousSelections && msg.previousSelections.length > 0 && (
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-white/[0.02] border border-white/5 rounded-lg px-3 py-2">
                  <p className="text-[10px] text-slate uppercase tracking-wider mb-1.5">Dina valda funktioner</p>
                  <div className="flex flex-wrap gap-1">
                    {msg.previousSelections.map((f, j) => (
                      <span key={j} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-mint/10 border border-mint/20 text-mint">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'ai' && (
                <div className={`flex-shrink-0 ${iconSize} rounded-full bg-mint/10 flex items-center justify-center mt-0.5`}>
                  <Bot className={`${botIcon} text-mint`} />
                </div>
              )}
              <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-mint/10 border border-mint/20' : 'bg-white/[0.03] border border-white/5'} ${bubble}`}>
                <p className={textClass}>{msg.content}</p>
                {msg.estimate && msg.showEstimate && <EstimateCard estimate={msg.estimate} />}
              </div>
            </div>
          </div>
        ))}

        {/* Feature chips + confirm/deny — show when we have a pending estimate */}
        {pendingEstimate && !loading && !confirmLoading && (
          <div className="flex flex-col gap-3 pl-0 sm:pl-10">
            <FeatureChips />
            <div>
              <p className="text-xs text-slate mb-2">Har vi förstått din idé rätt?</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleConfirm}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-mint/10 border border-mint/20 text-mint text-sm font-medium hover:bg-mint/20 transition-colors cursor-pointer"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  Ja, visa prisförslag
                </button>
                <button
                  onClick={() => inputRef.current?.focus()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-silver text-sm hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Nej, jag förtydligar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirm loading state */}
        {confirmLoading && (
          <div className="flex gap-3">
            <div className={`flex-shrink-0 ${iconSize} rounded-full bg-mint/10 flex items-center justify-center`}>
              <Bot className={`${botIcon} text-mint`} />
            </div>
            <div className={`bg-white/[0.03] border border-white/5 ${bubble}`}>
              <p className="text-sm text-silver">Räknar om baserat på dina val...</p>
              <div className="flex gap-1.5 mt-2">
                <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:0ms]" />
                <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:150ms]" />
                <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        {/* Booking CTA + helper text */}
        {confirmedEstimate && !loading && !pendingEstimate && !confirmLoading && (
          <div className="space-y-2">
            <button
              onClick={() => setShowModal(true)}
              className="w-full flex items-center justify-center gap-2 bg-mint text-midnight px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:bg-mint-hover cursor-pointer"
            >
              Boka ett gratis blueprint-möte
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-xs text-slate text-center">
              eller skriv mer för att göra din idé tydligare
            </p>
          </div>
        )}

        {loading && (
          <div className="flex gap-3">
            <div className={`flex-shrink-0 ${iconSize} rounded-full bg-mint/10 flex items-center justify-center`}>
              <Bot className={`${botIcon} text-mint`} />
            </div>
            <div className={`bg-white/[0.03] border border-white/5 ${bubble}`}>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:0ms]" />
                <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:150ms]" />
                <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // ─── Compact variant ───
  if (compact) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-navy-mid/80 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          {messages.length > 0 && (
            <div ref={chatContainerRef} className="max-h-[400px] overflow-y-auto p-4 space-y-4">
              {renderMessages('sm')}
            </div>
          )}

          <div className={`${messages.length > 0 ? 'border-t border-white/5' : ''}`}>
            <div className="flex items-end gap-2 p-3">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => { setInput(e.target.value); autoResize(e.target); }}
                onKeyDown={handleKeyDown}
                placeholder={messages.length === 0 ? 'Beskriv vad du vill bygga...' : 'Förtydliga eller beskriv mer...'}
                rows={1}
                className="flex-1 bg-transparent text-white placeholder-slate/60 px-3 py-2 text-sm resize-none focus:outline-none"
                style={{ maxHeight: '150px' }}
                disabled={loading || confirmLoading}
              />
              <button
                onClick={handleSend}
                disabled={loading || confirmLoading || !input.trim()}
                className="flex-shrink-0 p-2.5 rounded-lg bg-mint text-midnight transition-all hover:bg-mint-hover disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {showModal && confirmedEstimate && (
          <BookingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            estimate={confirmedEstimate}
            description={originalDescription}
            chatHistory={messages.map(m => ({ role: m.role, content: m.content }))}
          />
        )}
      </div>
    );
  }

  // ─── Full variant (Build Studio hero) ───
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-navy-mid/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 focus-within:border-mint/40 focus-within:shadow-[0_0_40px_-12px_rgba(52,211,153,0.15)]">
        {messages.length > 0 && (
          <div ref={chatContainerRef} className="max-h-[500px] overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-5">
            {renderMessages('lg')}
          </div>
        )}

        <div className={`${messages.length > 0 ? 'border-t border-white/5' : ''}`}>
          <div className="flex items-end gap-3 p-4 lg:p-5">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => { setInput(e.target.value); autoResize(e.target); }}
              onKeyDown={handleKeyDown}
              placeholder={messages.length === 0
                ? 'En bokningsapp för ett gym med betalning och medlemshantering...'
                : 'Förtydliga eller berätta mer...'
              }
              rows={messages.length === 0 ? 3 : 1}
              className="flex-1 bg-transparent text-white placeholder-slate/60 px-2 py-2 text-base sm:text-lg resize-none focus:outline-none"
              style={{ maxHeight: '150px' }}
              disabled={loading || confirmLoading}
            />
            <button
              onClick={handleSend}
              disabled={loading || confirmLoading || !input.trim()}
              className="flex-shrink-0 p-3 rounded-xl bg-mint text-midnight transition-all hover:bg-mint-hover disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
              ) : messages.length === 0 ? (
                <Sparkles className="w-5 h-5" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
          {messages.length === 0 && (
            <div className="px-6 pb-4">
              <span className="text-xs text-slate/50">Enter för att skicka</span>
            </div>
          )}
        </div>
      </div>

      {showModal && confirmedEstimate && (
        <BookingModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          estimate={confirmedEstimate}
          description={originalDescription}
          chatHistory={messages.map(m => ({ role: m.role, content: m.content }))}
        />
      )}
    </div>
  );
}
