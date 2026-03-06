'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '../ui/Button';
import { CheckCircle, Sparkles } from 'lucide-react';

interface FormData {
  namn: string;
  email: string;
  telefon: string;
  arende: string;
  meddelande: string;
}

export const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<FormData>({
    namn: '',
    email: '',
    telefon: '',
    arende: 'Build Studio',
    meddelande: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [hasEstimate, setHasEstimate] = useState(false);

  // Pre-fill from URL params (from price estimator)
  useEffect(() => {
    const arende = searchParams.get('arende');
    const beskrivning = searchParams.get('beskrivning');
    const komplexitet = searchParams.get('komplexitet');
    const pris = searchParams.get('pris');
    const tid = searchParams.get('tid');

    if (beskrivning) {
      let message = beskrivning;
      if (komplexitet || pris || tid) {
        message += '\n\n--- Prisuppskattning ---';
        if (komplexitet) message += `\nKomplexitet: ${komplexitet}`;
        if (pris) message += `\nPrisintervall: ${pris}`;
        if (tid) message += `\nTidsram: ${tid}`;
      }

      setFormData((prev) => ({
        ...prev,
        arende: arende || prev.arende,
        meddelande: message,
      }));
      setHasEstimate(true);
    } else if (arende) {
      setFormData((prev) => ({
        ...prev,
        arende,
      }));
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.namn.trim()) {
      newErrors.namn = 'Namn är obligatoriskt';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-post är obligatorisk';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ange en giltig e-postadress';
    }
    if (!formData.meddelande.trim()) {
      newErrors.meddelande = 'Meddelande är obligatoriskt';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulate form submission
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        namn: '',
        email: '',
        telefon: '',
        arende: 'Build Studio',
        meddelande: '',
      });
      setSubmitted(false);
      setHasEstimate(false);
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="bg-navy-mid rounded-xl p-8 border border-mint/20">
        <div className="flex items-start gap-4">
          <CheckCircle className="w-6 h-6 text-mint flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Tack för din förfrågan!
            </h3>
            <p className="text-silver">
              Vi har mottagit ditt meddelande och återkommer inom 24 timmar. Vi ser fram emot att prata med dig!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Estimate banner */}
      {hasEstimate && (
        <div className="bg-mint/5 border border-mint/20 rounded-lg px-4 py-3 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-mint flex-shrink-0" />
          <p className="text-sm text-silver">
            Din prisuppskattning är bifogad i meddelandet nedan. Fyll i dina kontaktuppgifter så hör vi av oss!
          </p>
        </div>
      )}

      {/* Namn */}
      <div>
        <label htmlFor="namn" className="block text-white font-medium mb-2">
          Namn *
        </label>
        <input
          type="text"
          id="namn"
          name="namn"
          value={formData.namn}
          onChange={handleInputChange}
          placeholder="Ditt namn"
          className={`w-full bg-midnight border rounded-lg px-4 py-3 text-white placeholder-silver/50 focus:outline-none focus:ring-2 focus:ring-mint transition-colors ${
            errors.namn ? 'border-red-500' : 'border-white/10 focus:border-mint'
          }`}
        />
        {errors.namn && (
          <p className="text-red-400 text-sm mt-1">{errors.namn}</p>
        )}
      </div>

      {/* E-post */}
      <div>
        <label htmlFor="email" className="block text-white font-medium mb-2">
          E-post *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="din@epost.se"
          className={`w-full bg-midnight border rounded-lg px-4 py-3 text-white placeholder-silver/50 focus:outline-none focus:ring-2 focus:ring-mint transition-colors ${
            errors.email ? 'border-red-500' : 'border-white/10 focus:border-mint'
          }`}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="telefon" className="block text-white font-medium mb-2">
          Telefon (valfritt)
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          value={formData.telefon}
          onChange={handleInputChange}
          placeholder="+46 70 123 45 67"
          className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white placeholder-silver/50 focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint transition-colors"
        />
      </div>

      {/* Ärendetyp */}
      <div>
        <label htmlFor="arende" className="block text-white font-medium mb-2">
          Ärendetyp
        </label>
        <select
          id="arende"
          name="arende"
          value={formData.arende}
          onChange={handleInputChange}
          className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint transition-colors"
        >
          <option value="Build Studio">Build Studio</option>
          <option value="CTO as a Service">CTO as a Service</option>
          <option value="Specialiststöd">Specialiststöd</option>
          <option value="Annat">Annat</option>
        </select>
      </div>

      {/* Meddelande */}
      <div>
        <label htmlFor="meddelande" className="block text-white font-medium mb-2">
          Meddelande *
        </label>
        <textarea
          id="meddelande"
          name="meddelande"
          value={formData.meddelande}
          onChange={handleInputChange}
          placeholder="Berätta vad du behöver hjälp med..."
          rows={6}
          className={`w-full bg-midnight border rounded-lg px-4 py-3 text-white placeholder-silver/50 focus:outline-none focus:ring-2 focus:ring-mint transition-colors resize-none ${
            errors.meddelande
              ? 'border-red-500'
              : 'border-white/10 focus:border-mint'
          }`}
        />
        {errors.meddelande && (
          <p className="text-red-400 text-sm mt-1">{errors.meddelande}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        variant="primary"
        size="lg"
        as="button"
        className="w-full"
      >
        Skicka förfrågan
      </Button>

      <p className="text-silver text-sm text-center">
        Vi svarar inom 24 timmar • Ingen spam • Gratis möte
      </p>
    </form>
  );
};
