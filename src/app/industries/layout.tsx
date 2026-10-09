import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

export const metadata: Metadata = {
  title: 'Industry-Specific Web Development & UI/UX Solutions | D&B Digitals',
  description:
    'Custom web development, conversion-focused UI/UX design, and technical SEO engineered specifically for Dental Clinics, Home Services, Hotels & Resorts, and Real Estate.',
  alternates: {
    canonical: `${SITE_URL}/industries`,
  },
  openGraph: {
    title: 'Industry Web Development Solutions | D&B Digitals',
    description:
      'High-performance, industry-tailored websites engineered for Dental Clinics, HVAC/Plumbing, Hospitality, and Real Estate.',
    url: `${SITE_URL}/industries`,
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: `${SITE_URL}/industries`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
