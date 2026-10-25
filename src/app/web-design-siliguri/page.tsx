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
  Hotel,
  Stethoscope,
  GraduationCap,
  Store,
  Zap,
  TrendingUp,
  ShieldCheck,
  Search,
  Sparkles,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

const LOCAL_AREAS = [
  'Sevoke Road',
  'Matigara & City Centre',
  'Pradhan Nagar',
  'Hill Cart Road',
  'Hakim Para',
  'Khalpara',
  'Salugara',
  'Bagdogra',
  'Jalpaiguri',
  'Darjeeling & Kurseong',
  'Kalimpong',
  'Dooars Region'
];

const LOCAL_INDUSTRIES = [
  {
    icon: Hotel,
    title: 'Hotels, Resorts & Homestays',
    desc: 'Direct booking engines for North Bengal hospitality businesses. Save 18-25% OTA commissions on Booking.com & MakeMyTrip.',
    stat: 'Zero OTA Fees',
    link: '/industries/hotel-resort-website-design'
  },
  {
    icon: Stethoscope,
    title: 'Clinics, Doctors & Diagnostics',
    desc: 'Medical practice websites for Sevoke Road & Siliguri healthcare specialists with appointment scheduling and patient inquiries.',
    stat: '3x Patient Enquiries',
    link: '/industries/dental-clinic-website-design'
  },
  {
    icon: GraduationCap,
    title: 'Schools & Coaching Institutes',
    desc: 'Admission inquiry funnels, online prospectus, and rank showcase for Siliguri educational institutions and competitive coaching centers.',
    stat: '+65% Admissions',
    link: '/blog/coaching-institute-website-design-india'
  },
  {
    icon: Store,
    title: 'Retail, Tea & Local Businesses',
    desc: 'High-speed showcase catalogs and local e-commerce for tea merchants, timber, construction, and Siliguri retail brands.',
    stat: 'Local Market Dominance',
    link: '/portfolio'
  }
];

const LOCAL_FAQS = [
  {
    q: 'How much does a website cost in Siliguri?',
    a: 'Website costs in Siliguri depend on your specific business goals, number of pages, and required features (like online booking, WhatsApp triggers, or custom catalogs). We provide a free consultation and a transparent, customized proposal based on your exact scope with zero hidden surprises.'
  },
  {
    q: 'Can we meet face-to-face in Siliguri to discuss our project?',
    a: 'Absolutely. We are based locally in North Bengal and frequently meet business owners across Siliguri (Sevoke Road, Matigara, Pradhan Nagar, City Centre) for coffee meetings and strategic consultations.'
  },
  {
    q: 'How will my website bring customer enquiries?',
    a: 'We integrate one-tap WhatsApp chat buttons, click-to-call mobile triggers, and local Google SEO schema. When customers search in Siliguri, your site appears on Google Maps and search results, driving direct calls and messages.'
  },
  {
    q: 'Why choose D&B Digitals over cheap local freelancers or WordPress templates?',
    a: 'Template sites load in 5+ seconds and fail Core Web Vitals. We build modern custom Next.js web applications that load in under 1 second, rank on Page 1 of Google, and are custom designed for your specific brand.'
  }
];

