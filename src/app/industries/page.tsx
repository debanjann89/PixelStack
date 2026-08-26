'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import {
  Stethoscope,
  Wrench,
  Building,
  Home,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

const INDUSTRIES = [
  {
    id: 'dental',
    title: 'Dental & Healthcare Clinics',
    slug: '/industries/dental-clinic-website-design',
    icon: Stethoscope,
    badge: 'Healthcare & Medical',
    headline: 'Patient Booking Portals & HIPAA-Conscious Web Architecture',
    description:
      'We design calm, modern, high-converting websites for dentists, orthodontists, and private medical practices. Featuring 24/7 self-service scheduling, intake forms, and local map SEO.',
    metrics: ['+135% Patient Inquiries', 'Sub-400ms Load Speed', 'Zero Booking Friction'],
    highlights: [
      'Automated Online Patient Scheduling',
      'HIPAA-Conscious Form Integrations',
      'Before & After Smile Transformation Sliders',
      'Local Healthcare Geo-Targeted SEO',
    ],
    caseStudyLink: '/case-studies/apex-dental-care',
    caseStudyName: 'Apex Dental Care Case Study',
    bgGradient: 'from-emerald-950/40 via-zinc-950 to-zinc-950',
    borderHover: 'hover:border-emerald-500/40',
    accentColor: 'text-emerald-400',
    badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
  {
    id: 'hvac',
    title: 'HVAC, Plumbing & Home Services',
    slug: '/industries/hvac-plumbing-website-design',
    icon: Wrench,
    badge: 'Contractors & Trades',
    headline: 'Emergency Dispatch CTAs & Local High-Intent Lead Machines',
    description:
      'Engineered specifically for contractors, plumbers, electricians, and HVAC technicians. Prominent mobile click-to-call, interactive service area coverage maps, and direct booking sync.',
    metrics: ['Sticky Mobile Call CTAs', 'Service Area Map Pages', 'Google Map Pack Ready'],
    highlights: [
      'One-Tap Emergency Phone CTAs',
      'ServiceTitan & Housecall Pro Scheduling Sync',
      'Local Neighborhood SEO Architecture',
      'Before/After Job Installation Galleries',
    ],
    caseStudyLink: '/blog/best-website-features-for-home-service-businesses',
    caseStudyName: 'Home Service Feature Guide',
    bgGradient: 'from-cyan-950/40 via-zinc-950 to-zinc-950',
    borderHover: 'hover:border-cyan-500/40',
    accentColor: 'text-cyan-400',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  },
  {
    id: 'hospitality',
    title: 'Hotels, Luxury Resorts & Hospitality',
    slug: '/industries/hotel-resort-website-design',
    icon: Building,
    badge: 'Hospitality & Travel',
    headline: 'Direct Booking Engine Integrations & 0% OTA Commission Architecture',
    description:
      'Immersive, visual-first digital showcases that convey luxury and drive guests to book directly on your site, bypassing 15-25% commission fees from Expedia and Booking.com.',
    metrics: ['+40% Direct Bookings', '0% Third-Party Fees', '360° Virtual Tour Ready'],
    highlights: [
      'Direct PMS & Booking Engine Connectors',
      'Next-Gen Optimized Video & Suite Galleries',
      'Multi-Language & Multi-Currency Support',
      'Seasonal Dynamic Pricing Promotions',
    ],
    caseStudyLink: '/case-studies/grand-palace-resorts',
    caseStudyName: 'Grand Palace Resorts Case Study',
    bgGradient: 'from-amber-950/40 via-zinc-950 to-zinc-950',
    borderHover: 'hover:border-amber-500/40',
    accentColor: 'text-amber-400',
    badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property Platforms',
    slug: '/industries/real-estate-website-development',
    icon: Home,
    badge: 'Property & Brokerage',
    headline: 'Custom MLS/IDX Property Portals & High-Value Buyer Lead Funnels',
    description:
      'Bespoke web applications built for real estate brokerages and top-producing agents. Lightning-fast property search filters, interactive neighborhood guides, and CRM lead pipelines.',
    metrics: ['Instant IDX Property Filtering', 'Interactive Area Maps', 'Automated CRM Routing'],
    highlights: [
      'Custom Styled MLS / IDX Search System',
      'Hyper-Local Neighborhood SEO Hubs',
      'Matterport 3D Tour Embedding',
      'Lead Capture Valuation Forms',
    ],
    caseStudyLink: '/portfolio',
    caseStudyName: 'Property Platform Showcase',
    bgGradient: 'from-purple-950/40 via-zinc-950 to-zinc-950',
    borderHover: 'hover:border-purple-500/40',
    accentColor: 'text-purple-400',
    badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  },
];

const COMPARISON_POINTS = [
  {
    title: 'Domain-Specific Architecture',
    generic: 'Generic WordPress/Wix templates with unneeded widgets and slow databases.',
    dnb: 'Bespoke Next.js 15 full-stack code built around your specific customer conversion flow.',
  },
  {
    title: 'Local SEO & Schema Markup',
    generic: 'Basic automated tags that fail to rank in competitive US & regional markets.',
    dnb: 'Nested JSON-LD (Service, LocalBusiness, FAQPage) and fast Core Web Vitals (95+ score).',
  },
  {
    title: 'Conversion Funnel Design',
    generic: 'Generic contact form hidden at the bottom of the page.',
    dnb: 'High-intent emergency click-to-call, calendar bookings, and direct WhatsApp quick-connects.',
  },
  {
    title: 'Speed & Mobile Performance',
    generic: '3–6 second load times causing 50%+ of mobile visitors to bounce immediately.',
    dnb: 'Sub-500ms TTFB global edge deployment with zero layout shifts (CLS < 0.01).',
  },
];

export default function IndustriesPage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleConsultation = () => {
    router.push(`${pathname}?consultation=open`);
  };

  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  });

  return (
    <div className="relative min-h-screen pt-10 pb-24 bg-black text-zinc-300">
      {/* Background ambient glow */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[60%] right-10 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── Hero Section ── */}
        <section className="text-center pt-16 md:pt-24 pb-20 max-w-4xl mx-auto">
          <motion.span
            className="px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Niche Web Engineering
          </motion.span>

          <SplitText
            text="Industry-Specific Web Development"
            className="heading-hero text-white mb-8"
            scrollTrigger={true}
            as="h1"
            highlightWords={['Web Development']}
          />

          <motion.p
            className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Every industry has unique conversion friction. We engineer custom, ultra-fast websites
            tailored to turn local searchers into booked appointments, calls, and paying clients.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              onClick={handleConsultation}
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              Book an Industry Strategy Call <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white font-medium rounded-full text-sm transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Explore Live Case Studies
            </Link>
          </motion.div>
        </section>

        {/* ── Industry Verticals Grid ── */}
        <section className="py-16 space-y-12">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            const isReversed = idx % 2 !== 0;

            return (
              <motion.div
                key={ind.id}
                className={`card-dark rounded-3xl p-8 md:p-12 border border-zinc-800/80 bg-gradient-to-br ${ind.bgGradient} transition-all duration-500 ${ind.borderHover} relative overflow-hidden`}
                {...fadeInUp(idx * 0.1)}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left info column */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center">
                        <Icon className={`h-6 w-6 ${ind.accentColor}`} />
                      </div>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${ind.badgeColor}`}
                      >
                        {ind.badge}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                        {ind.title}
                      </h2>
                      <p className="text-primary text-sm md:text-base font-semibold">
                        {ind.headline}
                      </p>
                    </div>

                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Highlights grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {ind.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-300">
                          <CheckCircle2 className={`h-4 w-4 ${ind.accentColor} shrink-0 mt-0.5`} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <Link
                        href={ind.slug}
                        className="px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-xs md:text-sm transition-all inline-flex items-center gap-2"
                      >
                        View {ind.title} Solutions <ArrowRight className="h-4 w-4" />
                      </Link>

                      <Link
                        href={ind.caseStudyLink}
                        className="text-zinc-400 hover:text-white text-xs md:text-sm font-medium inline-flex items-center gap-1.5 transition-colors"
                      >
                        {ind.caseStudyName} <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right metrics/callout column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-6 md:p-8 space-y-6">
                      <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest block">
                        Engineered Outcomes
                      </span>

                      <div className="space-y-4">
                        {ind.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-white text-sm font-semibold">{metric}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-zinc-800/60 pt-5 flex items-center justify-between text-xs text-zinc-500">
                        <span>Includes full Technical SEO</span>
                        <span className="text-primary font-medium">95–100 PageSpeed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* ── Comparison Table: Why Custom Niche Architecture Wins ── */}
        <section className="py-20">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInUp(0)}>
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
              Architecture That Ranks
            </span>
            <h2 className="heading-lg text-white mb-4">
              Custom Next.js vs. Generic Page Builders
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              Why high-growth businesses in the US and India choose hand-coded Next.js systems over
              bloated WordPress and Wix themes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPARISON_POINTS.map((pt, i) => (
              <motion.div
                key={i}
                className="card-dark p-6 md:p-8 rounded-2xl border border-zinc-800/80"
                {...fadeInUp(i * 0.1)}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="text-white text-lg font-bold">{pt.title}</h3>
                </div>

                <div className="space-y-3 text-xs md:text-sm">
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10 text-zinc-400">
                    <span className="font-semibold text-red-400 block mb-1">Generic Templates:</span>
                    {pt.generic}
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/15 text-zinc-300">
                    <span className="font-semibold text-primary block mb-1">D&B Digitals Build:</span>
                    {pt.dnb}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <motion.section
          className="mt-16 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
          {...fadeInUp(0.2)}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <h2 className="heading-md md:heading-lg text-white mb-6">
            Don&apos;t see your specific industry?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8">
            We build custom digital platforms for corporate B2B firms, law practices, eCommerce, and
            luxury services. Let&apos;s architect a solution tailored to your exact revenue model.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleConsultation}
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              Schedule Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium rounded-full text-sm transition-all w-full sm:w-auto justify-center text-center"
            >
              Contact Our Founders
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
