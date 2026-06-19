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
    default: "PixelStack | Premium Web Development & Digital Growth Agency",
    template: "%s | PixelStack",
  },
  description: "PixelStack is a modern digital agency designing and developing premium, conversion-focused websites, UI/UX, and search engine foundations starting at ₹50,000.",
  metadataBase: new URL("https://pixelstack.agency"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PixelStack | Premium Web Development & Digital Growth Agency",
    description: "Building modern digital experiences that drive growth. Custom web development, UI/UX design, and technical SEO starting at ₹50,000.",
    url: "https://pixelstack.agency",
    siteName: "PixelStack Agency",
    images: [
      {
        url: "https://pixelstack.agency/og-image.png",
        width: 1200,
        height: 630,
        alt: "PixelStack Agency - Premium Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelStack | Premium Web Development & Digital Growth Agency",
    description: "Building modern digital experiences that drive growth. Custom web development, UI/UX design, and technical SEO starting at ₹50,000.",
    images: ["https://pixelstack.agency/og-image.png"],
    creator: "@PixelStack",
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
                  var theme = localStorage.getItem('pixelstack-theme');
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
              "name": "PixelStack",
              "image": "https://pixelstack.agency/og-image.png",
              "@id": "https://pixelstack.agency/#agency",
              "url": "https://pixelstack.agency",
              "telephone": "+918918186698",
              "priceRange": "INR 50000 - INR 200000",
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
