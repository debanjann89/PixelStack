import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Web Design Tips & Digital Marketing Insights',
  description: 'Read expert articles on web design, development, SEO, and digital marketing from D&B Digitals. Tips and strategies for small businesses in the US and India.',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
