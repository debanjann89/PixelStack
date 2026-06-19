'use server';

import { getDb, saveDb, Lead, ContactSubmission, Consultation, Project } from '@/data/mockDb';
import {
  ContactFormSchema,
  ConsultationSchema,
  ContactFormInput,
  ConsultationInput
} from './schemas';

// Helper to parse budget to numerical value for analytics
function getBudgetValue(range: string): number {
  if (range.includes('Under')) return 25000;
  if (range.includes('50,000') && range.includes('80,000')) return 65000;
  if (range.includes('80,000') && range.includes('1,20,000')) return 100000;
  if (range.includes('1,20,000') && range.includes('2,00,000')) return 160000;
  if (range.includes('2,00,000')) return 250000;
  return 50000; // default average
}

// 1. Submit Contact Form
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
  const db = await getDb();

  const newSubmission: ContactSubmission = {
    id: `sub-${Date.now()}`,
    name: data.name,
    email: data.email,
    phone: data.phone,
    businessName: data.businessName,
    message: data.message,
    createdAt: new Date().toISOString(),
  };

  const newLead: Lead = {
    id: `lead-${Date.now()}`,
    leadName: data.name,
    businessName: data.businessName,
    phone: data.phone,
    email: data.email,
    projectType: data.projectType,
    budgetRange: data.budgetRange,
    status: 'new',
    notes: `Submitted contact form: "${data.message.substring(0, 100)}..."`,
    createdAt: new Date().toISOString(),
  };

  db.contact_submissions.unshift(newSubmission);
  db.leads.unshift(newLead);

  const saved = await saveDb(db);
  
  if (!saved) {
    return {
      success: false,
      message: 'Server error. Failed to save submission.',
    };
  }

  return {
    success: true,
    message: 'Thank you! Your message has been sent. We will get back to you within 24 hours.',
  };
}

// 2. Book Consultation
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
  const db = await getDb();

  const newConsultation: Consultation = {
    id: `cons-${Date.now()}`,
    clientName: data.clientName,
    email: data.email,
    phone: data.phone,
    date: data.date,
    projectType: data.projectType,
    createdAt: new Date().toISOString(),
  };

  const newLead: Lead = {
    id: `lead-${Date.now()}`,
    leadName: data.clientName,
    businessName: 'Individual / TBD',
    phone: data.phone,
    email: data.email,
    projectType: data.projectType,
    budgetRange: '₹50,000 - ₹80,000', // default min budget range
    status: 'new',
    notes: `Booked free consultation for date: ${data.date}. Project: ${data.projectType}`,
    createdAt: new Date().toISOString(),
  };

  db.consultations.unshift(newConsultation);
  db.leads.unshift(newLead);

  const saved = await saveDb(db);

  if (!saved) {
    return {
      success: false,
      message: 'Server error. Failed to book consultation.',
    };
  }

  return {
    success: true,
    message: `Consultation successfully scheduled! We will contact you to confirm the timing.`,
  };
}

// 3. Update Lead Status (Admin only)
export async function updateLeadStatus(leadId: string, status: Lead['status'], notes: string) {
  try {
    const db = await getDb();
    const leadIndex = db.leads.findIndex((l) => l.id === leadId);

    if (leadIndex === -1) {
      return { success: false, message: 'Lead not found.' };
    }

    db.leads[leadIndex].status = status;
    db.leads[leadIndex].notes = notes;

    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to update.' };

    return { success: true, message: 'Lead updated successfully.' };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 4. Fetch Dashboard Data
export async function getDashboardData() {
  try {
    const db = await getDb();
    
    const totalLeads = db.leads.length;
    const newLeads = db.leads.filter((l) => l.status === 'new').length;
    const contactedLeads = db.leads.filter((l) => l.status === 'contacted').length;
    const proposalLeads = db.leads.filter((l) => l.status === 'proposal').length;
    const wonLeads = db.leads.filter((l) => l.status === 'won').length;
    const lostLeads = db.leads.filter((l) => l.status === 'lost').length;

    // Analytics Calculations
    const winRate = totalLeads > 0 ? Math.round((wonLeads / (wonLeads + lostLeads || 1)) * 100) : 0;
    
    // Revenue estimates based on budgets of won projects
    const wonRevenue = db.leads
      .filter((l) => l.status === 'won')
      .reduce((sum, l) => sum + getBudgetValue(l.budgetRange), 0);

    const pipelineRevenue = db.leads
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
      leads: db.leads,
      submissions: db.contact_submissions,
      consultations: db.consultations,
      projects: db.projects || [],
    };
  } catch (err) {
    console.error('Error fetching dashboard stats:', err);
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
    };
  }
}

