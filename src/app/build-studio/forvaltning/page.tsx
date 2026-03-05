import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { PricingTable } from '@/components/sections/PricingTable';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { Shield, TrendingUp, Zap, Clock, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Förvaltning — Drift, säkerhet och vidareutveckling | Build Studio',
  description:
    'Efter leverans — vi sköter drift, säkerhet, uppdateringar och vidareutveckling. Flexibel månadsmodell med paket från 3 900 kr/mån.',
  keywords: [
    'app maintenance',
    'system maintenance',
    'managed services',
    'drift och support',
    'app support',
    'continuous development',
  ],
  openGraph: {
    title: 'Förvaltning — Drift och vidareutveckling',
    description:
      'Flexibel förvaltning efter leverans. Du äger tryggheten, vi äger ansvaret.',
    type: 'website',
    locale: 'sv_SE',
  },
};

const managementPackages = [
  {
    name: 'Platform Core',
    price: '3 900 kr/mån',
    description: 'Grundläggande drift och support',
    features: [
      'Drift och övervakning 24/7',
      'Säkerhetsuppdateringar',
      'Backup och återställning',
      'Teknisk support',
      'Extra timmar: 1 500 kr/h',
    ],
  },
  {
    name: 'Growth Support',
    price: '9 900 kr/mån',
    description: '4 timmar vidareutveckling inkluderat',
    features: [
      'Allt i Platform Core',
      '4 timmar vidareutveckling/mån',
      'Prioriterad support',
      'Månadliga optimeringar',
      'Extra timmar: 1 350 kr/h',
    ],
    highlighted: true,
  },
  {
    name: 'Active Growth',
    price: '15 900 kr/mån',
    description: '8 timmar vidareutveckling inkluderat',
    features: [
      'Allt i Growth Support',
      '8 timmar vidareutveckling/mån',
      'Proaktiva förbättringsförslag',
      'Performance-optimering',
      'Extra timmar: 1 200 kr/h',
    ],
  },
  {
    name: 'Fractional Team',
    price: '34 900 kr/mån',
    description: '20 timmar vidareutveckling inkluderat',
    features: [
      'Allt i Active Growth',
      '20 timmar vidareutveckling/mån',
      'Dedikerat team',
      'Strategisk utveckling',
      'Extra timmar: 1 150 kr/h',
    ],
  },
];

const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Säkerhet först',
    description:
      'Vi övervakar systemet 24/7, installerar säkerhetspatcher dagligen och gör regelbundna säkerhetskontroller.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Ständig förbättring',
    description:
      'Vi optimerar performance, föreslår nya features och utvecklar systemet enligt dina behov.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Driftövervakning',
    description:
      'Vi övervakar servrar, databaser och prestanda. Om något går ned eller blir långsamt hanterar vi det omedelbar.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Uppdateringar och upgrades',
    description:
      'Vi håller alla bibliotek, ramverk och servrar uppdaterade så att ditt system är säkert och snabbt.',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Buyout-möjlighet',
    description:
      'Du äger koden helt. Du kan köpa ut hela systemet när som helst om du vill flytta till en annan leverantör.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Skalning när du växer',
    description:
      'När din verksamhet växer skalas systemet automatiskt. Vi hanterar infrastruktur och prestanda.',
  },
];

const faqItems = [
  {
    question: 'Vad ingår i förvaltningen?',
    answer:
      'Drift, säkerhet, backup, övervakning och uppdateringar är inbyggt i alla paket. Högre paket ger mer tid för vidareutveckling och nya features.',
  },
  {
    question: 'Vilken paket ska vi välja?',
    answer:
      'Det beror på hur mycket utveckling du behöver. Platform Core räcker om du bara vill ha drift och säkerhet. Growth Support är bra för att få några nya features varje månad. Active Growth eller Fractional Team om du vill bygga mycket nytt.',
  },
  {
    question: 'Kan vi byta paket senare?',
    answer:
      'Ja, absolut. Du kan skala upp eller ned när som helst. Ingen långsiktig bindning.',
  },
  {
    question: 'Vad kostar extra timmar över det inkluderade?',
    answer:
      'Det beror på paket. Från 1 150 kr/h upp till 1 500 kr/h. Ju högre paket du väljer, desto billigare blir extra timmar.',
  },
  {
    question: 'Kan vi köpa ut systemet och gå vidare själva?',
    answer:
      'Ja, det är en av våra styrkor. Du äger all kod och kan köpa ut hela systemet när som helst. Vi hjälper till med övergången.',
  },
  {
    question: 'Hur rapporterar ni på vad ni gjort?',
    answer:
      'Du får en månatlig rapport som visar vad vi gjort, prestandamätningar och förslag på nästa steg.',
  },
  {
    question: 'Vad händer om vi inte behöver förvaltning?',
    answer:
      'Det är helt valfritt. Du kan flytta systemet till en annan leverantör eller sköta det själv. Vi ger dig all dokumentation och tillgång till koden.',
  },
  {
    question: 'Kan vi pausa förvaltningen en månad?',
    answer:
      'Ja, vi är flexibla. Du kan pausa och starta igen när du vill. Inte hela år av bindning.',
  },
];

