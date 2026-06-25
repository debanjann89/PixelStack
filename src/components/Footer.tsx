'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleConsultationClick = () => {
    router.push(`${pathname}?consultation=open`);
  };

  return (
    <footer className="relative bg-black border-t border-zinc-900 pt-20 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3.5 mb-6 group">
              <Logo size={36} className="transition-transform group-hover:scale-105" />
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-primary-light transition-colors">
                D.A.B <span className="text-primary-light">Digitals</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
              We design and develop high-converting custom websites and growth-focused digital strategies that help businesses scale their online authority.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918918186698"
                className="flex items-center gap-2 text-zinc-400 hover:text-primary-light transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 89181 86698</span>
              </a>
              <a
                href="https://wa.me/918918186698"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors text-sm"
              >
                <MessageSquare className="h-4 w-4 text-green-500" />
                <span>WhatsApp Live Chat</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">D.A.B Digitals Pages</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action Area */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Start Growth</h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Have a project in mind? Book a 30-min strategy call. No obligation.
            </p>
            <button
              onClick={handleConsultationClick}
              className="w-full text-center py-3 bg-white text-black font-semibold rounded-xl text-xs hover:bg-zinc-200 transition-colors duration-200 cursor-pointer"
            >
              Book Strategy Call
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} D.A.B Digitals. All rights reserved. Made in India.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-zinc-600 hover:text-zinc-400 transition-colors text-xs">
              System Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
