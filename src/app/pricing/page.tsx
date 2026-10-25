'use client';

import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Crown, Building2, MessageCircle } from 'lucide-react';

export default function PricingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <SplitText text="Project Investment & Packages" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" />
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Tailored digital solutions engineered for your business goals. Every project is custom-quoted based on your exact scope—no rigid templates or cookie-cutter pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Starter Plan */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 flex flex-col h-full relative group hover:border-zinc-700 transition-colors">
            <div className="mb-8">
              <Zap className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">Perfect for local shops, clinics, and personal brands</p>
              <div className="mb-1">
                <span className="text-2xl font-bold text-white">Custom Quote</span>
              </div>
              <div className="text-emerald-400 text-xs font-medium">Tailored to your exact pages & design</div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {['5-7 pages responsive website', 'Mobile-first design', 'Contact form + WhatsApp integration', 'Basic SEO setup (meta tags, sitemap)', 'Google Business Profile setup', '1 round of revisions'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-4">
              <div className="text-xs text-zinc-500 space-y-1">
                <p><span className="font-semibold text-zinc-400">Delivery:</span> 7-10 days</p>
                <p><span className="font-semibold text-zinc-400">Best for:</span> Local shops, consultants, clinics</p>
              </div>
              <a
                href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20am%20interested%20in%20a%20quotation%20for%20the%20Starter%20website%20package."
                target="_blank"
                rel="noreferrer"
                className="w-full border border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-400 font-medium px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Get Instant Quote on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Professional Plan */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0a0a0a] border-2 border-emerald-500/50 rounded-2xl p-8 flex flex-col h-full relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </div>
            <div className="mb-8 mt-2">
              <Crown className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Growth & Leads</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">For businesses ready to aggressively generate inquiries online</p>
              <div className="mb-1">
                <span className="text-2xl font-bold text-white">Custom Growth Scope</span>
              </div>
              <div className="text-emerald-400 text-xs font-medium">Tailored for maximum lead conversion</div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {['10-20 pages custom design', 'Next.js SSR/SSG architecture', 'Advanced SEO (JSON-LD, canonicals)', 'Blog/content management system', 'Booking/appointment integration', 'Google Analytics + Search Console', 'Core Web Vitals optimization', '3 rounds of revisions'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-4">
              <div className="text-xs text-zinc-500 space-y-1">
                <p><span className="font-semibold text-zinc-400">Delivery:</span> 2-4 weeks</p>
                <p><span className="font-semibold text-zinc-400">Best for:</span> Hotels, clinics, coaching institutes, contractors</p>
              </div>
              <a
                href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20want%20to%20discuss%20a%20custom%20quotation%20for%20the%20Growth%20website%20plan."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                Request Custom Quote
              </a>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 flex flex-col h-full relative group hover:border-zinc-700 transition-colors">
            <div className="mb-8">
              <Building2 className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">Full digital transformation for established businesses & chains</p>
              <div className="mb-1">
                <span className="text-2xl font-bold text-white">Enterprise Scope</span>
              </div>
              <div className="text-emerald-400 text-xs font-medium">Bespoke architecture & multi-branch systems</div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {['Unlimited pages, custom architecture', 'Custom booking engine / e-commerce', 'Multi-language support', 'API integrations (payment gateways, CRM)', 'Admin dashboard for content management', 'Ongoing SEO & performance monitoring', 'Priority support + dedicated project manager'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-4">
              <div className="text-xs text-zinc-500 space-y-1">
                <p><span className="font-semibold text-zinc-400">Delivery:</span> 4-8 weeks</p>
                <p><span className="font-semibold text-zinc-400">Best for:</span> Hotel chains, schools, multi-location brands, SaaS</p>
              </div>
              <a
                href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%20would%20like%20to%20discuss%20an%20Enterprise%20website%20consultation."
                target="_blank"
                rel="noreferrer"
                className="w-full border border-zinc-700 hover:border-zinc-500 text-white font-medium px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Discuss Enterprise Scope
              </a>
            </div>
          </motion.div>
        </div>

        {/* Not sure section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which plan is right for you?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Let's discuss your specific needs and create a custom proposal. We're here to help you make the best decision for your business. Read more about <Link href="/blog/how-much-should-a-small-business-website-cost" className="text-emerald-500 hover:underline">how much a small business website should cost</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%27d%20like%20to%20discuss%20pricing%20for%20my%20project." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <Link href="/portfolio" className="text-white hover:text-emerald-500 font-medium px-8 py-4 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Or explore our work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-zinc-800 pb-6">
              <h4 className="text-lg font-bold text-white mb-2">Do you offer payment plans?</h4>
              <p className="text-zinc-400">Yes, we typically structure payments in milestones: 50% upfront to start, 25% upon design approval, and 25% prior to final launch. For larger enterprise projects, we can discuss custom payment schedules.</p>
            </div>
            <div className="border-b border-zinc-800 pb-6">
              <h4 className="text-lg font-bold text-white mb-2">What's included in the price?</h4>
              <p className="text-zinc-400">All prices include design, development, basic SEO setup, responsive testing, and deployment. We don't charge hidden fees for standard features agreed upon in the initial scope.</p>
            </div>
            <div className="border-b border-zinc-800 pb-6">
              <h4 className="text-lg font-bold text-white mb-2">How long does a project take?</h4>
              <p className="text-zinc-400">Starter websites typically take 7-10 days. Professional tier sites take 2-4 weeks, and Enterprise projects can take 4-8 weeks depending on the complexity of features and your feedback turnaround time.</p>
            </div>
            <div className="border-b border-zinc-800 pb-6">
              <h4 className="text-lg font-bold text-white mb-2">Can I upgrade my plan later?</h4>
              <p className="text-zinc-400">Absolutely. We build our websites on scalable architectures. You can start with a Starter plan and add Professional or Enterprise features as your business grows.</p>
            </div>
            <div className="pb-6">
              <h4 className="text-lg font-bold text-white mb-2">Do you offer maintenance after delivery?</h4>
              <p className="text-zinc-400">Yes, we offer ongoing maintenance and support packages starting at ₹3,000/month to keep your website secure, updated, and performing optimally. We'll discuss these options with you before launch.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
