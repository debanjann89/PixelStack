import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top SEO Services & Agency in India | Rank #1 on Google — D&B Digitals',
  description:
    'Looking for the best SEO agency in India? D&B Digitals provides advanced technical SEO, high-intent keyword optimization, programmatically generated local schema, and revenue-focused organic growth.',
  keywords:
    'seo services india, best seo agency india, seo company india, technical seo services india, organic search optimization india, affordable seo packages india, ecommerce seo india, local seo india',
  alternates: {
    canonical: 'https://dnbdigitals.in/seo-services-india',
  },
  openGraph: {
    title: 'Top SEO Services & Agency in India | D&B Digitals',
    description:
      'Drive predictable organic leads with India’s technical SEO specialists. Sub-second page speeds, Google Core Web Vitals optimization, and Page 1 keyword dominance.',
    url: 'https://dnbdigitals.in/seo-services-india',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SEOIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'D&B Digitals - SEO Agency India',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/seo-services-india`,
    url: `${baseUrl}/seo-services-india`,
    telephone: '+918918186998',
    priceRange: '$$',
    serviceType: 'Search Engine Optimization',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'SEO Services India',
        item: `${baseUrl}/seo-services-india`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does SEO take to produce measurable leads in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Technical SEO fixes and Google Business Profile optimizations generate early keyword movement within 3 to 4 weeks. Competitive national commercial keywords typically reach Page 1 rankings within 60 to 90 days.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does D&B Digitals differ from traditional SEO agencies in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are software engineers and Next.js developers, not just blog writers. We fix Core Web Vitals, write semantic JSON-LD schema architectures, optimize server response times, and target buyer-intent keywords that actually generate WhatsApp leads.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide monthly SEO tracking and keyword reports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every month you receive a transparent breakdown of keyword rank movements, Google Search Console impression growth, organic click counts, and high-converting pages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you optimize our existing website or do we need a new build?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We audit and optimize existing platforms, or if a legacy site is severely held back by slow WordPress/Wix code, we can migrate it cleanly to Next.js without losing existing backlink equity.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
