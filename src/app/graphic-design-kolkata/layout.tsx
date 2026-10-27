import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphic Design Services in Kolkata | Brand Identity & Creatives — D&B Digitals',
  description:
    'Professional graphic design services in Kolkata. Logo design, brand identity, social media creatives, brochures & marketing materials. D&B Digitals — creative design for Kolkata businesses.',
  keywords:
    'graphic design kolkata, logo design kolkata, brand identity kolkata, graphic designer west bengal, social media design kolkata, creative agency kolkata',
  alternates: {
    canonical: 'https://dnbdigitals.in/graphic-design-kolkata',
  },
  openGraph: {
    title: 'Graphic Design Services in Kolkata | D&B Digitals',
    description:
      'Professional graphic design services in Kolkata. Logo design, brand identity, social media creatives, brochures & marketing materials.',
    url: 'https://dnbdigitals.in/graphic-design-kolkata',
    siteName: 'D&B Digitals',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function GraphicDesignKolkataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'D&B Digitals - Graphic Design Services Kolkata',
    image: `${baseUrl}/opengraph-image.png`,
    '@id': `${baseUrl}/graphic-design-kolkata`,
    url: `${baseUrl}/graphic-design-kolkata`,
    telephone: '+918918186998',
    serviceType: 'Graphic Design Services',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Howrah' },
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
        name: 'Graphic Design Kolkata',
        item: `${baseUrl}/graphic-design-kolkata`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What graphic design services do you offer in Kolkata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer logo design, complete brand identity kits, social media post templates, Instagram story designs, brochures, flyers, banners, business cards, packaging design, and presentation decks — all tailored for Kolkata and Bengal market aesthetics.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does logo and brand identity design take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A complete logo with 3 concepts and 2 revision rounds typically takes 5-7 business days. Full brand identity kits (logo + colors + fonts + templates) take 10-14 days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with startups and small businesses in Kolkata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in helping Kolkata startups, boutiques, restaurants, and small businesses build a professional visual identity from scratch — at competitive rates with fast turnaround.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you create designs for both print and digital use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We deliver all files in both print-ready formats (PDF, CMYK, 300dpi) and digital formats (PNG, SVG, RGB) so you can use them across all channels.',
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
