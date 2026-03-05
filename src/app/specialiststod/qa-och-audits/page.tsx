import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import {
  Shield,
  CheckCircle,
  Code,
  Lock,
  Zap,
  AlertCircle,
  FileText,
  Eye,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'QA och Audits — Second opinion som sparar tid och pengar',
  description:
    'Independent review av kod, arkitektur, säkerhet och infrastruktur. Tydlig rapport med prioriterade åtgärder.',
  keywords:
    'QA, audit, kodgranskning, säkerhetsrevision, arkitekturkonsultation, Sverige',
  openGraph: {
    title: 'QA och Audits — Second opinion som sparar tid och pengar',
    description:
      'Independent review av kod, arkitektur, säkerhet och infrastruktur.',
    type: 'website',
    url: 'https://axuvo.se/specialiststod/qa-och-audits',
  },
};

interface ReviewArea {
  title: string;
  description: string;
  icon: React.ReactNode;
  focus: string[];
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const reviewAreas: ReviewArea[] = [
  {
    title: 'Kodkvalitet',
    description: 'Vi granskar kod för läsbarhet, testning, standarder och bästa praxis.',
    icon: <Code className="w-8 h-8" />,
    focus: ['Kodstandard', 'Testning', 'Dokumentation', 'Läsbarhet'],
  },
  {
    title: 'Arkitektur',
    description: 'Vi ser på systemets design, scalabilitet, underhållbarhet och tekniska skuld.',
    icon: <Zap className="w-8 h-8" />,
    focus: ['Design patterns', 'Scalabilitet', 'Modulering', 'Dependencies'],
  },
  {
    title: 'Säkerhet',
    description: 'Vi granskar säkerhetsprincipler, autentisering, dataskydd och sårbarheter.',
    icon: <Shield className="w-8 h-8" />,
    focus: ['Autentisering', 'Kryptering', 'Dataskydd', 'Sårbarheter'],
  },
  {
    title: 'Infrastruktur',
    description: 'Vi granskar cloud-setup, servrar, deployment och övervakning.',
    icon: <Lock className="w-8 h-8" />,
    focus: ['Cloud-setup', 'DevOps', 'Monitoring', 'Redundans'],
  },
  {
    title: 'Upphandling',
    description: 'Vi hjälper dig utvärdera leverantörer, verktyg och tjänster.',
    icon: <AlertCircle className="w-8 h-8" />,
    focus: ['Leverantörer', 'Kostnad', 'Features', 'Integrations'],
  },
];

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Briefing',
    description: 'Vi förstår vad du vill ha granskad, dina mål och eventuella problem du redan sett.',
    icon: <Eye className="w-8 h-8" />,
  },
  {
    number: 2,
    title: 'Granskning',
    description: 'Vi analyserar systemet, kodbas, arkitektur och processer noggrant.',
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    number: 3,
    title: 'Rapport',
    description: 'Tydlig rapport med prioriterade åtgärder, konkreta förbättringsförslag och risk-analys.',
    icon: <FileText className="w-8 h-8" />,
  },
];

const auditFaq = [
  {
    question: 'Hur lång tid tar en audit?',
    answer:
      'Det beror på omfattningen. En kodgranskning tar ofta 1–2 veckor. En fullständig arkitektur- och säkerhetsgranskning kan ta 2–4 veckor. Vi ger alltid en tidsuppskattning innan vi startar.',
  },
  {
    question: 'Vad är skillnaden mellan QA och audit?',
    answer:
      'QA fokuserar på funktionalitet och kodkvalitet — fungerar systemet som det ska? En audit är djupare och ser på arkitektur, säkerhet, performance och långsiktig hållbarhet.',
  },
  {
    question: 'Behöver vi ha allt klart för en granskning?',
    answer:
      'Nej, inte nödvändigtvis. Vi kan granska väl-utvecklad kod, halvfärdiga system eller helt nya projekt. Vi anpassar oss efter vad du behöver granskad.',
  },
  {
    question: 'Vad händer när granskningen är klar?',
    answer:
      'Du får en tydlig rapport med fynd, risk-klassificering och konkreta åtgärdsförslag. Vi kan också genomföra en workshop för att diskutera resultaten och nästa steg.',
  },
  {
    question: 'Kan ni hjälpa oss att implementera förbättringarna?',
    answer:
      'Ja, absolut. Vi kan genomföra en Transformation Sprint för att implementera de viktigaste förbättringarna. Det är ofta värdefullt att samma team som gjorde granskningen implementerar lösningarna.',
  },
  {
    question: 'Vad kostar en QA- eller audit?',
    answer:
      'Priset beror på omfånget. En enkel kodgranskning börjar från omkring 15 000 kr. En fullständig arkitektur- och säkerhetsgranskning kan vara 40 000–100 000 kr. Vi ger alltid ett konkret offert.',
  },
];

