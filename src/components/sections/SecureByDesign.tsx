import React from 'react';
import { Shield } from 'lucide-react';
import { Container } from '../ui/Container';

interface Principle {
  title: string;
  description: string;
}

interface SecureByDesignProps {
  title?: string;
  principles?: Principle[];
}

const DEFAULT_PRINCIPLES: Principle[] = [
  {
    title: 'Åtkomststyrning',
    description: 'Strict access controls and authentication mechanisms',
  },
  {
    title: 'Dataminimering',
    description: 'Only collect and store what is necessary',
  },
  {
    title: 'Loggning',
    description: 'Comprehensive logging for audit trails',
  },
  {
    title: 'Backup',
    description: 'Regular backups and disaster recovery',
  },
  {
    title: 'Uppdateringar',
    description: 'Timely security patches and updates',
  },
  {
    title: 'Tydliga gränser',
    description: 'Clear boundaries and data isolation',
  },
];

export const SecureByDesign: React.FC<SecureByDesignProps> = ({
  title = 'Secure by Design',
  principles = DEFAULT_PRINCIPLES,
}) => {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-mint" />
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-navy-light border border-white/5 rounded-lg p-6 hover:border-mint/20 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-silver text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
