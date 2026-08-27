import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Direct Booking vs. OTA: The Real Commission Math',
  description: 'See the real commission math behind OTA vs direct booking websites for hotels. Learn how much a custom website can save you and reduce OTA dependency.',
  keywords: 'hotel direct booking website, reduce OTA commissions, hotel website vs booking.com, hotel web design cost',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/blog/hotel-direct-booking-vs-ota-commission',
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
    headline: 'Hotel Direct Booking vs. OTA: The Real Commission Math Every Hotelier Needs to See',
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
    description: 'See the real commission math behind OTA vs direct booking websites for hotels. Learn how much a custom website can save you and reduce OTA dependency.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Hotel Direct Booking vs. OTA', item: `${baseUrl}/blog/hotel-direct-booking-vs-ota-commission` },
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
