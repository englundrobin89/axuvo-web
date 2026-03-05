import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { PricingTable } from '@/components/sections/PricingTable';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from '@/lib/json-ld';
import { RelatedArticles } from '@/components/sections/RelatedArticles';
import { CTORadar } from '@/components/visuals/CTORadar';
import { getArticlesByCategory } from '@/data/articles';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import {
  Target,
  Zap,
  Users,
  TrendingUp,
  Compass,
  Cpu,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CTO as a Service — Tekniskt ledarskap utan anställning',
  description:
    'Inhyrd CTO för teknisk ledarskap, digital strategi och rätta teknikbeslut. Från strategisk rådgivning till operativt ansvar.',
  keywords:
    'CTO, teknisk ledare, digital strategi, teknisk rådgivning, CTO as a Service, Sverige',
  openGraph: {
    title: 'CTO as a Service — Tekniskt ledarskap utan anställning',
    description:
      'Inhyrd CTO för teknisk ledarskap, digital strategi och rätta teknikbeslut.',
    type: 'website',
    url: 'https://axuvo.se/cto-as-a-service',
  },
};

interface CTOService {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ctoServices: CTOService[] = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Helhetsansvar för teknik',
    description:
      'Vi ser hela bilden och säkerställer att alla teknikbeslut stödjer din affärsvisio.',
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: 'Digital plan och riktning',
    description:
      'Tydlig färdplan för din digitaliseringströja och en klar vision för framtiden.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Navigera leverantörer och verktyg',
    description:
      'Vi hjälper dig välja rätt verktyg och partner för dina behov och budget.',
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: 'Säga nej till felköp',
    description:
      'Spara tid och pengar genom att undvika dyra misstag och misslyckat teknikval.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Leda digitaliseringen',
    description:
      'Strukturerad förändringsledning så att hela organisationen växer tillsammans.',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Infrastruktur och arkitektur',
    description:
      'Säker, skalbar och långsiktig teknikstapel som växer med din verksamhet.',
  },
];

interface CTOScenario {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const scenarios: CTOScenario[] = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Du står inför ett stort teknikvägval',
    description:
      'Ska vi migrera till molnet? Bygga eget eller köpa? Vi hjälper dig väga alternativ och fatta rätt beslut baserat på din affär.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Du saknar en teknisk ledare som ser helheten',
    description:
      'Ditt team gör bra saker men behöver någon som ger riktning, strategisk vägledning och säkerställer att allt hänger ihop.',
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Du behöver en digital plan men vet inte var du ska börja',
    description:
      'Vi gör en konkret digital färdplan som visar vägen från dagens läge till önskad framtid — steg för steg.',
  },
];

const ctoPricing = [
  {
    name: 'Advisor',
    price: '14 500 kr/mån',
    description: '~1 dag/månad',
    features: [
      'Strategisk rådgivning',
      'Teknikutvärdering',
      'Leverantörsöversyn',
      'Månatlig avstämning',
    ],
    highlighted: false,
  },
  {
    name: 'Strategist',
    price: '38 500 kr/mån',
    description: '~1 dag/vecka',
    features: [
      'Allt i Advisor',
      'Digital roadmap',
      'Teamledning',
      'Veckovisa sessioner',
    ],
    highlighted: true,
  },
  {
    name: 'Transformer',
    price: '75–95 k kr/mån',
    description: '~2–3 dagar/vecka',
    features: [
      'Allt i Strategist',
      'Operativt ansvar',
      'Hands-on ledarskap',
      'Förändringsledning',
    ],
    highlighted: false,
  },
];

