import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Your Google Business Profile Isn\'t Enough Anymore',
  description: 'A Google Business Profile gets you found — but a website is what converts visitors into paying customers. Here\'s why you need both.',
  alternates: {
    canonical: 'https://d-a-b-digitals.vercel.app/blog/why-your-google-business-profile-isnt-enough',
  },
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
    "headline": "Why Your Google Business Profile Isn't Enough Anymore",
    "author": {
      "@type": "Person",
      "name": "Debanjan Amin"
    },
    "datePublished": "2026-08-08T08:00:00+08:00",
    "dateModified": "2026-08-08T08:00:00+08:00",
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
        "name": "Why Your Google Business Profile Isn't Enough Anymore",
        "item": `${baseUrl}/blog/why-your-google-business-profile-isnt-enough`
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
