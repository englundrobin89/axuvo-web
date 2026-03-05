import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { ArrowLeft, ArrowRight, Linkedin, Mail, Calendar, Clock } from 'lucide-react';
import { authors, getAuthorBySlug } from '@/data/authors';
import { articles } from '@/data/articles';

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {
      title: 'Profilen hittades inte',
      description: 'The author profile you are looking for does not exist.',
    };
  }

  return {
    title: `${author.name} | Om Axuvo | Axuvo`,
    description: author.shortBio,
    openGraph: {
      title: author.name,
      description: author.shortBio,
      type: 'profile',
    },
  };
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Profilen hittades inte</h1>
          <Link href="/om-axuvo" className="text-mint hover:text-white transition-colors">
            Tillbaka till Om Axuvo
          </Link>
        </div>
      </Container>
    );
  }

  // Get articles by this author
  const authorArticles = articles.filter((article) => article.author === author.name);

  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Hem', url: 'https://axuvo.se' },
          { name: 'Om Axuvo', url: 'https://axuvo.se/om-axuvo' },
          { name: author.name, url: `https://axuvo.se/om-axuvo/${author.slug}` },
        ]}
      />

      {/* Person JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: author.name,
            jobTitle: author.role,
            description: author.shortBio,
            url: `https://axuvo.se/om-axuvo/${author.slug}`,
            sameAs: author.linkedin ? [author.linkedin] : [],
            email: author.email,
          }),
        }}
      />

      <Container>
        {/* Back Link */}
        <div className="pt-20 pb-12">
          <Link
            href="/om-axuvo"
            className="inline-flex items-center gap-2 text-silver hover:text-mint transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Tillbaka till Om Axuvo</span>
          </Link>
        </div>

        {/* Author Header */}
        <ScrollReveal>
          <div className="mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {author.name}
            </h1>

            <p className="text-2xl text-mint mb-6">{author.role}</p>

            <p className="text-xl text-silver mb-8 leading-relaxed">
              {author.shortBio}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy-mid hover:bg-navy-mid/80 text-white px-4 py-2 rounded transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              )}
              {author.email && (
                <a
                  href={`mailto:${author.email}`}
                  className="inline-flex items-center gap-2 bg-navy-mid hover:bg-navy-mid/80 text-white px-4 py-2 rounded transition-colors"
                  aria-label="E-mail"
                >
                  <Mail size={20} />
                  <span>E-mail</span>
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Full Bio */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="prose prose-invert max-w-none">
              {author.fullBio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-silver text-lg leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Expertise Tags */}
        {author.expertise.length > 0 && (
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl font-semibold text-white mb-8">Expertis</h2>
              <div className="flex flex-wrap gap-3">
                {author.expertise.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Articles by this author */}
        {authorArticles.length > 0 && (
          <div className="max-w-5xl mx-auto mb-20">
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-white mb-8">
                  Artiklar av {author.name.split(' ')[0]}
                </h2>

                <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {authorArticles.map((article) => {
                      const publishedDate = new Date(article.publishedAt).toLocaleDateString(
                        'sv-SE',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        }
                      );

                      return (
                        <Link
                          key={article.slug}
                          href={`/insikter/${article.slug}`}
                          className="group"
                        >
                          <div className="bg-navy-mid/30 hover:bg-navy-mid/50 rounded-lg p-6 border border-navy-light hover:border-mint/50 transition-all h-full flex flex-col">
                            <Badge className="w-fit mb-4">
                              {article.categoryLabel}
                            </Badge>

                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-mint transition-colors line-clamp-2">
                              {article.title}
                            </h3>

                            <p className="text-silver text-sm mb-6 flex-grow line-clamp-2">
                              {article.description}
                            </p>

                            <div className="flex items-center justify-between text-xs text-silver">
                              <div className="flex items-center gap-2">
                                <Calendar size={14} />
                                <span>{publishedDate}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock size={14} />
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </StaggerReveal>
              </div>
            </ScrollReveal>
          </div>
        )}
      </Container>
    </>
  );
}
