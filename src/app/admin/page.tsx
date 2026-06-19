'use client';

import { useState, useEffect, useTransition } from 'react';
import {
  getDashboardData,
  deleteLead,
  addLead,
  updateLead,
  deleteSubmission,
  addSubmission,
  updateSubmission,
  deleteConsultation,
  addConsultation,
  updateConsultation,
  addProject,
  updateProject,
  deleteProject
} from '@/app/actions';
import type {
  Lead,
  ContactSubmission,
  Consultation,
  Project
} from '@/data/mockDb';
import {
  TrendingUp,
  Award,
  Zap,
  Briefcase,
  Users,
  MessageSquare,
  Calendar,
  Save,
  Lock,
  Unlock,
  AlertCircle,
  CheckCircle,
  FileText,
  Trash2,
  Edit,
  Plus,
  Loader2,
  Check,
  X,
  PlusCircle,
  MinusCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TECH_OPTIONS = [
  'Next.js 15',
  'TypeScript',
  'React Hook Form',
  'Zod',
  'Framer Motion',
  'Tailwind CSS',
  'PostCSS',
  'Node.js',
  'Local JSON DB'
];

const CATEGORY_OPTIONS = [
  'Restaurants',
  'Law Firms',
  'Dental Clinics',
  'Hotels',
  'Businesses',
  'SaaS',
  'E-commerce'
];

const GRADIENT_OPTIONS = [
  { label: 'Amber to Orange', value: 'from-amber-600/10 to-orange-700/20' },
  { label: 'Blue to Indigo', value: 'from-blue-600/10 to-indigo-700/20' },
  { label: 'Emerald to Teal', value: 'from-emerald-500/10 to-teal-700/20' },
  { label: 'Primary Green to Secondary', value: 'from-primary/10 to-secondary/20' },
  { label: 'Cyan to Blue', value: 'from-cyan-600/10 to-blue-700/20' },
  { label: 'Purple to Violet', value: 'from-primary-dark/10 to-secondary-dark/20' }
];

const BUDGET_OPTIONS = [
  'Under ₹30,000',
  '₹30,000 - ₹50,000',
  '₹50,000 - ₹80,000',
  '₹80,000 - ₹1,20,000',
  '₹1,20,000 - ₹2,00,000',
  '₹2,00,000+'
];

const LEAD_STATUS_OPTIONS = [
  { label: 'New Inquiry', value: 'new' },
  { label: 'Contacted', value: 'contacted' },
  { label: 'Sent Proposal', value: 'proposal' },
  { label: 'Closed Won', value: 'won' },
  { label: 'Closed Lost', value: 'lost' }
] as const;

export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'messages' | 'consultations' | 'projects'>('leads');
  const [isPending, startTransition] = useTransition();

  // Data state
  const [dashboardData, setDashboardData] = useState<any>(null);
  
  // Loading states for actions
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  
  // Toast notifications
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Project Modal form states
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState(CATEGORY_OPTIONS[0]);
  const [formDuration, setFormDuration] = useState('');
  const [formBgGradient, setFormBgGradient] = useState(GRADIENT_OPTIONS[3].value);
  const [formOverview, setFormOverview] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formTech, setFormTech] = useState<string[]>([]);
  const [formGoals, setFormGoals] = useState<string[]>(['']);
  const [formResults, setFormResults] = useState<string[]>(['']);

  // Lead Modal form states
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [leadFormName, setLeadFormName] = useState('');
  const [leadFormBusiness, setLeadFormBusiness] = useState('');
  const [leadFormPhone, setLeadFormPhone] = useState('');
  const [leadFormEmail, setLeadFormEmail] = useState('');
  const [leadFormProjectType, setLeadFormProjectType] = useState('');
  const [leadFormBudget, setLeadFormBudget] = useState(BUDGET_OPTIONS[2]);
  const [leadFormStatus, setLeadFormStatus] = useState<Lead['status']>('new');
  const [leadFormNotes, setLeadFormNotes] = useState('');

  // Message Modal form states
  const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
  const [editingMsg, setEditingMsg] = useState<ContactSubmission | null>(null);
  const [msgFormName, setMsgFormName] = useState('');
  const [msgFormEmail, setMsgFormEmail] = useState('');
  const [msgFormPhone, setMsgFormPhone] = useState('');
  const [msgFormBusiness, setMsgFormBusiness] = useState('');
  const [msgFormMessage, setMsgFormMessage] = useState('');

  // Consultation Modal form states
  const [isConsModalOpen, setIsConsModalOpen] = useState(false);
  const [editingCons, setEditingCons] = useState<Consultation | null>(null);
  const [consFormClientName, setConsFormClientName] = useState('');
  const [consFormEmail, setConsFormEmail] = useState('');
  const [consFormPhone, setConsFormPhone] = useState('');
  const [consFormDate, setConsFormDate] = useState('');
  const [consFormProjectType, setConsFormProjectType] = useState('');

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Authenticate Admin
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'pixeladmin') {
      setIsAuthenticated(true);
      setLoginError('');
      triggerToast('Administrator access granted.');
    } else {
      setLoginError('Invalid Administrator Password. Access Denied.');
      triggerToast('Access Denied.', 'error');
    }
  };

  // Load Dashboard Data
  const loadData = async () => {
    const data = await getDashboardData();
    setDashboardData(data);
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    loadData();
  }, [isAuthenticated]);

  // Lead CRUD handlers
  const handleNewLeadModal = () => {
    setEditingLead(null);
    setLeadFormName('');
    setLeadFormBusiness('');
    setLeadFormPhone('');
    setLeadFormEmail('');
    setLeadFormProjectType('');
    setLeadFormBudget(BUDGET_OPTIONS[2]);
    setLeadFormStatus('new');
    setLeadFormNotes('');
    setIsLeadModalOpen(true);
  };

  const handleEditLeadModal = (lead: Lead) => {
    setEditingLead(lead);
    setLeadFormName(lead.leadName);
    setLeadFormBusiness(lead.businessName);
    setLeadFormPhone(lead.phone);
    setLeadFormEmail(lead.email);
    setLeadFormProjectType(lead.projectType);
    setLeadFormBudget(lead.budgetRange);
    setLeadFormStatus(lead.status);
    setLeadFormNotes(lead.notes);
    setIsLeadModalOpen(true);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadFormName || !leadFormEmail || !leadFormProjectType) {
      triggerToast('Please fill out all required fields.', 'error');
      return;
    }

    const leadData = {
      leadName: leadFormName,
      businessName: leadFormBusiness || 'Individual / TBD',
      phone: leadFormPhone,
      email: leadFormEmail,
      projectType: leadFormProjectType,
      budgetRange: leadFormBudget,
      status: leadFormStatus,
      notes: leadFormNotes || 'No notes added.'
    };

    setLoadingAction('submit-lead');

    startTransition(async () => {
      let res;
      if (editingLead) {
        res = await updateLead(editingLead.id, leadData);
      } else {
        res = await addLead(leadData);
      }
      setLoadingAction(null);

      if (res.success) {
        triggerToast(editingLead ? 'Lead updated successfully.' : 'Lead added successfully.');
        setIsLeadModalOpen(false);
        loadData();
      } else {
        triggerToast(res.message || 'Failed to save lead.', 'error');
      }
    });
  };

  const handleDeleteLead = (leadId: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    setLoadingAction(`delete-lead-${leadId}`);

    startTransition(async () => {
      const res = await deleteLead(leadId);
      setLoadingAction(null);
      if (res.success) {
        triggerToast('Lead deleted successfully.');
        loadData();
      } else {
        triggerToast(res.message || 'Failed to delete lead.', 'error');
      }
    });
  };

  // Message (Contact Submission) CRUD handlers
  const handleNewMsgModal = () => {
    setEditingMsg(null);
    setMsgFormName('');
    setMsgFormEmail('');
    setMsgFormPhone('');
    setMsgFormBusiness('');
    setMsgFormMessage('');
    setIsMsgModalOpen(true);
  };

  const handleEditMsgModal = (sub: ContactSubmission) => {
    setEditingMsg(sub);
    setMsgFormName(sub.name);
    setMsgFormEmail(sub.email);
    setMsgFormPhone(sub.phone);
    setMsgFormBusiness(sub.businessName);
    setMsgFormMessage(sub.message);
    setIsMsgModalOpen(true);
  };

  const handleMsgSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgFormName || !msgFormEmail || !msgFormMessage) {
      triggerToast('Please fill out all required fields.', 'error');
      return;
    }

    const submissionData = {
      name: msgFormName,
      email: msgFormEmail,
      phone: msgFormPhone,
      businessName: msgFormBusiness || 'Individual / TBD',
      message: msgFormMessage
    };

    setLoadingAction('submit-msg');

    startTransition(async () => {
      let res;
      if (editingMsg) {
        res = await updateSubmission(editingMsg.id, submissionData);
      } else {
        res = await addSubmission(submissionData);
      }
      setLoadingAction(null);

      if (res.success) {
        triggerToast(editingMsg ? 'Client message updated successfully.' : 'Client message added successfully.');
        setIsMsgModalOpen(false);
        loadData();
      } else {
        triggerToast(res.message || 'Failed to save message.', 'error');
      }
    });
  };

  const handleDeleteSubmission = (subId: string) => {
    if (!confirm('Are you sure you want to delete this client message?')) return;
    setLoadingAction(`delete-sub-${subId}`);

    startTransition(async () => {
      const res = await deleteSubmission(subId);
      setLoadingAction(null);
      if (res.success) {
        triggerToast('Client message deleted.');
        loadData();
      } else {
        triggerToast(res.message || 'Failed to delete message.', 'error');
      }
    });
  };

  // Consultation CRUD handlers
  const handleNewConsModal = () => {
    setEditingCons(null);
    setConsFormClientName('');
    setConsFormEmail('');
    setConsFormPhone('');
    setConsFormDate(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
    setConsFormProjectType('');
    setIsConsModalOpen(true);
  };

  const handleEditConsModal = (cons: Consultation) => {
    setEditingCons(cons);
    setConsFormClientName(cons.clientName);
    setConsFormEmail(cons.email);
    setConsFormPhone(cons.phone);
    setConsFormDate(cons.date);
    setConsFormProjectType(cons.projectType);
    setIsConsModalOpen(true);
  };

  const handleConsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consFormClientName || !consFormEmail || !consFormDate || !consFormProjectType) {
      triggerToast('Please fill out all required fields.', 'error');
      return;
    }

    const consultationData = {
      clientName: consFormClientName,
      email: consFormEmail,
      phone: consFormPhone,
      date: consFormDate,
      projectType: consFormProjectType
    };

    setLoadingAction('submit-cons');

    startTransition(async () => {
      let res;
      if (editingCons) {
        res = await updateConsultation(editingCons.id, consultationData);
      } else {
        res = await addConsultation(consultationData);
      }
      setLoadingAction(null);

      if (res.success) {
        triggerToast(editingCons ? 'Consultation booking updated successfully.' : 'Consultation booking added successfully.');
        setIsConsModalOpen(false);
        loadData();
      } else {
        triggerToast(res.message || 'Failed to save booking.', 'error');
      }
    });
  };

  const handleDeleteConsultation = (consId: string) => {
    if (!confirm('Are you sure you want to cancel and delete this consultation?')) return;
    setLoadingAction(`delete-cons-${consId}`);

    startTransition(async () => {
      const res = await deleteConsultation(consId);
      setLoadingAction(null);
      if (res.success) {
        triggerToast('Consultation deleted.');
        loadData();
      } else {
        triggerToast(res.message || 'Failed to delete consultation.', 'error');
      }
    });
  };

  // Project CRUD handlers
  const handleNewProjectModal = () => {
    setEditingProject(null);
    setFormTitle('');
    setFormCategory(CATEGORY_OPTIONS[0]);
    setFormDuration('');
    setFormBgGradient(GRADIENT_OPTIONS[2].value);
    setFormOverview('');
    setFormDesc('');
    setFormTech([]);
    setFormGoals(['']);
    setFormResults(['']);
    setIsProjectModalOpen(true);
  };

  const handleEditProjectModal = (proj: Project) => {
    setEditingProject(proj);
    setFormTitle(proj.title);
    setFormCategory(proj.category);
    setFormDuration(proj.duration);
    setFormBgGradient(proj.bgGradient);
    setFormOverview(proj.overview);
    setFormDesc(proj.desc);
    setFormTech(proj.tech);
    setFormGoals(proj.goals.length > 0 ? proj.goals : ['']);
    setFormResults(proj.results.length > 0 ? proj.results : ['']);
    setIsProjectModalOpen(true);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle || !formDuration || !formOverview || !formDesc) {
      triggerToast('Please fill out all required fields.', 'error');
      return;
    }

    const cleanedGoals = formGoals.filter(g => g.trim() !== '');
    const cleanedResults = formResults.filter(r => r.trim() !== '');

    const projectData = {
      title: formTitle,
      category: formCategory,
      overview: formOverview,
      desc: formDesc,
      tech: formTech,
      goals: cleanedGoals.length > 0 ? cleanedGoals : ['Design standard layout guidelines'],
      results: cleanedResults.length > 0 ? cleanedResults : ['Website launched successfully.'],
      duration: formDuration,
      bgGradient: formBgGradient
    };

    setLoadingAction('submit-project');

    startTransition(async () => {
      let res;
      if (editingProject) {
        res = await updateProject(editingProject.id, projectData);
      } else {
        res = await addProject(projectData);
      }
      setLoadingAction(null);

      if (res.success) {
        triggerToast(editingProject ? 'Project updated successfully.' : 'Project added successfully.');
        setIsProjectModalOpen(false);
        loadData();
      } else {
        triggerToast(res.message || 'Failed to save project.', 'error');
      }
    });
  };

  const handleDeleteProject = (projId: string) => {
    if (!confirm('Are you sure you want to delete this portfolio project?')) return;
    setLoadingAction(`delete-proj-${projId}`);

    startTransition(async () => {
      const res = await deleteProject(projId);
      setLoadingAction(null);
      if (res.success) {
        triggerToast('Project deleted successfully.');
        loadData();
      } else {
        triggerToast(res.message || 'Failed to delete project.', 'error');
      }
    });
  };

  // Dynamic Array Helpers for Goals/Results
  const handleGoalChange = (idx: number, val: string) => {
    const newGoals = [...formGoals];
    newGoals[idx] = val;
    setFormGoals(newGoals);
  };

  const addGoalField = () => setFormGoals([...formGoals, '']);
  const removeGoalField = (idx: number) => {
    if (formGoals.length === 1) return;
    setFormGoals(formGoals.filter((_, i) => i !== idx));
  };

  const handleResultChange = (idx: number, val: string) => {
    const newResults = [...formResults];
    newResults[idx] = val;
    setFormResults(newResults);
  };

  const addResultField = () => setFormResults([...formResults, '']);
  const removeResultField = (idx: number) => {
    if (formResults.length === 1) return;
    setFormResults(formResults.filter((_, i) => i !== idx));
  };

  // PDF Exporters
  const exportLeadsToPdf = async (leadsData: Lead[]) => {
    if (!leadsData || leadsData.length === 0) return;
    setLoadingAction('export-leads');
    
    const { default: jsPDF } = await import('jspdf');
    const { default: autoTable } = await import('jspdf-autotable');
    
    const doc = new jsPDF();
    doc.setFillColor(2, 6, 4);
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(16, 185, 129);
    doc.text("PixelStack", 15, 20);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(156, 163, 175);
    doc.text("Building Modern Digital Experiences That Drive Growth", 15, 26);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("LEADS PIPELINE REPORT", 15, 38);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(156, 163, 175);
    doc.text(`Generated: ${new Date().toLocaleDateString('en-IN')}`, 130, 20);
    
    const tableHeaders = [['Contact Details', 'Business Name', 'Project Info', 'Budget', 'Status', 'Date Logged']];
    const tableBody = leadsData.map(l => [
      `${l.leadName}\n${l.email}\n${l.phone}`,
      l.businessName,
      l.projectType,
      l.budgetRange,
      l.status.toUpperCase(),
      new Date(l.createdAt).toLocaleDateString('en-IN')
    ]);
    
    autoTable(doc, {
      head: tableHeaders,
      body: tableBody,
      startY: 52,
      theme: 'striped',
      headStyles: {
        fillColor: [6, 19, 13],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 9,
      },
      bodyStyles: {
        fontSize: 8.5,
        textColor: [55, 65, 81],
      },
      alternateRowStyles: {
        fillColor: [240, 253, 244],
      },
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 35 },
        2: { cellWidth: 35 },
        3: { cellWidth: 30 },
        4: { cellWidth: 20 },
        5: { cellWidth: 20 },
      },
      didParseCell: (data) => {
        if (data.column.index === 4 && data.cell.section === 'body') {
          const val = String(data.cell.raw).toLowerCase();
          if (val === 'won') {
            data.cell.styles.textColor = [16, 185, 129];
            data.cell.styles.fontStyle = 'bold';
          } else if (val === 'lost') {
            data.cell.styles.textColor = [239, 68, 68];
          } else if (val === 'new') {
            data.cell.styles.textColor = [5, 150, 105];
            data.cell.styles.fontStyle = 'bold';
          }
        }
      }
    });
    
    const totalPages = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(156, 163, 175);
      doc.text(`Page ${i} of ${totalPages}`, 180, 287);
      doc.text("Confidential • PixelStack Admin Dashboard Report", 15, 287);
    }
    
    doc.save(`pixelstack-leads-${new Date().toISOString().split('T')[0]}.pdf`);
    setLoadingAction(null);
    triggerToast('Leads PDF report downloaded.');
  };

  const exportMessagesToPdf = async (submissionsData: ContactSubmission[]) => {
    if (!submissionsData || submissionsData.length === 0) return;
    setLoadingAction('export-messages');
    
    const { default: jsPDF } = await import('jspdf');
    const { default: autoTable } = await import('jspdf-autotable');
    
    const doc = new jsPDF();
    doc.setFillColor(2, 6, 4);
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(16, 185, 129);
    doc.text("PixelStack", 15, 20);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(156, 163, 175);
    doc.text("Building Modern Digital Experiences That Drive Growth", 15, 26);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("INCOMING CLIENT MESSAGES REPORT", 15, 38);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(156, 163, 175);
    doc.text(`Generated: ${new Date().toLocaleDateString('en-IN')}`, 130, 20);
    
    const tableHeaders = [['Sender details', 'Business name', 'Message / Inquiry content', 'Date logged']];
    const tableBody = submissionsData.map(s => [
      `${s.name}\n${s.email}\n${s.phone}`,
      s.businessName,
      s.message,
      new Date(s.createdAt).toLocaleString('en-IN')
    ]);
    
    autoTable(doc, {
      head: tableHeaders,
      body: tableBody,
      startY: 52,
      theme: 'striped',
      headStyles: {
        fillColor: [6, 19, 13],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 9,
      },
      bodyStyles: {
        fontSize: 8.5,
        textColor: [55, 65, 81],
      },
      alternateRowStyles: {
        fillColor: [240, 253, 244],
      },
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 35 },
        2: { cellWidth: 95 },
        3: { cellWidth: 20 },
      }
    });
    
    const totalPages = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(156, 163, 175);
      doc.text(`Page ${i} of ${totalPages}`, 180, 287);
      doc.text("Confidential • PixelStack Admin Dashboard Report", 15, 287);
    }
    
    doc.save(`pixelstack-messages-${new Date().toISOString().split('T')[0]}.pdf`);
    setLoadingAction(null);
    triggerToast('Messages PDF report downloaded.');
  };

  // Authentication Guard UI
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-md glass-panel p-8 rounded-2xl border border-white/10 z-10 text-center shadow-2xl"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/15">
            <Lock className="h-5 w-5 text-primary-light" />
          </div>

          <h1 className="text-xl font-bold text-white mb-2">PixelStack Studio Admin</h1>
          <p className="text-zinc-500 text-xs mb-6 leading-relaxed">
            Enter developer admin credentials to access lead logs and portfolio projects management.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Administrator Password
              </label>
              <input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
              />
              {loginError && (
                <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" /> {loginError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-xl text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Sign In <Unlock className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-8 text-[10px] text-zinc-600 font-mono">
            Hint: Use password <span className="text-zinc-500 font-bold">pixeladmin</span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-zinc-500 font-mono text-xs gap-3">
        <Loader2 className="h-5 w-5 text-primary animate-spin" />
        <span>Compiling Dashboard Stats...</span>
      </div>
    );
  }

  const { stats, leads, submissions, consultations, projects } = dashboardData;

  const getStatusBadge = (status: Lead['status']) => {
    switch (status) {
      case 'new':
        return <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-primary/10 text-primary-light border border-primary/20">New</span>;
      case 'contacted':
        return <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">Contacted</span>;
      case 'proposal':
        return <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-secondary/10 text-secondary-light border border-secondary/20">Proposal</span>;
      case 'won':
        return <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Won</span>;
      case 'lost':
        return <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">Lost</span>;
    }
  };

  return (
    <div className="relative min-h-screen pt-10 pb-20">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

      {/* Floating Status Toast popup */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className={`fixed top-6 left-1/2 z-50 px-5 py-3 rounded-xl border shadow-2xl flex items-center gap-2.5 min-w-[280px] max-w-sm ${
              toast.type === 'success'
                ? 'bg-zinc-950/90 border-primary/20 text-emerald-400'
                : 'bg-zinc-950/90 border-red-500/20 text-red-400'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
            ) : (
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            )}
            <span className="text-xs font-semibold font-mono">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        {/* Header toolbar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 border-b border-zinc-900 pb-6">
          <div>
            <span className="text-[10px] bg-primary/10 border border-primary/15 text-primary-light px-2 py-0.5 rounded font-mono font-bold">
              ADMIN SECURE
            </span>
            <h1 className="text-3xl font-extrabold text-white mt-2">Leads & Content Hub</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => exportLeadsToPdf(leads)}
              disabled={loadingAction !== null}
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-black rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold shadow-lg shadow-primary/10 disabled:opacity-50"
            >
              {loadingAction === 'export-leads' ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <FileText className="h-3.5 w-3.5" />
              )}
              Export Leads PDF
            </button>
            <button
              onClick={() => exportMessagesToPdf(submissions)}
              disabled={loadingAction !== null}
              className="px-4 py-2 bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold disabled:opacity-50"
            >
              {loadingAction === 'export-messages' ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <FileText className="h-3.5 w-3.5" />
              )}
              Export Messages PDF
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="glass-panel p-6 rounded-2xl border border-white/5">
            <div className="flex items-center justify-between text-zinc-500 text-xs font-semibold mb-2">
              <span>Won Revenue Estimate</span>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">
              ₹{stats.wonRevenue.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-zinc-500 mt-2">Direct contract values</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5">
            <div className="flex items-center justify-between text-zinc-500 text-xs font-semibold mb-2">
              <span>Pipeline Estimate</span>
              <Briefcase className="h-4 w-4 text-primary-light" />
            </div>
            <div className="text-3xl font-extrabold text-white">
              ₹{stats.pipelineRevenue.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-zinc-500 mt-2">Leads in negotiation</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5">
            <div className="flex items-center justify-between text-zinc-500 text-xs font-semibold mb-2">
              <span>Lead Win Rate</span>
              <Award className="h-4 w-4 text-primary" />
            </div>
            <div className="text-3xl font-extrabold text-white">
              {stats.winRate}%
            </div>
            <div className="text-[10px] text-zinc-500 mt-2">Based on closed won/lost</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5">
            <div className="flex items-center justify-between text-zinc-500 text-xs font-semibold mb-2">
              <span>Active Pipeline Leads</span>
              <Users className="h-4 w-4 text-secondary-light" />
            </div>
            <div className="text-3xl font-extrabold text-white">
              {stats.totalLeads}
            </div>
            <div className="text-[10px] text-zinc-500 mt-2">Total submissions in system</div>
          </div>

        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-zinc-900 pb-4">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'leads' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Leads pipeline ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'messages' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Contact Submissions ({submissions.length})
          </button>
          <button
            onClick={() => setActiveTab('consultations')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'consultations' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Consultation calls ({consultations.length})
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'projects' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Portfolio Projects ({projects.length})
          </button>
        </div>

        {/* Panel Content */}
        <div className="glass-panel rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
          
          {/* Leads Tab Panel */}
          {activeTab === 'leads' && (
            <div>
              <div className="flex items-center justify-between p-4 bg-zinc-950/40 border-b border-zinc-900">
                <span className="text-xs text-zinc-400 font-mono">Manage potential clients and deal stages</span>
                <button
                  onClick={handleNewLeadModal}
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-black rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold shadow-lg shadow-primary/10"
                >
                  <Plus className="h-4 w-4" /> Add Manual Lead
                </button>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4 p-4 bg-black/20">
                {leads.map((lead: Lead) => (
                  <div key={lead.id} className="bg-zinc-950 p-4 rounded-xl border border-white/5 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-white text-sm">{lead.leadName}</div>
                        <div className="text-zinc-500 text-[10px] mt-0.5">{lead.phone}</div>
                        <div className="text-zinc-500 text-[10px]">{lead.email}</div>
                      </div>
                      <div>{getStatusBadge(lead.status)}</div>
                    </div>
                    <div className="border-t border-zinc-900 pt-2 flex justify-between text-[11px]">
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">Business</span>
                        <span className="font-semibold text-zinc-300">{lead.businessName}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">Budget</span>
                        <span className="font-bold text-zinc-300 font-mono">{lead.budgetRange}</span>
                      </div>
                    </div>
                    <div className="border-t border-zinc-900 pt-2">
                      <span className="text-zinc-500 block text-[9px] uppercase tracking-wider mb-1">Project Scope</span>
                      <span className="text-[10px] text-primary-light bg-primary/5 px-2 py-0.5 rounded border border-primary/10 inline-block">
                        {lead.projectType}
                      </span>
                    </div>
                    {lead.notes && (
                      <div className="border-t border-zinc-900 pt-2">
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider mb-1">Notes</span>
                        <p className="text-zinc-400 text-xs bg-black/40 p-2.5 rounded border border-white/5 leading-relaxed">
                          {lead.notes}
                        </p>
                      </div>
                    )}
                    <div className="flex gap-2 pt-2 border-t border-zinc-900 justify-end">
                      <button
                        onClick={() => handleEditLeadModal(lead)}
                        disabled={loadingAction !== null}
                        className="flex-1 py-2 bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      >
                        <Edit className="h-3 w-3" /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteLead(lead.id)}
                        disabled={loadingAction !== null}
                        className="py-2 px-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-black rounded-lg text-xs flex items-center justify-center transition-all cursor-pointer"
                        title="Delete Lead"
                      >
                        {loadingAction === `delete-lead-${lead.id}` ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Trash2 className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-zinc-950/80 border-b border-zinc-900 text-zinc-500 uppercase font-bold tracking-wider">
                      <th className="p-4">Contact Detail</th>
                      <th className="p-4">Business & Project</th>
                      <th className="p-4">Estimated Budget</th>
                      <th className="p-4">Status Pipeline</th>
                      <th className="p-4 w-[240px]">Notes</th>
                      <th className="p-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900 bg-black/40">
                    {leads.map((lead: Lead) => (
                      <tr key={lead.id} className="hover:bg-zinc-900/10 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-white text-sm">{lead.leadName}</div>
                          <div className="text-zinc-500 text-[10px] mt-0.5">{lead.phone}</div>
                          <div className="text-zinc-500 text-[10px]">{lead.email}</div>
                        </td>

                        <td className="p-4">
                          <div className="font-semibold text-zinc-300">{lead.businessName}</div>
                          <span className="text-[10px] text-primary-light bg-primary/5 px-2 py-0.5 rounded mt-1 inline-block border border-primary/10">
                            {lead.projectType}
                          </span>
                        </td>

                        <td className="p-4 font-mono font-bold text-zinc-300">
                          {lead.budgetRange}
                        </td>

                        <td className="p-4">
                          {getStatusBadge(lead.status)}
                        </td>

                        <td className="p-4">
                          <p className="text-zinc-400 leading-normal line-clamp-2" title={lead.notes}>
                            {lead.notes}
                          </p>
                        </td>

                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleEditLeadModal(lead)}
                              disabled={loadingAction !== null}
                              className="p-2 bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer disabled:opacity-50"
                              title="Edit Lead"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              disabled={loadingAction !== null}
                              className="p-2 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-black rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer disabled:opacity-50"
                              title="Delete Lead"
                            >
                              {loadingAction === `delete-lead-${lead.id}` ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Messages Tab Panel */}
          {activeTab === 'messages' && (
            <div>
              <div className="flex items-center justify-between p-4 bg-zinc-950/40 border-b border-zinc-900">
                <span className="text-xs text-zinc-400 font-mono">Client form submissions from contact page</span>
                <button
                  onClick={handleNewMsgModal}
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-black rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold shadow-lg shadow-primary/10"
                >
                  <Plus className="h-4 w-4" /> Add Manual Message
                </button>
              </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4 p-4 bg-black/20">
                  {submissions.map((sub: ContactSubmission) => (
                    <div key={sub.id} className="bg-zinc-950 p-4 rounded-xl border border-white/5 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-white text-sm">{sub.name}</div>
                          <div className="text-zinc-500 text-[10px] mt-0.5">{sub.phone}</div>
                          <div className="text-zinc-500 text-[10px]">{sub.email}</div>
                        </div>
                      </div>
                      <div className="border-t border-zinc-900 pt-2">
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider mb-0.5">Business Name</span>
                        <span className="font-semibold text-zinc-300 text-xs">{sub.businessName}</span>
                      </div>
                      <div className="border-t border-zinc-900 pt-2">
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider mb-1">Message</span>
                        <p className="text-zinc-400 text-xs bg-black/40 p-2.5 rounded border border-white/5 leading-relaxed whitespace-pre-line">
                          {sub.message}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                        <span className="text-zinc-500 text-[10px] font-mono">{new Date(sub.createdAt).toLocaleString('en-IN')}</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditMsgModal(sub)}
                            disabled={loadingAction !== null}
                            className="p-2 bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                            title="Edit Message"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteSubmission(sub.id)}
                            disabled={loadingAction !== null}
                            className="p-2 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-black rounded-lg transition-colors cursor-pointer"
                            title="Delete Message"
                          >
                            {loadingAction === `delete-sub-${sub.id}` ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-zinc-950/80 border-b border-zinc-900 text-zinc-500 uppercase font-bold tracking-wider">
                        <th className="p-4">Sender info</th>
                        <th className="p-4">Business name</th>
                        <th className="p-4">Sent message</th>
                        <th className="p-4">Logged timestamp</th>
                        <th className="p-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900 bg-black/40">
                      {submissions.map((sub: ContactSubmission) => (
                        <tr key={sub.id} className="hover:bg-zinc-900/10 transition-colors">
                          <td className="p-4">
                            <div className="font-bold text-white text-sm">{sub.name}</div>
                            <div className="text-zinc-500 text-[10px] mt-0.5">{sub.email}</div>
                            <div className="text-zinc-500 text-[10px]">{sub.phone}</div>
                          </td>
                          <td className="p-4 font-semibold text-zinc-300">
                            {sub.businessName}
                          </td>
                          <td className="p-4 max-w-sm">
                            <p className="text-zinc-400 leading-relaxed whitespace-pre-line bg-zinc-950/50 p-2.5 rounded-lg border border-white/5">
                              {sub.message}
                            </p>
                          </td>
                          <td className="p-4 text-zinc-500 font-mono text-[10px]">
                            {new Date(sub.createdAt).toLocaleString('en-IN')}
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleEditMsgModal(sub)}
                                disabled={loadingAction !== null}
                                className="p-2 bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer disabled:opacity-50"
                                title="Edit Message"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteSubmission(sub.id)}
                                disabled={loadingAction !== null}
                                className="p-2 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-black rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer disabled:opacity-50"
                                title="Delete Message"
                              >
                                {loadingAction === `delete-sub-${sub.id}` ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
          )}

          {/* Consultations Tab Panel */}
          {activeTab === 'consultations' && (
            <div>
              <div className="flex items-center justify-between p-4 bg-zinc-950/40 border-b border-zinc-900">
                <span className="text-xs text-zinc-400 font-mono">Booked strategy calls and sessions</span>
                <button
                  onClick={handleNewConsModal}
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-black rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold shadow-lg shadow-primary/10"
                >
                  <Plus className="h-4 w-4" /> Schedule Call
                </button>
              </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4 p-4 bg-black/20">
                  {consultations.map((cons: Consultation) => (
                    <div key={cons.id} className="bg-zinc-950 p-4 rounded-xl border border-white/5 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-white text-sm">{cons.clientName}</div>
                          <div className="text-zinc-500 text-[10px] mt-0.5">{cons.phone}</div>
                          <div className="text-zinc-500 text-[10px]">{cons.email}</div>
                        </div>
                        <span className="text-[10px] text-primary bg-primary/5 px-2.5 py-0.5 rounded border border-primary/10 font-semibold">
                          {cons.projectType}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-t border-zinc-900 pt-2 text-xs">
                        <div>
                          <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">Scheduled Date</span>
                          <span className="font-bold text-primary-light font-mono">{cons.date}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">Created At</span>
                          <span className="text-zinc-500 font-mono text-[10px]">{new Date(cons.createdAt).toLocaleDateString('en-IN')}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-2 border-t border-zinc-900 justify-end">
                        <button
                          onClick={() => handleEditConsModal(cons)}
                          disabled={loadingAction !== null}
                          className="flex-1 py-2 bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                        >
                          <Edit className="h-3 w-3" /> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteConsultation(cons.id)}
                          disabled={loadingAction !== null}
                          className="py-2 px-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-black rounded-lg text-xs flex items-center justify-center transition-all cursor-pointer"
                          title="Delete Booking"
                        >
                          {loadingAction === `delete-cons-${cons.id}` ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Trash2 className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-zinc-950/80 border-b border-zinc-900 text-zinc-500 uppercase font-bold tracking-wider">
                        <th className="p-4">Client</th>
                        <th className="p-4">Contact</th>
                        <th className="p-4">Scheduled date</th>
                        <th className="p-4">Project scope</th>
                        <th className="p-4">Created timestamp</th>
                        <th className="p-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900 bg-black/40">
                      {consultations.map((cons: Consultation) => (
                        <tr key={cons.id} className="hover:bg-zinc-900/10 transition-colors">
                          <td className="p-4 font-bold text-white text-sm">
                            {cons.clientName}
                          </td>
                          <td className="p-4 text-zinc-400">
                            <div>{cons.email}</div>
                            <div className="text-[10px] mt-0.5">{cons.phone}</div>
                          </td>
                          <td className="p-4 font-bold text-primary-light font-mono">
                            {cons.date}
                          </td>
                          <td className="p-4">
                            <span className="text-[10px] text-primary bg-primary/5 px-2.5 py-0.5 rounded border border-primary/10">
                              {cons.projectType}
                            </span>
                          </td>
                          <td className="p-4 text-zinc-500 font-mono text-[10px]">
                            {new Date(cons.createdAt).toLocaleString('en-IN')}
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleEditConsModal(cons)}
                                disabled={loadingAction !== null}
                                className="p-2 bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer disabled:opacity-50"
                                title="Edit Booking"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteConsultation(cons.id)}
                                disabled={loadingAction !== null}
                                className="p-2 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-black rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer disabled:opacity-50"
                                title="Delete Booking"
                              >
                                {loadingAction === `delete-cons-${cons.id}` ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
          )}

          {/* Projects Tab Panel */}
          {activeTab === 'projects' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900">
                <div className="text-xs text-zinc-400 font-mono">Manage showcase portfolios appearing on /portfolio route</div>
                <button
                  onClick={handleNewProjectModal}
                  className="px-4.5 py-2 bg-primary hover:bg-primary-dark text-black rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold shadow-lg shadow-primary/10"
                >
                  <Plus className="h-4 w-4" /> Add Showcase Project
                </button>
              </div>

              {projects.length === 0 ? (
                <div className="text-center py-20 text-zinc-500 font-mono text-xs">
                  No projects currently saved in the database.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((proj: Project) => (
                    <div key={proj.id} className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between h-full">
                      <div className={`aspect-[16/10] bg-gradient-to-br ${proj.bgGradient} relative flex items-center justify-center p-4`}>
                        <div className="glass-panel px-3 py-1.5 rounded-lg border border-white/10 text-center shadow-lg">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">{proj.category}</span>
                          <h4 className="text-xs font-bold text-white truncate max-w-[160px]">{proj.title}</h4>
                        </div>
                      </div>

                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-primary-light font-bold uppercase">{proj.category}</span>
                            <span className="text-[10px] text-zinc-500 font-mono">Duration: {proj.duration}</span>
                          </div>
                          <h3 className="text-sm font-bold text-white mb-2">{proj.title}</h3>
                          <p className="text-zinc-400 text-[11px] leading-relaxed line-clamp-3">{proj.overview}</p>
                        </div>

                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                          <button
                            onClick={() => handleEditProjectModal(proj)}
                            disabled={loadingAction !== null}
                            className="flex-1 py-2 bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer disabled:opacity-50"
                          >
                            <Edit className="h-3 w-3" /> Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            disabled={loadingAction !== null}
                            className="py-2 px-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-black rounded-lg text-xs flex items-center justify-center transition-all cursor-pointer disabled:opacity-50"
                            title="Delete Project"
                          >
                            {loadingAction === `delete-proj-${proj.id}` ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <Trash2 className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>

      {/* ----------------- MODAL FOR LEADS (CRUD) ----------------- */}
      <AnimatePresence>
        {isLeadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLeadModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl glass-panel rounded-2xl p-6 md:p-8 border border-white/10 z-10 shadow-2xl max-h-[90vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setIsLeadModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                {editingLead ? <Edit className="h-5 w-5 text-primary-light" /> : <PlusCircle className="h-5 w-5 text-primary-light" />}
                {editingLead ? 'Edit Lead Record' : 'Add Manual Lead'}
              </h2>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Lead Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={leadFormName}
                      onChange={(e) => setLeadFormName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Business Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp"
                      value={leadFormBusiness}
                      onChange={(e) => setLeadFormBusiness(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="text"
                      placeholder="e.g. +91 98765 43210"
                      value={leadFormPhone}
                      onChange={(e) => setLeadFormPhone(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={leadFormEmail}
                      onChange={(e) => setLeadFormEmail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Project Type *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SaaS Website"
                      value={leadFormProjectType}
                      onChange={(e) => setLeadFormProjectType(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Budget Scope *</label>
                    <select
                      value={leadFormBudget}
                      onChange={(e) => setLeadFormBudget(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-primary cursor-pointer"
                    >
                      {BUDGET_OPTIONS.map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Pipeline Status *</label>
                    <select
                      value={leadFormStatus}
                      onChange={(e) => setLeadFormStatus(e.target.value as Lead['status'])}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-primary cursor-pointer"
                    >
                      {LEAD_STATUS_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Lead Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Enter negotiation context, wireframe details, or logs..."
                    value={leadFormNotes}
                    onChange={(e) => setLeadFormNotes(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 border-t border-zinc-900 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsLeadModalOpen(false)}
                    className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loadingAction !== null}
                    className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {loadingAction === 'submit-lead' ? (
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                    ) : (
                      <Check className="h-4 w-4" />
                    )}
                    Save Lead
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ----------------- MODAL FOR MESSAGES (CRUD) ----------------- */}
      <AnimatePresence>
        {isMsgModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMsgModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl glass-panel rounded-2xl p-6 md:p-8 border border-white/10 z-10 shadow-2xl max-h-[90vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setIsMsgModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                {editingMsg ? <Edit className="h-5 w-5 text-primary-light" /> : <PlusCircle className="h-5 w-5 text-primary-light" />}
                {editingMsg ? 'Edit Client Message' : 'Add Manual Message'}
              </h2>

              <form onSubmit={handleMsgSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Sender Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alice Cooper"
                    value={msgFormName}
                    onChange={(e) => setMsgFormName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alice@example.com"
                      value={msgFormEmail}
                      onChange={(e) => setMsgFormEmail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="text"
                      placeholder="e.g. +91 99999 88888"
                      value={msgFormPhone}
                      onChange={(e) => setMsgFormPhone(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Business Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Cooper Foods"
                    value={msgFormBusiness}
                    onChange={(e) => setMsgFormBusiness(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Message Inquiry *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type client message content..."
                    value={msgFormMessage}
                    onChange={(e) => setMsgFormMessage(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 border-t border-zinc-900 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsMsgModalOpen(false)}
                    className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loadingAction !== null}
                    className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {loadingAction === 'submit-msg' ? (
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                    ) : (
                      <Check className="h-4 w-4" />
                    )}
                    Save Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ----------------- MODAL FOR CONSULTATIONS (CRUD) ----------------- */}
      <AnimatePresence>
        {isConsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl glass-panel rounded-2xl p-6 md:p-8 border border-white/10 z-10 shadow-2xl max-h-[90vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setIsConsModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                {editingCons ? <Edit className="h-5 w-5 text-primary-light" /> : <PlusCircle className="h-5 w-5 text-primary-light" />}
                {editingCons ? 'Edit Consultation Booking' : 'Schedule Strategy Call'}
              </h2>

              <form onSubmit={handleConsSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Client Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Mehta"
                    value={consFormClientName}
                    onChange={(e) => setConsFormClientName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh@hotelpalace.in"
                      value={consFormEmail}
                      onChange={(e) => setConsFormEmail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="text"
                      placeholder="e.g. +91 90123 45678"
                      value={consFormPhone}
                      onChange={(e) => setConsFormPhone(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Scheduled Date *</label>
                    <input
                      type="date"
                      required
                      value={consFormDate}
                      onChange={(e) => setConsFormDate(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Project Scope/Type *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Custom E-commerce"
                      value={consFormProjectType}
                      onChange={(e) => setConsFormProjectType(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 border-t border-zinc-900 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsConsModalOpen(false)}
                    className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loadingAction !== null}
                    className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {loadingAction === 'submit-cons' ? (
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                    ) : (
                      <Check className="h-4 w-4" />
                    )}
                    Save Session
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ----------------- MODAL FOR PROJECTS (CRUD) ----------------- */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProjectModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl glass-panel rounded-2xl p-6 md:p-8 border border-white/10 z-10 shadow-2xl max-h-[90vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setIsProjectModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                {editingProject ? <Edit className="h-5 w-5 text-primary-light" /> : <PlusCircle className="h-5 w-5 text-primary-light" />}
                {editingProject ? 'Edit Showcase Project' : 'Add New Showcase Project'}
              </h2>

              <form onSubmit={handleProjectSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Project Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. The Riviera Bistro"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Category *</label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-primary cursor-pointer"
                    >
                      {CATEGORY_OPTIONS.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Project Duration *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2 Weeks, 3 Weeks"
                      value={formDuration}
                      onChange={(e) => setFormDuration(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Background Gradient *</label>
                    <select
                      value={formBgGradient}
                      onChange={(e) => setFormBgGradient(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-primary cursor-pointer"
                    >
                      {GRADIENT_OPTIONS.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Card Overview * (Brief 1-sentence card text)</label>
                    <input
                      type="text"
                      required
                      placeholder="A premium ordering & booking website designed for a fine dining restaurant group..."
                      value={formOverview}
                      onChange={(e) => setFormOverview(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Detailed Backstory * (Longer paragraph context)</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="The restaurant was losing reservations due to a slow widget. We designed a clean seat booking API flow..."
                      value={formDesc}
                      onChange={(e) => setFormDesc(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* Technology Checklist using Custom Green Checkboxes */}
                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">
                    Technology Stack (Theme-based Checkboxes)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-zinc-950 p-4 rounded-xl border border-white/5">
                    {TECH_OPTIONS.map((t) => {
                      const isChecked = formTech.includes(t);
                      return (
                        <label key={t} className="flex items-center gap-2.5 cursor-pointer group select-none">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {
                              if (isChecked) {
                                setFormTech(formTech.filter(x => x !== t));
                              } else {
                                setFormTech([...formTech, t]);
                              }
                            }}
                            className="sr-only"
                          />
                          <div className={`w-4.5 h-4.5 rounded border flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-primary border-primary'
                              : 'border-primary/20 bg-primary/5 hover:border-primary/40'
                          }`}>
                            {isChecked && <Check className="h-3 w-3 text-black stroke-[3px]" />}
                          </div>
                          <span className={`text-[11px] transition-colors ${
                            isChecked ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                          }`}>
                            {t}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Dynamic Goals */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Project Goals</label>
                    <button
                      type="button"
                      onClick={addGoalField}
                      className="text-[10px] text-primary-light hover:text-white flex items-center gap-1 font-mono cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" /> Add Goal
                    </button>
                  </div>
                  <div className="space-y-2">
                    {formGoals.map((goal, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={`Goal #${idx + 1}`}
                          value={goal}
                          onChange={(e) => handleGoalChange(idx, e.target.value)}
                          className="flex-grow bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-primary transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => removeGoalField(idx)}
                          className="p-2 text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                          title="Remove Field"
                        >
                          <MinusCircle className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic Results */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Project Outcomes / Results</label>
                    <button
                      type="button"
                      onClick={addResultField}
                      className="text-[10px] text-primary-light hover:text-white flex items-center gap-1 font-mono cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" /> Add Result
                    </button>
                  </div>
                  <div className="space-y-2">
                    {formResults.map((res, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={`Result #${idx + 1} (e.g. +135% Increase in reservations)`}
                          value={res}
                          onChange={(e) => handleResultChange(idx, e.target.value)}
                          className="flex-grow bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-primary transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => removeResultField(idx)}
                          className="p-2 text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                          title="Remove Field"
                        >
                          <MinusCircle className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 border-t border-zinc-900 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsProjectModalOpen(false)}
                    className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loadingAction !== null}
                    className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {loadingAction === 'submit-project' ? (
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                    ) : (
                      <Check className="h-4 w-4" />
                    )}
                    Save Project
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
