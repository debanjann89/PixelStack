'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown, Stethoscope, Wrench, Building, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries', hasDropdown: true },
  { name: 'Work', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const INDUSTRY_ITEMS = [
  {
    name: 'Dental & Healthcare',
    path: '/industries/dental-clinic-website-design',
    desc: 'Patient booking & HIPAA compliance',
    icon: Stethoscope,
  },
  {
    name: 'HVAC & Plumbing',
    path: '/industries/hvac-plumbing-website-design',
    desc: 'Emergency dispatch & local lead funnels',
    icon: Wrench,
  },
  {
    name: 'Hotels & Resorts',
    path: '/industries/hotel-resort-website-design',
    desc: 'Direct booking & 0% OTA commissions',
    icon: Building,
  },
  {
    name: 'Real Estate',
    path: '/industries/real-estate-website-development',
    desc: 'Custom IDX / MLS property portals',
    icon: Home,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
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
    setIndustriesOpen(false);
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
          className={`w-full max-w-6xl transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between ${
            scrolled
              ? 'glass-panel shadow-2xl shadow-black/20'
              : 'bg-white/[0.03] backdrop-blur-md border border-white/[0.06]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Logo size={32} className="transition-transform group-hover:scale-105" />
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-primary-light transition-colors hidden sm:inline">
              D&B <span className="text-primary-light">Digitals</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.path === '/'
                  ? pathname === '/'
                  : pathname === link.path || pathname.startsWith(`${link.path}/`);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setIndustriesOpen(true)}
                    onMouseLeave={() => setIndustriesOpen(false)}
                  >
                    <Link
                      href={link.path}
                      className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-full flex items-center gap-1 ${
                        isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          industriesOpen ? 'rotate-180 text-primary' : 'text-zinc-500'
                        }`}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="navPill"
                          className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {industriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 z-50"
                        >
                          <div className="bg-[#0c0c0c]/95 backdrop-blur-2xl border border-zinc-800/90 rounded-2xl p-2.5 shadow-2xl shadow-black/80 space-y-1">
                            {INDUSTRY_ITEMS.map((item) => {
                              const Icon = item.icon;
                              const isItemActive = pathname === item.path;
                              return (
                                <Link
                                  key={item.path}
                                  href={item.path}
                                  className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                    isItemActive
                                      ? 'bg-primary/10 text-white'
                                      : 'hover:bg-zinc-900/80 text-zinc-300 hover:text-white'
                                  }`}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-primary mt-0.5">
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold leading-snug">{item.name}</div>
                                    <div className="text-[11px] text-zinc-500 line-clamp-1">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                            <div className="border-t border-zinc-800/60 pt-1.5 mt-1 px-2">
                              <Link
                                href="/industries"
                                className="text-[11px] font-semibold text-primary hover:text-emerald-300 flex items-center justify-between py-1 transition-colors"
                              >
                                <span>Browse All Industries</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
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
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full transition-all cursor-pointer"
            >
              Get in Touch
            </button>
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-zinc-400 hover:text-white transition-colors p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="fixed inset-0 z-40 lg:hidden bg-[#050505]/98 backdrop-blur-xl flex flex-col justify-center items-center px-6 overflow-y-auto pt-24 pb-12"
          >
            <div className="flex flex-col items-center gap-2 w-full max-w-sm text-center">
              {NAV_LINKS.map((link, idx) => {
                const isActive =
                  link.path === '/'
                    ? pathname === '/'
                    : pathname === link.path || pathname.startsWith(`${link.path}/`);
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    key={link.path}
                    className="w-full"
                  >
                    <Link
                      href={link.path}
                      className={`text-2xl sm:text-3xl font-bold tracking-tight block py-2.5 transition-colors ${
                        isActive ? 'text-primary-light' : 'text-zinc-400 hover:text-white'
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
              transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
              className="mt-8 flex flex-col items-center gap-4 w-full max-w-xs"
            >
              <button
                onClick={triggerConsultation}
                className="w-full px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-all text-base"
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

