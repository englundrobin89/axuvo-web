import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { SecureByDesign } from '@/components/sections/SecureByDesign';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { Clock, Check, Zap, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blueprint — Se resultat innan du spenderat en krona | Build Studio',
  description:
    'Gratis blueprint-möte inom 1 timme. Vi förstår dina behov och levererar en klickbar prototyp inom 48h. Ingen risk, inget övergripande — se exakt vad vi kan bygga åt dig.',
  keywords: [
    'blueprint möte',
    'prototyp',
    'gratis konsultation',
    'app prototyp',
    'systemprototyp',
    'digital prototyp',
  ],
  openGraph: {
    title: 'Blueprint — Se resultat innan du spenderat en krona',
    description:
      'Gratis blueprint-möte och prototyp inom 48h. Se vad vi kan bygga åt dig innan du investerar.',
    type: 'website',
    locale: 'sv_SE',
  },
};

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Kostnadsfritt möte',
    description:
      'Vi träffas för ett gratis möte på cirka 1 timme där vi förstår dina behov och diskuterar din vision.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Klickbar prototyp',
    description:
      'Inom 48 timmar får du en helt funktionell, klickbar prototyp som visar vad vi kan bygga åt dig.',
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Ingen förpliktelse',
    description:
      'Efter blueprint-mötet är du helt utan förpliktelse. Du äger alla idéer och kan välja om du vill fortsätta.',
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: 'Transparent offert',
    description:
      'Om du vill gå vidare får du en transparent, fast offert för det skarpa bygget — ingen överraskning.',
  },
];

const blueprintSteps = [
  {
    number: 1,
    title: 'Boka möte',
    description:
      'Du kontaktar oss via formuläret. Vi hittar en tid som passar och skickar dig en länk till ett videomöte.',
  },
  {
    number: 2,
    title: 'Vi ritar upp behovet',
    description:
      'Under mötet förstår vi din vision, målgrupp, krav och tidplan. Vi frågar allt vi behöver veta.',
  },
  {
    number: 3,
    title: 'Klickbar prototyp inom 48h',
    description:
      'Vi går hem och bygger en prototyp som visar hur systemet kan fungera. Du får något konkret att testa och tycka till om.',
  },
];

const faqItems = [
  {
    question: 'Vad kostar blueprint-mötet?',
    answer:
      'Helt kostnadsfritt. Vi betalar för mötet själva. Vi tror att om vi inte kan visa att vi förstår ditt behov, bör du inte betala något.',
  },
  {
    question: 'Hur lång tid är mötet?',
    answer:
      'Ungefär 1 timme. Vi behöver tid för att förstå vad du vill göra, vem som ska använda systemet och vilka problem du vill lösa.',
  },
  {
    question: 'Hur snabbt kan vi testa prototypen?',
    answer:
      'Du får tillgång till prototypen inom 48 timmar efter mötet. Oftast mycket snabbare. Du kan genast börja klicka runt och se hur det fungerar.',
  },
  {
    question: 'Äger vi idén och prototypen?',
    answer:
      'Ja, helt och hållet. Du äger alla idéer vi diskuterar och prototypen. Du kan visually klicka runt på den hur länge du vill.',
  },
  {
    question: 'Vad händer om vi inte vill fortsätta efter prototypen?',
    answer:
      'Inget alls. Du är helt utan förpliktelse. Vi hoppas att prototypen visar att vi förstår ditt behov och att du vill arbeta med oss, men det är helt upp till dig.',
  },
  {
    question: 'Hur ser offerten ut om vi vill bygga?',
    answer:
      'Vi ger dig en transparent, fast offert för att bygga det skarpa systemet. Priset beror på komplexitet men startar från 25 000 kr för enkla lösningar.',
  },
  {
    question: 'Kan vi ha mötet på Zoom eller Teams?',
    answer:
      'Ja, absolut. Vi kan mötas på den plattform du föredrar. Du bestämmer tid och plats.',
  },
  {
    question: 'Behöver vi ha allt tänkt klart innan mötet?',
    answer:
      'Nej, inte alls. Du kan ha bara en grov idé. Vi är vana vid att fråga massa frågor för att förstå vad som behövs.',
  },
];

