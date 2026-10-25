'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Building2,
  Stethoscope,
  GraduationCap,
  Sparkles,
  Zap,
  HelpCircle,
  Briefcase,
  Layers
} from 'lucide-react';

const KOLKATA_HUBS = [
  'Salt Lake Sector V',
  'New Town & Rajarhat',
  'Park Street & Camac St',
  'Howrah & Ballygunge',
  'Alipore & New Alipore',
  'Gariahat & South Kolkata',
  'Dum Dum & VIP Road',
  'Barasat & North 24 Pgs',
  'Durgapur & Asansol'
];

const KOLKATA_SOLUTIONS = [
  {
    icon: Building2,
    title: 'Startups & Tech in Sector V',
    desc: 'High-speed Next.js web applications, SaaS marketing landing pages, and interactive product websites engineered for venture-backed and bootstrapped companies.',
    badge: 'Modern Tech Stack',
    link: '/portfolio'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Clinics & Doctors',
    desc: 'Patient intake platforms and appointment booking portals for Kolkata doctors, specialty polyclinics, and diagnostic centers across EM Bypass & South Kolkata.',
    badge: 'Direct Appointments',
    link: '/industries/dental-clinic-website-design'
  },
  {
    icon: GraduationCap,
    title: 'Coaching & Education Hubs',
    desc: 'Admission inquiry systems and course showcases for competitive exam institutes (JEE, NEET, WBJEE, UPSC) in Kolkata seeking higher student enrollment.',
    badge: 'Lead Conversion',
    link: '/blog/coaching-institute-website-design-india'
  },
  {
    icon: Briefcase,
    title: 'B2B, Logistics & Export Firms',
    desc: 'Corporate web presence for manufacturing, tea exports, freight forwarding, and professional consulting firms in Kolkata seeking global and pan-India clients.',
    badge: 'B2B Authority',
    link: '/services'
  }
];

export default function KolkataWebDesignPage() {
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
            <MapPin className="w-4 h-4" />
            Top Web Development & Growth Agency for Kolkata & West Bengal
          </motion.div>

          <SplitText
            text="Performance Web Design in Kolkata"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We build custom, lightning-fast Next.js websites for Kolkata businesses that demand real customer inquiries, first-page Google rankings, and an edge over outdated competitors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20am%20looking%20for%20a%20website%20for%20my%20business%20in%20Kolkata."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all text-base shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp: +91 89181 86998
            </a>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold rounded-full transition-all text-base"
            >
              View Transparent Packages
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { title: 'Sub-1 Second Speed', desc: 'Core Web Vitals green across mobile' },
              { title: 'Kolkata Local SEO', desc: 'Rank for local high-intent keywords' },
              { title: 'WhatsApp Lead Triggers', desc: 'Convert visitors straight into calls' },
              { title: 'Zero Monthly Royalties', desc: 'Complete code and domain ownership' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  {item.title}
                </div>
                <div className="text-zinc-500 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Engineered For Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Custom Web Solutions for Kolkata Enterprises
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From Sector V technology startups to century-old Park Street family enterprises, we design digital assets that drive bottom-line growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {KOLKATA_SOLUTIONS.map((sol, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#0a0a0a] border border-zinc-800/80 hover:border-emerald-500/50 rounded-2xl p-8 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <sol.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-900 text-emerald-300 border border-emerald-500/20">
                    {sol.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {sol.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {sol.desc}
                </p>
              </div>

              <Link
                href={sol.link}
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-semibold group-hover:translate-x-1 transition-all"
              >
                Explore industry solution <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Kolkata Areas Covered */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto">
        <div className="border border-zinc-900 rounded-3xl p-8 md:p-12 bg-zinc-950/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-2">
                Coverage
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Serving Businesses Across Greater Kolkata & Beyond
              </h3>
            </div>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all shrink-0"
            >
              Get Free SEO & Speed Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {KOLKATA_HUBS.map((hub, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3 rounded-xl bg-black border border-zinc-800/80 text-zinc-300 text-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{hub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kolkata FAQs */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-white mb-3">Kolkata Web Design FAQs</h2>
          <p className="text-zinc-400 text-sm">Clear answers about pricing, technology, and timelines.</p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'How much does a custom business website cost in Kolkata?',
              a: 'Website costs in Kolkata depend on your business model, feature complexity, and page requirements. We create customized project proposals for businesses in Salt Lake, New Town, and South Kolkata with clear milestones and zero hidden fees. Contact us on WhatsApp for an instant estimate.'
            },
            {
              q: 'Why should we choose Next.js over standard WordPress?',
              a: 'WordPress sites in Kolkata are notoriously slow due to overloaded plugins, failing Google Core Web Vitals and losing mobile users. Custom Next.js sites load in under 1 second, require zero security patches, and rank substantially higher on Google.'
            },
            {
              q: 'How do we coordinate during the project?',
              a: 'We work closely via WhatsApp group, Google Meet, and live staging URLs so you can test every page on your phone before launch. We also schedule in-person meetings in Kolkata when requested.'
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

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-black border border-emerald-500/30 p-8 md:p-14 text-center">
          <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Kolkata Business with a Modern Website
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Get in touch with our team today. We will analyze your competitors and send you a custom growth blueprint for free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20am%20in%20Kolkata%20and%20interested%20in%20a%20website%20consultation."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp Now
            </a>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold rounded-full transition-all text-sm"
            >
              See Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
