'use client';

import React from 'react';
import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  DollarSign,
  TrendingUp,
  FileCheck,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  School
} from 'lucide-react';

export default function SchoolWebsiteArticlePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText
            text="Private School Website Design in India: What Parents Actually Expect in 2026"
            className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Oct 22, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>8 min read</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-emerald-400 font-medium">Education & Institutional</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-li:text-zinc-300">
          <p className="text-xl text-zinc-200 leading-relaxed font-normal">
            Today in India, the generation of parents enrolling children into Nursery to Class 11 are digital natives. They use Swiggy, book flights on their smartphones, and conduct thorough online background checks before trusting anyone with their child&apos;s future.
          </p>

          <p>
            When a parent considers your school, they don&apos;t wait for the annual sports day brochure. They search: <em>&quot;best CBSE schools near me&quot;</em> or <em>&quot;ICSE school admission Siliguri / Kolkata&quot;</em>.
          </p>

          <p>
            If your school website is non-responsive, has broken images, or buries admission forms inside confusing menus, parents instinctively judge your academic standards by your digital standards.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <AlertCircle className="w-7 h-7 text-emerald-400 shrink-0" />
            1. Why Old School Websites Lose 50%+ of Potential Admissions
          </h2>

          <p>
            Most school websites in India were built years ago by local agencies using outdated WordPress templates. Here is why they actively discourage parents:
          </p>

          <ul className="space-y-3 my-6">
            <li><strong>Unreadable on Mobile:</strong> Over 85% of parent visits happen on smartphones. If the text requires pinch-to-zoom or tables overflow the screen, parents close the tab within 4 seconds.</li>
            <li><strong>Missing Mandatory CBSE/ICSE Disclosures:</strong> Boards now strictly enforce Mandatory Public Disclosure clauses (fee structure, staff details, infrastructure certificates). An untidy or missing disclosure section invites regulatory penalties and parental distrust.</li>
            <li><strong>Cumbersome Offline Admission Processes:</strong> Forcing working parents to physically travel to the campus just to collect a ₹500 paper form creates unnecessary friction when competing schools offer instant digital inquiries.</li>
          </ul>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <School className="w-7 h-7 text-emerald-400 shrink-0" />
            2. The 5 Must-Have Features of a High-Converting School Website
          </h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">A. One-Click WhatsApp Admission Desk</h3>
          <p>
            Place an instant admission inquiry button on every page. Parents can ask: <em>&quot;Hi, are admissions open for Class 1 for the 2027-28 academic session?&quot;</em> and receive immediate responses from your administrative team.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">B. Digital Admission Form & Prospectus Download</h3>
          <p>
            Allow parents to fill out initial candidate details online or download the school prospectus after entering their phone number. Your admissions office receives qualified applicant leads daily.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">C. CBSE / ICSE Mandatory Disclosure Portal</h3>
          <p>
            A dedicated, fully compliant section organizing all statutory board requirements: NOC from state government, building safety certificate, fire safety certificate, water & sanitation report, and fee structure.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">D. Virtual Campus Tour & Infrastructure Showcase</h3>
          <p>
            High-speed, beautifully optimized photo and video galleries showcasing science laboratories, smart classrooms, athletic fields, swimming pools, and library facilities.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">E. Board Examination & Sports Results Wall</h3>
          <p>
            Highlight Class 10 & 12 board toppers, Olympiad medalists, and inter-school sports champions with photos and verifiable scores.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <DollarSign className="w-7 h-7 text-emerald-400 shrink-0" />
            3. School Website Pricing Breakdown in India (2026)
          </h2>

          {/* Pricing Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse border border-zinc-800 text-sm">
              <thead>
                <tr className="bg-zinc-900/90 text-white border-b border-zinc-800">
                  <th className="p-4 font-semibold">Institution Type</th>
                  <th className="p-4 font-semibold">Cost (INR)</th>
                  <th className="p-4 font-semibold">Features Included</th>
                  <th className="p-4 font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Pre-School / Daycare</td>
                  <td className="p-4 text-white">₹18,000 – ₹32,000</td>
                  <td className="p-4 text-zinc-300">Playful mobile UI, safety features showcase, WhatsApp admissions, Google Maps</td>
                  <td className="p-4 text-zinc-400">7 – 10 Days</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400">K-12 Private High School</td>
                  <td className="p-4 text-white">₹45,000 – ₹85,000</td>
                  <td className="p-4 text-zinc-300">CBSE/ICSE disclosure portal, online admission form, faculty directory, campus gallery, local SEO</td>
                  <td className="p-4 text-zinc-400">2 – 3 Weeks</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Multi-Campus Trust / College</td>
                  <td className="p-4 text-white">₹95,000 – ₹1,80,000</td>
                  <td className="p-4 text-zinc-300">Multi-institution routing, student notice board, fee gateway integration, custom admin portal</td>
                  <td className="p-4 text-zinc-400">3 – 5 Weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <TrendingUp className="w-7 h-7 text-emerald-400 shrink-0" />
            4. The Admission ROI Math
          </h2>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-6">
            <p className="text-zinc-200 font-semibold mb-2">School Enrollment Math:</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Complete custom school website: <strong>₹45,000 (one-time)</strong></li>
              <li>• Average annual student fee: <strong>₹35,000 – ₹90,000 per child</strong></li>
              <li>• If the new website drives just <strong>2 additional student admissions</strong>: <strong>The entire project is profitable in Year 1</strong></li>
              <li>• A student typically stays in school for 5 to 12 years, yielding <strong>₹2,00,000 to ₹10,00,000+ in lifetime tuition revenue</strong> from just one enrolled child.</li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
            <Sparkles className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Upgrade Your School&apos;s Digital Presence Before the Next Admission Season
            </h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              D&B Digitals designs compliant, lightning-fast educational websites that parents respect and trust. Contact our founders on WhatsApp today for a free institutional consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20represent%20a%20school%2Fcollege%20and%20want%20to%20discuss%20a%20website%20redesign."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp Now
              </a>
              <Link
                href="/pricing"
                className="border border-zinc-700 hover:border-zinc-500 text-white font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center text-sm"
              >
                View Transparent Pricing
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
