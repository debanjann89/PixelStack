'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import { Home, Search, Map, Users, Video, Send, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export default function RealEstatePage() {
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
            text="Real Estate Websites That Sell Properties"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            delay={50}
          />
          <motion.p 
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Custom real estate website development designed for agencies and top producers. Capture more leads, showcase listings beautifully, and dominate your local market.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button onClick={handleConsultation} className="bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="/services" className="border border-zinc-700 text-white px-8 py-4 rounded-full hover:bg-zinc-900 transition-colors w-full sm:w-auto text-center">
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Pain Points */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Generic Real Estate Sites Fail</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Stand out in a crowded market. Templated MLS sites don't convert visitors into actual clients.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Clunky IDX Integration</h3>
              <p className="text-zinc-400">Many real estate templates just iframe an ugly MLS search. We build custom, beautifully styled property searches that keep users engaged on your domain.</p>
            </motion.div>
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Poor Lead Capture</h3>
              <p className="text-zinc-400">If your site doesn't aggressively and elegantly ask for the user's information in exchange for value, you are missing out on thousands of dollars in potential commissions.</p>
            </motion.div>
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lack of Personal Brand</h3>
              <p className="text-zinc-400">Buyers and sellers hire you, not just a property list. A generic site fails to highlight your local expertise, your track record, and the unique value your agency provides.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Features */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built to Convert Browsers into Buyers</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our custom real estate platforms include the advanced features top agencies rely on.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Search, title: 'Advanced Search & Filters', desc: 'Customizable property search functionalities with interactive maps, save-search capabilities, and precise filtering.' },
              { icon: Home, title: 'Property Listing Galleries', desc: 'Stunning property detail pages that prioritize high-res photos, clean layouts, and essential property data.' },
              { icon: Map, title: 'Neighborhood Guides', desc: 'Detailed, content-rich local area guides that boost your SEO and position you as the ultimate community expert.' },
              { icon: Users, title: 'Agent Profile Pages', desc: 'Dedicated pages for your team members highlighting their sales history, active listings, and personal biographies.' },
              { icon: Send, title: 'Lead Capture Forms', desc: 'Strategic placement of lead magnets, home valuation requests, and showing schedule forms that sync with your CRM.' },
              { icon: Video, title: 'Virtual Tour Integration', desc: 'Seamless embedding of Matterport or video walkthroughs directly on the listing pages for remote buyers.' },
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

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {[
              { q: 'Can you integrate our local MLS/IDX feed?', a: 'Yes. We are experienced in working with various IDX providers and MLS systems. We ensure properties sync accurately and the search interface looks custom to your brand, rather than a bolted-on widget.' },
              { q: 'Will the website integrate with my CRM?', a: 'We can integrate your lead forms with top real estate CRMs like Follow Up Boss, BoomTown, Salesforce, or standard email marketing platforms via API or webhook.' },
              { q: 'How do neighborhood guides help my business?', a: 'Neighborhood guides are incredibly powerful for local SEO. They help you rank for hyper-local search terms (e.g., "homes for sale in [Neighborhood]") while providing genuine value to buyers researching an area.' },
              { q: 'Do you build single-property websites?', a: 'Yes, in addition to full brokerage sites, we can develop high-end, immersive single-property websites tailored for luxury listings that require their own dedicated marketing presence.' }
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
      <section className="py-24 px-4 bg-[#050505]">
        <motion.div 
          className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Close More Deals with a Better Website</h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">Upgrade your real estate brand with a premium digital platform designed to generate high-quality leads.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleConsultation} className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors">
              Schedule a Strategy Call
            </button>
            <Link href="/contact" className="border border-zinc-700 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-colors">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
