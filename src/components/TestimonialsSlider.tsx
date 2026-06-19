'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
  color: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Amit Verma',
    role: 'Chief Orthodontist & Owner',
    company: 'Apex Dental Clinic',
    content: 'PixelStack transformed our clinic’s online presence. The consultation booking integration works flawlessly and patients constantly compliment our modern design. Truly worth every rupee!',
    rating: 5,
    initials: 'AV',
    color: 'from-emerald-600 to-teal-500',
  },
  {
    id: 2,
    name: 'Rajesh Mehta',
    role: 'General Manager',
    company: 'Grand Palace Hotel',
    content: 'We saw a 40% increase in direct bookings within 2 months of launching the new site. The speed optimization has done wonders for our Google rankings. Professional, reliable, and technically unmatched.',
    rating: 5,
    initials: 'RM',
    color: 'from-primary to-secondary',
  },
  {
    id: 3,
    name: 'Alex Riviera',
    role: 'Operations Director',
    company: 'Riviera Restaurant Group',
    content: 'The custom website and digital branding package exceeded our expectations. Debanjan is a wizard with UI and Next.js, and Banashree mapped a content strategy that brought us thousands of new visitors.',
    rating: 5,
    initials: 'AR',
    color: 'from-emerald-600 to-teal-500',
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'Managing Partner',
    company: 'Jenkins & Associates Law',
    content: 'A top-tier design agency. They understand corporate branding and delivered an enterprise-grade site that immediately sets us apart. Our inquiries have increased significantly.',
    rating: 5,
    initials: 'SJ',
    color: 'from-teal-600 to-emerald-400',
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10 px-4">
      {/* Testimonial card container */}
      <div className="relative min-h-[300px] md:min-h-[260px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full glass-card rounded-2xl p-6 md:p-10 border border-white/5 relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center"
          >
            {/* User Initials Avatar */}
            <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${current.color} flex items-center justify-center shrink-0 shadow-lg`}>
              <span className="text-xl font-bold text-white tracking-wider">{current.initials}</span>
            </div>

            {/* Content info */}
            <div className="flex-1">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Message */}
              <p className="text-zinc-300 text-base md:text-lg italic leading-relaxed mb-6 font-medium">
                "{current.content}"
              </p>

              {/* Author Meta */}
              <div>
                <h5 className="text-white text-base font-bold">{current.name}</h5>
                <p className="text-zinc-500 text-xs mt-0.5">
                  {current.role} • <span className="text-primary-light font-medium">{current.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-white/5 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          aria-label="Previous Review"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? 'w-6 bg-primary' : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-white/5 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          aria-label="Next Review"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
