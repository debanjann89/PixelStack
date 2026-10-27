'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import {
  Search,
  TrendingUp,
  BarChart2,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  HelpCircle,
  ChevronRight,
  Star,
  Target,
} from 'lucide-react';

const LOCAL_AREAS = [
  'Sevoke Road',
  'Matigara & City Centre',
  'Pradhan Nagar',
  'Hill Cart Road',
  'Khalpara',
  'Bagdogra',
  'Jalpaiguri',
  'Darjeeling & Dooars',
];

const SEO_SERVICES = [
  {
    icon: MapPin,
    title: 'Local SEO & Google Maps',
    desc: 'Get into the Siliguri local 3-pack. Your business appears when people search "near me" or "[service] in Siliguri".',
  },
  {
    icon: Zap,
    title: 'Technical SEO Audit',
    desc: 'Site speed, Core Web Vitals, mobile optimization, schema markup — everything Google needs to trust and rank your site.',
  },
  {
    icon: Search,
    title: 'On-Page SEO',
    desc: 'Title tags, meta descriptions, H1-H6 hierarchy, internal linking, and keyword placement done right.',
  },
  {
    icon: Globe,
    title: 'Google Business Profile',
    desc: 'Complete setup, optimization, and posting strategy for your GBP listing in Siliguri.',
  },
  {
    icon: Target,
    title: 'Content & Blog Strategy',
    desc: 'SEO articles that answer your customers\' questions and rank for long-tail Siliguri/WB keywords.',
  },
  {
    icon: BarChart2,
    title: 'Monthly SEO Reporting',
    desc: 'Clear monthly reports showing rankings, impressions, clicks, and leads generated.',
  },
];

const INDUSTRIES = [
  { label: 'Hotels & Tourism', detail: 'North Bengal tea gardens, homestays' },
  { label: 'Coaching Institutes', detail: 'Competitive exam centers' },
  { label: 'Clinics & Doctors', detail: 'Medical practices & diagnostics' },
  { label: 'Restaurants & Cafes', detail: 'Local dining & food businesses' },
  { label: 'Retailers & Boutiques', detail: 'Fashion, grocery & specialty shops' },
  { label: 'Schools & Educational Institutions', detail: 'K-12, colleges & universities' },
];

const STATS = [
  { value: '60–90 Days', label: 'to First Results' },
  { value: 'Local 3-Pack', label: 'Ranking Focus' },
  { value: 'Bengali + English', label: 'SEO Coverage' },
  { value: 'Monthly', label: 'Transparent Reports' },
];

const LOCAL_FAQS = [
  {
    q: 'How long does SEO take to show results in Siliguri?',
    a: 'SEO typically starts showing measurable results within 60-90 days for local Siliguri searches. We focus on quick wins like Google Business Profile optimization and local citations first, which can drive calls within 2-4 weeks.',
  },
  {
    q: 'What is local SEO and why does my Siliguri business need it?',
    a: 'Local SEO helps your business appear when people search "near me" or city-specific searches like "best restaurant in Siliguri". It puts you in Google Maps and the local 3-pack — the most clicked results for local intent searches.',
  },
  {
    q: 'Do you do SEO for Hindi or Bengali language searches?',
    a: 'Yes! We optimize for both English and transliterated Hindi/Bengali search terms. Many North Bengal customers search in mixed languages and we ensure your business appears for all relevant local queries.',
  },
  {
    q: 'How is D&B Digitals different from other SEO agencies in Siliguri?',
    a: 'We are a local North Bengal team. We understand the Siliguri market — from Sevoke Road businesses to Darjeeling hill station tourism. We combine technical SEO with locally-relevant content that actually resonates with your target customers.',
  },
];

const WA_LINK =
  'https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20need%20SEO%20services%20for%20my%20business%20in%20Siliguri.%20Can%20we%20discuss%3F';

export default function SEOSiliguriPage() {
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
            <TrendingUp className="w-4 h-4" />
            #1 SEO Agency in Siliguri & North Bengal
          </motion.div>

          <SplitText
            text="SEO Services in Siliguri"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-3 leading-relaxed"
          >
            Get Found on Google. Get More Customers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We help Siliguri businesses rank on Google&apos;s first page with local SEO, technical audits, and North Bengal&ndash;focused content strategy.
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
                <div className="text-emerald-400 font-bold text-base mb-1">{s.value}</div>
                <div className="text-zinc-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            SEO Services for Siliguri Businesses
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From Google Maps visibility to technical site health — every layer of SEO covered for your North Bengal business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SEO_SERVICES.map((service, i) => (
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

      {/* Industries Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-zinc-950/60 border-t border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SEO for Every Siliguri Business Type
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              We have delivered local ranking results across all major business categories in North Bengal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex items-start gap-3 p-5 rounded-2xl bg-black border border-zinc-800 hover:border-emerald-500/40 transition-all"
              >
                <Star className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold text-sm mb-0.5">{ind.label}</div>
                  <div className="text-zinc-500 text-xs">{ind.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto">
        <div className="border border-zinc-900 rounded-3xl p-8 md:p-12 bg-zinc-950/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-2">
                Hyper-Local SEO
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                We Rank Businesses Across Siliguri & Surrounding Regions
              </h3>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all shrink-0"
            >
              Get Free SEO Audit <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {LOCAL_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-xl bg-black border border-zinc-800/80 text-zinc-300 text-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{area}</span>
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
            Everything you need to know about SEO services for your Siliguri business.
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
          <ChevronRight className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Rank #1 in Siliguri?
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Stop losing customers to competitors who rank above you. Talk to our local SEO team today for a free strategy consultation — no obligations, no fixed packages.
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
              href="/free-audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold rounded-full transition-all text-sm"
            >
              Request Free SEO Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
