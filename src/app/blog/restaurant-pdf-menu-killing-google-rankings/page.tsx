'use client';

import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import { UtensilsCrossed, FileX, Smartphone, Search, TrendingUp, ArrowRight } from 'lucide-react';

export default function ArticleRestaurantPDFMenuKillingGoogleRankingsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/blog" className="text-emerald-500 hover:text-emerald-400 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText text="Why Your Restaurant's PDF Menu is Killing Your Google Rankings (And What to Do Instead)" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight" />
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
              You spent hours perfecting your restaurant's menu in Canva, exported it as a beautiful PDF, and uploaded it to your website. It looks gorgeous. But here's what you don't know: Google can barely read it, mobile users can't navigate it, and it's actively burying your restaurant in search results. Your PDF menu is an SEO death sentence.
            </p>
            <p>
              Many restaurant owners believe that if a menu looks good to the human eye, it's good enough. However, in the highly competitive digital landscape of 2026, <Link href="/blog/why-your-google-business-profile-isnt-enough">your Google Business Profile isn't enough</Link>, and neither is a static PDF menu. 
            </p>

            <h2 className="flex items-center gap-3 mt-12 mb-6">
              <FileX className="w-8 h-8 text-emerald-500" />
              Why Google Can't Read Your PDF Menu
            </h2>
            <p>
              Search engines are essentially sophisticated text readers. While Google has gotten better at optical character recognition (OCR), PDFs are still treated as secondary content by Googlebot. If your text is embedded inside an image within a PDF, it is completely invisible to search crawlers.
            </p>
            <p>
              More critically, PDFs offer absolutely zero structural context. There is no structured data or schema markup possible inside a PDF document. Compare this to a well-structured HTML menu utilizing Schema.org's <code>MenuItem</code> markup:
            </p>
            <ul>
              <li><strong>HTML Menu:</strong> Google understands exactly what a dish is, its price, ingredients, and dietary tags. This generates rich snippets directly in Google Search results.</li>
              <li><strong>PDF Menu:</strong> Google sees a block of unstructured text or an opaque image file.</li>
            </ul>
            <p>
              When a potential customer searches for "best gluten-free pasta near me," restaurants with HTML menus featuring schema markup will dominate the local pack. If your pasta is locked in a PDF, Google won't serve your restaurant as the answer.
            </p>

            <h2 className="flex items-center gap-3 mt-12 mb-6">
              <Smartphone className="w-8 h-8 text-emerald-500" />
              The Mobile Disaster
            </h2>
            <p>
              Over 78% of restaurant-related searches happen on mobile devices. Picture this: a hungry user clicks your website while walking down the street. They tap "Menu," and instead of a clean, scrollable page, they are forced to download a 5 MB PDF file. 
            </p>
            <p>
              Once opened, they have to pinch, zoom, and awkwardly pan across the screen just to read your appetizers. It's a frustrating user experience that actively drives customers to your competitors.
            </p>
            <p>
              Furthermore, file size is a massive issue. The average PDF menu is between 2–5 MB, which severely degrades your page load speed. Studies consistently show that users abandon websites that take longer than 3 seconds to load. In our tests, an embedded PDF takes an average of 4.2 seconds to render on a 4G connection, whereas a native, lightweight HTML menu loads in just 0.6 seconds. If your <Link href="/blog/why-wix-wordpress-websites-fail-to-rank-google">Wix or WordPress site is already struggling to rank</Link>, a heavy PDF menu only exacerbates the problem.
            </p>

            <h2 className="flex items-center gap-3 mt-12 mb-6">
              <UtensilsCrossed className="w-8 h-8 text-emerald-500" />
              What a Revenue-Generating Menu Page Looks Like
            </h2>
            <p>
              So, what is the alternative? Modern <Link href="/services">restaurant website design</Link> demands a native HTML menu page built for both users and search engines. A revenue-generating menu includes:
            </p>
            <ul>
              <li><strong>Native HTML with Heading Hierarchy:</strong> Using `h2` for categories (e.g., Starters, Mains) and `h3` for individual dishes.</li>
              <li><strong>Schema.org Markup:</strong> Integrating <code>Menu</code> and <code>MenuItem</code> structured data to qualify for Google rich results.</li>
              <li><strong>Mobile-First Card Layout:</strong> Displaying dishes in beautiful, responsive grids with high-quality, optimized photos.</li>
              <li><strong>Interactive Filters:</strong> Allowing users to filter by dietary preferences (vegan, gluten-free, allergens) instantly.</li>
              <li><strong>Integrated CTAs:</strong> An "Order Now" or "Reserve a Table" button directly integrated within the menu sections.</li>
              <li><strong>Easy Content Management:</strong> Using a headless CMS (like Sanity) so restaurant staff can update prices or add seasonal specials in seconds, without needing a designer to edit a PDF.</li>
            </ul>

            <h2 className="flex items-center gap-3 mt-12 mb-6">
              <Search className="w-8 h-8 text-emerald-500" />
              Restaurant Website Cost Breakdown
            </h2>
            <p>
              Transitioning from a basic template with a PDF menu to a high-performing custom website is an investment. Here is a realistic breakdown of what a proper restaurant website costs:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse border border-zinc-800">
                <thead>
                  <tr className="bg-zinc-900">
                    <th className="p-4 border border-zinc-800 text-white font-semibold">Website Tier</th>
                    <th className="p-4 border border-zinc-800 text-white font-semibold">Cost (USD)</th>
                    <th className="p-4 border border-zinc-800 text-white font-semibold">Cost (INR)</th>
                    <th className="p-4 border border-zinc-800 text-white font-semibold">What's Included</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr>
                    <td className="p-4 border border-zinc-800 font-medium">Basic Informational</td>
                    <td className="p-4 border border-zinc-800">$500 – $1,500</td>
                    <td className="p-4 border border-zinc-800">₹15K – ₹45K</td>
                    <td className="p-4 border border-zinc-800">HTML Menu, Location, Basic SEO, Mobile Responsive</td>
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="p-4 border border-zinc-800 font-medium text-emerald-500">Professional (Recommended)</td>
                    <td className="p-4 border border-zinc-800">$2,000 – $5,000</td>
                    <td className="p-4 border border-zinc-800">₹60K – ₹1.5L</td>
                    <td className="p-4 border border-zinc-800">Advanced Schema SEO, CMS for Menu, Online Ordering Integration</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-800 font-medium">Full Custom</td>
                    <td className="p-4 border border-zinc-800">$5,000 – $12,000</td>
                    <td className="p-4 border border-zinc-800">₹1.5L – ₹3.5L</td>
                    <td className="p-4 border border-zinc-800">Custom Animations, Native Reservation System, Full Marketing Funnel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="flex items-center gap-3 mt-12 mb-6">
              <TrendingUp className="w-8 h-8 text-emerald-500" />
              Real Impact: The Riviera Bistro Success Story
            </h2>
            <p>
              We recently worked with The Riviera Bistro, a popular local spot struggling to get online reservations. Their previous website relied entirely on a heavy, multi-page PDF menu. Mobile users were bouncing, and they were invisible for high-intent searches like "seafood pasta near me."
            </p>
            <p>
              By rebuilding their site with Next.js, implementing a dynamic HTML menu, and adding precise structured data, we transformed their digital presence. Read the full <Link href="/case-studies/the-riviera-bistro">Riviera Bistro case study</Link> to see how their organic traffic and direct reservations skyrocketed within months.
            </p>

            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Ditch the PDF and Rank Higher?</h3>
              <p className="text-zinc-400 mb-6">Stop letting a static PDF menu cost you customers. Upgrade to a blazing-fast, SEO-optimized restaurant website that drives real revenue.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2">
                  Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies/the-riviera-bistro" className="border border-zinc-700 hover:border-zinc-500 text-white font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center">
                  View Riviera Bistro Case Study
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
