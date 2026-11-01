import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

export const metadata: Metadata = {
  title: 'Our Services | Web Development, SEO, Social Media & Graphic Design',
  description:
    'Full-suite digital agency services by D&B Digitals: custom Next.js websites, local & technical SEO, Instagram & social media management, video editing, and brand identity design across India.',
  keywords: [
    'Website Development Services India',
    'Custom UI UX Design',
    'Website Redesign Services',
    'SEO Services Siliguri',
    'Social Media Management India',
    'Graphic Design Kolkata',
    'Digital Marketing Agency Siliguri',
    'Nextjs Agency India'
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Our Services | Web Development, SEO, Social Media & Design | D&B Digitals',
    description:
      'High-performance Next.js websites, Google SEO foundations, Instagram management, and creative design built to turn searchers into paying clients.',
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
          'text': 'Our website packages are custom-tailored based on your business objectives, design requirements, and features. We provide transparent, scope-based proposals for small businesses, growth brands, and enterprise portals. Contact us for an instant customized estimate.'
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
