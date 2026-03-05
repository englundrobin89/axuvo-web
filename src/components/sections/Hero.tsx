import React from 'react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

interface CTA {
  text: string;
  href: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  trustText?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustText,
}) => {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl">
          <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg text-silver max-w-2xl mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              as="link"
              href={primaryCta.href}
            >
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button
                variant="secondary"
                size="lg"
                as="link"
                href={secondaryCta.href}
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
          {trustText && (
            <p className="text-sm text-slate">
              {trustText}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};
