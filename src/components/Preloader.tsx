'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check if user already saw preloader in this session
    try {
      if (sessionStorage.getItem('dab_preloaded')) {
        return;
      }
    } catch {
      // sessionStorage unavailable
    }

    setIsLoading(true);

    // Fast, crisp entrance: 0 → 100 in ~400ms
    const duration = 400;
    const steps = 15;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 100 / steps;
      if (current >= 100) {
        setCount(100);
        clearInterval(timer);
        try {
          sessionStorage.setItem('dab_preloaded', 'true');
        } catch {}
        setTimeout(() => setIsLoading(false), 150);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
        >
          {/* Counter */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-primary-light tabular-nums"
            style={{ fontFamily: 'var(--font-plus-jakarta), system-ui' }}
          >
            {count}
          </motion.span>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-zinc-900 mt-6 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Brand name */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-zinc-600 text-xs font-medium tracking-[0.3em] uppercase"
          >
            D&B Digitals
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
