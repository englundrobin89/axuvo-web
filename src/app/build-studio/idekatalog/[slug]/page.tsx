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
import { ideas } from '@/data/ideas';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertCircle, Zap } from 'lucide-react';

interface IdeaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: IdeaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const idea = ideas.find((i) => i.slug === slug);

  if (!idea) {
    return {
      title: 'Idé inte funnen',
    };
  }

  return {
    title: `${idea.title} — ${idea.priceRange} kr | Build Studio`,
    description: idea.description,
    keywords: [idea.title.toLowerCase(), 'app development', 'system development', 'build studio'],
    openGraph: {
      title: `${idea.title} — Build Studio`,
      description: idea.description,
      type: 'website',
      locale: 'sv_SE',
    },
  };
}

export function generateStaticParams() {
  return ideas.map((idea) => ({
    slug: idea.slug,
  }));
}

const processSteps = [
  {
    number: 1,
    title: 'Blueprint',
    description:
      'Vi träffas för ett kostnadsfritt möte ungefär 1 timme och ritar upp din specifika behov. Du får en klickbar prototyp inom 48 timmar.',
  },
  {
    number: 2,
    title: 'The Build',
    description:
      'Vi bygger det fullständiga systemet till fast startkostnad. Säkerhet, testning och produktionsanpassning är inbyggt.',
  },
  {
    number: 3,
    title: 'Förvaltning',
    description:
      'Efter lansering sköter vi drift, säkerhet och vidareutveckling i ett flexibelt månadsupplägg.',
  },
];

export default async function IdeaDetailPage({ params }: IdeaPageProps) {
  const { slug } = await params;
  const idea = ideas.find((i) => i.slug === slug);

  if (!idea) {
    return (
      <div className="py-20">
        <Container>
          <h1 className="text-4xl font-semibold text-white text-center">Idé inte funnen</h1>
        </Container>
      </div>
    );
  }

  return (
    <>
      <ServiceJsonLd
        name={idea.title}
        description={idea.description}
        url={`https://axuvo.se/build-studio/idekatalog/${idea.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Hem', url: 'https://axuvo.se' },
          { name: 'Build Studio', url: 'https://axuvo.se/build-studio' },
          { name: 'Idékatalog', url: 'https://axuvo.se/build-studio/idekatalog' },
          { name: idea.title, url: `https://axuvo.se/build-studio/idekatalog/${idea.slug}` },
        ]}
      />

      {/* Back Button */}
      <div className="py-6 bg-navy-mid/20 border-b border-white/5">
        <Container>
          <Link href="/build-studio/idekatalog" className="inline-flex items-center gap-2 text-mint hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Tillbaka till idékatalogen</span>
          </Link>
        </Container>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge={idea.title}
        title={idea.title}
        subtitle={idea.description}
        primaryCta={{
          text: 'Boka blueprint-möte',
          href: '/kontakt',
        }}
        secondaryCta={{
          text: 'Läs mer om processen',
          href: '#process',
        }}
        trustText={`${idea.priceRange} kr • Kostnadsfritt blueprint-möte • Fast pris`}
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Problem Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Problemet
              </h2>
              <p className="text-lg text-silver">
                {idea.problem}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Solution Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Lösningen
              </h2>
              <p className="text-lg text-silver">
                {idea.solution}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Effects Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
              Vad du får
            </h2>
            <p className="text-silver text-center max-w-xl mx-auto mb-12">
              Konkreta resultat och effekter av denna lösning.
            </p>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {idea.effects?.map((effect, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-lg p-6 border border-white/5 flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-mint flex-shrink-0 mt-0.5" />
                <p className="text-silver">{effect}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Features Section */}
      {idea.features && idea.features.length > 0 && (
        <>
          <section className="py-12 lg:py-16">
            <Container>
              <ScrollReveal variant="fade-up">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
                  Funktioner
                </h2>
                <p className="text-silver text-center max-w-xl mx-auto mb-12">
                  Vad systemet kan göra för dig.
                </p>
              </ScrollReveal>

              <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {idea.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-navy-mid rounded-lg p-6 border border-white/5 flex items-start gap-4"
                  >
                    <Zap className="w-6 h-6 text-mint flex-shrink-0 mt-0.5" />
                    <p className="text-silver">{feature}</p>
                  </div>
                ))}
              </StaggerReveal>
            </Container>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </>
      )}

      {/* Price Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Prisindikation
              </h2>
              <div className="bg-navy-mid rounded-lg p-8 border border-mint/20 mb-6">
                <p className="text-5xl font-bold text-mint mb-2">
                  {idea.priceRange} kr
                </p>
                <p className="text-silver">
                  Totalt pris för detta project (inklusive Blueprint och The Build)
                </p>
              </div>
              <p className="text-silver">
                Priset kan variera beroende på dina specifika behov och komplexitet. Du får en exakt
                offert efter blueprint-mötet.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Process Section */}
      <section id="process" className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
              Vår process
            </h2>
            <p className="text-silver text-center max-w-xl mx-auto mb-12">
              Från blueprint till lansering — tre steg.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <ProcessSteps steps={processSteps} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Secure by Design */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <ScrollReveal variant="fade-up">
          <SecureByDesign title="Säkerhet är inbyggt från start" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ Section */}
      {idea.faqItems && idea.faqItems.length > 0 && (
        <>
          <section className="py-12 lg:py-16">
            <Container>
              <ScrollReveal variant="fade-up">
                <FAQ
                  items={idea.faqItems}
                  sectionTitle={`Vanliga frågor om ${idea.title}`}
                />
              </ScrollReveal>
            </Container>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </>
      )}

      {/* Contact CTA */}
      <ContactCTA
        title={`Redo att bygga en ${idea.title.toLowerCase()}?`}
        description={`Boka ett kostnadsfritt blueprint-möte och vi visar dig exakt vad vi kan bygga åt dig. Du får en klickbar prototyp inom 48 timmar.`}
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
