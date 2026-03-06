import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

interface CTA {
  text: string;
  href: string;
}

interface EstimatorCta {
  text: string;
  href: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  trustText?: string;
  variant?: 'home' | 'service' | 'compact';
  badge?: string;
  estimatorCta?: EstimatorCta;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustText,
  variant = 'service',
  badge,
  estimatorCta,
}) => {
  if (variant === 'home') {
    return (
      <section className="relative overflow-hidden pt-12 pb-12 lg:pt-20 lg:pb-16">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-mint/5 rounded-full blur-3xl" />
          <div className="absolute top-40 -right-20 w-[400px] h-[400px] bg-mint/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint/20 to-transparent" />
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <Container>
          <div className="relative max-w-4xl mx-auto text-center">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint/10 border border-mint/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <span className="text-mint text-sm font-medium">{badge}</span>
              </div>
            )}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-silver max-w-2xl mx-auto mb-10">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="primary" size="lg" as="link" href={primaryCta.href}>
                {primaryCta.text}
              </Button>
              {secondaryCta && (
                <Button variant="secondary" size="lg" as="link" href={secondaryCta.href}>
                  {secondaryCta.text}
                </Button>
              )}
            </div>
            {trustText && (
              <p className="text-sm text-slate mb-6">{trustText}</p>
            )}
            {estimatorCta && (
              <a
                href={estimatorCta.href}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-mint/30 hover:bg-mint/5 transition-all duration-200 group"
              >
                <Sparkles className="w-4 h-4 text-mint" />
                <span className="text-sm text-silver group-hover:text-white transition-colors">
                  {estimatorCta.text}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-mint opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            )}
          </div>
        </Container>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <section className="relative overflow-hidden pt-12 pb-8 lg:pt-16 lg:pb-12">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <Container>
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
                {badge}
              </span>
            )}
            <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-3">
              {title}
            </h1>
            <p className="text-silver max-w-xl mb-6">{subtitle}</p>
            <Button variant="primary" size="md" as="link" href={primaryCta.href}>
              {primaryCta.text}
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  // variant === 'service' (default for service pages)
  return (
    <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-16">
      {/* Subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-mint/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint/10 to-transparent" />
      </div>

      <Container>
        <div className="relative max-w-3xl">
          {badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-mint/10 text-mint text-sm font-medium mb-6">
              {badge}
            </span>
          )}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-silver max-w-2xl mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button variant="primary" size="lg" as="link" href={primaryCta.href}>
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button variant="secondary" size="lg" as="link" href={secondaryCta.href}>
                {secondaryCta.text}
              </Button>
            )}
          </div>
          {trustText && (
            <p className="text-sm text-slate">{trustText}</p>
          )}
        </div>
      </Container>
    </section>
  );
};
