'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import { Stethoscope, Calendar, FileText, Users, Shield, Star, ArrowRight, CheckCircle2, HeartPulse } from 'lucide-react';

export default function DentalHealthcarePage() {
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
            text="Dental Clinic Website Development & Healthcare Web Design"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            delay={50}
          />
          <motion.p 
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Custom full-stack web development and high-converting UI/UX for dental practices, orthodontists, and healthcare clinics. Fast, secure, patient-focused digital systems built to rank #1 locally.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button onClick={handleConsultation} className="bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="/services" className="border border-zinc-700 text-white px-8 py-4 rounded-full hover:bg-zinc-900 transition-colors w-full sm:w-auto text-center">
              View Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Pain Points */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Problem with Outdated Medical Websites</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Patients are evaluating your credibility long before they call your clinic. A poor digital experience costs you new appointments daily.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">No Online Booking</h3>
              <p className="text-zinc-400">Modern patients expect convenience. If they have to call during business hours just to schedule a cleaning or consultation, many will simply look for a clinic that offers 24/7 online booking.</p>
            </motion.div>
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Outdated First Impressions</h3>
              <p className="text-zinc-400">An old, clunky website sends a subconscious message that your clinic might also have outdated equipment or practices. A modern site builds instant trust and authority.</p>
            </motion.div>
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lack of Patient Information</h3>
              <p className="text-zinc-400">Patients want to know exactly what treatments you offer, who the doctors are, and what insurance you accept before they arrive. Without clear communication, they hesitate.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Features */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Features Built for Healthcare</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">We design websites focused on patient acquisition, workflow optimization, and trust-building.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: 'Online Appointment Booking', desc: 'Securely integrate with ZocDoc, NexHealth, or your custom practice management software for easy scheduling.' },
              { icon: FileText, title: 'Patient Intake Forms', desc: 'Digital forms that patients can fill out prior to their visit, reducing wait times and front-desk paperwork.' },
              { icon: Stethoscope, title: 'Service & Treatment Pages', desc: 'Detailed, SEO-optimized pages for specific treatments (e.g., Invisalign, Implants) to capture local search traffic.' },
              { icon: Users, title: 'Doctor & Staff Profiles', desc: 'Build connection before the first visit with professional biographies, credentials, and welcoming photos.' },
              { icon: Shield, title: 'Insurance & Financing Info', desc: 'Clear sections outlining accepted insurance networks and financing options to remove financial friction.' },
              { icon: Star, title: 'Patient Testimonial Integration', desc: 'Highlight life-changing smile makeovers and positive reviews directly on your site to provide social proof.' },
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
          <motion.div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:flex-row-reverse" {...fadeInUp}>
            <div className="p-12 md:w-1/2 flex flex-col justify-center">
              <div className="text-primary font-semibold mb-4">Success Story</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Apex Dental Clinic</h2>
              <p className="text-zinc-400 mb-8">
                Apex Dental needed a digital overhaul. Their old site was hard to navigate and failed to highlight their modern technology. We designed a clean, calming digital experience with integrated booking and comprehensive service pages.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> 3x Increase in Online Appointments
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> #1 Local Ranking for "Cosmetic Dentist"
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Streamlined New Patient Onboarding
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/case-studies/apex-dental-care" className="text-primary hover:text-emerald-400 font-semibold inline-flex items-center gap-2">
                  Read Full Apex Dental Case Study <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/blog/why-wix-wordpress-websites-fail-to-rank-google" className="text-zinc-500 hover:text-zinc-300 text-sm inline-flex items-center gap-1.5 transition-colors">
                  Why WordPress Fails Core Web Vitals <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-zinc-800 relative min-h-[300px]">
              {/* Placeholder for case study image */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                <Stethoscope className="w-20 h-20 text-zinc-700" />
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
              { q: 'Are your healthcare websites HIPAA compliant?', a: 'We build with security and privacy in mind. While a basic website itself doesn\'t necessarily store PHI (Protected Health Information), we ensure that any forms, booking integrations, or patient portals we implement utilize secure, HIPAA-compliant third-party services.' },
              { q: 'Can you help write the medical content?', a: 'Yes, we can provide professional copywriting services tailored to the dental and medical fields to ensure accurate, professional, and SEO-friendly descriptions of your procedures and services.' },
              { q: 'How do you handle before-and-after galleries?', a: 'We create tasteful, interactive before-and-after galleries (often using sliders) that showcase your clinical results effectively while maintaining patient privacy and a high-end aesthetic.' },
              { q: 'Will the site be accessible for all users?', a: 'Yes. Accessibility (ADA compliance) is highly important for healthcare websites. We design adhering to WCAG guidelines, ensuring proper contrast, keyboard navigation, and screen-reader compatibility.' }
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Grow Your Healthcare Practice</h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">Upgrade your clinic's digital presence with a website designed to build trust and acquire new patients on autopilot.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleConsultation} className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors">
              Request a Free Quote
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
