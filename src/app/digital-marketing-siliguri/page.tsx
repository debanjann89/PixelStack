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
    title: 'Website Design & Development',
    desc: 'Custom fast websites built with Next.js. Mobile-optimized, SEO-ready, and WhatsApp-integrated.',
    link: '/services',
  },
  {
    icon: Search,
    title: 'SEO & Google Rankings',
    desc: 'Local SEO, technical audits, and content strategy to rank your business on Google\'s first page.',
    link: '/services',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    desc: 'Instagram, Facebook, and LinkedIn management with engaging content, reels, and consistent posting.',
    link: '/services',
  },
  {
    icon: Video,
    title: 'Video Editing & Reels',
    desc: 'Professional video editing for Instagram Reels, YouTube Shorts, and promotional videos.',
    link: '/services',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Brand identity, social media creatives, banners, brochures, and marketing materials.',
    link: '/services',
  },
  {
    icon: Megaphone,
    title: 'Meta & Google Ads',
    desc: 'Paid advertising campaigns on Facebook, Instagram, and Google targeting Siliguri & WB customers.',
    link: '/services',
  },
];

const USPS = [
  {
    icon: MapPin,
    title: 'Local Siliguri Team',
    desc: 'We understand North Bengal\'s market, culture, and customer behavior.',
  },
  {
    icon: Layers,
    title: 'Full-Service Under One Roof',
    desc: 'Website + SEO + Social Media + Design + Video — no need to juggle multiple agencies.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp-First Delivery',
    desc: 'All updates, approvals, and communication through WhatsApp for maximum convenience.',
  },
  {
    icon: TrendingUp,
    title: 'India-Focused Strategy',
    desc: 'We don\'t copy global templates. Our strategy is built for Indian SMBs and regional markets.',
  },
];

const INDUSTRIES = [
  'Hotels & Tourism',
  'Coaching Institutes',
  'Clinics & Hospitals',
  'Restaurants',
  'Boutiques & Fashion',
  'Real Estate',
  'Schools',
  'Salons & Spas',
];

const LOCAL_AREAS = [
  'Sevoke Road',
  'Matigara',
  'Pradhan Nagar',
  'Hill Cart Road',
  'Bagdogra',
  'Jalpaiguri',
  'Darjeeling',
  'Siliguri Junction',
];

const FAQS = [
  {
    q: 'What digital marketing services do you offer in Siliguri?',
    a: 'We offer a complete digital marketing suite: custom website development, SEO (local & technical), social media management (Instagram, Facebook), video editing, graphic design, and Meta/Google Ads management. All services are tailored for North Bengal and Indian market businesses.',
  },
  {
    q: 'How soon can I expect results from digital marketing?',
    a: 'Quick wins like Google Business Profile setup and social media engagement start within 2-4 weeks. SEO rankings typically improve within 60-90 days. Paid ad campaigns can generate leads within the first 7 days of launch.',
  },
  {
    q: 'Do you work with small businesses in Siliguri?',
    a: 'Yes, most of our clients are small and medium businesses across Siliguri, Jalpaiguri, and Darjeeling. We tailor our scope and delivery to suit each business\'s budget and growth stage.',
  },
  {
    q: 'Can you handle my entire online presence from one place?',
    a: 'Absolutely. D&B Digitals is a full-service agency. We can manage your website, Google rankings, Instagram, Facebook, graphic design, and video content — all coordinated with one consistent brand voice and strategy.',
  },
];

const WA_LINK =
  'https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20want%20to%20grow%20my%20business%20in%20Siliguri%20with%20digital%20marketing.%20Can%20we%20talk%3F';

export default function DigitalMarketingSiliguriPage() {
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
            <MapPin className="w-4 h-4" />
            Full-Service Digital Marketing Agency — Siliguri & North Bengal
          </motion.div>

          <SplitText
            text="Digital Marketing Agency in Siliguri"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl md:text-2xl text-indigo-300 font-medium mb-4"
          >
            One Agency. Every Channel. Real Results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            From websites to SEO, social media to video — D&B Digitals is Siliguri&apos;s only full-service digital
            marketing partner that handles every online channel under one roof, with a strategy built for the Indian
            market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all text-base shadow-lg shadow-indigo-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp: +91 89181 86998
            </a>
            <a
              href="tel:+918918186998"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold rounded-full transition-all text-base"
            >
              <Phone className="w-4 h-4 text-indigo-400" />
              Call Now: 8918186998
            </a>
          </motion.div>

          {/* Value Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { icon: Zap, title: '6 Services in 1 Agency', desc: 'Web, SEO, Social, Video, Design, Ads' },
              { icon: TrendingUp, title: 'Results in 7–90 Days', desc: 'Ads to SEO — measurable growth' },
              { icon: Star, title: 'Local Siliguri Experts', desc: 'We know North Bengal markets' },
              { icon: BarChart, title: 'Transparent Reporting', desc: 'Monthly reports, no jargon' },
            ].map((b, i) => (
              <div key={i} className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/60">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-1">
                  <b.icon className="w-4 h-4" />
                  {b.title}
                </div>
                <div className="text-zinc-500 text-xs">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Every Digital Marketing Service You Need
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Stop juggling between multiple vendors. We handle your complete digital presence — from the first
            impression to the final conversion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 rounded-2xl p-7 transition-all flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                <svc.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {svc.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">{svc.desc}</p>
              <Link
                href={svc.link}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose D&B Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-zinc-900/40 border-t border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest block mb-3">
              Why D&B Digitals
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built Different. Designed for Siliguri.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
              We&apos;re not a cookie-cutter agency. Everything we build is engineered for the Indian SMB market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USPS.map((usp, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <usp.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{usp.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{usp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-10">
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Grow Businesses Across Every Sector in Siliguri
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {INDUSTRIES.map((industry, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/40 transition-all text-zinc-300 text-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Local Areas */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto">
        <div className="border border-zinc-800 rounded-3xl p-8 md:p-12 bg-zinc-950/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider block mb-2">
                Hyper-Local Presence
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Digital Marketing for Every Corner of Siliguri & North Bengal
              </h3>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold hover:bg-indigo-500/20 transition-all shrink-0"
            >
              Get a Free Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {LOCAL_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 text-zinc-300 text-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-sm">
            Common questions about working with Siliguri&apos;s leading digital marketing agency.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-base font-semibold text-white mb-2 flex items-start gap-2">
                <span className="text-indigo-400 shrink-0">Q.</span> {faq.q}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-zinc-950 border border-indigo-500/30 p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
          <Zap className="w-8 h-8 text-indigo-400 mx-auto mb-4 relative z-10" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
            Ready to Grow Your Business in Siliguri?
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
            Get a free 20-minute digital strategy consultation. We&apos;ll audit your online presence and show you
            exactly what&apos;s holding your business back.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all text-sm shadow-lg shadow-indigo-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp Now
            </a>
            <Link
              href="/free-audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold rounded-full transition-all text-sm"
            >
              Request Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
