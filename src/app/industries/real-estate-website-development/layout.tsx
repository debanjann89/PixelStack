import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Website Development | Property Listing & Agent Sites',
  description: 'Custom real estate website development with property listings, lead capture, and neighborhood guides. Help buyers find their dream home with a premium website by D&B Digitals.',
  keywords: 'real estate website development, property listing website, real estate agent website, IDX website design',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/industries/real-estate-website-development',
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
        name: 'Real Estate Website Development',
        item: 'https://d-a-b-digitals.vercel.app/industries/real-estate-website-development',
      },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Website Development & Property Listing Web Design',
    provider: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      url: 'https://d-a-b-digitals.vercel.app',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'India' },
    ],
    description: 'Custom real estate website development with property listings, lead capture funnels, neighborhood guides, and IDX integration.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you integrate our local MLS/IDX feed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We are experienced in working with various IDX providers and MLS systems. We ensure properties sync accurately and the search interface looks custom to your brand, rather than a bolted-on widget.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the website integrate with my CRM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can integrate your lead forms with top real estate CRMs like Follow Up Boss, BoomTown, Salesforce, or standard email marketing platforms via API or webhook.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do neighborhood guides help my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Neighborhood guides are incredibly powerful for local SEO. They help you rank for hyper-local search terms while providing genuine value to buyers researching an area.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you build single-property websites?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, in addition to full brokerage sites, we can develop high-end, immersive single-property websites tailored for luxury listings that require their own dedicated marketing presence.',
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
