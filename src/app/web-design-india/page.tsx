'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import {
  Globe,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldCheck,
  Building2,
  GraduationCap,
  Hotel,
  Stethoscope,
  Sparkles,
  HelpCircle
} from 'lucide-react';

const INDIA_VERTICALS = [
  {
    icon: GraduationCap,
    title: 'Coaching & Education Academies',
    desc: 'High-converting admission inquiry engines for competitive coaching (JEE, NEET, UPSC), private schools, and colleges across India.',
    link: '/blog/coaching-institute-website-design-india'
  },
  {
    icon: Stethoscope,
    title: 'Doctors, Clinics & Hospitals',
    desc: 'Patient appointment systems, specialization showcases, and local medical SEO for doctors, polyclinics, and diagnostic centers.',
    link: '/blog/doctor-clinic-website-cost-india'
  },
  {
    icon: Hotel,
    title: 'Hotels, Resorts & Tourism',
    desc: 'Zero-commission direct booking engines for resorts, boutique hotels, and travel operators in Goa, Himachal, Bengal, and Kerala.',
    link: '/blog/hotel-direct-booking-vs-ota-commission'
  },
  {
    icon: Building2,
    title: 'B2B, Manufacturing & Exporters',
    desc: 'Corporate catalogs and verified inquiry forms for Indian manufacturers, exporters, and industrial distributors.',
    link: '/portfolio'
  }
];

export default function IndiaWebDesignPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
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
            <Globe className="w-4 h-4" />
            Pan-India Custom Web Development & Organic Lead Growth
          </motion.div>

          <SplitText
            text="High-Performance Web Design in India"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We build custom, lightning-fast Next.js websites for Indian business owners who want real leads on WhatsApp, Google Page 1 rankings, and zero dependence on bloated WordPress themes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20am%20looking%20for%20a%20website%20for%20my%20business%20in%20India."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all text-base shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us: +91 89181 86998
            </a>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold rounded-full transition-all text-base"
            >
              Check ₹ Transparent Pricing
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { title: 'Sub-1s Mobile Speed', desc: 'Engineered for 5G/4G Jio & Airtel' },
              { title: 'Direct WhatsApp Funnels', desc: 'Instant 1-tap customer calls & chats' },
              { title: 'National & Local SEO', desc: 'Built-in schema for Google top ranks' },
              { title: 'Transparent ₹ Pricing', desc: 'No monthly developer lock-ins' },
            ].map((f, i) => (
              <div key={i} className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  {f.title}
                </div>
                <div className="text-zinc-500 text-xs">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">
            High-Value Indian Verticals
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Specialized Web Architectures That Deliver Inquiries
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We don&apos;t build generic digital brochures. We build conversion machines tailored to your specific Indian business model.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {INDIA_VERTICALS.map((item, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#0a0a0a] border border-zinc-800/80 hover:border-emerald-500/50 rounded-2xl p-8 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-semibold group-hover:translate-x-1 transition-all"
              >
                Read in-depth strategy <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Regional Focus Links */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-zinc-950/60 border-t border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Regional Presence
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Explore Our Dedicated City & State Hubs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/web-design-siliguri"
              className="p-6 rounded-2xl bg-black border border-zinc-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2">
                <MapPin className="w-5 h-5" />
                Siliguri & North Bengal
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Tailored for North Bengal hotels, clinics, tea exporters, and commercial retail brands.
              </p>
              <span className="text-xs text-emerald-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Siliguri Web Design →
              </span>
            </Link>

            <Link
              href="/web-design-kolkata"
              className="p-6 rounded-2xl bg-black border border-zinc-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2">
                <MapPin className="w-5 h-5" />
                Kolkata Metro & Sector V
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Built for startups, healthcare centers, educational academies, and corporate enterprises.
              </p>
              <span className="text-xs text-emerald-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Kolkata Web Design →
              </span>
            </Link>

            <Link
              href="/web-design-west-bengal"
              className="p-6 rounded-2xl bg-black border border-zinc-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2">
                <MapPin className="w-5 h-5" />
                West Bengal Hub
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Comprehensive regional coverage across Durgapur, Asansol, Malda, Darjeeling, and Bengal.
              </p>
              <span className="text-xs text-emerald-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                West Bengal Web Design →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pan-India FAQs */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-sm">Everything you need to know about partnering with D&B Digitals.</p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'How does remote project delivery work across India?',
              a: 'We set up a private WhatsApp group with our founders, share real-time staging links where you can preview your website as it’s built, and conduct Google Meet walkthroughs. Over 90% of our clients work with us 100% remotely with zero friction.'
            },
            {
              q: 'Do you charge monthly maintenance or lock-in fees?',
              a: 'No. You pay a clear one-time project fee. Once completed, you own 100% of your source code, domain, and assets. We offer optional ongoing SEO & maintenance packages only if you want ongoing growth.'
            },
            {
              q: 'How do you ensure our website brings customer leads in India?',
              a: 'We embed 1-tap WhatsApp chat buttons, click-to-call mobile triggers, fast Core Web Vitals (sub-1 second loads on mobile networks), and local Google SEO schema markup that ranks your business when local customers search.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-2">
                <span className="text-emerald-400">Q.</span> {item.q}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Lead CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-black border border-emerald-500/30 p-8 md:p-14 text-center">
          <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build a Website That Generates Real Business
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Send us a message on WhatsApp or book a free 20-minute digital strategy consultation. Let&apos;s evaluate your current site and outline a clear growth path.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20am%20looking%20for%20a%20website%20consultation%20for%20my%20business."
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
              Get Free Website Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
