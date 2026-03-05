import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, Clock } from 'lucide-react';
import type { Article } from '@/data/articles';

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
  subtitle?: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  title = 'Relaterade insikter',
  subtitle = 'Fördjupa dig i ämnen som är relevanta för dig.',
}) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12 lg:py-16">
      <Container>
        <ScrollReveal variant="fade-up">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-2">
                {title}
              </h2>
              <p className="text-silver">{subtitle}</p>
            </div>
            <Link
              href="/insikter"
              className="hidden md:flex items-center gap-1 text-mint hover:text-white transition-colors text-sm font-medium"
            >
              Alla artiklar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <StaggerReveal
          variant="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={`/insikter/${article.slug}`}
              className="group block"
            >
              <article className="bg-navy-mid border border-white/5 rounded-lg p-6 h-full flex flex-col hover:border-mint/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="text-xs">{article.categoryLabel}</Badge>
                  <div className="flex items-center gap-1 text-slate text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-mint transition-colors">
                  {article.title}
                </h3>

                <p className="text-silver text-sm flex-grow mb-4">
                  {article.description}
                </p>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-mint text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Läs mer <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </StaggerReveal>

        <Link
          href="/insikter"
          className="flex md:hidden items-center justify-center gap-1 text-mint hover:text-white transition-colors text-sm font-medium mt-8"
        >
          Alla artiklar <ArrowRight className="w-4 h-4" />
        </Link>
      </Container>
    </section>
  );
};
