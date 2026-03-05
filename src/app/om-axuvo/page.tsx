import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { SecureByDesign } from '@/components/sections/SecureByDesign';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import {
  Lightbulb,
  Users,
  Zap,
  Target,
  Shield,
  Compass,
  Code,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Om Axuvo — Vi gör kraftfull teknik tillgänglig',
  description:
    'Vi bygger appar, system och transformationer för svenska företag. Teknologi som löser verkliga problem.',
  keywords:
    'om Axuvo, vision, värderingar, teknologi, Sverige',
  openGraph: {
    title: 'Om Axuvo — Vi gör kraftfull teknik tillgänglig',
    description:
      'Vi bygger appar, system och transformationer för svenska företag.',
    type: 'website',
    url: 'https://axuvo.se/om-axuvo',
  },
};

interface PrincipleCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceArea {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Differentiator {
  title: string;
  subtitle: string;
  description: string;
}

const principles: PrincipleCard[] = [
  {
    title: 'Tydlig',
    description: 'Vi kommunicerar rent ut. Ingen krångel, ingen buzzword-bingo — bara rakt svar.',
    icon: <Compass className="w-8 h-8" />,
  },
  {
    title: 'Affärsnära',
    description: 'Vi förstår inte bara teknologi — vi förstår din affär. Vi löser problem, inte bara skriver kod.',
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: 'Trygg',
    description: 'Säkerhet, dataskydd och stabilitet är inbyggt från dag ett. Vi tar ansvar för vad vi bygger.',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: 'Rak',
    description: 'Vi säger nei när något inte är en bra idé. Vi tjänar på att lösa ditt problem, inte förlänga arbetet.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: 'Konkret',
    description: 'Vi levererar resultat, inte processer. Du ser vad du får innan du bestämmer dig för att investera.',
    icon: <CheckCircle className="w-8 h-8" />,
  },
];

const whatWeDo: ServiceArea[] = [
  {
    title: 'Bygger',
    description: 'Vi skapar appar, portaler och system från idé till drift. Fast pris, tydlig process, resultat innan du investerar för mycket.',
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: 'Leder',
    description: 'Vi fungerar som inhyrd CTO eller spetskompetens. Vi ger teknisk riktning och hjälper dina team att växa.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: 'Förstärker',
    description: 'Vi stöder med QA, audits, utbildning och rådgivning. Vi gör dina befintliga satsningar bättre och säkrare.',
    icon: <Lightbulb className="w-8 h-8" />,
  },
];

const differentiators: Differentiator[] = [
  {
    title: 'vs Traditionella byråer',
    subtitle: 'Snabbare och billigare',
    description: 'Samma person som förstår affären bygger lösningen. Ingen overhead, ingen förstärkning över flera nivåer. Du får direktkontakt med den person som gör jobbet.',
  },
  {
    title: 'vs AI-bolag',
    subtitle: 'Vi lovar inte magi',
    description: 'Vi använder moderna verktyg, men vi bygger testad, säker kod. Inga löften om att AI löser allt — bara hårt arbete och goda resultat.',
  },
  {
    title: 'vs Konsultuthyrning',
    subtitle: 'Vi säljer resultat, inte timmar',
    description: 'Vår incentivstruktur är helt olika. Vi tjänar mer på att lösa ditt problem snabbt än på att öka timpengarna.',
  },
  {
    title: 'vs Frilansare',
    subtitle: 'Processer, säkerhet och förvaltning',
    description: 'Vi är en organisation med processer, kvalitetssäkring och långsiktigt ansvar. Du kan förlita dig på att vi finns kvar och kan stötta.',
  },
];

export default function OmAxuvo() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="Om Axuvo"
        description="Vi gör kraftfull teknik tillgänglig för svenska företag genom att bygga, leda och förstärka."
        url="https://axuvo.se/om-axuvo"
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Start',
            url: 'https://axuvo.se',
          },
          {
            name: 'Om Axuvo',
            url: 'https://axuvo.se/om-axuvo',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Om Axuvo"
        title="Vi gör kraftfull teknik tillgänglig"
        subtitle="Teknologi skapar möjligheter. Vi gör den tillgänglig för små och stora företag som vill göra mer digitalt."
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Our Why */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Varför Axuvo finns
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Stänga gapet mellan möjligheter och verklighet
              </h2>
              <p className="text-lg text-silver mb-6">
                Kraftfull teknik finns överallt — men de flesta företag och människor kan inte ta tillvara den. Dels för att det är svårt att navigera, dels för att det är dyrt, dels för att man inte förstår helt vad man behöver.
              </p>
              <p className="text-lg text-silver">
                Vi startade Axuvo för att stänga det gapet. För att göra teknik som fungerar tillgänglig för svenska företag och människor — oavsett storlek eller bransch.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* What We Do */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
                Vad Axuvo gör
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeDo.map((area, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8"
              >
                <div className="text-mint mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-silver">{area.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Our Principles */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                Våra principer
              </h2>
              <p className="text-silver max-w-2xl">
                Allt vi gör styrs av dessa fem värderingar. De påverkar hur vi jobbar, vilka uppdrag vi tar och hur vi kommunicerar.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-lg p-6 border border-white/5"
              >
                <div className="text-mint mb-4">{principle.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-silver text-sm">{principle.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Secure by Design */}
      <section className="py-12 lg:py-16">
        <ScrollReveal variant="fade-up">
          <SecureByDesign title="Säkerhet är inbyggt" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Team */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Teamet
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Driven av två co-founders med hybridprofiler
              </h2>
              <p className="text-lg text-silver mb-6">
                Axuvo startades av två tekniker som båda förstår både kod och affär. Vi är inte rent teknik-nördar och inte heller rent affärsfolk — vi är båda och inget av dem.
              </p>
              <p className="text-silver">
                Vi tror på att små team löser problem snabbare än stora. Vi arbetar flexibelt med partners och specialister när vi behöver firepower, men kärnteamet håller sig smalt och agilt.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Why Axuvo */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
                Varför välja Axuvo?
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="space-y-8">
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-mint font-semibold text-sm mb-3">{diff.subtitle}</p>
                <p className="text-silver">{diff.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Vill du jobba tillsammans?"
        description="Vi är alltid intresserade av att höra från företag och människor som vill göra något coolt med teknik. Berätta din idé."
        ctaText="Boka ett möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
