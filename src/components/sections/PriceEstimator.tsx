'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Clock, ArrowRight, TrendingUp, Layers, Zap, Send, User, Bot } from 'lucide-react';
import { BookingModal } from '@/components/ui/BookingModal';
import type { EstimateResult } from '@/app/api/estimate/route';

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
}

interface PriceEstimatorProps {
  compact?: boolean;
}

export default function PriceEstimator({ compact = false }: PriceEstimatorProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [latestEstimate, setLatestEstimate] = useState<EstimateResult | null>(null);
  const [originalDescription, setOriginalDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll chat container only (not the page)
  useEffect(() => {
    const el = chatContainerRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, loading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const isFirstMessage = messages.length === 0;
    if (isFirstMessage) setOriginalDescription(text);

    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: isFirstMessage ? text : originalDescription,
          clarification: isFirstMessage ? undefined : text,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [...prev, { role: 'ai', content: data.error || 'Något gick fel. Försök igen.' }]);
        return;
      }

      setLatestEstimate(data);
      setMessages((prev) => [...prev, {
        role: 'ai',
        content: data.understanding,
        estimate: data,
      }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'ai', content: 'Kunde inte nå servern. Försök igen.' }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // ─── Estimate result card (reused in both variants) ───
  function EstimateCard({ estimate }: { estimate: EstimateResult }) {
    return (
      <div className="mt-3 space-y-3">
        {/* Price/complexity/time grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-midnight/60 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-1">
              <Layers className="w-3 h-3" /> Komplexitet
            </div>
            <span className={`inline-block text-sm font-semibold px-2 py-0.5 rounded border ${complexityBg[estimate.complexity]} ${complexityColors[estimate.complexity]}`}>
              {estimate.complexity}
            </span>
          </div>
          <div className="bg-midnight/60 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-1">
              <TrendingUp className="w-3 h-3" /> Indikativt pris
            </div>
            <div className="text-sm font-semibold text-white">{estimate.priceRange}</div>
          </div>
          <div className="bg-midnight/60 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-1">
              <Clock className="w-3 h-3" /> Uppskattad tid
            </div>
            <div className="text-sm font-semibold text-white">ca {estimate.timelineWeeks} v</div>
          </div>
        </div>

        {/* Features */}
        {estimate.features.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate uppercase tracking-wider mb-2">
              <Zap className="w-3 h-3" /> Identifierade funktioner
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

        {/* Summary + disclaimer */}
        <p className="text-sm text-silver leading-relaxed">{estimate.summary}</p>
        <p className="text-xs text-slate">
          Baserat på liknande projekt vi byggt. Exakt pris och tidsplan sätts efter ett kostnadsfritt blueprint-möte.
        </p>

        {/* Maintenance */}
        <div className="bg-white/[0.03] rounded-lg px-3 py-2 text-xs text-slate">
          Förvaltning efter leverans från <span className="text-silver font-medium">{estimate.monthlyFrom}</span>
        </div>
      </div>
    );
  }

  // ─── Compact variant ───
  if (compact) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-navy-mid/80 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          {/* Chat messages */}
          {messages.length > 0 && (
            <div ref={chatContainerRef} className="max-h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'ai' && (
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-mint/10 flex items-center justify-center mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-mint" />
                    </div>
                  )}
                  <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-mint/10 border border-mint/20' : 'bg-white/[0.03] border border-white/5'} rounded-xl px-4 py-3`}>
                    <p className="text-sm text-white">{msg.content}</p>
                    {msg.estimate && <EstimateCard estimate={msg.estimate} />}
                  </div>
                  {msg.role === 'user' && (
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                      <User className="w-3.5 h-3.5 text-silver" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-mint/10 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-mint" />
                  </div>
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:0ms]" />
                      <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:150ms]" />
                      <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Input area */}
          <div className={`${messages.length > 0 ? 'border-t border-white/5' : ''}`}>
            <div className="flex items-end gap-2 p-3">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={messages.length === 0 ? 'Beskriv vad du vill bygga...' : 'Förtydliga eller beskriv mer...'}
                rows={1}
                className="flex-1 bg-transparent text-white placeholder-slate/60 px-3 py-2 text-sm resize-none focus:outline-none"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
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

        {/* Booking CTA */}
        {latestEstimate && !loading && (
          <div className="mt-4 flex justify-center animate-in fade-in duration-300">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-mint text-midnight px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:bg-mint-hover"
            >
              Boka möte för att komma igång
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {showModal && latestEstimate && (
          <BookingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            estimate={latestEstimate}
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
        {/* Chat messages */}
        {messages.length > 0 && (
          <div ref={chatContainerRef} className="max-h-[500px] overflow-y-auto p-6 space-y-5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'ai' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mint/10 flex items-center justify-center mt-0.5">
                    <Bot className="w-4 h-4 text-mint" />
                  </div>
                )}
                <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-mint/10 border border-mint/20' : 'bg-white/[0.03] border border-white/5'} rounded-2xl px-5 py-4`}>
                  <p className="text-white leading-relaxed">{msg.content}</p>
                  {msg.estimate && <EstimateCard estimate={msg.estimate} />}
                </div>
                {msg.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                    <User className="w-4 h-4 text-silver" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mint/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-mint" />
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:0ms]" />
                    <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 rounded-full bg-mint/40 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Input area */}
        <div className={`${messages.length > 0 ? 'border-t border-white/5' : ''}`}>
          <div className="flex items-end gap-3 p-4 lg:p-5">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={messages.length === 0
                ? 'En bokningsapp för ett gym med betalning och medlemshantering...'
                : 'Förtydliga eller berätta mer...'
              }
              rows={messages.length === 0 ? 3 : 1}
              className="flex-1 bg-transparent text-white placeholder-slate/60 px-2 py-2 text-lg resize-none focus:outline-none"
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
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

      {/* Booking CTA - appears after estimate */}
      {latestEstimate && !loading && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-mint text-midnight px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:bg-mint-hover"
          >
            Boka möte för att komma igång
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="text-xs text-slate">eller skriv mer för att förtydliga</span>
        </div>
      )}

      {/* Booking Modal */}
      {showModal && latestEstimate && (
        <BookingModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          estimate={latestEstimate}
          description={originalDescription}
        />
      )}
    </div>
  );
}
