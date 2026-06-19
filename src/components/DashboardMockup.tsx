'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight, BarChart2, CheckCircle2, ShieldCheck, Globe, Zap } from 'lucide-react';

export default function DashboardMockup() {
  // Motion values for tracking cursor position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to 3D rotation angles (-10deg to 10deg)
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-500, 500], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate cursor distance from center of the card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full mt-8">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
        className="relative w-full max-w-5xl mx-auto h-auto pb-6 md:pb-0 md:aspect-[16/9] rounded-2xl border border-white/10 bg-zinc-950/80 p-3 md:p-6 shadow-2xl backdrop-blur-3xl overflow-visible group cursor-pointer"
      >
        
        {/* Decorative gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Main Window Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-4 text-xs font-mono text-zinc-500 bg-zinc-900/80 px-3 py-1 rounded-full border border-white/5">
              pixelstack.agency/studio
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-2 rounded bg-zinc-800" />
            <div className="w-5 h-5 rounded-full bg-zinc-800" />
          </div>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-12 gap-4 h-auto md:h-[90%]">
          
          {/* Sidebar */}
          <div className="hidden md:flex col-span-2 flex-col gap-3 pr-2">
            <div className="w-full h-8 rounded-lg bg-zinc-900 border border-white/5 animate-pulse" />
            <div className="w-5/6 h-6 rounded-lg bg-zinc-900/60" />
            <div className="w-4/5 h-6 rounded-lg bg-zinc-900/60" />
            <div className="w-3/4 h-6 rounded-lg bg-zinc-900/60" />
            <div className="w-5/6 h-6 rounded-lg bg-zinc-900/60" />
            <div className="mt-auto w-full h-12 rounded-lg bg-gradient-to-r from-primary-dark/20 to-secondary-dark/20 border border-white/5 p-2 flex items-center justify-between">
              <div className="w-8 h-2 rounded bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
          </div>

          {/* Main Panel */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
            
            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-medium">Conversion Rate</span>
                  <span className="text-xs text-primary-light flex items-center font-mono">
                    +14.2% <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">3.84%</div>
                <div className="w-full h-12 mt-4 flex items-end gap-1">
                  {[30, 45, 35, 60, 50, 80, 65, 95, 75, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 0.8 }}
                      className="flex-1 bg-gradient-to-t from-primary/50 to-primary-light rounded-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-medium">Page Velocity</span>
                  <span className="text-xs text-primary-light flex items-center font-mono">
                    LCP <Zap className="h-3 w-3 fill-primary-light/20" />
                  </span>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">0.48s</div>
                <div className="text-xs text-zinc-500 mt-4 flex items-center gap-1.5 font-mono">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Excellent (99/100 Mobile)
                </div>
              </div>
            </div>

            {/* Project Showcase Panel */}
            <div className="glass-card p-4 rounded-xl flex-1 flex flex-col justify-between min-h-[160px]">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <div className="text-xs font-medium text-white flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-primary-light" /> Studio Deployment Status
                </div>
                <span className="text-[10px] bg-zinc-900 border border-white/5 px-2 py-0.5 rounded text-zinc-400 font-mono">
                  v15.5-production
                </span>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-primary-light" /> UI Layout Rendering
                  </span>
                  <span className="text-zinc-500 font-mono">Completed in 12ms</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-primary-light" /> Next-Gen Image Optimization
                  </span>
                  <span className="text-zinc-500 font-mono">Compressed -72%</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-primary-light" /> Schema & SEO Structuring
                  </span>
                  <span className="text-zinc-500 font-mono">Indexing Ready</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between bg-zinc-950 p-2.5 rounded-lg border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 text-primary-light" />
                  </div>
                  <div>
                    <div className="text-xs text-white font-medium">SSL & DNS Secure</div>
                    <div className="text-[10px] text-zinc-500">Global Edge Network</div>
                  </div>
                </div>
                <div className="w-16 h-6 rounded bg-primary/15 text-primary-light text-[10px] font-semibold flex items-center justify-center border border-primary/20">
                  Active
                </div>
              </div>
            </div>
          </div>

          {/* Right Preview Panel */}
          <div className="hidden md:flex col-span-3 flex-col gap-4">
            <div className="glass-card p-4 rounded-xl flex-1 flex flex-col justify-between">
              <div className="text-xs font-semibold text-zinc-400">Visitor Analytics</div>
              <div className="my-auto py-2 flex flex-col items-center">
                {/* Circular progress SVG */}
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="transparent" />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#green-grad)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: 251.2 - (251.2 * 0.78) }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                  />
                  <defs>
                    <linearGradient id="green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary-light)" />
                      <stop offset="100%" stopColor="var(--primary)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-center mt-2">
                  <div className="text-lg font-bold text-white">78%</div>
                  <div className="text-[10px] text-zinc-500">Target Score Hit</div>
                </div>
              </div>
              <div className="w-full h-8 rounded bg-zinc-900 flex items-center justify-center text-[10px] text-zinc-400 font-medium border border-white/5">
                Live Monitor Online
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements (Floating in 3D parallax space above the card) */}
        
        {/* Lead Notification Card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ z: 60, transformStyle: 'preserve-3d' }}
          className="absolute bottom-2 right-2 md:bottom-12 md:right-12 z-20 glass-panel p-2 md:p-3.5 rounded-xl border border-white/10 shadow-2xl flex items-center gap-2 md:gap-3 w-40 md:w-56 scale-90 md:scale-100 pointer-events-none"
        >
          <div className="w-6.5 h-6.5 md:w-8 md:h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
            <BarChart2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-secondary-light" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] md:text-[10px] text-zinc-500">New Lead Captured</div>
            <div className="text-[10px] md:text-xs font-semibold text-white truncate">Apex Dental Clinic</div>
          </div>
          <span className="text-[8px] md:text-[9px] bg-primary/10 border border-primary/20 text-primary-light px-1.5 py-0.5 rounded font-mono font-bold">
            ₹80K
          </span>
        </motion.div>

        {/* Speed optimization card */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ z: 40, transformStyle: 'preserve-3d' }}
          className="absolute top-12 left-2 md:-left-12 z-20 glass-panel p-2 md:p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-2 md:gap-3 w-36 md:w-44 scale-90 md:scale-100 pointer-events-none"
        >
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Zap className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
          </div>
          <div>
            <div className="text-[8px] md:text-[9px] text-zinc-500">Lighthouse Score</div>
            <div className="text-[10px] md:text-xs font-bold text-white">100 / 100 Perf</div>
          </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
}
