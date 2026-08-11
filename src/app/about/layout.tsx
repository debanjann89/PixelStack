import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

export const metadata: Metadata = {
  title: 'About Us | Founders Debanjan Amin & Banashree Das',
  description:
    'Learn about D&B Digitals — a digital agency co-founded by Debanjan Amin (Lead Developer) and Banashree Das (Growth Strategist). We build web applications that drive real business growth.',
  keywords: [
    'About D&B Digitals',
    'Debanjan Amin Developer',
    'Banashree Das Growth Strategist',
    'Web Agency Founders Siliguri',
    'Digital Agency Story'
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Us | Founders Debanjan Amin & Banashree Das | D&B Digitals',
    description:
      'We are a digital agency built on the belief that great design drives great business.',
    url: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE_URL },
      { '@type': 'ListItem', 'position': 2, 'name': 'About Us', 'item': `${SITE_URL}/about` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      {children}
    </>
  );
}
