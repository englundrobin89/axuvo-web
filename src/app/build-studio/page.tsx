import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { PricingTable } from '@/components/sections/PricingTable';
import { SecureByDesign } from '@/components/sections/SecureByDesign';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from '@/lib/json-ld';
import { BuildProcessAnimation } from '@/components/visuals/BuildProcessAnimation';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import {
  Zap,
  Code2,
  Shield,
  TrendingUp,
  Workflow,
  Rocket,
  Calendar,
  FileText,
  Users,
  Settings,
  Bot,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Build Studio — Appar, portaler och system från idé till drift',
  description:
    'Build Studio är Axuvos tjänst för att bygga digitala lösningar snabbt och säkert. Från idé till produktionsfardig app eller portal — se resultat innan du spenderat en krona.',
  keywords: [
    'bygga app',
    'build studio',
    'app utveckling',
    'portaler',
    'system utveckling',
    'arbetsflöde automation',
    'SaaS produkt',
    'snabb app utveckling',
  ],
  openGraph: {
    title: 'Build Studio — Appar, portaler och system från idé till drift',
    description:
      'Vi bygger appar, portaler, system och arbetsflöden åt företag som vill göra mer digitalt. Se resultat innan du spenderat en krona.',
    type: 'website',
    locale: 'sv_SE',
  },
};

interface IdeaCard {
  title: string;
  description: string;
  priceRange: string;
  icon: React.ReactNode;
}

const ideaCards: IdeaCard[] = [
  {
    title: 'Bokningsapp',
    description: 'Enkel bokningshantering för tider och resurser',
    priceRange: '25-60k',
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: 'Offertverktyg',
    description: 'Automatisera skapandet av offerter och presentationer',
    priceRange: '25-60k',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: 'Kundportal',
    description: 'Ge kunderna tillgång till data och tjänster',
    priceRange: '60-150k',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Internt verksamhetssystem',
    description: 'Centralisera data och processer för ditt team',
    priceRange: '60-150k',
    icon: <Workflow className="w-6 h-6" />,
  },
  {
    title: 'Automatiserat arbetsflöde',
    description: 'Minska manuellt arbete och öka effektiviteten',
    priceRange: '60-150k',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'SaaS-produkt',
    description: 'Bygga en skalbar tjänst för flera användare',
    priceRange: '150-350k',
    icon: <Rocket className="w-6 h-6" />,
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Blueprint',
    description:
      'Kostnadsfritt möte, cirka 1 timme. Vi ritar upp behovet tillsammans. Inom 48 timmar får du en klickbar prototyp. Du ser resultat innan du spenderat en krona.',
  },
  {
    number: 2,
    title: 'The Build',
    description:
      'Om du vill gå vidare köper du det skarpa bygget till fast startkostnad. Kvalitet, säkerhet, riktig data, felhantering och produktionsanpassning. Reveal-möte med live-demo.',
  },
  {
    number: 3,
    title: 'Förvaltning',
    description:
      'Efter leverans går du in i ett månadsupplägg. Vi sköter drift, underhåll och vidareutveckling. Du äger tryggheten, vi äger ansvaret.',
  },
];

const pricingPackages = [
  {
    name: 'Platform Core',
    price: '3 900 kr/mån',
    description: 'Grundläggande drift och support',
    features: [
      'Drift och övervakning',
      'Säkerhetsuppdateringar',
      'Backup och återställning',
      'Extra timmar 1 500 kr/h',
    ],
  },
  {
    name: 'Growth Support',
    price: '9 900 kr/mån',
    description: '4 timmar vidareutveckling inkluderat',
    features: [
      'Allt i Platform Core',
      '4 timmar vidareutveckling',
      'Prioriterad support',
      'Extra timmar 1 350 kr/h',
    ],
    highlighted: true,
  },
  {
    name: 'Active Growth',
    price: '15 900 kr/mån',
    description: '8 timmar vidareutveckling inkluderat',
    features: [
      'Allt i Growth Support',
      '8 timmar vidareutveckling',
      'Proaktiva förbättringsförslag',
      'Extra timmar 1 200 kr/h',
    ],
  },
  {
    name: 'Fractional Team',
    price: '34 900 kr/mån',
    description: '20 timmar vidareutveckling inkluderat',
    features: [
      'Allt i Active Growth',
      '20 timmar vidareutveckling',
      'Dedikerat team',
      'Extra timmar 1 150 kr/h',
    ],
  },
];

