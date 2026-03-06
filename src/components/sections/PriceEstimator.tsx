'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Clock, ArrowRight, TrendingUp, Layers, Zap, Send, Bot, CheckCircle, Plus } from 'lucide-react';
import { BookingModal } from '@/components/ui/BookingModal';
import type { EstimateResult, SuggestedFeature } from '@/app/api/estimate/route';

const complexityColors: Record<string, string> = {
  'Enkel': 'text-emerald-400',
  'Medel': 'text-yellow-400',
  'Komplex': 'text-orange-400',
  'Avancerad': 'text-red-400',
};

const complexityBg: Record<string, string> = {
  'Enkel': 'bg-emerald-400/10 border-emerald-400/20',
  'Medel': 'bg-yellow-400/10 border-yellow-400/20',
  'Komplex': 'bg-orange-400/10 border-orange-400/20',
  'Avancerad': 'bg-red-400/10 border-red-400/20',
};

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
  estimate?: EstimateResult;
  showEstimate?: boolean;
  isQuestion?: boolean;
  confirmed?: boolean;
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
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function autoResize(el: HTMLTextAreaElement) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 150) + 'px';
  }

  useEffect(() => {
    const el = chatContainerRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, loading, confirmLoading, pendingEstimate]);

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

  async function handleSend() {
    const text = input.trim();
    if (!text || loading || confirmLoading) return;

    const isFirst = messages.length === 0;
    if (isFirst) setOriginalDescription(text);

    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    if (inputRef.current) inputRef.current.style.height = 'auto';
    setLoading(true);
    // Reset feature selection and pending estimate when user sends new message
    setPendingEstimate(null);
    setFeatureSelection(new Map());

    try {
      const desc = isFirst ? text : originalDescription;
      const currentMessages = [...messages, { role: 'user' as const, content: text }];
      const history = currentMessages.map(m => ({ role: m.role, content: m.content }));

      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: desc,
          clarification: isFirst ? undefined : text,
          history: isFirst ? undefined : history,
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
        initFeatureSelection(data.suggestedFeatures);
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

    return (
      <div className="space-y-2.5">
        <p className="text-xs text-slate">Välj vilka funktioner som ska ingå:</p>
        <div className="flex flex-wrap gap-2">
          {pendingEstimate.suggestedFeatures.map((feature) => {
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
        </div>
      </div>
    );
  }

  // ─── Estimate card ───
  function EstimateCard({ estimate }: { estimate: EstimateResult }) {
    return (
      <div className="mt-3 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="bg-midnight/60 rounded-lg p-3 text-left">
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-1">
              <Layers className="w-3 h-3" /> Komplexitet
            </div>
            <span className={`inline-block text-sm font-semibold px-2 py-0.5 rounded border ${complexityBg[estimate.complexity]} ${complexityColors[estimate.complexity]}`}>
              {estimate.complexity}
            </span>
          </div>
          <div className="bg-midnight/60 rounded-lg p-3 text-left">
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-1">
              <TrendingUp className="w-3 h-3" /> Indikativt pris
            </div>
            <div className="text-sm font-semibold text-white">{estimate.priceRange}</div>
          </div>
          <div className="bg-midnight/60 rounded-lg p-3 text-left">
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-1">
              <Clock className="w-3 h-3" /> Uppskattad tid
            </div>
            <div className="text-sm font-semibold text-white">ca {estimate.timelineWeeks} v</div>
          </div>
        </div>

        {estimate.features.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-2">
              <Zap className="w-3 h-3" /> Valda funktioner
            </div>
            <div className="flex flex-wrap gap-1.5">
              {estimate.features.map((f, i) => (
                <span key={i} className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${complexityBg[estimate.complexity]} ${complexityColors[estimate.complexity]}`}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}

        <p className="text-sm text-silver leading-relaxed">{estimate.summary}</p>

        {/* Blueprint + prototype CTA */}
        <div className="bg-mint/5 border border-mint/15 rounded-lg px-4 py-3 space-y-1">
          <p className="text-sm text-white font-medium">Nästa steg: gratis blueprint-möte (~1h)</p>
          <p className="text-xs text-silver">Du får en klickbar prototyp inom 48 timmar och ett exakt prisförslag — helt utan kostnad eller förpliktelse.</p>
        </div>

        <div className="bg-white/[0.03] rounded-lg px-3 py-2 text-xs text-slate">
          Förvaltning efter leverans från <span className="text-silver font-medium">{estimate.monthlyFrom}</span>
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
          <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
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
        />
      )}
    </div>
  );
}
