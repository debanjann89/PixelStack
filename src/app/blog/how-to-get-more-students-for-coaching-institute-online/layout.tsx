import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Get More Students for Your Coaching Institute Online (2026)',
  description: 'Proven digital strategies for coaching institutes in India to get more student admissions online. Google, Instagram, WhatsApp marketing and website tips that actually work in 2026.',
  keywords: 'how to get more students for coaching institute, digital marketing for coaching institute india, online admission for coaching center, coaching institute marketing strategy 2026, grow coaching institute india',
  alternates: {
    canonical: 'https://dnbdigitals.in/blog/how-to-get-more-students-for-coaching-institute-online',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How to Get More Students for Your Coaching Institute Online (2026)',
              description:
                'Proven digital strategies for coaching institutes in India to get more student admissions online. Google, Instagram, WhatsApp marketing and website tips that actually work in 2026.',
              author: {
                '@type': 'Person',
                name: 'Debanjan Amin',
              },
              publisher: {
                '@type': 'Organization',
                name: 'D&B Digitals',
                url: 'https://dnbdigitals.in',
              },
              datePublished: '2026-10-27T08:00:00+05:30',
              dateModified: '2026-10-27T08:00:00+05:30',
              url: 'https://dnbdigitals.in/blog/how-to-get-more-students-for-coaching-institute-online',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://dnbdigitals.in/blog/how-to-get-more-students-for-coaching-institute-online',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://dnbdigitals.in',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://dnbdigitals.in/blog',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'How to Get More Students for Your Coaching Institute Online (2026)',
                  item: 'https://dnbdigitals.in/blog/how-to-get-more-students-for-coaching-institute-online',
                },
              ],
            },
          ]),
        }}
      />
      {children}
    </>
  );
}
