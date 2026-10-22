import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Development Company in Kolkata | D&B Digitals',
  description: 'Looking for a premier web design company in Kolkata? D&B Digitals builds custom Next.js websites for businesses, startups, clinics, and brands across Kolkata & West Bengal.',
  keywords: 'web design kolkata, website development company in kolkata, best web designer kolkata, web design agency salt lake sector v, new town web developer kolkata, ecommerce website design kolkata',
  alternates: {
    canonical: 'https://dnbdigitals.in/web-design-kolkata',
  },
  openGraph: {
    title: 'Top Web Design & Development Company in Kolkata | D&B Digitals',
    description: 'Custom high-performance web development for Kolkata businesses. Zero slow templates. Sub-1s page speeds, local Google SEO ranking, and direct WhatsApp customer conversion.',
    url: 'https://dnbdigitals.in/web-design-kolkata',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function KolkataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'D&B Digitals - Web Design Company Kolkata',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/web-design-kolkata`,
    url: `${baseUrl}/web-design-kolkata`,
    telephone: '+918918186998',
    priceRange: '₹15,000 - ₹2,50,000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.5726,
      longitude: 88.3639,
    },
    areaServed: [
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Salt Lake Sector V' },
      { '@type': 'City', name: 'New Town' },
      { '@type': 'City', name: 'Howrah' },
      { '@type': 'City', name: 'Bidhannagar' },
      { '@type': 'City', name: 'Durgapur' },
      { '@type': 'City', name: 'Asansol' },
      { '@type': 'State', name: 'West Bengal' },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${baseUrl}/#locations` },
      { '@type': 'ListItem', position: 3, name: 'Web Design Kolkata', item: `${baseUrl}/web-design-kolkata` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does website design cost in Kolkata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our website packages for Kolkata businesses start at ₹15,000 for standard business sites. Custom dynamic websites with appointment systems or lead funnels range from ₹45,000 to ₹85,000, while complex e-commerce or SaaS platforms range from ₹1,20,000 upwards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with startups in Salt Lake Sector V and New Town?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We specialize in modern Next.js and full-stack web applications for tech startups, B2B agencies, and service enterprises across Sector V, New Town, and Rajarhat.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you coordinate with clients in Kolkata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide seamless digital project delivery via WhatsApp, Google Meet, and phone, with dedicated staging links to preview live progress. We also have team availability for scheduled in-person meetings in Kolkata.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will our website rank for Kolkata local searches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every project includes technical SEO, fast Core Web Vitals, Google Search Console registration, and structured schema markup engineered to rank for target keywords in Kolkata and throughout West Bengal.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
