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
    description: 'Strikt kontroll över vem som kommer åt vad — rätt person, rätt data, rätt tidpunkt.',
  },
  {
    title: 'Dataminimering',
    description: 'Vi samlar och lagrar bara det som behövs. Inget extra, inga onödiga risker.',
  },
  {
    title: 'Loggning',
    description: 'Allt loggas. Fullt spårbart för revision och felsökning.',
  },
  {
    title: 'Backup',
    description: 'Regelbundna säkerhetskopior och tydlig plan om något går fel.',
  },
  {
    title: 'Uppdateringar',
    description: 'Säkerhetsuppdateringar och patchar tillämpas löpande.',
  },
  {
    title: 'Tydliga gränser',
    description: 'Tydlig separation mellan system, data och användare.',
  },
];

export const SecureByDesign: React.FC<SecureByDesignProps> = ({
  title = 'Secure by Design',
  principles = DEFAULT_PRINCIPLES,
}) => {
  return (
    <section className="py-12 lg:py-16">
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
