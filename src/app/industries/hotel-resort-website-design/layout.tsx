import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel & Resort Website Design | Luxury Hospitality Web Development',
  description: 'Premium website design for hotels, resorts, and hospitality businesses. Increase direct bookings and reduce OTA commissions with a stunning, fast website by D&B Digitals.',
  keywords: 'hotel website design, resort website development, hospitality web design, hotel booking website',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/industries/hotel-resort-website-design',
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
        name: 'Hotel & Resort Website Design',
        item: 'https://d-a-b-digitals.vercel.app/industries/hotel-resort-website-design',
      },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Hotel & Resort Website Design & Hospitality Web Development',
    provider: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      url: 'https://d-a-b-digitals.vercel.app',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'India' },
    ],
    description: 'Premium website design for hotels, resorts, and hospitality businesses featuring direct booking systems, virtual tours, and OTA commission reduction strategies.',
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
