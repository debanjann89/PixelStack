'use server';

import { supabase } from '@/lib/supabase';
import {
  ContactFormSchema,
  ConsultationSchema,
  ContactFormInput,
  ConsultationInput
} from './schemas';

// Static Portfolio Projects (used by public portfolio page)
const PORTFOLIO_PROJECTS = [
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
    bgGradient: 'from-amber-600/10 to-orange-700/20'
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
    bgGradient: 'from-emerald-600/10 to-teal-800/20'
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
    bgGradient: 'from-emerald-500/10 to-teal-700/20'
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
    bgGradient: 'from-primary/10 to-secondary/20'
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
      'Sub-500ms global node rendering response times.',
      '+110% Growth in newsletter opt-ins and demo requests.'
    ],
    duration: '2 Weeks',
    bgGradient: 'from-teal-600/10 to-emerald-800/20'
  }
];

// Helper to parse budget to numerical value for analytics
function getBudgetValue(range: string): number {
  if (!range) return 50000;
  if (range.includes('Under')) return 25000;
  if (range.includes('50,000') && range.includes('80,000')) return 65000;
  if (range.includes('80,000') && range.includes('1,20,000')) return 100000;
  if (range.includes('1,20,000') && range.includes('2,00,000')) return 160000;
  if (range.includes('2,00,000')) return 250000;
  // Parse generic number if it exists
  const parsed = parseInt(range.replace(/[^0-9]/g, ''), 10);
  return isNaN(parsed) ? 50000 : parsed;
}

// 1. Fetch Static Portfolio Projects
export async function getProjects() {
  try {
    const { data, error } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;
    if (data && data.length > 0) {
      return data.map((item: any) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        overview: item.overview,
        desc: item.description, // Map description to desc
        tech: item.tech || [],
        goals: item.goals || [],
        results: item.results || [],
        duration: item.duration,
        bgGradient: item.bg_gradient, // Map bg_gradient to bgGradient
        image_url: item.image_url,
        video_url: item.video_url
      }));
    }
    return PORTFOLIO_PROJECTS;
  } catch (err: any) {
    console.error('Error getting database projects, falling back to static:', err);
    return PORTFOLIO_PROJECTS;
  }
}

// 2. Submit Contact Form
export async function submitContactForm(prevState: any, formData: ContactFormInput) {
  const result = ContactFormSchema.safeParse(formData);
  
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: 'Invalid input. Please correct the fields.',
    };
  }

  const data = result.data;

  try {
    // 1. Insert into messages table
    const { error: msgError } = await supabase
      .from('messages')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        business_name: data.businessName,
        project_type: data.projectType,
        budget_range: data.budgetRange,
        message: data.message
      });

    if (msgError) throw msgError;

    // 2. Insert into leads table
    const { error: leadError } = await supabase
      .from('leads')
      .insert({
        name: data.name,
        business_name: data.businessName,
        phone: data.phone,
        email: data.email,
        project_type: data.projectType,
        budget_range: data.budgetRange,
        status: 'new',
        notes: `Submitted contact form message: "${data.message.substring(0, 100)}..."`
      });

    if (leadError) throw leadError;

    return {
      success: true,
      message: 'Thank you! Your message has been sent. We will get back to you within 24 hours.',
    };
  } catch (err: any) {
    console.error('Error submitting contact form:', err);
    return {
      success: false,
      message: err.message || 'Server error. Failed to save submission.',
    };
  }
}

// 3. Book Consultation
export async function bookConsultation(prevState: any, formData: ConsultationInput) {
  const result = ConsultationSchema.safeParse(formData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: 'Invalid input. Please correct the fields.',
    };
  }

  const data = result.data;

  try {
    // 1. Insert into consultations table
    const { error: consError } = await supabase
      .from('consultations')
      .insert({
        client_name: data.clientName,
        email: data.email,
        phone: data.phone,
        date: data.date,
        project_type: data.projectType
      });

    if (consError) throw consError;

    // 2. Insert into leads table
    const { error: leadError } = await supabase
      .from('leads')
      .insert({
        name: data.clientName,
        business_name: 'Individual / TBD',
        phone: data.phone,
        email: data.email,
        project_type: data.projectType,
        budget_range: '₹50,000 - ₹80,000',
        status: 'new',
        notes: `Booked free consultation for date: ${data.date}.`
      });

    if (leadError) throw leadError;

    return {
      success: true,
      message: 'Consultation successfully scheduled! We will contact you to confirm the timing.',
    };
  } catch (err: any) {
    console.error('Error booking consultation:', err);
    return {
      success: false,
      message: err.message || 'Server error. Failed to book consultation.',
    };
  }
}

