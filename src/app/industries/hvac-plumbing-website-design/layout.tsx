import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Design for Plumbing & HVAC Companies | D&B Digitals',
  description: 'Custom website design for plumbing, HVAC, and home service businesses. Get more emergency calls, online bookings, and local leads with a fast, mobile-optimized website built by D&B Digitals.',
  keywords: 'plumbing website design, HVAC website development, home service website, custom website for plumbers',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/industries/hvac-plumbing-website-design',
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
        name: 'HVAC & Plumbing Website Design',
        item: 'https://d-a-b-digitals.vercel.app/industries/hvac-plumbing-website-design',
      },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'HVAC & Plumbing Website Design & Home Service Web Development',
    provider: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      url: 'https://d-a-b-digitals.vercel.app',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'India' },
    ],
    description: 'Custom website design for plumbing, HVAC, and home service businesses featuring emergency dispatch CTAs, online booking, and local SEO optimization.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to build an HVAC/Plumbing website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typically, a custom home services website takes 4-6 weeks from initial consultation to launch, depending on the complexity and how quickly we receive your content and branding assets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my website rank on Google for local searches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We build all our websites with local SEO best practices. This includes schema markup, optimized meta tags, fast loading speeds, and structures designed to highlight your specific service areas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you write the content for the website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer professional copywriting services tailored to the home service industry. We can write compelling, SEO-friendly content for your service pages, or we can use content you provide.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I integrate my scheduling software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We seamlessly integrate popular platforms like ServiceTitan, Housecall Pro, Jobber, and standard booking widgets directly into your new website to streamline your workflow.',
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
