'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const triggerConsultation = () => {
    router.push(`${pathname}?consultation=open`);
  };

  // Skip navbar rendering on admin pages
  if (pathname.startsWith('/admin')) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={`w-full max-w-5xl transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between ${
            scrolled
              ? 'glass-panel shadow-2xl shadow-black/20'
              : 'bg-white/[0.03] backdrop-blur-md border border-white/[0.06]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Logo size={32} className="transition-transform group-hover:scale-105" />
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-primary-light transition-colors hidden sm:inline">
              D.A.B <span className="text-primary-light">Digitals</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Theme + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={triggerConsultation}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full transition-all cursor-pointer"
            >
              Get in Touch
            </button>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation — Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[#050505]/98 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-2">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    key={link.path}
                  >
                    <Link
                      href={link.path}
                      className={`text-4xl font-bold tracking-tight block py-3 transition-colors ${
                        isActive ? 'text-primary-light' : 'text-zinc-500 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.08 + 0.1 }}
              className="mt-12 flex flex-col items-center gap-4"
            >
              <button
                onClick={triggerConsultation}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full flex items-center gap-2 transition-all text-lg"
              >
                Get in Touch <ArrowUpRight className="h-5 w-5" />
              </button>
              <ThemeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
