'use client';

import React from 'react';
import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  DollarSign,
  TrendingUp,
  MapPin,
  Calendar,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function DoctorClinicCostArticlePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText
            text="Doctor & Clinic Website Cost in India (2026): The Complete ₹ Pricing & ROI Guide"
            className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Oct 22, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>8 min read</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-emerald-400 font-medium">Healthcare & Pricing</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-li:text-zinc-300">
          <p className="text-xl text-zinc-200 leading-relaxed font-normal">
            Whether you are an individual medical specialist with chambers in Siliguri or Kolkata, a dental surgeon, or running a multi-specialty polyclinic, you know that <strong>patients are searching online before every consultation</strong>.
          </p>

          <p>
            When a patient experiences toothache, chest discomfort, or back pain, the first thing they or their family do is pick up a smartphone and search: <em>&quot;best orthopedic doctor near me&quot;</em> or <em>&quot;dental clinic in Sevoke Road&quot;</em>.
          </p>

          <p>
            Yet most Indian doctors still rely exclusively on Practo listings, word-of-mouth, or have an outdated website that doesn&apos;t work on mobile phones. Here is the complete, transparent breakdown of what a clinic website actually costs in India in 2026, and how it pays for itself in weeks.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <AlertCircle className="w-7 h-7 text-emerald-400 shrink-0" />
            1. The Hidden Trap of Aggregator Platforms (Practo & Justdial)
          </h2>

          <p>
            Many medical practitioners ask: <em>&quot;Why should I build my own website when I am already on Practo or Justdial?&quot;</em>
          </p>

          <ul className="space-y-3 my-6">
            <li><strong>You Don&apos;t Own the Patient Relationship:</strong> When a patient finds you on an aggregator, the platform immediately recommends 5 other competing doctors on the exact same screen.</li>
            <li><strong>Steep Commissions & Monthly Fees:</strong> Aggregators charge ₹2,000 to ₹10,000+ per month or commission per appointment. Over 3 years, you hand over ₹1,00,000 to ₹3,50,000 to a middleman.</li>
            <li><strong>Zero Brand Authority:</strong> A dedicated custom website builds your personal authority as the premier specialist in your city.</li>
          </ul>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <DollarSign className="w-7 h-7 text-emerald-400 shrink-0" />
            2. Medical Practice Packages & Scope in India (2026)
          </h2>

          <p>
            Rather than paying monthly aggregator cuts, healthcare providers invest in a customized web asset with clear deliverables:
          </p>

          {/* Pricing Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse border border-zinc-800 text-sm">
              <thead>
                <tr className="bg-zinc-900/90 text-white border-b border-zinc-800">
                  <th className="p-4 font-semibold">Clinic Type</th>
                  <th className="p-4 font-semibold">Investment Model</th>
                  <th className="p-4 font-semibold">Essential Features</th>
                  <th className="p-4 font-semibold">Consultation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Individual Doctor Chamber</td>
                  <td className="p-4 text-white">Custom Chamber Scope</td>
                  <td className="p-4 text-zinc-300">Bio & degrees, chamber timings, Google Maps directions, 1-tap WhatsApp booking button</td>
                  <td className="p-4">
                    <a href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20am%20a%20doctor%20interested%20in%20a%20website%20quotation." target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold hover:underline text-xs">
                      Get Quote →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Polyclinic / Dental Clinic</td>
                  <td className="p-4 text-white">Full Clinic Lead System</td>
                  <td className="p-4 text-zinc-300">Multi-doctor schedule, service pages (Implants, Ortho, etc.), patient testimonials, local SEO</td>
                  <td className="p-4">
                    <a href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20am%20interested%20in%20a%20custom%20dental%2Fpolyclinic%20website%20quote." target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold hover:underline text-xs">
                      Get Quote →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Hospital / Diagnostic Center</td>
                  <td className="p-4 text-white">Enterprise Healthcare Portal</td>
                  <td className="p-4 text-zinc-300">Department directory, online test booking, report download portal, ambulance trigger, full hospital SEO</td>
                  <td className="p-4">
                    <a href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20would%20like%20to%20discuss%20a%20Hospital%20portal%20build." target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold hover:underline text-xs">
                      Discuss Scope →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" />
            3. Must-Have Features Every Indian Doctor Website Needs
          </h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">A. Instant WhatsApp Appointment Trigger</h3>
          <p>
            In India, over 90% of patient inquiries happen through WhatsApp. Our websites feature an omnipresent floating button that immediately opens WhatsApp with pre-filled text: <em>&quot;Hello Doctor, I would like to book an appointment for tomorrow.&quot;</em>
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">B. Clear Chamber Timings & One-Click Google Map Navigation</h3>
          <p>
            Patients get frustrated when chamber timings are unclear or addresses are ambiguous. Display exact consultation hours for each chamber with a direct &quot;Get Directions&quot; button opening Google Maps.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">C. Local Medical SEO (Google 3-Pack Ranking)</h3>
          <p>
            By injecting MedicalClinic and Physician structured JSON-LD schemas, your practice gets prioritized when local patients search for your specialty on Google Maps and search results.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">D. Patient Testimonials & Case Transformations</h3>
          <p>
            Real patient video quotes and before-and-after cases (for dentists and dermatologists) build immense clinical trust before the patient ever enters your waiting room.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <TrendingUp className="w-7 h-7 text-emerald-400 shrink-0" />
            4. The Real ROI: How 5 Patients Cover the Entire Cost
          </h2>

          <p>
            Consider a dental surgeon or specialist doctor:
          </p>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-6">
            <p className="text-zinc-200 font-semibold mb-2">The Medical ROI Equation:</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Professional Clinic Website: <strong>Customized project investment based on chamber count & features</strong></li>
              <li>• Average patient lifetime value (consultations + procedures): <strong>₹5,000 – ₹15,000</strong></li>
              <li>• If the website brings just <strong>3 to 5 new patients</strong> via Google: <strong>The entire website is paid off</strong></li>
              <li>• Every single patient consultation after that is 100% pure profit, month after month.</li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
            <Sparkles className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Upgrade Your Clinic&apos;s Online Patient Inquiries?
            </h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              D&B Digitals designs high-converting websites for healthcare professionals across Siliguri, Kolkata, and India. Contact our team today for a free confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918918186998?text=Hello%20D%26B%20Digitals%2C%20I%20am%20a%20doctor%2Fclinic%20owner%20and%20interested%20in%20a%20website%20consultation."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp Now
              </a>
              <Link
                href="/industries/dental-clinic-website-design"
                className="border border-zinc-700 hover:border-zinc-500 text-white font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center text-sm"
              >
                View Clinic Case Study
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
