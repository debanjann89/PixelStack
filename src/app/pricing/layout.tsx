import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Pricing & Packages | Custom Website Quotes — D&B Digitals',
  description: 'Custom web design pricing and tailored investment packages. Flexible tiers from local business starter sites to custom enterprise platforms. Request an instant quote.',
  keywords: 'web design pricing, website cost India, web development packages, website design plans, custom website quote agency',
  alternates: {
    canonical: 'https://dnbdigitals.in/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Web Design Pricing & Packages | Custom Website Quotes',
    description: 'Custom web design pricing and tailored investment packages. Flexible tiers from local business starter sites to custom enterprise platforms. Request an instant quote.',
    url: `${baseUrl}/pricing`,
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${baseUrl}/pricing` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
