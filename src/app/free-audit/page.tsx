'use client';

import { useState } from 'react';
import Link from 'next/link';
import SplitText from '@/components/SplitText';
import { motion } from 'framer-motion';
import { Gauge, Search, Smartphone, TrendingUp, ShieldCheck, Clock, CheckCircle2, Send, MessageCircle } from 'lucide-react';

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    websiteUrl: '',
    whatsapp: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi D&B Digitals, I'd like a free website audit.\n\nName: ${formData.name}\nBusiness: ${formData.businessType}\nWebsite: ${formData.websiteUrl}\nWhatsApp: ${formData.whatsapp}`;
    window.open(`https://wa.me/918918186998?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <SplitText text="Get Your Free Website Audit" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight justify-center" />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Find out exactly what's holding your website back from ranking on Google and generating leads. We'll analyze your site and deliver a detailed report within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="bg-[#0a0a0a] border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300 font-medium">500+ Websites Audited</span>
            <span className="bg-[#0a0a0a] border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300 font-medium">24-Hour Delivery</span>
            <span className="bg-[#0a0a0a] border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300 font-medium">100% Free</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { title: 'Speed & Performance', desc: 'Core Web Vitals, load time, server response, render-blocking resources', icon: <Gauge className="w-6 h-6 text-emerald-500" /> },
            { title: 'SEO Health', desc: 'Meta tags, schema markup, sitemap, indexing status, keyword optimization', icon: <Search className="w-6 h-6 text-emerald-500" /> },
            { title: 'Mobile Responsiveness', desc: 'Mobile layout, touch targets, viewport configuration, font sizing', icon: <Smartphone className="w-6 h-6 text-emerald-500" /> },
            { title: 'Conversion Potential', desc: 'CTA placement, form usability, trust signals, user flow analysis', icon: <TrendingUp className="w-6 h-6 text-emerald-500" /> }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
              <div className="bg-zinc-900 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <h2 className="text-3xl font-bold text-white mb-8 text-center relative z-10">Request Your Audit Now</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Your Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Business Type</label>
                <select required name="businessType" value={formData.businessType} onChange={handleChange} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all appearance-none">
                  <option value="" disabled>Select your business type</option>
                  <option value="Dental Clinic">Dental Clinic</option>
                  <option value="Hotel/Resort">Hotel/Resort</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Salon/Spa">Salon/Spa</option>
                  <option value="HVAC/Contractor">HVAC/Contractor</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Your Website URL</label>
                <input required type="url" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" placeholder="https://yourwebsite.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">WhatsApp Number</label>
                <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4">
              Get My Free Audit <Send className="w-5 h-5" />
            </button>

            <p className="text-center text-zinc-500 text-sm mt-4">
              We'll review your website and send a detailed report to your WhatsApp within 24 hours.<br className="hidden md:block"/> No spam, no sales pitch — just actionable insights.
            </p>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-between relative">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-[2px] bg-zinc-800"></div>
            
            {[
              { title: 'Submit Your Details', desc: 'Fill out the form above. Takes 30 seconds.', icon: <Clock className="w-6 h-6 text-black" /> },
              { title: 'We Analyze Everything', desc: "Our team runs a comprehensive audit of your website's speed, SEO, mobile experience, and conversion elements.", icon: <ShieldCheck className="w-6 h-6 text-black" /> },
              { title: 'Get Your Report', desc: 'Receive a detailed, actionable report on WhatsApp within 24 hours. No strings attached.', icon: <CheckCircle2 className="w-6 h-6 text-black" /> }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10 flex-1">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4 ring-4 ring-black">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-zinc-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center border-t border-zinc-800 pt-12">
          <h3 className="text-xl font-bold text-white mb-6">Prefer to chat directly?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/918918186998?text=Hi%20D%26B%20Digitals%2C%20I%27d%20like%20a%20free%20website%20audit." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3 rounded-full transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <div className="flex items-center gap-4 text-sm font-medium mt-4 sm:mt-0">
              <Link href="/pricing" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                Explore our pricing
              </Link>
              <span className="text-zinc-700">•</span>
              <Link href="/portfolio" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                See our work
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
