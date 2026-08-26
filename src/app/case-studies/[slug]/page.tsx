import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES, getCaseStudyBySlug, getAllCaseStudySlugs } from '@/data/caseStudies';
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Award,
  Layers,
  Sparkles,
  Building,
  ShieldCheck,
  ChevronLeft,
} from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-a-b-digitals.vercel.app';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | D&B Digitals',
    };
  }

  const canonicalUrl = `${SITE_URL}/case-studies/${study.slug}`;

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: study.datePublished,
      modifiedTime: study.dateModified,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: study.title,
    description: study.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'D&B Digitals',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: study.datePublished,
    dateModified: study.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/case-studies/${study.slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: `${SITE_URL}/case-studies`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: study.client,
        item: `${SITE_URL}/case-studies/${study.slug}`,
      },
    ],
  };

  return (
    <div className="relative min-h-screen pt-10 pb-24 bg-black text-zinc-300">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background ambient lighting */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Navigation / Back link */}
        <div className="pt-8 mb-8 flex items-center justify-between">
          <Link
            href="/case-studies"
            className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors group"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>All Case Studies</span>
          </Link>

          {study.industryUrl && (
            <Link
              href={study.industryUrl}
              className="text-xs font-semibold text-primary hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              <span>{study.industry}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>

        {/* ── Case Study Header ── */}
        <header className="mb-14 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${study.badgeColor}`}
            >
              {study.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
              <Clock className="h-3.5 w-3.5" />
              <span>{study.duration} Build Time</span>
            </div>
            <div className="text-xs text-zinc-600">•</div>
            <span className="text-xs text-zinc-400">Client: {study.client}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            {study.title}
          </h1>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">{study.overview}</p>
        </header>

        {/* ── Verified Outcomes Banner ── */}
        <section className="mb-14 bg-gradient-to-br from-zinc-950 via-zinc-900/60 to-zinc-950 border border-primary/20 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Measured Project Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {study.results.map((res, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-zinc-200">{res}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Core Case Study Analysis ── */}
        <div className="space-y-12 text-zinc-300 leading-relaxed text-base">
          {/* Challenge Section */}
          <section className="border-t border-zinc-900 pt-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 block mb-3">
              01. The Problem
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-zinc-400 leading-relaxed">{study.challenge}</p>
          </section>

          {/* Approach Section */}
          <section className="border-t border-zinc-900 pt-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-3">
              02. UX Strategy & Code Architecture
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">Our Engineering Approach</h2>
            <p className="text-zinc-400 leading-relaxed">{study.approach}</p>
          </section>

          {/* Impact Section */}
          <section className="border-t border-zinc-900 pt-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 block mb-3">
              03. Real World Results
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">Business Impact</h2>
            <p className="text-zinc-400 leading-relaxed">{study.impact}</p>
          </section>

          {/* Technologies Used */}
          <section className="border-t border-zinc-900 pt-10">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                Technologies & Tools Deployed
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* ── Cross-Links & Next Step ── */}
        <section className="mt-16 pt-10 border-t border-zinc-900">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <h3 className="text-2xl font-bold text-white mb-3">
              Want similar results for your business?
            </h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8">
              Every project is hand-engineered by co-founders Debanjan Amin and Banashree Das for
              maximum speed, local authority, and lead generation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full text-sm transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Inquire for Similar Project <ArrowRight className="h-4 w-4" />
              </Link>
              {study.industryUrl && (
                <Link
                  href={study.industryUrl}
                  className="px-8 py-3.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium rounded-full text-sm transition-all w-full sm:w-auto justify-center"
                >
                  Explore {study.industry}
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
