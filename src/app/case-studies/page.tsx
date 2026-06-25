'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  TrendingUp,
  Award,
  Zap,
  Globe,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  background: string;
  challenge: string;
  solution: string;
  process: string[];
  outcome: string;
  results: string[];
  tech: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'grand-palace',
    title: 'Bypassing 18% Aggregator Commissions for Luxury Hotel Chain',
    subtitle: 'How D.A.B Digitals re-architected Grand Palace Resorts online reservation funnel to drive direct consumer bookings.',
    client: 'Grand Palace Resorts',
    industry: 'Hotels & Hospitality',
    metric: '+40%',
    metricLabel: 'Direct Booking Growth',
    background: 'Grand Palace Resorts is a boutique luxury hotel brand with properties in primary tourist destinations. They rely heavily on visual aesthetics to attract high-value guests. Historically, over 85% of their room reservations came via travel aggregators like Booking.com, resulting in high commission payouts.',
    challenge: 'The client was paying up to 18% in commissions to aggregators, severely eating into profit margins. Their legacy WordPress site had 5-second load times, broken mobile responsiveness, and a confusing booking layout. Potential guests frequently abandoned the site to reserve rooms on third-party channels.',
    solution: 'We engineered a custom, high-speed website using Next.js 15. The website features immersive room media galleries with progressive image loading, structured location pages for SEO, and a direct CTA funnel that links visitors directly to the reservation team on WhatsApp/Call, eliminating the middleman.',
    process: [
      'Discovery & Funnel Mapping: Identified that 60% of mobile users abandoned the site during the room selection phase.',
      'Aesthetic Redesign: Drafted a luxury dark-theme visual design system matching top international boutique brands.',
      'Next.js 15 Rebuild: Coded modular, lightweight React components ensuring sub-500ms load speeds.',
      'Direct Action Triggers: Implemented sticky Call and WhatsApp action bubbles to establish immediate sales contact.'
    ],
    outcome: 'The newly launched site immediately established visual trust. With page speeds loading in under 0.5s, mobile users remained on the page. The direct WhatsApp booking shortcut led to a massive surge in direct queries, successfully bypassing third-party fees.',
    results: [
      'Direct hotel bookings increased by 40% in 60 days.',
      'Aggregator commissions cut down by ₹45,000+ monthly.',
      'Google Lighthouse performance rating rose from 38 to 98/100.'
    ],
    tech: ['Next.js 15', 'Framer Motion', 'Tailwind CSS', 'WhatsApp Business APIs']
  },
  {
    id: 'jenkins-legal',
    title: 'Securing Corporate compliance leads for Elite Law Firm',
    subtitle: 'How we positioned Jenkins & Associates as a corporate legal authority through a premium web presence.',
    client: 'Jenkins Legal Associates',
    industry: 'Legal Services',
    metric: '+85%',
    metricLabel: 'Corporate Lead Inquiries',
    background: 'Jenkins & Associates is a corporate law firm specializing in compliance, mergers, and commercial litigation. To acquire higher-value retainer accounts, they needed an online presence that projected maximum trust, authority, and professionalism.',
    challenge: 'Their existing website was built using a cheap, generic template that looked outdated and failed to highlight specific partner credentials. Contact forms lacked validation, resulting in spam. Further, their site did not rank on Google for any regional corporate search terms.',
    solution: 'We built a bespoke website that features organized, grid-based partner bio pages, interactive service guides, and a highly secure, Zod-validated corporate consultation portal. Technical SEO structures were implemented from day one to index practice areas locally.',
    process: [
      'Credential Mapping: Restructured how practice areas and lawyer histories were presented to establish trust.',
      'SEO Architecture: Researched high-intent local corporate search queries and constructed landing pages.',
      'Form Engineering: Implemented client validation schemas with React Hook Form and Zod to filter spam.',
      'Speed Tuning: Deployed the site on a global edge network to ensure zero latency for busy corporate clients.'
    ],
    outcome: 'The new site established immediate visual authority, placing Jenkins Legal on par with major national legal networks. The validated form funnel eliminated spam while increasing high-quality, high-intent corporate retainer inquiries.',
    results: [
      '+85% Increase in qualified corporate retainer inquiries.',
      'Achieved #1 Google rankings for local compliance terms within 4 weeks.',
      'Eliminated 99% of spam submissions through strict Zod schemas.'
    ],
    tech: ['Next.js 15', 'TypeScript', 'React Hook Form', 'Zod Schema']
  }
];

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<string>('grand-palace');
  const router = useRouter();

  const active = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  const handleBook = () => {
    router.push('/case-studies?consultation=open');
  };

  return (
    <div className="relative min-h-screen pt-10 pb-20">
      
      {/* Background grids */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3 animate-pulse">Case Studies</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Proof of Performance <br />
            & Business Metrics
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            We do not just build websites; we design business assets that optimize funnels, cut third-party fees, and drive organic client inquiries.
          </p>
        </div>

        {/* Tab selection */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 border-b border-zinc-900 pb-6">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                study.id === activeTab
                  ? 'bg-white text-black font-bold shadow-xl'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {study.client}
            </button>
          ))}
        </div>

        {/* Main Case Study Layout */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Left Summary Box */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            {/* Metric Banner */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
              <div className="text-5xl md:text-6xl font-extrabold text-primary-light tracking-tight mb-2">
                {active.metric}
              </div>
              <div className="text-zinc-300 text-sm font-bold">{active.metricLabel}</div>
              <p className="text-zinc-500 text-xs mt-2 font-mono">Industry: {active.industry}</p>
            </div>

            {/* Tech chips summary */}
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Core Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span key={t} className="text-xs bg-zinc-950 border border-white/5 px-2.5 py-1.5 rounded text-zinc-400 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <button
              onClick={handleBook}
              className="w-full py-4 bg-white text-black font-semibold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Inquire For Similar Results <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right Detailed Report */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* Header */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {active.title}
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed italic">
                "{active.subtitle}"
              </p>
            </div>

            {/* Background */}
            <div className="border-t border-zinc-900 pt-8">
              <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary-light" /> Client Background
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {active.background}
              </p>
            </div>

            {/* Challenge */}
            <div className="border-t border-zinc-900 pt-8">
              <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" /> The Challenge
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {active.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="border-t border-zinc-900 pt-8">
              <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-400" /> Technical Solution
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {active.solution}
              </p>
            </div>

            {/* Process */}
            <div className="border-t border-zinc-900 pt-8">
              <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary-light" /> Development Process
              </h3>
              <div className="space-y-4">
                {active.process.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-xs font-mono font-bold text-zinc-500 pt-1">0{idx + 1}</span>
                    <div>
                      <h4 className="text-white text-xs font-bold mb-1 uppercase tracking-wider">
                        {step.split(':')[0]}
                      </h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        {step.split(':')[1]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome & Results */}
            <div className="border-t border-zinc-900 pt-8 pb-12">
              <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" /> Final Outcome & Metrics
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {active.outcome}
              </p>
              
              <div className="space-y-3">
                {active.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-zinc-950 p-4 rounded-xl border border-emerald-500/10">
                    <TrendingUp className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-200 text-xs font-semibold leading-relaxed">{res}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}
