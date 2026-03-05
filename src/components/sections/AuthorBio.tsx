import React from 'react';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import type { Author } from '@/data/authors';

interface AuthorBioProps {
  author: Author;
}

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

export default function AuthorBio({ author }: AuthorBioProps) {
  const initials = getInitials(author.name);
  const firstName = author.name.split(' ')[0];

  return (
    <div className="bg-navy-mid border border-white/5 rounded-lg p-6 lg:p-8">
      <div className="flex gap-4 lg:gap-6">
        {/* Left side: Author initials circle */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-mint text-midnight flex items-center justify-center font-semibold text-sm">
            {initials}
          </div>
        </div>

        {/* Right side: Author information */}
        <div className="flex-1 min-w-0">
          <p className="text-slate text-xs uppercase tracking-wide mb-2">
            Skriven av
          </p>

          <Link
            href={`/om-axuvo/${author.slug}`}
            className="text-white font-semibold hover:text-mint transition-colors block mb-1"
          >
            {author.name}
          </Link>

          <p className="text-slate text-sm mb-2">
            {author.role}
          </p>

          <p className="text-silver text-sm line-clamp-2 mb-4">
            {author.shortBio}
          </p>

          {/* Footer row: LinkedIn and profile link */}
          <div className="flex items-center gap-4">
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-mint transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}

            <Link
              href={`/om-axuvo/${author.slug}`}
              className="text-silver hover:text-mint transition-colors text-sm"
            >
              Läs mer om {firstName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
