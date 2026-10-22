'use client';

import React from 'react';
import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import {
  Sparkles,
  DollarSign,
  TrendingUp,
  Camera,
  MessageCircle,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Heart
} from 'lucide-react';

export default function WeddingPlannerArticlePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText
            text="Wedding Planner Website Design: How to Book ₹10L+ Luxury Weddings Online in India"
            className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Oct 22, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>8 min read</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-emerald-400 font-medium">Luxury & Events</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-li:text-zinc-300">
          <p className="text-xl text-zinc-200 leading-relaxed font-normal">
            The Indian wedding industry is booming like never before. Destination weddings in Darjeeling, Dooars, Goa, and heritage palace events in Kolkata and Rajasthan command budgets anywhere from <strong>₹15 Lakhs to ₹1 Crore+</strong>.
          </p>

          <p>
            Yet when high-net-worth families search for wedding planners to trust with their biggest family celebration, what do 80% of event companies present them with? An unverified Instagram profile or a slow, outdated WordPress site where images take 10 seconds to load.
          </p>

          <p>
            Here is why high-budget families refuse to sign contracts over Instagram DMs—and how a custom luxury website turns casual inquiries into booked destination wedding contracts.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <AlertCircle className="w-7 h-7 text-emerald-400 shrink-0" />
            1. Why Instagram Alone Does Not Close ₹10 Lakh+ Weddings
          </h2>

          <p>
            Instagram is fantastic for inspiration, but it fails as a high-ticket conversion closing tool for three major reasons:
          </p>

          <ul className="space-y-3 my-6">
            <li><strong>Decision Makers Are Not Just the Bride:</strong> While the bride may discover you on Instagram, the father or family elder funding the ₹25 Lakh budget will demand a legitimate company website, corporate credentials, verified past events, and clear contracts.</li>
            <li><strong>Cluttered Algorithm & Competition:</strong> The moment a prospect views your Instagram reel, the algorithm immediately shows them 10 other competing wedding planners in their feed.</li>
            <li><strong>No Structured Pricing or Date Availability:</strong> Families hate sending &quot;DM for price&quot; only to wait 12 hours for a vague response. They want transparent package tiers and instant WhatsApp consultation.</li>
          </ul>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <Sparkles className="w-7 h-7 text-emerald-400 shrink-0" />
            2. The 5 Luxury Features That Win High-Budget Wedding Contracts
          </h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">A. Fullscreen Cinematic Gallery with Lazy Loading</h3>
          <p>
            High-budget clients buy an emotional experience. Your website must showcase high-resolution photography and video reels of Haldi, Sangeet, Mandap decor, and Varmala ceremonies that load in under a second without crashing on mobile phones.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">B. Destination & Venue Portfolios</h3>
          <p>
            Feature dedicated showcase pages for popular destinations: <em>Destination Weddings in Darjeeling & Kalimpong, Luxury Banquets in Kolkata, Beach Weddings in Digha/Goa</em>. This captures high-intent Google searches when families search for venue-specific planners.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">C. Date Availability Checker & Consultation Booking</h3>
          <p>
            Allow prospects to enter their tentative wedding dates (e.g. November – February auspicious dates) and instantly check your booking calendar. This creates instant urgency and qualifies serious inquiries.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">D. Transparent Package Tiers & Inclusions</h3>
          <p>
            Instead of hiding your prices, outline clear investment tiers: <em>Complete Wedding Management, Decor & Production, Destination Logistics</em>. High-budget clients respect transparent pricing and are far more likely to initiate contact.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">E. Instant WhatsApp Concierge Button</h3>
          <p>
            Provide an instant 1-tap WhatsApp consultation link pre-filled with: <em>&quot;Hi, I am planning a wedding for December 2026 with a budget of ₹15-20 Lakhs. Can we connect?&quot;</em>
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <DollarSign className="w-7 h-7 text-emerald-400 shrink-0" />
            3. Wedding Planner Website Pricing Breakdown in India
          </h2>

          {/* Pricing Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse border border-zinc-800 text-sm">
              <thead>
                <tr className="bg-zinc-900/90 text-white border-b border-zinc-800">
                  <th className="p-4 font-semibold">Tier</th>
                  <th className="p-4 font-semibold">Cost (INR)</th>
                  <th className="p-4 font-semibold">Key Capabilities</th>
                  <th className="p-4 font-semibold">Ideal For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Boutique Planner Showcase</td>
                  <td className="p-4 text-white">₹22,000 – ₹38,000</td>
                  <td className="p-4 text-zinc-300">6-8 pages, high-res photo gallery, client reviews, WhatsApp inquiry, mobile speed</td>
                  <td className="p-4 text-zinc-400">Independent wedding planners, bridal decorators</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Luxury Event Funnel</td>
                  <td className="p-4 text-white">₹45,000 – ₹85,000</td>
                  <td className="p-4 text-zinc-300">Cinematic video hero, destination pages (Darjeeling/Goa/Kolkata), date availability calendar, local Google SEO</td>
                  <td className="p-4 text-zinc-400">Established event management firms booking ₹10L - ₹50L weddings</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Multi-City Agency Portal</td>
                  <td className="p-4 text-white">₹95,000 – ₹1,80,000</td>
                  <td className="p-4 text-zinc-300">Client portal, interactive moodboards, vendor coordination modules, national SEO</td>
                  <td className="p-4 text-zinc-400">Top-tier destination wedding production companies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <TrendingUp className="w-7 h-7 text-emerald-400 shrink-0" />
            4. The ROI Math: 1 Wedding Pays for 20 Websites
          </h2>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-6">
            <p className="text-zinc-200 font-semibold mb-2">The High-Ticket Math:</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Custom Luxury Website: <strong>₹35,000 (one-time investment)</strong></li>
              <li>• Average planner commission/profit on one ₹15 Lakh wedding: <strong>₹1,50,000 – ₹3,00,000</strong></li>
              <li>• If the website books just <strong>ONE single extra wedding</strong> this entire season: <strong>You make 4x to 8x your entire website cost</strong></li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
            <Sparkles className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Attract Higher-Budget Wedding Clients?
            </h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              D&B Digitals designs ultra-luxurious, lightning-fast digital experiences that impress affluent families and close high-value contracts. Talk to our founders on WhatsApp today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20am%20a%20wedding%20planner%20and%20interested%20in%20a%20luxury%20website%20consultation."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp Now
              </a>
              <Link
                href="/portfolio"
                className="border border-zinc-700 hover:border-zinc-500 text-white font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center text-sm"
              >
                Explore Agency Portfolio
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
