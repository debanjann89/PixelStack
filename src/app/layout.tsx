import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "D.A.B Digitals | Premium Web Development & Digital Growth Agency",
    template: "%s | D.A.B Digitals",
  },
  description: "D.A.B Digitals is a modern digital agency designing and developing premium, conversion-focused websites, UI/UX, and search engine foundations starting at ₹15,000.",
  metadataBase: new URL("https://dabdigitals.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "D.A.B Digitals | Premium Web Development & Digital Growth Agency",
    description: "Building modern digital experiences that drive growth. Custom web development, UI/UX design, and technical SEO starting at ₹15,000.",
    url: "https://dabdigitals.com",
    siteName: "D.A.B Digitals Agency",
    images: [
      {
        url: "https://dabdigitals.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "D.A.B Digitals Agency - Premium Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D.A.B Digitals | Premium Web Development & Digital Growth Agency",
    description: "Building modern digital experiences that drive growth. Custom web development, UI/UX design, and technical SEO starting at ₹15,000.",
    images: ["https://dabdigitals.com/og-image.png"],
    creator: "@DABDigitals",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {/* Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "D.A.B Digitals",
              "image": "https://dabdigitals.com/og-image.png",
              "@id": "https://dabdigitals.com/#agency",
              "url": "https://dabdigitals.com",
              "telephone": "+918918186998",
              "priceRange": "INR 15000 - INR 100000",
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
                "closes": "19:00"
              },
              "sameAs": [
                "https://github.com/debanjanamin",
                "https://linkedin.com/in/debanjanamin"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100 min-h-screen flex flex-col`}
      >
        <Preloader />
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <ConsultationModal />
      </body>
    </html>
  );
}
