import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Social Media Management Agency in India | Instagram & Meta Ads — D&B Digitals',
  description:
    'Looking for the best social media management agency in India? D&B Digitals crafts viral Instagram Reels, manages Facebook & LinkedIn communities, and executes high-ROI Meta ad campaigns.',
  keywords:
    'social media management agency india, best social media marketing company india, instagram marketing agency india, meta ads agency india, facebook marketing company india, social media agency for d2c india, content creation agency india',
  alternates: {
    canonical: 'https://dnbdigitals.in/social-media-management-india',
  },
  openGraph: {
    title: 'Top Social Media Management Agency in India | D&B Digitals',
    description:
      'Turn social followers into paying clients. High-production Instagram Reels, data-driven Meta ads, and cohesive visual branding across India.',
    url: 'https://dnbdigitals.in/social-media-management-india',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SocialMediaIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'D&B Digitals - Social Media Management Agency India',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/social-media-management-india`,
    url: `${baseUrl}/social-media-management-india`,
    telephone: '+918918186998',
    priceRange: '$$',
    serviceType: 'Social Media Management',
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
        name: 'Social Media Management India',
        item: `${baseUrl}/social-media-management-india`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What platforms does your social media agency manage across India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We manage Instagram, Facebook, LinkedIn, and YouTube Shorts. We align each platform with its native demographic—Reels for visual consumer discovery, and LinkedIn for corporate/B2B trust.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle content creation remotely for clients across India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our team scripts, designs, edits, and schedules all content. You provide raw smartphone footage or product assets, and our post-production team edits them into high-converting Reels, carousels, and stories.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do your social media packages include paid Meta (Facebook & Instagram) ads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. In addition to organic content, we configure targeted Meta ad campaigns (lead generation, catalog sales, and WhatsApp message campaigns) optimized for Indian demographics and buyer behavior.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you measure social media ROI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We track direct business outcomes: inbound WhatsApp chats, phone inquiries, website visits, profile visits, and customer acquisition costs rather than just vanity likes.',
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
