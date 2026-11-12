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

const SEO_SERVICES = [
  {
    icon: Zap,
    title: 'Technical Next.js & Web Vitals SEO',
    desc: 'Sub-second rendering, clean JSON-LD schemas, automated sitemaps, and Core Web Vitals optimization (LCP, FID, CLS) that Google rewards.',
  },
  {
    icon: Search,
    title: 'High-Intent Keyword Architecture',
    desc: 'Target commercial buyer phrases that decision-makers search across India, avoiding vanity keywords that don’t bring revenue.',
  },
  {
    icon: Target,
    title: 'Authority Content & Programmatic SEO',
    desc: 'High-value educational guides, comparison pieces, and industry authority hubs that establish topical dominance in your niche.',
  },
  {
    icon: MapPin,
    title: 'Multi-City & Local 3-Pack Optimization',
    desc: 'Capture regional searches in major metros and tier-2 markets with localized landing pages, Google Maps citations, and GBP synergy.',
  },
  {
    icon: Globe,
    title: 'E-Commerce & Startup SEO Funnels',
    desc: 'Optimized product collections, faceted navigation, schema tagging, and conversion funnels for Indian D2C and SaaS brands.',
  },
  {
    icon: BarChart2,
    title: 'Transparent Monthly Analytics',
    desc: 'Live Search Console tracking, keyword position dashboards, and conversion attribution reports with zero corporate fluff.',
  },
];

const INDUSTRIES = [
  { label: 'E-Commerce & D2C Brands', detail: 'High-volume product category ranking' },
  { label: 'Clinics, Doctors & Diagnostics', detail: 'High-ticket procedure inquiries' },
  { label: 'Coaching Institutes & EdTech', detail: 'Student admission funnels' },
  { label: 'Hotels, Resorts & Hospitality', detail: 'Direct non-commission bookings' },
  { label: 'B2B & Professional Services', detail: 'Enterprise lead generation' },
  { label: 'Real Estate & Property Developers', detail: 'High-net-worth investor inquiries' },
];

const STATS = [
  { value: '60–90 Days', label: 'to Top Page 1 Traction' },
  { value: '100% Technical', label: 'Core Web Vitals Engineering' },
  { value: 'Pan-India', label: 'Commercial Search Reach' },
  { value: 'WhatsApp', label: 'Direct Conversion Triggers' },
];

const FAQS = [
  {
    q: 'How long does SEO take to show real results for businesses in India?',
    a: 'SEO typically starts showing clear ranking momentum within 30 to 45 days for targeted long-tail queries. High-volume competitive commercial keywords across India reach Page 1 positions within 60 to 90 days as domain trust compounds.',
  },
  {
    q: 'How is D&B Digitals different from traditional Indian SEO agencies?',
    a: 'Most agencies simply stuff generic keywords into bloated WordPress templates. We are software engineers. We build custom Next.js web applications, optimize code down to milliseconds, implement deep JSON-LD structured data, and target buyer-intent search queries that drive sales.',
  },
  {
    q: 'Do you offer local SEO across multiple Indian cities?',
    a: 'Yes. We architect scalable multi-city SEO frameworks allowing your business to rank in Delhi, Mumbai, Bangalore, Kolkata, and regional hubs without creating thin doorway pages or triggering Google spam filters.',
  },
  {
    q: 'What is included in your monthly SEO retainer?',
    a: 'Our monthly management includes continuous technical monitoring, on-page optimization, content production, schema updates, Google Search Console query mining, and direct WhatsApp support with your lead developer.',
  },
];

const WA_LINK =
  'https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20am%20looking%20for%20SEO%20services%20in%20India%20to%20rank%20on%20Google.%20Can%20we%20discuss%3F';

export default function SEOIndiaPage() {
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary-light text-xs md:text-sm font-semibold mb-6"
          >
            <Search className="w-4 h-4" />
            Top Organic SEO Agency — India
          </motion.div>

          <SplitText
            text="SEO Services in India"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl md:text-2xl text-emerald-300 font-medium mb-4"
          >
            Dominate Google Page 1. Capture High-Intent Inbound Leads.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Stop burning endless ad budgets on paid clicks that disappear the moment you pause. D&B Digitals engineers technical Next.js SEO architectures that build compounding search authority across India.
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
              Explore SEO Scope
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 md:px-12 lg:px-24 py-12 border-b border-zinc-800 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((st) => (
            <div key={st.label}>
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{st.value}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-primary-light text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              Technical Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Engineer Your Google Dominance
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We replace outdated backlink spam with clean semantic code, lighting-fast server response, and content that answers what buyers actually search for.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEO_SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800 bg-zinc-950/60">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-primary-light text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              Vertical Specialization
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SEO Built for Industry-Specific Intent
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-base font-bold text-white">{ind.label}</h4>
                </div>
                <p className="text-zinc-400 text-xs pl-7">{ind.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
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
                  <HelpCircle className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
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
              Claim Your Business’s Place on Google Page 1
            </h2>
            <p className="text-zinc-400 text-base mb-8 leading-relaxed">
              Let’s conduct a technical audit of your domain and map out an aggressive organic search strategy tailored for India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp (+91 89181 86998)
              </a>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium text-base transition-all"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
