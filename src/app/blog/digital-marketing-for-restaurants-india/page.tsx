'use client';

import React from 'react';
import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import {
  Utensils,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  AlertCircle,
  Search,
  Share2,
  Star,
  Zap,
  Globe,
  IndianRupee,
  BarChart2,
} from 'lucide-react';

export default function RestaurantDigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText
            text="Digital Marketing for Restaurants in India 2026: How to Get More Customers Without Burning Money on Zomato"
            className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Oct 27, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>10 min read</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-emerald-400 font-medium">Restaurant Marketing</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-li:text-zinc-300">
          <p className="text-xl text-zinc-200 leading-relaxed font-normal">
            Running a restaurant in India in 2026 means fighting on two fronts: making great food AND making sure people can find you. Most restaurant owners spend ₹5,000–₹20,000 every month on Zomato Gold, Swiggy promotions, and newspaper ads — and still feel like they&apos;re just breaking even. There is a smarter way. This guide shows you how Indian restaurants are using digital marketing to build their own loyal customer base, reduce platform dependency, and fill tables consistently.
          </p>

          {/* Section 1 */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <IndianRupee className="w-7 h-7 text-emerald-400 shrink-0" />
            The Zomato Problem: Why Platform Dependency is Killing Your Margins
          </h2>

          <p>
            Every restaurant owner knows the feeling: you&apos;re busy on Zomato, orders are flying — but at the end of the month, the numbers don&apos;t add up. Here&apos;s why:
          </p>

          <ul className="space-y-3 my-6">
            <li><strong>Zomato and Swiggy take 18–30% commission on every order.</strong></li>
            <li>A ₹500 meal order nets you <strong>₹350–₹410 after commission</strong> — before food costs, packaging, or staff wages.</li>
            <li><strong>You own zero customer data</strong> — the customer belongs to Zomato, not you. You cannot reach them directly, offer them a loyalty deal, or bring them back.</li>
            <li>Your restaurant can be <strong>delisted, suspended, or buried by algorithm changes</strong> at any time — with no warning.</li>
            <li><strong>The solution:</strong> build your OWN digital presence that brings customers directly to you, where you own the relationship and keep 100% of every rupee.</li>
          </ul>

          {/* Section 2 */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <Share2 className="w-7 h-7 text-emerald-400 shrink-0" />
            Instagram Reels: The #1 Tool for Indian Restaurants in 2026
          </h2>

          <p>
            If you are not posting Instagram Reels for your restaurant, you are leaving the most powerful free marketing channel in India completely untapped.
          </p>

          <ul className="space-y-3 my-6">
            <li>Food is the <strong>most watched category on Indian Instagram</strong> — your content has a built-in, hungry audience.</li>
            <li>A single viral reel can reach <strong>50,000+ people in your city for ₹0</strong> in ad spend.</li>
          </ul>

          <p><strong>What to post:</strong></p>

          <ol className="space-y-3 my-6">
            <li><strong>Chef&apos;s special preparation videos</strong> — behind-the-scenes footage of dishes being made builds massive appetite and trust.</li>
            <li><strong>Customer reactions</strong> — real (not staged) moments of first bites, happy faces, and genuine feedback.</li>
            <li><strong>&quot;How it&apos;s made&quot; for signature dishes</strong> — your biryani, your dosa, your secret gravy. People are obsessed with process.</li>
            <li><strong>Festival special menu reveals</strong> — Diwali thali, Eid special, Durga Puja menu. Seasonal content drives foot traffic spikes.</li>
            <li><strong>Staff day-in-the-life content</strong> — showing your team, your kitchen, your early mornings builds warmth and trust that no ad can buy.</li>
          </ol>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-6">
            <p className="text-zinc-200 font-semibold mb-3">Quick Reel Strategy:</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• <strong>Post frequency:</strong> Minimum 5 reels/week for meaningful growth</li>
              <li>• <strong>Best posting times in India:</strong> 12–2 PM and 7–9 PM</li>
              <li>• <strong>Local hashtags:</strong> #[CityName]food, #[CityName]eats, #foodie[CityName]</li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <Search className="w-7 h-7 text-emerald-400 shrink-0" />
            Google Business Profile: Your Free Table-Filling Machine
          </h2>

          <p>
            Every restaurant owner in India must do this — and most are doing it wrong or not at all. Your Google Business Profile (GBP) is a completely free tool that appears directly in search results when someone searches &quot;restaurant near me.&quot;
          </p>

          <ul className="space-y-3 my-6">
            <li><strong>Set up and fully complete your Google Business Profile</strong> — name, address, phone, hours, category, website.</li>
            <li><strong>Add 20+ high-quality food photos</strong> — restaurants with more photos get significantly more clicks and calls.</li>
            <li><strong>Update your menu</strong> — Google shows menus directly in search results, so hungry people can see your dishes before they even click.</li>
            <li><strong>Add your WhatsApp number for reservations</strong> — make it effortless for customers to contact you instantly.</li>
            <li><strong>Respond to every Google review</strong> — positive or negative. It signals to Google and to customers that you care and are active.</li>
            <li><strong>Post weekly updates</strong> — offers, new dishes, events. Regular posting keeps your profile ranked higher in local results.</li>
          </ul>

          <p>
            When someone searches <em>&quot;restaurant near me&quot;</em> or <em>&quot;best biryani in [your city]&quot;</em>, a complete, active GBP appears in the coveted Google Map Pack — above all paid ads, completely free of charge.
          </p>

          {/* Section 4 */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <Globe className="w-7 h-7 text-emerald-400 shrink-0" />
            Your Own Website vs. Zomato: What Every Restaurant Needs
          </h2>

          <p>
            <strong>Myth:</strong> &quot;We don&apos;t need a website, we&apos;re on Zomato.&quot;
          </p>

          <p>
            <strong>Reality:</strong> When someone Googles your restaurant name, Zomato&apos;s listing for you shows your <em>competitors</em> right alongside you. You are paying to drive traffic to a platform that promotes your rivals.
          </p>

          <ul className="space-y-3 my-6">
            <li>A website costs <strong>₹0 in monthly commissions</strong> — you invest once, you own it forever.</li>
            <li>Your website can have an <strong>online ordering system</strong> — keeping 100% of every order&apos;s revenue in your pocket.</li>
            <li>Google indexes your website, building long-term SEO authority that no aggregator listing can replicate.</li>
            <li>A website shows your <strong>story, ambience, chef&apos;s background, and signature dishes</strong> — Zomato is a commodity listing, a website is your brand.</li>
            <li><strong>WhatsApp ordering through your website</strong> = personal, commission-free, relationship-building.</li>
            <li><strong>Table reservation through your website</strong> = a direct relationship with every customer who walks through your door.</li>
          </ul>

          {/* Section 5 */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <MessageCircle className="w-7 h-7 text-emerald-400 shrink-0" />
            WhatsApp Marketing for Restaurants: Build a Loyal Customer Base
          </h2>

          <p>
            WhatsApp is the most used app in India. Your customers are on it all day. Here&apos;s how to turn it into a powerful, free marketing channel:
          </p>

          <ol className="space-y-4 my-6">
            <li>
              <strong>1. Set up WhatsApp Business</strong> with your restaurant name, hours, location, and a catalogue of your signature dishes.
            </li>
            <li>
              <strong>2. Add your WhatsApp link everywhere</strong> — Instagram bio, Google Business Profile, and table tent cards inside your restaurant.
            </li>
            <li>
              <strong>3. Collect customer WhatsApp numbers</strong> — offer a 10% discount on the first WhatsApp order as an incentive.
            </li>
            <li>
              <strong>4. Send weekly &quot;Today&apos;s Special&quot; broadcasts</strong> to your growing list. Keep it to max 1–2 messages per week — respect your customers&apos; attention.
            </li>
            <li>
              <strong>5. Create a WhatsApp group for loyal customers</strong> with exclusive offers, early access to new dishes, and members-only discounts.
            </li>
            <li>
              <strong>6. Use WhatsApp Status to post daily specials</strong> — it functions exactly like Instagram Stories, completely free, reaching everyone who has saved your number.
            </li>
          </ol>

          {/* Section 6 */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <BarChart2 className="w-7 h-7 text-emerald-400 shrink-0" />
            The Complete Digital Marketing Calendar for Restaurants (Monthly)
          </h2>

          <p>
            Stop posting randomly and hoping for results. Here is a structured monthly plan that compounds over time:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse border border-zinc-800 text-sm">
              <thead>
                <tr className="bg-zinc-900/90 text-white border-b border-zinc-800">
                  <th className="p-4 font-semibold">Week</th>
                  <th className="p-4 font-semibold">Focus & Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr>
                  <td className="p-4 font-bold text-emerald-400 whitespace-nowrap">Week 1</td>
                  <td className="p-4 text-zinc-300">5 reels + 3 story posts + 1 Google Business Profile update + 2 WhatsApp broadcasts to your list</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400 whitespace-nowrap">Week 2</td>
                  <td className="p-4 text-zinc-300">5 reels + festival/occasion content + respond to all Google reviews + 1 blog post or menu update on website</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400 whitespace-nowrap">Week 3</td>
                  <td className="p-4 text-zinc-300">Paid Instagram ad (₹2,000–₹5,000 for targeted local reach) + 5 reels + WhatsApp broadcast with offer</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400 whitespace-nowrap">Week 4</td>
                  <td className="p-4 text-zinc-300">Performance review — best-performing content repurposed + plan next month&apos;s content calendar</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 7 */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <AlertCircle className="w-7 h-7 text-emerald-400 shrink-0" />
            5 Digital Marketing Mistakes Indian Restaurants Make
          </h2>

          <ol className="space-y-4 my-6">
            <li>
              <strong>1. Posting only food photos.</strong> Beautiful plates are not enough. People want to see the environment, the staff, the kitchen, and the human beings behind the food. Show the full story.
            </li>
            <li>
              <strong>2. Ignoring negative reviews.</strong> A single unanswered 1-star review can undo ten 5-star reviews. Always respond professionally and empathetically — it demonstrates maturity and earns respect from readers.
            </li>
            <li>
              <strong>3. Only being on Zomato and nowhere else.</strong> If Zomato suspends your account tomorrow, you own nothing — no customers, no contacts, no data. Diversify your presence now.
            </li>
            <li>
              <strong>4. Not collecting customer contact information.</strong> Every person who eats at your restaurant is a potential repeat customer. Build your own WhatsApp list, email list, and social media following.
            </li>
            <li>
              <strong>5. No consistency.</strong> Posting 10 reels in week one and then disappearing for 3 weeks is worse than posting steadily. The Instagram algorithm rewards consistency — and so do your customers.
            </li>
          </ol>

          {/* CTA Box */}
          <div className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-8 text-center mt-12">
            <Utensils className="w-8 h-8 text-emerald-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Want a Digital Marketing Strategy Built for Your Restaurant?
            </h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed max-w-xl mx-auto">
              We help restaurants across India reduce Zomato dependency, build Instagram followings, and fill tables with direct customers. Talk to us — it starts with one WhatsApp message.
            </p>
            <a
              href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20run%20a%20restaurant%20and%20want%20to%20grow%20my%20customer%20base%20online.%20Can%20we%20discuss%3F"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <h3 className="text-lg font-bold text-white mb-6">Related Articles</h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/blog/cheap-vs-premium-website-india"
                className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors group"
              >
                <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                ₹15,000 vs ₹1,50,000 Website: Kya Farak Hai? (The Real Indian Business Guide)
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
