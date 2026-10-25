'use client';

import React from 'react';
import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import {
  DollarSign,
  AlertTriangle,
  Zap,
  ShieldCheck,
  TrendingUp,
  XCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export default function CheapVsPremiumArticlePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText
            text="₹15,000 vs ₹1,50,000 Website: Kya Farak Hai? (The Real Indian Business Guide)"
            className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Oct 22, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>9 min read</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-emerald-400 font-medium">Business & Transparency</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-li:text-zinc-300">
          <p className="text-xl text-zinc-200 leading-relaxed font-normal">
            If you have ever asked a web design agency or freelancer in India for a quotation, you have probably been left completely confused.
          </p>

          <p>
            One freelancer on Justdial or Fiverr promises to build your website for <strong>₹4,999</strong> with free hosting. Another agency in Kolkata or Bangalore quotes you <strong>₹75,000 to ₹1,50,000</strong> for what seems to be the exact same thing: a website with a home page, about page, and contact form.
          </p>

          <p>
            <em>&quot;Website hi toh hai—dono me aisa kya farak hai?&quot;</em>
          </p>

          <p>
            It is the single most common question Indian business owners ask us. And it is a completely fair question. Here is the unvarnished, technical and financial truth about what happens under the hood when you pay ₹5,000 versus when you invest ₹50,000+.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <AlertTriangle className="w-7 h-7 text-emerald-400 shrink-0" />
            1. The ₹5,000 Freelancer Trap: What Actually Happens
          </h2>

          <p>
            To understand how someone can afford to sell a website for ₹4,999, you have to look at their business model:
          </p>

          <ul className="space-y-3 my-6">
            <li><strong>Pirated / Nulled WordPress Themes:</strong> They download a free cracked theme from the internet. Within 3 to 6 months, hackers exploit known backdoors to inject spam links, redirecting your visitors to gambling websites.</li>
            <li><strong>Deadly Slow Shared Hosting:</strong> Your site is dumped onto a ₹100/month shared server alongside 2,000 other low-quality websites. When a customer in Siliguri or Kolkata opens it on their mobile phone, it takes 6 to 9 seconds to load. Over 70% of visitors leave before seeing your phone number.</li>
            <li><strong>Disappearing Developers:</strong> The freelancer makes a couple thousand rupees, gives you no documentation, and stops answering your WhatsApp calls when something breaks 3 months later.</li>
            <li><strong>Annual Hostage Renewal Fees:</strong> They charge ₹5,000 upfront, but demand ₹12,000 next year just to keep your domain active.</li>
          </ul>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <DollarSign className="w-7 h-7 text-emerald-400 shrink-0" />
            2. The Side-by-Side Comparison
          </h2>

          {/* Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse border border-zinc-800 text-sm">
              <thead>
                <tr className="bg-zinc-900/90 text-white border-b border-zinc-800">
                  <th className="p-4 font-semibold">Factor</th>
                  <th className="p-4 font-semibold text-red-400">Cheap Freelancer Template</th>
                  <th className="p-4 font-semibold text-emerald-400">Custom High-Performance Build</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr>
                  <td className="p-4 font-bold text-zinc-300">Page Load Speed</td>
                  <td className="p-4 text-zinc-400">5.8s – 9.2s (Fails Google Core Web Vitals)</td>
                  <td className="p-4 text-emerald-400 font-semibold">0.6s – 1.2s (Lightning Fast on 4G/5G)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-zinc-300">Google Search Ranking</td>
                  <td className="p-4 text-zinc-400">Buried on Page 6 or 8. Zero SEO schema.</td>
                  <td className="p-4 text-emerald-400 font-semibold">Engineered to hit Page 1 for commercial keywords.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-zinc-300">Lead Conversion</td>
                  <td className="p-4 text-zinc-400">Static contact form with no verification.</td>
                  <td className="p-4 text-emerald-400 font-semibold">1-Tap WhatsApp chat, instant click-to-call.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-zinc-300">Code & Asset Ownership</td>
                  <td className="p-4 text-zinc-400">Held hostage on developer&apos;s personal account.</td>
                  <td className="p-4 text-emerald-400 font-semibold">You own 100% of your GitHub repository & domain.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-zinc-300">Security & Hacking</td>
                  <td className="p-4 text-zinc-400">High risk of malware due to outdated plugins.</td>
                  <td className="p-4 text-emerald-400 font-semibold">Static serverless architecture. Virtually unhackable.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-zinc-300">Monthly Hosting Costs</td>
                  <td className="p-4 text-zinc-400">₹500 – ₹1,500 / month for slow shared server.</td>
                  <td className="p-4 text-emerald-400 font-semibold">₹0 / month on modern edge global infrastructure.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <Zap className="w-7 h-7 text-emerald-400 shrink-0" />
            3. What You Are Actually Paying For in a Premium Build
          </h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">A. Speed That Saves Customer Drop-Off</h3>
          <p>
            Google&apos;s official data shows that <strong>53% of mobile users abandon a website if it takes longer than 3 seconds to load</strong>. When you buy a ₹5,000 site that takes 7 seconds, you are losing more than half of the people who were interested in hiring you.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">B. Technical SEO Architecture</h3>
          <p>
            A premium agency doesn&apos;t just type text into a template. They inject structured JSON-LD schemas (LocalBusiness, FAQPage, Service, BreadcrumbList), create dynamic sitemaps, optimize OpenGraph preview cards for WhatsApp sharing, and configure Google Search Console properly.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">C. Conversion Funnel Engineering</h3>
          <p>
            A cheap website is designed like an art project. A premium website is designed like an aggressive salesperson. Every button, heading, review block, and WhatsApp trigger is placed strategically to get the visitor to take action immediately.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <TrendingUp className="w-7 h-7 text-emerald-400 shrink-0" />
            4. The Bottom Line: Which One Should You Choose?
          </h2>

          <p>
            Here is our honest recommendation for Indian business owners:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
              <h4 className="font-bold text-white mb-1">When is a Starter Website enough?</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                If you are a solo freelancer, personal hobbyist, or just need a simple digital card to put on your visiting card. You don&apos;t expect high Google organic traffic; you just need a professional presence.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950 border border-emerald-500/40">
              <h4 className="font-bold text-emerald-400 mb-1">When MUST you invest in a Custom Performance Build?</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                If you run a real business (hotel, clinic, coaching academy, B2B firm, contractor) where a single client is worth ₹20,000 to ₹5,00,000. In this case, choosing a slow, unoptimized template that fails to capture customer inquiries is the most expensive mistake you can make.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
            <Sparkles className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Not Sure What Your Business Actually Needs?
            </h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              We will review your current website or evaluate your business goals for free. No sales pressure, no jargon—just honest technical advice from our co-founders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20read%20your%20article%20on%20website%20pricing%20and%20want%20honest%20advice%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp (+91 89181 86998)
              </a>
              <Link
                href="/free-audit"
                className="border border-zinc-700 hover:border-zinc-500 text-white font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center text-sm"
              >
                Get Free Website Audit
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
