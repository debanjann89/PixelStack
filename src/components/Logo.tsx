'use client';

import { motion, Variants } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function Logo({ className = '', size = 32, interactive = true }: LogoProps) {
  // Scale factor based on baseline of 32px
  const scale = size / 32;

  // Hover transitions for 3D card expansion
  const bottomVariants: Variants = interactive
    ? { hover: { y: 2, opacity: 0.5 } }
    : {};
  const middleVariants: Variants = interactive
    ? { hover: { y: -2, opacity: 0.85 } }
    : {};
  const topVariants: Variants = interactive
    ? { hover: { y: -6 } }
    : {};

  return (
    <motion.div
      whileHover={interactive ? "hover" : undefined}
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"
      >
        <defs>
          <linearGradient id="logoLayer1" x1="16" y1="4" x2="16" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--primary-light)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
          <linearGradient id="logoLayer2" x1="16" y1="10" x2="16" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--primary-dark)" />
          </linearGradient>
          <linearGradient id="logoLayer3" x1="16" y1="16" x2="16" y2="27" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--primary-dark)" />
            <stop offset="100%" stopColor="var(--border)" />
          </linearGradient>
        </defs>

        {/* Bottom Layer (Dark Forest) */}
        <motion.path
          d="M16 16L28 21.5L16 27L4 21.5ZM14 19.5L10 21.5L16 24L20 21.5Z"
          fill="url(#logoLayer3)"
          stroke="var(--border)"
          strokeWidth="1.2"
          strokeLinejoin="round"
          fillRule="evenodd"
          opacity="0.4"
          variants={bottomVariants}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />

        {/* Middle Layer (Emerald) */}
        <motion.path
          d="M16 10L28 15.5L16 21L4 15.5ZM14 13.5L10 15.5L16 18L20 15.5Z"
          fill="url(#logoLayer2)"
          stroke="var(--primary-dark)"
          strokeWidth="1.2"
          strokeLinejoin="round"
          fillRule="evenodd"
          opacity="0.75"
          variants={middleVariants}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />

        {/* Top Layer (Mint) */}
        <motion.path
          d="M16 4L28 9.5L16 15L4 9.5ZM14 7.5L10 9.5L16 12L20 9.5Z"
          fill="url(#logoLayer1)"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeLinejoin="round"
          fillRule="evenodd"
          variants={topVariants}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
}
