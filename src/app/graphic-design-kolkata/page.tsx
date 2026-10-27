'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import {
  Palette,
  Layers,
  Sparkles,
  Star,
  Pen,
  Monitor,
  FileText,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  Zap,
  Award,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Star,
    title: 'Logo Design',
    desc: 'Professional logos that capture your brand\'s identity. Multiple concepts, unlimited revisions.',
    link: '/services',
  },
  {
    icon: Layers,
    title: 'Brand Identity Kit',
    desc: 'Complete visual identity: logo, color palette, typography, business cards, and brand guidelines.',
    link: '/services',
  },
  {
    icon: Sparkles,
    title: 'Social Media Creatives',
    desc: 'Instagram posts, Facebook banners, story templates — designed to stop the scroll.',
    link: '/services',
  },
  {
    icon: FileText,
    title: 'Brochures & Flyers',
    desc: 'Print-ready marketing materials for events, shops, clinics, and businesses across Kolkata.',
    link: '/services',
  },
  {
    icon: Pen,
    title: 'Packaging & Label Design',
    desc: 'Product packaging and label design for Kolkata\'s retail, food, and FMCG businesses.',
    link: '/services',
  },
  {
    icon: Monitor,
    title: 'Presentation Design',
    desc: 'Investor decks, pitch presentations, and corporate slide designs.',
    link: '/services',
  },
];

const DELIVERABLES = [
  { title: 'Print-Ready Files', desc: 'PDF, CMYK, 300dpi' },
  { title: 'Digital Formats', desc: 'PNG, SVG, RGB — web & social ready' },
  { title: 'Brand Guidelines', desc: 'Usage rules, color codes, typography' },
  { title: 'Unlimited Revisions', desc: 'Until you are 100% satisfied' },
];

const INDUSTRIES = [
  'Fashion & Boutiques',
  'Restaurants & Cafes',
  'Startups & Tech Companies',
  'Clinics & Healthcare',
  'Educational Institutes',
  'Real Estate',
  'FMCG & Retail',
];

const LOCAL_AREAS = [
  'Park Street',
  'Sector V',
  'Salt Lake',
  'New Town',
  'South Kolkata',
  'Howrah',
  'Dum Dum',
  'Ballygunge',
  'Gariahat',
];

const FAQS = [
  {
    q: 'What graphic design services do you offer in Kolkata?',
    a: 'We offer logo design, complete brand identity kits, social media post templates, Instagram story designs, brochures, flyers, banners, business cards, packaging design, and presentation decks — all tailored for Kolkata and Bengal market aesthetics.',
  },
  {
    q: 'How long does logo and brand identity design take?',
    a: 'A complete logo with 3 concepts and 2 revision rounds typically takes 5-7 business days. Full brand identity kits (logo + colors + fonts + templates) take 10-14 days.',
  },
  {
    q: 'Do you work with startups and small businesses in Kolkata?',
    a: 'Yes, we specialize in helping Kolkata startups, boutiques, restaurants, and small businesses build a professional visual identity from scratch — at competitive rates with fast turnaround.',
  },
  {
    q: 'Can you create designs for both print and digital use?',
    a: 'Absolutely. We deliver all files in both print-ready formats (PDF, CMYK, 300dpi) and digital formats (PNG, SVG, RGB) so you can use them across all channels.',
  },
];

const WA_LINK =
  'https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20need%20graphic%20design%20services%20for%20my%20Kolkata%20business.%20Can%20we%20discuss%3F';

export default function GraphicDesignKolkataPage() {
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs md:text-sm font-semibold mb-6"
          >
            <Palette className="w-4 h-4" />
            Professional Graphic Design — Kolkata & West Bengal
          </motion.div>

          <SplitText
            text="Graphic Design Services in Kolkata"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl md:text-2xl text-violet-300 font-medium mb-4"
          >
            Design That Makes Your Brand Unforgettable
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            From logos and brand identity kits to social media creatives and print materials — D&B Digitals crafts
            visuals that make Kolkata businesses stand out in every market.
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full transition-all text-base shadow-lg shadow-violet-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp: +91 89181 86998
            </a>
            <a
              href="tel:+918918186998"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold rounded-full transition-all text-base"
            >
              <Phone className="w-4 h-4 text-violet-400" />
              Call Now: 8918186998
            </a>
          </motion.div>

          {/* Value Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {DELIVERABLES.map((d, i) => (
              <div key={i} className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/60">
                <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  {d.title}
                </div>
                <div className="text-zinc-500 text-xs">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-violet-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Design Services for Every Business Need
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Every design we create is built to communicate, convert, and make a lasting impression — whether it&apos;s
            on screen or in print.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 rounded-2xl p-7 transition-all flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-110 transition-transform">
                <svc.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                {svc.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">{svc.desc}</p>
              <Link
                href={svc.link}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
              >
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why D&B For Design */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-zinc-900/40 border-t border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-violet-400 text-xs font-bold uppercase tracking-widest block mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Design Backed by Strategy, Not Just Aesthetics
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
              Every element we create is intentional — aligned with your brand&apos;s goals and your audience&apos;s
              expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: 'Bengal Market Aesthetics',
                desc: 'We design with a deep understanding of Kolkata and Bengali culture — colours, motifs, and visual language that resonates locally.',
              },
              {
                icon: Zap,
                title: 'Fast Turnaround',
                desc: 'Logo in 5-7 days, social media kits in 3-4 days. We work fast without compromising quality.',
              },
              {
                icon: Layers,
                title: 'Print & Digital Ready',
                desc: 'Every file is delivered in all formats — CMYK for print, RGB/SVG for digital. No extra charges.',
              },
              {
                icon: Star,
                title: 'WhatsApp-First Workflow',
                desc: 'Share briefs, receive drafts, and approve final designs — all through WhatsApp for maximum convenience.',
              },
            ].map((usp, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
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
          <span className="text-violet-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Industries We Design For
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Kolkata Businesses Across Every Sector
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {INDUSTRIES.map((industry, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/40 transition-all text-zinc-300 text-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
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
              <span className="text-violet-400 text-xs font-bold uppercase tracking-wider block mb-2">
                Serving All of Kolkata
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Graphic Design for Businesses Across Kolkata
              </h3>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-bold hover:bg-violet-500/20 transition-all shrink-0"
            >
              Start Your Design Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {LOCAL_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 text-zinc-300 text-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-8 h-8 text-violet-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-sm">
            Everything you need to know about our graphic design services in Kolkata.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-base font-semibold text-white mb-2 flex items-start gap-2">
                <span className="text-violet-400 shrink-0">Q.</span> {faq.q}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-violet-950/60 via-zinc-900 to-zinc-950 border border-violet-500/30 p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />
          <Palette className="w-8 h-8 text-violet-400 mx-auto mb-4 relative z-10" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
            Ready to Build a Brand Kolkata Remembers?
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
            Share your brief on WhatsApp and get a design quote within 24 hours. No agency bureaucracy — just fast,
            beautiful design work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full transition-all text-sm shadow-lg shadow-violet-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp Now
            </a>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold rounded-full transition-all text-sm"
            >
              View Our Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