// 4. Update Lead Status
export async function updateLeadStatus(leadId: string, status: string, notes: string) {
  try {
    const { error } = await supabase
      .from('leads')
      .update({ status, notes })
      .eq('id', leadId);

    if (error) throw error;
    return { success: true, message: 'Lead updated successfully.' };
  } catch (err: any) {
    console.error('Error updating lead status:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

// 5. Fetch Dashboard Data (Overview + Tables)
export async function getDashboardData() {
  try {
    // Fetch leads
    const { data: leads, error: leadsErr } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (leadsErr) throw leadsErr;

    // Fetch messages (submissions)
    const { data: messages, error: msgsErr } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (msgsErr) throw msgsErr;

    // Fetch consultations
    const { data: consultations, error: consErr } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false });

    if (consErr) throw consErr;

    // Fetch client projects
    const { data: clientProjects, error: projErr } = await supabase
      .from('projects')
      .select('*, clients(name, business_name)')
      .order('created_at', { ascending: false });

    if (projErr) throw projErr;

    // Fetch invoices
    const { data: invoices, error: invErr } = await supabase
      .from('invoices')
      .select('*, clients(name, business_name)')
      .order('created_at', { ascending: false });

    if (invErr) throw invErr;

    // Map leads to frontend types
    const mappedLeads = (leads || []).map((l: any) => ({
      id: l.id,
      leadName: l.name,
      businessName: l.business_name || '',
      phone: l.phone || '',
      email: l.email || '',
      projectType: l.project_type || '',
      budgetRange: l.budget_range || '',
      status: l.status || 'new',
      notes: l.notes || '',
      createdAt: l.created_at
    }));

    // Map messages to submissions
    const mappedSubmissions = (messages || []).map((m: any) => ({
      id: m.id,
      name: m.name,
      email: m.email || '',
      phone: m.phone || '',
      businessName: m.business_name || '',
      message: m.message || '',
      projectType: m.project_type || '',
      budgetRange: m.budget_range || '',
      createdAt: m.created_at
    }));

    // Map consultations
    const mappedConsultations = (consultations || []).map((c: any) => ({
      id: c.id,
      clientName: c.client_name,
      email: c.email || '',
      phone: c.phone || '',
      date: c.date,
      projectType: c.project_type || '',
      createdAt: c.created_at
    }));

    const totalLeads = mappedLeads.length;
    const newLeads = mappedLeads.filter((l) => l.status === 'new').length;
    const contactedLeads = mappedLeads.filter((l) => l.status === 'contacted').length;
    const proposalLeads = mappedLeads.filter((l) => l.status === 'proposal').length;
    const wonLeads = mappedLeads.filter((l) => l.status === 'won').length;
    const lostLeads = mappedLeads.filter((l) => l.status === 'lost').length;

    const winRate = totalLeads > 0 ? Math.round((wonLeads / (wonLeads + lostLeads || 1)) * 100) : 0;
    
    const wonRevenue = mappedLeads
      .filter((l) => l.status === 'won')
      .reduce((sum, l) => sum + getBudgetValue(l.budgetRange), 0);

    const pipelineRevenue = mappedLeads
      .filter((l) => l.status !== 'won' && l.status !== 'lost')
      .reduce((sum, l) => sum + getBudgetValue(l.budgetRange), 0);

    return {
      stats: {
        totalLeads,
        newLeads,
        contactedLeads,
        proposalLeads,
        wonLeads,
        lostLeads,
        winRate,
        wonRevenue,
        pipelineRevenue,
      },
      leads: mappedLeads,
      submissions: mappedSubmissions,
      consultations: mappedConsultations,
      projects: clientProjects || [],
      invoices: invoices || []
    };
  } catch (err: any) {
    console.error('Error fetching dashboard stats from Supabase:', err);
    return {
      stats: {
        totalLeads: 0,
        newLeads: 0,
        contactedLeads: 0,
        proposalLeads: 0,
        wonLeads: 0,
        lostLeads: 0,
        winRate: 0,
        wonRevenue: 0,
        pipelineRevenue: 0,
      },
      leads: [],
      submissions: [],
      consultations: [],
      projects: [],
      invoices: []
    };
  }
}

// Leads CRUD
export async function addLead(leadData: any) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert({
        name: leadData.leadName,
        business_name: leadData.businessName,
        phone: leadData.phone,
        email: leadData.email,
        project_type: leadData.projectType,
        budget_range: leadData.budgetRange,
        status: leadData.status || 'new',
        notes: leadData.notes || ''
      })
      .select()
      .single();

    if (error) throw error;
    return { success: true, lead: data };
  } catch (err: any) {
    console.error('Error adding lead:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function updateLead(leadId: string, updatedData: any) {
  try {
    const { error } = await supabase
      .from('leads')
      .update({
        name: updatedData.leadName,
        business_name: updatedData.businessName,
        phone: updatedData.phone,
        email: updatedData.email,
        project_type: updatedData.projectType,
        budget_range: updatedData.budgetRange,
        status: updatedData.status,
        notes: updatedData.notes
      })
      .eq('id', leadId);

    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error updating lead:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function deleteLead(leadId: string) {
  try {
    const { error } = await supabase.from('leads').delete().eq('id', leadId);
    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error deleting lead:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

// Messages CRUD
export async function addSubmission(subData: any) {
  try {
    const { data, error } = await supabase
      .from('messages')
      .insert({
        name: subData.name,
        email: subData.email,
        phone: subData.phone,
        business_name: subData.businessName,
        project_type: subData.projectType || '',
        budget_range: subData.budgetRange || '',
        message: subData.message || ''
      })
      .select()
      .single();

    if (error) throw error;
    return { success: true, submission: data };
  } catch (err: any) {
    console.error('Error adding message:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function updateSubmission(submissionId: string, updatedData: any) {
  try {
    const { error } = await supabase
      .from('messages')
      .update({
        name: updatedData.name,
        email: updatedData.email,
        phone: updatedData.phone,
        business_name: updatedData.businessName,
        project_type: updatedData.projectType || '',
        budget_range: updatedData.budgetRange || '',
        message: updatedData.message || ''
      })
      .eq('id', submissionId);

    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error updating message:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function deleteSubmission(submissionId: string) {
  try {
    const { error } = await supabase.from('messages').delete().eq('id', submissionId);
    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error deleting message:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

// Consultations CRUD
export async function addConsultation(consData: any) {
  try {
    const { data, error } = await supabase
      .from('consultations')
      .insert({
        client_name: consData.clientName,
        email: consData.email,
        phone: consData.phone,
        date: consData.date,
        project_type: consData.projectType
      })
      .select()
      .single();

    if (error) throw error;
    return { success: true, consultation: data };
  } catch (err: any) {
    console.error('Error adding consultation:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function updateConsultation(consId: string, updatedData: any) {
  try {
    const { error } = await supabase
      .from('consultations')
      .update({
        client_name: updatedData.clientName,
        email: updatedData.email,
        phone: updatedData.phone,
        date: updatedData.date,
        project_type: updatedData.projectType
      })
      .eq('id', consId);

    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error updating consultation:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function deleteConsultation(consId: string) {
  try {
    const { error } = await supabase.from('consultations').delete().eq('id', consId);
    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error deleting consultation:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

// ==============================================
// PixelStack Agency Client Management CRUD Actions
// ==============================================

// 1. Clients Table Actions
export async function getClients() {
  try {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err: any) {
    console.error('Error getting clients:', err);
    return [];
  }
}

export async function addClient(client: any) {
  try {
    const { data, error } = await supabase
      .from('clients')
      .insert({
        name: client.name,
        business_name: client.business_name || '',
        industry: client.industry || '',
        phone: client.phone || '',
        email: client.email || '',
        project_type: client.project_type || '',
        project_description: client.project_description || '',
        selected_package: client.selected_package || '',
        project_cost: client.project_cost ? Number(client.project_cost) : 0,
        timeline: client.timeline || '',
        address: client.address || '',
        notes: client.notes || '',
        status: client.status || 'Lead'
      })
      .select()
      .single();

    if (error) throw error;
    return { success: true, client: data };
  } catch (err: any) {
    console.error('Error adding client:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function updateClient(id: string, client: any) {
  try {
    const { error } = await supabase
      .from('clients')
      .update({
        name: client.name,
        business_name: client.business_name,
        industry: client.industry,
        phone: client.phone,
        email: client.email,
        project_type: client.project_type,
        project_description: client.project_description,
        selected_package: client.selected_package,
        project_cost: client.project_cost ? Number(client.project_cost) : 0,
        timeline: client.timeline,
        address: client.address,
        notes: client.notes,
        status: client.status
      })
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error updating client:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function deleteClient(id: string) {
  try {
    const { error } = await supabase.from('clients').delete().eq('id', id);
    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error deleting client:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

// 2. Client Projects Table Actions
export async function getClientProjects() {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*, clients(*)')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err: any) {
    console.error('Error getting client projects:', err);
    return [];
  }
}

export async function addClientProject(project: any) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert({
        client_id: project.client_id,
        title: project.title,
        description: project.description || '',
        selected_package: project.selected_package || '',
        cost: project.cost ? Number(project.cost) : 0,
        timeline: project.timeline || '',
        status: project.status || 'Project Started'
      })
      .select()
      .single();

    if (error) throw error;
    return { success: true, project: data };
  } catch (err: any) {
    console.error('Error adding client project:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function updateClientProject(id: string, project: any) {
  try {
    const { error } = await supabase
      .from('projects')
      .update({
        client_id: project.client_id,
        title: project.title,
        description: project.description,
        selected_package: project.selected_package,
        cost: project.cost ? Number(project.cost) : 0,
        timeline: project.timeline,
        status: project.status
      })
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error updating client project:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function deleteClientProject(id: string) {
  try {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error deleting client project:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

// 3. Invoices Table Actions
export async function getInvoices() {
  try {
    const { data, error } = await supabase
      .from('invoices')
      .select('*, clients(*), projects(*)')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err: any) {
    console.error('Error getting invoices:', err);
    return [];
  }
}

export async function addInvoice(invoice: any) {
  try {
    const { data, error } = await supabase
      .from('invoices')
      .insert({
        invoice_number: invoice.invoice_number,
        client_id: invoice.client_id,
        project_id: invoice.project_id || null,
        issue_date: invoice.issue_date,
        due_date: invoice.due_date,
        package_selected: invoice.package_selected || '',
        services_breakdown: invoice.services_breakdown || [],
        amount: invoice.amount ? Number(invoice.amount) : 0,
        total_amount: invoice.total_amount ? Number(invoice.total_amount) : 0,
        payment_instructions: invoice.payment_instructions || '',
        status: invoice.status || 'Pending'
      })
      .select()
      .single();

    if (error) throw error;
    return { success: true, invoice: data };
  } catch (err: any) {
    console.error('Error adding invoice:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function updateInvoice(id: string, invoice: any) {
  try {
    const { error } = await supabase
      .from('invoices')
      .update({
        invoice_number: invoice.invoice_number,
        client_id: invoice.client_id,
        project_id: invoice.project_id || null,
        issue_date: invoice.issue_date,
        due_date: invoice.due_date,
        package_selected: invoice.package_selected,
        services_breakdown: invoice.services_breakdown || [],
        amount: invoice.amount ? Number(invoice.amount) : 0,
        total_amount: invoice.total_amount ? Number(invoice.total_amount) : 0,
        payment_instructions: invoice.payment_instructions,
        status: invoice.status
      })
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error updating invoice:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function deleteInvoice(id: string) {
  try {
    const { error } = await supabase.from('invoices').delete().eq('id', id);
    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error deleting invoice:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

// 4. Document History Actions
export async function getDocumentHistory() {
  try {
    const { data, error } = await supabase
      .from('document_history')
      .select('*, clients(*)')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err: any) {
    console.error('Error getting document history:', err);
    return [];
  }
}

export async function logDocumentGeneration(clientId: string | null, docType: string, name: string, metadata: any = {}) {
  try {
    const { data, error } = await supabase
      .from('document_history')
      .insert({
        client_id: clientId,
        doc_type: docType,
        name: name,
        metadata: metadata
      })
      .select()
      .single();

    if (error) throw error;
    return { success: true, log: data };
  } catch (err: any) {
    console.error('Error logging document generation:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

// 5. Portfolio Items Actions
export async function getPortfolioItems() {
  try {
    const { data, error } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err: any) {
    console.error('Error getting portfolio items:', err);
    return [];
  }
}

export async function addPortfolioItem(item: any) {
  try {
    const { data, error } = await supabase
      .from('portfolio_items')
      .insert({
        title: item.title,
        category: item.category,
        overview: item.overview || '',
        description: item.description || '',
        tech: item.tech || [],
        goals: item.goals || [],
        results: item.results || [],
        duration: item.duration || '',
        bg_gradient: item.bg_gradient || 'from-primary/10 to-secondary/20',
        image_url: item.image_url || '',
        video_url: item.video_url || ''
      })
      .select()
      .single();

    if (error) throw error;
    return { success: true, item: data };
  } catch (err: any) {
    console.error('Error adding portfolio item:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function updatePortfolioItem(id: string, item: any) {
  try {
    const { error } = await supabase
      .from('portfolio_items')
      .update({
        title: item.title,
        category: item.category,
        overview: item.overview,
        description: item.description,
        tech: item.tech,
        goals: item.goals,
        results: item.results,
        duration: item.duration,
        bg_gradient: item.bg_gradient,
        image_url: item.image_url,
        video_url: item.video_url
      })
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error updating portfolio item:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}

export async function deletePortfolioItem(id: string) {
  try {
    const { error } = await supabase
      .from('portfolio_items')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('Error deleting portfolio item:', err);
    return { success: false, message: err.message || 'Server error occurred.' };
  }
}
