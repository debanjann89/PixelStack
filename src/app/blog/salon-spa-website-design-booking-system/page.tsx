'use client';

import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import { Scissors, Clock, Smartphone, DollarSign, Star, ArrowRight } from 'lucide-react';

export default function ArticleSalonSpaBookingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/blog" className="text-emerald-500 hover:text-emerald-400 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText text="Salon & Spa Website Design: The 3-Tap Booking System That Doubles Your Appointments" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight" />
          <div className="flex items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Aug 28, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>8 min read</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-500 hover:prose-a:text-emerald-400 prose-li:text-zinc-300">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p>
              In the beauty industry, 70% of appointment bookings now happen online or via mobile. 
              Yet most salon websites still force customers through 5–7 steps to book a simple haircut. 
              Every extra step loses 20% of potential bookings. The solution? A streamlined 3-tap booking flow that takes customers from homepage to confirmed appointment in under 10 seconds.
            </p>

            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <Smartphone className="w-8 h-8 text-emerald-500" />
              The 3-Tap Booking System Explained
            </h2>
            <p>
              Your website is your ultimate receptionist, available 24/7. However, if that receptionist is confusing, slow, or demands a verified account just to see availability, clients will simply bounce. Enter the <strong>3-Tap Booking System</strong>:
            </p>
            <ul>
              <li><strong>Tap 1:</strong> Select service (from a highly visual service menu)</li>
              <li><strong>Tap 2:</strong> Choose stylist + available time slot</li>
              <li><strong>Tap 3:</strong> Confirm with phone number (instant WhatsApp confirmation)</li>
            </ul>
            <p>
              Compare this to the traditional 7-step process most salons use: select service → create an account → verify email → enter personal details → select date → select time → confirm. With each additional step equating to roughly a 20% drop-off in conversions, you're literally turning away paying clients. If you want a website built around this conversion-optimized flow, checking out professional <Link href="/services">web development services</Link> is a must.
            </p>

            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <DollarSign className="w-8 h-8 text-emerald-500" />
              Website Costs for Salons & Spas
            </h2>
            <p>
              How much should you invest to get a high-performing salon website? While <Link href="/blog/how-much-should-a-small-business-website-cost">small business website costs</Link> can vary, beauty industry websites fall into three main tiers:
            </p>
            
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="py-4 px-4 font-bold text-white bg-zinc-900/50">Website Tier</th>
                    <th className="py-4 px-4 font-bold text-white bg-zinc-900/50">Cost (USD)</th>
                    <th className="py-4 px-4 font-bold text-white bg-zinc-900/50">Cost (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">Basic Starter Site</td>
                    <td className="py-4 px-4">$500 – $1,500</td>
                    <td className="py-4 px-4">₹18,000 – ₹45,000</td>
                  </tr>
                  <tr className="border-b border-zinc-800 bg-zinc-900/20">
                    <td className="py-4 px-4">Professional with Booking System</td>
                    <td className="py-4 px-4">$1,500 – $4,000</td>
                    <td className="py-4 px-4">₹45,000 – ₹1.2L</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">Multi-Location Enterprise</td>
                    <td className="py-4 px-4">$4,000 – $10,000</td>
                    <td className="py-4 px-4">₹1.2L – ₹3L</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <Star className="w-8 h-8 text-emerald-500" />
              Must-Have Features for Beauty Websites in 2026
            </h2>
            <p>
              To dominate your local market, <Link href="/blog/why-your-google-business-profile-isnt-enough">your Google Business Profile isn't enough</Link>. Your website must have these specialized features:
            </p>
            <ul>
              <li><strong>Instagram-quality visual gallery:</strong> High-resolution before/after transformations build instant trust.</li>
              <li><strong>Online booking with real-time availability:</strong> Seamless integrations with systems like Fresha or Booksy, or a high-end custom solution.</li>
              <li><strong>WhatsApp quick-book:</strong> For instant communication and fast appointments.</li>
              <li><strong>Stylist/therapist profile pages:</strong> Highlighting specializations creates deeper client connections.</li>
              <li><strong>Transparent service menu:</strong> Clear pricing layout.</li>
              <li><strong>Google Maps integration:</strong> Essential for walk-in directions.</li>
              <li><strong>Mobile-first design:</strong> Given that 85% of salon bookings occur on mobile, this is non-negotiable.</li>
            </ul>

            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <Scissors className="w-8 h-8 text-emerald-500" />
              Why "DM for Price" is Killing Your Business
            </h2>
            <p>
              In today's fast-paced digital world, hiding your prices behind a "DM for Price" strategy is disastrous. Customers want transparent pricing upfront. Hidden pricing immediately reduces trust and skyrockets your bounce rate. Furthermore, Google cannot index Instagram or Facebook DM conversations, meaning you get zero SEO value from those interactions. 
            </p>
            <p>
              Competitors with fully transparent pricing pages on fast, modern websites will consistently win the search clicks and, ultimately, the booking. This is one of the biggest reasons <Link href="/blog/why-wix-wordpress-websites-fail-to-rank-google">why many Wix and WordPress websites fail to rank</Link> — they often rely on clunky plugins that hide vital information behind poor user experiences.
            </p>

            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Ready to upgrade your salon's digital experience?</h3>
              <p className="text-zinc-400 mb-6">Stop losing appointments to a clunky booking process. Let's build a lightning-fast, high-converting website that fills your chairs and grows your business.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2">
                  Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/portfolio" className="border border-zinc-700 hover:border-zinc-500 text-white font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center">
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
