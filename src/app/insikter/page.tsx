import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { articles, getAllCategories } from '@/data/articles';
import ArticleGrid from '@/components/sections/ArticleGrid';

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

const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

const categories = getAllCategories();

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

          <ArticleGrid articles={sortedArticles} categories={categories} />
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
