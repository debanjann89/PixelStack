'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContactForm } from '@/app/actions';
import { ContactFormSchema, ContactFormInput } from '@/app/schemas';
import SplitText from '@/components/SplitText';

/* ──────────────────────────────────────────────
   Contact info data
   ────────────────────────────────────────────── */
const contactChannels = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 89181 86998',
    href: 'tel:+918918186998',
    color: 'text-primary-light',
    bgColor: 'bg-primary/10',
    borderHover: 'hover:border-primary/40',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+91 89181 86998',
    href: 'https://wa.me/918918186998',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderHover: 'hover:border-green-500/40',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'dabdigitalofficials@gmail.com',
    href: 'mailto:dabdigitalofficials@gmail.com',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderHover: 'hover:border-primary/40',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Siliguri, West Bengal, India',
    href: null,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderHover: '',
  },
];

/* ──────────────────────────────────────────────
   Dropdown options
   ────────────────────────────────────────────── */
const projectTypes = [
  'Website Development',
  'Website Redesign',
  'SEO Optimization',
  'Digital Marketing',
  'Social Media',
  'Other',
];

const budgetRanges = [
  'Under ₹15,000',
  '₹15,000 - ₹30,000',
  '₹30,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  'Above ₹1,00,000',
];

/* ──────────────────────────────────────────────
   Shared input classes
   ────────────────────────────────────────────── */
const inputClasses =
  'w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm';

const labelClasses =
  'block text-xs font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-2';

/* ──────────────────────────────────────────────
   Scroll-reveal wrapper
   ────────────────────────────────────────────── */
const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
});

