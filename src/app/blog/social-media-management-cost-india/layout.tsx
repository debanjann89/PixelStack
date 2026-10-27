import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Management Cost in India 2026 | What You Actually Pay',
  description: 'How much does social media management cost in India in 2026? Freelancers vs agencies vs in-house — real price breakdown for Instagram, Facebook & LinkedIn management. Find the right fit for your business.',
  keywords: 'social media management cost india, instagram management price india, social media agency cost 2026, how much social media management india, social media marketing cost india',
  alternates: {
    canonical: 'https://dnbdigitals.in/blog/social-media-management-cost-india',
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
    headline: 'Social Media Management Cost in India 2026: What You Actually Pay',
    author: {
      '@type': 'Person',
      name: 'Debanjan Amin',
    },
    datePublished: '2026-10-27T08:00:00+05:30',
    dateModified: '2026-10-27T08:00:00+05:30',
    publisher: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    image: `${baseUrl}/opengraph-image.png`,
    description: 'How much does social media management cost in India in 2026? Freelancers vs agencies vs in-house — real price breakdown for Instagram, Facebook & LinkedIn management.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Social Media Management Cost India', item: `${baseUrl}/blog/social-media-management-cost-india` },
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
