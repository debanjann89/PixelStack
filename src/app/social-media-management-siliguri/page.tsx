'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import {
  Share2,
  Video,
  ImageIcon,
  BarChart2,
  MessageCircle,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Zap,
  Star,
  HelpCircle,
  ChevronRight,
  Palette,
  Film,
} from 'lucide-react';

const SOCIAL_SERVICES = [
  {
    icon: Share2,
    title: 'Instagram Management',
    desc: 'Daily posts, reels, stories, and engagement for your Instagram account.',
  },
  {
    icon: Zap,
    title: 'Facebook Marketing',
    desc: 'Business page management, community building, and local promotion.',
  },
  {
    icon: Film,
    title: 'Reels & Video Content',
    desc: 'Short-form video creation optimized for reach and virality in the North Bengal market.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Brand-consistent post designs, banners, and promotional creatives.',
  },
  {
    icon: BarChart2,
    title: 'Meta Ads Management',
    desc: 'Paid campaigns targeting Siliguri & West Bengal audiences by interest, age, and location.',
  },
  {
    icon: ImageIcon,
    title: 'Monthly Strategy & Report',
    desc: 'Content calendar, analytics review, and strategy adjustment every month.',
  },
];

const BUSINESS_TYPES = [
  { label: 'Restaurants & Cafes', detail: 'Food reels & local promotion' },
  { label: 'Boutiques & Fashion', detail: 'Product showcases & styling content' },
  { label: 'Coaching Institutes', detail: 'Student success stories & course promos' },
  { label: 'Salons & Spas', detail: 'Before/after reels & bookings' },
  { label: 'Hotels & Homestays', detail: 'Travel content & destination reels' },
  { label: 'Medical Clinics', detail: 'Health tips & patient trust building' },
  { label: 'Real Estate', detail: 'Property tours & locality highlights' },
];

const STATS = [
  { value: '3–5 Posts', label: 'per week, every week' },
  { value: 'Instagram & FB', label: 'fully managed for you' },
  { value: '100% Done-For-You', label: 'content creation' },
  { value: 'Meta Ads', label: 'Siliguri-targeted campaigns' },
];

const LOCAL_FAQS = [
  {
    q: 'How many posts per week do you create?',
    a: 'We create 3-5 high-quality posts per week depending on your package, including Instagram reels, static posts, stories, and Facebook content. All designed with your brand colors and tone.',
  },
  {
    q: 'Do you run paid Instagram/Facebook ads?',
    a: 'Yes, we manage Meta Ads (Instagram + Facebook) for Siliguri businesses. We design the creatives, set the targeting (age, city, interests), manage the budget, and report weekly on results.',
  },
  {
    q: 'Can you handle both Instagram and Facebook?',
    a: 'Absolutely. We manage all major platforms — Instagram, Facebook, LinkedIn, and YouTube — with a consistent brand voice and visual identity across all channels.',
  },
  {
    q: 'Do I need to provide content or do you create everything?',
    a: 'We handle everything end-to-end. Just share your brand details, products/services, and any specific promotions, and our team will handle concept, design, captions, hashtags, and scheduling.',
  },
];

const WA_LINK =
  'https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20need%20social%20media%20management%20for%20my%20business%20in%20Siliguri.%20Can%20we%20talk%3F';

export default function SocialMediaSiliguriPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-8 pb-20 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-semibold mb-6"
          >
            <Share2 className="w-4 h-4" />
            #1 Social Media Agency in Siliguri & North Bengal
          </motion.div>

          <SplitText
            text="Social Media Management in Siliguri"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-3 leading-relaxed"
          >
            Turn Followers Into Customers
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We manage your Instagram, Facebook, and Meta Ads — end-to-end. Professional creatives, reels, captions, and paid campaigns all tailored to the North Bengal market.
          </motion.p>

          {/* Quick CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all text-base shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp: +91 89181 86998
            </a>
            <a
              href="tel:+918918186998"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold rounded-full transition-all text-base"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call Now: 8918186998
            </a>
          </motion.div>

          {/* Stats Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {STATS.map((s, i) => (
              <div key={i} className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                <div className="text-emerald-400 font-bold text-sm mb-1">{s.value}</div>
                <div className="text-zinc-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">
            What We Manage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Full-Service Social Media for Siliguri
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From daily Instagram posts to paid Meta campaigns — every aspect of your social presence, handled professionally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SOCIAL_SERVICES.map((service, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-[#0a0a0a] border border-zinc-800/80 hover:border-emerald-500/50 rounded-2xl p-8 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform mb-5">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Types */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-zinc-950/60 border-t border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Who We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Social Media for Every Siliguri Business
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              We understand what content works for each industry in the North Bengal market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {BUSINESS_TYPES.map((biz, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="flex items-start gap-3 p-5 rounded-2xl bg-black border border-zinc-800 hover:border-emerald-500/40 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold text-sm mb-0.5">{biz.label}</div>
                  <div className="text-zinc-500 text-xs">{biz.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto">
        <div className="border border-zinc-900 rounded-3xl p-8 md:p-12 bg-zinc-950/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-2">
                100% Done-For-You
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                We Handle Everything So You Can Focus on Your Business
              </h3>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all shrink-0"
            >
              Start Today <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Content concept & ideation',
              'Professional graphic design',
              'Reel scripting & editing',
              'Caption writing & hashtags',
              'Scheduling & posting',
              'Comment moderation & replies',
              'Monthly performance analytics',
              'Strategy review & optimization',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-sm">
            Everything you need to know about our social media management service in Siliguri.
          </p>
        </div>

        <div className="space-y-4">
          {LOCAL_FAQS.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-2">
                <span className="text-emerald-400">Q.</span> {faq.q}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-black border border-emerald-500/30 p-8 md:p-14 text-center relative overflow-hidden">
          <Star className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Brand on Social Media?
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let us manage your Instagram and Facebook while you focus on running your Siliguri business. No fixed packages — WhatsApp us and we&apos;ll tailor a plan for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp Now
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold rounded-full transition-all text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
