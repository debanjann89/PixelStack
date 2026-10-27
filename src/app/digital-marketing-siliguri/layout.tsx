import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Siliguri | Grow Your Business — D&B Digitals',
  description:
    'Top digital marketing agency in Siliguri & North Bengal. Website, SEO, social media, video, and graphic design — all under one roof. D&B Digitals delivers real results for local businesses.',
  keywords:
    'digital marketing siliguri, digital marketing agency north bengal, online marketing siliguri, digital marketing west bengal, best digital marketing company siliguri',
  alternates: {
    canonical: 'https://dnbdigitals.in/digital-marketing-siliguri',
  },
  openGraph: {
    title: 'Digital Marketing Agency in Siliguri | D&B Digitals',
    description:
      'Top digital marketing agency in Siliguri & North Bengal. Website, SEO, social media, video, and graphic design — all under one roof.',
    url: 'https://dnbdigitals.in/digital-marketing-siliguri',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DigitalMarketingSiliguriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'D&B Digitals - Digital Marketing Agency Siliguri',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/digital-marketing-siliguri`,
    url: `${baseUrl}/digital-marketing-siliguri`,
    telephone: '+918918186998',
    priceRange: '$$',
    serviceType: 'Digital Marketing Agency',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Siliguri',
      addressRegion: 'West Bengal',
      postalCode: '734001',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Siliguri' },
      { '@type': 'City', name: 'Jalpaiguri' },
      { '@type': 'City', name: 'Darjeeling' },
      { '@type': 'State', name: 'West Bengal' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Digital Marketing Siliguri',
        item: `${baseUrl}/digital-marketing-siliguri`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What digital marketing services do you offer in Siliguri?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer a complete digital marketing suite: custom website development, SEO (local & technical), social media management (Instagram, Facebook), video editing, graphic design, and Meta/Google Ads management. All services are tailored for North Bengal and Indian market businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'How soon can I expect results from digital marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quick wins like Google Business Profile setup and social media engagement start within 2-4 weeks. SEO rankings typically improve within 60-90 days. Paid ad campaigns can generate leads within the first 7 days of launch.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with small businesses in Siliguri?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, most of our clients are small and medium businesses across Siliguri, Jalpaiguri, and Darjeeling. We tailor our scope and delivery to suit each business\'s budget and growth stage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you handle my entire online presence from one place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. D&B Digitals is a full-service agency. We can manage your website, Google rankings, Instagram, Facebook, graphic design, and video content — all coordinated with one consistent brand voice and strategy.',
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
