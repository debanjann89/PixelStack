'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  triggerStart?: string;
  triggerEnd?: string;
}

/**
 * Word-by-word scroll reveal.
 * As the user scrolls, each word transitions from dim (opacity 0.15) to bright (opacity 1).
 * The currently active word glows emerald green momentarily.
 */
export default function TextReveal({
  text,
  className = '',
  triggerStart = 'top 80%',
  triggerEnd = 'bottom 20%',
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll<HTMLSpanElement>('.word');

    gsap.set(words, { opacity: 0.15 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: triggerStart,
        end: triggerEnd,
        scrub: 0.5,
      },
    });

    words.forEach((word, i) => {
      tl.to(
        word,
        {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        },
        i * 0.05
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === container) st.kill();
      });
    };
  }, [text, triggerStart, triggerEnd]);

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={className}>
      <p className="heading-lg md:heading-xl leading-tight">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="word inline-block mr-[0.3em] transition-colors duration-300"
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
