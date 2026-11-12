import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Digital Marketing Agency in India | Growth & Performance — D&B Digitals',
  description:
    'Looking for the best digital marketing agency in India? D&B Digitals delivers full-funnel digital growth: custom web development, Google SEO, Meta ads, social media management, and creative design.',
  keywords:
    'digital marketing agency india, best digital marketing company in india, digital marketing services india, online marketing agency india, performance marketing company india, full service digital agency india, seo and digital marketing india',
  alternates: {
    canonical: 'https://dnbdigitals.in/digital-marketing-india',
  },
  openGraph: {
    title: 'Top Digital Marketing Agency in India | D&B Digitals',
    description:
      'Scale your business nationwide with India’s full-service digital marketing agency. Next.js websites, SEO rankings, Instagram growth, and high-ROI Meta & Google Ads.',
    url: 'https://dnbdigitals.in/digital-marketing-india',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DigitalMarketingIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'D&B Digitals - Digital Marketing Agency India',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/digital-marketing-india`,
    url: `${baseUrl}/digital-marketing-india`,
    telephone: '+918918186998',
    priceRange: '$$',
    serviceType: 'Digital Marketing Agency',
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
        name: 'Digital Marketing India',
        item: `${baseUrl}/digital-marketing-india`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What digital marketing services does D&B Digitals offer in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer an end-to-end digital growth suite: high-speed Next.js web development, nationwide and local SEO, Meta (Instagram & Facebook) Ads, Google Search & Display Ads, social media management, brand identity design, and video editing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does D&B Digitals work with clients remotely across India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our workflow is 100% remote-native and WhatsApp-first. We conduct strategy sessions over Google Meet, share interactive Figma prototypes, provide live staging links, and give weekly transparent progress reports on WhatsApp.',
        },
      },
      {
        '@type': 'Question',
        name: 'How soon can we expect real leads and ROI from digital marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Paid Meta and Google Ads campaigns start generating qualified customer inquiries within 5 to 7 days of launch. Search Engine Optimization (SEO) compounds sustainably, producing top-page Google rankings and organic traffic within 60 to 90 days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer custom digital marketing packages for Indian businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We do not sell cookie-cutter plans. Whether you are an early-stage startup, D2C brand, clinic chain, educational institution, or hotel, we build a tailored roadmap matched to your immediate customer acquisition goals.',
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
