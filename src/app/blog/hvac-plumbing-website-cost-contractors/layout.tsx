import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC & Plumbing Website Cost: What Contractors Should Actually Budget in 2026',
  description: 'A straightforward pricing guide for HVAC and plumbing contractors. Learn the real costs of web design, essential features for lead generation, and ROI.',
  keywords: 'HVAC website cost, plumber website design cost, contractor web design pricing, home service website cost',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/blog/hvac-plumbing-website-cost-contractors',
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
    headline: 'HVAC & Plumbing Website Cost: What Contractors Should Actually Budget in 2026',
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
    description: 'A straightforward pricing guide for HVAC and plumbing contractors. Learn the real costs of web design, essential features for lead generation, and ROI.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'HVAC & Plumbing Website Cost: What Contractors Should Actually Budget in 2026', item: `${baseUrl}/blog/hvac-plumbing-website-cost-contractors` },
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
