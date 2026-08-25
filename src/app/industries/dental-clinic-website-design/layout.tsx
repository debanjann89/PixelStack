import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Clinic Website Development & Design | D&B Digitals',
  description: 'Custom dental clinic website development and healthcare web design. High-converting patient booking portals, HIPAA-conscious architecture, and local SEO by D&B Digitals.',
  keywords: 'dental clinic website development, dental website design, dentist web development, healthcare website development, clinic website with online booking, dental practice web developer',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/industries/dental-clinic-website-design',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumbJsonLd = {
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
        name: 'Dental Clinic Website Development',
        item: 'https://d-a-b-digitals.vercel.app/industries/dental-clinic-website-design',
      },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Dental Clinic Website Development & Healthcare Web Design',
    provider: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      url: 'https://d-a-b-digitals.vercel.app',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'India' },
    ],
    description: 'Custom dental clinic website development featuring online booking, patient intake automation, responsive mobile UI, and local healthcare SEO.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
