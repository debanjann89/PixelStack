import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Website Design India: What Parents Expect in 2026 | D&B Digitals',
  description: 'How private schools in India can maximize admissions with a modern, fast website. Complete guide on CBSE/ICSE compliance, admission funnels, and website cost in India.',
  keywords: 'school website design india, private school website development, school website cost india, cbse school website mandatory disclosure, best school web developer',
  alternates: {
    canonical: 'https://dnbdigitals.in/blog/school-website-design-india',
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
    headline: 'Private School Website Design in India: What Parents Actually Expect in 2026',
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
    description: 'Learn how modern Indian private schools build trust and drive student admissions through high-speed, compliant web architecture.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'School Website Design India', item: `${baseUrl}/blog/school-website-design-india` },
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
