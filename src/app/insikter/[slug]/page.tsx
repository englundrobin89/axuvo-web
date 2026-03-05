import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/lib/json-ld';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { articles, getArticleBySlug } from '@/data/articles';
import { getAuthorById } from '@/data/authors';
import AuthorBio from '@/components/sections/AuthorBio';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article not found',
      description: 'The article you are looking for does not exist.',
    };
  }

  return {
    title: `${article.title} | Insikter | Axuvo`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Article not found</h1>
          <Link href="/insikter" className="text-mint hover:text-white">
            Back to Insikter
          </Link>
        </div>
      </Container>
    );
  }

  // Get related articles
  const relatedArticles = article.relatedSlugs
    ? articles.filter((a) => article.relatedSlugs?.includes(a.slug))
    : [];

  // Format date
  const publishedDate = new Date(article.publishedAt).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Hem', url: 'https://axuvo.se' },
          { name: 'Insikter', url: 'https://axuvo.se/insikter' },
          { name: article.title, url: `https://axuvo.se/insikter/${article.slug}` },
        ]}
      />
      {article.faqItems && article.faqItems.length > 0 && <FAQPageJsonLd items={article.faqItems} />}

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.description,
            datePublished: article.publishedAt,
            author: {
              '@type': 'Person',
              name: article.author,
            },
            articleBody: article.content
              .filter((section) => section.type === 'paragraph')
              .map((section) => section.content)
              .join(' '),
          }),
        }}
      />

      <Container>
        {/* Back Link */}
        <div className="pt-20 pb-12">
          <Link
            href="/insikter"
            className="inline-flex items-center gap-2 text-silver hover:text-mint transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Tillbaka till Insikter</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="mb-6">
            <Badge>{article.categoryLabel}</Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-silver mb-8 leading-relaxed">
            {article.description}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap gap-8 border-t border-b border-navy-mid py-6">
            <div className="flex items-center gap-3">
              <User size={18} className="text-mint" />
              <div>
                <div className="text-sm text-silver">Författare</div>
                <div className="text-white font-semibold">{article.author}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-mint" />
              <div>
                <div className="text-sm text-silver">Publicerad</div>
                <div className="text-white font-semibold">{publishedDate}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={18} className="text-mint" />
              <div>
                <div className="text-sm text-silver">Läsningstid</div>
                <div className="text-white font-semibold">{article.readTime}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <div className="prose prose-invert max-w-none">
              {article.content.map((section, index) => {
                switch (section.type) {
                  case 'heading':
                    return (
                      <div key={index} className="mt-12 mb-6">
                        {section.level === 2 ? (
                          <h2 className="text-3xl font-semibold text-white leading-tight">
                            {section.content}
                          </h2>
                        ) : (
                          <h3 className="text-2xl font-semibold text-white leading-tight">
                            {section.content}
                          </h3>
                        )}
                      </div>
                    );

                  case 'paragraph':
                    return (
                      <p
                        key={index}
                        className="text-silver text-lg leading-relaxed mb-6"
                      >
                        {section.content}
                      </p>
                    );

                  case 'list':
                    return (
                      <ul
                        key={index}
                        className="list-disc list-inside text-silver text-lg leading-relaxed mb-6 space-y-3"
                      >
                        {section.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="marker:text-mint">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );

                  case 'callout':
                    return (
                      <div
                        key={index}
                        className="bg-navy-mid/50 border-l-4 border-mint p-6 my-8 rounded-r"
                      >
                        <p className="text-silver text-lg leading-relaxed m-0">
                          {section.content}
                        </p>
                      </div>
                    );

                  default:
                    return null;
                }
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Author Bio */}
        {(() => {
          const author = getAuthorById(article.authorId);
          return author ? (
            <div className="max-w-3xl mx-auto mb-16">
              <AuthorBio author={author} />
            </div>
          ) : null;
        })()}

        {/* Related Service CTA */}
        {article.relatedService && (
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-mint/10 to-transparent border border-mint/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {article.relatedService.title}
              </h3>
              <p className="text-silver mb-6">{article.relatedService.description}</p>
              <Link
                href={article.relatedService.href}
                className="inline-flex items-center gap-2 bg-mint text-midnight px-6 py-3 rounded font-semibold hover:bg-mint-hover transition-colors"
              >
                <span>Läs mer</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {article.faqItems && article.faqItems.length > 0 && (
          <div className="max-w-3xl mx-auto mb-20">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white mb-8">
                Vanliga frågor
              </h2>
              <FAQ items={article.faqItems} />
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="max-w-5xl mx-auto mb-20">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white mb-8">
                Relaterade artiklar
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => {
                  const relatedDate = new Date(relatedArticle.publishedAt).toLocaleDateString(
                    'sv-SE',
                    {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }
                  );

                  return (
                    <Link
                      key={relatedArticle.slug}
                      href={`/insikter/${relatedArticle.slug}`}
                      className="group"
                    >
                      <div className="bg-navy-mid/30 hover:bg-navy-mid/50 rounded-lg p-6 border border-navy-light hover:border-mint/50 transition-all h-full flex flex-col">
                        <Badge className="w-fit mb-4">
                          {relatedArticle.categoryLabel}
                        </Badge>

                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-mint transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>

                        <p className="text-silver text-sm mb-6 flex-grow line-clamp-2">
                          {relatedArticle.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-silver">
                          <span>{relatedDate}</span>
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Container>

      {/* Contact CTA */}
      <ContactCTA
        title="Vill du diskutera detta ämne?"
        description="Boka ett kostnadsfritt möte så pratar vi igenom hur vi kan hjälpa dig."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
