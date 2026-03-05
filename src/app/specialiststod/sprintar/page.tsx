import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import {
  Zap,
  Rocket,
  CheckCircle,
  Users,
  Target,
  DollarSign,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transformation Sprintar — Fast mål, tydlig tidsbox, avgränsat resultat',
  description:
    'Intensiva arbetsperioder med klara leverabler. Vi löser ditt problem på en eller två veckor till fast pris.',
  keywords:
    'sprintar, transformation, fokuserat arbete, fastpris, Sverige',
  openGraph: {
    title: 'Transformation Sprintar — Fast mål, tydlig tidsbox, avgränsat resultat',
    description:
      'Intensiva arbetsperioder med klara leverabler. Vi löser ditt problem på en eller två veckor.',
    type: 'website',
    url: 'https://axuvo.se/specialiststod/sprintar',
  },
};

interface SprintPhase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SprintUseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const sprintPhases: SprintPhase[] = [
  {
    title: 'Kickoff',
    description: 'Vi startar med ett tydligt möte. Vad är målet, vilka är gränserna, vad ska levereras?',
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: 'Fokuserat arbete',
    description: 'Vi jobbar intensivt under en fastställd period — ofta 1–4 veckor. Du får dagliga uppdateringar.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: 'Leverans',
    description: 'Slutförd kod, granskning, dokumentation eller utbildning. Allt blir levererat enligt plan.',
    icon: <CheckCircle className="w-8 h-8" />,
  },
];

const useCases: SprintUseCase[] = [
  {
    title: 'Ny feature',
    description: 'En ny funktion eller modul behöver implementeras snabbt och säkert.',
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: 'Systemintegration',
    description: 'Två system behöver kopplas ihop. Samma-säkert-snabbt-tillvagafordonat.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: 'Prestandaoptimering',
    description: 'Systemet är långsamt. Vi hitta flaskhalsar, optimerar och gör det snabbare.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: 'Migrering',
    description: 'Flytta från ett system till ett annat. Vi hanterar planering, test och genomförande.',
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: 'Kodgranskning',
    description: 'Second opinion på din kod. Vi granskar, identifierar risker och ger konkreta förbättringsförslag.',
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    title: 'Säkerhetsaudit',
    description: 'Granskning av säkerhet, infrastruktur och processer. Tydlig rapport med prioriterade åtgärder.',
    icon: <DollarSign className="w-8 h-8" />,
  },
];

const sprintFaq = [
  {
    question: 'Hur fungerar en Transformation Sprint?',
    answer:
      'Vi börjar med ett kickoff-möte för att förstå målet och gränserna. Sedan jobbar vi fokuserat under en fastställd period — ofta 1–4 veckor. Vi levererar konkreta resultat: slutförd kod, granskning, dokumentation eller utbildning. Du får dagliga uppdateringar så du är alltid uppdaterad.',
  },
  {
    question: 'Vad kostar en sprint?',
    answer:
      'Sprintar prissätts till fastpris per uppdrag. Priset beror på omfånget och komplexiteten. Vi ger alltid ett konkret erbjudande innan något åtagande.',
  },
  {
    question: 'Hur snabbt kan ni starta?',
    answer:
      'Ofta samma dag eller nästa dag. Vi håller buffert för akuta behov. Berätta vad du behöver och vi bokar in resursen så fort som möjligt.',
  },
  {
    question: 'Vad händer om vi behöver fortsätta efter sprinten?',
    answer:
      'Inget problem. Vi kan förlänga sprinten eller övergå till ett annat engagemangsupplagg om du behöver längre stöd. Vi är flexibla och anpassar oss efter dina behov.',
  },
  {
    question: 'Kan vi testa resultatet under sprinten?',
    answer:
      'Ja, absolut. Vi har daglig kontakt och levererar ofta delmål som kan testas och itereras på. Du har full insyn i framgången.',
  },
];

export default function Sprintar() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="Transformation Sprintar"
        description="Intensiva arbetsperioder med klara leverabler. Fast mål, tydlig tidsbox, avgränsat resultat."
        url="https://axuvo.se/specialiststod/sprintar"
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Start',
            url: 'https://axuvo.se',
          },
          {
            name: 'Specialiststöd',
            url: 'https://axuvo.se/specialiststod',
          },
          {
            name: 'Sprintar',
            url: 'https://axuvo.se/specialiststod/sprintar',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Specialiststöd"
        title="Fast mål, tydlig tidsbox, avgränsat resultat"
        subtitle="Intensiva arbetsperioder med klara leverabler. Vi kommer in, löser problemet och levererar på plan."
        primaryCta={{
          text: 'Boka sprint',
          href: '/kontakt',
        }}
        trustText="Fokuserat arbete • Fastpris • Dagliga uppdateringar"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* About Sprintar */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Vad är en Transformation Sprint?
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Fokuserat arbete med klara resultat
              </h2>
              <p className="text-lg text-silver">
                En Transformation Sprint är en intensiv arbetsperiod på 1–4 veckor med ett tydligt mål, en fastställd budget och en klar leverabel. Vi kommer in, fokuserar helt på att lösa ditt problem, och levererar på plan. Ingen omkostnad, ingen klassisk bemanning — bara effektivt arbete.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* How it Works */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
                Hur fungerar en sprint?
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sprintPhases.map((phase, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8"
              >
                <div className="text-mint mb-4">{phase.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-silver text-sm">{phase.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Use Cases */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                Vad kan en sprint lösa?
              </h2>
              <p className="text-silver max-w-2xl">
                En sprint är perfekt när du behöver ett tydligt resultat på kort tid.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-lg p-6 border border-white/5"
              >
                <div className="text-mint mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-silver text-sm">{useCase.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Pricing */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
                Prissättning
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="max-w-2xl">
            <div className="bg-navy-mid border border-white/5 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Transformation Sprint
              </h3>
              <p className="text-silver mb-6">
                Sprintar prissätts till fastpris per uppdrag. Kostnaden beror på omfånget, komplexiteten och längden på sprinten.
              </p>
              <div className="bg-navy-light rounded-lg p-6 border border-mint/10 mb-6">
                <p className="text-silver mb-2">Typisk prisbild:</p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span>
                    <span>1-2 veckas sprint: 25 000–60 000 kr</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span>
                    <span>3-4 veckas sprint: 60 000–150 000 kr</span>
                  </li>
                </ul>
              </div>
              <p className="text-silver text-sm">
                Vi ger alltid ett konkret erbjudande baserat på dina behov innan någon åtagande.
              </p>
            </div>
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <ScrollReveal variant="fade-up">
          <FAQ items={sprintFaq} sectionTitle="Vanliga frågor om sprintar" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Behöver du en Transformation Sprint?"
        description="Berätta vad du behöver lösa. Vi analyserar omfånget, ger ett konkret förslag och startar omedelbar."
        ctaText="Boka sprint"
        ctaHref="/kontakt"
      />
    </>
  );
}
