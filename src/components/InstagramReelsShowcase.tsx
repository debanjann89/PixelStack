'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, X } from 'lucide-react';
import { REELS_DATA, INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL, ReelItem } from '@/data/reels';
import { getReels } from '@/app/actions';

export default function InstagramReelsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [reels, setReels] = useState<ReelItem[]>(REELS_DATA);
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);

  useEffect(() => {
    async function loadReels() {
      try {
        if (typeof window !== 'undefined') {
          const local = localStorage.getItem('dnb_custom_reels');
          if (local) {
            try {
              const parsed = JSON.parse(local);
              if (Array.isArray(parsed) && parsed.length > 0) {
                setReels(parsed);
                return;
              }
            } catch {}
          }
        }
        const data = await getReels();
        if (data && data.length > 0) {
          setReels(data);
        }
      } catch {
        // Fallback already initialized with REELS_DATA
      }
    }
    loadReels();
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-b border-zinc-900/80">
      {/* Background ambient lighting — Pure Emerald / Cyber Dark Theme */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                Behind The Build · Instagram Reels
              </span>
            </div>
            <h2 className="heading-xl text-white tracking-tight">
              Watch How We Engineer <span className="text-primary">Digital Growth</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-3 leading-relaxed">
              Snappy video breakdowns, client website redesigns, speed audits, and conversion secrets from our studio.
            </p>
          </div>

          {/* Social Follow Action + Carousel Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-primary/50 text-zinc-300 hover:text-white text-xs font-semibold tracking-wide transition-all group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary group-hover:scale-110 transition-transform">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Follow @{INSTAGRAM_HANDLE}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-primary transition-colors" />
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 9:16 Vertical Reels Track — Emerald Green & Dark Aesthetic */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start"
            >
              <div
                onClick={() => setSelectedReel(reel)}
                className="group relative h-[480px] rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/70 hover:border-primary/40 bg-zinc-950 transition-all duration-500 shadow-xl shadow-black/70 flex flex-col justify-between p-6"
              >
                {/* Custom Thumbnail Image if available */}
                {(reel.thumbnailUrl || reel.previewUrl) && (
                  <img
                    src={reel.thumbnailUrl || reel.previewUrl}
                    alt={reel.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Emerald Background Glow & Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-primary/10 via-zinc-950/85 to-[#020202] z-0 transition-opacity duration-500 ${
                    reel.thumbnailUrl || reel.previewUrl ? 'opacity-80 group-hover:opacity-70' : 'opacity-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0" />
                <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

                {/* Top: Category Tag & Views Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-primary">
                    {reel.category}
                  </span>
                  {reel.viewsBadge && (
                    <span className="text-[10px] font-semibold text-zinc-300 flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/80 px-2.5 py-1 rounded-full">
                      <Sparkles className="w-3 h-3 text-primary" />
                      {reel.viewsBadge}
                    </span>
                  )}
                </div>

                {/* Center: Play Button */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-lg shadow-primary/25">
                        <Play className="w-5 h-5 fill-black ml-0.5" />
                      </div>
                    </div>
                    {/* Pulsing ring on hover */}
                    <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-0 group-hover:opacity-40 transition-opacity" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mt-3 group-hover:text-primary transition-colors">
                    Watch Reel
                  </span>
                </div>

                {/* Bottom Details & Meta */}
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {reel.topics && reel.topics.map((t) => (
                      <span key={t} className="text-[9px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-2 py-0.5 rounded-md">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white text-base font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-2">
                    {reel.title}
                  </h3>

                  <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                    {reel.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-800/80 text-xs">
                    <span className="text-zinc-500 text-[11px] flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      @{INSTAGRAM_HANDLE}
                    </span>
                    <span className="text-primary text-[11px] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Open Reel <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal / Reel Action Lightbox */}
      <AnimatePresence>
        {selectedReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReel(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-black p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedReel(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Tag & Title */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                  {selectedReel.category}
                </span>
                <span className="text-zinc-500 text-xs font-medium">@{INSTAGRAM_HANDLE}</span>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug mb-3">
                {selectedReel.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {selectedReel.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedReel.topics && selectedReel.topics.map((t) => (
                  <span key={t} className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-lg">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Direct Actions — Pure Green / Theme Matched */}
              <div className="flex flex-col gap-3">
                <a
                  href={selectedReel.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-dark text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-black">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Watch & Like on Instagram
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedReel(null)}
                  className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Back to Website
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
