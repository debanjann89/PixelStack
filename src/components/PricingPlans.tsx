'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface Plan {
  id: 'launch' | 'growth' | 'enterprise';
  name: string;
  tagline: string;
  featured: boolean;
  features: string[];
  stack: string[];
}

const PLANS: Plan[] = [
  {
    id: 'launch',
    name: 'Launch Pad',
    tagline: 'Ideal for startups, law firms, and clinic landing pages.',
    featured: false,
    features: [
      'Up to 5 custom pages',
      'Bespoke visual layout design',
      'Zod-validated contact form',
      'Framer Motion micro-interactions',
      'Full mobile responsiveness',
      '30 days post-launch support',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'growth',
    name: 'Scale Engine',
    tagline: 'Best for restaurants, booking platforms, and high-conversions.',
    featured: true,
    features: [
      'Unlimited sections & pages',
      'SEO optimization & Schema markup',
      'Dynamic Lead Management Dashboard',
      'Automated Sitemap XML',
      'Secure Admin Dashboard',
      'Interactive filters & sliders',
      'Direct WhatsApp & Call funnels',
      '90 days VIP support',
    ],
    stack: ['Next.js 15', 'Server Actions', 'Framer Motion', 'jspdf'],
  },
  {
    id: 'enterprise',
    name: 'Apex Custom',
    tagline: 'For custom SaaS, CRMs, and hotel booking networks.',
    featured: false,
    features: [
      'Bespoke application flow',
      'Advanced SEO auditing & copywriting',
      'Custom client portal/dashboard',
      'Advanced SVG animations',
      'Multiple forms & booking schedules',
      'Weekly automated backup scripts',
      'Speed guarantee (<300ms FCP)',
      '1 year priority support',
    ],
    stack: ['Full-stack Next.js', 'Custom CRM API', 'Dynamic Webhooks'],
  },
];

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function PricingPlans() {
  const router = useRouter();
  const pathname = usePathname();

  const handleBookPlan = (planId: string) => {
    router.push(`${pathname}?consultation=open&plan=${planId}`);
  };

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
              Pricing
            </span>
            <h2 className="heading-lg text-white mb-4">
              Choose your growth plan
            </h2>
            <p className="text-zinc-500 text-base">
              Transparent pricing. No hidden costs. Every plan includes custom design and hand-coded development.
            </p>
          </div>
        </ScrollReveal>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {PLANS.map((plan, idx) => (
            <ScrollReveal key={plan.id} delay={idx * 0.1}>
              <div
                className={`relative rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#0a0a0a] border-2 border-primary/30 shadow-[0_0_60px_-15px_rgba(16,185,129,0.15)]'
                    : 'bg-[#0a0a0a] border border-zinc-800/60 hover:border-zinc-700'
                }`}
              >
                {/* Recommended badge */}
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      Recommended
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-zinc-500 text-sm">{plan.tagline}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-zinc-800 mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {plan.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleBookPlan(plan.id)}
                  className={`w-full py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.featured
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                  }`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
