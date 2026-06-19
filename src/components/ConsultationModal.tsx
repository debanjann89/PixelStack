'use client';

import { Suspense, useState, useTransition } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { bookConsultation } from '@/app/actions';
import { ConsultationSchema, ConsultationInput } from '@/app/schemas';

function ConsultationModalContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; message?: string } | null>(null);

  const isOpen = searchParams.get('consultation') === 'open';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationInput>({
    resolver: zodResolver(ConsultationSchema),
    defaultValues: {
      clientName: '',
      email: '',
      phone: '',
      date: '',
      projectType: '',
    },
  });

  const handleClose = () => {
    setSubmitResult(null);
    reset();
    const params = new URLSearchParams(searchParams.toString());
    params.delete('consultation');
    router.replace(`${pathname}?${params.toString()}`);
  };

  const onSubmit = (data: ConsultationInput) => {
    setSubmitResult(null);
    startTransition(async () => {
      const result = await bookConsultation(null, data);
      setSubmitResult(result);
      if (result.success) {
        reset();
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-lg glass-panel rounded-2xl p-6 md:p-8 border border-white/10 z-10 shadow-2xl overflow-hidden"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {submitResult?.success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Consultation Scheduled!</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              {submitResult.message}
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl text-xs hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/15">
                <Calendar className="h-5 w-5 text-primary-light" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Book Strategy Call</h3>
                <p className="text-zinc-400 text-xs mt-0.5">30-min growth planning consultation</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="clientName" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  id="clientName"
                  type="text"
                  placeholder="e.g. Debanjan Amin"
                  {...register('clientName')}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                {errors.clientName && (
                   <p className="text-xs text-red-400 mt-1">{errors.clientName.message}</p>
                )}
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
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
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
                    placeholder="+91 89181 86698"
                    {...register('phone')}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Date & Project Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    {...register('date')}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors scheme-dark"
                  />
                  {errors.date && (
                    <p className="text-xs text-red-400 mt-1">{errors.date.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    {...register('projectType')}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base md:text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                  >
                    <option value="" disabled className="text-zinc-600">Select Project Type</option>
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
              </div>

              {/* Submit Error */}
              {submitResult && !submitResult.success && (
                <p className="text-xs text-red-400">{submitResult.message}</p>
              )}

              {/* Action */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full mt-6 py-4 bg-gradient-to-r from-primary-dark to-secondary-dark hover:from-primary hover:to-secondary text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isPending ? 'Scheduling Call...' : 'Confirm Strategy Booking'} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function ConsultationModal() {
  return (
    <Suspense fallback={null}>
      <ConsultationModalContent />
    </Suspense>
  );
}
