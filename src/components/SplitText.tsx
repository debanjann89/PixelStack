'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  /** If true, animates on scroll. If false, animates on mount. */
  scrollTrigger?: boolean;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Stagger time between each character (seconds) */
  stagger?: number;
  /** Tag to render: h1, h2, p, span, etc. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  /** Optional highlight word(s) that get emerald green color */
  highlightWords?: string[];
}

/**
 * Character-split entrance animation.
 * Text splits into individual characters that stagger in from below with slight rotation.
 */
export default function SplitText({
  text,
  className = '',
  scrollTrigger = false,
  delay = 0,
  stagger = 0.03,
  as: Tag = 'h1',
  highlightWords = [],
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll<HTMLSpanElement>('.split-char');

    gsap.set(chars, {
      y: 80,
      opacity: 0,
      rotateX: -40,
    });

    const animConfig = {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 0.8,
      stagger: stagger,
      ease: 'power3.out',
      delay: delay,
    };

    if (scrollTrigger) {
      gsap.to(chars, {
        ...animConfig,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    } else {
      gsap.to(chars, animConfig);
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === container) st.kill();
      });
    };
  }, [text, scrollTrigger, delay, stagger]);

  // Split text into words, then characters
  const words = text.split(' ');
  const highlightSet = new Set(highlightWords.map(w => w.toLowerCase()));

  return (
    <div ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      <Tag className="leading-[0.95] tracking-tight">
        {words.map((word, wi) => {
          const isHighlighted = highlightSet.has(word.toLowerCase());
          return (
            <span
              key={`word-${wi}`}
              className="inline-block mr-[0.25em] whitespace-nowrap"
            >
              {word.split('').map((char, ci) => (
                <span
                  key={`char-${wi}-${ci}`}
                  className={`split-char inline-block ${
                    isHighlighted ? 'text-primary-light' : ''
                  }`}
                  style={{
                    transformOrigin: 'center bottom',
                    ...(isHighlighted
                      ? { textShadow: '0 0 40px rgba(16, 185, 129, 0.4)' }
                      : {}),
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
