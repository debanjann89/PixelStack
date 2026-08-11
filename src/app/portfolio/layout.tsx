import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

export const metadata: Metadata = {
  title: 'Our Portfolio & Case Studies | Real Results & Client Showcase',
  description:
    'Discover real-world projects built by D&B Digitals for restaurants, law firms, dental clinics, luxury resorts, and SaaS startups. High-converting designs that doubled online revenue.',
  keywords: [
    'D&B Digitals Portfolio',
    'Web Design Portfolio India',
    'Next.js Website Examples',
    'Restaurant Website Case Study',
    'Law Firm Web Design',
    'Clinic Booking Website'
  ],
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: 'Our Portfolio & Case Studies | D&B Digitals',
    description:
      'Explore high-impact websites and client case studies engineered for maximum conversion and speed.',
    url: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
