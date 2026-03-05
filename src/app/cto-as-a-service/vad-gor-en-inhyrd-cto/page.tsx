import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import {
  Target,
  Cpu,
  Lock,
  Users,
  Compass,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vad gör en inhyrd CTO? — Roller och ansvar',
  description:
    'Lär dig vad en CTO från Axuvo gör. Från teknikstrategi till teamledning — helhetsansvar för din digitala framtid.',
  keywords:
    'CTO, teknisk ledare, teknikstrategi, digital ledning, arkitektur, säkerhet, Sverige',
  openGraph: {
    title: 'Vad gör en inhyrd CTO? — Roller och ansvar',
    description:
      'En CTO från Axuvo tar helhetsansvar för teknik, digitalisering och riktning.',
    type: 'website',
    url: 'https://axuvo.se/cto-as-a-service/vad-gor-en-inhyrd-cto',
  },
};

interface ResponsibilityArea {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const responsibilityAreas: ResponsibilityArea[] = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Teknikstrategi',
    description: 'Vision och färdplan för din teknikstapel',
    details: [
      'Långsiktig strategi för dina teknikbeslut',
      'Anpassning till affärsmål',
      'Moderna och framtidssäkra lösningar',
    ],
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Arkitektur & infrastruktur',
    description: 'Säker, skalbar och långsiktig teknikstapel',
    details: [
      'Systemdesign som växer med dig',
      'Molnstrategi och infrastruktur',
      'Integration mellan system',
    ],
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Säkerhet',
    description: 'Skydd för data och verksamhet',
    details: [
      'Säkerhetspolicy och bästa praxis',
      'Risk- och sårbarhetsanalys',
      'Compliance och reglerkrav',
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Leverantörshantering',
    description: 'Rätt partners för rätt arbete',
    details: [
      'Utvärdering och urval av leverantörer',
      'Avtalsförhandling och villkor',
      'Löpande relationshantering',
    ],
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: 'Teamledning',
    description: 'Inspiration och riktning för utveckling',
    details: [
      'Mentorskap och utveckling',
      'Kodkvalitet och bästa praxis',
      'Kultur för kontinuerlig förbättring',
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Digital plan',
    description: 'Konkret färdplan för digitalisering',
    details: [
      'Nulägesanalys och prioritering',
      'Mål och milstolpar',
      'Förändringsledning och adoption',
    ],
  },
];

const ctoFaq = [
  {
    question: 'Är en CTO samma sak som en projektledare?',
    answer:
      'Nej, helt olika roller. En CTO ger strategisk riktning och tar helhetsansvar för teknik och affär. En projektledare hanterar schema och resurser för ett specifikt projekt. Vi complementerar varandra.',
  },
  {
    question: 'Kan en CTO säga nej till felköp?',
    answer:
      'Ja, det är en av våra viktigaste uppgifter. En erfaren CTO ser risker som andra missar — dyr teknik som inte löser ditt problem, inlåsningseffekter eller lösningar som inte passar din skala. Vi sparar ofta mycket pengar bara genom att säga rätt nej.',
  },
  {
    question: 'Vad är "helhetsansvar för teknik"?',
    answer:
      'Det betyder att CTO:n ser hela bilden — inte bara en app, utan alla system, integrationer, infrastruktur, säkerhet och människor. Alla teknikbeslut vägs mot affärsvisionen. Det skapar ordning och effektivitet.',
  },
  {
    question: 'Behöver vi en CTO om vi bygger med en byrå?',
    answer:
      'Ofta ja. En byrå bygger det du ber dem om. En CTO säkerställer att det du ber om är rätt från början, att det passar din långsiktiga vision och att ni inte låser er fast i dåliga avtal eller teknik.',
  },
  {
    question: 'Kan CTO:n också leda utvecklingen?',
    answer:
      'Det beror på nivå. Vår Advisor och Strategist fokuserar på riktning och strategi. Vår Transformer kan ta hands-on ansvar för utveckling och leda direkt. Du väljer nivå baserat på dina behov.',
  },
];

export default function VadGorEnInhyrdCTO() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="Vad gör en inhyrd CTO"
        description="Roller, ansvar och uppgifter för en CTO från Axuvo"
        url="https://axuvo.se/cto-as-a-service/vad-gor-en-inhyrd-cto"
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
            name: 'Vad gör en inhyrd CTO',
            url: 'https://axuvo.se/cto-as-a-service/vad-gor-en-inhyrd-cto',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="CTO as a Service"
        title="Vad gör en inhyrd CTO?"
        subtitle="En CTO från Axuvo tar helhetsansvar för teknik, digitalisering, infrastruktur, leverantörer och riktning. Du får en person att lita på som ser helheten."
        primaryCta={{
          text: 'Boka möte',
          href: '/kontakt',
        }}
        trustText="Praktiserande teknolog med spetskompetens • Affärsförståelse • Resultatfokuserad"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Why CTO Matters */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                En person som ser helheten
              </h2>
              <p className="text-lg text-silver mb-4">
                Många företag har utvecklare, arkitekter och projektledare. Men vem ser helheten? Vem säkerställer att alla teknikbeslut tillsammans skapar en sammanhängande, långsiktig strategi?
              </p>
              <p className="text-lg text-silver">
                Det är CTO:ns roll. En erfaren CTO ser kopplingarna, förhindrar felköp och ger dig riktning. Du får någon att lita på — en person som både förstår tekniken och din affär.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Responsibility Areas */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up" className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
              Sex ansvarsområden
            </h2>
            <p className="text-silver max-w-2xl">
              En CTO från Axuvo ansvarar för dessa sex områden — tillsammans skapar de ordning, säkerhet och framåtgång i din teknikorganisation.
            </p>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {responsibilityAreas.map((area, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8 hover:border-mint/20 transition-colors duration-200"
              >
                <div className="text-mint mb-4">{area.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-silver text-sm mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                      <span className="text-silver text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Not Management Consultants */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Praktiserande teknologer — inte managementkonsulter
              </h2>
              <p className="text-lg text-silver mb-4">
                Vi säljer inte ramverk, processverktyg eller teorier. Vi erbjuder erfarna teknologer med djup affärskompetens.
              </p>
              <p className="text-lg text-silver mb-4">
                Vår CTO förstår kod, arkitektur och infrastruktur. Men den förstår också din affär, dina kunder och din vision. Vi tar ansvar för resultatet — inte för att presentera snygga slides.
              </p>
              <p className="text-lg text-silver">
                Det gör skillnad. Stora konsultbolag säljer timmar. Vi säljer resultat. Därför tjänar vi mest på att lösa ditt problem snabbt och väl.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16">
        <ScrollReveal variant="fade-up">
          <FAQ items={ctoFaq} sectionTitle="Vanliga frågor om en inhyrd CTO" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Redo för en inhyrd CTO?"
        description="Boka ett kostnadsfritt möte och berätta om era behov och utmaningar. Vi återkommer inom 24 timmar med ett konkret förslag."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
