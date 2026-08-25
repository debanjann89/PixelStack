import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why 90% of Wix & WordPress Websites Fail to Rank on Google (2026)',
  description: 'Discover why template builders like Wix and bloated WordPress themes struggle to hit Page 1 of Google — and how custom Next.js web architecture fixes Core Web Vitals and SEO rankings.',
  keywords: 'why wix websites fail to rank, wordpress seo problems, wix vs custom website seo, core web vitals ranking factor, custom nextjs web development agency',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/blog/why-wix-wordpress-websites-fail-to-rank-google',
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
    headline: 'Why 90% of Wix & WordPress Websites Fail to Rank on Google (And How to Fix It)',
    author: {
      '@type': 'Person',
      name: 'Debanjan Amin',
    },
    datePublished: '2026-08-22T08:00:00+08:00',
    dateModified: '2026-08-22T08:00:00+08:00',
    publisher: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    image: `${baseUrl}/opengraph-image.png`,
    description:
      'Discover why template builders like Wix and bloated WordPress themes struggle to hit Page 1 of Google — and how custom Next.js web architecture fixes Core Web Vitals and SEO rankings.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Why Wix & WordPress Websites Fail to Rank on Google',
        item: `${baseUrl}/blog/why-wix-wordpress-websites-fail-to-rank-google`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
