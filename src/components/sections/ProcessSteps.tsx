import React from 'react';
import { Container } from '../ui/Container';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps }) => {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="relative">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-mint to-transparent" />
                )}

                {/* Number circle */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mint text-midnight font-heading font-semibold text-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-silver">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
