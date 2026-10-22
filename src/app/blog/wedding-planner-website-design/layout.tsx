import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Planner Website Design: How to Book Luxury Weddings (2026)',
  description: 'How Indian wedding planners and event management companies can book ₹10L+ destination weddings with a high-converting website. Complete design strategy and pricing.',
  keywords: 'wedding planner website design, wedding planner website cost india, event management website development, wedding planner lead generation, luxury wedding website design',
  alternates: {
    canonical: 'https://dnbdigitals.in/blog/wedding-planner-website-design',
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
    headline: 'Wedding Planner Website Design: How to Book ₹10L+ Luxury Weddings Online in India',
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
    description: 'Learn how luxury wedding planners and event companies in India use custom web architecture to attract high-budget destination wedding clients.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Wedding Planner Website Design', item: `${baseUrl}/blog/wedding-planner-website-design` },
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
