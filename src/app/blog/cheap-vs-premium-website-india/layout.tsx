import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '₹15,000 vs ₹1,50,000 Website: Kya Farak Hai? | D&B Digitals',
  description: 'Confused between a cheap ₹5,000 website and a ₹1,50,000 custom web build in India? Here is the honest truth about speed, SEO, hidden costs, and business ROI.',
  keywords: 'cheap vs premium website india, website design cost india, custom website vs wordpress india, website development pricing india, best web design agency india',
  alternates: {
    canonical: 'https://dnbdigitals.in/blog/cheap-vs-premium-website-india',
  },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '₹15,000 vs ₹1,50,000 Website: Kya Farak Hai? (The Real Indian Business Guide)',
    author: {
      '@type': 'Person',
      name: 'Debanjan Amin',
    },
    datePublished: '2026-10-22T08:00:00+05:30',
    dateModified: '2026-10-22T08:00:00+05:30',
    publisher: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    image: `${baseUrl}/opengraph-image.png`,
    description: 'An honest, transparent comparison of cheap template websites vs custom high-performance web engineering for Indian business owners.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Cheap vs Premium Website India', item: `${baseUrl}/blog/cheap-vs-premium-website-india` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
