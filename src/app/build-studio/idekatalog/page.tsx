import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { ideas, ideasByCategory } from '@/data/ideas';
import Link from 'next/link';
import {
  Calendar,
  FileText,
  Rocket,
  Users,
  Workflow,
  Zap,
  Bot,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Idékatalog — 9 lösningsidéer från 25k till 350k kr | Build Studio',
  description:
    'Se 9 konkreta exempel på vad vi kan bygga. Bokningsapp, offertverktyg, kundportal, system, AI-chatbot, SaaS-produkt och mycket mer. Med prisexempel för varje lösning.',
  keywords: [
    'idékatalog',
    'exempel lösningar',
    'prisexempel',
    'app idéer',
    'system idéer',
    'digital transformation',
  ],
  openGraph: {
    title: 'Idékatalog — 9 konkreta lösningsidéer',
    description:
      'Inspiration och prisexempel för vad vi kan bygga åt dig. Från bokningsapp till komplett plattform.',
    type: 'website',
    locale: 'sv_SE',
  },
};

const iconMap: { [key: string]: React.ReactNode } = {
  Calendar: <Calendar className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  Rocket: <Rocket className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Workflow: <Workflow className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Bot: <Bot className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
};

interface IdeaCardProps {
  title: string;
  description: string;
  priceRange: string;
  icon: React.ReactNode;
  slug: string;
}

function IdeaCard({ title, description, priceRange, icon, slug }: IdeaCardProps) {
  return (
    <Link href={`/build-studio/idekatalog/${slug}`}>
      <div className="bg-navy-mid rounded-xl p-6 border border-white/10 hover:border-mint/30 hover:bg-navy-mid/80 transition-all duration-200 cursor-pointer h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="text-mint">{icon}</div>
          <Badge className="text-xs">{priceRange} kr</Badge>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 flex-grow">{title}</h3>
        <p className="text-silver text-sm mb-4">{description}</p>
        <span className="inline-flex items-center justify-center w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
          Läs mer
        </span>
      </div>
    </Link>
  );
}

const faqItems = [
  {
    question: 'Vilken är den snabbaste lösningen att bygga?',
    answer:
      'Bokningsapp, offertverktyg eller personlig app/MVP är de snabbaste. De tar typiskt 2-4 veckor och kostar 25-60 k kr.',
  },
  {
    question: 'Vilken är den mest kostnadseffektiva lösningen?',
    answer:
      'Bokningsapp eller offertverktyg om du behöver något specifikt. Men det beror helt på ditt behov — vi kan bygga nästan vad som helst.',
  },
  {
    question: 'Kan vi kombinera idéer?',
    answer:
      'Absolut. Du kan vilja ha en bokningsapp med integrerad kundportal. Vi bygger efter dina behov, inte efter kategorier.',
  },
  {
    question: 'Är prisexemplen garanterade?',
    answer:
      'Prisexemplen är vägledande. Det sanna priset beror på din specifika vision och komplexitet. Du får en exakt offert efter blueprint-mötet.',
  },
  {
    question: 'Kan vi börja med en MVP och expandera senare?',
    answer:
      'Ja, det rekommenderas ofta. Börja med kärnfunktionerna i en MVP (personal app), lansera, få feedback och expandera sedan.',
  },
  {
    question: 'Hur långt tid tar det att bygga en kundportal?',
    answer:
      'En enkel kundportal tar cirka 4-6 veckor. Mer komplex med många integreringar kan ta 8-10 veckor.',
  },
  {
    question: 'Vilken lösning passar för en startup?',
    answer:
      'En personlig app/MVP är perfekt för en startup. Du testar idén snabbt, får feedback från användare och kan skala senare.',
  },
  {
    question: 'Kan vi byta från ett större paket om det blir för dyrt?',
    answer:
      'Under blueprint-mötet diskuterar vi exakt vad som behövs. Vi hjälper dig välja rätt komplexitetsnivå från början.',
  },
];