/* ══════════════════════════════════════════════
   CONTACT PAGE
   ══════════════════════════════════════════════ */
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
    <div className="relative min-h-screen pt-10 pb-24">
      {/* ── Background ambient effects ── */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-32 right-16 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ═══════════════════════════════════
            HERO SECTION
            ═══════════════════════════════════ */}
        <section className="text-center max-w-3xl mx-auto mb-20 pt-8">
          <motion.span
            className="text-primary text-xs font-semibold uppercase tracking-[0.2em] block mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.span>

          <SplitText
            text="Let's Talk"
            className="heading-hero mb-6"
            scrollTrigger={true}
          />

          <motion.p
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Have a project in mind or need help scaling your digital presence? Reach out — we respond within 24 hours.
          </motion.p>
        </section>

        {/* ═══════════════════════════════════
            TWO-COLUMN LAYOUT
            ═══════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">

          {/* ── LEFT COLUMN: Heading + Contact Cards ── */}
          <motion.div className="lg:col-span-5 space-y-8" {...revealProps(0)}>
            {/* Large heading */}
            <div>
              <h2 className="heading-lg text-white leading-tight mb-4">
                Have a project in mind?{' '}
                <span className="text-gradient">We&apos;d love to hear about it.</span>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Whether you&apos;re starting from scratch or revamping an existing brand, our founders are personally involved in every project.
              </p>
            </div>

            {/* Contact channel cards */}
            <div className="space-y-3">
              {contactChannels.map((channel, idx) => {
                const Icon = channel.icon;
                const inner = (
                  <div
                    className={`card-dark flex items-center gap-4 p-4 rounded-xl transition-all group ${channel.borderHover}`}
                  >
                    <div
                      className={`w-11 h-11 rounded-lg ${channel.bgColor} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`h-5 w-5 ${channel.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">
                        {channel.label}
                      </div>
                      <div className="text-sm font-semibold text-white truncate">
                        {channel.value}
                      </div>
                    </div>
                    {channel.href && (
                      <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-primary-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    )}
                  </div>
                );

                return channel.href ? (
                  <motion.a
                    key={idx}
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noreferrer' : undefined}
                    {...revealProps(0.08 * idx)}
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div key={idx} {...revealProps(0.08 * idx)}>
                    {inner}
                  </motion.div>
                );
              })}
            </div>

            {/* Response time note */}
            <motion.div
              className="card-dark p-5 rounded-xl"
              {...revealProps(0.35)}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Average Response Time
                </span>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed">
                We typically respond within 2–4 hours during business hours. For urgent inquiries, WhatsApp is the fastest channel.
              </p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Form ── */}
          <motion.div className="lg:col-span-7" {...revealProps(0.15)}>
            <div className="card-dark p-6 md:p-8 rounded-2xl relative overflow-hidden">
              {/* Subtle top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <AnimatePresence mode="wait">
                {submitResult?.success ? (
                  /* ── SUCCESS STATE ── */
                  <motion.div
                    key="success"
                    className="text-center py-14"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    {/* Animated checkmark */}
                    <motion.div
                      className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.15 }}
                    >
                      <motion.div
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                      >
                        <CheckCircle2 className="h-10 w-10 text-primary" />
                      </motion.div>
                    </motion.div>

                    <motion.h3
                      className="heading-md text-white mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Message Sent!
                    </motion.h3>
                    <motion.p
                      className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto mb-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {submitResult.message}
                    </motion.p>
                    <motion.button
                      onClick={() => setSubmitResult(null)}
                      className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-colors cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  /* ── FORM ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Form header */}
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-white mb-1">
                        Tell us about your project
                      </h3>
                      <p className="text-zinc-500 text-xs">
                        Fill in the details and we&apos;ll get back to you shortly.
                      </p>
                    </div>

                    {/* Row 1: Name & Business Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClasses}>
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="e.g. Debanjan Amin"
                          {...register('name')}
                          className={inputClasses}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="businessName" className={labelClasses}>
                          Business Name
                        </label>
                        <input
                          id="businessName"
                          type="text"
                          placeholder="e.g. Riviera Group"
                          {...register('businessName')}
                          className={inputClasses}
                        />
                        {errors.businessName && (
                          <p className="text-xs text-red-400 mt-1.5">{errors.businessName.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className={labelClasses}>
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="name@company.com"
                          {...register('email')}
                          className={inputClasses}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 89181 86998"
                          {...register('phone')}
                          className={inputClasses}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-400 mt-1.5">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Project Type & Budget Range */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="projectType" className={labelClasses}>
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          {...register('projectType')}
                          className={`${inputClasses} appearance-none`}
                        >
                          <option value="">Select Project Type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="text-xs text-red-400 mt-1.5">{errors.projectType.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="budgetRange" className={labelClasses}>
                          Budget Range
                        </label>
                        <select
                          id="budgetRange"
                          {...register('budgetRange')}
                          className={`${inputClasses} appearance-none`}
                        >
                          <option value="">Select Budget Range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                        {errors.budgetRange && (
                          <p className="text-xs text-red-400 mt-1.5">{errors.budgetRange.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label htmlFor="message" className={labelClasses}>
                        Project Description
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project goals, target audience, features you need, and preferred timeline..."
                        {...register('message')}
                        className={`${inputClasses} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 mt-1.5">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Error */}
                    {submitResult && !submitResult.success && (
                      <motion.p
                        className="text-sm text-red-400 font-semibold bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {submitResult.message}
                      </motion.p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full mt-2 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="h-4.5 w-4.5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════
            GOOGLE MAPS EMBED
            ═══════════════════════════════════ */}
        <motion.section {...revealProps(0)}>
          <div className="card-dark rounded-2xl p-2 overflow-hidden">
            <div className="px-4 py-3">
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                Our Location
              </span>
              <h4 className="text-sm font-bold text-white mt-1">
                Siliguri, West Bengal, India
              </h4>
            </div>
            <div className="w-full aspect-[21/9] md:aspect-[3/1] rounded-xl overflow-hidden relative">
              <iframe
                src="https://maps.google.com/maps?q=Siliguri,West%20Bengal,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) grayscale(100%) contrast(90%)',
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
