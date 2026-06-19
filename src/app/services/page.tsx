'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Code,
  Layers,
  RefreshCw,
  Search,
  Megaphone,
  Share2,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  PlayCircle
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  name: string;
  icon: any;
  overview: string;
  benefits: string[];
  features: string[];
  process: string[];
  ctaText: string;
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'web-dev',
    name: 'Website Development',
    icon: Code,
    overview: 'We develop high-performance, responsive full-stack websites using Next.js 15, TypeScript, and modern frameworks. Designed to represent your brand with absolute authority, optimized for page speed, and built with conversion in mind.',
    benefits: [
      'Sub-500ms initial load speeds for higher conversions.',
      'Completely custom layouts built around user journeys.',
      'Headless architectures that scale as your business grows.',
      'Clean, search-engine friendly semantic HTML structures.'
    ],
    features: [
      'Business Websites (Custom portfolios, corporate interfaces)',
      'High-converting Landing Pages built for Google/meta ads',
      'Portfolio Websites showcasing creative agency deliverables',
      'eCommerce capabilities and database integration actions'
    ],
    process: [
      'Sitemap and content flow planning',
      'Modular frontend development using Next.js & Tailwind',
      'Schema markup injection & SEO verification',
      'Deployment on secure production edge servers'
    ],
    ctaText: 'Build My Custom Website'
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    icon: Layers,
    overview: 'A premium product deserves premium aesthetics. We design interface systems that are clean, professional, and intuitive, drawing visual inspiration from Stripe, Linear, and Vercel.',
    benefits: [
      'Clean layouts that project brand authority.',
      'Higher user retention rates and lowered bounce rates.',
      'Reduced friction during checkout and consultation bookings.',
      'Interactive micro-animations that make your app feel alive.'
    ],
    features: [
      'Interactive low-fidelity and high-fidelity Wireframes',
      'High-end User Interface Design (Desktop & Mobile)',
      'User Experience Design focused on lead generation mapping',
      'Custom branding kits, color theories, and typographic sheets'
    ],
    process: [
      'Competitor visual analysis and user research',
      'Figma wireframe and page flow mapping',
      'Final high-fidelity mockup designs',
      'Developer handoff blueprints and asset exporting'
    ],
    ctaText: 'Get Custom UI/UX Design'
  },
  {
    id: 'redesign',
    name: 'Website Redesign',
    icon: RefreshCw,
    overview: 'Outdated websites kill credibility. We transform old, slow WordPress/Wix sites into modern, high-speed digital assets that load instantly and project authority.',
    benefits: [
      'Eliminate slow load times and buggy templates.',
      'Establish visual credibility that matches ₹50,000+ project value.',
      'Improve SEO indexing score by rebuilding semantic hierarchies.',
      'Update security credentials to prevent site compromises.'
    ],
    features: [
      'Legacy website performance and UI audit',
      'Complete code-base rewrite into Next.js & TypeScript',
      'Preservation of existing SEO rankings (link redirect mappings)',
      'Dynamic components and glassmorphism interface upgrades'
    ],
    process: [
      'Auditing current website and identifying friction zones',
      'Mapping visual upgrade plans and URL sitemaps',
      'Rebuilding layouts using modern design systems',
      'Safe migration of databases, forms, and domains'
    ],
    ctaText: 'Upgrade My Website'
  },
  {
    id: 'seo-setup',
    name: 'SEO Setup',
    icon: Search,
    overview: 'A beautiful site is useless if nobody can find it. We implement comprehensive SEO foundations from code to search console, ensuring Google indexes and ranks your content.',
    benefits: [
      'Earn organic website traffic from search engines.',
      'Position your business for local search rankings.',
      'Enhance search snippet presentation through schema markup.',
      'Ensure high indexability for all your service pages.'
    ],
    features: [
      'On-Page Optimization (Meta title, headers, tags)',
      'Technical SEO (Sitemaps, robots.txt, performance scores)',
      'JSON-LD Schema Markup (Local Business & Service listings)',
      'Google Search Console and Analytics account integrations'
    ],
    process: [
      'Keyword competition mapping and strategy design',
      'Semantic site code architecture setup',
      'Integrating metadata parameters dynamically',
      'Submitting sitemaps and monitoring index status'
    ],
    ctaText: 'Optimize My SEO Rank'
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    icon: Megaphone,
    overview: 'We map strategic digital marketing plans designed to improve customer acquisition. From structuring your marketing funnel to aligning your lead capture components.',
    benefits: [
      'Attract high-intent, corporate leads to your site.',
      'Lower client acquisition costs through structured funnels.',
      'Clearly measure marketing ROI via direct form dashboard tracking.',
      'Position your product with consistent marketing messaging.'
    ],
    features: [
      'B2B & B2C marketing channel mapping',
      'Ad campaign landing page layouts',
      'Lead magnet integration (eBook downloads, tools)',
      'Customer acquisition funnel planning'
    ],
    process: [
      'Identifying target demographics and channels',
      'Designing conversion-focused campaign assets',
      'Setting up analytic event triggers (Google tags)',
      'Monitoring performance metrics and iterating'
    ],
    ctaText: 'Scale My Growth'
  },
  {
    id: 'social-media',
    name: 'Social Media Management',
    icon: Share2,
    overview: 'Build brand presence where your customers hang out. Banasri Das designs tailored social media growth plans that establish community and engagement.',
    benefits: [
      'Stay top-of-mind for potential customers.',
      'Develop a highly professional brand voice across channels.',
      'Generate organic inbound leads via LinkedIn & Instagram.',
      'Showcase your company values and project case studies.'
    ],
    features: [
      'Social Media content strategy planning',
      'Visual template designs for LinkedIn & Instagram',
      'Audience engagement and messaging guidelines',
      'Company profile design and optimization'
    ],
    process: [
      'Content brainstorming and visual style mapping',
      'Monthly calendar structuring and approval',
      'High-quality asset creation and caption writing',
      'Analytics tracking and monthly engagement reports'
    ],
    ctaText: 'Grow My Social Presence'
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string>('web-dev');
  const router = useRouter();

  const handleBook = () => {
    router.push('/services?consultation=open');
  };

  const active = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];
  const ActiveIcon = active.icon;

  return (
    <div className="relative min-h-screen pt-10 pb-20">
      
      {/* Background grids */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3 animate-pulse">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Digital Capabilities Built <br />
            To Scale Your Business
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            From technical Next.js development and clean UI/UX designs to SEO foundations and growth strategy, we deliver solutions that turn visitors into customers.
          </p>
        </div>

        {/* Interactive Matrix Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Menu */}
          <div className="col-span-1 lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 border-b border-zinc-900 lg:border-b-0">
            {SERVICES_DATA.map((service) => {
              const ServiceIcon = service.icon;
              const isSelected = service.id === selectedService;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`w-max lg:w-full flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold transition-all border shrink-0 text-left cursor-pointer ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl'
                      : 'bg-zinc-950/60 text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-800'
                  }`}
                >
                  <ServiceIcon className={`h-4.5 w-4.5 ${isSelected ? 'text-black' : 'text-zinc-500'}`} />
                  <span>{service.name}</span>
                </button>
              );
            })}
          </div>

          {/* Details Content Panel */}
          <div className="col-span-1 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-6 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />

                {/* Header info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/15">
                    <ActiveIcon className="h-6 w-6 text-primary-light" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{active.name}</h2>
                </div>

                {/* Overview */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 border-b border-zinc-900 pb-6">
                  {active.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Core Offerings</h4>
                    <ul className="space-y-3">
                      {active.features.map((feat, i) => (
                        <li key={i} className="text-zinc-400 text-xs flex items-start gap-2.5 leading-normal">
                          <CheckCircle className="h-3.5 w-3.5 text-primary-light shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Business Benefits</h4>
                    <ul className="space-y-3">
                      {active.benefits.map((benefit, i) => (
                        <li key={i} className="text-zinc-400 text-xs flex items-start gap-2.5 leading-normal">
                          <CheckCircle className="h-3.5 w-3.5 text-secondary-light shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Process roadmap */}
                <div className="border-t border-zinc-900 pt-6 mb-8">
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6">Service Timeline</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {active.process.map((pStep, i) => (
                      <div key={i} className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] font-mono font-bold text-zinc-500 block mb-1">PHASE {i+1}</span>
                        <h5 className="text-xs text-white font-bold leading-snug">{pStep}</h5>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-950 p-4 rounded-2xl border border-white/5">
                  <div className="text-left">
                    <span className="text-[10px] text-zinc-500 font-mono block">Standard Project Scope</span>
                    <span className="text-xs text-white font-semibold">Average Delivery: 2-3 Weeks</span>
                  </div>
                  <button
                    onClick={handleBook}
                    className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-xl text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {active.ctaText} <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </div>
  );
}
