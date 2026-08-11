import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7 Website Features Every Home Service Business Needs',
  description: 'From click-to-call buttons to service area pages — the must-have features that turn your website into a lead generation machine.',
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "7 Website Features Every Home Service Business Needs",
    "author": {
      "@type": "Person",
      "name": "Debanjan Amin"
    },
    "datePublished": "2026-08-05T08:00:00+08:00",
    "dateModified": "2026-08-05T08:00:00+08:00",
    "publisher": {
      "@type": "Organization",
      "name": "D&B Digitals",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "image": `${baseUrl}/opengraph-image.png`
  };

  const breadcrumb = {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "7 Website Features Every Home Service Business Needs",
        "item": `${baseUrl}/blog/best-website-features-for-home-service-businesses`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  )
}
