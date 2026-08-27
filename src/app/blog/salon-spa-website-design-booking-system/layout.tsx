import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salon & Spa Website Design: The 3-Tap Booking System That Doubles Your Appointments',
  description: 'Learn how a 3-tap booking system on your salon or spa website can double your appointments and eliminate booking drop-offs.',
  keywords: 'salon website design, spa website cost, beauty salon online booking website, salon appointment system',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/blog/salon-spa-website-design-booking-system',
  },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Salon & Spa Website Design: The 3-Tap Booking System That Doubles Your Appointments',
    author: {
      '@type': 'Person',
      name: 'Debanjan Amin',
    },
    datePublished: '2026-08-28T08:00:00+05:30',
    dateModified: '2026-08-28T08:00:00+05:30',
    publisher: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    image: `${baseUrl}/opengraph-image.png`,
    description: 'Learn how a 3-tap booking system on your salon or spa website can double your appointments and eliminate booking drop-offs.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Salon & Spa Website Design: The 3-Tap Booking System That Doubles Your Appointments', item: `${baseUrl}/blog/salon-spa-website-design-booking-system` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
