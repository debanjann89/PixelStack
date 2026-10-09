'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const sections = [
  {
    id: 'overview',
    icon: ShieldCheck,
    title: '1. Overview & Data Fiduciary',
    content: (
      <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
        <p>
          This Privacy Policy sets out how <strong className="text-white">D&B Digitals</strong> (operating as a digital agency based in Siliguri, West Bengal, India, co-founded by Debanjan Amin & Banashree Das) collects, processes, protects, and stores personal data provided by individuals (&quot;Data Principals&quot;) when visiting our website (<code className="text-primary bg-zinc-900 px-1.5 py-0.5 rounded text-xs">d-a-b-digitals.vercel.app</code>) or submitting inquiries through our contact and consultation forms.
        </p>
        <p>
          We are committed to respecting your privacy and comply strictly with India&apos;s <strong className="text-white">Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;)</strong>, the Information Technology Act, 2000, and applicable data security regulations.
        </p>
      </div>
    ),
  },
  {
    id: 'data-collected',
    icon: FileText,
    title: '2. Personal Data We Collect',
    content: (
      <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
        <p>We only collect personal data that you voluntarily provide when submitting an inquiry:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400">
          <li><strong className="text-zinc-200">Identity Data:</strong> Full name and business or brand name.</li>
          <li><strong className="text-zinc-200">Contact Data:</strong> Email address and mobile phone number.</li>
          <li><strong className="text-zinc-200">Project Requirements:</strong> Project scope, service category, budget estimate, and project description.</li>
          <li><strong className="text-zinc-200">Technical Logs:</strong> Minimal anonymous connection parameters (browser type, timestamp) standard for web security and DDoS mitigation.</li>
        </ul>
        <p className="text-xs text-zinc-500 italic mt-2">
          Note: We do NOT collect sensitive personal financial information such as bank account details or credit card numbers on our public forms.
        </p>
      </div>
    ),
  },
  {
    id: 'purpose',
    icon: CheckCircle2,
    title: '3. Purpose & Lawful Basis of Processing',
    content: (
      <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
        <p>
          Under Section 4 and Section 6 of the DPDP Act 2023, data is processed solely on the lawful basis of <strong className="text-white">freely given, specific, informed, and unconditional consent</strong> provided by you when checking the consent agreement box prior to form submission.
        </p>
        <p>The explicit purposes include:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400">
          <li>Reviewing and responding to your website design, development, or digital marketing inquiry.</li>
          <li>Delivering customized project proposals, estimates, and technical audit reports.</li>
          <li>Scheduling one-on-one discovery and strategy consultations requested by you.</li>
          <li>Maintaining records for ongoing client communication and contractual engagements.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'storage-security',
    icon: Lock,
    title: '4. Data Storage & Security Safeguards',
    content: (
      <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
        <p>
          In accordance with reasonable security standards under Section 8(5) of the DPDP Act, we employ robust technical and organizational measures to safeguard your personal data:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400">
          <li><strong className="text-zinc-200">Transit Encryption:</strong> All form transmissions occur over encrypted HTTPS/TLS 1.3 connections.</li>
          <li><strong className="text-zinc-200">Database Protection:</strong> Lead records are stored in secure Supabase PostgreSQL instances with Row-Level Security (RLS) and encrypted database backups.</li>
          <li><strong className="text-zinc-200">Access Control:</strong> Access to inbound lead inquiries is strictly restricted to verified founders with multi-factor authentication.</li>
          <li><strong className="text-zinc-200">No Third-Party Sale:</strong> We never sell, rent, monetize, or trade your personal information to third-party data brokers or marketing firms.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'retention',
    icon: Clock,
    title: '5. Data Retention Period',
    content: (
      <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
        <p>
          We retain personal data provided via contact submissions for a maximum period of <strong className="text-white">24 months</strong> from the date of submission, allowing sufficient continuity for follow-up inquiries, quote revisions, and project history.
        </p>
        <p>
          Following the expiration of this retention window (or immediately upon receiving an erasure request), data is permanently removed or irreversibly anonymized.
        </p>
      </div>
    ),
  },
  {
    id: 'rights',
    icon: UserCheck,
    title: '6. Your Rights Under the DPDP Act, 2023',
    content: (
      <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
        <p>
          As a Data Principal residing in India or interacting with our services, you hold unequivocal statutory rights:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl">
            <h4 className="text-white font-semibold text-xs mb-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-primary" /> Right to Access
            </h4>
            <p className="text-xs text-zinc-400">Request a summary of the personal data we hold about you and how it is processed.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl">
            <h4 className="text-white font-semibold text-xs mb-1 flex items-center gap-1.5">
              <Trash2 className="w-3.5 h-3.5 text-primary" /> Right to Erasure
            </h4>
            <p className="text-xs text-zinc-400">Request the prompt deletion and removal of your personal information (&quot;Right to be Forgotten&quot;).</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl">
            <h4 className="text-white font-semibold text-xs mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Right to Correction
            </h4>
            <p className="text-xs text-zinc-400">Request update or rectification of outdated, incomplete, or inaccurate contact details.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl">
            <h4 className="text-white font-semibold text-xs mb-1 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-primary" /> Grievance Redressal
            </h4>
            <p className="text-xs text-zinc-400">Lodge an inquiry or grievance directly with our designated Data Protection Officer.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'grievance',
    icon: Mail,
    title: '7. Grievance Officer & Contact Information',
    content: (
      <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
        <p>
          To exercise any of your data protection rights, or if you have questions regarding this Privacy Policy, please contact our designated Grievance Officer:
        </p>
        <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Email For Data & Erasure Requests</div>
              <a href="mailto:dabdigitalofficials@gmail.com" className="text-sm font-semibold text-primary hover:underline">
                dabdigitalofficials@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Direct Telephone</div>
              <a href="tel:+918918186998" className="text-sm font-semibold text-white hover:text-primary transition-colors">
                +91 89181 86998
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Registered Studio Address</div>
              <span className="text-sm font-medium text-zinc-300">
                Siliguri, West Bengal, India, 734001
              </span>
            </div>
          </div>
        </div>
        <p className="text-xs text-zinc-400">
          <strong>Turnaround Commitment:</strong> We acknowledge all data inquiries and erasure requests within <span className="text-white font-medium">24 hours</span> and resolve them within <span className="text-white font-medium">7 working days</span>.
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-24 bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-32 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Navigation link */}
        <div className="mb-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Contact Form
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
              Legal & Data Compliance
            </span>
          </div>
          <h1 className="heading-xl text-white tracking-tight mb-4">
            Privacy Policy & <span className="text-primary">DPDP Act Notice</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Effective Date: October 9, 2026 · Compliant with the Digital Personal Data Protection Act, 2023 (India)
          </p>
        </header>

        {/* Policy Body Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.article
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 p-6 sm:p-8 rounded-2xl transition-all shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {section.title}
                  </h2>
                </div>
                {section.content}
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Have a question about your privacy?</h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mb-6">
            We believe in complete transparency. Reach out directly to our founders anytime for data queries or project inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:dabdigitalofficials@gmail.com"
              className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-black font-bold text-xs uppercase tracking-wider transition-all"
            >
              Email Grievance Officer
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold text-xs tracking-wider transition-all"
            >
              Back to Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
