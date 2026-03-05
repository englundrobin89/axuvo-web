'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  readTime: string;
  publishedAt: string;
  author: string;
}

interface CategoryOption {
  value: string;
  label: string;
}

interface ArticleGridProps {
  articles: ArticleItem[];
  categories: CategoryOption[];
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticleGrid({ articles, categories }: ArticleGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered =
    activeCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-mint text-midnight'
              : 'bg-navy-mid text-silver border border-white/10 hover:border-mint/30 hover:text-white'
          }`}
        >
          Alla ({articles.length})
        </button>
        {categories.map((cat) => {
          const count = articles.filter((a) => a.category === cat.value).length;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-mint text-midnight'
                  : 'bg-navy-mid text-silver border border-white/10 hover:border-mint/30 hover:text-white'
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
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
      </div>

      {filtered.length === 0 && (
        <p className="text-silver text-center py-12">
          Inga artiklar i denna kategori ännu.
        </p>
      )}
    </>
  );
}
