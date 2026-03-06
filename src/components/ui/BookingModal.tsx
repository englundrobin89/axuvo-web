'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  X,
  CheckCircle,
  Clock,
  ArrowRight,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import type { EstimateResult } from '@/app/api/estimate/route';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  estimate: EstimateResult;
  description: string;
}


export function BookingModal({ isOpen, onClose, estimate, description }: BookingModalProps) {
  const [namn, setNamn] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [foretag, setForetag] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus first input on open
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!namn.trim() || !email.trim() || !telefon.trim()) {
      setError('Fyll i namn, email och telefon.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Ange en giltig emailadress.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          namn: namn.trim(),
          email: email.trim(),
          telefon: telefon.trim(),
          foretag: foretag.trim() || undefined,
          description,
          estimate: {
            complexity: estimate.complexity,
            priceRange: estimate.priceRange,
            timelineWeeks: estimate.timelineWeeks,
            features: estimate.features,
            recommendations: estimate.recommendations,
            summary: estimate.summary,
            monthlyFrom: estimate.monthlyFrom,
          },
        }),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('Något gick fel. Försök igen eller kontakta oss direkt.');
    } finally {
      setSubmitting(false);
    }
  }, [namn, email, telefon, foretag, description, estimate]);

  if (!isOpen) return null;

  // Success state
  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-navy-mid border border-white/10 rounded-2xl p-8 max-w-md w-full text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-mint/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-mint" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">Tack, {namn.split(' ')[0]}!</h3>
          <p className="text-silver mb-6">
            Vi har fått din förfrågan och hör av oss inom 24 timmar för att boka ett blueprint-möte.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-mint text-midnight font-medium hover:bg-mint-hover transition-colors"
          >
            Stäng
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-[#0f1a2e] border border-white/10 rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-labelledby="booking-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate hover:text-white hover:bg-white/5 transition-colors z-10"
          aria-label="Stäng"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 lg:p-8">
          {/* Header */}
          <h2 id="booking-title" className="text-xl font-semibold text-white mb-6">
            Boka ett gratis blueprint-möte
          </h2>

          {/* Estimate Summary Card */}
          <div className="bg-navy-mid rounded-xl border border-white/5 p-5 mb-6">
            <span className="text-sm font-medium text-mint mb-4 block">Din prisuppskattning</span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
              <div>
                <p className="text-xs text-slate mb-1">Komplexitet</p>
                <span className="inline-block text-sm font-medium px-2 py-0.5 rounded border bg-mint/10 border-mint/20 text-mint">
                  {estimate.complexity}
                </span>
              </div>
              <div>
                <p className="text-xs text-slate mb-1">Indikativt pris</p>
                <p className="text-sm font-semibold text-white">{estimate.priceRange}</p>
              </div>
              <div>
                <p className="text-xs text-slate mb-1">Uppskattad tid</p>
                <p className="text-sm font-semibold text-white">ca {estimate.timelineWeeks} veckor</p>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {estimate.features.map((f, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-silver border border-white/5">
                  {f}
                </span>
              ))}
            </div>

            {/* Summary */}
            {estimate.summary && (
              <p className="text-sm text-silver leading-relaxed">{estimate.summary}</p>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5 mb-6" />

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <p className="text-sm text-silver mb-4">
              Lämna dina uppgifter så hör vi av oss inom 24 timmar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label htmlFor="booking-namn" className="block text-xs text-slate mb-1">Namn *</label>
                <input
                  ref={firstInputRef}
                  id="booking-namn"
                  type="text"
                  value={namn}
                  onChange={(e) => setNamn(e.target.value)}
                  placeholder="Ditt namn"
                  className="w-full px-3 py-2.5 rounded-lg bg-navy-mid border border-white/10 text-white text-sm placeholder:text-slate focus:outline-none focus:border-mint/40 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="booking-email" className="block text-xs text-slate mb-1">Email *</label>
                <input
                  id="booking-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="din@email.se"
                  className="w-full px-3 py-2.5 rounded-lg bg-navy-mid border border-white/10 text-white text-sm placeholder:text-slate focus:outline-none focus:border-mint/40 transition-colors"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label htmlFor="booking-telefon" className="block text-xs text-slate mb-1">Telefon *</label>
                <input
                  id="booking-telefon"
                  type="tel"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  placeholder="+46 70 123 45 67"
                  className="w-full px-3 py-2.5 rounded-lg bg-navy-mid border border-white/10 text-white text-sm placeholder:text-slate focus:outline-none focus:border-mint/40 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="booking-foretag" className="block text-xs text-slate mb-1">Företag (valfritt)</label>
                <input
                  id="booking-foretag"
                  type="text"
                  value={foretag}
                  onChange={(e) => setForetag(e.target.value)}
                  placeholder="Företagsnamn"
                  className="w-full px-3 py-2.5 rounded-lg bg-navy-mid border border-white/10 text-white text-sm placeholder:text-slate focus:outline-none focus:border-mint/40 transition-colors"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-400 mb-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-mint text-midnight font-semibold hover:bg-mint-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Skickar...
                </>
              ) : (
                <>
                  Boka möte
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-xs text-slate text-center mt-3">
              Gratis och utan förpliktelser. Vi hör av oss inom 24 timmar.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
