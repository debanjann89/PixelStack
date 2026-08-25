'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import Logo from '@/components/Logo';
import SplitText from '@/components/SplitText';

const FOOTER_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  // Don't render footer on admin pages
  if (pathname.startsWith('/admin')) return null;

  const triggerConsultation = () => {
    router.push(`${pathname}?consultation=open`);
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-[#050505]">
      {/* Big CTA Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
        <SplitText
          text="Let's build something extraordinary"
          className="mb-8"
          as="h2"
          scrollTrigger
          highlightWords={['extraordinary']}
        />
        <p className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Ready to transform your digital presence? Let&apos;s start a conversation.
        </p>
        <button
          onClick={triggerConsultation}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all text-base cursor-pointer group"
        >
          Start a Project
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Divider */}
      <div className="section-divider" />

      {/* Bottom Info Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — Logo + Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <Logo size={24} />
              <span className="text-zinc-600 text-sm">
                © {new Date().getFullYear()} D&B Digitals. All rights reserved.
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/dnbdigitals/" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://wa.me/918918186998" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/50 hover:text-[#25D366] transition-all"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Center — Links */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right — Contact + Admin */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:dabdigitalofficials@gmail.com"
              className="hidden lg:block text-zinc-500 hover:text-primary text-sm transition-colors"
            >
              dabdigitalofficials@gmail.com
            </a>
            <Link
              href="/admin"
              className="text-zinc-700 hover:text-zinc-500 text-xs transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
