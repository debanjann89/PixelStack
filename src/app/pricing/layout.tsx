import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Pricing | Transparent Website Cost Plans — D&B Digitals',
  description: 'Transparent web design pricing for small businesses. From starter websites at ₹15,000 to custom enterprise builds. No hidden fees. See what you get at every tier.',
  keywords: 'web design pricing, website cost India, web development packages, website design plans, affordable web design agency',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Web Design Pricing | Transparent Website Cost Plans',
    description: 'Transparent web design pricing for small businesses. From starter websites at ₹15,000 to custom enterprise builds. No hidden fees. See what you get at every tier.',
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
