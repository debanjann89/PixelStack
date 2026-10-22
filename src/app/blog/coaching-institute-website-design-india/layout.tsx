import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching Institute Website Design India: 3x Student Admissions (2026)',
  description: 'How Indian coaching institutes and tuition centers can 3x student admission inquiries. Learn why pamphlet marketing is dying and how a high-speed website converts parents on WhatsApp.',
  keywords: 'coaching institute website design india, website for coaching classes, coaching institute website cost, tuition center web development, student admission lead generation',
  alternates: {
    canonical: 'https://dnbdigitals.in/blog/coaching-institute-website-design-india',
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
    headline: 'Coaching Institute Website Design India: How to Get 3x More Student Inquiries in 2026',
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
    description: 'Comprehensive guide for Indian coaching institutes on building websites that convert parents into enrolled students via WhatsApp and local Google SEO.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Coaching Institute Website Design India', item: `${baseUrl}/blog/coaching-institute-website-design-india` },
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
