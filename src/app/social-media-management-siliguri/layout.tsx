import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Management in Siliguri | Instagram & Facebook — D&B Digitals',
  description:
    'Professional social media management for Siliguri businesses. Instagram reels, Facebook posts, graphic design, and growth strategy. D&B Digitals helps you build a brand online. WhatsApp now.',
  keywords:
    'social media management siliguri, instagram management siliguri, facebook marketing north bengal, social media agency siliguri, content creation siliguri',
  alternates: {
    canonical: 'https://dnbdigitals.in/social-media-management-siliguri',
  },
  openGraph: {
    title: 'Social Media Management in Siliguri | Instagram & Facebook — D&B Digitals',
    description:
      'Professional social media management for Siliguri businesses. Instagram reels, Facebook posts, graphic design, and growth strategy.',
    url: 'https://dnbdigitals.in/social-media-management-siliguri',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SocialMediaSiliguriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'D&B Digitals - Social Media Management Siliguri',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/social-media-management-siliguri`,
    url: `${baseUrl}/social-media-management-siliguri`,
    telephone: '+918918186998',
    priceRange: '$$',
    serviceType: 'Social Media Management',
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Social Media Management Siliguri',
        item: `${baseUrl}/social-media-management-siliguri`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many posts per week do you create?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We create 3-5 high-quality posts per week depending on your package, including Instagram reels, static posts, stories, and Facebook content. All designed with your brand colors and tone.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you run paid Instagram/Facebook ads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we manage Meta Ads (Instagram + Facebook) for Siliguri businesses. We design the creatives, set the targeting (age, city, interests), manage the budget, and report weekly on results.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you handle both Instagram and Facebook?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We manage all major platforms — Instagram, Facebook, LinkedIn, and YouTube — with a consistent brand voice and visual identity across all channels.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to provide content or do you create everything?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We handle everything end-to-end. Just share your brand details, products/services, and any specific promotions, and our team will handle concept, design, captions, hashtags, and scheduling.',
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
