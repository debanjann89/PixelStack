'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import {
  Globe,
  Search,
  Share2,
  Video,
  Palette,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  Zap,
  TrendingUp,
  BarChart,
  HelpCircle,
  ChevronRight,
  Star,
  Layers,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'High-Performance Web Development',
    desc: 'Bespoke Next.js 15 websites engineered for sub-500ms load times, mobile conversion, and zero bloated templates.',
    link: '/web-design-india',
  },
  {
    icon: Search,
    title: 'Nationwide & Local SEO',
    desc: 'Technical architecture, programmatic schemas, and aggressive keyword optimization to capture Page 1 rankings on Google.',
    link: '/services',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    desc: 'Done-for-you Instagram, Facebook, and LinkedIn growth with viral Reels production, carousels, and community nurturing.',
    link: '/services',
  },
  {
    icon: Megaphone,
    title: 'Performance Marketing (Meta & Google Ads)',
    desc: 'High-ROI paid ad funnels that generate qualified inbound buyer inquiries on WhatsApp and phone directly.',
    link: '/services',
  },
  {
    icon: Palette,
    title: 'Graphic Design & Brand Identity',
    desc: 'Premium visual identity kits, logo suites, product packaging, and ad creatives designed to command attention.',
    link: '/graphic-design-kolkata',
  },
  {
    icon: Video,
    title: 'Short-Form Video & Reels Editing',
    desc: 'Scroll-stopping video editing for Instagram Reels, YouTube Shorts, and brand storytelling that drives engagement.',
    link: '/services',
  },
];

const USPS = [
  {
    icon: Layers,
    title: 'Full-Stack Agency Under One Roof',
    desc: 'Website + SEO + Social Media + Performance Ads + Creative Design. Zero friction from juggling multiple freelancers.',
  },
  {
    icon: Zap,
    title: 'Speed & Conversion Focused',
    desc: 'We don’t build digital brochures. Every asset we deploy is engineered to convert casual traffic into booked revenue.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp-First Communication',
    desc: 'Real-time updates, direct founder access, and rapid delivery cycles without corporate bureaucracy.',
  },
  {
    icon: TrendingUp,
    title: 'India-Optimized Strategy',
    desc: 'Tailored for Indian consumer behavior, UPI payments, mobile networks (Jio/Airtel), and multi-lingual regional audiences.',
  },
];

const INDUSTRIES = [
  'D2C & E-Commerce Brands',
  'Coaching Academies & EdTech',
  'Hotels, Resorts & Tourism',
  'Healthcare & Dental Clinics',
  'Restaurants & Cloud Kitchens',
  'Real Estate & Developers',
  'Luxury Fashion & Boutiques',
  'B2B & Professional Services',
];

const CITIES = [
  'Delhi NCR',
  'Mumbai',
  'Bangalore',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Siliguri & North Bengal',
  'Guwahati & Northeast',
];

const FAQS = [
  {
    q: 'What digital marketing services does D&B Digitals offer in India?',
    a: 'We provide an integrated growth engine: custom Next.js web development, local and nationwide SEO, Meta Ads (Instagram/Facebook), Google Search Ads, social media management, brand design, and video editing.',
  },
  {
    q: 'How does D&B Digitals work with clients remotely across India?',
    a: 'Our team is 100% remote-native. We collaborate seamlessly via Google Meet, share live interactive Figma designs, provide private staging links for review, and maintain fast, transparent communication on WhatsApp.',
  },
  {
    q: 'How soon can we expect real leads and ROI from digital marketing?',
    a: 'Paid Meta and Google Ads campaigns start producing qualified customer inquiries within 5 to 7 days. SEO compounds steadily, delivering top Google positions and recurring organic inquiries within 60 to 90 days.',
  },
  {
    q: 'Can D&B Digitals redesign our existing website without losing SEO?',
    a: 'Yes. We specialize in migrating legacy, slow WordPress or Wix platforms to Next.js while rigorously mapping 301 redirects, preserving keyword equity, and boosting mobile speeds.',
  },
];

const WA_LINK =
  'https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20am%20looking%20for%20digital%20marketing%20services%20in%20India.%20Can%20we%20schedule%20a%20discussion%3F';

export default function DigitalMarketingIndiaPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-28 pb-24">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-8 pb-20 border-b border-zinc-800 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs md:text-sm font-semibold mb-6"
          >
            <Globe className="w-4 h-4" />
            Top Full-Service Digital Marketing Agency — India
          </motion.div>

          <SplitText
            text="Digital Marketing Agency in India"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl md:text-2xl text-indigo-300 font-medium mb-4"
          >
            One Agency. Full-Funnel Growth. Measurable ROI.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            From high-speed Next.js web applications to Page 1 Google SEO, viral Reels management to high-converting Meta ads — D&B Digitals builds the end-to-end digital growth machinery for ambitious businesses across India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base transition-all shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp (+91 89181 86998)
            </a>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-medium text-base transition-all"
            >
              Explore Growth Scope
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              Full-Suite Deliverables
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Everything Your Brand Needs to Win Online
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              No fragmented agencies. Every channel aligned to generate customer inquiries, direct bookings, and scalable revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-indigo-500/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {s.desc}
                    </p>
                  </div>
                  <Link
                    href={s.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                  >
                    Explore Service <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              The D&B Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Businesses Across India Choose D&B Digitals
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USPS.map((u, i) => {
              const Icon = u.icon;
              return (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{u.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{u.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries & Nationwide Coverage */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              Specialized Industry Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tailored Digital Funnels for High-Value Sectors
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              We design conversion paths specific to each sector. Coaching academies need WhatsApp admission desks; hotels need zero-commission direct booking engines; clinics need patient trust and seamless scheduling.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {INDUSTRIES.map((ind) => (
                <div key={ind} className="flex items-center gap-2 text-zinc-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-400" />
              Serving Clients Nationwide
            </h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6">
              Headquartered in West Bengal with clients and active digital campaigns running across key commercial centers in India:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {CITIES.map((c) => (
                <div key={c} className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 text-zinc-300 text-xs font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 text-sm">
              Straight answers on how our agency delivers results for Indian businesses.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800"
              >
                <h4 className="text-base md:text-lg font-semibold text-white mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-zinc-400 text-sm pl-7 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Accelerate Your Brand’s Growth in India?
            </h2>
            <p className="text-zinc-400 text-base mb-8 leading-relaxed">
              Skip generic templates and fragmented agencies. Partner with D&B Digitals for a tailored, high-converting digital presence that generates real inquiries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Start on WhatsApp
              </a>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium text-base transition-all"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
