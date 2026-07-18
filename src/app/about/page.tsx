'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import {
  ShieldCheck,
  Lightbulb,
  Eye,
  Clock,
  Rocket,
  ArrowRight,
  Code2,
  BarChart3,
} from 'lucide-react';
import SplitText from '@/components/SplitText';
import TextReveal from '@/components/TextReveal';

/* ─── Counter Component ─── */
function Counter({
  value,
  suffix = '',
  duration = 1.5,
}: {
  value: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value.replace(/\D/g, ''));
    let start = 0;
    const totalSteps = 40;
    const stepDuration = (duration * 1000) / totalSteps;

    const timer = setInterval(() => {
      start += Math.ceil(num / totalSteps);
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span
      ref={ref}
      className="font-mono font-bold text-4xl md:text-5xl text-white tracking-tight"
    >
      {count}
      {suffix}
    </span>
  );
}

/* ─── Data ─── */
const FOUNDERS = [
  {
    initials: 'DA',
    name: 'Debanjan Amin',
    role: 'Co-Founder & Lead Developer',
    bio: 'Debanjan architects every project from the ground up — handling development, deployment, and performance tuning. He specialises in building highly polished, responsive Next.js applications that load under 500ms and convert visitors into customers.',
    skills: ['React', 'Next.js', 'Node.js', 'UI Engineering'],
    icon: Code2,
    gradient: 'from-emerald-500 to-teal-600',
    social: {
      github: 'https://github.com/debanjanamin',
      linkedin: 'https://linkedin.com/in/debanjanamin',
    },
  },
  {
    initials: 'BD',
    name: 'Banashree Das',
    role: 'Co-Founder & Growth Strategist',
    bio: 'Banashree drives the growth engine — leading client communication, brand strategy, and digital marketing. She maps products to audiences with precision, helping businesses build authority and capture regional markets online.',
    skills: ['SEO', 'Content Strategy', 'Digital Marketing'],
    icon: BarChart3,
    gradient: 'from-emerald-400 to-cyan-500',
    social: {
      linkedin: 'https://linkedin.com/in/banashreedas',
    },
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    desc: 'We never ship minimum viable products. Every build is tailored to match enterprise-level standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    desc: 'We leverage cutting-edge stacks — Next.js 15, React Server Components, and modern UI frameworks.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    desc: 'Direct access to the team that builds your product. Upfront pricing, clear timelines, zero surprises.',
  },
  {
    icon: Clock,
    title: 'Reliable Delivery',
    desc: 'Built-in backups, rigorous QA, and post-launch health audits ensure your site is always production-ready.',
  },
  {
    icon: Rocket,
    title: 'Growth Focused',
    desc: 'We measure success by conversions, not just pixels. Every decision is guided by real business outcomes.',
  },
];

const STATS = [
  { value: '48', suffix: '+', label: 'Projects Completed' },
  { value: '32', suffix: '+', label: 'Happy Clients' },
  { value: '12', suffix: '+', label: 'Industries Served' },
  { value: '45', suffix: '+', label: 'Websites Delivered' },
];

/* ─── Scroll Reveal Wrapper ─── */
function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Page ─── */
export default function AboutPage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleConsultation = () => {
    router.push(`${pathname}?consultation=open`);
  };

  return (
    <div className="relative min-h-screen pt-10 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-60 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="text-center pt-16 md:pt-24 pb-24 md:pb-32">
          <ScrollReveal>
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-6">
              Who We Are
            </span>
          </ScrollReveal>

          <SplitText
            text="About Us"
            className="heading-hero text-white mb-8"
            scrollTrigger={true}
            as="h1"
          />

          <ScrollReveal delay={0.3}>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              D.A.B Digitals is a modern digital agency helping businesses build
              authoritative online presence through premium development, strategic
              design, and data-driven growth.
            </p>
          </ScrollReveal>
        </section>

        {/* ══════════════════════════════════════════
            BRAND STATEMENT — TextReveal
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-32">
          <TextReveal
            text="We are a digital agency built on the belief that great design drives great business. Founded by Debanjan Amin and Banashree Das."
            className="max-w-5xl mx-auto text-center text-white"
            triggerStart="top 80%"
            triggerEnd="bottom 30%"
          />
        </section>

        {/* ══════════════════════════════════════════
            FOUNDERS
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
                Founders
              </span>
              <h2 className="heading-lg text-white">Meet the Team</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOUNDERS.map((founder, idx) => {
              const FounderIcon = founder.icon;
              return (
                <ScrollReveal key={founder.name} delay={idx * 0.15}>
                  <div className="card-dark p-8 md:p-10 rounded-2xl h-full flex flex-col">
                    {/* Top Row: Badge + Meta */}
                    <div className="flex items-start gap-5 mb-6">
                      {/* Initials Badge */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center shrink-0 shadow-lg shadow-primary/10`}
                      >
                        <span className="text-xl font-bold text-white font-mono tracking-wider">
                          {founder.initials}
                        </span>
                      </div>

                      <div>
                        <h3 className="heading-md text-white mb-1">
                          {founder.name}
                        </h3>
                        <span className="text-primary text-sm font-semibold">
                          {founder.role}
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                      {founder.bio}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {founder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full text-zinc-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 border-t border-zinc-800 pt-5">
                      {founder.social.github && (
                        <a
                          href={founder.social.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-500 hover:text-white transition-colors"
                          aria-label={`${founder.name} GitHub`}
                        >
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </a>
                      )}
                      <a
                        href={founder.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors"
                        aria-label={`${founder.name} LinkedIn`}
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            VALUES
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
                Core Principles
              </span>
              <h2 className="heading-lg text-white">The Values We Live By</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <ScrollReveal key={val.title} delay={idx * 0.1}>
                  <div className="card-dark p-6 rounded-2xl h-full flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 flex items-center justify-center mb-5 border border-zinc-800">
                      <ValIcon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed flex-1">
                      {val.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STATS
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <ScrollReveal>
            <div className="card-dark p-8 md:p-14 rounded-3xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <div className="text-zinc-500 text-xs md:text-sm mt-3 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-lg text-white mb-6">
                Ready to Build Something{' '}
                <span className="text-gradient">Extraordinary</span>?
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                Whether you need a brand-new website, a complete redesign, or a
                growth strategy — we are here to make it happen. Book a free
                consultation and let&apos;s talk about your vision.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleConsultation}
                  className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => router.push('/work')}
                  className="px-8 py-4 bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 font-semibold rounded-full text-sm transition-colors cursor-pointer"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
