import { ImageResponse } from 'next/og';

export const alt = 'Axuvo — Teknikpartner för tillväxt';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
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

        {/* Logo text */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-2px',
            marginBottom: 16,
          }}
        >
          Axuvo
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#34d399',
            fontWeight: 500,
          }}
        >
          Teknikpartner för tillväxt
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            gap: 8,
          }}
        >
          <div style={{ fontSize: 16, color: '#94a3b8' }}>axuvo.se</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
