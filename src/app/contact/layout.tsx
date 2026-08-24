import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

export const metadata: Metadata = {
  title: 'Contact Us | Book a Free Consultation with D&B Digitals',
  description:
    'Contact D&B Digitals for custom web development and SEO. Book a consultation or request a project proposal. Call +91 8918186998 or reach out online.',
  keywords: [
    'Contact D&B Digitals',
    'Hire Web Development Agency',
    'Web Design Consultation Siliguri',
    'Website Proposal Request'
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Book a Free Consultation | D&B Digitals',
    description:
      'Have a project in mind? We would love to hear about it. Tell us about your business vision today.',
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE_URL },
      { '@type': 'ListItem', 'position': 2, 'name': 'Contact', 'item': `${SITE_URL}/contact` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      {children}
    </>
  );
}
