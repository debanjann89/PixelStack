import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

export const metadata: Metadata = {
  title: 'Our Services | Web Development, UI/UX Design & SEO',
  description:
    'Explore D&B Digitals core services: Full-Stack Next.js 15 Website Development, Custom UI/UX Design, WordPress-to-Next.js Redesign, Technical SEO Optimization, and Digital Marketing.',
  keywords: [
    'Website Development Services',
    'Custom UI UX Design',
    'Website Redesign Services',
    'SEO Optimization India',
    'Nextjs Agency Services',
    'Digital Marketing Agency Siliguri'
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Our Services | Web Development, UI/UX Design & SEO | D&B Digitals',
    description:
      'High-performance Next.js web development, UI/UX design systems, and SEO foundations built to convert visitors into loyal clients.',
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What technologies does D&B Digitals use to build websites?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We build custom, high-speed websites using Next.js 15, TypeScript, React 19, and Tailwind CSS. We do not rely on slow bloated page builders like WordPress or Elementor.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How fast will my new website load?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'All our builds are engineered for speed, typically scoring 95-100 on Google Lighthouse performance and loading in under 500 milliseconds.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is included in the SEO Optimization service?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our SEO service includes technical site architecture setup, JSON-LD Schema markup injection, meta tags, Google Search Console indexing, dynamic XML sitemaps, and core web vitals optimization.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How much does a custom website cost with D&B Digitals?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our packages start from $179 (₹15,000) for high-converting landing pages, scaling up to $5,000+ (₹1,00,000+) for complex enterprise web applications. We serve businesses in the US and India with transparent, competitive pricing.'
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE_URL },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${SITE_URL}/services` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      {children}
    </>
  );
}
