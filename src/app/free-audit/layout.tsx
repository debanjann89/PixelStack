import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Website Audit | Get Your Speed & SEO Report — D&B Digitals',
  description: 'Get a free, no-obligation website audit from D&B Digitals. We analyze your site speed, SEO health, mobile responsiveness, and conversion potential. Results delivered via WhatsApp within 24 hours.',
  keywords: 'free website audit, website speed test, SEO audit free, website analysis, site performance check',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/free-audit',
  },
};

export default function FreeAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Free Website Audit | Get Your Speed & SEO Report — D&B Digitals',
    description: 'Get a free, no-obligation website audit from D&B Digitals. We analyze your site speed, SEO health, mobile responsiveness, and conversion potential.',
    url: `${baseUrl}/free-audit`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Free Website Audit', item: `${baseUrl}/free-audit` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
