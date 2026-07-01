'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  Compass,
  Heart,
  TrendingUp,
  Award,
  Globe,
  Mail,
  CheckCircle,
  Zap,
  Lock,
  ArrowRight
} from 'lucide-react';

// Counter component for stats
function AboutCounter({ value, suffix = '', duration = 1.5 }: { value: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value.replace(/\D/g, ''));
    let start = 0;
    const totalSteps = 40;
    const stepDuration = (duration * 1000) / totalSteps;

    let timer = setInterval(() => {
      start += Math.ceil(num / totalSteps);
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono font-bold text-4xl md:text-5xl text-white tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

const FOUNDERS = [
  {
    name: 'Debanjan Amin',
    role: 'Co-Founder & Lead Developer',
    bio: 'Debanjan manages project architecture, development, deployment, and performance optimization. He specializes in creating highly polished, responsive Next.js web applications that deliver speeds under 500ms.',
    skills: ['Next.js', 'React', 'TypeScript', 'Full Stack', 'SEO Foundations', 'Perf Tuning', 'UI Dev'],
    social: {
      github: 'https://github.com/debanjanamin',
      linkedin: 'https://linkedin.com/in/debanjanamin',
      email: 'mailto:dabdigitalofficials@gmail.com'
    },
    avatarColor: 'from-primary-dark to-secondary-dark',
    initials: 'DA'
  },
  {
    name: 'Banashree Das',
    role: 'Co-Founder & Digital Growth Specialist',
    bio: 'Banashree leads client communication, digital marketing planning, branding guidelines, and social media content strategies. She helps businesses map their products to attract and engage regional audiences.',
    skills: ['Social Marketing', 'Content Strategy', 'Digital Marketing', 'Brand Positioning', 'Client Comm', 'Web Planning'],
    social: {
      github: '#',
      linkedin: 'https://linkedin.com/in/banashreedas',
      email: 'mailto:dabdigitalofficials@gmail.com'
    },
    avatarColor: 'from-primary to-secondary',
    initials: 'BD'
  }
];

const VALUES = [
  { icon: ShieldCheck, title: 'Quality', desc: 'We do not build minimum viable products. Every site is tailored to match enterprise-level standards.' },
  { icon: Zap, title: 'Innovation', desc: 'We leverage cutting-edge tech stacks like Next.js 15, React, and Server Actions to deploy modern UI.' },
  { icon: Compass, title: 'Transparency', desc: 'Direct communications with the developers. Upfront pricing, clear timelines, and zero hidden costs.' },
  { icon: Heart, title: 'Reliability', desc: 'Every website has built-in code backups, high-end security practices, and post-launch health audits.' },
  { icon: TrendingUp, title: 'Growth', desc: 'We measure success by conversions. Our primary goal is to turn your visitors into customers.' }
];

export default function AboutPage() {
  const router = useRouter();

  const handleBook = () => {
    router.push('/about?consultation=open');
  };

  return (
    <div className="relative min-h-screen pt-10 pb-20">
      
      {/* Background Grids */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3 animate-pulse">About D.A.B Digitals</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Building Modern <br />
            Digital Experiences
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            D.A.B Digitals is a modern digital agency helping businesses build an authoritative online presence through premium website development, UI/UX design, search foundations, and digital growth planning.
          </p>
        </div>

        {/* Brand Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 items-center">
          <div className="md:col-span-7 text-left space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Our Story</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              D.A.B Digitals was founded by **Debanjan Amin** and **Banashree Das** to bridge the gap between simple visual templates and high-performance business applications. We saw that many business owners spent money on slow, generic freelancer layouts that failed to build trust or generate client leads.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We set out to create a dedicated agency that focuses exclusively on custom engineering. By combining modern React frameworks (Next.js 15), precise UI design systems, and results-focused growth strategies, we deliver web assets that look premium, load instantly, and drive growth.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] text-primary-light font-mono block uppercase tracking-wider mb-2">Our Mission</span>
              <h3 className="text-lg font-bold text-white mb-2">Grow Businesses Through Tech</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                To help businesses grow through modern technology and thoughtful digital experiences that establish trust and authority.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] text-primary-light font-mono block uppercase tracking-wider mb-2">Our Vision</span>
              <h3 className="text-lg font-bold text-white mb-2">The Trusted Digital Partner</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                To become a trusted digital partner for businesses looking to scale online, delivering premium results comparable to top-tier agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-24 text-left">
          <div className="mb-12">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Core Principles</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">The Values We Live By</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {VALUES.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div key={idx} className="glass-card p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div className="w-9 h-9 rounded-lg bg-zinc-950 flex items-center justify-center mb-4 border border-white/5">
                    <ValIcon className="h-4.5 w-4.5 text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2">{val.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24 text-left">
          <div className="mb-12">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Founders</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Meet The Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOUNDERS.map((founder, idx) => (
              <div key={idx} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-6 items-start">
                
                {/* Visual Avatar */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${founder.avatarColor} flex items-center justify-center shrink-0 shadow-lg border border-white/10`}>
                  <span className="text-2xl font-bold text-white tracking-wider font-mono">
                    {founder.initials}
                  </span>
                </div>

                {/* Profile detail */}
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                    <span className="text-xs text-primary-light font-semibold">{founder.role}</span>
                  </div>
                  
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                    {founder.bio}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {founder.skills.map((skill) => (
                      <span key={skill} className="text-[10px] bg-zinc-950 border border-white/5 px-2 py-0.5 rounded text-zinc-500 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Handles */}
                  <div className="flex items-center gap-4 border-t border-zinc-900 pt-4">
                    {founder.social.github !== '#' && (
                      <a href={founder.social.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="GitHub">
                        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                    )}
                    <a href={founder.social.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
                      <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a href={founder.social.email} className="text-zinc-500 hover:text-white transition-colors">
                      <Mail className="h-4.5 w-4.5" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-zinc-950/40 p-8 md:p-12 rounded-3xl border border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
          <div>
            <AboutCounter value="48" suffix="+" />
            <div className="text-zinc-500 text-xs md:text-sm mt-2 font-medium">Projects Completed</div>
          </div>
          <div>
            <AboutCounter value="32" suffix="+" />
            <div className="text-zinc-500 text-xs md:text-sm mt-2 font-medium">Happy Clients</div>
          </div>
          <div>
            <AboutCounter value="12" suffix="+" />
            <div className="text-zinc-500 text-xs md:text-sm mt-2 font-medium">Industries Served</div>
          </div>
          <div>
            <AboutCounter value="45" suffix="+" />
            <div className="text-zinc-500 text-xs md:text-sm mt-2 font-medium">Websites Delivered</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-8">
          <button
            onClick={handleBook}
            className="px-8 py-4 bg-white text-black font-semibold rounded-xl text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            Start Your Project Journey <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
