import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

interface ColumnItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface ThreeColumnsProps {
  items: ColumnItem[];
}

export const ThreeColumns: React.FC<ThreeColumnsProps> = ({ items }) => {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-navy-mid border border-white/5 rounded-xl p-8 hover:border-mint/20 transition-colors duration-200"
            >
              <div className="mb-4 text-mint">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-silver mb-6">
                {item.description}
              </p>
              <Button
                variant="ghost"
                size="sm"
                as="link"
                href={item.href}
              >
                Läs mer →
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
