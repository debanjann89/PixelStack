'use client';

import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const INSTAGRAM_HANDLE = 'dnbdigitals';
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/dnbdigitals/';
const ELFSIGHT_APP_ID = '3be93e15-7f61-4be6-9378-62a5664b5836';

export default function InstagramReelsShowcase() {
  useEffect(() => {
    // Load Elfsight platform script once
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="elfsightcdn"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative z-10 py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-b border-zinc-900/80">
      {/* Background ambient lighting — Emerald / Cyber Dark Theme */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                Behind The Build · @{INSTAGRAM_HANDLE}
              </span>
            </div>
            <h2 className="heading-xl text-white tracking-tight">
              Watch How We Engineer <span className="text-primary">Digital Growth</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-3 leading-relaxed">
              Live from our studio — client redesigns, speed audits, conversion breakdowns, and behind-the-scenes builds. Straight from our Instagram.
            </p>
          </div>

          {/* Follow CTA */}
          <div className="shrink-0">
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
          </div>
        </div>

        {/* Elfsight Instagram Feed Widget */}
        <div className="elfsight-instagram-wrapper rounded-2xl overflow-hidden">
          <div
            className={`elfsight-app-${ELFSIGHT_APP_ID}`}
            data-elfsight-app-lazy
          />
        </div>
      </div>

      {/* Custom CSS overrides to blend Elfsight into dark theme */}
      <style jsx global>{`
        /* Force dark background on Elfsight container */
        .elfsight-instagram-wrapper [class*="eapps-instagram"] {
          background: transparent !important;
        }

        /* Remove any white backgrounds from inner elements */
        .elfsight-instagram-wrapper iframe {
          color-scheme: dark;
        }
      `}</style>
    </section>
  );
}
