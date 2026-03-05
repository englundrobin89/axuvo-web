import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { SecureByDesign } from '@/components/sections/SecureByDesign';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { Code2, Shield, Zap, CheckCircle, Layers, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Build — Fast startkostnad, full kvalitet | Build Studio',
  description:
    'Fullt bygge av din app, portal eller system. Fast startkostnad, säkerhet inbyggt, produktionsanpassning och reveal-möte med live demo.',
  keywords: [
    'app development',
    'system development',
    'portal development',
    'fast pris',
    'systemutveckling',
    'secure development',
  ],
  openGraph: {
    title: 'The Build — Fast startkostnad, full kvalitet',
    description:
      'Vi bygger din app, portal eller system till fast startkostnad. Säkerhet inbyggt från start.',
    type: 'website',
    locale: 'sv_SE',
  },
};

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const includedFeatures: Feature[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Produktionspreparerad kod',
    description:
      'Vi skriver kod som är förberedd för produktion från dag ett. Testning, dokumentation och best practices är inbyggt.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Säkerhet från start',
    description:
      'Vi implementerar säkerhet i alla lager — autentisering, kryptering, GDPR-compliance och regelbundna säkerhetskontroller.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Riktig data och felhantering',
    description:
      'Systemet jobbar med dina riktiga data från dag ett. Vi hanterar fel, edge cases och undantagssituationer.',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Tester och dokumentation',
    description:
      'Allt är testat. Vi skriver dokumentation så att du förstår systemet och kan vidareutveckla det senare.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Arkitektur och skalning',
    description:
      'Systemet är designat för att växa med din verksamhet. God arkitektur som gör det enkelt att lägga till nya features senare.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Reveal-möte med live demo',
    description:
      'Innan slutleverans träffas vi för en reveal där vi visar systemet live och besvara dina frågor.',
  },
];

const processSteps = [
  {
    title: 'Planering & Design',
    description: 'Vi skapar en detaljerad plan, gör arkitekturskisser och designar användargränssnittet.',
  },
  {
    title: 'Utveckling',
    description: 'Vi bygger systemet i sprintar. Du får regelbundna uppdateringar och kan ge feedback.',
  },
  {
    title: 'Testing & Optimering',
    description: 'Vi testar grundligt, optimerar performance och förbereder för produktion.',
  },
  {
    title: 'Reveal & Lansering',
    description: 'Vi visar systemet live, besvara frågor och hjälper dig ta det i produktion.',
  },
];

const faqItems = [
  {
    question: 'Vad är en "fast startkostnad"?',
    answer:
      'Det betyder att vi ger dig ett totalpris för projektet som inte ändras. Ingen risk för överraskning eller extrabilar. Du vet exakt vad det kostar att bygga din lösning.',
  },
  {
    question: 'Hur bestämmer ni startkostnaden?',
    answer:
      'Baserat på det vi lärde oss under blueprint-mötet. Vi gör en grundlig analys av komplexitet, tidsplan och resursbehov — sedan ger vi dig ett transparent pris.',
  },
  {
    question: 'Vilka tider tar ett bygge?',
    answer:
      'Det varierar mycket beroende på komplexitet. Enkla lösningar tar 2-4 veckor, medel 4-8 veckor, komplexa 8-16 veckor. Vi ger dig en realistisk tidsplan.',
  },
  {
    question: 'Kan vi ändra något under utvecklingen?',
    answer:
      'Ja, men ändringar utanför det ursprungliga scopet kan påverka pris och tidplan. Vi jobbar agilt så du kan ge feedback löpande.',
  },
  {
    question: 'Vem äger koden?',
    answer:
      'Du äger all kod och all data. Vi har en buyout-klausul vilket betyder att du kan köpa ut hela systemet och flytta till en annan leverantör när som helst.',
  },
  {
    question: 'Vad ingår i reveal-mötet?',
    answer:
      'Du ser systemet köra live. Vi demonstrerar alla features, besvarar dina frågor och fixar små justeringar du möjligtvis vill ha före lansering.',
  },
  {
    question: 'Vad händer efter lansering?',
    answer:
      'Efter leverans erbjuder vi förvaltningspaket för drift, support och vidareutveckling. Men det är helt valfritt — du kan flytta vidare om du vill.',
  },
  {
    question: 'Hur håller vi kommunikationen under projektet?',
    answer:
      'Du får regelbundna uppdateringar, veckovisa möten och kan se utvecklingen live i ett internt projekt-dashboard. Du är aldrig långt från oss.',
  },
];

