import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://d-a-b-digitals.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "D&B Digitals | Premium Web Development & Digital Growth Agency",
    template: "%s | D&B Digitals",
  },
  description:
    "D&B Digitals is a high-performance web development agency. We design ultra-fast, conversion-focused websites, custom UI/UX, and technical SEO for businesses in the US and India.",
  keywords: [
    "D&B Digitals",
    "DNB Digitals",
    "Web Development Agency",
    "Next.js Web Developer",
    "Website Redesign Services",
    "UI UX Design Agency",
    "SEO Optimization Services",
    "Web Design Siliguri",
    "Custom React Website",
    "B2B Web Development India",
    "E-commerce Development Agency",
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
    title: "D&B Digitals | Premium Web Development & Digital Growth Agency",
    description:
      "Building modern digital experiences that drive growth. Custom web development, UI/UX design, and technical SEO for businesses worldwide.",
    url: SITE_URL,
    siteName: "D&B Digitals",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D&B Digitals | Premium Web Development & Digital Growth Agency",
    description:
      "Building modern digital experiences that drive growth. Custom web development, UI/UX design, and technical SEO for businesses worldwide.",
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
    "email": "dabdigitalofficials@gmail.com",
    "priceRange": "$179 - $5,000+",
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
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "India" }
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
            "description": "High-performance full-stack websites using Next.js 15, TypeScript, and modern frameworks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Interface systems that are clean, professional, and intuitive."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Redesign",
            "description": "Transform slow WordPress/Wix sites into modern, high-speed digital assets."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Comprehensive technical SEO foundations from clean code to search console indexing."
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
    <html lang="en">
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
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} antialiased bg-[#050505] text-zinc-100 min-h-screen flex flex-col`}
      >
        <SmoothScroll>
          <Preloader />
          <Navbar />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
          <ConsultationModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