const ctoFaq = [
  {
    question: 'Behöver vi CTO om vi redan har IT-avdelning?',
    answer:
      'Absolut. En CTO ser helheten och ger strategisk riktning. Din IT-avdelning fokuserar på drift och underhåll. En CTO kompletterar dem genom att sätta mål, välja riktning och säkerställa att teknikbeslut stödjer affären.',
  },
  {
    question: 'Hur snabbt kan en CTO komma igång?',
    answer:
      'Mycket snabbt. Vi startar med ett möte där vi förstår er situation. Sedan sätter vi igång — första veckan fokuseras på att förstå era behov och utmaning, andra veckan presenterar vi en initial lägesbild och rekommendationer.',
  },
  {
    question: 'Vad skiljer er från managementkonsulter?',
    answer:
      'Vi är praktiserande tekniker med deep affärskompetens. Vi förstår både koden och verksamheten. Vi säljer inte processa eller ramverk — vi ger dig en erfaren teknisk ledare som tar ansvar för resultatet.',
  },
  {
    question: 'Kan CTO:n hjälpa oss upphandla?',
    answer:
      'Ja, det är en av våra styrkor. Vi hjälper dig att formulera behov, utvärdera leverantörer, förhandla villkor och säkerställa att ni får rätt lösning för rätt pris.',
  },
  {
    question: 'Hur mäter vi om CTO-engagemanget lönar sig?',
    answer:
      'Vi sätter tydliga målmätare från dag ett — bättre teknikbeslut, snabbare utveckling, lägre kostnader eller minskad risk. Vi rapporterar regelbundet mot dessa så att ni alltid vet värdet.',
  },
];

export default function CTOAsAService() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="CTO as a Service"
        description="Teknisk ledarskap, digital strategi och rätta teknikbeslut utan anställning"
        url="https://axuvo.se/cto-as-a-service"
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Start',
            url: 'https://axuvo.se',
          },
          {
            name: 'CTO as a Service',
            url: 'https://axuvo.se/cto-as-a-service',
          },
        ]}
      />
      <FAQPageJsonLd items={ctoFaq} />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="CTO as a Service"
        title="En teknisk ledare du kan lita på — utan att anställa"
        subtitle="Axuvo erbjuder tekniskt ledarskap på deltid. En inhyrd CTO hjälper ditt bolag fatta rätt teknikbeslut, lägga digital plan och navigera framåt."
        primaryCta={{
          text: 'Boka möte om CTO as a Service',
          href: '/kontakt',
        }}
        trustText="Börja inom dagen • Ingen långsiktig bindning • Resultatfokuserat"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* What is CTO as a Service */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Vad är CTO as a Service?
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Teknisk ledarskap utan att anställa
              </h2>
              <p className="text-lg text-silver">
                Axuvo erbjuder tekniskt ledarskap på deltid. En inhyrd CTO hjälper ditt bolag fatta rätt teknikbeslut, lägga digital plan och navigera framåt. Du får en erfaren teknisk ledare som förstår både kod och affär — utan kostnaden för heltidsanställning.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* What a CTO Does */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <ScrollReveal variant="slide-left">
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                  Vad en inhyrd CTO gör
                </h2>
                <p className="text-silver">
                  En CTO från Axuvo tar helhetsansvar för teknik, digitalisering och riktning. Sex ansvarsområden — ett tydligt uppdrag.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-right" className="hidden lg:block">
              <CTORadar />
            </ScrollReveal>
          </div>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ctoServices.map((service, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8 hover:border-mint/20 transition-colors duration-200"
              >
                <div className="text-mint mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-silver">{service.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* When You Need a CTO */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                När behöver du en inhyrd CTO?
              </h2>
              <p className="text-silver max-w-2xl">
                Ibland räcker det inte med ett utvecklarteam. Du behöver någon som ser helheten.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8"
              >
                <div className="text-mint mb-4">{scenario.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {scenario.title}
                </h3>
                <p className="text-silver text-sm">{scenario.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Pricing */}
      <ScrollReveal variant="fade-up">
        <PricingTable packages={ctoPricing} />
      </ScrollReveal>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <ScrollReveal variant="fade-up">
          <FAQ items={ctoFaq} sectionTitle="Vanliga frågor om CTO as a Service" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Related Articles */}
      <RelatedArticles
        articles={[
          ...getArticlesByCategory('cto'),
          ...getArticlesByCategory('strategi'),
        ].slice(0, 3)}
        title="Insikter om teknisk ledning"
        subtitle="Läs mer om när och varför en inhyrd CTO gör skillnad."
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Redo för en inhyrd CTO?"
        description="Boka ett kostnadsfritt möte och berätta om era behov. Vi återkommer inom 24 timmar med ett konkret förslag."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
