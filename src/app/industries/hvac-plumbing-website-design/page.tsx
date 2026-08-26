'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import { Phone, MapPin, Calendar, Image as ImageIcon, Star, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HVACPlumbingPage() {
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
            text="Website Design for Plumbing & HVAC Companies"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            delay={50}
          />
          <motion.p 
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Turn emergency searches into booked jobs with a website built for home service professionals. 
            We build high-converting, mobile-optimized sites that generate local leads.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button onClick={handleConsultation} className="bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="/portfolio" className="border border-zinc-700 text-white px-8 py-4 rounded-full hover:bg-zinc-900 transition-colors w-full sm:w-auto text-center">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Pain Points */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Your Home Service Business Needs a Professional Website</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">In today's digital age, relying solely on word of mouth isn't enough. Here is what you might be missing without a dedicated online presence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Losing Leads to Competitors</h3>
              <p className="text-zinc-400">When an emergency strikes, customers search online. If your competitor has a professional website and you don't, they get the call. We ensure your business is the obvious choice.</p>
            </motion.div>
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Maps Isn't Enough</h3>
              <p className="text-zinc-400 mb-4">A Google Business Profile is a great start, but a dedicated website builds trust and authority. It provides the space to showcase your full range of services and service areas.</p>
              <Link href="/blog/why-your-google-business-profile-isnt-enough" className="text-xs text-primary hover:text-emerald-300 font-semibold inline-flex items-center gap-1">
                Read: Why GBP Alone Isn't Enough <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
            <motion.div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl p-8" {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Trust is Built Online</h3>
              <p className="text-zinc-400">Customers check websites before inviting a technician into their home. A modern, secure website featuring real reviews and team photos dramatically increases conversion rates.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Features */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Home Service Businesses</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our custom websites are engineered specifically for plumbing, HVAC, and electrical companies to maximize lead generation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: 'Click-to-Call Buttons', desc: 'Prominent, sticky call buttons on mobile devices so customers in an emergency can reach you instantly.' },
              { icon: Clock, title: 'Emergency Service CTAs', desc: 'Strategically placed calls-to-action highlighting your 24/7 availability to capture urgent service requests.' },
              { icon: MapPin, title: 'Service Area Maps', desc: 'Interactive maps and dedicated city pages to boost your local SEO and show customers exactly where you operate.' },
              { icon: Calendar, title: 'Online Booking Integration', desc: 'Seamlessly integrate with Housecall Pro, ServiceTitan, or other scheduling software for direct bookings.' },
              { icon: ImageIcon, title: 'Before/After Galleries', desc: 'Showcase your best work and complex installations to prove your expertise and build trust with prospects.' },
              { icon: Star, title: 'Customer Review Integration', desc: 'Automatically pull in your best Google and Yelp reviews to provide social proof right on your homepage.' },
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

          <div className="mt-12 text-center">
            <Link
              href="/blog/best-website-features-for-home-service-businesses"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-emerald-300 font-semibold transition-colors"
            >
              <span>Explore All 7 Must-Have Features for Contractor Websites</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* Process */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How We Build Your Website</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A streamlined, hassle-free process designed for busy contractors.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your core services, target areas, and ideal customers.' },
              { step: '02', title: 'Design', desc: 'We create a modern, branded mockup focused on user experience and conversions.' },
              { step: '03', title: 'Development', desc: 'We build a lightning-fast, mobile-responsive site optimized for search engines.' },
              { step: '04', title: 'Launch', desc: 'We handle the deployment, domain setup, and ongoing technical support.' }
            ].map((item, idx) => (
              <motion.div key={idx} className="relative" {...fadeInUp} transition={{ delay: idx * 0.15 }}>
                <div className="text-6xl font-black text-zinc-800/40 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute top-10 right-0 w-full h-[1px] bg-zinc-800 transform translate-x-1/2" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider border-t border-zinc-800/50" />

      {/* FAQ */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {[
              { q: 'How long does it take to build an HVAC/Plumbing website?', a: 'Typically, a custom home services website takes 4-6 weeks from initial consultation to launch, depending on the complexity and how quickly we receive your content and branding assets.' },
              { q: 'Will my website rank on Google for local searches?', a: 'Yes. We build all our websites with local SEO best practices. This includes schema markup, optimized meta tags, fast loading speeds, and structures designed to highlight your specific service areas.' },
              { q: 'Do you write the content for the website?', a: 'We offer professional copywriting services tailored to the home service industry. We can write compelling, SEO-friendly content for your service pages, or we can use content you provide.' },
              { q: 'Can I integrate my scheduling software?', a: 'Absolutely. We seamlessly integrate popular platforms like ServiceTitan, Housecall Pro, Jobber, and standard booking widgets directly into your new website to streamline your workflow.' }
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
      <section className="py-24 px-4">
        <motion.div 
          className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Book More Jobs?</h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">Stop losing local leads to competitors with better websites. Let's build a digital presence that grows your home service business.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleConsultation} className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors">
              Schedule a Consultation
            </button>
            <Link href="/contact" className="border border-zinc-700 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
