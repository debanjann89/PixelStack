import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Much Should a Small Business Website Cost in 2026?',
  description: 'A transparent breakdown of website pricing in 2026 — from $0 DIY builders to $5,000+ custom agency builds. Learn what affects cost and what you should expect.',
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
    "headline": "How Much Should a Small Business Website Cost in 2026?",
    "author": {
      "@type": "Person",
      "name": "Debanjan Amin"
    },
    "datePublished": "2026-08-10T08:00:00+08:00",
    "dateModified": "2026-08-10T08:00:00+08:00",
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
        "name": "How Much Should a Small Business Website Cost in 2026?",
        "item": `${baseUrl}/blog/how-much-should-a-small-business-website-cost`
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
