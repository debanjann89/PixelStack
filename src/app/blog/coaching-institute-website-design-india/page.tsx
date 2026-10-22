'use client';

import React from 'react';
import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  TrendingUp,
  FileText,
  MessageCircle,
  Users,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  DollarSign
} from 'lucide-react';

export default function CoachingInstituteArticlePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText
            text="Coaching Institute Website Design India: How to Get 3x More Student Inquiries in 2026"
            className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Oct 22, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>9 min read</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-emerald-400 font-medium">Education & Lead Generation</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-li:text-zinc-300">
          <p className="text-xl text-zinc-200 leading-relaxed font-normal">
            If you run a coaching institute or competitive tuition academy in India today—whether for JEE, NEET, WBJEE, UPSC, or commerce—you already know the harsh truth: <strong>newspaper inserts, street flyers, and roadside flex banners aren&apos;t filling batches like they used to.</strong>
          </p>

          <p>
            In 2026, Indian parents and students don&apos;t pick a coaching academy from a crumpled paper flyer thrown on their balcony. They search on Google. They look up reviews. And before they ever walk into your center, they inspect your website on their phone.
          </p>

          <p>
            If your website takes 6 seconds to load on mobile Jio, looks like it was built in 2012, or just links to an unreadable PDF, <strong>you are losing high-paying students to competitors every single admission cycle</strong>.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <AlertCircle className="w-7 h-7 text-emerald-400 shrink-0" />
            1. Why Pamphlet & Offline Marketing Is Failing Indian Coaching Centers
          </h2>

          <p>
            Every year around March to August, coaching hubs from Kota to Kolkata and Siliguri spend between ₹50,000 to ₹3,00,000 printing pamphlets. Here is why the ROI is plummeting:
          </p>

          <ul className="space-y-3 my-6">
            <li><strong>Zero Tracking:</strong> You have no idea if 10,000 distributed flyers generated 2 calls or zero.</li>
            <li><strong>Parent Skepticism:</strong> Anyone can print a banner claiming &quot;100% Selection.&quot; Parents now demand verifiable proof, faculty profiles, and video testimonials.</li>
            <li><strong>Smartphone First Research:</strong> Today, over 88% of education searches in India occur on smartphones. Parents want to check fees, batch timings, and teacher credentials right from WhatsApp or Google.</li>
          </ul>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <TrendingUp className="w-7 h-7 text-emerald-400 shrink-0" />
            2. The 5 Website Features That Turn Visitors Into Enrolled Students
          </h2>

          <p>
            A high-converting coaching website isn&apos;t an online pamphlet—it is an automated 24/7 student counseling desk. Here are the 5 must-have components:
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">A. Verifiable Result Showcase with Student Photos & Ranks</h3>
          <p>
            Don&apos;t just write vague text. Display clear student cards with photos, AIR ranks, exam year, and student testimonials. When parents see authentic proof from their city or district, trust skyrockets.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">B. 1-Tap WhatsApp Admission Counseling Button</h3>
          <p>
            Indian parents don&apos;t like filling out 10-field contact forms and waiting 48 hours for an email. They want instant answers. Our websites feature smart WhatsApp triggers pre-filling messages like: <em>&quot;Hi, I want information regarding NEET 2027 batch admission.&quot;</em>
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">C. Free Prospectus / Sample Study Material Download</h3>
          <p>
            Offer a free downloadable PDF prospectus or previous years&apos; chapter analysis. To unlock the download, the student enters their name and WhatsApp number. Your counseling team now receives warm, qualified leads every morning.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">D. Faculty Credentials & Experience Bios</h3>
          <p>
            Parents send their children to teachers, not buildings. Showcase your faculty: degrees (IIT/NIT/MBBS/Ph.D.), years of teaching experience, and subjects handled.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">E. Local Google SEO & Map Integration</h3>
          <p>
            When a parent in Siliguri or Kolkata types <em>&quot;best NEET coaching near me&quot;</em> or <em>&quot;commerce coaching in Siliguri&quot;</em>, your website must rank on Page 1. This is powered by local schema markup, high speed, and location pages.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <DollarSign className="w-7 h-7 text-emerald-400 shrink-0" />
            3. Coaching Website Cost Breakdown in India (2026)
          </h2>

          <p>
            How much should you realistically budget? Here is a transparent breakdown:
          </p>

          {/* Pricing Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse border border-zinc-800 text-sm">
              <thead>
                <tr className="bg-zinc-900/90 text-white border-b border-zinc-800">
                  <th className="p-4 font-semibold">Tier</th>
                  <th className="p-4 font-semibold">Cost (INR)</th>
                  <th className="p-4 font-semibold">Included Features</th>
                  <th className="p-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Starter Academy</td>
                  <td className="p-4 text-white">₹18,000 – ₹30,000</td>
                  <td className="p-4 text-zinc-300">5-7 pages, results gallery, faculty list, WhatsApp integration, mobile SEO</td>
                  <td className="p-4 text-zinc-400">Single center tuition classes, local subject tutors</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Growth Admission Engine</td>
                  <td className="p-4 text-white">₹45,000 – ₹75,000</td>
                  <td className="p-4 text-zinc-300">Prospectus lead capture, test series landing pages, online admission form, rank filter, local SEO</td>
                  <td className="p-4 text-zinc-400">Established JEE/NEET/WBJEE institutes (2-5 branches)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-emerald-400">Multi-Branch EdTech Portal</td>
                  <td className="p-4 text-white">₹95,000 – ₹1,80,000</td>
                  <td className="p-4 text-zinc-300">Student portal, test score upload, fee payment gateway, multi-city branch pages, LMS sync</td>
                  <td className="p-4 text-zinc-400">Regional coaching chains & career colleges</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <BookOpen className="w-7 h-7 text-emerald-400 shrink-0" />
            4. The Real ROI: How Just 2 New Students Pay for Your Entire Website
          </h2>

          <p>
            Consider the mathematics of coaching fees in India. If your annual fee per student is ₹30,000 to ₹80,000:
          </p>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-6">
            <p className="text-zinc-200 font-semibold mb-2">The Admission Math:</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• A professional custom website costs: <strong>₹35,000 (one-time)</strong></li>
              <li>• Average student tuition fee: <strong>₹45,000 / year</strong></li>
              <li>• If the website brings in just <strong>2 additional students</strong> through Google & WhatsApp: <strong>₹90,000 revenue</strong></li>
              <li>• <strong>Net Profit after paying for website: +₹55,000 in Year 1 alone.</strong></li>
            </ul>
          </div>

          <p>
            Unlike pamphlet marketing which expires the moment it hits the dustbin, your custom website works 365 days a year, building authority and capturing student leads while you focus on teaching.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" />
            Conclusion: Prepare for the Next Admission Cycle Today
          </h2>

          <p>
            The coaching centers dominating admissions in Siliguri, Kolkata, and across India are not relying on luck. They have engineered modern digital funnels that meet parents right where they are: searching on Google and chatting on WhatsApp.
          </p>

          {/* CTA Box */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
            <Sparkles className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Want 3x More Student Inquiries for Your Coaching Center?
            </h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              D&B Digitals builds specialized high-speed websites for Indian coaching academies and schools. Talk to our founders today for a free consultation and personalized website blueprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20run%20a%20coaching%20institute%20and%20want%20to%20discuss%20a%20website%20for%20more%20student%20inquiries."
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
                Explore Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
