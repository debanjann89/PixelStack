import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

export const metadata: Metadata = {
  title: 'Client Case Studies & Real Results | D&B Digitals',
  description:
    'Explore detailed case studies on how D&B Digitals built high-converting websites for Dental Clinics, Luxury Resorts, Law Firms, Restaurants, and Tech SaaS.',
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
  openGraph: {
    title: 'Web Development Case Studies | D&B Digitals',
    description:
      'Real client case studies, verified outcomes, and technical breakdowns by D&B Digitals.',
    url: `${SITE_URL}/case-studies`,
  },
};

export default function CaseStudiesLayout({
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
        name: 'Case Studies',
        item: `${SITE_URL}/case-studies`,
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
