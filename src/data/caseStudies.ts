export interface CaseStudy {
  slug: string;
  id: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  industryUrl?: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  challenge: string;
  approach: string;
  impact: string;
  results: string[];
  tech: string[];
  duration: string;
  datePublished: string;
  dateModified: string;
  bgGradient: string;
  accentColor: string;
  badgeColor: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'apex-dental-care',
    id: 'dental',
    title: 'Apex Dental Care: Online Booking & Local SEO Overhaul',
    client: 'Apex Dental Care',
    category: 'Healthcare & Dental',
    industry: 'Dental Clinic Website Development',
    industryUrl: '/industries/dental-clinic-website-design',
    metaTitle: 'Apex Dental Care Case Study | Dental Clinic Web Design | D&B Digitals',
    metaDescription:
      'How D&B Digitals redesigned Apex Dental Care with Next.js 15: 250+ online bookings in month one, 45% reduction in front-desk calls, and sub-400ms load speed.',
    overview:
      'Apex Dental Care is a modern dental practice providing family dentistry, cosmetic smile makeovers, and orthodontic care. They partnered with D&B Digitals to replace an outdated site with a patient-first digital portal.',
    challenge:
      'The clinic was overwhelmed by manual scheduling phone calls during peak clinic hours, while patient acquisition remained stagnant because their website failed to engage mobile searchers looking for convenient after-hours booking.',
    approach:
      'We designed an intuitive, mobile-first scheduling portal in Next.js 15. We integrated treatment category cards, patient trust indicators, before-and-after smile transformation galleries, and a frictionless calendar booking system coupled with local healthcare SEO schemas.',
    impact:
      'Over 250 bookings occurred online in the very first month. Front-desk phone call volume decreased by 45%, freeing the clinical staff to focus on patient care and increasing new patient retention.',
    results: [
      '250+ Online appointments scheduled in month one',
      '45% Decrease in manual front-desk scheduling phone calls',
      'Sub-400ms page load speeds across mobile devices',
      'Perfect 100/100 Core Web Vitals performance score',
    ],
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'JSON-LD Schema'],
    duration: '2.5 Weeks',
    datePublished: '2026-08-15T09:00:00Z',
    dateModified: '2026-08-25T10:00:00Z',
    bgGradient: 'from-emerald-950/40 via-zinc-950 to-zinc-950',
    accentColor: 'text-emerald-400',
    badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
  {
    slug: 'grand-palace-resorts',
    id: 'resort',
    title: 'Grand Palace Resorts: Driving Direct Bookings & Cutting OTA Fees',
    client: 'Grand Palace Resorts',
    category: 'Hospitality & Resorts',
    industry: 'Hotel & Resort Website Design',
    industryUrl: '/industries/hotel-resort-website-design',
    metaTitle: 'Grand Palace Resorts Case Study | Hotel Direct Booking Web Design',
    metaDescription:
      'Discover how Grand Palace Resorts increased direct bookings by 40% and saved commission fees with a custom visual website built by D&B Digitals.',
    overview:
      'Grand Palace Resorts operates luxury destination villas and hospitality suites. They needed a high-end web presence that converted prospective travelers directly, bypassing commission-heavy third-party travel portals.',
    challenge:
      'The property was paying up to 18% in commissions to online travel agencies (OTAs) like Expedia and Booking.com. Their slow, image-heavy legacy WordPress site failed to convey the resort luxury or inspire direct booking confidence on smartphones.',
    approach:
      'We engineered a lightning-fast visual tour experience on Next.js 15 featuring immersive room galleries, seamless direct reservation flows, transparent seasonal rates, and 360° virtual tour integration.',
    impact:
      'Direct hotel bookings increased by 40% within 60 days. The resort bypassed middleman commission fees, saving an estimated ₹45,000+ monthly while increasing average website user engagement duration by 3.2x.',
    results: [
      '+40% Increase in direct website room bookings',
      'Saved ₹45,000+ monthly in third-party OTA commission fees',
      '3.2x Increase in visitor session duration on mobile',
      '60% Faster image rendering with next-gen responsive assets',
    ],
    tech: ['Next.js 15', 'Framer Motion', 'Tailwind CSS', 'PostCSS', 'Schema.org'],
    duration: '3 Weeks',
    datePublished: '2026-08-10T09:00:00Z',
    dateModified: '2026-08-25T10:00:00Z',
    bgGradient: 'from-amber-950/40 via-zinc-950 to-zinc-950',
    accentColor: 'text-amber-400',
    badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  },
  {
    slug: 'the-riviera-bistro',
    id: 'bistro',
    title: 'The Riviera Bistro: High-Converting Dining & Table Reservation Platform',
    client: 'The Riviera Bistro',
    category: 'Restaurants & Hospitality',
    industry: 'Restaurant Website Development',
    metaTitle: 'The Riviera Bistro Case Study | Restaurant Web Design | D&B Digitals',
    metaDescription:
      'See how D&B Digitals boosted online table bookings by 135% and reduced page load times from 4.8s to 0.4s for The Riviera Bistro.',
    overview:
      'The Riviera Bistro is an upscale culinary venue known for fine dining experiences. They required a modern web presence to match their gourmet reputation and drive direct table reservations.',
    challenge:
      'The restaurant was losing over 30% of potential online reservations due to a slow, confusing third-party scheduling widget. Mobile bounce rates exceeded 65%, and slow page load times caused impatient diners to leave and seek other restaurants.',
    approach:
      'We replaced the monolithic reservation widget with a customized, lightweight seat-booking interface. We redesigned the brand aesthetics using high-end food photography, lazy-loaded responsive image assets, and dynamic layouts to drive direct reservations.',
    impact:
      'Online reservations rose 135% in the first month. Page load times dropped from 4.8s to under 0.5s, eliminating booking friction and saving third-party commission costs.',
    results: [
      '+135% Growth in direct online reservations in 30 days',
      'Page load times dropped from 4.8s to sub-0.5s',
      'Mobile abandonment rates decreased by 65%',
      'Saved estimated ₹12,000/month in reservation software fees',
    ],
    tech: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    duration: '2 Weeks',
    datePublished: '2026-08-05T09:00:00Z',
    dateModified: '2026-08-25T10:00:00Z',
    bgGradient: 'from-orange-950/40 via-zinc-950 to-zinc-950',
    accentColor: 'text-orange-400',
    badgeColor: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  },
  {
    slug: 'jenkins-legal-associates',
    id: 'legal',
    title: 'Jenkins Legal Associates: Enterprise Authority & Client Intake Architecture',
    client: 'Jenkins Legal Associates',
    category: 'Law Firms & Corporate B2B',
    industry: 'Corporate Law Web Design',
    metaTitle: 'Jenkins Legal Associates Case Study | Corporate Web Development',
    metaDescription:
      'How D&B Digitals built an authoritative digital presence for Jenkins Legal: +85% corporate inquiries and a perfect 100/100 Lighthouse SEO score.',
    overview:
      'Jenkins Legal Associates is a corporate law firm advising high-growth companies on regulatory compliance, contracts, and litigation. They needed an authoritative digital footprint to attract enterprise clients.',
    challenge:
      'Jenkins Legal Associates lacked a modern digital presence. Corporate compliance clients had no way to verify credentials, view practice fields, or securely request legal consultations online.',
    approach:
      'We engineered an authoritative visual experience featuring clean typography, dynamic attorney credentials, and custom multi-step intake flows. We integrated robust SEO schemas to capture local business searches.',
    impact:
      'Corporate compliance consultation leads increased by 85%. The website achieved a perfect 100/100 Lighthouse SEO rank, climbing to Page 1 on Google within weeks.',
    results: [
      '+85% Increase in corporate consultation leads',
      'Perfect 100/100 Google Lighthouse SEO & Best Practices score',
      'Page 1 Google rank for local corporate compliance terms',
      'Structured intake forms saving 5+ hours weekly in onboarding',
    ],
    tech: ['Next.js 15', 'TypeScript', 'React Hook Form', 'Zod', 'LocalBusiness Schema'],
    duration: '3 Weeks',
    datePublished: '2026-08-01T09:00:00Z',
    dateModified: '2026-08-25T10:00:00Z',
    bgGradient: 'from-emerald-950/40 via-zinc-950 to-zinc-950',
    accentColor: 'text-emerald-400',
    badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
  {
    slug: 'devtech-solutions',
    id: 'devtech',
    title: 'DevTech Solutions: High-Velocity SaaS Landing Page & Demo Funnel',
    client: 'DevTech Solutions',
    category: 'Technology & SaaS',
    industry: 'SaaS Web Development',
    metaTitle: 'DevTech Solutions Case Study | Modern SaaS Web Design | D&B Digitals',
    metaDescription:
      'See how D&B Digitals transformed DevTech Solutions: +110% demo requests and sub-500ms global load speeds for enterprise SaaS buyers.',
    overview:
      'DevTech Solutions is a developer tooling and enterprise SaaS platform. They needed a high-performance landing experience to communicate product complexity with extreme clarity.',
    challenge:
      'DevTech Solutions had a strong SaaS offering but a visual presentation that looked like an afterthought, failing to attract high-tier corporate clients.',
    approach:
      'We built a dark, high-converting product platform showcase. We added clean feature grids, dynamic client logo reels, and interactive demo booking modules.',
    impact:
      'Lead submissions and developer demo requests grew by 110%. The redesigned branding successfully aligned with enterprise expectations.',
    results: [
      '+110% Growth in demo requests and qualified SaaS leads',
      'Sub-500ms global node rendering response times',
      'Interactive product mockups lifting session engagement by 2.4x',
      'Enterprise sales pipeline accelerated from launch day',
    ],
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zod'],
    duration: '2 Weeks',
    datePublished: '2026-07-28T09:00:00Z',
    dateModified: '2026-08-25T10:00:00Z',
    bgGradient: 'from-teal-950/40 via-zinc-950 to-zinc-950',
    accentColor: 'text-teal-400',
    badgeColor: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((cs) => cs.slug);
}
