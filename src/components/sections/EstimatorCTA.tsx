import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import PriceEstimator from '@/components/sections/PriceEstimator';
import { Sparkles } from 'lucide-react';

interface EstimatorCTAProps {
  title?: string;
  subtitle?: string;
}

export function EstimatorCTA({
  title = 'Nyfiken på vad det kostar?',
  subtitle = 'Beskriv din idé så ger vi dig en prisuppskattning direkt.',
}: EstimatorCTAProps) {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-mint text-sm font-medium mb-3">
              <Sparkles className="w-4 h-4" />
              Prisuppskattning
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
              {title}
            </h2>
            <p className="text-silver max-w-lg mx-auto">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={100}>
          <PriceEstimator compact />
        </ScrollReveal>
      </Container>
    </section>
  );
}
