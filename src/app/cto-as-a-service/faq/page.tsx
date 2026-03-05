import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vanliga frågor om CTO as a Service — Svar på dina funderingar',
  description:
    'Vanliga frågor om CTO as a Service från Axuvo. Svar på frågor om roller, priser, processer och hur det fungerar i praktiken.',
  keywords:
    'CTO, frågor, svar, CTO as a Service, teknisk ledning, Sverige',
  openGraph: {
    title: 'Vanliga frågor om CTO as a Service',
    description:
      'Allt du behöver veta om CTO as a Service från Axuvo. Frågor och svar.',
    type: 'website',
    url: 'https://axuvo.se/cto-as-a-service/faq',
  },
};

const faqItems = [
  {
    question: 'Behöver vi en CTO om vi redan har en IT-avdelning?',
    answer:
      'Ja, ofta. En IT-avdelning fokuserar normalt på drift, support och underhåll. En CTO fokuserar på strategi, teknikval och långsiktig riktning. De complementerar varandra perfekt. IT-avdelningen implementerar och driftar det som CTO:n planerar.',
  },
  {
    question: 'Hur snabbt kan en CTO från Axuvo komma igång?',
    answer:
      'Mycket snabbt. Vi startar med ett möte där vi förstår er situation, utmaningar och mål. Första veckan fokuseras på att analysera er läge. Redan vecka två-tre presenterar vi konkreta rekommendationer och en initial digital roadmap. Värdet märks direkt.',
  },
  {
    question: 'Vad skiljer er från traditionella managementkonsulter?',
    answer:
      'Vi är praktiserande teknologer, inte processexperter. Vi förstår kod, arkitektur och infrastruktur på djupet. Vi säljer inte ramverk eller slides — vi ger dig en erfaren teknisk ledare som tar ansvar för resultatet. Och vi tjänar mest på att lösa ditt problem snabbt, inte på att dra ut engagemanget.',
  },
  {
    question: 'Kan en CTO från Axuvo hjälpa oss med upphandling?',
    answer:
      'Ja, det är en av våra styrkor. Vi hjälper dig formulera exakta behov, utvärdera leverantörer objektivt, förhandla villkor och säkerställa att ni får rätt lösning för rätt pris. Många företag betalar för mycket för system de inte riktigt behöver — vi förhindrar det.',
  },
  {
    question: 'Hur mäter vi om CTO-engagemanget lönar sig?',
    answer:
      'Vi sätter tydliga målmätare från dag ett — bättre teknikbeslut, snabbare utveckling, lägre kostnader, minskad risk, eller bättre organisering. Vi rapporterar regelbundet mot dessa mål så att du alltid vet värdet. De flesta ser direkt ROI.',
  },
  {
    question: 'Vad händer om vi vill avsluta engagemanget?',
    answer:
      'Du kan avsluta när som helst utan straff. Vi förstår att behov förändras. Vi föredrar långsiktiga relationer — därför fokuserar vi helt på att leverera verkligt värde. De flesta fortsätter för att de ser nyttan.',
  },
  {
    question: 'Kan en CTO från Axuvo jobba tillsammans med vårt befintliga team?',
    answer:
      'Absolut. En av våra huvudroller är att leda och mentorskapa befintliga team. Vi ser det som en styrka — du har redan duktiga människor, de behöver bara riktning och någon som drar ihop det. Vi integrerar oss, vi ersätter inte.',
  },
  {
    question: 'Tar CTO:n operativt ansvar eller bara strategiskt?',
    answer:
      'Det beror på paket. Advisor och Strategist fokuserar på strategi och riktning. Transformer tar operativt ansvar och leder direkt. Vi anpassar efter dina behov — du väljer nivå.',
  },
  {
    question: 'Vad händer om vi behöver bygga något nytt? Kan CTO:n leda det?',
    answer:
      'Ja, men vi fokuserar inte på day-to-day kodning. Om du behöver en CTO som leder ett bygge kan Transformer-nivå arbeta hands-on med arkitektur, team och leverans. Ofta rekommenderar vi att kombinera en CTO med ett utvecklarteam eller en byrå.',
  },
  {
    question: 'Kan vi byta nivå under tiden — från Advisor till Strategist, till exempel?',
    answer:
      'Helt och hållet. Många börjar med Advisor för att testa värdet, sedan uppgraderar de till Strategist när behovet växer. Det är ingen lång process — du kan byta nästa månad utan problem.',
  },
  {
    question: 'Behöver vi skriva under ett långsiktigt kontrakt?',
    answer:
      'Nej. Vi arbetar månad-för-månad. Du kan pausa eller avsluta närsomhelst. Vi tror att långsiktiga relationer skapas genom att leverera värde, inte genom kontrakt.',
  },
  {
    question: 'Kan ni leda en större digital transformation?',
    answer:
      'Ja, det är ofta där Transformer-nivå glänser. Vi kan leda en större transformationssatsning — ny arkitektur, systemmigrering, omorganisering. Men det kräver ofta mer tid än andra paket, så vi diskuterar ofta en anpassning eller kombination med externa resources.',
  },
];

export default function CTOAsAServiceFAQ() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="Vanliga frågor - CTO as a Service"
        description="FAQ och svar om CTO as a Service från Axuvo"
        url="https://axuvo.se/cto-as-a-service/faq"
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
            name: 'Vanliga frågor',
            url: 'https://axuvo.se/cto-as-a-service/faq',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="compact"
        badge="CTO as a Service"
        title="Vanliga frågor om CTO as a Service"
        subtitle="Allt du behöver veta om vad vi gör, hur vi jobbar och vad det kostar. Svar på de frågor vi ofta får."
        primaryCta={{
          text: 'Boka möte',
          href: '/kontakt',
        }}
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16">
        <ScrollReveal variant="fade-up">
          <FAQ items={faqItems} />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Additional Help Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up" className="text-center">
            <HelpCircle className="w-12 h-12 text-mint mx-auto mb-4" />
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-4">
              Kan vi svara på något mer?
            </h2>
            <p className="text-silver max-w-2xl mx-auto mb-8">
              Har du en fråga som inte svarades här? Vi är glada att diskutera din situation. Boka ett kostnadsfritt möte och ställ dina frågor direkt.
            </p>
            <Button
              href="/kontakt"
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              Boka möte <ArrowRight className="w-4 h-4" />
            </Button>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Redo för nästa steg?"
        description="Du har läst och funderat. Nu är det dags att testa. Boka ett gratis möte där vi förstår dina behov och ger konkreta rekommendationer."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