export default function SiliguriWebDesignPage() {
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
            #1 Web Design & Growth Agency in Siliguri & North Bengal
          </motion.div>

          <SplitText
            text="High-Converting Web Design in Siliguri"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We engineer lightning-fast, custom websites for hotels, clinics, coaching centers, and business owners in Siliguri that dominate Google rankings and convert visitors into paying clients.
          </motion.p>

          {/* Quick CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20am%20looking%20for%20a%20website%20for%20my%20business%20in%20Siliguri."
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

          {/* Value Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { title: 'Sub-1s Load Time', desc: 'Custom Next.js engineering' },
              { title: 'Local Google Ranking', desc: 'Sevoke Rd to Darjeeling SEO' },
              { title: 'Direct WhatsApp Leads', desc: 'Built-in 1-tap booking flow' },
              { title: 'Zero Monthly Lock-ins', desc: 'You own 100% of your code' },
            ].map((b, i) => (
              <div key={i} className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  {b.title}
                </div>
                <div className="text-zinc-500 text-xs">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Industries Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Tailored for North Bengal
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Industries We Help Win in Siliguri
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From luxury homestays in Mirik and Darjeeling to medical clinics on Sevoke Road, our websites are built for local market dynamics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {LOCAL_INDUSTRIES.map((ind, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#0a0a0a] border border-zinc-800/80 hover:border-emerald-500/50 rounded-2xl p-8 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <ind.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-900 text-emerald-300 border border-emerald-500/20">
                    {ind.stat}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {ind.desc}
                </p>
              </div>

              <Link
                href={ind.link}
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-semibold group-hover:translate-x-1 transition-all"
              >
                Learn more about our solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-zinc-950/60 border-t border-b border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Flexible Investment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Website Solutions for Siliguri Businesses
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              Custom-tailored to your exact business model. Transparent scope, zero recurring developer lock-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black border border-zinc-800 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Starter Business</h4>
                <p className="text-xs text-zinc-500 mb-4">For local shops, doctors & consultants</p>
                <div className="text-xl font-bold text-white mb-1">Custom Quote</div>
                <div className="text-xs text-emerald-400 mb-4 font-medium">Tailored to your basic scope</div>
                <ul className="text-xs text-zinc-300 space-y-2.5 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Up to 5 Responsive Pages</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct WhatsApp Inquiry Button</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Google Maps & Business Profile</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 7-10 Days Fast Delivery</li>
                </ul>
              </div>
              <a
                href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20am%20interested%20in%20a%20quotation%20for%20a%20Starter%20business%20website%20in%20Siliguri."
                target="_blank"
                rel="noreferrer"
                className="block text-center py-2.5 text-xs font-semibold rounded-full border border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-400 transition-colors"
              >
                Get Quote on WhatsApp
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border-2 border-emerald-500/60 relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Growth & Local SEO</h4>
                <p className="text-xs text-zinc-400 mb-4">For hotels, clinics & expanding brands</p>
                <div className="text-xl font-bold text-white mb-1">Custom Growth Scope</div>
                <div className="text-xs text-emerald-400 mb-4 font-medium">Optimized for maximum client inquiries</div>
                <ul className="text-xs text-zinc-200 space-y-2.5 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 10-15 Custom Next.js Pages</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Online Booking / Lead Capture Engine</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Siliguri & North Bengal Local SEO</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sub-1 Second Core Web Vitals</li>
                </ul>
              </div>
              <a
                href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20want%20to%20discuss%20a%20Growth%20website%20proposal%20for%20my%20business%20in%20Siliguri."
                target="_blank"
                rel="noreferrer"
                className="block text-center py-2.5 text-xs font-bold rounded-full bg-emerald-500 hover:bg-emerald-400 text-black transition-colors shadow-lg shadow-emerald-500/20"
              >
                Request Custom Proposal
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-zinc-800 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Custom Enterprise</h4>
                <p className="text-xs text-zinc-500 mb-4">For hotel chains, schools & e-commerce</p>
                <div className="text-xl font-bold text-white mb-1">Bespoke Scope</div>
                <div className="text-xs text-emerald-400 mb-4 font-medium">Multi-branch & full portal integration</div>
                <ul className="text-xs text-zinc-300 space-y-2.5 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Custom Booking Engine / Payment Gateway</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Student / Admin Portal & CRM sync</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Full Pan-India SEO Architecture</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Dedicated Technical Support</li>
                </ul>
              </div>
              <a
                href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20would%20like%20to%20discuss%20an%20Enterprise%20website%20consultation%20in%20Siliguri."
                target="_blank"
                rel="noreferrer"
                className="block text-center py-2.5 text-xs font-semibold rounded-full border border-zinc-700 hover:border-emerald-500 text-white transition-colors"
              >
                Discuss Enterprise Scope
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto">
        <div className="border border-zinc-900 rounded-3xl p-8 md:p-12 bg-zinc-950/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-2">
                Hyper-Local Presence
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Serving Businesses Across Siliguri & Surrounding Regions
              </h3>
            </div>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all shrink-0"
            >
              Get Free Website Speed Audit <ArrowRight className="w-4 h-4" />
            </Link>
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

      {/* Local FAQ Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-sm">Everything you need to know about working with Siliguri&apos;s leading web agency.</p>
        </div>

        <div className="space-y-4">
          {LOCAL_FAQS.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-2">
                <span className="text-emerald-400">Q.</span> {faq.q}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Lead CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-black border border-emerald-500/30 p-8 md:p-14 text-center relative overflow-hidden">
          <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Real Customer Inquiries in Siliguri?
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Stop losing customers to outdated competitor websites. Talk directly to our co-founder today for a free 20-minute digital strategy consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20want%20to%20discuss%20a%20website%20project%20for%20my%20business%20in%20Siliguri."
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
              Request Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
