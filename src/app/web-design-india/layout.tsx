import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Web Design & Development Company in India | D&B Digitals',
  description: 'Looking for a premier web design company in India? D&B Digitals engineers high-speed, custom Next.js websites for businesses, doctors, hotels, and schools across India. Transparent ₹ pricing.',
  keywords: 'web design company india, website design india, best web developer india, custom nextjs web development india, affordable website development india, web agency india',
  alternates: {
    canonical: 'https://dnbdigitals.in/web-design-india',
  },
  openGraph: {
    title: 'Top Web Design & Development Company in India | D&B Digitals',
    description: 'Grow your business with India’s leading custom web development agency. Zero slow templates. Sub-1s page speeds, nationwide Google SEO rankings, and direct WhatsApp customer conversion.',
    url: 'https://dnbdigitals.in/web-design-india',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function IndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'D&B Digitals - Web Design & Development Company India',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/web-design-india`,
    url: `${baseUrl}/web-design-india`,
    telephone: '+918918186998',
    priceRange: '$$',
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
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${baseUrl}/#locations` },
      { '@type': 'ListItem', position: 3, name: 'Web Design India', item: `${baseUrl}/web-design-india` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does a professional website cost in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website costs in India vary depending on features, page count, and technical architecture (Next.js vs templates). We provide customized project proposals based on your business objectives, with clear milestone deliverables and zero recurring developer royalties.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you work with clients across different states in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We operate remote-first across India. We coordinate via dedicated WhatsApp project channels, Google Meet walkthroughs, and live staging URLs so you can review real-time progress from any smartphone or laptop.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why should Indian businesses choose Next.js over WordPress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In India, 80%+ of internet traffic is on mobile networks (Jio, Airtel). WordPress templates load in 4-8 seconds with bloated plugins, driving customers away. Custom Next.js sites load in under 1 second, rank on Page 1 of Google, and provide modern app-like smoothness.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
