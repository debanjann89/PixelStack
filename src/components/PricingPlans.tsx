'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { Check, ShieldCheck, Zap, Layers, Cpu, Award, ArrowRight } from 'lucide-react';

interface PlanDetail {
  id: 'launch' | 'growth' | 'enterprise';
  name: string;
  tagline: string;
  accent: string;
  glowColor: string;
  specs: {
    pages: string;
    database: string;
    speed: string;
    support: string;
  };
  lighthouse: {
    perf: number;
    seo: number;
    bp: number;
  };
  features: string[];
  stack: string[];
}

const PLANS: PlanDetail[] = [
  {
    id: 'launch',
    name: 'Launch Pad',
    tagline: 'Ideal for startups, law firms, and clinic landing pages.',
    accent: 'text-emerald-500 border-emerald-500/20',
    glowColor: 'rgba(16,185,129,0.15)',
    specs: {
      pages: 'Up to 5 Pages',
      database: 'Static / Contact Cache',
      speed: 'Sub-500ms (FCP)',
      support: '30 Days Post-Launch',
    },
    lighthouse: { perf: 98, seo: 0, bp: 98 },
    features: [
      'Bespoke visual layout design',
      'Zod-validated contact form',
      'Framer Motion page micro-interactions',
      'Complete responsiveness on iOS & Android',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zod'],
  },
  {
    id: 'growth',
    name: 'Scale Engine',
    tagline: 'Best for restaurants, booking platforms, and high-conversions.',
    accent: 'text-primary-light border-primary/35',
    glowColor: 'rgba(16,185,129,0.25)',
    specs: {
      pages: 'Unlimited Sections',
      database: 'Local File Database (mockDb)',
      speed: 'Sub-400ms (FCP)',
      support: '90 Days VIP SLA Support',
    },
    lighthouse: { perf: 100, seo: 90, bp: 100 },
    features: [
      'Standard SEO optimization & Schema markup',
      'Dynamic Lead Management Dashboard',
      'Automated Sitemap XML generations',
      'Secure Admin Dashboard (/admin)',
      'Interactive service filters & sliders',
      'Direct WhatsApp & Call funnels',
    ],
    stack: ['Next.js 15 App Router', 'Framer Motion', 'Server Actions', 'jspdf', 'local JSON Db'],
  },
  {
    id: 'enterprise',
    name: 'Apex Custom',
    tagline: 'For custom SaaS mockups, custom CRMs, and hotels booking networks.',
    accent: 'text-secondary-light border-secondary/30',
    glowColor: 'rgba(20,184,166,0.15)',
    specs: {
      pages: 'Bespoke Application Flow',
      database: 'Hybrid Cache / Custom Sync',
      speed: 'Sub-300ms (FCP)',
      support: '1 Year Priority Support',
    },
    lighthouse: { perf: 100, seo: 100, bp: 100 },
    features: [
      'Advanced SEO auditing, keyword research & copywriting',
      'Bespoke client portal/dashboard',
      'Advanced SVG animations & graphics',
      'Multiple forms & booking schedules',
      'Weekly automated backup scripts',
      'Speed optimization guarantee (<300ms)',
    ],
    stack: ['Full-stack Next.js', 'Custom CRM API', 'Dynamic Webhooks', 'Advanced Motion', 'Enterprise SLA'],
  },
];

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState<'launch' | 'growth' | 'enterprise'>('growth');
  const router = useRouter();
  const pathname = usePathname();

  const activePlan = PLANS.find((p) => p.id === selectedPlan)!;

  const handleBookPlan = () => {
    // Open consultation modal with plan query param
    router.push(`${pathname}?consultation=open&plan=${activePlan.id}`);
  };

  return (
    <section className="relative z-10 py-24 border-t border-zinc-900 bg-zinc-950/20 overflow-hidden">
      {/* Background glow circle */}
      <div 
        className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-all duration-700" 
        style={{ backgroundColor: activePlan.glowColor }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3 font-mono">
            [ Packages & Deliverables ]
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Transparent Scaling Models
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Choose a baseline system tailored to your scaling needs. Custom features can be appended to any contract.
          </p>
        </div>

        {/* Pricing Dashboard Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Plan Selector Deck (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {PLANS.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-zinc-900/50 border-white/10 shadow-2xl'
                      : 'bg-black/30 border-zinc-900/80 hover:border-zinc-800'
                  }`}
                >
                  {/* Selector glow line */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activePlanGlow"
                      className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-b from-primary to-secondary" 
                    />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded ${
                        plan.id === 'launch' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/10' :
                        plan.id === 'growth' ? 'bg-primary/10 text-primary-light border-primary/10' :
                        'bg-secondary/10 text-secondary-light border-secondary/10'
                      }`}>
                        {plan.id === 'growth' ? 'RECOMMENDED' : 'PACKAGE'}
                      </span>
                      {plan.id === 'growth' && <Zap className="h-4 w-4 text-primary-light" />}
                      {plan.id === 'enterprise' && <Layers className="h-4 w-4 text-secondary" />}
                      {plan.id === 'launch' && <Cpu className="h-4 w-4 text-emerald-400" />}
                    </div>

                    <h3 className="text-xl font-bold text-white mt-4 flex items-baseline gap-2">
                      {plan.name}
                    </h3>
                    <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 mt-6 group/btn">
                    <span>Inspect specifications</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Visual Blueprint Console (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="h-full bg-zinc-950/80 rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-md">
              {/* Engineering layout grid background */}
              <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlan.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 relative z-10"
                >
                  {/* Console Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-600 block uppercase tracking-wider">
                        CONSOLE_OUTPUT // {activePlan.name.toUpperCase().replace(' ', '_')}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-1">Architectural Blueprint</h4>
                    </div>

                    {/* Tech specs counters */}
                    <div className="grid grid-cols-2 gap-4 text-left font-mono">
                      <div>
                        <span className="text-[9px] text-zinc-600 block uppercase">FCP Speed</span>
                        <span className="text-xs font-bold text-emerald-400">{activePlan.specs.speed}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-600 block uppercase">Pages Scope</span>
                        <span className="text-xs font-bold text-primary-light">{activePlan.specs.pages}</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Gauges row (Lighthouse Scores) */}
                  <div className="grid grid-cols-3 gap-4 bg-black/40 p-4 rounded-2xl border border-zinc-900/80">
                    
                    {/* Performance */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-14 h-14 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-zinc-900" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: activePlan.lighthouse.perf / 100 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-emerald-500" strokeWidth="2.5" strokeDasharray="100, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                          />
                        </svg>
                        <span className="absolute text-[10px] font-mono font-bold text-white">{activePlan.lighthouse.perf}%</span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 mt-2 uppercase">Performance</span>
                    </div>

                    {/* SEO */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-14 h-14 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-zinc-900" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: activePlan.lighthouse.seo / 100 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={activePlan.lighthouse.seo > 0 ? "text-emerald-500" : "text-zinc-800"} strokeWidth="2.5" strokeDasharray="100, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                          />
                        </svg>
                        <span className="absolute text-[10px] font-mono font-bold text-white">{activePlan.lighthouse.seo > 0 ? `${activePlan.lighthouse.seo}%` : 'N/A'}</span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 mt-2 uppercase">SEO Ranking</span>
                    </div>

                    {/* Best Practices */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-14 h-14 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-zinc-900" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: activePlan.lighthouse.bp / 100 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-emerald-500" strokeWidth="2.5" strokeDasharray="100, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                          />
                        </svg>
                        <span className="absolute text-[10px] font-mono font-bold text-white">{activePlan.lighthouse.bp}%</span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 mt-2 uppercase">Best Practice</span>
                    </div>

                  </div>

                  {/* Core Deliverables list */}
                  <div className="space-y-3">
                    <h5 className="text-xs text-zinc-500 font-bold uppercase tracking-wider font-mono">
                      [ Scope Deliverables ]
                    </h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                      {activePlan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs leading-relaxed">
                           <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/15 shrink-0">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack stack chips */}
                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs text-zinc-500 font-bold uppercase tracking-wider font-mono">
                      [ Stack Architecture ]
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activePlan.stack.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono bg-zinc-900 border border-white/5 rounded-md px-2.5 py-1 text-zinc-400 flex items-center gap-1.5"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Action row at bottom */}
              <div className="border-t border-zinc-900 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Support Term: {activePlan.specs.support}</span>
                </div>
                
                <button
                  onClick={handleBookPlan}
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-zinc-200 text-black font-semibold rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg"
                >
                  Book {activePlan.name} <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
