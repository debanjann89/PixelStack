'use client';

import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';

const ARTICLES = [
  {
    slug: 'dental-clinic-website-cost-2026',
    title: 'How Much Does a Dental Clinic Website Cost in 2026? (Complete Pricing & ROI Guide)',
    excerpt: 'A transparent breakdown of dental website pricing — from basic templates to full patient portals. Includes HIPAA considerations, hidden costs, and ROI calculations.',
    category: 'Pricing & ROI',
    date: '2026-08-28',
    readTime: '10 min read',
    author: 'Debanjan Amin',
  },
  {
    slug: 'why-travel-agency-websites-fail-direct-bookings',
    title: 'Why 80% of Travel Agency Websites Fail to Generate Direct Bookings (And What to Build Instead)',
    excerpt: 'Travel agencies pay 15–25% in OTA commissions on every booking. Here\'s why your website isn\'t converting — and the architecture that eliminates commission bleed.',
    category: 'Travel & Hospitality',
    date: '2026-08-28',
    readTime: '11 min read',
    author: 'Debanjan Amin',
  },
  {
    slug: 'hotel-direct-booking-vs-ota-commission',
    title: 'Hotel Direct Booking vs. OTA: The Real Commission Math Every Hotelier Needs to See',
    excerpt: 'Independent hotels pay $150K–$250K/year in OTA commissions. See the exact math on how a direct booking website pays for itself in 2–3 months.',
    category: 'Hospitality',
    date: '2026-08-28',
    readTime: '9 min read',
    author: 'Debanjan Amin',
  },
  {
    slug: 'hvac-plumbing-website-cost-contractors',
    title: 'HVAC & Plumbing Website Cost: What Contractors Should Actually Budget in 2026',
    excerpt: '97% of consumers search online before hiring a contractor. Here\'s what a lead-generating HVAC or plumbing website actually costs — and the ROI it delivers.',
    category: 'Home Services',
    date: '2026-08-28',
    readTime: '8 min read',
    author: 'Debanjan Amin',
  },
  {
    slug: 'salon-spa-website-design-booking-system',
    title: 'Salon & Spa Website Design: The 3-Tap Booking System That Doubles Your Appointments',
    excerpt: 'Every extra booking step loses 20% of customers. Learn how a 3-tap booking flow takes clients from homepage to confirmed appointment in under 10 seconds.',
    category: 'Beauty & Wellness',
    date: '2026-08-28',
    readTime: '8 min read',
    author: 'Debanjan Amin',
  },
  {
    slug: 'restaurant-pdf-menu-killing-google-rankings',
    title: 'Why Your Restaurant\'s PDF Menu is Killing Your Google Rankings (And What to Do Instead)',
    excerpt: 'Your beautifully designed PDF menu is invisible to Google, terrible on mobile, and actively burying your restaurant in search results. Here\'s the fix.',
    category: 'Restaurant & Food',
    date: '2026-08-28',
    readTime: '8 min read',
    author: 'Debanjan Amin',
  },
  {
    slug: 'why-wix-wordpress-websites-fail-to-rank-google',
    title: 'Why 90% of Wix & WordPress Websites Fail to Rank on Google (And How to Fix It)',
    excerpt: 'Discover why template builders and bloated WordPress themes struggle to hit Page 1 of Google — and how custom Next.js web architecture fixes Core Web Vitals and SEO rankings.',
    category: 'SEO & Performance',
    date: '2026-08-22',
    readTime: '9 min read',
    author: 'Debanjan Amin',
  },
  {
    slug: 'how-much-should-a-small-business-website-cost',
    title: 'How Much Should a Small Business Website Cost in 2026?',
    excerpt: 'A transparent breakdown of website pricing — from DIY builders to custom agency builds. Know what you\'re paying for before you invest.',
    category: 'Business',
    date: '2026-08-10',
    readTime: '8 min read',
    author: 'Debanjan Amin',
  },
  {
    slug: 'why-your-google-business-profile-isnt-enough',
    title: 'Why Your Google Business Profile Isn\'t Enough Anymore',
    excerpt: 'A Google Business Profile gets you found — but a website is what converts visitors into paying customers. Here\'s why you need both.',
    category: 'SEO',
    date: '2026-08-08',
    readTime: '6 min read',
    author: 'Debanjan Amin',
  },
  {
    slug: 'best-website-features-for-home-service-businesses',
    title: '7 Website Features Every Home Service Business Needs',
    excerpt: 'From click-to-call buttons to service area pages — the must-have features that turn your website into a lead generation machine.',
    category: 'Web Design',
    date: '2026-08-05',
    readTime: '7 min read',
    author: 'Debanjan Amin',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SplitText
            text="Blog"
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-zinc-400 max-w-2xl"
          >
            Insights on web design, development, and growing your business online.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={`/blog/${article.slug}`} className="block h-full">
                <div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all p-8 h-full flex flex-col cursor-pointer card-dark">
                  <span className="text-emerald-500 text-sm font-semibold mb-4 tracking-wider uppercase text-primary">
                    {article.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-zinc-400 mb-8 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-zinc-500 mt-auto pt-4 border-t border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