export default function QAOchAudits() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="QA och Audits"
        description="Independent review av kod, arkitektur, säkerhet och infrastruktur. Second opinion som sparar tid och pengar."
        url="https://axuvo.se/specialiststod/qa-och-audits"
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
            name: 'QA och Audits',
            url: 'https://axuvo.se/specialiststod/qa-och-audits',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Specialiststöd"
        title="Second opinion som sparar tid och pengar"
        subtitle="Independent granskning av kod, arkitektur, säkerhet och infrastruktur. Vi identifierar risker och ger konkreta förbättringsförslag."
        primaryCta={{
          text: 'Boka en granskning',
          href: '/kontakt',
        }}
        trustText="Oberoende review • Tydlig rapport • Prioriterade åtgärder"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* About QA & Audits */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Vad är QA och Audits?
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                En frisk blick på systemet
              </h2>
              <p className="text-lg text-silver">
                Ibland behövs en oberoende bedömning. En second opinion från erfarna ögon som kan säga om systemet håller eller om det finns gömt skuld och risker. Vi granskar kod, arkitektur, säkerhet, infrastruktur eller hela leverantörsekosystemet — och ger dig en tydlig rapport med prioriterade åtgärder.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Review Areas */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                Vad granskar vi?
              </h2>
              <p className="text-silver max-w-2xl">
                Vi kan granska allt från enskilda komponenter till hela systemarkitekturen.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewAreas.map((area, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8"
              >
                <div className="text-mint mb-4">{area.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-silver text-sm mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.focus.map((item, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-mint/10 text-mint rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Process */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
                Processen
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-lg p-8 border border-white/5"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-heading font-semibold text-mint mr-4">
                    {step.number}
                  </span>
                  <div className="text-mint">{step.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-silver text-sm">{step.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Deliverable */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Vad levererar vi?
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Tydlig rapport med prioriterade åtgärder
              </h2>
              <p className="text-silver mb-6">
                Du får en väl-strukturerad rapport som innehåller:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-white">
                  <span className="text-mint mr-3 mt-1">✓</span>
                  <span><strong>Lägesbild:</strong> Vad fungerar bra, vad behöver förbättras</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-mint mr-3 mt-1">✓</span>
                  <span><strong>Risk-klassificering:</strong> Kritisk, hög, medel, låg</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-mint mr-3 mt-1">✓</span>
                  <span><strong>Konkreta åtgärder:</strong> Vad, varför och hur du fixar det</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-mint mr-3 mt-1">✓</span>
                  <span><strong>Tidsuppskattning:</strong> Ungefär hur mycket arbete varje åtgärd kräver</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-mint mr-3 mt-1">✓</span>
                  <span><strong>Workshop:</strong> Vi presenterar resultaten och diskuterar nästa steg</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <ScrollReveal variant="fade-up">
          <FAQ items={auditFaq} sectionTitle="Vanliga frågor om QA och audits" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Behöver du en second opinion?"
        description="Berättar vad du vill ha granskad. Vi analyserar omfattningen och ger ett konkret förslag."
        ctaText="Boka en granskning"
        ctaHref="/kontakt"
      />
    </>
  );
}
