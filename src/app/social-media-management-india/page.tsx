'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import {
  Share2,
  Video,
  ImageIcon,
  BarChart2,
  MessageCircle,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Zap,
  Star,
  HelpCircle,
  ChevronRight,
  Palette,
  Film,
  Sparkles,
} from 'lucide-react';

const SOCIAL_SERVICES = [
  {
    icon: Film,
    title: 'Viral Instagram Reels Production',
    desc: 'Scripting, hooks, video editing, and trending audio curation engineered to capture algorithm reach and drive profile visits across India.',
  },
  {
    icon: Share2,
    title: 'Done-For-You Instagram Management',
    desc: 'Daily aesthetic grid curation, carousels, story engagement, and direct message handling to build a loyal customer community.',
  },
  {
    icon: Zap,
    title: 'High-Converting Meta Ads (FB & IG)',
    desc: 'Precision audience targeting, retargeting ad funnels, and WhatsApp lead campaigns that turn casual scrollers into paying buyers.',
  },
  {
    icon: Palette,
    title: 'Brand Creatives & Visual Identity',
    desc: 'Cohesive typography, custom color palettes, and graphic design templates that make your brand stand out from generic competitors.',
  },
  {
    icon: BarChart2,
    title: 'B2B LinkedIn Content & Authority',
    desc: 'Thought leadership, founder branding, and company page growth designed to build executive trust and enterprise inquiries.',
  },
  {
    icon: Sparkles,
    title: 'Monthly Analytics & Growth Strategy',
    desc: 'Deep-dive review of engagement rates, follower conversion, ad ROAS, and content strategy iteration every 30 days.',
  },
];

const BUSINESS_TYPES = [
  { label: 'D2C & Fashion Brands', detail: 'Viral styling reels & catalog ads' },
  { label: 'Restaurants & Cloud Kitchens', detail: 'Food preparation reels & foot-traffic promos' },
  { label: 'Coaching & EdTech Academies', detail: 'Faculty reels & WhatsApp admission funnels' },
  { label: 'Doctors & Dental Clinics', detail: 'Patient education & high-ticket procedure leads' },
  { label: 'Hotels & Luxury Homestays', detail: 'Travel reels & direct booking inquiries' },
  { label: 'Real Estate Developers', detail: 'Walkthrough property reels & HNW investor leads' },
];

const DELIVERABLES = [
  'Full Monthly Content Calendar Planning',
  '3 to 5 High-Quality Posts / Reels Every Week',
  'Custom Hook Scripting & Storyboarding',
  'Professional Video Editing & Sound Design',
  'Hashtag Research & SEO-Optimized Captions',
  'Meta Paid Ad Creative Design & Setup',
  'Community Management & Inbound DM Guidance',
  'Transparent Monthly ROI & Reach Reports',
];

const STATS = [
  { value: '3–5 Reels', label: 'Per Week Delivery' },
  { value: '100% Custom', label: 'Zero Generic Templates' },
  { value: 'Pan-India', label: 'Audience Targeting' },
  { value: 'WhatsApp', label: 'Direct Conversion Desk' },
];

const FAQS = [
  {
    q: 'How many posts and reels do you create per week?',
    a: 'We deliver 3 to 5 high-converting posts and short-form Reels per week depending on your customized growth package, complete with graphic carousels, story updates, and caption copy.',
  },
  {
    q: 'How do you handle content creation remotely for businesses across India?',
    a: 'You do not need an in-house film crew. You simply share raw smartphone video clips, customer reactions, or product photos via Google Drive. Our professional post-production team edits, color grades, and captions them into polished viral Reels.',
  },
  {
    q: 'Do you manage paid Meta (Facebook & Instagram) ads as well?',
    a: 'Yes! We design the creatives, configure the audience targeting (location, age, buyer intent), manage the ad spend, and report on real cost-per-lead and ROAS.',
  },
  {
    q: 'How soon can we see social media growth in followers and inquiries?',
    a: 'Reel visibility and algorithmic reach typically ramp up within 2 to 3 weeks of consistent posting. Paid Meta ad campaigns generate direct WhatsApp inquiries within the first 5 to 7 days.',
  },
];

const WA_LINK =
  'https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20am%20looking%20for%20social%20media%20management%20services%20in%20India.%20Can%20we%20connect%3F';

export default function SocialMediaIndiaPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-28 pb-24">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-8 pb-20 border-b border-zinc-800 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs md:text-sm font-semibold mb-6"
          >
            <Share2 className="w-4 h-4" />
            Social Media & Instagram Growth Agency — India
          </motion.div>

          <SplitText
            text="Social Media Management in India"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl md:text-2xl text-pink-300 font-medium mb-4"
          >
            Turn Casual Followers Into Loyal, Paying Clients.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Stop wasting time posting low-effort graphics that get zero reach. D&B Digitals crafts viral short-form Reels, high-converting Meta ad campaigns, and cohesive visual identities for brands across India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base transition-all shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp (+91 89181 86998)
            </a>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-medium text-base transition-all"
            >
              Explore Social Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 md:px-12 lg:px-24 py-12 border-b border-zinc-800 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((st) => (
            <div key={st.label}>
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{st.value}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-pink-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              Full-Stack Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Everything Your Brand Needs on Social
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              From video scripting to post-production, paid ad scaling to DM funnels — complete 360° social management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIAL_SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-pink-500/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 100% Done-For-You Deliverables Checklist */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800 bg-zinc-950/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-pink-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              100% Hands-Free Delivery
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              You Run Your Business. We Scale Your Brand.
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              No need to hire full-time editors, scriptwriters, and ad managers. D&B Digitals acts as your complete in-house content and social growth team for a fraction of the payroll cost.
            </p>
            <div className="space-y-3">
              {DELIVERABLES.map((del) => (
                <div key={del} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-pink-400" />
              Sectors We Specialize In
            </h3>
            <div className="space-y-4">
              {BUSINESS_TYPES.map((bt) => (
                <div key={bt.label} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
                  <h4 className="text-sm font-bold text-white mb-1">{bt.label}</h4>
                  <p className="text-zinc-400 text-xs">{bt.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800"
              >
                <h4 className="text-base md:text-lg font-semibold text-white mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-zinc-400 text-sm pl-7 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Build an Unignorable Brand Online?
            </h2>
            <p className="text-zinc-400 text-base mb-8 leading-relaxed">
              Let’s schedule a 10-minute discovery call to map out your 90-day Instagram Reels and Meta advertising roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp (+91 89181 86998)
              </a>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium text-base transition-all"
              >
                View Creative Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
