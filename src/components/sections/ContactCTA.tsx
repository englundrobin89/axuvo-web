import React from 'react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

interface ContactCTAProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
}) => {
  return (
    <section className="py-16 lg:py-24 bg-navy-mid">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-silver mb-10">
            {description}
          </p>
          <Button
            variant="primary"
            size="lg"
            as="link"
            href={ctaHref}
          >
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  );
};
