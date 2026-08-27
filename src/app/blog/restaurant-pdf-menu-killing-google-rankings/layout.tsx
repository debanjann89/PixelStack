import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Restaurant\'s PDF Menu is Killing Your Google Rankings',
  description: 'Learn why PDF menus destroy restaurant SEO and mobile user experience. Discover how HTML menus with schema markup can boost local search visibility and drive reservations.',
  keywords: 'restaurant website design, restaurant website cost India, restaurant online menu SEO, restaurant PDF menu problems',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/blog/restaurant-pdf-menu-killing-google-rankings',
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
    headline: 'Why Your Restaurant\'s PDF Menu is Killing Your Google Rankings',
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
    description: 'Learn why PDF menus destroy restaurant SEO and mobile user experience. Discover how HTML menus with schema markup can boost local search visibility and drive reservations.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Why Your Restaurant\'s PDF Menu is Killing Your Google Rankings', item: `${baseUrl}/blog/restaurant-pdf-menu-killing-google-rankings` },
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
