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
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Case Studies', path: '/case-studies' },
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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const triggerConsultation = () => {
    // Open consultation modal via URL parameter
    router.push(`${pathname}?consultation=open`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-panel py-4 shadow-lg border-b border-white/5'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <Logo size={42} className="transition-transform group-hover:scale-105" />
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-primary-light transition-colors">
              D.A.B <span className="text-primary-light">Digitals</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-sm font-medium transition-colors hover:text-white ${
                    isActive ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={triggerConsultation}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-br from-primary to-secondary group-hover:from-primary-light group-hover:to-secondary-light text-white focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-zinc-950 rounded-full group-hover:bg-opacity-0">
                Book Consultation
              </span>
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 pt-28 px-6 flex flex-col justify-between pb-12 border-b border-white/10"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.path}
                  >
                    <Link
                      href={link.path}
                      className={`text-2xl font-semibold block py-2 ${
                        isActive ? 'text-primary-light' : 'text-zinc-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={triggerConsultation}
                className="w-full text-center py-4 bg-gradient-to-r from-primary-dark to-secondary-dark hover:from-primary hover:to-secondary text-white font-medium rounded-xl flex items-center justify-center gap-2"
              >
                Book Free Consultation <ArrowUpRight className="h-4 w-4" />
              </button>
              <div className="flex items-center justify-center gap-4 mt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
