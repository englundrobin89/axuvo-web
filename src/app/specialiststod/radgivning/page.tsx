import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import {
  Lightbulb,
  Compass,
  CheckCircle,
  Users,
  Target,
  AlertCircle,
  Clock,
  DollarSign,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rådgivning — Snabbt beslutsstöd inför stora teknikbeslut',
  description:
    'Oberoende konsultation för teknikval, leverantörsbedömning och strategiska vägar. Från en timme till längre engagemanget.',
  keywords:
    'rådgivning, konsultation, teknikval, arkitektur, strategi, Sverige',
  openGraph: {
    title: 'Rådgivning — Snabbt beslutsstöd inför stora teknikbeslut',
    description:
      'Oberoende rådgivning när du behöver fatta tuffa teknikbeslut.',
    type: 'website',
    url: 'https://axuvo.se/specialiststod/radgivning',
  },
};

interface AdvisoryScenario {
  title: string;
  description: string;
  icon: React.ReactNode;
  typical: string;
}

interface EngagementType {
  title: string;
  duration: string;
  description: string;
  ideal: string;
  icon: React.ReactNode;
}

const scenarios: AdvisoryScenario[] = [
  {
    title: 'Teknikval',
    description: 'Vilken teknik är rätt för ditt projekt? React eller Vue? Monolith eller microservices? Vi väger för- och nackdelar.',
    icon: <Target className="w-8 h-8" />,
    typical: 'Typisk längd: 2–5 timmar',
  },
  {
    title: 'Leverantörsbedömning',
    description: 'Ska du köpa eller bygga eget? Vilken SaaS-lösning är rätt? Vi hjälper dig utvärdera alternativ.',
    icon: <CheckCircle className="w-8 h-8" />,
    typical: 'Typisk längd: 3–8 timmar',
  },
  {
    title: 'Arkitekturbeslut',
    description: 'Hur bör systemet byggas långsiktigt? Vad är rätt arkitektur för dina behov? Vi designar tillsammans.',
    icon: <Lightbulb className="w-8 h-8" />,
    typical: 'Typisk längd: 4–10 timmar',
  },
  {
    title: 'Upphandlingsstöd',
    description: 'Vi hjälper dig formulera krav, utvärdera anbud, förhandla villkor och säkerställa att du får rätt lösning.',
    icon: <DollarSign className="w-8 h-8" />,
    typical: 'Typisk längd: 5–15 timmar',
  },
  {
    title: 'Second opinion',
    description: 'Du funderar på ett beslut men vill ha en oberoende åsikt. Vi granskar dina tankar och ger rakettback.',
    icon: <AlertCircle className="w-8 h-8" />,
    typical: 'Typisk längd: 1–3 timmar',
  },
  {
    title: 'Digital strategi',
    description: 'Vad är din digitaliseringsvision? Var ska du börja? Vi bygger en konkret färdplan tillsammans.',
    icon: <Compass className="w-8 h-8" />,
    typical: 'Typisk längd: 6–15 timmar',
  },
];

const engagementTypes: EngagementType[] = [
  {
    title: 'Brief Session',
    duration: '1–2 timmar',
    description: 'En snabb session för en second opinion eller en enkla fråga. Du får rake svar från en erfaren tekniker.',
    ideal: 'Du behöver snabbt beslutsstöd och vill inte investera mycket tid.',
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: 'Djupare engagemanget',
    duration: '3–10 timmar',
    description: 'Flera möten för att verkligen förstå problemet, utforska alternativ och komma fram till rekommendationer.',
    ideal: 'Det är ett större beslut och du vill grunda det väl.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: 'Projektöversyn',
    duration: '10+ timmar',
    description: 'Längre engagement där vi granskar, utvärderar och ger en komplett handlingsplan.',
    ideal: 'Det är en strategisk satsning och du vill ha fullt värde från rådgivningen.',
    icon: <Lightbulb className="w-8 h-8" />,
  },
];

const advisoryFaq = [
  {
    question: 'Vad kostar rådgivning?',
    answer:
      'Rådgivning kostar 1 300–1 600 kr/h beroende på komplexitet. En enkel brief session kan vara 1 500–3 000 kr. En djupare granskning kan vara 10 000–30 000 kr. Vi ger alltid ett konkret erbjudande innan vi startar.',
  },
  {
    question: 'Hur fungerar en rådgivningssession?',
    answer:
      'Du berättar vad du behöver hjälp med. Vi förstår problemet, ställer frågor, utforskar alternativ och ger konkreta rekommendationer. Allt avslutas med en tydlig sammanfattning och nästa steg.',
  },
  {
    question: 'Kan ni hjälpa även om vi redan har påbörjat något?',
    answer:
      'Ja, absolut. Ibland är det värdefullt att få en second opinion på något som redan är igång. Vi kan bedöma läget och ge rekommendationer för att få på rätt spår.',
  },
  {
    question: 'Är rådgivningen konfidentiell?',
    answer:
      'Ja, naturligtvis. Vad vi diskuterar är helt konfidentiellt. Vi undertecknar NDA om det behövs.',
  },
  {
    question: 'Vad är skillnaden mellan rådgivning och specialiststöd?',
    answer:
      'Rådgivning är mer fokuserad på beslutsstöd och analys — vi hjälper dig tänka igenom ett problem. Specialiststöd är hands-on arbete där vi implementerar eller granskar. Ofta är det värdefullt att kombinera de båda.',
  },
  {
    question: 'Hur snabbt kan vi komma igång?',
    answer:
      'Ofta inom samma dag eller nästa dag. Vi håller buffert för akuta behov. Berätta vad du behöver och vi bokar tid så fort som möjligt.',
  },
];

