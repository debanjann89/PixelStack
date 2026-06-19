import fs from 'fs/promises';
import path from 'path';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
  createdAt: string;
}

export interface Lead {
  id: string;
  leadName: string;
  businessName: string;
  phone: string;
  email: string;
  projectType: string;
  budgetRange: string;
  status: 'new' | 'contacted' | 'proposal' | 'won' | 'lost';
  notes: string;
  createdAt: string;
}

export interface Consultation {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  date: string;
  projectType: string;
  createdAt: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  overview: string;
  desc: string;
  tech: string[];
  goals: string[];
  results: string[];
  duration: string;
  bgGradient: string;
  createdAt: string;
}

export interface DbSchema {
  contact_submissions: ContactSubmission[];
  leads: Lead[];
  consultations: Consultation[];
  projects: Project[];
}

const DB_FILE_PATH = path.join(process.cwd(), 'src/data/db.json');

const SEED_DATA: DbSchema = {
  contact_submissions: [
    {
      id: 'sub-1',
      name: 'Alex Riviera',
      email: 'alex@rivieraeats.com',
      phone: '+91 98765 43210',
      businessName: 'Riviera Restaurant Group',
      message: 'Looking to build a premium online ordering and reservation website for our fine dining restaurant chain. We need a dark sleek look with high quality visuals and SEO setup.',
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'sub-2',
      name: 'Sarah Jenkins',
      email: 'sarah@jenkinslegal.in',
      phone: '+91 87654 32109',
      businessName: 'Jenkins & Associates Law',
      message: 'We require a professional website to replace our outdated one. Must look authoritative and premium to build trust with high-value corporate clients.',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'sub-3',
      name: 'Dr. Amit Verma',
      email: 'dr.verma@apexdental.com',
      phone: '+91 76543 21098',
      businessName: 'Apex Dental Clinic',
      message: 'Need a clinic website that allows online consultation scheduling and showcases our treatments, client testimonials, and credentials.',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    }
  ],
  leads: [
    {
      id: 'lead-1',
      leadName: 'Alex Riviera',
      businessName: 'Riviera Restaurant Group',
      phone: '+91 98765 43210',
      email: 'alex@rivieraeats.com',
      projectType: 'Restaurant Website',
      budgetRange: '₹50,000 - ₹80,000',
      status: 'proposal',
      notes: 'Initial call completed. Sent pitch deck and interactive wireframes. Budget approved. Client wants custom reservation system integration.',
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'lead-2',
      leadName: 'Sarah Jenkins',
      businessName: 'Jenkins & Associates Law',
      phone: '+91 87654 32109',
      email: 'sarah@jenkinslegal.in',
      projectType: 'Corporate Website',
      budgetRange: '₹80,000 - ₹1,20,000',
      status: 'contacted',
      notes: 'Introductory call scheduled for Friday 4 PM to discuss corporate brand style and specific practice areas pages.',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'lead-3',
      leadName: 'Dr. Amit Verma',
      businessName: 'Apex Dental Clinic',
      phone: '+91 76543 21098',
      email: 'dr.verma@apexdental.com',
      projectType: 'Dental Clinic Website',
      budgetRange: '₹50,000 - ₹80,000',
      status: 'won',
      notes: 'Proposal accepted! Received 50% advance payment. Design phase kicking off on Monday. Banashree Das mapping SEO keywords.',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'lead-4',
      leadName: 'Rajesh Mehta',
      businessName: 'Grand Palace Hotel',
      phone: '+91 90123 45678',
      email: 'rajesh@grandpalace.in',
      projectType: 'Hotel Website',
      budgetRange: '₹1,20,000 - ₹2,00,000',
      status: 'won',
      notes: 'Full-stack hotel website completed. Features visual room showcase, sitemap structure, custom booking link redirects, and complete speed optimization. Launched and verified.',
      createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'lead-5',
      leadName: 'Suresh Dev',
      businessName: 'DevTech Solutions',
      phone: '+91 61234 56789',
      email: 'suresh@devtech.com',
      projectType: 'Business Website',
      budgetRange: 'Under ₹30,000',
      status: 'lost',
      notes: 'Budget mismatch. Suresh requested standard WordPress theme for ₹15,000. PixelStack focuses on high-fidelity custom experiences starting at ₹50,000. Closed lead.',
      createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    }
  ],
  consultations: [
    {
      id: 'cons-1',
      clientName: 'Alex Riviera',
      email: 'alex@rivieraeats.com',
      phone: '+91 98765 43210',
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      projectType: 'Restaurant Website',
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'cons-2',
      clientName: 'Sarah Jenkins',
      email: 'sarah@jenkinslegal.in',
      phone: '+91 87654 32109',
      date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      projectType: 'Corporate Website',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'cons-3',
      clientName: 'Karan Malhotra',
      email: 'karan@malhotrahotel.com',
      phone: '+91 99999 88888',
      date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      projectType: 'Hotel Website',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    }
  ],
  projects: [
    {
      id: 'bistro',
      title: 'The Riviera Bistro',
      category: 'Restaurants',
      overview: 'A premium ordering & booking website designed for a fine dining restaurant group. Highlights custom reservations, high-fidelity gallery layout, and full responsiveness.',
      desc: 'The restaurant was losing over 30% of its reservations due to a slow, confusing third-party scheduling widget. We designed a clean, immersive visual experience and custom seat booking API flow.',
      tech: ['Next.js 15', 'Framer Motion', 'Tailwind CSS', 'PostCSS'],
      goals: [
        'Build trust through premium photography showcases.',
        'Reduce seat reservation friction to under 3 steps.',
        'Optimize page speed for mobile customers on slow connections.'
      ],
      results: [
        '+135% Increase in online bookings in 30 days.',
        'Average load time decreased from 4.8s to 0.4s.',
        'Saved estimated ₹12,000/month in booking system fees.'
      ],
      duration: '2 Weeks',
      bgGradient: 'from-amber-600/10 to-orange-700/20',
      createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'legal',
      title: 'Jenkins Legal Associates',
      category: 'Law Firms',
      overview: 'An authoritative web presence built for high-value corporate litigation clients. Features consultation funnels, clean typography, and search index optimization.',
      desc: 'Jenkins Law wanted to attract corporate compliance accounts. We built an enterprise-level site projecting absolute authority, featuring secure booking funnels and structured profile matrixes.',
      tech: ['Next.js 15', 'TypeScript', 'React Hook Form', 'Zod'],
      goals: [
        'Project corporate authority and professionalism.',
        'Securely gather consultation details through validated forms.',
        'Ensure high indexability for local search keywords.'
      ],
      results: [
        '+85% Increase in corporate consultation inquiries.',
        'Perfect 100/100 Lighthouse SEO and Best Practices scores.',
        'Ranked #1 locally for compliance search terms within 4 weeks.'
      ],
      duration: '3 Weeks',
      bgGradient: 'from-emerald-600/10 to-teal-800/20',
      createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'dental',
      title: 'Apex Dental Care',
      category: 'Dental Clinics',
      overview: 'A modern clinic portal allowing patients to schedule treatments, read verified credentials, and check patient feedback.',
      desc: 'Apex Dental needed to automate booking, reduce front-desk phone overload, and build digital trust. We designed a welcoming, light-themed responsive patient portal.',
      tech: ['Next.js 15', 'Tailwind CSS', 'Lucide React'],
      goals: [
        'Design clean layouts that resolve medical anxiety.',
        'Implement direct appointment booking structures.',
        'Showcase customer reviews and treatment pricing grids.'
      ],
      results: [
        '250+ Appointments booked online in month one.',
        'Reduced front-desk booking inquiries by 45%.',
        'Optimized layout flows for mobile-first patient browsing.'
      ],
      duration: '2.5 Weeks',
      bgGradient: 'from-emerald-500/10 to-teal-700/20',
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'resort',
      title: 'Grand Palace Resorts',
      category: 'Hotels',
      overview: 'An immersive visual showcase website for a luxury resort chain driving direct bookings and bypassing travel agent fees.',
      desc: 'The client was paying up to 18% in commissions to online travel platforms. We created a high-fidelity media-rich website that features immersive rooms previewing and direct booking redirects.',
      tech: ['Next.js 15', 'Framer Motion', 'PostCSS'],
      goals: [
        'Develop high-fidelity visual displays for luxury suites.',
        'Bypass third-party commission models through direct calls-to-action.',
        'Support multi-language translation paths.'
      ],
      results: [
        '+40% Growth in direct bookings in 60 days.',
        'Bypassed travel portal commissions, saving ₹45,000+ monthly.',
        'Perfect media load speeds and optimized image assets.'
      ],
      duration: '3 Weeks',
      bgGradient: 'from-primary/10 to-secondary/20',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'devtech',
      title: 'DevTech Solutions',
      category: 'Businesses',
      overview: 'A premium, modern SaaS-level homepage designed to showcase software products and generate enterprise leads.',
      desc: 'DevTech Solutions required a modern B2B website to support their enterprise sales team. We built a beautiful landing page with interactive product mockups and validated contact fields.',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zod'],
      goals: [
        'Align design aesthetics with next-gen technology startups.',
        'Convert enterprise traffic through targeted contact funnels.',
        'Display product features through mock interactive grids.'
      ],
      results: [
        '4.9/5 Rating from company board of directors.',
        '+110% Growth in newsletter opt-ins and demo requests.',
        'Sub-500ms global node rendering response times.'
      ],
      duration: '2 Weeks',
      bgGradient: 'from-teal-600/10 to-emerald-800/20',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    }
  ]
};

