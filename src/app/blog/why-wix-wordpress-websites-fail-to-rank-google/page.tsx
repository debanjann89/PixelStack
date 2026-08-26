'use client';

import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import { Zap, ShieldAlert, Code2, Gauge, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ArticleWixWordpressPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="text-emerald-500 hover:text-emerald-400 text-sm font-medium transition-colors mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <SplitText
            text="Why 90% of Wix & WordPress Websites Fail to Rank on Google (And How to Fix It)"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Aug 22, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>9 min read</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-500 hover:prose-a:text-emerald-400 prose-li:text-zinc-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="lead text-xl text-zinc-300 mb-8 leading-relaxed">
              Every month, thousands of small business owners invest money into building a website on Wix, Squarespace, or a cheap WordPress theme, expecting leads to immediately start pouring in. Six months later, they search for their business keywords on Google and find their site buried on Page 5 or nowhere to be found.
            </p>
            <p className="mb-6">
              Why does this happen? The uncomfortable truth in 2026 is that <strong>Google’s search algorithm has evolved far beyond keywords and basic meta tags</strong>. Today, technical performance, Core Web Vitals, clean DOM trees, and structured data determine who wins the top search spots.
            </p>
            <p className="mb-8">
              Here is an in-depth breakdown of why drag-and-drop website builders fall short, and the exact architectural advantages of switching to modern custom development.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
              <ShieldAlert className="w-7 h-7 text-red-500" />
              1. The Code Bloat & Plugin Nightmare
            </h2>
            <p className="mb-4">
              When you build a site using visual page builders (like Elementor or Divi on WordPress, or Wix's visual canvas), the platform generates massive amounts of hidden, nested HTML divs, render-blocking JavaScript scripts, and unused CSS rules just to render a simple button or text block.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Average WordPress page weight:</strong> 3.5 MB to 6.0 MB with 40+ HTTP requests.</li>
              <li><strong>Custom Next.js page weight:</strong> Less than 250 KB with instant prefetching and optimized payloads.</li>
            </ul>
            <p className="mb-6">
              When Google's crawler (Googlebot) visits your page, it has a strict <em>Crawl Budget</em> and computation limit. If your website takes several seconds to parse bloated scripts, Googlebot truncates rendering or penalizes your index speed.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Gauge className="w-7 h-7 text-amber-400" />
              2. Core Web Vitals Failure (LCP, INP, CLS)
            </h2>
            <p className="mb-4">
              Google officially made <strong>Core Web Vitals</strong> a primary ranking factor:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Largest Contentful Paint (LCP):</strong> How fast your main content loads. Template sites often take 4–7 seconds on mobile networks (failing Google’s 2.5s threshold).
              </li>
              <li>
                <strong>Interaction to Next Paint (INP):</strong> How quickly your site responds to clicks. Bloated plugin scripts freeze the main browser thread, creating laggy, frustrating mobile experiences.
              </li>
              <li>
                <strong>Cumulative Layout Shift (CLS):</strong> Unoptimized banner ads and template popups cause text to jump around while loading, violating visual stability rules.
              </li>
            </ul>
            <p className="mb-6">
              At <Link href="/">D&B Digitals</Link>, we build on Next.js 15 with Server-Side Rendering (SSR) and Edge caching. Our builds achieve <strong>95–100 PageSpeed scores</strong>, ensuring Google treats your site as a top-tier result.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Code2 className="w-7 h-7 text-emerald-400" />
              3. Missing or Malformed JSON-LD Schema Markup
            </h2>
            <p className="mb-4">
              Schema markup is the code language you provide directly to Google to tell it: <em>Who you are, where you operate, what your pricing is, and what specific services you provide</em>.
            </p>
            <p className="mb-6">
              Most template builders only generate generic, shallow metadata. For specialized industries like <Link href="/industries/dental-clinic-website-design">Dental Clinic Web Development</Link>, <Link href="/industries/hvac-plumbing-website-design">HVAC & Plumbing Contractors</Link>, or <Link href="/industries/hotel-resort-website-design">Hotel & Resort Direct Bookings</Link>, Google requires deep <code>LocalBusiness</code>, <code>Service</code>, <code>FAQPage</code>, and <code>BreadcrumbList</code> schemas to award rich snippets and map rankings.
            </p>
            <p className="mb-6 text-sm text-zinc-400">
              💡 <em>See how we solved this in practice: Check out the <Link href="/case-studies/apex-dental-care" className="text-emerald-400 font-semibold underline">Apex Dental Care Case Study</Link> or the <Link href="/case-studies/grand-palace-resorts" className="text-emerald-400 font-semibold underline">Grand Palace Resorts Case Study</Link>.</em>
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Zap className="w-7 h-7 text-primary" />
              4. Mobile Experience and Conversion Disconnect
            </h2>
            <p className="mb-4">
              Over 70% of local search traffic happens on smartphones. A template site that looks acceptable on a desktop screen frequently breaks on mobile viewports — buttons are too small to tap, text overflows, and forms fail to load.
            </p>
            <p className="mb-6">
              If a visitor bounces within 5 seconds because your website took too long to load, Google records this negative user signal (high bounce rate, low dwell time) and demotes your search position in favor of faster competitors.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">How to Fix Your Website’s SEO in 2026</h2>
            <p className="mb-4">If your existing website is stuck and failing to generate inquiries, here is the roadmap to reclaim your search visibility:</p>
            <ol className="list-decimal pl-6 mb-8 space-y-3">
              <li><strong>Audit Your PageSpeed:</strong> Run your URL through Google’s official PageSpeed Insights tool. If mobile is below 70, you are actively losing rankings.</li>
              <li><strong>Migrate to Custom Architecture:</strong> Transition from heavy CMS themes to a custom Next.js/React framework that renders instantaneously.</li>
              <li><strong>Implement Structured JSON-LD Data:</strong> Embed proper schema markups for all services and business locations.</li>
              <li><strong>Build Long-Tail Niche Pages:</strong> Create dedicated service pages tailored to exact client searches (see our breakdown on our <Link href="/services">Services page</Link>).</li>
            </ol>

            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Want a High-Performance Digital Asset That Ranks #1?</h3>
              <p className="text-zinc-400 mb-6">
                Stop losing customers to slow, generic templates. Let D&B Digitals engineer an ultra-fast, custom platform tailored to dominate local search and turn visitors into booked clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                >
                  Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="border border-zinc-700 hover:border-zinc-500 text-white font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