export default function Radgivning() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="Rådgivning"
        description="Snabbt beslutsstöd inför stora teknikbeslut. Teknikval, leverantörsbedömning, arkitektur och strategi."
        url="https://axuvo.se/specialiststod/radgivning"
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
            name: 'Rådgivning',
            url: 'https://axuvo.se/specialiststod/radgivning',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Specialiststöd"
        title="Snabbt beslutsstöd inför stora teknikbeslut"
        subtitle="En oberoende rådgivare som hjälper dig väga alternativ, formulera krav och fatta rätt val. Från snabba sessioner till djupare granskning."
        primaryCta={{
          text: 'Boka rådgivningsmöte',
          href: '/kontakt',
        }}
        trustText="Oberoende perspektiv • Erfaren rådgivare • Konkreta rekommendationer"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* About Advisory */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Vad är rådgivning?
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Oberoende perspektiv när det gäller
              </h2>
              <p className="text-lg text-silver">
                Ibland behöver du inte en utvecklare eller en chef — du behöver en oberoende rådgivare som förstår tekniken och kan hjälpa dig tänka igenom ett stort beslut. Vi sätter oss in i ditt problem, väger alternativ, identifierar risker och ger dig konkreta rekommendationer.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* When You Need It */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                När behöver du rådgivning?
              </h2>
              <p className="text-silver max-w-2xl">
                Här är några vanliga situationer där en rådgivare gör stor skillnad.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-6"
              >
                <div className="text-mint mb-4">{scenario.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {scenario.title}
                </h3>
                <p className="text-silver text-sm mb-4">{scenario.description}</p>
                <p className="text-mint text-xs italic">{scenario.typical}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Engagement Types */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
                Engagemangsformer
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementTypes.map((type, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-lg p-8 border border-white/5"
              >
                <div className="text-mint mb-4">{type.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {type.title}
                </h3>
                <p className="text-mint text-sm mb-4">{type.duration}</p>
                <p className="text-silver text-sm mb-4">{type.description}</p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-silver text-xs italic">
                    <strong>Perfekt för:</strong> {type.ideal}
                  </p>
                </div>
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
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Prissättning
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Från 1 300 kr/h
              </h2>
              <p className="text-lg text-silver mb-8">
                Rådgivning är prisvärt när du räknar vad ett felaktigt beslut kan kosta. Ofta är en kort rådgivningssession det bästa investerade pengarna du gör.
              </p>

              <div className="space-y-6">
                <div className="bg-navy-mid border border-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Brief Session</h3>
                  <p className="text-mint font-semibold mb-2">1 300–1 600 kr/h</p>
                  <p className="text-silver text-sm">
                    Perfekt för snabb second opinion eller en enkel fråga. Du får rake svar från en erfaren tekniker.
                  </p>
                </div>

                <div className="bg-navy-mid border border-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Djupare granskning</h3>
                  <p className="text-mint font-semibold mb-2">Paketpris: 10 000–30 000 kr</p>
                  <p className="text-silver text-sm">
                    Flera möten för att verkligen förstå problemet, utforska alternativ och ge rekommendationer.
                  </p>
                </div>

                <div className="bg-navy-mid border border-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Längre engagement</h3>
                  <p className="text-mint font-semibold mb-2">Anpassat pris</p>
                  <p className="text-silver text-sm">
                    Komplexa projekt som kräver längre analys och en handlingsplan. Vi ger en konkret offert.
                  </p>
                </div>
              </div>

              <p className="text-silver text-sm mt-8">
                Allt rådgivningsarbete börjar med ett kostnadsfritt introduktionsmöte där vi förstår ditt behov och ger en konkret offert.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <ScrollReveal variant="fade-up">
          <FAQ items={advisoryFaq} sectionTitle="Vanliga frågor om rådgivning" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Behöver du rådgivning?"
        description="Berätta vad du behöver hjälp med. Vi bokar ett introduktionsmöte och ger ett konkret förslag."
        ctaText="Boka rådgivningsmöte"
        ctaHref="/kontakt"
      />
    </>
  );
}
