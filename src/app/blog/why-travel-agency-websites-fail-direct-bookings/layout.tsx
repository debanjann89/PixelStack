import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why 80% of Travel Agency Websites Fail to Generate Direct Bookings (And What to Build Instead)',
  description: 'Most travel agency websites act as digital brochures while OTAs siphon 15-25% in commissions. Learn why template sites fail and how to build a high-converting direct booking engine.',
  keywords: 'travel agency website design, tour operator website cost, travel agency direct booking website, travel website development',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/blog/why-travel-agency-websites-fail-direct-bookings',
  },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why 80% of Travel Agency Websites Fail to Generate Direct Bookings (And What to Build Instead)',
    author: {
      '@type': 'Person',
      name: 'Debanjan Amin',
    },
    datePublished: '2026-08-28T08:00:00+05:30',
    dateModified: '2026-08-28T08:00:00+05:30',
    publisher: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    image: `${baseUrl}/opengraph-image.png`,
    description: 'Most travel agency websites act as digital brochures while OTAs siphon 15-25% in commissions. Learn why template sites fail and how to build a high-converting direct booking engine.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Why Travel Agency Websites Fail', item: `${baseUrl}/blog/why-travel-agency-websites-fail-direct-bookings` },
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
