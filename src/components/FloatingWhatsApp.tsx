'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  // Don't render on admin routes
  if (pathname.startsWith('/admin')) return null;

  const whatsappNumber = '918918186998';
  const defaultMessage = encodeURIComponent(
    "Hi D&B Digitals! I'm interested in discussing a website development and growth project for my business."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden md:inline-block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-zinc-800 text-xs font-semibold text-zinc-200 shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
        Quick Chat on WhatsApp
      </span>

      {/* Floating CTA Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with D&B Digitals"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Subtle pulsing ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 sm:w-7 sm:h-7 relative z-10"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </motion.a>
    </div>
  );
}
