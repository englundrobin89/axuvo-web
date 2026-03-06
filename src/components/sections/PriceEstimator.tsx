'use client';

import { useState } from 'react';
import { Sparkles, Clock, ArrowRight, RotateCcw, TrendingUp, Layers, Zap } from 'lucide-react';

interface EstimateResult {
  complexity: string;
  priceRange: string;
  timelineWeeks: string;
  summary: string;
  features: string[];
  monthlyFrom: string;
}

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

interface PriceEstimatorProps {
  compact?: boolean;
}

export default function PriceEstimator({ compact = false }: PriceEstimatorProps) {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleEstimate() {
    if (!description.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Något gick fel.');
        return;
      }

      setResult(data);
    } catch {
      setError('Kunde inte nå servern. Försök igen.');
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setDescription('');
    setResult(null);
    setError('');
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleEstimate();
    }
  }

  function buildContactUrl() {
    const params = new URLSearchParams();
    params.set('arende', 'Build Studio');
    params.set('beskrivning', description);
    if (result) {
      params.set('komplexitet', result.complexity);
      params.set('pris', result.priceRange);
      params.set('tid', result.timelineWeeks + ' veckor');
    }
    return `/kontakt?${params.toString()}`;
  }

  // Compact variant
  if (compact) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-navy-mid/80 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 focus-within:border-mint/40">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Beskriv vad du vill bygga..."
            rows={2}
            className="w-full bg-transparent text-white placeholder-slate/60 px-5 pt-4 pb-1 text-base resize-none focus:outline-none"
            disabled={loading}
          />
          <div className="flex items-center justify-end px-5 pb-3">
            <button
              onClick={handleEstimate}
              disabled={loading || !description.trim()}
              className="inline-flex items-center gap-2 bg-mint text-midnight px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-mint-hover disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                  Analyserar...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Få prisförslag
                </>
              )}
            </button>
          </div>
        </div>

        {error && <div className="mt-3 text-red-400 text-sm text-center">{error}</div>}

        {result && (
          <div className="mt-5 bg-navy-mid/80 backdrop-blur-sm rounded-xl border border-white/10 p-5">
            <div className="flex items-center gap-2 text-sm text-silver mb-3">
              <Sparkles className="w-3.5 h-3.5 text-mint" />
              Indikativ prisuppskattning
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-xs text-slate uppercase tracking-wider mb-1">Komplexitet</div>
                <div className={`text-lg font-bold ${complexityColors[result.complexity] || 'text-white'}`}>
                  {result.complexity}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate uppercase tracking-wider mb-1">Pris</div>
                <div className="text-lg font-bold text-white">{result.priceRange}</div>
              </div>
              <div>
                <div className="text-xs text-slate uppercase tracking-wider mb-1">Tid</div>
                <div className="text-lg font-bold text-white">ca {result.timelineWeeks} v</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={buildContactUrl()}
                className="inline-flex items-center gap-2 bg-mint text-midnight px-4 py-2 rounded-lg font-medium text-sm transition-all hover:bg-mint-hover"
              >
                Boka möte <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 border border-white/10 text-silver px-4 py-2 rounded-lg text-sm hover:border-white/20 hover:text-white transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Ny idé
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full variant (Build Studio hero)
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <div className="bg-navy-mid/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 focus-within:border-mint/40 focus-within:shadow-[0_0_40px_-12px_rgba(52,211,153,0.15)]">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="En bokningsapp för ett gym med betalning och medlemshantering..."
            rows={4}
            className="w-full bg-transparent text-white placeholder-slate/60 px-6 pt-6 pb-2 text-lg resize-none focus:outline-none"
            disabled={loading}
          />

          <div className="flex items-center justify-between px-6 pb-4">
            <span className="text-xs text-slate/50">
              {description.length > 0 ? `${description.length} tecken` : 'Ctrl+Enter för att skicka'}
            </span>

            <button
              onClick={handleEstimate}
              disabled={loading || !description.trim()}
              className="inline-flex items-center gap-2 bg-mint text-midnight px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-mint-hover disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                  Analyserar...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Få prisförslag
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {error && <div className="mt-4 text-red-400 text-sm text-center">{error}</div>}

      {result && (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-navy-mid/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-6 pt-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2 text-sm text-silver">
                <Sparkles className="w-4 h-4 text-mint" />
                Indikativ prisuppskattning
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px bg-white/5">
              <div className="bg-midnight/50 p-5">
                <div className="flex items-center gap-2 text-xs text-slate mb-2 uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  Komplexitet
                </div>
                <div className={`text-xl font-bold ${complexityColors[result.complexity] || 'text-white'}`}>
                  {result.complexity}
                </div>
              </div>
              <div className="bg-midnight/50 p-5">
                <div className="flex items-center gap-2 text-xs text-slate mb-2 uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Indikativt pris
                </div>
                <div className="text-xl font-bold text-white">{result.priceRange}</div>
              </div>
              <div className="bg-midnight/50 p-5">
                <div className="flex items-center gap-2 text-xs text-slate mb-2 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  Uppskattad tid
                </div>
                <div className="text-xl font-bold text-white">ca {result.timelineWeeks} veckor</div>
              </div>
            </div>

            <div className="px-6 py-5 border-t border-white/5">
              <p className="text-silver text-sm leading-relaxed">{result.summary}</p>
              <p className="text-slate text-xs mt-3">
                Baserat på liknande projekt vi byggt. Exakt pris och tidsplan sätts efter ett kostnadsfritt blueprint-möte.
              </p>
            </div>

            {result.features.length > 0 && (
              <div className="px-6 pb-5">
                <div className="flex items-center gap-2 text-xs text-slate mb-3 uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  Identifierade funktioner
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.features.map((feature, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        complexityBg[result.complexity] || 'bg-white/5 border-white/10'
                      } ${complexityColors[result.complexity] || 'text-white'}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="px-6 pb-5">
              <div className="bg-white/[0.03] rounded-lg px-4 py-3 text-xs text-slate">
                Förvaltning efter leverans från <span className="text-silver font-medium">{result.monthlyFrom}</span>
              </div>
            </div>

            <div className="px-6 pb-6 flex flex-wrap gap-3">
              <a
                href={buildContactUrl()}
                className="inline-flex items-center gap-2 bg-mint text-midnight px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-mint-hover"
              >
                Boka möte för att komma igång
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 border border-white/10 text-silver px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:border-white/20 hover:text-white"
              >
                <RotateCcw className="w-4 h-4" />
                Prova en annan idé
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
