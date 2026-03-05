import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ThreeColumns } from '@/components/sections/ThreeColumns';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { SecureByDesign } from '@/components/sections/SecureByDesign';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import {
  Blocks,
  Shield,
  Users,
  Zap,
  ArrowRight,
  Clock,
  Lock,
  CheckCircle,
} from 'lucide-react';
import { FloatingUICards } from '@/components/visuals/FloatingUICards';

export const metadata: Metadata = {
  title: 'Axuvo - Appar, System & CTO as a Service för svenska företag',
  description:
    'Vi bygger appar, portaler och system snabbt och säkert. CTO as a Service, digital transformation och spetskompetens för svenska företag.',
  keywords:
    'appar, webappar, system, CTO, digital transformation, utveckling, Sverige',
  openGraph: {
    title: 'Axuvo - Vi bygger det digitala ni behöver',
    description:
      'Appar, portaler, system och CTO as a Service för svenska företag.',
    type: 'website',
    url: 'https://axuvo.se',
  },
};

interface SolutionCard {
  title: string;
  description: string;
  minPrice: number;
  maxPrice: number;
}

const solutionExamples: SolutionCard[] = [
  {
    title: 'Bokningsapp',
    description: 'Enkla bokningssystem för tjänster och möten.',
    minPrice: 25,
    maxPrice: 60,
  },
  {
    title: 'Kundportal',
    description: 'Självbetjäningsportal för kunddata och dokumentation.',
    minPrice: 60,
    maxPrice: 150,
  },
  {
    title: 'Automatiserat arbetsflöde',
    description: 'Processautomation och arbetsflödeshantering.',
    minPrice: 60,
    maxPrice: 150,
  },
  {
    title: 'SaaS-produkt',
    description: 'Skalbar mjukvaruprodukt för marknaden.',
    minPrice: 150,
    maxPrice: 350,
  },
];

interface DifferentiatorCard {
  title: string;
  subtitle: string;
  description: string;
}

const differentiators: DifferentiatorCard[] = [
  {
    title: 'vs Traditionella byråer',
    subtitle: 'Snabbare och billigare',
    description:
      'Samma person som förstår affären bygger lösningen. Ingen overhead, bara resultat.',
  },
  {
    title: 'vs AI-hype-bolag',
    subtitle: 'Vi bygger säkert från start',
    description:
      'Vi lovar inte magi. Vi levererar testad, säker och produktionsklar kod.',
  },
  {
    title: 'vs Konsultuthyrning',
    subtitle: 'Vi säljer resultat, inte timmar',
    description:
      'Incentivstrukturen är helt olika. Vi tjänar mer på att lösa ditt problem snabbt.',
  },
  {
    title: 'vs Frilansare',
    subtitle: 'Processer, säkerhet & förvaltning',
    description:
      'Stabil organisation, dokumentation, säkerhetsprocesser och långsiktig support.',
  },
];

const faqItems = [
  {
    question: 'Vad kostar det att bygga en app?',
    answer:
      'Det beror helt på komplexiteten. Vi arbetar med ett starkt pris mellan 25k-350k+ beroende på omfång och integration. Därför börjar vi alltid med ett gratis möte och ett koncept som visar exakt kostnad innan något åtagande görs.',
  },
  {
    question: 'Hur lång tid tar det?',
    answer:
      'Typiskt 2-8 veckor beroende på omfång. Vi arbetar snabbt med fokus på att få något i produktion snarast, sedan itererar vi. Din första prototyp är redo inom 48 timmar.',
  },
  {
    question: 'Behöver jag kunna teknik?',
    answer:
      'Inte alls. Vi hanterar all teknik, integration och implementation. Du behöver bara ha en vision för vad du vill uppnå. Vi gör resten.',
  },
  {
    question: 'Vad händer efter leverans?',
    answer:
      'Vi erbjuder förvaltningspaket från 3 900 kr/månad som täcker drift, uppdateringar, säkerhet och vidareutveckling. Eller vi kan helt enkelt överge det till ditt team om du föredrar det.',
  },
  {
    question: 'Är det verkligen gratis att börja?',
    answer:
      'Ja. Det första mötet är gratis (~1 timme), och vi gör en klickbar prototyp inom 48 timmar utan kostnad. Du får konkreta svar innan du åtagandes något.',
  },
  {
    question: 'Hur fungerar säkerheten?',
    answer:
      'Säkerhet är inbyggt från dag ett. Vi följer Secure by Design-principer: åtkomststyrning, dataminimering, loggning, backup, regelbundna uppdateringar och tydliga datgränser. Allt enligt GDPR och svenska standarder.',
  },
];

