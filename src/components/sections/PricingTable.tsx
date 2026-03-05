import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingTableProps {
  packages: PricingPackage[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ packages }) => {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition-colors duration-200 ${
                pkg.highlighted
                  ? 'bg-navy-mid border-2 border-mint'
                  : 'bg-navy-mid border border-white/5'
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {pkg.name}
              </h3>
              <p className="text-silver mb-6">{pkg.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-heading font-semibold text-white">
                  {pkg.price}
                </span>
              </div>

              <Button
                variant={pkg.highlighted ? 'primary' : 'secondary'}
                size="md"
                as="button"
                className="w-full mb-8"
              >
                Kom igång
              </Button>

              <div className="space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span className="text-silver">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
