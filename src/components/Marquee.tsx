'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  /** Speed in seconds for one full loop */
  speed?: number;
  /** Reverse direction */
  reverse?: boolean;
  /** Pause on hover */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Infinite horizontal scrolling marquee.
 * CSS-only animation for maximum performance.
 * Content is duplicated to create seamless loop.
 */
export default function Marquee({
  children,
  speed = 30,
  reverse = false,
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ ['--marquee-duration' as string]: `${speed}s` }}
    >
      <div
        className={`${
          reverse ? 'marquee-track-reverse' : 'marquee-track'
        } ${pauseOnHover ? '' : '[animation-play-state:running!important]'}`}
      >
        {/* Original content */}
        <div className="flex shrink-0 items-center">{children}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
