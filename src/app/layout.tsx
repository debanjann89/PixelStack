import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dnbdigitals.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Web Design, SEO & Digital Marketing Agency in India — D&B Digitals",
    template: "%s | D&B Digitals",
  },
  description:
    "D&B Digitals is a full-service digital marketing, SEO, and custom web development agency in India. We engineer high-speed Next.js websites, rank brands #1 on Google, and manage social media nationwide. WhatsApp us.",
  keywords: [
    "D&B Digitals",
    "DNB Digitals",
    "digital marketing agency India",
    "web design company India",
    "SEO services India",
    "social media management agency India",
    "custom web development India",
    "best website designers in India",
    "web development company India",
    "SEO agency India",
    "web design Siliguri",
    "digital marketing West Bengal",
    "graphic design Kolkata",
    "Debanjan Amin",
    "Banashree Das"
  ],
  authors: [
    { name: "Debanjan Amin", url: "https://github.com/debanjanamin" },
    { name: "Banashree Das" }
  ],
  creator: "D&B Digitals",
  publisher: "D&B Digitals",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web Design, SEO & Digital Marketing Agency in India — D&B Digitals",
    description:
      "D&B Digitals builds high-speed websites, handles SEO, social media, graphic design & performance marketing for businesses across India. Fast delivery, transparent quotes.",
    url: SITE_URL,
    siteName: "D&B Digitals",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, SEO & Digital Marketing Agency in India — D&B Digitals",
    description:
      "D&B Digitals builds high-speed websites, handles SEO, social media, graphic design & performance marketing for businesses across India. Fast delivery, transparent quotes.",
    creator: "@DBDigitals",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "ttOmhYkSfRlgyKQFSw7gA51sR-ipYPV25m-KjTYxKoM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "D&B Digitals",
    "alternateName": "D&B Digitals Agency",
    "image": `${SITE_URL}/opengraph-image`,
    "@id": `${SITE_URL}/#agency`,
    "url": SITE_URL,
    "telephone": "+918918186998",
    "email": "sayanamin.apd2004@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Siliguri, West Bengal",
      "addressLocality": "Siliguri",
      "addressRegion": "West Bengal",
      "postalCode": "734001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.7271,
      "longitude": 88.3953
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Debanjan Amin",
        "jobTitle": "Co-Founder & Lead Developer",
        "sameAs": "https://github.com/debanjanamin"
      },
      {
        "@type": "Person",
        "name": "Banashree Das",
        "jobTitle": "Co-Founder & Growth Strategist"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/dnbdigitals/",
      "https://wa.me/918918186998",
      "https://github.com/debanjanamin",
      "https://linkedin.com/in/debanjanamin",
      "https://linkedin.com/in/banashreedas"
    ],
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "State", "name": "West Bengal" },
      { "@type": "City", "name": "Siliguri" },
      { "@type": "City", "name": "Kolkata" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "City", "name": "Hyderabad" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "High-performance custom websites built with Next.js for Indian businesses — hotels, clinics, coaching institutes, and e-commerce."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Local SEO, technical SEO, Google Business Profile optimization, and content strategy to rank on Google's first page in India."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Management",
            "description": "Instagram, Facebook, and LinkedIn management with reels, carousels, stories, and monthly analytics for Indian brands."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Full-service digital marketing including Meta Ads, Google Ads, content marketing, and lead generation funnels."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graphic Design",
            "description": "Logo design, brand identity kits, social media creatives, brochures, and packaging design for businesses across India."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Editing",
            "description": "Professional video editing for Instagram Reels, YouTube Shorts, promotional videos, and brand storytelling."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Clean, professional interface design focused on mobile-first experiences and lead generation."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "D&B Digitals",
    "alternateName": ["DNB Digitals", "D&B Digitals Agency", "D and B Digitals"],
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en-IN">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('dab-digitals-theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        {/* Local Business JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        {/* WebSite JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-[#050505] text-zinc-100 min-h-screen flex flex-col"
      >
        <SmoothScroll>
          <Preloader />
          <Navbar />
          <main className="flex-grow pt-24 overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <ConsultationModal />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
