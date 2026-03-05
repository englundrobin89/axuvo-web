import { ImageResponse } from 'next/og';
import { articles } from '@/data/articles';

export const alt = 'Axuvo Insikter';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#0a1628',
            color: '#ffffff',
            fontSize: 48,
          }}
        >
          Artikel hittades inte
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 60,
          background: 'linear-gradient(135deg, #0a1628 0%, #121f36 50%, #1a2d4a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent, #34d399, transparent)',
          }}
        />

        {/* Top: Category badge + read time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              background: 'rgba(52, 211, 153, 0.15)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              borderRadius: 999,
              padding: '8px 20px',
              fontSize: 18,
              color: '#34d399',
              fontWeight: 600,
            }}
          >
            {article.categoryLabel}
          </div>
          <div style={{ fontSize: 18, color: '#94a3b8' }}>
            {article.readTime}
          </div>
        </div>

        {/* Middle: Title */}
        <div
          style={{
            fontSize: article.title.length > 60 ? 42 : 52,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
            letterSpacing: '-1px',
            maxWidth: '90%',
          }}
        >
          {article.title}
        </div>

        {/* Bottom: Author + Axuvo branding */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 20, color: '#ffffff', fontWeight: 500 }}>
              {article.author}
            </div>
            <div style={{ fontSize: 16, color: '#94a3b8' }}>
              {new Date(article.publishedAt).toLocaleDateString('sv-SE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-1px',
              }}
            >
              Axuvo
            </div>
            <div style={{ fontSize: 16, color: '#94a3b8' }}>
              insikter
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
