'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitContactForm } from '@/app/actions';
import { ContactFormSchema, ContactFormInput } from '@/app/schemas';

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; message?: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phone: '',
      projectType: '',
      budgetRange: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormInput) => {
    setSubmitResult(null);
    startTransition(async () => {
      const result = await submitContactForm(null, data);
      setSubmitResult(result);
      if (result.success) {
        reset();
      }
    });
  };

  return (
    <div className="relative min-h-screen pt-10 pb-20">
      
      {/* Background grids */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3 animate-pulse">Contact Us</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Let's Talk About <br />
            Your Next Project
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Have a project in mind, need branding support, or want to audit your existing site speed? Reach out to us. We respond in under 24 hours.
          </p>
        </div>

        {/* Contact Info & Form Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left Cards column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action cards */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Direct Channels</h3>
              
              {/* Call Now */}
              <a
                href="tel:+918918186698"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/15">
                    <Phone className="h-5 w-5 text-primary-light" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-zinc-500">Call Co-Founders</div>
                    <div className="text-sm font-bold text-white">+91 89181 86698</div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-primary-light group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* WhatsApp Now */}
              <a
                href="https://wa.me/918918186698"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-green-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-zinc-500">WhatsApp Chat</div>
                    <div className="text-sm font-bold text-white">Live Discussion</div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-green-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Email */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-950 border border-zinc-900">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-zinc-500">Email Inquiry</div>
                  <div className="text-sm font-bold text-white">hello@pixelstack.agency</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-950 border border-zinc-900">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-zinc-500">Agency Location</div>
                  <div className="text-sm font-bold text-white">Siliguri, West Bengal, IN</div>
                </div>
              </div>

            </div>

            {/* Note card */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-left">
              <span className="text-xs font-bold text-white block mb-2">Project Min. Budget</span>
              <p className="text-zinc-500 text-xs leading-relaxed">
                To guarantee maximum attention to detail, code optimization, and founders support, our custom Next.js agency contracts begin at **₹50,000**.
              </p>
            </div>

          </div>

          {/* Right Form column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 relative">
              
              {submitResult?.success ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                    {submitResult.message}
                  </p>
                  <button
                    onClick={() => setSubmitResult(null)}
                    className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl text-xs hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                  
                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Debanjan Amin"
                        {...register('name')}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Business Name
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        placeholder="e.g. Riviera Group"
                        {...register('businessName')}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                      {errors.businessName && (
                        <p className="text-xs text-red-400 mt-1">{errors.businessName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="name@company.com"
                        {...register('email')}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. +91 89181 86698"
                        {...register('phone')}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Type & Budget Range */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        {...register('projectType')}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none"
                      >
                        <option value="">Select Project Type</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="SEO Foundation">SEO Foundation</option>
                        <option value="Digital Growth">Digital Growth / Branding</option>
                      </select>
                      {errors.projectType && (
                        <p className="text-xs text-red-400 mt-1">{errors.projectType.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="budgetRange" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budgetRange"
                        {...register('budgetRange')}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="₹50,000 - ₹80,000">₹50,000 - ₹80,000</option>
                        <option value="₹80,000 - ₹1,20,000">₹80,000 - ₹1,20,000</option>
                        <option value="₹1,20,000 - ₹2,00,000">₹1,20,000 - ₹2,00,000</option>
                        <option value="₹2,00,000+">₹2,00,000+</option>
                        <option value="Under ₹30,000">Under ₹30,000 (Non-standard)</option>
                      </select>
                      {errors.budgetRange && (
                        <p className="text-xs text-red-400 mt-1">{errors.budgetRange.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Outline your project scope, target launch date, and features..."
                      {...register('message')}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Error */}
                  {submitResult && !submitResult.success && (
                    <p className="text-xs text-red-400 font-semibold">{submitResult.message}</p>
                  )}

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full mt-6 py-4 bg-gradient-to-r from-emerald-700 to-emerald-900 hover:from-emerald-600 hover:to-emerald-800 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isPending ? 'Sending Message...' : 'Send Message'} <Send className="h-4.5 w-4.5" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* ================= GOOGLE MAP SECTION ================= */}
        <div className="w-full rounded-2xl border border-white/5 bg-zinc-950 p-2 overflow-hidden shadow-2xl">
          <div className="text-left p-4 pb-2">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Agency Headquarters</span>
            <h4 className="text-sm font-bold text-white mt-1">Siliguri, West Bengal, India</h4>
          </div>
          <div className="w-full aspect-[21/9] md:aspect-[3/1] rounded-xl overflow-hidden relative">
            <iframe
              src="https://maps.google.com/maps?q=Siliguri,West%20Bengal,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                // Dark premium theme CSS filter
                filter: 'invert(90%) hue-rotate(180deg) grayscale(100%) contrast(90%)'
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

    </div>
  );
}