const threeColumnsItems = [
  {
    icon: <Blocks className="w-8 h-8" />,
    title: 'Build Studio',
    description:
      'Appar, portaler, system och arbetsflöden. Från idé till färdig produkt i produktion.',
    href: '/build-studio',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'CTO as a Service',
    description:
      'Tekniskt ledarskap utan anställning. Rätt beslut, digital plan, tydlig riktning.',
    href: '/cto-as-a-service',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Specialiststöd',
    description:
      'Spetskompetens som flyttar nålen. Sprintar, granskning, utbildning och rådgivning.',
    href: '/specialiststod',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Blueprint',
    description:
      'Gratis möte ~1h. Vi pratar igenom din idé och gör en klickbar prototyp inom 48 timmar. Du får se exakt vad du får innan något åtagande.',
  },
  {
    number: 2,
    title: 'The Build',
    description:
      'Fast startkostnad. Vi fokuserar på kvalitet, säkerhet och produktionsanpassning. Regelbundna checkpoints så du är alltid uppdaterad.',
  },
  {
    number: 3,
    title: 'Förvaltning',
    description:
      'Månadsupplägg med drift, underhåll, säkerhetsupdateringar och vidareutveckling. Vi finns där när du behöver oss.',
  },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="Build Studio"
        description="Appar, portaler, system och arbetsflöden för svenska företag"
        url="https://axuvo.se/build-studio"
      />
      <ServiceJsonLd
        name="CTO as a Service"
        description="Tekniskt ledarskap och strategisk rådgivning utan anställning"
        url="https://axuvo.se/cto-as-a-service"
      />
      <ServiceJsonLd
        name="Specialiststöd"
        description="Spetskompetens för sprint, granskning och rådgivning"
        url="https://axuvo.se/specialiststod"
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Start',
            url: 'https://axuvo.se',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="home"
        title="Vi bygger det digitala ni behöver — snabbt, säkert och utan enterprise-prislapp"
        subtitle="Axuvo hjälper företag och människor som vill göra mer digitalt men inte har tid, kunskap eller trygghet att göra det själva."
        primaryCta={{
          text: 'Boka ett gratis möte',
          href: '/kontakt',
        }}
        secondaryCta={{
          text: 'Se idékatalogen',
          href: '/build-studio',
        }}
        trustText="Gratis blueprint • Prototyp inom 48h • Säkerhet inbyggt från start"
      />

      {/* Quick Summary Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Vad gör Axuvo?
              </h2>
              <p className="text-silver text-lg">
                Vi bygger appar och system, leder som inhyrd CTO och förstärker team med spetskompetens. Allt börjar med ett gratis möte.
              </p>
            </div>
            <div className="hidden lg:block">
              <FloatingUICards />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <Zap className="w-6 h-6 text-mint" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Vi bygger appar och system
                </h3>
                <p className="text-silver">
                  Från en idé till en färdig, säker och produktionsklar lösning.
                  Vi hanterar allt — design, utveckling, säkerhet och lansering.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <Shield className="w-6 h-6 text-mint" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Vi leder som inhyrd CTO
                </h3>
                <p className="text-silver">
                  Teknisk vision, strategisk riktning och rätta beslut utan att
                  anställa. Du får en erfaren teknisk ledare som förstår din
                  affär.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <Users className="w-6 h-6 text-mint" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Vi förstärker ditt team
                </h3>
                <p className="text-silver">
                  Spetskompetens som gör skillnad. Sprint-stöd, kodgranskning,
                  säkerhetskonsultation och utbildning.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Three Service Pillars */}
      <ThreeColumns items={threeColumnsItems} />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Example Solutions Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <div className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
              Exempel från vår idékatalog
            </h2>
            <p className="text-silver max-w-2xl">
              Detta är realistiska exempel på projekt vi byggt eller kan bygga.
              Allt börjar med ett gratis möte där vi skissar ut exakt vad som
              behövs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionExamples.map((solution, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-6 hover:border-mint/20 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-silver text-sm mb-4">
                  {solution.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-mint font-semibold">
                    {solution.minPrice}k
                  </span>
                  <span className="text-silver text-sm">—</span>
                  <span className="text-mint font-semibold">
                    {solution.maxPrice}k
                  </span>
                  <span className="text-silver text-sm">SEK</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              as="link"
              href="/build-studio"
              className="flex items-center gap-2"
            >
              Se fler exempel i idékatalogen
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Process Steps */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
              Så arbetar vi
            </h2>
            <p className="text-silver max-w-2xl">
              Från första möte till långsiktig förvaltning — en väl proven process
              som levererar resultat.
            </p>
          </div>
          <ProcessSteps steps={processSteps} />
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Secure by Design */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <SecureByDesign title="Säkerhet inbyggt från start" />
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Differentiators Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
              Varför Axuvo?
            </h2>
            <p className="text-silver max-w-2xl">
              Så här skiljer vi oss från andra vägar att lösa dina digitala
              behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8 hover:border-mint/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-mint flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-mint font-medium text-sm mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-silver ml-8">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <FAQ items={faqItems} sectionTitle="Vanliga frågor" />
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Redo att bygga något bra?"
        description="Boka ett gratis möte (~1 timme) och få en klickbar prototyp inom 48 timmar. Ingen risk, ingen kostnad, bara resultat."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