export default function ForvaltningPage() {
  return (
    <>
      <ServiceJsonLd
        name="Förvaltning"
        description="Drift, säkerhet och vidareutveckling efter leverans. Du äger tryggheten, vi äger ansvaret."
        url="https://axuvo.se/build-studio/forvaltning"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Hem', url: 'https://axuvo.se' },
          { name: 'Build Studio', url: 'https://axuvo.se/build-studio' },
          { name: 'Förvaltning', url: 'https://axuvo.se/build-studio/forvaltning' },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Förvaltning"
        title="Du äger tryggheten, vi äger ansvaret"
        subtitle="Efter leverans går du in i ett flexibelt månadsupplägg. Vi sköter drift, säkerhet, uppdateringar och vidareutveckling. Du fokuserar på din verksamhet."
        primaryCta={{
          text: 'Boka möte',
          href: '/kontakt',
        }}
        secondaryCta={{
          text: 'Se paketpriser',
          href: '#pricing',
        }}
        trustText="Drift 24/7 • Säkerhet inbyggt • Du äger koden • Flexibel binding"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* What is Förvaltning Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Vad är Förvaltning?
              </h2>
              <p className="text-lg text-silver mb-6">
                Förvaltning är det tredje steget i Build Studio-processen. Efter att vi har levererat
                din lösning sköter vi drift, säkerhet, uppdateringar och vidareutveckling. Du behöver
                inte oroa dig för servrar, backups eller säkerhetspatcher. Vi hanterar det. Du fokuserar
                på din verksamhet och vi fokuserar på att hålla systemet säkert, snabbt och aktuellt.
              </p>
              <Button
                variant="secondary"
                size="md"
                as="link"
                href="/kontakt"
              >
                Boka möte
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Benefits Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
              Vad ingår i förvaltningen
            </h2>
            <p className="text-silver text-center max-w-xl mx-auto mb-12">
              Drift, säkerhet och vidareutveckling — allt inbyggt.
            </p>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-lg p-8 border border-white/5 hover:border-mint/20 transition-colors duration-200"
              >
                <div className="text-mint mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-silver text-sm">{benefit.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Pricing Section */}
      <section id="pricing" className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
                Förvaltningspaket
              </h2>
              <p className="text-lg text-silver max-w-2xl mx-auto text-center">
                Välj det paket som passar din tillväxt. Du kan byta paket eller pausa när som helst.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <PricingTable packages={managementPackages} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Additional Info Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-white mb-8">Viktigt att veta om förvaltning</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Du äger koden</h3>
                  <p className="text-silver">
                    Du äger all kod, all data och hela systemet. Du är inte låst till oss.
                    Vi har en buyout-klausul som innebär att du när som helst kan köpa ut systemet
                    helt och flytta till en annan leverantör.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Flexibel binding</h3>
                  <p className="text-silver">
                    Vi erbjuder månad-för-månad-kontrakt. Ingen långsiktig bindning. Du kan pausa eller
                    avsluta när som helst. Vi använder inte låsning — vi vill behålla dig för att du
                    är nöjd med vår service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Möjlighet att utöka</h3>
                  <p className="text-silver">
                    Om du växer och behöver mer resurser är det enkelt att skala upp till ett högre
                    paket. Samma dokumentation, samma team — bara mer utvecklingstimmar per månad.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Drift på världsklass</h3>
                  <p className="text-silver">
                    Vi använder moderna cloud-lösningar (AWS, Azure, Google Cloud) för säkerhet,
                    skalning och prestanda. Vi garanterar 99,9% uptime och övervakar systemet 24/7.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <FAQ
              items={faqItems}
              sectionTitle="Vanliga frågor om förvaltning"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Redo att prata om förvaltning?"
        description="Boka ett möte och vi diskuterar vilket paket som passar din verksamhet bäst."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
