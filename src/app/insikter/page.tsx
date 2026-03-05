import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { articles } from '@/data/articles';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insikter — Tankar, tips och erfarenheter från Axuvo',
  description:
    'Läs om teknik, strategi och digital transformation. Artiklar från Axuvo team.',
  keywords:
    'insikter, teknik, blogg, artikel, digital transformation, Sverige',
  openGraph: {
    title: 'Insikter — Tankar, tips och erfarenheter från Axuvo',
    description:
      'Läs om teknik, strategi och digital transformation.',
    type: 'website',
    url: 'https://axuvo.se/insikter',
  },
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export default function Insikter() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Start', url: 'https://axuvo.se' },
          { name: 'Insikter', url: 'https://axuvo.se/insikter' },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Insikter"
        title="Tankar, tips och erfarenheter från Axuvo"
        subtitle="Läs om teknik, strategi och digital transformation. Vi delar vad vi lär oss."
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Articles Grid */}
      <section className="py-12 lg:py-20">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                Alla artiklar
              </h2>
              <p className="text-lg text-silver">
                Praktiska insikter om teknik, strategi och digital transformation för beslutsfattare.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/insikter/${article.slug}`}
                className="group block"
              >
                <article className="bg-navy-mid border border-white/5 rounded-lg p-8 h-full flex flex-col hover:border-mint/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="text-xs">{article.categoryLabel}</Badge>
                    <div className="flex items-center gap-1 text-slate text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-mint transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-silver text-sm mb-6 flex-grow">
                    {article.description}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate text-xs">{article.author}</span>
                      <div className="flex items-center gap-1 text-slate text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                    </div>
                    <span className="text-mint text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Läs mer <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Har du en fråga om teknik?"
        description="Du behöver inte vänta på att vi skriver en artikel. Kontakta oss direkt — vi hjälper gärna."
        ctaText="Boka ett möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
