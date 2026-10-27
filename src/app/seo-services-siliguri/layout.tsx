import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services in Siliguri | Rank #1 on Google — D&B Digitals',
  description:
    'Looking for the best SEO expert in Siliguri & North Bengal? D&B Digitals helps businesses rank on Google\'s first page. Local SEO, technical SEO, and content strategy. WhatsApp us today.',
  keywords:
    'seo services siliguri, seo expert siliguri, seo company north bengal, local seo west bengal, google ranking siliguri, digital marketing siliguri',
  alternates: {
    canonical: 'https://dnbdigitals.in/seo-services-siliguri',
  },
  openGraph: {
    title: 'SEO Services in Siliguri | Rank #1 on Google — D&B Digitals',
    description:
      'Looking for the best SEO expert in Siliguri & North Bengal? D&B Digitals helps businesses rank on Google\'s first page. Local SEO, technical SEO, and content strategy.',
    url: 'https://dnbdigitals.in/seo-services-siliguri',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SEOSiliguriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'D&B Digitals - SEO Services Siliguri',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/seo-services-siliguri`,
    url: `${baseUrl}/seo-services-siliguri`,
    telephone: '+918918186998',
    priceRange: '$$',
    serviceType: 'SEO Services',
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
      { '@type': 'City', name: 'Bagdogra' },
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
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
      { '@type': 'ListItem', position: 3, name: 'SEO Services Siliguri', item: `${baseUrl}/seo-services-siliguri` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does SEO take to show results in Siliguri?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEO typically starts showing measurable results within 60-90 days for local Siliguri searches. We focus on quick wins like Google Business Profile optimization and local citations first, which can drive calls within 2-4 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is local SEO and why does my Siliguri business need it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Local SEO helps your business appear when people search "near me" or city-specific searches like "best restaurant in Siliguri". It puts you in Google Maps and the local 3-pack — the most clicked results for local intent searches.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you do SEO for Hindi or Bengali language searches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We optimize for both English and transliterated Hindi/Bengali search terms. Many North Bengal customers search in mixed languages and we ensure your business appears for all relevant local queries.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is D&B Digitals different from other SEO agencies in Siliguri?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are a local North Bengal team. We understand the Siliguri market — from Sevoke Road businesses to Darjeeling hill station tourism. We combine technical SEO with locally-relevant content that actually resonates with your target customers.',
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
