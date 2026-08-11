import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Design for Plumbing & HVAC Companies | D&B Digitals',
  description: 'Custom website design for plumbing, HVAC, and home service businesses. Get more emergency calls, online bookings, and local leads with a fast, mobile-optimized website built by D&B Digitals.',
  keywords: 'plumbing website design, HVAC website development, home service website, custom website for plumbers',
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
