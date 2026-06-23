'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Lock,
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  DollarSign,
  Layers,
  LogOut,
  Home,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LinkComponent from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const authStatus = sessionStorage.getItem('pixelstack_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'pixeladmin') {
      setIsAuthenticated(true);
      setLoginError('');
      sessionStorage.setItem('pixelstack_admin_auth', 'true');
    } else {
      setLoginError('Invalid Administrator Password. Access Denied.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('pixelstack_admin_auth');
    router.push('/');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Authentication Guard UI
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative">
        {/* Background grids */}
        <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-md glass-panel p-8 rounded-2xl border border-white/10 z-10 text-center shadow-2xl bg-zinc-900/60 backdrop-blur-xl"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/20">
            <Lock className="h-5 w-5 text-primary-light" />
          </div>

          <h1 className="text-xl font-bold text-white mb-2">PixelStack Studio Admin</h1>
          <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
            Enter administrator credentials to manage leads, clients, invoices, and documents.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Administrator Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-white/5 text-white placeholder-zinc-700 text-sm focus:outline-none focus:border-primary/50 transition-all font-mono"
              />
              {loginError && (
                <p className="text-[11px] text-red-400 font-semibold mt-2 flex items-center gap-1.5 animate-pulse">
                  <X className="h-3 w-3" /> {loginError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-primary/20 active:scale-[0.98] cursor-pointer"
            >
              Verify Credentials
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5">
            <LinkComponent href="/" className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              <Home className="h-3 w-3" /> Back to Home Page
            </LinkComponent>
          </div>
        </motion.div>
      </div>
    );
  }

  const navItems = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Leads & Inquiries', href: '/admin/leads', icon: Users },
    { name: 'Client Profiles', href: '/admin/clients', icon: Layers },
    { name: 'Project Tracking', href: '/admin/projects', icon: Briefcase },
    { name: 'Invoices & Billing', href: '/admin/invoices', icon: DollarSign },
    { name: 'Document Hub', href: '/admin/documents', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col md:flex-row relative">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-zinc-900/80 border-b border-white/5 z-40 backdrop-blur-md">
        <LinkComponent href="/" className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight text-white">
            Pixel<span className="text-primary-light">Stack</span> <span className="text-[10px] text-zinc-500 font-mono">ADMIN</span>
          </span>
        </LinkComponent>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 transform ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-64 border-r border-white/5 bg-zinc-950/80 backdrop-blur-xl flex flex-col justify-between shrink-0 h-screen overflow-y-auto`}>
        
        {/* Brand Logo Header */}
        <div className="p-6 border-b border-white/5 flex flex-col gap-4">
          <LinkComponent href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white">
              Pixel<span className="text-primary-light">Stack</span>
            </span>
            <span className="text-[9px] bg-primary/10 border border-primary/20 text-primary-light font-bold px-1.5 py-0.5 rounded tracking-widest font-mono">
              STUDIO
            </span>
          </LinkComponent>
          <div className="flex items-center gap-2 bg-zinc-900/60 rounded-lg p-2.5 border border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] text-zinc-400 font-semibold tracking-wide">Administrator Node</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-6 px-4 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <LinkComponent
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/15 border border-primary/20'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                }`}
              >
                <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                {item.name}
                {isActive && <ChevronRight className="ml-auto h-3 w-3 text-white" />}
              </LinkComponent>
            );
          })}
        </nav>

        {/* Footer / Account Section */}
        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white transition-all text-xs font-semibold cursor-pointer"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 h-screen overflow-y-auto z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
