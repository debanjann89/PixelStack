'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import { CASE_STUDIES } from '@/data/caseStudies';
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Award,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function CaseStudiesPage() {
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
      {/* Background ambient lighting */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── Hero Section ── */}
        <section className="text-center pt-16 md:pt-24 pb-16 max-w-3xl mx-auto">
          <motion.span
            className="px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Verified Case Studies
          </motion.span>

          <SplitText
            text="Real Client Results"
            className="heading-hero text-white mb-6"
            scrollTrigger={true}
            as="h1"
            highlightWords={['Results']}
          />

          <motion.p
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Detailed technical breakdowns, UX architectures, and measured business outcomes from
            genuine web development engagements.
          </motion.p>
        </section>

        {/* ── Case Studies Grid ── */}
        <section className="space-y-8 max-w-5xl mx-auto">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.slug}
              className={`card-dark rounded-3xl p-8 md:p-10 border border-zinc-800/80 bg-gradient-to-br ${study.bgGradient} hover:border-primary/40 transition-all duration-500`}
              {...fadeInUp(idx * 0.08)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left column info */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${study.badgeColor}`}
                    >
                      {study.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{study.duration}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {study.title}
                  </h2>

                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-3">
                    {study.overview}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium bg-zinc-900/80 border border-zinc-800/80 px-3 py-1 rounded-full text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-xs md:text-sm transition-all inline-flex items-center gap-2"
                    >
                      Read Full Case Study <ArrowRight className="h-4 w-4" />
                    </Link>

                    {study.industryUrl && (
                      <Link
                        href={study.industryUrl}
                        className="text-xs text-zinc-400 hover:text-white font-medium inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Related Industry</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right column highlights */}
                <div className="lg:col-span-4 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Award className="h-4 w-4" />
                    <span>Key Outcome</span>
                  </div>

                  <p className="text-sm font-bold text-white leading-snug">
                    {study.results[0]}
                  </p>

                  <div className="border-t border-zinc-800/60 pt-3 space-y-2">
                    {study.results.slice(1, 3).map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ── Bottom Consultation CTA ── */}
        <motion.section
          className="mt-20 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-14 text-center max-w-3xl mx-auto"
          {...fadeInUp(0.2)}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build Your Success Story?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Book a strategy consultation directly with our co-founders to review your digital
            presence and map out a growth-focused plan.
          </p>

          <button
            onClick={handleConsultation}
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </button>
        </motion.section>
      </div>
    </div>
  );
}
