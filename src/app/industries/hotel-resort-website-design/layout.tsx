import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel & Resort Website Design | Luxury Hospitality Web Development',
  description: 'Premium website design for hotels, resorts, and hospitality businesses. Increase direct bookings and reduce OTA commissions with a stunning, fast website by D&B Digitals.',
  keywords: 'hotel website design, resort website development, hospitality web design, hotel booking website',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/industries/hotel-resort-website-design',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://d-a-b-digitals.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://d-a-b-digitals.vercel.app/industries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Hotel & Resort Website Design',
        item: 'https://d-a-b-digitals.vercel.app/industries/hotel-resort-website-design',
      },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Hotel & Resort Website Design & Hospitality Web Development',
    provider: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      url: 'https://d-a-b-digitals.vercel.app',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'India' },
    ],
    description: 'Premium website design for hotels, resorts, and hospitality businesses featuring direct booking systems, virtual tours, and OTA commission reduction strategies.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you integrate our existing booking engine?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We regularly integrate with major booking engines like SynXis, TravelClick, SiteMinder, and Cloudbeds. We ensure the transition from the main site to the booking engine is as seamless as possible.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle high-resolution imagery without slowing down the site?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We utilize advanced image optimization techniques, next-gen formats (like WebP), and Content Delivery Networks (CDNs) to ensure your stunning photos load instantly without compromising quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it easy to update special offers and seasonal packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We build our hotel websites on modern Content Management Systems (CMS) with intuitive dashboards, allowing your marketing team to easily update promotions, rates, and announcements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide ongoing support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer comprehensive maintenance plans to ensure your hospitality website remains secure, fast, and up-to-date with the latest web standards.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