// 5. Delete Lead
export async function deleteLead(leadId: string) {
  try {
    const db = await getDb();
    db.leads = db.leads.filter((l) => l.id !== leadId);
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to delete lead.' };
    return { success: true, message: 'Lead deleted successfully.' };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 6. Delete Submission (Contact Message)
export async function deleteSubmission(submissionId: string) {
  try {
    const db = await getDb();
    db.contact_submissions = db.contact_submissions.filter((s) => s.id !== submissionId);
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to delete message.' };
    return { success: true, message: 'Message deleted successfully.' };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 7. Delete Consultation
export async function deleteConsultation(consultationId: string) {
  try {
    const db = await getDb();
    db.consultations = db.consultations.filter((c) => c.id !== consultationId);
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to delete consultation.' };
    return { success: true, message: 'Consultation deleted successfully.' };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 8. Fetch Projects
export async function getProjects() {
  try {
    const db = await getDb();
    return db.projects || [];
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
}

// 9. Add Project
export async function addProject(project: Omit<Project, 'id' | 'createdAt'>) {
  try {
    const db = await getDb();
    const newProject: Project = {
      ...project,
      id: `proj-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    if (!db.projects) db.projects = [];
    db.projects.unshift(newProject);
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to save project.' };
    return { success: true, message: 'Project added successfully.', project: newProject };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 10. Update Project
export async function updateProject(projectId: string, updatedData: Omit<Project, 'id' | 'createdAt'>) {
  try {
    const db = await getDb();
    const index = db.projects.findIndex((p) => p.id === projectId);
    if (index === -1) return { success: false, message: 'Project not found.' };
    db.projects[index] = {
      ...db.projects[index],
      ...updatedData
    };
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to update project.' };
    return { success: true, message: 'Project updated successfully.' };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 11. Delete Project
export async function deleteProject(projectId: string) {
  try {
    const db = await getDb();
    db.projects = db.projects.filter((p) => p.id !== projectId);
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to delete project.' };
    return { success: true, message: 'Project deleted successfully.' };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 12. Add Lead
export async function addLead(leadData: Omit<Lead, 'id' | 'createdAt'>) {
  try {
    const db = await getDb();
    const newLead: Lead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    db.leads.unshift(newLead);
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to save lead.' };
    return { success: true, message: 'Lead added successfully.', lead: newLead };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 13. Update Lead
export async function updateLead(leadId: string, updatedData: Omit<Lead, 'id' | 'createdAt'>) {
  try {
    const db = await getDb();
    const index = db.leads.findIndex((l) => l.id === leadId);
    if (index === -1) return { success: false, message: 'Lead not found.' };
    db.leads[index] = {
      ...db.leads[index],
      ...updatedData
    };
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to update lead.' };
    return { success: true, message: 'Lead updated successfully.' };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 14. Add Submission (Contact Message)
export async function addSubmission(submissionData: Omit<ContactSubmission, 'id' | 'createdAt'>) {
  try {
    const db = await getDb();
    const newSub: ContactSubmission = {
      ...submissionData,
      id: `sub-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    db.contact_submissions.unshift(newSub);
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to save message.' };
    return { success: true, message: 'Message added successfully.', submission: newSub };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 15. Update Submission
export async function updateSubmission(submissionId: string, updatedData: Omit<ContactSubmission, 'id' | 'createdAt'>) {
  try {
    const db = await getDb();
    const index = db.contact_submissions.findIndex((s) => s.id === submissionId);
    if (index === -1) return { success: false, message: 'Message not found.' };
    db.contact_submissions[index] = {
      ...db.contact_submissions[index],
      ...updatedData
    };
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to update message.' };
    return { success: true, message: 'Message updated successfully.' };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 16. Add Consultation
export async function addConsultation(consultationData: Omit<Consultation, 'id' | 'createdAt'>) {
  try {
    const db = await getDb();
    const newCons: Consultation = {
      ...consultationData,
      id: `cons-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    db.consultations.unshift(newCons);
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to save consultation.' };
    return { success: true, message: 'Consultation added successfully.', consultation: newCons };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}

// 17. Update Consultation
export async function updateConsultation(consultationId: string, updatedData: Omit<Consultation, 'id' | 'createdAt'>) {
  try {
    const db = await getDb();
    const index = db.consultations.findIndex((c) => c.id === consultationId);
    if (index === -1) return { success: false, message: 'Consultation not found.' };
    db.consultations[index] = {
      ...db.consultations[index],
      ...updatedData
    };
    const saved = await saveDb(db);
    if (!saved) return { success: false, message: 'Failed to update consultation.' };
    return { success: true, message: 'Consultation updated successfully.' };
  } catch (err) {
    return { success: false, message: 'Server error occurred.' };
  }
}
