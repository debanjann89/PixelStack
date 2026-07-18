'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Globe,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  X,
  Sparkles,
} from 'lucide-react';
import { getProjects } from '@/app/actions';
import SplitText from '@/components/SplitText';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface Project {
  id: string;
  title: string;
  category: string;
  overview: string;
  desc: string;
  tech: string[];
  goals: string[];
  results: string[];
  duration: string;
  bgGradient: string;
  image_url?: string;
  video_url?: string;
  images?: string[];
  project_url?: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */
const CATEGORIES = ['All', 'Restaurants', 'Law Firms', 'Dental Clinics', 'Hotels', 'Businesses'] as const;

const CASE_STUDIES: Record<string, { challenge: string; approach: string; impact: string }> = {
  bistro: {
    challenge:
      'The Riviera Bistro was losing over 30% of potential online reservations due to a slow, outdated third-party widget. Mobile bounce rates exceeded 65%, and slow page load times caused impatient diners to leave and find other restaurant sites.',
    approach:
      'We replaced the monolithic reservation widget with a customized, lightweight seat-booking interface. We redesigned the brand aesthetics using high-end food photography, lazy-loaded responsive image assets, and dynamic layouts to drive direct reservations.',
    impact:
      'Online reservations rose 135% in the first month. Page load times dropped below 0.5s, eliminating booking friction and saving third-party commission costs.',
  },
  legal: {
    challenge:
      'Jenkins Legal Associates lacked a modern digital presence. Corporate compliance clients had no way to verify credentials, view practice fields, or securely request legal consultations online.',
    approach:
      'We engineered a dark, authoritative visual experience featuring clean typography, dynamic attorney cards, and custom multi-step intake flows. We integrated robust SEO schemas to capture local business searches.',
    impact:
      'Corporate compliance consultation leads increased by 85%. The website achieved a perfect 100/100 Lighthouse SEO rank, climbing to Page 1 on Google within weeks.',
  },
  dental: {
    challenge:
      'Apex Dental Care was overwhelmed by manual scheduling phone calls, while patient acquisition remained stagnant because their website failed to engage mobile searchers.',
    approach:
      'We designed an intuitive, mobile-first scheduling portal. We integrated treatment category cards, trust indicators, patient reviews, and a streamlined calendar booking system.',
    impact:
      'Over 250 bookings occurred online in the first month. Front-desk phone call volume decreased by 45%, allowing the team to focus on in-person patient care.',
  },
  resort: {
    challenge:
      'Grand Palace Resorts was paying up to 18% commission fees to online travel agencies (OTAs) because their own slow, image-heavy WordPress site failed to inspire guest booking confidence.',
    approach:
      'We developed a fast Next.js visual tour experience with high-end room galleries, interactive layouts, and a direct booking module offering absolute pricing transparency.',
    impact:
      'Direct hotel bookings increased by 40% in 60 days. The resort saved commission fees and saw a 3.2x increase in website user engagement duration.',
  },
  devtech: {
    challenge:
      'DevTech Solutions had a strong SaaS offering but a visual presentation that looked like an afterthought, failing to attract high-tier corporate clients.',
    approach:
      'We built a dark, high-converting product platform showcase. We added clean feature grids, dynamic client logo reels, and interactive demo booking modules.',
    impact:
      'Lead submissions and developer demo requests grew by 110%. The redesigned branding successfully aligned with enterprise expectations.',
  },
};

/* ------------------------------------------------------------------ */
/*  Scroll Reveal Wrapper                                              */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function PortfolioPage() {
  const [filter, setFilter] = useState<typeof CATEGORIES[number]>('All');
  const [activeProj, setActiveProj] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSetActiveProj = useCallback((proj: Project | null) => {
    setActiveProj(proj);
    setCarouselIndex(0);
    setCaseStudyOpen(false);
  }, []);

  const handleBook = useCallback(() => {
    router.push(`${pathname}?consultation=open`);
  }, [router, pathname]);

  /* --- data loading (preserved) --------------------- */
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setProjectsList(data || []);
      } catch (err) {
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  /* --- filter mapping --------------------------------- */
  const filteredProjects = projectsList.filter(
    (p) => filter === 'All' || p.category === filter
  );

  /* --- lock scroll when modal open ------------------- */
  useEffect(() => {
    if (activeProj) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProj]);

  return (
    <div className="relative min-h-screen pt-10 pb-20">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── Hero Section ── */}
        <section className="text-center pt-16 md:pt-24 pb-20">
          <ScrollReveal>
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-6">
              Our Showcase
            </span>
          </ScrollReveal>

          <SplitText
            text="Our Work"
            className="heading-hero text-white mb-8"
            scrollTrigger={true}
            as="h1"
          />

          <ScrollReveal delay={0.3}>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We design and build fast, custom digital platforms tailored to rank #1 locally
              and turn daily online visitors into loyal clients.
            </p>
          </ScrollReveal>
        </section>

        {/* ── Filter Bar ── */}
        <motion.nav
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-start md:justify-center gap-6 md:gap-8 mb-16 overflow-x-auto scrollbar-none pb-3 border-b border-zinc-900/50"
        >
          {CATEGORIES.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="relative text-sm font-semibold transition-colors duration-200 cursor-pointer shrink-0 pb-2 group"
              >
                <span className={isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}>
                  {cat}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="portfolio-filter-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </motion.nav>

        {/* ── Projects Grid ── */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 text-zinc-500 text-sm">
            <div className="w-8 h-8 border-2 border-zinc-800 border-t-primary rounded-full animate-spin mb-4" />
            Loading projects…
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-32 text-zinc-500 text-sm border border-zinc-900 rounded-2xl bg-zinc-950/20">
            No projects found in this category.
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, idx) => {
                // Editorial layout spacing: alternate between aspect-video and tall aspect-square
                const isTall = idx % 3 === 1;
                const hasImage = !!(proj.images && proj.images.length > 0 || proj.image_url);
                const displayImage = proj.images && proj.images.length > 0 ? proj.images[0] : proj.image_url;

                return (
                  <motion.div
                    layout
                    key={proj.id}
                    layoutId={`project-card-${proj.id}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    onClick={() => handleSetActiveProj(proj)}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 border border-zinc-900 hover:border-primary/20 transition-all duration-500 ${
                      isTall ? 'md:aspect-[4/5]' : 'aspect-video'
                    }`}
                  >
                    {/* Visual Media wrapper */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      {hasImage ? (
                        <>
                          <img
                            src={displayImage}
                            alt={proj.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
                        </>
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${proj.bgGradient} opacity-30`} />
                      )}
                    </div>

                    {/* Card Content Overlay */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                      {/* Top: Category Tag */}
                      <div className="flex justify-between items-start">
                        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] bg-zinc-950/80 border border-zinc-800/80 px-3 py-1.5 rounded-full">
                          {proj.category}
                        </span>
                      </div>

                      {/* Bottom Details */}
                      <div className="flex items-end justify-between gap-4 mt-auto">
                        <div className="max-w-md">
                          <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-2">
                            {proj.title}
                          </h3>
                          <p className="text-zinc-400 text-xs md:text-sm line-clamp-2">
                            {proj.overview}
                          </p>
                        </div>

                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-[#050505]/60 backdrop-blur-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300 shrink-0">
                          <ArrowUpRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-45" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ── Project Detail Modal ── */}
        <AnimatePresence>
          {activeProj && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => handleSetActiveProj(null)}
                className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md"
              />

              {/* Modal Card wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-3xl bg-zinc-950 rounded-2xl border border-zinc-900 z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button floating absolute */}
                <button
                  onClick={() => handleSetActiveProj(null)}
                  className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-[#050505]/70 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer backdrop-blur-sm"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Media Presentation Container */}
                {activeProj.video_url ? (
                  <div className="w-full aspect-video overflow-hidden border-b border-zinc-900 bg-black">
                    {activeProj.video_url.includes('youtube.com') ||
                    activeProj.video_url.includes('youtu.be') ||
                    activeProj.video_url.includes('vimeo.com') ? (
                      <iframe
                        src={
                          activeProj.video_url.includes('watch?v=')
                            ? activeProj.video_url.replace('watch?v=', 'embed/')
                            : activeProj.video_url.includes('youtu.be/')
                            ? `https://www.youtube.com/embed/${activeProj.video_url.split('youtu.be/')[1]}`
                            : activeProj.video_url
                        }
                        className="w-full h-full border-0"
                        allowFullScreen
                        title={activeProj.title}
                      />
                    ) : (
                      <video
                        src={activeProj.video_url}
                        controls
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                ) : (activeProj.images && activeProj.images.length > 0) ||
                  activeProj.image_url ? (
                  <div className="relative w-full aspect-video overflow-hidden border-b border-zinc-900 bg-zinc-950">
                    {(() => {
                      const carouselImages =
                        activeProj.images && activeProj.images.length > 0
                          ? activeProj.images
                          : activeProj.image_url
                          ? [activeProj.image_url]
                          : [];

                      return (
                        <>
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={carouselIndex}
                              src={carouselImages[carouselIndex]}
                              alt={`${activeProj.title} screenshot ${carouselIndex + 1}`}
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                              className="w-full h-full object-cover"
                            />
                          </AnimatePresence>

                          {carouselImages.length > 1 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCarouselIndex((prev) =>
                                    prev === 0 ? carouselImages.length - 1 : prev - 1
                                  );
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer backdrop-blur-sm border border-white/5"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCarouselIndex((prev) =>
                                    prev === carouselImages.length - 1 ? 0 : prev + 1
                                  );
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer backdrop-blur-sm border border-white/5"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>

                              {/* Dot Nav */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                {carouselImages.map((_, i) => (
                                  <button
                                    key={i}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCarouselIndex(i);
                                    }}
                                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                                      carouselIndex === i
                                        ? 'w-6 bg-primary'
                                        : 'w-2 bg-white/40 hover:bg-white/60'
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
                ) : (
                  <div className={`w-full h-40 bg-gradient-to-br ${activeProj.bgGradient} border-b border-zinc-900`} />
                )}

                {/* Detail content box */}
                <div className="p-6 md:p-8">
                  {/* Meta data row */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                      {activeProj.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-semibold">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{activeProj.duration}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {activeProj.title}
                  </h2>

                  {/* Description overview */}
                  <div className="mb-8">
                    <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-3">
                      Project Overview
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {activeProj.desc}
                    </p>
                  </div>

                  {/* Dual Grid Goals & Outcomes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Goals */}
                    <div className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-800/80">
                      <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" /> Goals
                      </h4>
                      <ul className="space-y-3">
                        {activeProj.goals.map((g, i) => (
                          <li
                            key={i}
                            className="text-zinc-400 text-xs flex items-start gap-2.5 leading-relaxed"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
                      <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" /> Outcomes
                      </h4>
                      <ul className="space-y-3">
                        {activeProj.results.map((r, i) => (
                          <li
                            key={i}
                            className="text-zinc-300 text-xs flex items-start gap-2.5 leading-relaxed font-semibold"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-8">
                    <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-3">
                      Built With
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProj.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold bg-zinc-900/60 border border-zinc-800/80 px-3.5 py-1.5 rounded-full text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Toggle Container */}
                  {CASE_STUDIES[activeProj.id] && (
                    <div className="mb-8 border border-zinc-900 rounded-xl overflow-hidden bg-zinc-950">
                      <button
                        onClick={() => setCaseStudyOpen(!caseStudyOpen)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-zinc-900/50 transition-colors"
                      >
                        <span className="text-white text-sm font-bold flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          View Case Study Analysis
                        </span>
                        <motion.div
                          animate={{ rotate: caseStudyOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown className="h-4 w-4 text-zinc-400" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {caseStudyOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 border-t border-zinc-900 pt-5 space-y-5">
                              <div>
                                <h5 className="text-primary text-[10px] font-bold uppercase tracking-[0.15em] mb-2">
                                  The Challenge
                                </h5>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                  {CASE_STUDIES[activeProj.id].challenge}
                                </p>
                              </div>
                              <div>
                                <h5 className="text-primary text-[10px] font-bold uppercase tracking-[0.15em] mb-2">
                                  Our Approach
                                </h5>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                  {CASE_STUDIES[activeProj.id].approach}
                                </p>
                              </div>
                              <div>
                                <h5 className="text-primary text-[10px] font-bold uppercase tracking-[0.15em] mb-2">
                                  Business Impact
                                </h5>
                                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                                  {CASE_STUDIES[activeProj.id].impact}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Modal Footer CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-end border-t border-zinc-900 pt-6">
                    {activeProj.project_url && (
                      <a
                        href={activeProj.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-colors text-center"
                      >
                        <Globe className="h-4 w-4" /> Live Preview
                      </a>
                    )}
                    <button
                      onClick={() => {
                        handleSetActiveProj(null);
                        handleBook();
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      Inquire for Similar project <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ── Bottom Call To Action ── */}
        <ScrollReveal>
          <section className="mt-32 text-center max-w-2xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to join this list?
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
              Every project above started with a single conversation. Tell us about
              your business and we&apos;ll craft a website that drives real results.
            </p>
            <button
              onClick={handleBook}
              className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
