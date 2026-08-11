'use client';

import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';

export default function ArticleHomeServicePage() {
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
            text="7 Website Features Every Home Service Business Needs"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Aug 5, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>7 min read</span>
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
              If you run a plumbing, HVAC, electrical, or landscaping business, your website isn't just an online brochure—it's your hardest-working sales rep. It needs to work 24/7 to capture leads, answer questions, and schedule appointments.
            </p>
            <p className="mb-6">
              However, many home service websites fail because they lack the specific features needed to convert frantic, hurried visitors into booked jobs. Here are the 7 must-have features your home service website needs.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">1. Click-to-Call Buttons</h2>
            <p className="mb-6">
              When a pipe bursts at 2 AM, your customer isn't going to fill out a contact form and wait 24 hours for a response. They need help right now, and they are probably searching on their mobile phone.
            </p>
            <p className="mb-6">
              Your phone number must be prominently displayed in the header of every page, and it must be a clickable link (<code>tel:</code> link) so mobile users can dial you with a single tap. 
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">2. Dedicated Service Area Pages</h2>
            <p className="mb-6">
              "Do you serve my neighborhood?" This is the first question a visitor asks. 
            </p>
            <p className="mb-6">
              From an SEO perspective, having dedicated pages for the major cities and towns you serve is crucial. If you are an HVAC tech based in Austin but also serve Round Rock and Cedar Park, you need specific pages optimized for "AC Repair Round Rock" to capture that local search traffic.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">3. Online Booking / Quote Request Forms</h2>
            <p className="mb-6">
              Not every service call is an emergency. Some people are browsing for a kitchen remodel or an annual HVAC tune-up late at night after the kids are asleep. They want to request a quote without picking up the phone.
            </p>
            <p className="mb-6">
              A short, easy-to-use form that asks for their name, contact info, and a brief description of the problem will capture leads outside of business hours.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">4. Before & After Photo Galleries</h2>
            <p className="mb-6">
              Trust is the currency of the home service industry. Homeowners are inviting strangers into their personal spaces. Showing them high-quality photos of your completed work builds instant credibility.
            </p>
            <p className="mb-6">
              Whether it's a beautifully landscaped yard or a clean, professional electrical panel installation, visual proof that you do good work is essential.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">5. Customer Reviews & Testimonials</h2>
            <p className="mb-6">
              Did you know that 88% of consumers trust online reviews as much as personal recommendations? You should absolutely be pulling your Google Business Profile reviews directly onto your website.
            </p>
            <p className="mb-6">
              Place testimonials strategically throughout your site—on the homepage, on service pages, and near contact forms—to reassure visitors right at the point of conversion.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">6. Emergency Service CTAs</h2>
            <p className="mb-6">
              If you offer 24/7 emergency service, this needs to be impossible to miss. Use contrasting colors for your "24/7 Emergency Service" call-to-action (CTA) banners. 
            </p>
            <p className="mb-6">
              Letting customers know that you are available exactly when they are panicking is the quickest way to secure a job over a competitor who only operates 9-to-5.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">7. Google Maps Integration</h2>
            <p className="mb-6">
              Embedding a Google Map on your contact page or in your footer reinforces your local presence. It shows Google (and your customers) exactly where you operate from.
            </p>
            <p className="mb-6">
              It also provides a subtle psychological cue to the customer that you are a real, established business in their community, not a fly-by-night operation.
            </p>

            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <p className="text-zinc-400 text-sm mb-0">
                Debanjan Amin is the Lead Developer and Co-Founder at D&B Digitals. With years of experience building high-performance web applications, he specializes in crafting digital experiences that drive real business growth for clients across the US and India.
              </p>
            </div>

            <div className="mt-16 text-center bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Need a better website for your trades business?</h2>
              <p className="text-zinc-300 mb-8 max-w-lg mx-auto">
                Check out our specialized <Link href="/industries/hvac-plumbing-website-design" className="text-emerald-500 underline">web design services for HVAC and Plumbing</Link> or get in touch for a custom quote.
              </p>
              <Link href="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-8 rounded-full transition-colors">
                Book a Free Strategy Call
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