const faqItems = [
  {
    question: 'Vad kostar det att komma igång?',
    answer:
      'Blueprint-mötet är helt kostnadsfritt. Bygget prissätts till en fast startkostnad som beror på omfånget av din lösning. Du får en transparent offert efter blueprint-mötet.',
  },
  {
    question: 'Hur lång tid tar ett bygge?',
    answer:
      'Typiskt tar ett bygge 2-8 veckor beroende på omfång och komplexitet. Vi ger dig en realistisk tidsplan under blueprint-mötet baserat på din vision.',
  },
  {
    question: 'Kan jag testa innan jag bestämmer mig?',
    answer:
      'Ja, absolut! Efter blueprint-mötet får du en helt funktionell prototyp inom 48 timmar. Du kan testa den innan du bestämmer dig för att gå vidare med fullt bygge.',
  },
  {
    question: 'Vad händer om jag inte vill fortsätta efter prototypen?',
    answer:
      'Inget problem. Du är helt utan förpliktelse efter blueprint-mötet. Prototypen är gratis och du äger alla idéer vi har diskuterat.',
  },
  {
    question: 'Äger jag koden?',
    answer:
      'Ja, du äger all kod och data. Vi har en buyout-klausul vilket betyder att du kan köpa ut koden när som helst om du vill flytta till en annan leverantör.',
  },
  {
    question: 'Vad ingår i förvaltningen?',
    answer:
      'Förvaltningen inkluderar drift, säkerhet, backup, säkerhetsuppdateringar och underhåll. Högre paket ger mer tid för vidareutveckling och nya features.',
  },
];

export default function BuildStudioPage() {
  return (
    <>
      <ServiceJsonLd
        name="Build Studio"
        description="Vi bygger appar, portaler, system och arbetsflöden åt företag som vill göra mer digitalt."
        url="https://axuvo.se/build-studio"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Hem', url: 'https://axuvo.se' },
          { name: 'Build Studio', url: 'https://axuvo.se/build-studio' },
        ]}
      />
      <FAQPageJsonLd items={faqItems} />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Build Studio"
        title="Från idé till färdig produkt — snabbt, säkert och till fast pris"
        subtitle="Vi bygger appar, portaler, system och arbetsflöden åt företag och människor som vill göra mer digitalt. Se resultat innan du spenderat en krona."
        primaryCta={{
          text: 'Boka gratis blueprint-möte',
          href: '/kontakt',
        }}
        secondaryCta={{
          text: 'Se idékatalogen',
          href: '#ideas',
        }}
        trustText="Gratis prototyp inom 48h • Fast startkostnad • Säkerhet inbyggt"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* GEO Summary Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Vad är Build Studio?
              </h2>
              <p className="text-lg text-silver mb-6">
                Build Studio är Axuvos sätt att bygga digitala lösningar för företag
                och människor. Vi jobbar i tre tydliga steg: först ett gratis
                blueprint-möte där vi förstår dina behov, sedan ett fast bygge med
                full kvalitet och säkerhet, och till sist ett månadsupplagg för drift
                och vidareutveckling. Priserna startar från 25 000 kr för mindre
                lösningar.
              </p>
              <Button
                variant="secondary"
                size="md"
                as="link"
                href="/kontakt"
              >
                Starta ett blueprint-möte
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Process Steps */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
              Tre steg till din lösning
            </h2>
            <p className="text-silver text-center max-w-xl mx-auto mb-12">
              Från gratis blueprint till produktionsklar lösning med löpande förvaltning.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal variant="fade-up" delay={100}>
              <ProcessSteps steps={processSteps} />
            </ScrollReveal>
            <div className="hidden lg:flex items-center justify-center pt-8">
              <ScrollReveal variant="fade-up" delay={200}>
                <BuildProcessAnimation />
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Idea Catalog Section */}
      <section id="ideas" className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Vad kan vi bygga?
              </h2>
              <p className="text-lg text-silver max-w-2xl">
                Vi har byggt allt från enkla bokningsappar till komplexa SaaS-produkter.
                Här är några exempel på lösningar vi kan realisera för dig.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideaCards.map((card, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-xl p-6 border border-white/10 hover:border-mint/30 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-mint">{card.icon}</div>
                  <Badge className="text-xs">{card.priceRange}</Badge>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-silver text-sm">{card.description}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal variant="fade-up" delay={600}>
            <div className="mt-12 text-center">
              <Button
                variant="primary"
                size="lg"
                as="link"
                href="/build-studio/idekatalog"
              >
                Se hela idékatalogen
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Pricing Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
                Förvaltning efter leverans
              </h2>
              <p className="text-lg text-silver max-w-2xl mx-auto text-center">
                Efter vi har levererat din lösning går du in i ett flexibelt
                månadsupplägg. Välj det paket som passar din tillväxt.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <PricingTable packages={pricingPackages} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Secure by Design */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <ScrollReveal variant="fade-up">
          <SecureByDesign title="Säkerhet är inbyggt" />
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
              sectionTitle="Vanliga frågor om Build Studio"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Redo att bygga?"
        description="Boka ett gratis blueprint-möte och se hur vi kan hjälpa dig genomföra din idé."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
