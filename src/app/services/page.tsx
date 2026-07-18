'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import SplitText from '@/components/SplitText';
import {
  Code,
  Layers,
  RefreshCw,
  Search,
  Megaphone,
  Share2,
  ArrowRight,
  CheckCircle,
  ChevronDown,
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  icon: any;
  overview: string;
  features: string[];
  process: string[];
  ctaText: string;
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'web-dev',
    number: '01',
    name: 'Website Development',
    shortDesc: 'High-performance, responsive full-stack websites using Next.js 15, TypeScript, and modern frameworks.',
    icon: Code,
    overview: 'We develop high-performance, responsive full-stack websites using Next.js 15, TypeScript, and modern frameworks. Designed to represent your brand with absolute authority, optimized for page speed, and built with conversion in mind.',
    features: [
      'Business Websites (Custom portfolios, corporate interfaces)',
      'High-converting Landing Pages built for Google/meta ads',
      'Portfolio Websites showcasing creative agency deliverables',
      'eCommerce capabilities and database integration actions',
    ],
    process: [
      'Sitemap and content flow planning',
      'Modular frontend development using Next.js & Tailwind',
      'Schema markup injection & SEO verification',
      'Deployment on secure production edge servers',
    ],
    ctaText: 'Build My Custom Website',
  },
  {
    id: 'ui-ux',
    number: '02',
    name: 'UI/UX Design',
    shortDesc: 'Interface systems that are clean, professional, and intuitive — inspired by Stripe, Linear, and Vercel.',
    icon: Layers,
    overview: 'A premium product deserves premium aesthetics. We design interface systems that are clean, professional, and intuitive, drawing visual inspiration from Stripe, Linear, and Vercel.',
    features: [
      'Interactive low-fidelity and high-fidelity Wireframes',
      'High-end User Interface Design (Desktop & Mobile)',
      'User Experience Design focused on lead generation mapping',
      'Custom branding kits, color theories, and typographic sheets',
    ],
    process: [
      'Competitor visual analysis and user research',
      'Figma wireframe and page flow mapping',
      'Final high-fidelity mockup designs',
      'Developer handoff blueprints and asset exporting',
    ],
    ctaText: 'Get Custom UI/UX Design',
  },
  {
    id: 'redesign',
    number: '03',
    name: 'Website Redesign',
    shortDesc: 'Transform old, slow WordPress/Wix sites into modern, high-speed digital assets.',
    icon: RefreshCw,
    overview: 'Outdated websites kill credibility. We transform old, slow WordPress/Wix sites into modern, high-speed digital assets that load instantly and project authority.',
    features: [
      'Legacy website performance and UI audit',
      'Complete code-base rewrite into Next.js & TypeScript',
      'Preservation of existing SEO rankings (link redirect mappings)',
      'Dynamic components and glassmorphism interface upgrades',
    ],
    process: [
      'Auditing current website and identifying friction zones',
      'Mapping visual upgrade plans and URL sitemaps',
      'Rebuilding layouts using modern design systems',
      'Safe migration of databases, forms, and domains',
    ],
    ctaText: 'Upgrade My Website',
  },
  {
    id: 'seo-setup',
    number: '04',
    name: 'SEO Optimization',
    shortDesc: 'Comprehensive SEO foundations from code to search console for maximum visibility.',
    icon: Search,
    overview: 'A beautiful site is useless if nobody can find it. We implement comprehensive SEO foundations from code to search console, ensuring Google indexes and ranks your content.',
    features: [
      'On-Page Optimization (Meta title, headers, tags)',
      'Technical SEO (Sitemaps, robots.txt, performance scores)',
      'JSON-LD Schema Markup (Local Business & Service listings)',
      'Google Search Console and Analytics account integrations',
    ],
    process: [
      'Keyword competition mapping and strategy design',
      'Semantic site code architecture setup',
      'Integrating metadata parameters dynamically',
      'Submitting sitemaps and monitoring index status',
    ],
    ctaText: 'Optimize My SEO Rank',
  },
  {
    id: 'marketing',
    number: '05',
    name: 'Digital Marketing',
    shortDesc: 'Strategic marketing plans designed to improve customer acquisition and funnel performance.',
    icon: Megaphone,
    overview: 'We map strategic digital marketing plans designed to improve customer acquisition. From structuring your marketing funnel to aligning your lead capture components.',
    features: [
      'B2B & B2C marketing channel mapping',
      'Ad campaign landing page layouts',
      'Lead magnet integration (eBook downloads, tools)',
      'Customer acquisition funnel planning',
    ],
    process: [
      'Identifying target demographics and channels',
      'Designing conversion-focused campaign assets',
      'Setting up analytic event triggers (Google tags)',
      'Monitoring performance metrics and iterating',
    ],
    ctaText: 'Scale My Growth',
  },
  {
    id: 'social-media',
    number: '06',
    name: 'Social Media Management',
    shortDesc: 'Tailored social media growth plans that establish community and brand engagement.',
    icon: Share2,
    overview: 'Build brand presence where your customers hang out. Banashree Das designs tailored social media growth plans that establish community and engagement.',
    features: [
      'Social Media content strategy planning',
      'Visual template designs for LinkedIn & Instagram',
      'Audience engagement and messaging guidelines',
      'Company profile design and optimization',
    ],
    process: [
      'Content brainstorming and visual style mapping',
      'Monthly calendar structuring and approval',
      'High-quality asset creation and caption writing',
      'Analytics tracking and monthly engagement reports',
    ],
    ctaText: 'Grow My Social Presence',
  },
];

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleBook = () => {
    router.push(`${pathname}?consultation=open`);
  };

  const toggleService = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative min-h-screen pt-10 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-primary/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── Hero Section ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20 pt-8 md:pt-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-6"
          >
            What We Do
          </motion.span>

          <SplitText
            text="Our Services"
            className="heading-hero text-white mb-8"
            scrollTrigger={true}
            as="h1"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            From technical Next.js development and clean UI/UX designs to SEO
            foundations and growth strategy — we deliver solutions that turn
            visitors into customers.
          </motion.p>
        </motion.div>

        {/* ── Editorial Service Rows ── */}
        <div className="border-t border-zinc-800">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedId === service.id;
            const ServiceIcon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Service Row */}
                <div
                  className="service-row group"
                  onClick={() => toggleService(service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleService(service.id);
                    }
                  }}
                >
                  {/* Number */}
                  <span className="service-number">{service.number}</span>

                  {/* Name */}
                  <span className="service-name text-xl md:text-3xl">
                    {service.name}
                  </span>

                  {/* Description (hidden on mobile) */}
                  <span className="service-desc hidden md:block">
                    {service.shortDesc}
                  </span>

                  {/* Expand indicator */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 md:ml-6 shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-zinc-600 group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>

                {/* Expanded Detail Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="py-8 md:py-12 pl-0 md:pl-12 border-b border-zinc-800/50">
                        {/* Overview */}
                        <div className="flex items-start gap-4 mb-10">
                          <div className="hidden md:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center border border-primary/15 shrink-0">
                            <ServiceIcon className="h-6 w-6 text-primary-light" />
                          </div>
                          <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl">
                            {service.overview}
                          </p>
                        </div>

                        {/* Features – 2×2 Grid */}
                        <div className="mb-10">
                          <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-5">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feat, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.1 + i * 0.06,
                                }}
                                className="flex items-start gap-3 bg-zinc-950/60 border border-zinc-800/60 rounded-xl p-4"
                              >
                                <CheckCircle className="h-4 w-4 text-primary-light shrink-0 mt-0.5" />
                                <span className="text-zinc-400 text-sm leading-snug">
                                  {feat}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Process Steps */}
                        <div className="mb-10">
                          <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-5">
                            Our Process
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {service.process.map((step, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.2 + i * 0.08,
                                }}
                                className="bg-zinc-950 p-4 rounded-xl border border-white/5"
                              >
                                <span className="text-[10px] font-mono font-bold text-primary/60 block mb-2">
                                  PHASE {String(i + 1).padStart(2, '0')}
                                </span>
                                <h5 className="text-xs md:text-sm text-white font-semibold leading-snug">
                                  {step}
                                </h5>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.35 }}
                          className="flex flex-col sm:flex-row items-center gap-4"
                        >
                          <button
                            onClick={handleBook}
                            className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-colors flex items-center gap-2 cursor-pointer"
                          >
                            {service.ctaText}
                            <ArrowRight className="h-4 w-4" />
                          </button>
                          <button
                            onClick={handleBook}
                            className="px-8 py-3.5 bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 rounded-full text-sm font-semibold transition-colors cursor-pointer"
                          >
                            Book a Free Consultation
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24 md:mt-32 max-w-2xl mx-auto"
        >
          <h2 className="heading-lg text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
            Tell us about your vision and we&apos;ll craft a tailored strategy
            to bring it to life. No commitment, just clarity.
          </p>
          <button
            onClick={handleBook}
            className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
