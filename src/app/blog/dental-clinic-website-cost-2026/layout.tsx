import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Dental Clinic Website Cost in 2026? (Complete Pricing & ROI Guide)',
  description: 'A comprehensive pricing guide for dental clinic websites in 2026. Discover the real costs, avoid hidden agency fees, and understand the ROI of a high-converting dental website.',
  keywords: 'dental website cost, dental clinic web design pricing, dentist website cost India, how much does a dentist website cost',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/blog/dental-clinic-website-cost-2026',
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
    headline: 'How Much Does a Dental Clinic Website Cost in 2026? (Complete Pricing & ROI Guide)',
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
    description: 'A comprehensive pricing guide for dental clinic websites in 2026. Discover the real costs, avoid hidden agency fees, and understand the ROI of a high-converting dental website.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'How Much Does a Dental Clinic Website Cost in 2026?', item: `${baseUrl}/blog/dental-clinic-website-cost-2026` },
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
