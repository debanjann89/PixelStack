import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

export const metadata: Metadata = {
  title: 'Privacy Policy | DPDP Act (India) Compliance | D&B Digitals',
  description:
    'Read D&B Digitals privacy policy. Fully compliant with India’s Digital Personal Data Protection (DPDP) Act 2023. Learn how your data is protected and your privacy rights.',
  keywords: [
    'Privacy Policy D&B Digitals',
    'DPDP Act Compliance India',
    'Data Protection Policy',
    'D&B Digitals Privacy Notice',
    'Data Erasure Rights',
  ],
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | D&B Digitals (DPDP Act Compliant)',
    description:
      'We respect your privacy and protect your data in full compliance with the Digital Personal Data Protection Act 2023 (India).',
    url: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE_URL}/privacy` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}