export default function IdekatalogPage() {
  return (
    <>
      <ServiceJsonLd
        name="Idékatalog"
        description="9 konkreta exempel på vad vi kan bygga. Bokningsapp, offertverktyg, kundportal och mycket mer — med prisexempel."
        url="https://axuvo.se/build-studio/idekatalog"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Hem', url: 'https://axuvo.se' },
          { name: 'Build Studio', url: 'https://axuvo.se/build-studio' },
          { name: 'Idékatalog', url: 'https://axuvo.se/build-studio/idekatalog' },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Idékatalog"
        title="Inspiration och konkreta prisexempel"
        subtitle="Här är 9 konkreta lösningsidéer vi kan bygga. Från enkla bokningsappar till komplexa SaaS-produkter. Se prisexempel och vad varje lösning kan göra för dig."
        primaryCta={{
          text: 'Boka blueprint-möte',
          href: '/kontakt',
        }}
        secondaryCta={{
          text: 'Läs mer om Build Studio',
          href: '/build-studio',
        }}
        trustText="9 idéer • Prisexempel • Konkreta exempel"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Quick Ideas (25-60k) */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-2">
                25 000 – 60 000 kr
              </h2>
              <p className="text-lg text-silver">
                Snabba lösningar för en specifik behov. Typisk byggtid 2-4 veckor.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideasByCategory.quick.map((idea) => (
              <IdeaCard
                key={idea.slug}
                title={idea.title}
                description={idea.description}
                priceRange={idea.priceRange}
                icon={iconMap[idea.icon || 'Rocket'] || <Rocket className="w-8 h-8" />}
                slug={idea.slug}
              />
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Medium Ideas (60-150k) */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-2">
                60 000 – 150 000 kr
              </h2>
              <p className="text-lg text-silver">
                Medelstor lösningar för verksamhetshantering. Typisk byggtid 4-8 veckor.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideasByCategory.medium.map((idea) => (
              <IdeaCard
                key={idea.slug}
                title={idea.title}
                description={idea.description}
                priceRange={idea.priceRange}
                icon={iconMap[idea.icon || 'Rocket'] || <Rocket className="w-8 h-8" />}
                slug={idea.slug}
              />
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Large Ideas (150-350k) */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-2">
                150 000 – 350 000 kr
              </h2>
              <p className="text-lg text-silver">
                Komplexa plattformar och SaaS-produkter. Typisk byggtid 8-16 veckor.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideasByCategory.large.map((idea) => (
              <IdeaCard
                key={idea.slug}
                title={idea.title}
                description={idea.description}
                priceRange={idea.priceRange}
                icon={iconMap[idea.icon || 'Rocket'] || <Rocket className="w-8 h-8" />}
                slug={idea.slug}
              />
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* How to Get Started Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-white mb-6">Hur du får igång en idé</h2>
              <div className="space-y-6">
                <div className="bg-navy-mid rounded-lg p-8 border border-mint/20">
                  <h3 className="text-xl font-semibold text-white mb-3">1. Blueprint-möte</h3>
                  <p className="text-silver">
                    Du berättar din idé. Vi diskuterar vad som behövs, tidplan och budget. Vi ger dig en
                    gratis prototyp inom 48 timmar.
                  </p>
                </div>
                <div className="bg-navy-mid rounded-lg p-8 border border-mint/20">
                  <h3 className="text-xl font-semibold text-white mb-3">2. Fast offert</h3>
                  <p className="text-silver">
                    Efter prototypen ger vi dig en exakt offert baserat på komplexiteten. Fast pris —
                    ingen överraskning senare.
                  </p>
                </div>
                <div className="bg-navy-mid rounded-lg p-8 border border-mint/20">
                  <h3 className="text-xl font-semibold text-white mb-3">3. Bygge och lansering</h3>
                  <p className="text-silver">
                    Vi bygger systemet. Du får regelbundna uppdateringar och kan ge feedback. Reveal-möte
                    innan lansering.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <FAQ
              items={faqItems}
              sectionTitle="Vanliga frågor om idékatalogen"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Har du en idé från katalogen — eller något helt eget?"
        description="Vi kan bygga nästan vad som helst. Boka ett gratis blueprint-möte och berättar din idé. Vi visar dig exakt vad vi kan göra och vad det kostar."
        ctaText="Boka blueprint-möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
