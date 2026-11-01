'use client';

import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';

export default function ArticleGMBPage() {
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
            text="Why Your Google Business Profile Isn't Enough Anymore"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Aug 8, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>6 min read</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-500 hover:prose-a:text-emerald-400 prose-li:text-zinc-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6">
              Many local business owners think that having a verified Google Business Profile (GBP) is the only digital presence they need. After all, it puts you on Google Maps, lets customers leave reviews, and displays your phone number. 
            </p>
            <p className="mb-6">
              While a GBP is an absolute necessity for local SEO, relying on it entirely is a risky strategy that leaves money on the table.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">What Google Business Profile Does Well</h2>
            <p className="mb-4">We are not here to bash Google Business Profiles. In fact, optimizing your GBP is one of the primary <Link href="/services">SEO services</Link> we offer. It excels at:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Local Visibility:</strong> Appearing in the "Map Pack" for local searches (e.g., "plumber near me").</li>
              <li><strong>Social Proof:</strong> Gathering and displaying customer reviews.</li>
              <li><strong>Quick Info:</strong> Showing your address, hours of operation, and contact info at a glance.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">What GBP Can't Do</h2>
            <p className="mb-4">However, a Google Business Profile has severe limitations when it comes to converting a searcher into a paying customer:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>No Brand Control:</strong> You are at the mercy of Google's layout. You cannot design a custom experience that sets you apart from the 10 other businesses listed next to you.</li>
              <li><strong>Limited Space to Sell:</strong> You can list services, but you can't create dedicated, persuasive pages that explain <em>why</em> a customer should choose you.</li>
              <li><strong>No Seamless Booking:</strong> While Google has some booking integrations, nothing beats a custom online booking form tailored exactly to your workflow.</li>
              <li><strong>You Don't Own It:</strong> Google can suspend your profile at any time for policy violations (sometimes even by mistake). If that happens, your online presence vanishes overnight.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Why You Need Both (The Synergy Effect)</h2>
            <p className="mb-6">
              Think of your Google Business Profile as the billboard and your website as the storefront. The billboard gets their attention, but the storefront is where the sale happens.
            </p>
            <p className="mb-6">
              When a potential customer searches for a high-ticket service (like a roof replacement or a cosmetic dental procedure), they don't just call the first number on Google Maps. They look at reviews, and then they <strong>click the website link</strong> to verify credibility. If your link is dead or leads to a terrible site, they bounce to your competitor.
            </p>
            <p className="mb-6">
              Furthermore, linking your GBP to an optimized, fast-loading website actually boosts your GBP rankings. Google reads the data on your website to verify that you are a legitimate business serving the area you claim.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Real Example: The Dental Clinic</h2>
            <p className="mb-6">
              We worked with a dental practice that had a strong GBP with 100+ five-star reviews, but an outdated site. They were getting calls for basic cleanings, but struggling to book high-value procedures like Invisalign and dental implants.
            </p>
            <p className="mb-6">
              We built them a custom platform featuring dedicated service pages explaining their cosmetic procedures, before-and-after smile galleries, and seamless online consultation forms (read the full story in our <Link href="/case-studies/apex-dental-care" className="text-emerald-400 font-semibold underline">Apex Dental Care Case Study</Link> or learn more about our <Link href="/industries/dental-clinic-website-design" className="text-emerald-400 font-semibold underline">Dental Clinic Web Development</Link> approach). Within two months, high-ticket procedure bookings surged. The trust established by the website was the missing link.
            </p>

            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <p className="text-zinc-400 text-sm mb-0">
                Debanjan Amin is the Lead Developer and Co-Founder at D&amp;B Digitals. With years of experience building high-performance web applications, he specializes in crafting digital experiences that drive real business growth for clients in West Bengal and across India.
              </p>
            </div>

            <div className="mt-16 text-center bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Need a storefront that converts?</h2>
              <p className="text-zinc-300 mb-8 max-w-lg mx-auto">
                Pair your Google Business Profile with a high-performance website and local SEO to dominate your local market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/seo-services-siliguri" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-8 rounded-full transition-colors">
                  Explore Local SEO Services
                </Link>
                <Link href="/contact" className="inline-block border border-zinc-700 hover:border-zinc-500 text-white font-medium py-3 px-8 rounded-full transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-10 border-t border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/blog/why-wix-wordpress-websites-fail-to-rank-google"
                  className="group block bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 transition-all no-underline text-left"
                >
                  <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">Technical SEO</p>
                  <p className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors leading-snug">
                    Why Wix &amp; WordPress Websites Fail to Rank on Google in 2026
                  </p>
                  <span className="text-zinc-500 text-xs mt-3 inline-flex items-center gap-1">
                    Read Article &rarr;
                  </span>
                </Link>
                <Link
                  href="/blog/cheap-vs-premium-website-india"
                  className="group block bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 transition-all no-underline text-left"
                >
                  <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">Business &amp; Pricing</p>
                  <p className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors leading-snug">
                    ₹15,000 vs ₹1,50,000 Website: Kya Farak Hai? (The Real Indian Business Guide)
                  </p>
                  <span className="text-zinc-500 text-xs mt-3 inline-flex items-center gap-1">
                    Read Article &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
