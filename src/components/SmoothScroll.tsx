'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only run custom smooth scroll on desktop with mouse/trackpad.
    // On touch devices (phones/tablets), use native 120Hz momentum scrolling.
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.75, // Snappy & immediate response (eliminates floaty lag)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 0, // Never hijack touch
    });

    lenisRef.current = lenis;

    // Sync with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
