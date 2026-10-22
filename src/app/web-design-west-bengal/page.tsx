'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import {
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCircle2,
  Building,
  GraduationCap,
  Hotel,
  Stethoscope,
  Sparkles,
  TrendingUp,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

const WB_REGIONS = [
  {
    name: 'Siliguri & North Bengal',
    slug: '/web-design-siliguri',
    desc: 'Gateway to the Northeast & Himalayas. Tailored for hotels, homestays, clinics, tea companies, and retail businesses in Siliguri, Darjeeling, Dooars, and Jalpaiguri.',
    featured: true
  },
  {
    name: 'Kolkata Metropolitan Area',
    slug: '/web-design-kolkata',
    desc: 'West Bengal’s capital hub. Custom Next.js web applications for startups in Sector V, corporate B2B firms, specialty doctors, and educational institutions in Kolkata.',
    featured: true
  },
  {
    name: 'Durgapur & Asansol Industrial Belt',
    slug: '/contact',
    desc: 'Web engineering for manufacturing units, engineering colleges, steel & mining suppliers, and logistics operators.',
    featured: false
  },
  {
    name: 'Malda & Central Bengal',
    slug: '/contact',
    desc: 'Digital storefronts and B2B portals for agricultural exporters, silk merchants, and regional service providers in Malda and Murshidabad.',
    featured: false
  },
  {
    name: 'Bardhaman & Hooghly',
    slug: '/contact',
    desc: 'Websites for regional distributors, agro-processing businesses, private clinics, and local coaching academies.',
    featured: false
  },
  {
    name: 'Kharagpur & Medinipur',
    slug: '/contact',
    desc: 'Modern portals for tech services, education providers, tourism operators (Digha, Mandarmani), and regional enterprises.',
    featured: false
  }
];

export default function WestBengalWebDesignPage() {
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
            West Bengal&apos;s Leading Custom Web Development Agency
          </motion.div>

          <SplitText
            text="Premier Web Design Across West Bengal"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Empowering businesses from the Himalayas to the Bay of Bengal with custom websites built for top Google search rankings, fast mobile loading, and direct WhatsApp customer inquiries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20am%20looking%20for%20a%20website%20for%20my%20business%20in%20West%20Bengal."
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
              See Pricing in INR (₹)
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Regional Hubs Cards */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Local Market Focus
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Key Regions We Serve in West Bengal
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Choose your city or region below to discover customized digital growth strategies designed for local competitors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WB_REGIONS.map((reg, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className={`p-7 rounded-2xl border transition-all flex flex-col justify-between ${
                reg.featured
                  ? 'bg-gradient-to-b from-zinc-950 to-[#0a0a0a] border-emerald-500/40 hover:border-emerald-500'
                  : 'bg-[#0a0a0a] border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Region Hub
                  </span>
                  {reg.featured && (
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      Primary Hub
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reg.name}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">{reg.desc}</p>
              </div>

              <Link
                href={reg.slug}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View localized solutions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why WB Businesses Need Custom Sites */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-zinc-950/60 border-t border-b border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">
              The Digital Reality
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why 85% of Bengal Businesses Fail with Cheap Websites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black border border-zinc-800">
              <ShieldAlert className="w-8 h-8 text-red-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Slow Plugin-Heavy Sites</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Most agencies sell ₹5,000 WordPress templates that take 6+ seconds to load on mobile Jio/Airtel networks in Bengal, causing 70% of potential buyers to bounce immediately.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-zinc-800">
              <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Missing WhatsApp Triggers</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Indian consumers don&apos;t want to fill out 8-field contact forms. Our websites feature prominent 1-tap WhatsApp chat buttons that initiate instant customer dialogues.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-zinc-800">
              <Building className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Zero Local Google Schema</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Without structured JSON-LD data and Google Map integration, your business is virtually invisible when potential clients search for services in your district.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Regional CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-black border border-emerald-500/30 p-8 md:p-14 text-center">
          <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Bengal&apos;s Most Trusted Web Engineering Team
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Ready to upgrade your web presence? Reach out now on WhatsApp for instant pricing estimates and live project walkthroughs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20am%20interested%20in%20a%20website%20consultation%20for%20my%20business%20in%20West%20Bengal."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us: +91 89181 86998
            </a>
            <Link
              href="/free-audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold rounded-full transition-all text-sm"
            >
              Request Free Website Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
