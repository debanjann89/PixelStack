import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Website Development | Property Listing & Agent Sites',
  description: 'Custom real estate website development with property listings, lead capture, and neighborhood guides. Help buyers find their dream home with a premium website by D&B Digitals.',
  keywords: 'real estate website development, property listing website, real estate agent website, IDX website design',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/industries/real-estate-website-development',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://d-a-b-digitals.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://d-a-b-digitals.vercel.app/industries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Real Estate Website Development',
        item: 'https://d-a-b-digitals.vercel.app/industries/real-estate-website-development',
      },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Website Development & Property Listing Web Design',
    provider: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      url: 'https://d-a-b-digitals.vercel.app',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'India' },
    ],
    description: 'Custom real estate website development with property listings, lead capture funnels, neighborhood guides, and IDX integration.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
