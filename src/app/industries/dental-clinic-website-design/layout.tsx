import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Clinic Website Design | Healthcare Web Development',
  description: 'Professional website design for dental clinics and healthcare practices. Online appointment booking, patient forms, and HIPAA-friendly design by D&B Digitals.',
  keywords: 'dental website design, dentist website, healthcare website development, clinic website with online booking',
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
        name: 'Dental Clinic Website Design',
        item: 'https://d-a-b-digitals.vercel.app/industries/dental-clinic-website-design',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
