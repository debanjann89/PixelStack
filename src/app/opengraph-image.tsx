import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'D&B Digitals | Premium Web Development & Digital Growth Agency';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Ambient Top Right Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Top Tagline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#10b981',
            }}
          />
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#10b981',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            D&B Digitals Agency
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '1000px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: 0,
              color: '#ffffff',
            }}
          >
            We Build High-Performance Digital Growth Machines.
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#a1a1aa',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Custom Next.js Web Development, UI/UX Design & Technical SEO.
          </p>
        </div>

        {/* Footer info strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            borderTop: '1px solid #27272a',
            paddingTop: '28px',
            width: '100%',
          }}
        >
          <span style={{ fontSize: '18px', color: '#10b981', fontWeight: 600 }}>
            ⚡ Fast Next.js 15
          </span>
          <span style={{ fontSize: '18px', color: '#a1a1aa', fontWeight: 600 }}>
            🎯 100/100 Lighthouse SEO
          </span>
          <span style={{ fontSize: '18px', color: '#a1a1aa', fontWeight: 600 }}>
            🚀 Serving Businesses in the US & India
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
