'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Code,
  CheckCircle2,
  X,
  ArrowRight,
  TrendingUp,
  Globe,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { getProjects } from '@/app/actions';

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

const CATEGORIES = ['All', 'Restaurants', 'Law Firms', 'Dental Clinics', 'Hotels', 'Businesses'] as const;

export default function PortfolioPage() {
  const [filter, setFilter] = useState<typeof CATEGORIES[number]>('All');
  const [activeProj, setActiveProj] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleSetActiveProj = (proj: Project | null) => {
    setActiveProj(proj);
    setCarouselIndex(0);
  };

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjectsList(data);
      setLoading(false);
    };
    loadProjects();
  }, []);

  const filteredProjects = projectsList.filter(
    (p) => filter === 'All' || p.category === filter
  );

  const handleBook = () => {
    router.push('/portfolio?consultation=open');
  };

  return (
    <div className="relative min-h-screen pt-10 pb-20">
      
      {/* Background grids */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-light text-xs font-semibold uppercase tracking-widest block mb-3 animate-pulse">Our Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Premium Work Crafted <br />
            To Turn Profit
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            We focus on delivering high-end custom web systems that establish authority, build user trust, and drive numeric conversions.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-row lg:flex-wrap items-center justify-start lg:justify-center gap-2 mb-12 border-b border-zinc-900 pb-6 overflow-x-auto lg:overflow-x-visible scrollbar-none max-w-full px-2 lg:px-0">
          {CATEGORIES.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-primary text-white shadow-lg shadow-primary/10'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-zinc-500 font-mono text-xs">
            <span className="h-6 w-6 rounded-full border-t-2 border-r-2 border-primary border-b-transparent border-l-transparent animate-spin mb-4" />
            Compiling Portfolio Projects...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-zinc-500 font-mono text-xs">
            No projects found in this category.
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  key={proj.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleSetActiveProj(proj)}
                  className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full border border-white/5 hover:border-white/10"
                >
                  {/* Visual Header */}
                  {(proj.images && proj.images.length > 0) || proj.image_url ? (
                    <div className="aspect-[4/3] relative overflow-hidden border-b border-white/5 group-hover:scale-[1.02] transition-transform duration-300">
                      <img src={proj.images && proj.images.length > 0 ? proj.images[0] : proj.image_url} alt={proj.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/45 flex items-end p-4">
                        <span className="text-[9px] bg-black/60 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider font-bold text-zinc-200">
                          {proj.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className={`aspect-[4/3] bg-gradient-to-br ${proj.bgGradient} relative flex items-center justify-center p-8 border-b border-white/5`}>
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
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Details Dialog Modal */}
        <AnimatePresence>
          {activeProj && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => handleSetActiveProj(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Container */}
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
                  <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Duration: {activeProj.duration}</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeProj.title}</h2>
                
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
                                {carouselImages.map((_, idx) => (
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

                {/* Backstory */}
                <div className="mb-6">
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">Project Overview</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">{activeProj.desc}</p>
                </div>

                {/* Goals & Results columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  
                  {/* Goals */}
                  <div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary-light" /> Project Goals
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProj.goals.map((goal, i) => (
                        <li key={i} className="text-zinc-400 text-xs flex items-start gap-2 leading-normal">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-zinc-950 p-4 rounded-xl border border-emerald-500/10">
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-400" /> Final Outcome
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProj.results.map((res, i) => (
                        <li key={i} className="text-zinc-400 text-xs flex items-start gap-2 leading-normal">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-zinc-300 font-semibold">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Tech chips */}
                <div className="mb-8">
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProj.tech.map((t) => (
                      <span key={t} className="text-xs bg-zinc-900 border border-white/5 px-3 py-1.5 rounded text-zinc-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom line action */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-zinc-900 pt-6">
                  <span className="text-xs text-zinc-500 font-mono">Projects average starting value: ₹50,000+</span>
                  <div className="flex gap-3 w-full sm:w-auto">
                    {activeProj.project_url && (
                      <a
                        href={activeProj.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial px-5 py-2.5 bg-zinc-900 text-zinc-200 hover:text-white border border-white/5 hover:border-white/10 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Globe className="h-3.5 w-3.5" /> Visit Live Website
                      </a>
                    )}
                    <button
                      onClick={() => {
                        handleSetActiveProj(null);
                        handleBook();
                      }}
                      className="flex-1 sm:flex-initial px-5 py-2.5 bg-white text-black font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 hover:bg-zinc-200 transition-colors cursor-pointer"
                    >
                      Build A Similar Website <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
