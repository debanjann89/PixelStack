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
          <div className="flex items-center gap-3">
            <Logo size={24} />
            <span className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} D.A.B Digitals. All rights reserved.
            </span>
          </div>

          {/* Center — Links */}
          <div className="flex items-center gap-6">
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
              className="text-zinc-500 hover:text-primary text-sm transition-colors"
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
