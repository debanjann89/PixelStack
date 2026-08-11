import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

export const metadata: Metadata = {
  title: 'Contact Us | Book a Free Consultation with D&B Digitals',
  description:
    'Get in touch with D&B Digitals. Phone: +91 89181 86998 | Email: dabdigitalofficials@gmail.com | Location: Siliguri, West Bengal, India. Tell us about your project for a fast proposal.',
  keywords: [
    'Contact D&B Digitals',
    'Hire Web Development Agency',
    'Web Design Consultation Siliguri',
    'Website Proposal Request'
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Book a Free Consultation | D&B Digitals',
    description:
      'Have a project in mind? We would love to hear about it. Tell us about your business vision today.',
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