export default function BlueprintPage() {
  return (
    <>
      <ServiceJsonLd
        name="Blueprint"
        description="Gratis blueprint-möte och prototyp inom 48h. Se resultat innan du spenderat en krona."
        url="https://axuvo.se/build-studio/blueprint"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Hem', url: 'https://axuvo.se' },
          { name: 'Build Studio', url: 'https://axuvo.se/build-studio' },
          { name: 'Blueprint', url: 'https://axuvo.se/build-studio/blueprint' },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Blueprint"
        title="Se resultat innan du spenderat en krona"
        subtitle="Kostnadsfritt möte på ungefär 1 timme. Vi förstår dina behov tillsammans. Du får en klickbar prototyp inom 48 timmar. Sedan bestämmer du om du vill fortsätta."
        primaryCta={{
          text: 'Boka gratis blueprint-möte',
          href: '/kontakt',
        }}
        secondaryCta={{
          text: 'Läs mer om processen',
          href: '#process',
        }}
        trustText="Kostnadsfritt • Ingen förpliktelse • Resultat inom 48h"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* What is Blueprint Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Vad är Blueprint?
              </h2>
              <p className="text-lg text-silver mb-6">
                Blueprint är första steget i vår process. Det är ett gratis möte där vi förstår din
                idé och behov. Sedan bygger vi en klickbar prototyp som visar exakt hur systemet
                kan fungera. Du får någonting konkret att testa innan du investerar i ett fullständigt
                bygge. Det är vår sätt att säga: "Vi tror på vad vi kan göra åt dig — låt oss bevisa
                det innan du betalar något."
              </p>
              <Button
                variant="secondary"
                size="md"
                as="link"
                href="/kontakt"
              >
                Starta ditt blueprint-möte
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
              Vad du får från Blueprint
            </h2>
            <p className="text-silver text-center max-w-xl mx-auto mb-12">
              Ett kostnadsfritt möte och en färdig prototyp inom 48 timmar.
            </p>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-lg p-8 border border-white/5 hover:border-mint/20 transition-colors duration-200"
              >
                <div className="text-mint mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-silver">{benefit.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Process Section */}
      <section id="process" className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
              Hur Blueprint fungerar
            </h2>
            <p className="text-silver text-center max-w-xl mx-auto mb-12">
              Tre enkla steg från möte till prototyp.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <ProcessSteps steps={blueprintSteps} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* What Happens Next Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-white mb-6">Nästa steg efter Blueprint</h2>
              <div className="space-y-6">
                <div className="bg-navy-mid rounded-lg p-8 border border-mint/20">
                  <h3 className="text-xl font-semibold text-white mb-2">Du vill inte fortsätta?</h3>
                  <p className="text-silver">
                    Perfekt. Du är helt utan förpliktelse. Du äger prototypen och alla idéer vi
                    diskuterade. Vi önskar dig lycka till med projektet.
                  </p>
                </div>
                <div className="bg-navy-mid rounded-lg p-8 border border-mint/20">
                  <h3 className="text-xl font-semibold text-white mb-2">Du är intresserad av att bygga?</h3>
                  <p className="text-silver mb-4">
                    Vi ger dig en transparent offert för "The Build" — nästa fas. Vi bygger det
                    fullständiga systemet med full kvalitet, säkerhet och produktionsanpassning. Priset är
                    fast och baserat på komplexiteten som vi identifierade under blueprint-mötet.
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    as="link"
                    href="/build-studio/the-build"
                  >
                    Läs mer om The Build
                  </Button>
                </div>
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
          <SecureByDesign title="Säkerhet är inbyggt från dag ett" />
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
              sectionTitle="Vanliga frågor om Blueprint"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Redo att se en prototyp på din idé?"
        description="Boka ett gratis blueprint-möte och vi visar dig exakt vad vi kan bygga åt dig. Inom 48 timmar får du en klickbar prototyp att testa."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
