export interface ReelItem {
  id: string;
  title: string;
  category: 'Web Design' | 'Next.js Speed' | 'SEO Strategy' | 'Client Redesign' | 'UI/UX';
  description: string;
  instagramUrl: string;
  viewsBadge?: string;
  duration?: string;
  gradient: string;
  previewUrl?: string; // Optional direct video URL or high-res thumbnail
  topics: string[];
}

export const INSTAGRAM_HANDLE = 'dnbdigitals';
export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/dnbdigitals/';

export const REELS_DATA: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'Transforming a Slow WordPress Site into a 500ms Next.js Machine',
    category: 'Client Redesign',
    description: 'Watch the full breakdown of how we took a client from 4.2s load time to instant page transitions and doubled their conversions.',
    instagramUrl: 'https://www.instagram.com/dnbdigitals/',
    viewsBadge: 'Viral Breakdown',
    duration: '0:45',
    gradient: 'from-emerald-600/30 via-teal-900/40 to-black',
    topics: ['Next.js 15', 'Speed Test', '99 PageSpeed'],
  },
  {
    id: 'reel-2',
    title: 'How Dental Clinics Get 30+ Online Bookings a Month on Autopilot',
    category: 'Web Design',
    description: 'The 3 essential UI/UX features every healthcare clinic needs to convert casual visitors into booked patients.',
    instagramUrl: 'https://www.instagram.com/dnbdigitals/',
    viewsBadge: 'Client Showcase',
    duration: '0:52',
    gradient: 'from-cyan-600/30 via-blue-900/40 to-black',
    topics: ['Healthcare UI', 'Booking Funnel', 'High CRO'],
  },
  {
    id: 'reel-3',
    title: 'The #1 Reason Why 90% of Business Websites Fail to Rank on Google',
    category: 'SEO Strategy',
    description: 'Why bloated visual builders hurt your search positions and how clean JSON-LD schema fixes it permanently.',
    instagramUrl: 'https://www.instagram.com/dnbdigitals/',
    viewsBadge: 'SEO Masterclass',
    duration: '0:38',
    gradient: 'from-purple-600/30 via-indigo-900/40 to-black',
    topics: ['Google Algorithm', 'Technical SEO', 'Page 1 Strategy'],
  },
  {
    id: 'reel-4',
    title: 'Micro-Interactions That Make Websites Feel 10x More Expensive',
    category: 'UI/UX',
    description: 'Behind-the-scenes look at custom Framer Motion & GSAP animations we engineered for modern luxury brands.',
    instagramUrl: 'https://www.instagram.com/dnbdigitals/',
    viewsBadge: 'Design Breakdown',
    duration: '0:42',
    gradient: 'from-amber-600/30 via-orange-950/40 to-black',
    topics: ['Framer Motion', 'Luxury UX', 'Interactive'],
  },
  {
    id: 'reel-5',
    title: 'E-Commerce Checkout Redesign: Boosting Revenue by 38%',
    category: 'Client Redesign',
    description: 'Removing friction from product catalogs and adding one-tap checkouts for high-growth direct-to-consumer brands.',
    instagramUrl: 'https://www.instagram.com/dnbdigitals/',
    viewsBadge: 'Case Study',
    duration: '0:58',
    gradient: 'from-emerald-600/30 via-green-950/40 to-black',
    topics: ['E-Commerce', 'Razorpay/Stripe', 'Mobile CRO'],
  },
];
