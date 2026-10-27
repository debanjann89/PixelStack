import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing for Restaurants in India 2026 | Get More Customers',
  description:
    'How Indian restaurants, cafes, and food businesses can use digital marketing to get more customers in 2026. Instagram reels, Google Business Profile, Zomato vs website, and WhatsApp marketing strategies.',
  keywords:
    'digital marketing for restaurants india, restaurant marketing india, instagram marketing restaurant india, restaurant social media india, how to promote restaurant online india, zomato vs own website',
  alternates: {
    canonical: 'https://dnbdigitals.in/blog/digital-marketing-for-restaurants-india',
  },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Digital Marketing for Restaurants in India 2026: How to Get More Customers Without Burning Money on Zomato',
    author: {
      '@type': 'Person',
      name: 'Debanjan Amin',
    },
    datePublished: '2026-10-27T08:00:00+05:30',
    dateModified: '2026-10-27T08:00:00+05:30',
    publisher: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    image: `${baseUrl}/opengraph-image.png`,
    description:
      'How Indian restaurants, cafes, and food businesses can use digital marketing to get more customers in 2026. Instagram reels, Google Business Profile, Zomato vs website, and WhatsApp marketing strategies.',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Digital Marketing for Restaurants India',
        item: `${baseUrl}/blog/digital-marketing-for-restaurants-india`,
      },
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
