'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      {/* Background Grids */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      
      {/* Centered loader panel */}
      <div className="relative flex flex-col items-center">
        {/* Outer glowing ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-t-2 border-r-2 border-primary border-b-2 border-l border-b-transparent border-l-transparent relative z-10"
        />

        {/* Inner glowing pulse ring */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 absolute top-2 flex items-center justify-center blur-sm pointer-events-none"
        />

        {/* Logo Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mt-6 flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm font-bold tracking-widest uppercase text-white font-mono">
            D.A.B <span className="text-primary-light">Digitals</span>
          </span>
        </motion.div>
        
        <span className="text-[10px] text-zinc-600 font-mono mt-2 tracking-wider">
          Initializing Workspace...
        </span>
      </div>
    </div>
  );
}
