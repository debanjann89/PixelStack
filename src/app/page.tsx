'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Code,
  Layers,
  RefreshCw,
  Search,
  Megaphone,
  Share2,
  ArrowRight,
  TrendingUp,
  Smartphone,
  Zap,
  Globe,
  Settings,
  HelpCircle,
  Calendar,
  MessageSquare,
  ChevronRight,
  X,
  CheckCircle2,
  Clock,
  ChevronLeft,
  Award
} from 'lucide-react';
import DashboardMockup from '@/components/DashboardMockup';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import PricingPlans from '@/components/PricingPlans';
import CanvasParticles from '@/components/CanvasParticles';
import { getProjects } from '@/app/actions';

// Reusable Counter Component
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
    
    let timer = setInterval(() => {
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
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

// Fade in viewport helper
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

// Mock portfolio project data for homepage modal
const FEATURED_PROJECTS = [
  {
    id: 'proj-1',
    title: 'The Riviera Bistro',
    category: 'Restaurant Website',
    desc: 'A high-end ordering & booking experience that elevated brand status.',
    details: 'Custom React reservation system, local SEO optimization, high-fidelity gallery layout, and sub-500ms page load speeds.',
    results: '+135% Online Bookings, #1 Local Search rank',
    tech: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
    bg: 'from-amber-500/20 to-orange-600/25',
  },
  {
    id: 'proj-2',
    title: 'Jenkins & Partners',
    category: 'Law Firm Website',
    desc: 'An authoritative web presence built for high-value corporate leads.',
    details: 'Secure consultation funnel, clean corporate branding guidelines, accessible practice area directories, and advanced SEO setup.',
    results: '+85% Quality Consultation Bookings',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Zod'],
    bg: 'from-primary/20 to-secondary/25',
  },
  {
    id: 'proj-3',
    title: 'Apex Dental Care',
    category: 'Dental Clinic Website',
    desc: 'A modern, welcoming patient portal with direct booking utility.',
    details: 'Direct scheduling APIs, digital review showcase, treatment guide index, and complete mobile optimization.',
    results: '250+ Appointments scheduled in 30 days',
    tech: ['React', 'Next.js', 'Tailwind', 'Local JSON Db'],
    bg: 'from-emerald-500/20 to-teal-500/25',
  },
  {
    id: 'proj-4',
    title: 'Grand Palace Resorts',
    category: 'Hotel Website',
    desc: 'A luxurious visual hotel showcase drives direct consumer bookings.',
    details: 'Immersive media grid layouts, custom room configurator UI, fast page loads, and translation capabilities.',
    results: '-32% Third-party platform commission costs',
    tech: ['Next.js 15', 'Framer Motion', 'PostCSS'],
    bg: 'from-primary/20 to-secondary/25',
  },
  {
    id: 'proj-5',
    title: 'DevTech Solutions',
    category: 'Business Website',
    desc: 'A sleek SaaS-level showcase landing page built to scale B2B authority.',
    details: 'Modular service matrix, team profiling grid, customer support workflows, and scalable headless architecture.',
    results: '4.9/5 Client rating, +110% Newsletter Opt-ins',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    bg: 'from-secondary/20 to-primary/25',
  }
];

const ROTATING_WORDS = ['Customers', 'Leads', 'Growth', 'Revenue'];

export default function Home() {
  const router = useRouter();
  const [activeProj, setActiveProj] = useState<any | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [projectsList, setProjectsList] = useState<any[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const handleSetActiveProj = (proj: any | null) => {
    setActiveProj(proj);
    setCarouselIndex(0);
  };

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjectsList(data);
      setLoadingProjects(false);
    };
    loadProjects();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleConsultation = () => {
    router.push('/?consultation=open');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Interactive Pixel Particles Background */}
      <CanvasParticles />

      {/* Background Animated Grid & Glow Nodes */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow z-0" />
      <div className="absolute top-80 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[160px] pointer-events-none animate-pulse-slow z-0" />

      {/* ================= SECTION 1 — HERO ================= */}
      <section className="relative z-10 pt-16 pb-20 md:pb-28 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Tagline chip */}
          <span className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-6 flex items-center gap-2 hover:border-primary/30 transition-colors shadow-lg shadow-primary/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Building Modern Digital Experiences That Drive Growth
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-8 select-none">
            Websites That Turn <br className="hidden md:inline" />
            <span className="inline-block">Visitors Into&nbsp;</span>
            <span className="relative inline-block min-w-[200px] md:min-w-[340px] text-left h-[1.1em] align-top overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[wordIdx]}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute left-0 top-0 bg-gradient-to-r from-primary-light via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-move font-extrabold pb-2"
                >
                  {ROTATING_WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            We design and develop modern, enterprise-grade websites for businesses looking to attract more customers, generate high-intent leads, and establish a powerful digital footprint.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button
              onClick={handleConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>

        {/* Dashboard Showcase Widget */}
        <ScrollReveal delay={0.1}>
          <DashboardMockup />
        </ScrollReveal>
      </section>

      {/* ================= SECTION 2 — TRUST BAR ================= */}
      <section className="relative z-10 border-t border-b border-zinc-900 bg-zinc-950/40 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center items-center justify-center">
            
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                <Counter value="48" suffix="+" />
              </span>
              <span className="text-zinc-500 text-xs md:text-sm mt-1">Projects Delivered</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                <Counter value="32" suffix="+" />
              </span>
              <span className="text-zinc-500 text-xs md:text-sm mt-1">Businesses Served</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-primary-light tracking-tight">
                <Counter value="99" suffix="%" />
              </span>
              <span className="text-zinc-500 text-xs md:text-sm mt-1">Fast Delivery Rate</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                <Counter value="100" suffix="%" />
              </span>
              <span className="text-zinc-500 text-xs md:text-sm mt-1">Mobile Optimized</span>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-primary-light tracking-tight">
                <Counter value="100" suffix="%" />
              </span>
              <span className="text-zinc-500 text-xs md:text-sm mt-1">SEO Indexed Ready</span>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3 — SERVICES PREVIEW ================= */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Solutions Built For Business Performance
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              We cover everything from coding to launch, positioning your business as an authority in your field.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <ScrollReveal delay={0.05}>
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Website Development</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                Custom full-stack business websites built using Next.js 15. Speed-optimized, secure, and structured to convert casual visitors into customers.
              </p>
              <Link href="/services" className="text-xs text-primary-light font-bold flex items-center gap-1 hover:text-primary-lightest">
                Learn More <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Landing Pages</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                High-converting landing pages specifically designed for marketing campaigns. Features clear value propositions, interactive components, and lead triggers.
              </p>
              <Link href="/services" className="text-xs text-primary font-bold flex items-center gap-1 hover:text-primary/80">
                Learn More <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <RefreshCw className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Website Redesign</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                Transform outdated sites into modern, state-of-the-art Web3-capable responsive systems. Bring back speed, trust, and branding.
              </p>
              <Link href="/services" className="text-xs text-secondary font-bold flex items-center gap-1 hover:text-secondary-light">
                Learn More <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SEO Foundations</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                Technical audit, on-page structures, metadata schema layouts, XML configuration, and structured sitemaps to secure top rankings on Google.
              </p>
              <Link href="/services" className="text-xs text-emerald-400 font-bold flex items-center gap-1 hover:text-emerald-300">
                Learn More <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                <Megaphone className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Marketing</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                Marketing plans designed for business visibility. Strategy outlines, targeting guidelines, and funnel positioning to boost engagement.
              </p>
              <Link href="/services" className="text-xs text-amber-400 font-bold flex items-center gap-1 hover:text-amber-300">
                Learn More <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                <Share2 className="h-6 w-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Strategy</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                Complete brand positioning guidelines, visual templates, and messaging structures to build an engaged community online.
              </p>
              <Link href="/services" className="text-xs text-rose-400 font-bold flex items-center gap-1 hover:text-rose-300">
                Learn More <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= SECTION 4 — FEATURED WORK ================= */}
      <section className="relative z-10 py-24 border-t border-zinc-900 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3">Selected Works</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Featured Case Projects
                </h2>
              </div>
              <Link href="/portfolio" className="text-sm text-zinc-400 hover:text-white flex items-center gap-2 mt-4 md:mt-0 font-medium">
                View All Case Works <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          {loadingProjects ? (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500 font-mono text-xs w-full col-span-full">
              <span className="h-6 w-6 rounded-full border-t-2 border-r-2 border-primary border-b-transparent border-l-transparent animate-spin mb-4" />
              Compiling Featured Projects...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsList.slice(0, 3).map((proj, idx) => (
                <ScrollReveal key={proj.id} delay={idx * 0.05}>
                  <div
                    onClick={() => handleSetActiveProj(proj)}
                    className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full border border-white/5 hover:border-white/10"
                  >
                    {/* Visual Header */}
                    {(proj.images && proj.images.length > 0) || proj.image_url ? (
                      <div className="aspect-[4/3] relative overflow-hidden border-b border-white/5 group-hover:scale-[1.01] transition-transform duration-300">
                        <img 
                          src={proj.images && proj.images.length > 0 ? proj.images[0] : proj.image_url} 
                          alt={proj.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-black/45 flex items-end p-4">
                          <span className="text-[9px] bg-black/60 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider font-bold text-zinc-200">
                            {proj.category}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className={`aspect-[4/3] bg-gradient-to-br ${proj.bgGradient || 'from-primary/20 to-secondary/25'} relative flex items-center justify-center p-8 border-b border-white/5`}>
                        <div className="glass-panel p-4 rounded-xl border border-white/10 text-center shadow-lg w-5/6">
                          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mb-1">
                            {proj.category}
                          </span>
                          <h4 className="text-sm font-bold text-white truncate">{proj.title}</h4>
                        </div>
                      </div>
                    )}

                    {/* Details */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] text-primary-light font-bold uppercase tracking-wider block mb-2">
                          {proj.category}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                        <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-2">{proj.overview}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5 text-xs text-zinc-500">
                        <span>Click to view results</span>
                        <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ================= SECTION 5 — WHY PIXELSTACK ================= */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3">Why Us</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Engineering Premium Performance
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              We build custom experiences crafted to deliver actual business value.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <ScrollReveal delay={0.05}>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-5 w-5 text-primary-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Custom Design</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                No templates or cheap themes. Every pixel is tailored to represent your brand, build trust, and reflect premium service.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Performance</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Optimized Next.js code structures ensuring sub-second load times. Higher speed drives higher conversions and better Google rankings.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <Smartphone className="h-5 w-5 text-secondary-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mobile First</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Over 70% of web traffic is mobile. We design responsive layouts that work beautifully across all smartphones, tablets, and viewports.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SEO Ready</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Structured meta tags, robots file, XML sitemaps, semantic code headers, and JSON-LD schema are built-in from day one.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6">
                <Layers className="h-5 w-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Scalable Architecture</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Built using clean component matrices. Easily plug in eCommerce modules, content blogs, or custom dashboards as you expand.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-6">
                <Settings className="h-5 w-5 text-rose-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Dedicated Support</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Direct Slack/WhatsApp communications channel. Regular updates, site health checks, and optimization recommendations from our founders.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= SECTION 6 — PROCESS ================= */}
      <section className="relative z-10 py-24 border-t border-zinc-900 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3">Our Workflow</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                How We Deliver Value
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                A structured, transparent roadmap that takes your project from idea to deployment.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline Grid */}
          <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-6 md:gap-4">
            
            {[
              { num: '01', title: 'Discovery Call', desc: 'Understanding your business, target metrics, goals, and layout requirements.' },
              { num: '02', title: 'Planning & Strategy', desc: 'Creating structural site mockups, sitemaps, and finalizing content strategy.' },
              { num: '03', title: 'UI/UX Design', desc: 'Designing customized visual screens and getting layout approval.' },
              { num: '04', title: 'Development', desc: 'Coding custom Next.js 15 pages, styling layouts, and linking Server Actions.' },
              { num: '05', title: 'Launch', desc: 'Technical audits, speed tuning, Schema embeds, and domain mapping.' },
              { num: '06', title: 'Support', desc: 'Post-launch metrics tracking, updates, and maintenance support.' }
            ].map((step, idx) => (
              <div key={idx} className="relative pl-8 pb-12 md:pl-0 md:pb-0 text-left">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-4 border-black md:relative md:left-0 md:top-0 md:translate-x-0 md:mb-4" />
                
                <span className="text-xs font-mono font-bold text-zinc-500 block mb-1">STEP {step.num}</span>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed pr-2">{step.desc}</p>
              </div>
            ))}
            
          </div>

        </div>
      </section>

      {/* ================= SECTION 6.5 — PRICING & PLANS ================= */}
      <PricingPlans />

      {/* ================= SECTION 7 — TESTIMONIALS ================= */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Loved By Modern Businesses
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Read how we helped founders build digital trust and drive bookings.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <TestimonialsSlider />
        </ScrollReveal>
      </section>

      {/* ================= SECTION 8 — FINAL CTA ================= */}
      <section className="relative z-10 py-24 border-t border-zinc-900 bg-zinc-950/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Ready To Build Your <br />
              Next Digital Experience?
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Schedule a free call with Debanjan and Banashree to discuss how to drive visibility, authority, and sales for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleConsultation}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= PORTFOLIO PROJECT DETAIL DIALOG ================= */}
      <AnimatePresence>
        {activeProj && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={() => handleSetActiveProj(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl glass-panel rounded-2xl p-6 md:p-8 border border-white/10 z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => handleSetActiveProj(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Tag / Category */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-light bg-primary/5 px-2.5 py-1 rounded border border-primary/15">
                  {activeProj.category}
                </span>
                {activeProj.duration && (
                  <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Duration: {activeProj.duration}</span>
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{activeProj.title}</h3>
              
              {/* Project Media Showcase */}
              {activeProj.video_url ? (
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 bg-black">
                  {activeProj.video_url.includes('youtube.com') || activeProj.video_url.includes('youtu.be') || activeProj.video_url.includes('vimeo.com') ? (
                    <iframe
                      src={activeProj.video_url.includes('watch?v=') 
                        ? activeProj.video_url.replace('watch?v=', 'embed/') 
                        : activeProj.video_url.includes('youtu.be/') 
                        ? `https://www.youtube.com/embed/${activeProj.video_url.split('youtu.be/')[1]}`
                        : activeProj.video_url}
                      className="w-full h-full"
                      allowFullScreen
                      title={activeProj.title}
                    />
                  ) : (
                    <video src={activeProj.video_url} controls className="w-full h-full object-contain" />
                  )}
                </div>
              ) : ((activeProj.images && activeProj.images.length > 0) || activeProj.image_url) ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 bg-zinc-950 group">
                  {(() => {
                    const carouselImages = activeProj.images && activeProj.images.length > 0 
                      ? activeProj.images 
                      : (activeProj.image_url ? [activeProj.image_url] : []);
                    return (
                      <>
                        <motion.img
                          key={carouselIndex}
                          src={carouselImages[carouselIndex]}
                          alt={`${activeProj.title} screenshot ${carouselIndex + 1}`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover"
                        />

                        {carouselImages.length > 1 && (
                          <>
                            {/* Left Arrow */}
                            <button
                              onClick={(e) => {
                                  e.stopPropagation();
                                  setCarouselIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
                              }}
                              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>

                            {/* Right Arrow */}
                            <button
                              onClick={(e) => {
                                  e.stopPropagation();
                                  setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
                              }}
                              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>

                            {/* Indicators */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                              {carouselImages.map((_: any, idx: number) => (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCarouselIndex(idx);
                                  }}
                                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                    carouselIndex === idx ? 'w-4 bg-primary' : 'w-1.5 bg-white/40'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    );
                  })()}
                </div>
              ) : null}

              <div className="space-y-4">
                <div>
                  <h5 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Project Backstory</h5>
                  <p className="text-zinc-300 text-sm leading-relaxed">{activeProj.desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Goals */}
                  {activeProj.goals && activeProj.goals.length > 0 && (
                    <div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                      <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary-light" /> Project Goals
                      </h5>
                      <ul className="space-y-2.5">
                        {activeProj.goals.map((goal: string, i: number) => (
                          <li key={i} className="text-zinc-400 text-xs flex items-start gap-2 leading-normal">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Results */}
                  {activeProj.results && activeProj.results.length > 0 && (
                    <div className="bg-zinc-950 p-4 rounded-xl border border-emerald-500/10">
                      <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-emerald-400" /> Final Outcome
                      </h5>
                      <ul className="space-y-2.5">
                        {activeProj.results.map((res: string, i: number) => (
                          <li key={i} className="text-zinc-400 text-xs flex items-start gap-2 leading-normal">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-zinc-300 font-semibold">{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {activeProj.tech && activeProj.tech.length > 0 && (
                  <div>
                    <h5 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeProj.tech.map((t: string) => (
                        <span key={t} className="text-[10px] bg-zinc-900 border border-white/5 px-2 py-1 rounded text-zinc-300 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center justify-end gap-3 border-t border-zinc-900 pt-6">
                {activeProj.project_url && (
                  <a
                    href={activeProj.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-zinc-900 text-zinc-200 hover:text-white border border-white/5 hover:border-white/10 font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Globe className="h-3.5 w-3.5" /> Visit Live Website
                  </a>
                )}
                <button
                  onClick={() => {
                    handleSetActiveProj(null);
                    handleConsultation();
                  }}
                  className="px-5 py-2.5 bg-white text-black font-semibold rounded-xl text-xs flex items-center gap-1.5 hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  Inquire For Similar <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
