import React from 'react';
import { Accordion } from '../ui/Accordion';
import { Container } from '../ui/Container';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  sectionTitle?: string;
}

export const FAQ: React.FC<FAQProps> = ({ items, sectionTitle = 'Vanliga frågor' }) => {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-12">
            {sectionTitle}
          </h2>
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
};
