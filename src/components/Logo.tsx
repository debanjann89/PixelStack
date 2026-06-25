'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function Logo({ className = '', size = 32, interactive = true }: LogoProps) {
  return (
    <motion.div
      whileHover={interactive ? { scale: 1.05 } : undefined}
      className={`relative flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(52,211,153,0.7)] ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/logo.png"
        alt="DAB Digitals Logo"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}
