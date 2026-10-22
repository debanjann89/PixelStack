import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doctor & Clinic Website Cost in India (2026): ₹ Pricing & ROI Guide',
  description: 'How much does a doctor or clinic website cost in India in 2026? Transparent breakdown of website pricing for individual doctors, polyclinics, and diagnostic centers with ROI math.',
  keywords: 'doctor clinic website cost india, clinic website design cost, website for doctors india, medical clinic website development, hospital website cost india',
  alternates: {
    canonical: 'https://dnbdigitals.in/blog/doctor-clinic-website-cost-india',
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
    headline: 'Doctor & Clinic Website Cost in India (2026): ₹ Pricing & ROI Guide',
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
    description: 'A realistic, data-backed guide on website design costs for doctors, clinics, and medical practices in India with local Google SEO strategies.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Doctor & Clinic Website Cost India', item: `${baseUrl}/blog/doctor-clinic-website-cost-india` },
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
