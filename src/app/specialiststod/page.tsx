import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import {
  Lightbulb,
  Code,
  Zap,
  Users,
  CheckCircle,
  GitBranch,
  Shield,
  BookOpen,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Specialiststöd — Spetskompetens som flyttar nålen',
  description:
    'Riktad experthjälp för din utveckling. Sprint-stöd, kodgranskning, säkerhetskonsultation och utbildning från erfarna specialister.',
  keywords:
    'specialiststöd, experthjälp, sprintar, kodgranskning, utbildning, Sverige',
  openGraph: {
    title: 'Specialiststöd — Spetskompetens som flyttar nålen',
    description:
      'Riktad experthjälp för din utveckling. Sprint-stöd, kodgranskning, säkerhetskonsultation och utbildning.',
    type: 'website',
    url: 'https://axuvo.se/specialiststod',
  },
};

interface SpecialistRole {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const specialistRoles: SpecialistRole[] = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Solution Architect',
    description:
      'Systemdesign, arkitektur och långsiktig planering för skalbar teknisk lösning.',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Utvecklare',
    description:
      'Erfaren fullstack-utvecklare som kan stärka ditt team eller driva projekt själv.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Processexpert',
    description:
      'Workflow-optimering och automation för att spara tid och minska felkällor.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'UX-specialist',
    description:
      'Design och användarupplevelse som gör dina produkter enkla och intuitiva.',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Rådgivare',
    description:
      'Snabbt beslutsstöd inför stora val — teknik, verktyg, strategi eller budget.',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Utbildare',
    description:
      'Hands-on träning så att ditt team blir självständigt med ny teknik eller metod.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'QA-granskare',
    description:
      'Independent testing och säkerhetsgranskning av kod, arkitektur och processer.',
  },
];

interface SpecialistService {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: SpecialistService[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Sprintar',
    description:
      'Fast mål, tydlig tidsbox, avgränsat resultat. Vi kommer in, löser problemet och sticker.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'QA och audits',
    description:
      'Second opinion på kod, arkitektur, säkerhet, upphandling eller infrastruktur.',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Utbildning',
    description:
      'Hjälp team komma igång med ny teknik, metod eller tool. Praktisk träning med resultat.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Rådgivning',
    description:
      'Snabbt beslutsstöd inför stora teknikbeslut, leverantörval eller strategiska vägar.',
  },
];

const specialistFaq = [
  {
    question: 'Hur fungerar en specialist-sprint?',
    answer:
      'Vi börjar med ett kickoff-möte för att förstå målet. Sedan jobbar vi fokuserat under en fastställd period — ofta 1–4 veckor. Vi levererar konkreta resultat: slutförd kod, granskning, dokumentation eller utbildning. Vi rapporterar varje dag så du är alltid uppdaterad.',
  },
  {
    question: 'Kan vi få en specialist långsiktigt?',
    answer:
      'Ja. Vi kan anpassa allt från enstaka dagar per vecka till fullständig bemanning. Berätta vad du behöver och vi hittar rätt specialist och modell för dig.',
  },
  {
    question: 'Vad kostar specialiststöd?',
    answer:
      'Löpande resurser kostar 1 300–1 600 kr/h beroende på specialisering. Transformation Sprintar är fastpris per uppdrag. Vi ger alltid ett konkret erbjudande innan något åtagande.',
  },
  {
    question: 'Hur snabbt kan ni komma igång?',
    answer:
      'Ofta samma dag eller nästa dag. Vi håller buffert för akuta behov. Berätta vad du behöver och vi bokar in resursen så fort som möjligt.',
  },
];

export default function Specialiststod() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="Specialiststöd"
        description="Spetskompetens för sprint, granskning, utbildning och rådgivning"
        url="https://axuvo.se/specialiststod"
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
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Specialiststöd"
        title="Riktat stöd som ger resultat — inte klassisk bemanning"
        subtitle="Spetskompetens när du behöver den. Snabbt, flexibelt och resultatfokuserat stöd för ditt team och dina projekt."
        primaryCta={{
          text: 'Boka möte om specialiststöd',
          href: '/kontakt',
        }}
        trustText="Erfarna specialister • Flexibel engagemangsmodell • Resultat på dagar"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* What is Specialist Support */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <div className="max-w-3xl">
            <Badge className="mb-4">
              Vad är specialiststöd?
            </Badge>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
              Spetskompetens när du behöver den
            </h2>
            <p className="text-lg text-silver">
              Du har ett team som gör bra saker, men ibland behöver du extra firepower eller en second opinion. Vi erbjuder riktad experthjälp — inte klassisk bemanning, utan sprintar, granskning, utbildning och rådgivning från erfarna specialister.
            </p>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Specialist Roles */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
              Roller vi tillför
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialistRoles.map((role, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8 hover:border-mint/20 transition-colors duration-200"
              >
                <div className="text-mint mb-4">{role.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {role.title}
                </h3>
                <p className="text-silver text-sm">{role.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Services */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <div className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
              Tjänster
            </h2>
            <p className="text-silver max-w-2xl">
              Vi erbjuder flexibla engagemangsmodeller beroende på dina behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8"
              >
                <div className="text-mint mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-silver">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Pricing */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
              Prissättning
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Löpande Resurs */}
            <div className="bg-navy-mid border border-white/5 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Löpande resurs
              </h3>
              <p className="text-silver mb-6">
                Betala per timme för sprintöversättare, Code Review, arkitekturkonsultation eller implementering.
              </p>
              <div className="mb-8">
                <span className="text-3xl font-heading font-semibold text-white">
                  1 300–1 600
                </span>
                <span className="text-silver ml-2">kr/h</span>
              </div>
              <Button
                variant="secondary"
                size="md"
                as="link"
                href="/kontakt"
                className="w-full"
              >
                Boka specialist
              </Button>
            </div>

            {/* Transformation Sprint */}
            <div className="bg-navy-mid border border-white/5 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Transformation Sprint
              </h3>
              <p className="text-silver mb-6">
                Fast pris för ett avgränsat projekt — granskning, utbildning, implementering eller optimering.
              </p>
              <div className="mb-8">
                <span className="text-3xl font-heading font-semibold text-white">
                  Fastpris
                </span>
                <span className="text-silver ml-2">per uppdrag</span>
              </div>
              <Button
                variant="secondary"
                size="md"
                as="link"
                href="/kontakt"
                className="w-full"
              >
                Berätta om uppdraget
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <FAQ items={specialistFaq} sectionTitle="Vanliga frågor om specialiststöd" />
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Behöver du specialiststöd?"
        description="Berätta vad du behöver — en sprint, en granskning, utbildning eller rådgivning. Vi bokar rätt specialist och börjar omedelbar."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
