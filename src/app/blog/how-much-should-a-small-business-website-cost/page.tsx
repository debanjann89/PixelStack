'use client';

import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';

export default function ArticleCostPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/blog" className="text-emerald-500 hover:text-emerald-400 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText
            text="How Much Should a Small Business Website Cost in 2026?"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Aug 10, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>8 min read</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-500 hover:prose-a:text-emerald-400 prose-li:text-zinc-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mt-12 mb-6">Why Pricing Varies So Much</h2>
            <p className="mb-6">
              One of the most common questions we get at D&B Digitals is, "How much does a website cost?" It's a fair question, but answering it is like asking "How much does a house cost?" Are you building a small cabin in the woods or a luxury mansion in the city? 
            </p>
            <p className="mb-6">
              In 2026, website costs can range from literally nothing to upwards of $50,000 for complex enterprise platforms. For most small to medium businesses, however, the realistic range is between $500 and $10,000 depending on the route you take.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">DIY Website Builders ($0 - $30/month)</h2>
            <p className="mb-4">
              Platforms like Wix, Squarespace, and Shopify have made it easier than ever to build your own website.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Pros:</strong> Very low initial cost, intuitive drag-and-drop builders, decent templates.</li>
              <li><strong>Cons:</strong> Time-consuming, limited customization, poor technical SEO, you don't truly "own" your site (you rent space on their platform).</li>
            </ul>
            <p className="mb-6">
              <strong>Verdict:</strong> Great for hobbyists or brand-new side hustles with zero budget. If you are an established business looking to generate serious revenue, DIY platforms often look unprofessional and fail to convert visitors into clients.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">The Freelance Developer ($500 - $2,000)</h2>
            <p className="mb-4">
              Hiring a freelancer is a common step up from DIY. You can find freelancers on Upwork, Fiverr, or locally.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Pros:</strong> Affordable, you don't have to build it yourself, usually uses WordPress.</li>
              <li><strong>Cons:</strong> Hit or miss quality. Many cheap freelancers simply install a $50 template, swap the text, and hand it over. They rarely offer ongoing support, SEO optimization, or strategy.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Professional Agency ($2,000 - $10,000+)</h2>
            <p className="mb-6">
              Working with a professional web design agency like <Link href="/">D&B Digitals</Link> means you are investing in a business asset, not just an online brochure. We focus on conversion rate optimization (CRO), speed, and search engine optimization (SEO).
            </p>
            <p className="mb-4">Here is what a professional build typically includes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Custom design tailored to your specific brand (no cheap templates).</li>
              <li>High-performance code (Next.js, React) ensuring lightning-fast load times.</li>
              <li>On-page SEO optimization so you rank on Google.</li>
              <li>Professional copywriting and content strategy.</li>
              <li>Ongoing support and maintenance.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">What Actually Affects the Price?</h2>
            <p className="mb-4">When an agency quotes you for a project, the cost is determined by several key factors:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Number of Pages:</strong> A 5-page site costs less than a 20-page <Link href="/services">service-heavy site</Link>.</li>
              <li><strong>Custom Features:</strong> Booking systems, e-commerce functionality, and custom animations (like the ones on our <Link href="/portfolio">portfolio</Link>) take time to develop.</li>
              <li><strong>Content Creation:</strong> Are you writing the text, or do you need a professional copywriter?</li>
              <li><strong>Ongoing Maintenance:</strong> Hosting, security updates, and regular content additions.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Our Recommendation: Match Budget to Goals</h2>
            <p className="mb-6">
              If your goal is simply to have a URL to put on a business card, a cheap DIY site might suffice. But if your goal is to generate leads, close sales, and grow your business, your website needs to be an investment.
            </p>
            <p className="mb-6">
              A $3,000 website that generates $30,000 in new business is infinitely cheaper than a $300 website that generates nothing.
            </p>

            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <p className="text-zinc-400 text-sm mb-0">
                Debanjan Amin is the Lead Developer and Co-Founder at D&B Digitals. With years of experience building high-performance web applications, he specializes in crafting digital experiences that drive real business growth for clients across the US and India.
              </p>
            </div>

            <div className="mt-16 text-center bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to invest in your business?</h2>
              <p className="text-zinc-300 mb-8 max-w-lg mx-auto">
                Stop losing customers to outdated design. Let's build a website that works as hard as you do.
              </p>
              <Link href="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-8 rounded-full transition-colors">
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
