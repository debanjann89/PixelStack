'use client';

import { Star } from 'lucide-react';
import Marquee from '@/components/Marquee';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Amit Verma',
    role: 'Chief Orthodontist & Owner',
    company: 'Apex Dental Clinic',
    content: 'PixelStack transformed our clinic\'s online presence. The consultation booking integration works flawlessly and patients constantly compliment our modern design. Truly worth every rupee!',
    rating: 5,
    initials: 'AV',
  },
  {
    id: 2,
    name: 'Rajesh Mehta',
    role: 'General Manager',
    company: 'Grand Palace Hotel',
    content: 'We saw a 40% increase in direct bookings within 2 months of launching the new site. The speed optimization has done wonders for our Google rankings. Professional, reliable, and technically unmatched.',
    rating: 5,
    initials: 'RM',
  },
  {
    id: 3,
    name: 'Alex Riviera',
    role: 'Operations Director',
    company: 'Riviera Restaurant Group',
    content: 'The custom website and digital branding package exceeded our expectations. Debanjan is a wizard with UI and Next.js, and Banashree mapped a content strategy that brought us thousands of new visitors.',
    rating: 5,
    initials: 'AR',
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'Managing Partner',
    company: 'Jenkins & Associates Law',
    content: 'A top-tier design agency. They understand corporate branding and delivered an enterprise-grade site that immediately sets us apart. Our inquiries have increased significantly.',
    rating: 5,
    initials: 'SJ',
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-[400px] md:w-[480px] shrink-0 mx-4">
      <div className="card-dark p-6 md:p-8 h-full">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-primary tracking-wider">
              {testimonial.initials}
            </span>
          </div>
          <div>
            <h5 className="text-white text-sm font-semibold">{testimonial.name}</h5>
            <p className="text-zinc-500 text-xs">
              {testimonial.role} · <span className="text-primary/70">{testimonial.company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSlider() {
  return (
    <div className="w-full overflow-hidden py-4">
      <Marquee speed={40} pauseOnHover>
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </Marquee>
    </div>
  );
}
