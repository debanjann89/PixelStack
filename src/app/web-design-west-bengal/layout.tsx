import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Web Design & Development Company in West Bengal | D&B Digitals',
  description: 'West Bengal’s leading custom web development agency. We build fast, high-converting websites for businesses across Kolkata, Siliguri, Durgapur, Asansol & North Bengal.',
  keywords: 'web design company west bengal, website design west bengal, best web developer west bengal, web development agency kolkata siliguri, professional web design wb',
  alternates: {
    canonical: 'https://dnbdigitals.in/web-design-west-bengal',
  },
  openGraph: {
    title: 'Top Web Design & Development Company in West Bengal | D&B Digitals',
    description: 'Grow your business across West Bengal with high-speed Next.js websites built for direct WhatsApp customer inquiries and Google Page 1 rankings.',
    url: 'https://dnbdigitals.in/web-design-west-bengal',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function WestBengalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'D&B Digitals - Web Design Company West Bengal',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/web-design-west-bengal`,
    url: `${baseUrl}/web-design-west-bengal`,
    telephone: '+918918186998',
    priceRange: '₹15,000 - ₹2,50,000',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'State', name: 'West Bengal' },
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Siliguri' },
      { '@type': 'City', name: 'Durgapur' },
      { '@type': 'City', name: 'Asansol' },
      { '@type': 'City', name: 'Bardhaman' },
      { '@type': 'City', name: 'Howrah' },
      { '@type': 'City', name: 'Malda' },
      { '@type': 'City', name: 'Kharagpur' },
      { '@type': 'City', name: 'Darjeeling' },
      { '@type': 'City', name: 'Jalpaiguri' },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${baseUrl}/#locations` },
      { '@type': 'ListItem', position: 3, name: 'Web Design West Bengal', item: `${baseUrl}/web-design-west-bengal` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
