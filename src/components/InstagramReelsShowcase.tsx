'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, X, Heart, MessageCircle, Share2 } from 'lucide-react';
import { REELS_DATA, INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL, ReelItem } from '@/data/reels';

export default function InstagramReelsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 py-24 md:py-32 bg-black overflow-hidden border-t border-b border-zinc-900/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Watch How We Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-light to-emerald-400">Digital Growth</span>
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
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-orange-500/20 border border-pink-500/30 hover:border-pink-500/60 text-white text-xs font-semibold tracking-wide transition-all group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Follow @{INSTAGRAM_HANDLE}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 9:16 Vertical Reels Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REELS_DATA.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start"
            >
              <div
                onClick={() => setSelectedReel(reel)}
                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-zinc-800/80 hover:border-primary/50 bg-[#080808] transition-all duration-500 shadow-xl shadow-black/60 flex flex-col justify-between p-6"
              >
                {/* Dynamic Gradient / Mock Video Canvas */}
                <div className={`absolute inset-0 bg-gradient-to-b ${reel.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0" />
                <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

                {/* Top Bar (Badge & Duration) */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 border border-white/10 text-primary backdrop-blur-md">
                    {reel.category}
                  </span>
                  {reel.viewsBadge && (
                    <span className="text-[10px] font-semibold text-zinc-300 flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-full backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {reel.viewsBadge}
                    </span>
                  )}
                </div>

                {/* Center Animated Play Orb */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-lg shadow-primary/30">
                        <Play className="w-5 h-5 fill-black ml-0.5" />
                      </div>
                    </div>
                    {/* Pulsing ring on hover */}
                    <div className="absolute inset-0 rounded-full border border-primary/60 animate-ping opacity-0 group-hover:opacity-40 transition-opacity" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mt-3 group-hover:text-white transition-colors">
                    Watch Reel
                  </span>
                </div>

                {/* Bottom Details & Meta */}
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {reel.topics.map((t) => (
                      <span key={t} className="text-[9px] font-medium text-zinc-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white text-base font-bold leading-snug line-clamp-2 group-hover:text-primary-light transition-colors mb-2">
                    {reel.title}
                  </h3>

                  <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                    {reel.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10 text-xs">
                    <span className="text-zinc-500 text-[11px] flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                      @{INSTAGRAM_HANDLE}
                    </span>
                    <span className="text-primary text-[11px] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
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
              className="relative z-10 w-full max-w-md bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-black p-6 sm:p-8"
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
                <span className="text-zinc-500 text-xs">@{INSTAGRAM_HANDLE}</span>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug mb-3">
                {selectedReel.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {selectedReel.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedReel.topics.map((t) => (
                  <span key={t} className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-lg">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Direct Actions */}
              <div className="flex flex-col gap-3">
                <a
                  href={selectedReel.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Watch & Like on Instagram
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedReel(null)}
                  className="w-full py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
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
