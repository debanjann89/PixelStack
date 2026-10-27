'use client';

import React from 'react';
import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  AlertCircle,
  Search,
  Share2,
  Star,
  Zap,
  Globe,
  Phone,
} from 'lucide-react';

export default function GetMoreStudentsArticlePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <SplitText
            text="How to Get More Students for Your Coaching Institute Online (2026)"
            className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
          />
          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm border-b border-zinc-800 pb-8 mb-12">
            <span className="font-semibold text-zinc-300">Debanjan Amin</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>Oct 27, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>9 min read</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-emerald-400 font-medium">Education Marketing</span>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-li:text-zinc-300">
          <p className="text-xl text-zinc-200 leading-relaxed font-normal">
            You have excellent faculty, proven results, and satisfied students. But your next batch isn&apos;t filling up fast enough. The problem isn&apos;t your teaching — it&apos;s your digital visibility. In 2026, over 90% of Indian parents research coaching centres online before making a call. If your institute isn&apos;t showing up where they&apos;re searching, your competition is getting those admissions. Here is exactly how to fix that.
          </p>

          {/* Section 1 — Local SEO */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <Search className="w-7 h-7 text-emerald-400 shrink-0" />
            Step 1 — Get Found on Google (Local SEO for Coaching Institutes)
          </h2>

          <p>
            Google is where the admission journey begins. A parent whose child just finished Class 10 opens their phone and searches — and your institute needs to be right there at the top. Here is how to make that happen:
          </p>

          <ul className="space-y-3 my-6">
            <li>
              <strong>Google Business Profile is free and gets you into the local map pack</strong> — every coaching institute needs one set up properly, with your exact address, phone number, working hours, photos of your centre, and student reviews. This is what shows up in the map results above all other organic listings.
            </li>
            <li>
              <strong>Parents search hyper-local and exam-specific</strong> — queries like &ldquo;best coaching for JEE Siliguri&rdquo;, &ldquo;NEET coaching near me&rdquo;, and &ldquo;commerce tuition Kolkata&rdquo; are the searches you need to appear for. Each of these search intents needs a dedicated page or content on your site.
            </li>
            <li>
              <strong>Your website must mention your city, exam focus, and results clearly on every page</strong> — Google needs context signals. If your site only says &ldquo;Join our coaching&rdquo; without specifying Siliguri, JEE, or NEET, you will rank for nothing useful.
            </li>
            <li>
              <strong>Blog articles about entrance exams, study tips, and results rank on Google</strong> and bring in parents organically for months and years — without paying for ads. A post like &ldquo;JEE Mains Preparation Tips 2027&rdquo; can attract thousands of parent searches every month.
            </li>
            <li>
              <strong>Schema markup tells Google exactly what your institute is and where</strong> — this is technical but critical. Structured data for LocalBusiness, EducationalOrganization, and Course helps Google surface your institute for the right searches.
            </li>
          </ul>

          {/* Section 2 — Social Media */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <Share2 className="w-7 h-7 text-emerald-400 shrink-0" />
            Step 2 — Use Instagram and Facebook the Right Way
          </h2>

          <p>
            Most coaching institutes waste social media posting nothing but exam tips that only students see — not the parents who make the admission decision. Here is what actually works:
          </p>

          <ul className="space-y-3 my-6">
            <li>
              <strong>Post student success stories with their permission</strong> — marks, selections, rank improvements. A reel showing a student who went from 60% to AIR 1200 in JEE is infinitely more powerful than any ad.
            </li>
            <li>
              <strong>Faculty introduction reels</strong> — parents want to know who is teaching their child before they walk through your door. A 60-second video of your Physics teacher explaining their IIT background builds immediate credibility.
            </li>
            <li>
              <strong>&ldquo;Day in the life&rdquo; reels of your institute</strong> build trust before they even visit — show your classrooms, study environment, doubt-clearing sessions, and library. Authenticity wins over polished ads.
            </li>
            <li>
              <strong>Live sessions and doubt-clearing clips show teaching quality</strong> — a 3-minute clip of your teacher solving a tricky JEE problem demonstrates competence in a way no brochure ever could.
            </li>
            <li>
              <strong>Paid Facebook/Instagram ads targeted to parents aged 35–55 in your city</strong> — these are cheap in India (often ₹2–5 per click) and highly effective when targeted by location and age group. A ₹5,000 campaign can generate 20–40 genuine inquiries.
            </li>
            <li>
              <strong>Post 4–5 times per week minimum</strong> — consistency matters more than perfection. Use Canva templates, phone-shot reels, and student testimonials. You don&apos;t need a professional video crew.
            </li>
          </ul>

          {/* Section 3 — WhatsApp */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <MessageCircle className="w-7 h-7 text-emerald-400 shrink-0" />
            Step 3 — WhatsApp as Your Admission Funnel
          </h2>

          <p>
            WhatsApp is the most used app in India. It is also the most under-used admission tool by coaching institutes. Here is how to turn it into a 24/7 inquiry machine:
          </p>

          <ul className="space-y-3 my-6">
            <li>
              <strong>Every digital touchpoint should have a WhatsApp link</strong> — your website header and footer, Instagram bio, Google Business Profile description, Facebook page, and even your email signature. Make it impossible to miss.
            </li>
            <li>
              <strong>Create a WhatsApp Business account</strong> with your institute name, working hours, a profile photo of your centre, and quick reply messages for common questions like fees, batch timings, and demo class availability.
            </li>
            <li>
              <strong>Set up a WhatsApp catalog</strong> showing your courses, fees (or &ldquo;contact for fees&rdquo;), batch timings, and exam focus areas. Parents can browse your offerings without waiting for a reply.
            </li>
            <li>
              <strong>Use WhatsApp Broadcast to send updates to interested parents weekly</strong> — batch start dates, free demo class invites, result announcements, and exam preparation tips keep your institute top of mind.
            </li>
            <li>
              <strong>Respond within 5 minutes when someone inquires</strong> — speed of response is the number one factor in admission conversion. An inquiry that waits 24 hours for a reply has already been lost to a competitor who replied in 10 minutes.
            </li>
            <li>
              <strong>Create a simple 3-step admission flow:</strong> Google or Instagram → WhatsApp inquiry → Free demo class invite. Remove every barrier between a parent&apos;s first interest and their first visit to your institute.
            </li>
          </ul>

          {/* Section 4 — Website */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <Globe className="w-7 h-7 text-emerald-400 shrink-0" />
            Step 4 — Your Website Must Do the Heavy Lifting
          </h2>

          <p>
            In 2026, your website is your most important salesperson — working 24 hours a day, 7 days a week, never taking a day off. Here is what a coaching institute website must have:
          </p>

          <ul className="space-y-3 my-6">
            <li>
              <strong>Mobile speed under 3 seconds</strong> — most parents in India use Jio on mobile. If your site takes 6 seconds to load, 70% of visitors leave before they see anything. Speed is not optional.
            </li>
            <li>
              <strong>Clear course list with exam names</strong> — JEE, NEET, WBJEE, UPSC, CA Foundation, Class 8–12 Boards. Parents need to confirm immediately that you teach what their child needs.
            </li>
            <li>
              <strong>Faculty profiles with photos and qualifications</strong> — degrees, IIT/NIT/MBBS backgrounds, years of experience, and subject specialisations. Parents choose teachers, not buildings.
            </li>
            <li>
              <strong>Student result showcase</strong> with marks, selections, and photographs (with permission) — this is your strongest conversion tool. Authentic results from real students beat every advertisement.
            </li>
            <li>
              <strong>WhatsApp button visible on every page</strong> — not buried in the footer. Pinned to the bottom of the screen on mobile so it is always one tap away.
            </li>
            <li>
              <strong>Simple inquiry form that takes 30 seconds to fill</strong> — name, phone, exam interest, and class. Nothing more. Every extra field reduces submissions by 20%.
            </li>
            <li>
              <strong>Free demo class CTA</strong> — this reduces the barrier to the first visit dramatically. &ldquo;Book a Free Demo Class&rdquo; converts far better than &ldquo;Contact Us.&rdquo;
            </li>
            <li>
              <strong>Google Maps embed showing your location</strong> — parents want to check distance from home before making a call. Make it easy for them to find you.
            </li>
          </ul>

          {/* Section 5 — 90-Day System */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <TrendingUp className="w-7 h-7 text-emerald-400 shrink-0" />
            Step 5 — The 90-Day Student Acquisition System
          </h2>

          <p>
            Rather than trying everything at once and burning out, follow this structured 90-day roadmap to build a sustainable digital admission engine:
          </p>

          <div className="space-y-6 my-8">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3">Month 1 — Foundation</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Claim and fully optimise your Google Business Profile with photos, hours, and category</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Audit your website for speed, mobile experience, and clear CTAs — fix critical issues</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Set up WhatsApp Business with quick replies, catalogue, and away messages</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Start posting on Instagram consistently — 4 posts per week minimum, mix of student stories and faculty reels</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3">Month 2 — Amplify</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Run your first Facebook/Instagram ad campaign with a ₹3,000–₹8,000 budget targeting local parents</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Collect 20+ WhatsApp leads from organic + paid channels and invite all for a free demo class</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Publish 2 blog articles targeting local exam search queries on your website</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Ask the 5 most satisfied parents to leave a Google review — reviews accelerate rankings dramatically</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3">Month 3 — Convert &amp; Scale</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Follow up every WhatsApp lead that attended demo class — minimum 3 touchpoints over 10 days</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Collect Google reviews from every newly enrolled student</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Retarget website visitors who didn&apos;t inquire with Facebook/Instagram ads showing student success stories</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Scale your ad budget based on cost-per-inquiry data from Month 2</li>
              </ul>
            </div>
          </div>

          {/* Section 6 — Mistakes */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
            <AlertCircle className="w-7 h-7 text-emerald-400 shrink-0" />
            The 3 Biggest Mistakes Coaching Institutes Make Online
          </h2>

          <p>
            Avoid these common pitfalls that silently kill digital admission pipelines:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-950/50">
              <span className="text-2xl font-black text-emerald-400 shrink-0">1</span>
              <div>
                <p className="font-bold text-white mb-1">Making a website and never updating it</p>
                <p className="text-zinc-400 text-sm">Google rewards fresh, active websites. A site that hasn&apos;t been touched since 2023 ranks below competitors who add content monthly. Regular blog posts, result updates, and batch announcements signal to Google that your site is alive and relevant.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-950/50">
              <span className="text-2xl font-black text-emerald-400 shrink-0">2</span>
              <div>
                <p className="font-bold text-white mb-1">Only posting exam tips on Instagram</p>
                <p className="text-zinc-400 text-sm">Exam tips are consumed by students, not parents making admission decisions. Mix your content: 30% educational tips, 40% trust-building (faculty, institute tour, behind-the-scenes), and 30% social proof (student results, testimonials, rankings).</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-950/50">
              <span className="text-2xl font-black text-emerald-400 shrink-0">3</span>
              <div>
                <p className="font-bold text-white mb-1">Not following up with WhatsApp inquiries</p>
                <p className="text-zinc-400 text-sm">80% of admissions happen after 3 or more follow-up touchpoints. Most institutes reply once and give up. Build a simple follow-up sequence: reply immediately, follow up on Day 3 with a demo class reminder, and follow up again on Day 7 with a limited seat message.</p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 mt-12">
            <GraduationCap className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Want a Digital Marketing Plan Specifically for Your Coaching Institute?
            </h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              We&apos;ve helped coaching institutes in India get more inquiry calls and fill batches faster. Tell us about your institute and we&apos;ll build a custom plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20run%20a%20coaching%20institute%20and%20want%20to%20get%20more%20students%20online.%20Can%20we%20discuss%3F"
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

          {/* Related Articles */}
          <div className="mt-16 pt-10 border-t border-zinc-800">
            <h3 className="text-lg font-bold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blog/coaching-institute-website-design-india"
                className="block p-5 rounded-xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-600 transition-colors group"
              >
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">Education &amp; Lead Gen</p>
                <p className="text-white font-semibold text-sm leading-snug group-hover:text-emerald-300 transition-colors">
                  Coaching Institute Website Design India: How to Get 3x More Student Inquiries in 2026
                </p>
                <span className="inline-flex items-center gap-1 text-emerald-400 text-xs mt-3 font-medium">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              <Link
                href="/blog/school-website-design-india"
                className="block p-5 rounded-xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-600 transition-colors group"
              >
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">School &amp; Admissions</p>
                <p className="text-white font-semibold text-sm leading-snug group-hover:text-emerald-300 transition-colors">
                  Private School Website Design in India: What Parents Actually Expect in 2026
                </p>
                <span className="inline-flex items-center gap-1 text-emerald-400 text-xs mt-3 font-medium">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
