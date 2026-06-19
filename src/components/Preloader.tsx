'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('Establishing secure connection...');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 1500; // Exactly 1.5 seconds total loading time
    const intervalTime = 15; // Ticks every 15ms for smooth increments
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsComplete(true);
        }, 200); // Small buffer for visual resolution
      }
      setProgress(Math.floor(currentProgress));

      // Quick-firing premium steps within 1.5s
      if (currentProgress < 20) {
        setStage('Initializing framework...');
      } else if (currentProgress < 40) {
        setStage('Compiling design system...');
      } else if (currentProgress < 65) {
        setStage('Rendering dynamic UI nodes...');
      } else if (currentProgress < 85) {
        setStage('Optimizing SEO indexes...');
      } else {
        setStage('System online.');
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle grid with slow scaling */}
          <motion.div 
            initial={{ scale: 1.05, opacity: 0.1 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 grid-bg pointer-events-none"
          />

          {/* Ambient Glowing Neon Spots */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative w-full max-w-sm px-8 flex flex-col items-center">
            
            {/* Logo container with floating micro-animations */}
            <motion.div 
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-10"
            >
              {/* Ripple circles radiating outward */}
              <motion.div
                animate={{ scale: [1, 1.4, 1.6], opacity: [0.4, 0.15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-2xl border border-primary/20 blur-[2px]"
              />
              <motion.div
                animate={{ scale: [1, 1.25, 1.4], opacity: [0.3, 0.1, 0] }}
                transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-2xl border border-secondary/20 blur-[2px]"
              />

              {/* Central Glowing Shield */}
              <div className="w-20 h-20 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center justify-center shadow-2xl relative z-10 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 rounded-2xl" />
                
                {/* Brand Icon (P Symbol) */}
                <motion.svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]"
                >
                  <motion.path
                    d="M4 20V4H13C16.866 4 20 7.13401 20 11C20 14.866 16.866 18 13 18H8V20H4ZM8 14H13C14.6569 14 16 12.6569 16 11C16 9.34315 14.6569 8 13 8H8V14Z"
                    fill="currentColor"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.svg>
              </div>
            </motion.div>

            {/* Brand Title */}
            <div className="text-center mb-8">
              <motion.h2 
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.4em", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-base font-extrabold tracking-[0.4em] text-white uppercase font-mono pl-[0.4em]"
              >
                Pixel<span className="text-primary-light">Stack</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-[8px] text-zinc-400 font-mono tracking-[0.6em] uppercase mt-2 pl-[0.6em]"
              >
                Creative Development
              </motion.p>
            </div>

            {/* Tech-Style Loading Percentage */}
            <div className="mb-4 font-mono text-xs font-bold text-primary-light drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] bg-primary/5 border border-primary/10 px-3 py-1 rounded-md">
              [ <span className="text-white">{String(progress).padStart(3, '0')}%</span> ]
            </div>

            {/* Glowing progress line wrapper */}
            <div className="w-full relative">
              {/* Cyber brackets */}
              <div className="absolute -left-3 -top-[5px] h-[16px] w-[5px] border-l border-t border-b border-zinc-800" />
              <div className="absolute -right-3 -top-[5px] h-[16px] w-[5px] border-r border-t border-b border-zinc-800" />
              
              <div className="w-full bg-zinc-950 border border-zinc-900/80 rounded-full h-[6px] overflow-hidden p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-light via-secondary to-primary rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Stage / Status bar */}
            <div className="mt-4 font-mono text-[9px] text-zinc-500 tracking-wider h-4 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-ping" />
              <span>{stage}</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