export async function getDb(): Promise<DbSchema> {
  try {
    await fs.mkdir(path.dirname(DB_FILE_PATH), { recursive: true });
    
    try {
      const data = await fs.readFile(DB_FILE_PATH, 'utf-8');
      const db = JSON.parse(data) as DbSchema;
      // Database Schema Migration: ensure 'projects' array exists
      let migrated = false;
      if (!db.projects) {
        db.projects = SEED_DATA.projects;
        migrated = true;
      }
      if (!db.contact_submissions) {
        db.contact_submissions = SEED_DATA.contact_submissions;
        migrated = true;
      }
      if (!db.leads) {
        db.leads = SEED_DATA.leads;
        migrated = true;
      }
      if (!db.consultations) {
        db.consultations = SEED_DATA.consultations;
        migrated = true;
      }
      if (migrated) {
        await saveDb(db);
      }
      return db;
    } catch {
      // If file doesn't exist, write seed data and return it
      await fs.writeFile(DB_FILE_PATH, JSON.stringify(SEED_DATA, null, 2), 'utf-8');
      return SEED_DATA;
    }
  } catch (err) {
    console.error('Error reading mock database:', err);
    return SEED_DATA;
  }
}

export async function saveDb(data: DbSchema): Promise<boolean> {
  try {
    await fs.mkdir(path.dirname(DB_FILE_PATH), { recursive: true });
    await fs.writeFile(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing to mock database:', err);
    return false;
  }
}
