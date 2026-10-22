import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Web Design Company in Siliguri | Custom Websites — D&B Digitals',
  description: 'Looking for the best web design company in Siliguri & North Bengal? D&B Digitals builds lightning-fast, high-converting websites for hotels, clinics, schools, and businesses. Get direct WhatsApp leads.',
  keywords: 'web design siliguri, website design company in siliguri, best web developer siliguri, web development north bengal, website design darjeeling jalpaiguri, affordable website design siliguri',
  alternates: {
    canonical: 'https://dnbdigitals.in/web-design-siliguri',
  },
  openGraph: {
    title: 'Best Web Design Company in Siliguri | D&B Digitals',
    description: 'Grow your business with Siliguri’s premier custom web development agency. High-speed websites engineered for Google rankings and direct customer inquiries.',
    url: 'https://dnbdigitals.in/web-design-siliguri',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SiliguriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'D&B Digitals - Web Design Company Siliguri',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/web-design-siliguri`,
    url: `${baseUrl}/web-design-siliguri`,
    telephone: '+918918186998',
    priceRange: '₹15,000 - ₹1,50,000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Siliguri',
      addressRegion: 'West Bengal',
      postalCode: '734001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.7271,
      longitude: 88.3953,
    },
    areaServed: [
      { '@type': 'City', name: 'Siliguri' },
      { '@type': 'City', name: 'Jalpaiguri' },
      { '@type': 'City', name: 'Darjeeling' },
      { '@type': 'City', name: 'Kalimpong' },
      { '@type': 'City', name: 'Kurseong' },
      { '@type': 'City', name: 'Bagdogra' },
      { '@type': 'City', name: 'Cooch Behar' },
      { '@type': 'State', name: 'West Bengal' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${baseUrl}/#locations` },
      { '@type': 'ListItem', position: 3, name: 'Web Design Siliguri', item: `${baseUrl}/web-design-siliguri` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does website design cost in Siliguri?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At D&B Digitals, professional business websites start from ₹15,000 for local service businesses and go up to ₹45,000 - ₹95,000 for custom hotel booking engines, clinic management systems, and e-commerce platforms. We offer 100% transparent pricing with no hidden charges.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you meet clients in person in Siliguri?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We are based locally in North Bengal. We regularly meet business owners across Siliguri (Sevoke Road, Hill Cart Road, Matigara, Pradhan Nagar) for in-person project discovery sessions and strategy meetings.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can our website be launched?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard business and clinic websites are launched within 7 to 14 days. More complex custom booking or e-commerce portals typically take 3 to 4 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my website rank on Google in Siliguri?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every website we build includes local SEO architecture, Google Business Profile integration, schema markup, and speed optimization so your business appears when local customers search for your services.',
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
