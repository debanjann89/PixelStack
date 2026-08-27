'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import { Building, Globe, Smartphone, Calendar, Image as ImageIcon, Star, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HotelResortPage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleConsultation = () => {
    router.push(`${pathname}?consultation=open`);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-black min-h-screen text-zinc-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center z-10 relative">
          <SplitText
            text="Stunning Websites for Hotels & Resorts"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            delay={50}
          />
          <motion.p 
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Increase direct bookings, reduce OTA commissions, and showcase the luxury of your property with a custom-designed, fast, and mobile-optimized website.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button onClick={handleConsultation} className="bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="/portfolio" className="border border-zinc-700 text-white px-8 py-4 rounded-full hover:bg-zinc-900 transition-colors w-full sm:w-auto text-center">
              View Hospitality Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Pain Points */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The True Cost of a Poor Hospitality Website</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Your website is often the first impression a guest has of your property. If it fails to deliver, it costs you direct revenue.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">High OTA Commissions</h3>
              <p className="text-zinc-400">Relying too heavily on platforms like Expedia or Booking.com eats into your profits. A strong, trust-building website encourages guests to book directly with you instead.</p>
            </motion.div>
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Outdated Visuals</h3>
              <p className="text-zinc-400">Luxury requires presentation. Outdated layouts, small images, and a lack of immersive media fail to convey the true experience of staying at your property, causing guests to bounce.</p>
            </motion.div>
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Poor Mobile Experience</h3>
              <p className="text-zinc-400">Over half of travel bookings happen on mobile devices. A site that is slow or hard to navigate on a smartphone guarantees lost reservations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Features */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tailored for the Hospitality Industry</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">We engineer bespoke digital experiences that highlight your amenities and drive direct bookings.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ImageIcon, title: 'Room Showcase Galleries', desc: 'High-resolution, immersive photo and video galleries that highlight the unique features of every room type.' },
              { icon: Calendar, title: 'Direct Booking Integration', desc: 'Seamless connection with your property management system (PMS) or booking engine for a frictionless reservation flow.' },
              { icon: Building, title: 'Virtual Tour Support', desc: 'Embed 360-degree tours of your lobby, facilities, and suites to give guests an interactive preview of their stay.' },
              { icon: Globe, title: 'Multi-Language Support', desc: 'Cater to international travelers with robust multi-language options and localized content structures.' },
              { icon: CreditCard, title: 'Seasonal Pricing Displays', desc: 'Dynamic offer sections that prominently feature current promotions, seasonal packages, and exclusive direct-booking perks.' },
              { icon: Star, title: 'Guest Review Integration', desc: 'Showcase verified reviews from TripAdvisor and Google seamlessly within your site to build immediate credibility.' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-6 hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Case Study Snippet */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:flex-row" {...fadeInUp}>
            <div className="p-12 md:w-1/2 flex flex-col justify-center">
              <div className="text-primary font-semibold mb-4">Case Study</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Grand Palace Resorts</h2>
              <p className="text-zinc-400 mb-8">
                We completely redesigned the digital presence for Grand Palace Resorts, focusing on experiential imagery and a frictionless booking journey. The result was a stunning modern website that drove a massive increase in direct reservations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> +45% Increase in Direct Bookings
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> 60% Faster Page Load Times
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Fully Integrated Custom Booking Engine
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/case-studies/grand-palace-resorts" className="text-primary hover:text-emerald-400 font-semibold inline-flex items-center gap-2">
                  Read Grand Palace Case Study <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/blog/hotel-direct-booking-vs-ota-commission" className="text-zinc-500 hover:text-zinc-300 text-sm inline-flex items-center gap-1.5 transition-colors">
                  Hotel Direct Booking vs. OTA Math <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/blog/how-much-should-a-small-business-website-cost" className="text-zinc-500 hover:text-zinc-300 text-sm inline-flex items-center gap-1.5 transition-colors">
                  Website Pricing & ROI Breakdown <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-zinc-800 relative min-h-[300px]">
              {/* Placeholder for case study image */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                <ImageIcon className="w-20 h-20 text-zinc-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* FAQ */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {[
              { q: 'Can you integrate our existing booking engine?', a: 'Yes. We regularly integrate with major booking engines like SynXis, TravelClick, SiteMinder, and Cloudbeds. We ensure the transition from the main site to the booking engine is as seamless as possible.' },
              { q: 'How do you handle high-resolution imagery without slowing down the site?', a: 'We utilize advanced image optimization techniques, next-gen formats (like WebP), and Content Delivery Networks (CDNs) to ensure your stunning photos load instantly without compromising quality.' },
              { q: 'Is it easy to update special offers and seasonal packages?', a: 'Absolutely. We build our hotel websites on modern Content Management Systems (CMS) with intuitive dashboards, allowing your marketing team to easily update promotions, rates, and announcements.' },
              { q: 'Do you provide ongoing support?', a: 'Yes, we offer comprehensive maintenance plans to ensure your hospitality website remains secure, fast, and up-to-date with the latest web standards.' }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-lg font-bold text-white mb-2 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-zinc-400 ml-9">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <motion.div 
          className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Elevate Your Guest Experience</h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">Ready to increase direct bookings and establish a world-class digital presence? Let's discuss your property's vision.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleConsultation} className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors">
              Schedule a Consultation
            </button>
            <Link href="/contact" className="border border-zinc-700 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
