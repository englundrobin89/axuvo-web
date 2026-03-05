import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import {
  Target,
  Users,
  Compass,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'När behöver du en inhyrd CTO? — Signaler och behov',
  description:
    'Behöver ditt företag en CTO? Se om du känner igen dig i dessa tre scenarion eller signaler på att teknisk ledning saknas.',
  keywords:
    'CTO, teknisk ledare, behov, digital ledning, teknikbeslut, strategi, Sverige',
  openGraph: {
    title: 'När behöver du en inhyrd CTO?',
    description:
      'Tre scenarion och fem signaler som visar när ditt företag behöver en CTO från Axuvo.',
    type: 'website',
    url: 'https://axuvo.se/cto-as-a-service/nar-behover-du',
  },
};

interface Scenario {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const scenarios: Scenario[] = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Du står inför ett stort teknikvägval',
    description:
      'Ska ni migrera till molnet? Bygga eget eller köpa en befintlig lösning? En CTO hjälper dig väga alternativen, se risker och kostnader, och fatta rätt beslut baserat på din affär — inte bara teknik.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Du saknar en teknisk ledare som ser helheten',
    description:
      'Ditt team gör bra saker men behöver riktning. Vilka projekt ska prioriteras? Hur hänger systemen ihop? Vem beslutar om teknikval? En CTO sätter riktning och säkerställer att allt stödjer din vision.',
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: 'Du behöver en digital plan men vet inte var du ska börja',
    description:
      'Digitalisering är viktigt, men vad betyder det för er? En CTO gör en konkret digital färdplan — nuläge, målbild, prioriteringar och milstolpar. En riktig karta, inte bara ett buzzword.',
  },
];

interface Signal {
  title: string;
  description: string;
}

const signals: Signal[] = [
  {
    title: 'Teknikbeslut fattas utan strategi',
    description:
      'Ni köper verktyg eller system reaktivt, utan att tänka på långsiktiga konsekvenser. Det leder till inlåsningseffekter och dyr teknik som inte fungerar tillsammans.',
  },
  {
    title: 'Leverantörer och system hänger inte ihop',
    description:
      'Ni har olika verktyg för CRM, ekonomi, kundtjänst och utveckling — men de talar inte med varandra. Data hoppas mellan system manuellt. En CTO skapar ordning.',
  },
  {
    title: 'Ni har utvecklare men ingen som sätter riktning',
    description:
      'Teamet gör bra arbete, men vem beslutar om arkitektur? Vem säger vilka projekt som är viktigast? Vem upprätthåller kodkvalitet och bästa praxis?',
  },
  {
    title: 'Digitalisering är ett buzzword, inte en plan',
    description:
      'Ni vet att ni behöver bli mer digital, men inte var ni ska börja. Det blir diffust och ingenting händer. En CTO gör det konkret och praktiskt.',
  },
  {
    title: 'Upphandlingar slutar dyrt och fel',
    description:
      'Ni köper ett stort system eller gör en stor köp utan att riktigt veta vad ni behöver. Det är för stort, för komplext eller inte rätt för er situation.',
  },
];

const ctoFaq = [
  {
    question: 'Kan vi testa en CTO innan vi bestämmer oss?',
    answer:
      'Ja, vi erbjuder ofta ett initialt möte gratis för att förstå era behov. Sedan kan ni starta med en månad (Advisor) för att testa. De flesta fortsätter — då ser de värdet.',
  },
  {
    question: 'Vi är ett litet företag. Behöver vi verkligen en CTO?',
    answer:
      'Det beror på. Om teknik är en stor del av din affär eller om du står inför stora teknikbeslut — ja. Om ni bara använder standard SaaS-verktyg — förmodligen inte. Vi är ärliga om vad som passar dig.',
  },
  {
    question: 'Hur lång tid tar det innan vi ser resultat?',
    answer:
      'Första veckan fokuserar vi på att förstå er läge. Vecka två-tre kommer konkreta rekommendationer. Efter en månad bör ni se tydlig värde — bättre fokus, mindre röriga teknikbeslut, en klar plan.',
  },
  {
    question: 'Vi är redan på väg rätt väg. Behöver vi en CTO?',
    answer:
      'Kanske inte. Men många företag tror att de är på väg rätt väg — tills en CTO hittar risker eller ineffektiviteter de inte såg. En CTO kan ofta spara ofta gånger sin kostnad.',
  },
];

export default function NarBehoverDu() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="När behöver du en inhyrd CTO"
        description="Signaler och scenarion som visar när ditt företag behöver en CTO från Axuvo"
        url="https://axuvo.se/cto-as-a-service/nar-behover-du"
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Hem',
            url: 'https://axuvo.se',
          },
          {
            name: 'CTO as a Service',
            url: 'https://axuvo.se/cto-as-a-service',
          },
          {
            name: 'När behöver du',
            url: 'https://axuvo.se/cto-as-a-service/nar-behover-du',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="CTO as a Service"
        title="När behöver du en inhyrd CTO?"
        subtitle="Du behöver en CTO om du står inför stora teknikbeslut, saknar teknisk ledning eller behöver en digital plan. Vi hjälper dig bedöma behovet på ett kostnadsfritt möte."
        primaryCta={{
          text: 'Boka möte',
          href: '/kontakt',
        }}
        trustText="Ärlig bedömning • Personligt möte • Ingen bindning"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Three Scenarios */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up" className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
              Tre scenarion
            </h2>
            <p className="text-silver max-w-2xl">
              Känner du igen dig i något av dessa? Det kan vara tid för en CTO.
            </p>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8 hover:border-mint/20 transition-colors duration-200"
              >
                <div className="text-mint mb-4">{scenario.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {scenario.title}
                </h3>
                <p className="text-silver">{scenario.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Signals */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up" className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
              Fem signaler på att du behöver en CTO
            </h2>
            <p className="text-silver max-w-2xl">
              Känner du igen något av detta? Det är oftast ett tecken på att teknisk ledning saknas.
            </p>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {signals.map((signal, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8 hover:border-mint/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-mint mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {signal.title}
                    </h3>
                    <p className="text-silver">{signal.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal variant="fade-up" className="mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/kontakt"
                variant="primary"
                size="lg"
                className="inline-flex items-center gap-2"
              >
                Boka möte <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16">
        <ScrollReveal variant="fade-up">
          <FAQ items={ctoFaq} sectionTitle="Vanliga frågor om CTO-behov" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Osäker om du behöver en CTO?"
        description="Vi hjälper gärna dig bedöma behovet. Boka ett gratis möte där vi lyssnar och ger en ärlig bedömning — utan försäljningspress."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