export default function TheBuildPage() {
  return (
    <>
      <ServiceJsonLd
        name="The Build"
        description="Fullt bygge av din app, portal eller system. Fast startkostnad, säkerhet inbyggt och produktionsanpassning."
        url="https://axuvo.se/build-studio/the-build"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Hem', url: 'https://axuvo.se' },
          { name: 'Build Studio', url: 'https://axuvo.se/build-studio' },
          { name: 'The Build', url: 'https://axuvo.se/build-studio/the-build' },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="The Build"
        title="Fast startkostnad, full kvalitet, säkerhet inbyggt"
        subtitle="Vi bygger din app, portal eller system från grunden. Produktionspreparerad kod, testning, dokumentation och en reveal-möte där vi visar systemet live."
        primaryCta={{
          text: 'Boka blueprint-möte',
          href: '/kontakt',
        }}
        secondaryCta={{
          text: 'Läs mer om vad vi bygger',
          href: '/build-studio/idekatalog',
        }}
        trustText="Fast pris • Säkert bygge • Reveal med live demo • Du äger koden"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* What is The Build Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Vad är The Build?
              </h2>
              <p className="text-lg text-silver mb-6">
                The Build är det skarpa bygget av din lösning. Vi bygger produktionspreparerad kod
                med full säkerhet, testning och dokumentation från dag ett. Det handlar inte bara om att
                få något som fungerar — det handlar om att bygga något som är säkert, väl arkitekturerat
                och redo för produktion. Du får en reveal-möte där vi visar systemet live innan
                lansering.
              </p>
              <Button
                variant="secondary"
                size="md"
                as="link"
                href="/build-studio/blueprint"
              >
                Börja med ett blueprint-möte
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* What's Included Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
              Vad ingår i The Build
            </h2>
            <p className="text-silver text-center max-w-xl mx-auto mb-12">
              Vi bygger inte bara något som fungerar — vi bygger något som är säkert, väl testat och
              redo för produktion.
            </p>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-lg p-8 border border-white/5 hover:border-mint/20 transition-colors duration-200"
              >
                <div className="text-mint mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-silver text-sm">{feature.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Process Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
              Byggprocessen
            </h2>
            <p className="text-silver text-center max-w-xl mx-auto mb-12">
              Från planering till lansering — transparent och strukturerad.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-navy-mid rounded-lg p-8 border border-white/5 relative"
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-mint rounded-full flex items-center justify-center font-semibold text-midnight">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 mt-2">{step.title}</h3>
                  <p className="text-silver text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Reveal Meeting Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-white mb-6">Reveal-möte med live demo</h2>
              <p className="text-lg text-silver mb-8">
                Innan slutleverans träffas vi för en reveal. Du ser systemet köra live för första
                gången. Vi demonstrerar alla features, förklarar hur det fungerar och besvara alla
                dina frågor.
              </p>
              <div className="bg-navy-mid rounded-lg p-8 border border-mint/20">
                <h3 className="text-xl font-semibold text-white mb-4">Vad händer på reveal-mötet?</h3>
                <ul className="space-y-3 text-silver">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span>
                      Vi visar systemet live och går igenom alla features en för en.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span>
                      Du kan testa själv och ge feedback på användargränssnittet.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span>
                      Vi diskuterar eventuella justeringar före lansering.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span>
                      Vi förbereder för lansering och sätter ett slutdatum.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Secure by Design */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <ScrollReveal variant="fade-up">
          <SecureByDesign title="Säkerhet är inbyggt i varje fas" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <FAQ
              items={faqItems}
              sectionTitle="Vanliga frågor om The Build"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Redo att bygga?
              </h2>
              <p className="text-lg text-silver mb-8">
                Börja med ett gratis blueprint-möte. Vi förstår dina behov och ger dig en prototyp
                inom 48 timmar. Sedan ger vi dig en fast offert för The Build.
              </p>
              <Button
                variant="primary"
                size="lg"
                as="link"
                href="/kontakt"
              >
                Boka blueprint-möte
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Vi är redo att bygga nästa grej åt dig"
        description="Börja enkelt med ett gratis blueprint-möte och se vad vi kan göra åt dig."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
