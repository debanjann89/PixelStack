'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code,
  Layers,
  RefreshCw,
  Search,
  Megaphone,
  Share2,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Smartphone,
  Globe,
  X,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  Award,
} from 'lucide-react';
import SplitText from '@/components/SplitText';
import TextReveal from '@/components/TextReveal';
import Marquee from '@/components/Marquee';
import MagneticButton from '@/components/MagneticButton';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import PricingPlans from '@/components/PricingPlans';
import { getProjects } from '@/app/actions';

gsap.registerPlugin(ScrollTrigger);

// ─── Helpers ────────────────────────────────────────────
function Counter({ value, suffix = '', duration = 1.5 }: { value: string; suffix?: string; duration?: number }) {
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
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

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

// ─── Data ────────────────────────────────────────────────
const SERVICES = [
  { num: '01', name: 'Web Development', desc: 'Crafting bespoke digital experiences.', icon: Code },
  { num: '02', name: 'UI/UX Design', desc: 'Designing interfaces that convert.', icon: Layers },
  { num: '03', name: 'Website Redesign', desc: 'Transforming your online presence.', icon: RefreshCw },
  { num: '04', name: 'SEO Optimization', desc: 'Driving organic traffic and visibility.', icon: Search },
  { num: '05', name: 'Digital Marketing', desc: 'Strategic growth campaigns.', icon: Megaphone },
  { num: '06', name: 'Social Media', desc: 'Building engaged communities.', icon: Share2 },
];

const MARQUEE_ITEMS = [
  'WEB DEVELOPMENT',
  'UI/UX DESIGN',
  'SEO OPTIMIZATION',
  'DIGITAL STRATEGY',
  'SOCIAL MEDIA',
  'WEBSITE REDESIGN',
];

const WHY_US = [
  { icon: Code, title: 'Custom Code', desc: 'Zero templates. Every line written for you.' },
  { icon: Zap, title: 'Blazing Fast', desc: 'Sub-500ms load times, guaranteed.' },
  { icon: Smartphone, title: 'Mobile First', desc: 'Perfect on every device and screen.' },
  { icon: Globe, title: 'SEO Built-in', desc: 'Rank higher from day one.' },
];

const FEATURED_PROJECTS_FALLBACK = [
  {
    id: 'proj-1',
    title: 'The Riviera Bistro',
    category: 'Restaurant',
    desc: 'A high-end ordering & booking experience.',
    bg: 'from-emerald-900/40 to-emerald-950/60',
  },
  {
    id: 'proj-2',
    title: 'Jenkins & Partners',
    category: 'Law Firm',
    desc: 'An authoritative corporate web presence.',
    bg: 'from-teal-900/40 to-teal-950/60',
  },
  {
    id: 'proj-3',
    title: 'Apex Dental Clinic',
    category: 'Healthcare',
    desc: 'Modern patient portal with online booking.',
    bg: 'from-green-900/40 to-green-950/60',
  },
];

// ─── Page Component ──────────────────────────────────────
export default function HomePage() {
  const router = useRouter();
  const [projects, setProjects] = useState<typeof FEATURED_PROJECTS_FALLBACK>([]);
  const [selectedProject, setSelectedProject] = useState<(typeof FEATURED_PROJECTS_FALLBACK)[0] | null>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalInnerRef = useRef<HTMLDivElement>(null);

  // Load projects from Supabase
  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        if (data && data.length > 0) {
          setProjects(
            data.slice(0, 4).map((p: any, i: number) => ({
              id: p.id || `proj-${i}`,
              title: p.title || p.name || `Project ${i + 1}`,
              category: p.category || 'Website',
              desc: p.description || p.desc || '',
              bg: FEATURED_PROJECTS_FALLBACK[i % FEATURED_PROJECTS_FALLBACK.length].bg,
              image: p.thumbnail_url || p.image_url || null,
            }))
          );
        } else {
          setProjects(FEATURED_PROJECTS_FALLBACK);
        }
      } catch {
        setProjects(FEATURED_PROJECTS_FALLBACK);
      }
    }
    loadProjects();
  }, []);

  // Horizontal scroll GSAP effect
  useEffect(() => {
    if (!horizontalRef.current || !horizontalInnerRef.current) return;

    const scrollWidth = horizontalInnerRef.current.scrollWidth - horizontalRef.current.offsetWidth;
    if (scrollWidth <= 0) return;

    const tween = gsap.to(horizontalInnerRef.current, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalRef.current,
        start: 'top top',
        end: `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === horizontalRef.current) st.kill();
      });
    };
  }, [projects]);

  const handleConsultation = () => {
    router.push('/?consultation=open');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background blobs */}
      <div className="blob blob-primary w-[600px] h-[600px] top-0 left-[-200px]" />
      <div className="blob blob-secondary w-[500px] h-[500px] top-[40%] right-[-150px]" />
      <div className="blob blob-primary w-[400px] h-[400px] bottom-[20%] left-[30%]" />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 text-center pt-32 pb-20">
        {/* Tagline chip */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-xs font-medium uppercase tracking-[0.15em] mb-8 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Digital Agency for Modern Businesses
        </motion.span>

        {/* Main headline — character split */}
        <SplitText
          text="We Build Digital Experiences"
          className="heading-hero text-white max-w-6xl mb-6"
          delay={1.8}
          highlightWords={['Digital']}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
        >
          Websites that convert. Brands that resonate. Growth that compounds.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton
            onClick={handleConsultation}
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-all flex items-center gap-2"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <Link
            href="/portfolio"
            className="px-8 py-4 bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white font-medium rounded-full text-sm transition-all flex items-center gap-2"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute bottom-8 scroll-indicator"
        >
          <span className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — MANIFESTO (Word-by-word scroll reveal)
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <TextReveal
            text="We don't just build websites. We engineer digital growth machines that convert visitors into customers and ideas into revenue."
            className="text-white"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — SERVICES MARQUEE (outline text ticker)
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 border-t border-b border-zinc-900/50">
        <Marquee speed={25}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={item}
              className={`text-5xl md:text-7xl font-extrabold mx-6 md:mx-10 whitespace-nowrap select-none ${
                i === 3 ? 'text-primary' : 'text-outline'
              }`}
            >
              {item}
              <span className="text-zinc-700 mx-4">·</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — SERVICES LIST (editorial numbered rows)
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 md:py-32 max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
            Our Expertise
          </span>
          <h2 className="heading-xl text-white mb-16">What We Do</h2>
        </ScrollReveal>

        <div className="border-t border-zinc-800">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.num} delay={i * 0.05}>
              <Link href="/services" className="service-row group">
                <span className="service-number">{service.num}</span>
                <span className="service-name text-xl md:text-3xl">{service.name}</span>
                <span className="service-desc hidden md:block">{service.desc}</span>
                <ArrowUpRight className="h-5 w-5 text-zinc-700 group-hover:text-primary transition-colors ml-4 shrink-0" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — FEATURED WORK (Horizontal scroll)
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
                  Portfolio
                </span>
                <h2 className="heading-lg text-white">Featured Work</h2>
              </div>
              <Link
                href="/portfolio"
                className="text-zinc-500 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal scroll container */}
        <div ref={horizontalRef} className="relative overflow-hidden">
          <div
            ref={horizontalInnerRef}
            className="flex gap-6 px-6 md:px-12"
            style={{ width: 'max-content' }}
          >
            {(projects.length > 0 ? projects : FEATURED_PROJECTS_FALLBACK).map((project, i) => (
              <motion.div
                key={project.id}
                className="w-[80vw] md:w-[45vw] lg:w-[35vw] shrink-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={`relative h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br ${project.bg} border border-zinc-800/50`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project info at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="text-primary text-xs font-semibold uppercase tracking-[0.15em] block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">{project.desc}</p>
                  </div>

                  {/* Arrow on hover */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — STATS
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '48', suffix: '+', label: 'Projects Delivered' },
              { value: '32', suffix: '+', label: 'Happy Clients' },
              { value: '99', suffix: '%', label: 'Delivery Rate' },
              { value: '100', suffix: '%', label: 'Mobile Optimized' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <span className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="block text-zinc-500 text-sm mt-2">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ═══════════════════════════════════════════════════
          SECTION 7 — WHY US
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 md:py-32 max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
              Why D.A.B Digitals
            </span>
            <h2 className="heading-lg text-white">
              Built different. Built better.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          {WHY_US.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="card-dark p-6 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 8 — TESTIMONIALS (marquee)
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 border-t border-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12">
          <ScrollReveal>
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
              Testimonials
            </span>
            <h2 className="heading-lg text-white">What clients say</h2>
          </ScrollReveal>
        </div>
        <TestimonialsSlider />
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 9 — PRICING
          ═══════════════════════════════════════════════════ */}
      <div className="section-divider" />
      <PricingPlans />

      {/* ═══════════════════════════════════════════════════
          SECTION 10 — FINAL CTA (scale-on-scroll)
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-32 md:py-48 text-center px-6 md:px-12">
        <ScrollReveal>
          <h2 className="heading-xl text-white mb-6 max-w-4xl mx-auto">
            Ready to build your <span className="text-gradient">digital presence</span>?
          </h2>
          <p className="text-zinc-500 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s turn your vision into a high-performance website that drives real results.
          </p>
          <MagneticButton
            onClick={handleConsultation}
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-base transition-all"
          >
            Start a Project <ArrowRight className="h-5 w-5" />
          </MagneticButton>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROJECT DETAIL MODAL
          ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.15em]">
                  {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">{selectedProject.desc}</p>

              <div className={`h-48 rounded-xl bg-gradient-to-br ${selectedProject.bg} mb-8`} />

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    handleConsultation();
                  }}
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  Inquire for Similar <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-medium rounded-full text-sm transition-all flex items-center gap-2"
                  onClick={() => setSelectedProject(null)}
                >
                  View All Work
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
