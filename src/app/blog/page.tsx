'use client';

import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';

const ARTICLES = [
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
