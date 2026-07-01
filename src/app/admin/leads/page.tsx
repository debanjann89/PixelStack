'use client';

import { useState, useEffect } from 'react';
import {
  getDashboardData,
  addLead,
  updateLead,
  deleteLead,
  deleteSubmission,
  deleteConsultation
} from '@/app/actions';
import {
  Users,
  MessageSquare,
  Calendar,
  Plus,
  Edit,
  Trash2,
  X,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Loader2,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';

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

export default function LeadsManager() {
  const [activeTab, setActiveTab] = useState<'leads' | 'messages' | 'consultations'>('leads');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Form states for Lead creation/editing
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<any>(null);
  const [leadName, setLeadName] = useState('');
  const [leadBusiness, setLeadBusiness] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadProjectType, setLeadProjectType] = useState('');
  const [leadBudgetRange, setLeadBudgetRange] = useState('₹50,000 - ₹80,000');
  const [leadStatus, setLeadStatus] = useState<'new' | 'contacted' | 'proposal' | 'won' | 'lost'>('new');
  const [leadNotes, setLeadNotes] = useState('');

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadData = async () => {
    setLoading(true);
    const dashboardData = await getDashboardData();
    setData(dashboardData);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOpenAddLead = () => {
    setEditingLead(null);
    setLeadName('');
    setLeadBusiness('');
    setLeadPhone('');
    setLeadEmail('');
    setLeadProjectType('');
    setLeadBudgetRange('₹50,000 - ₹80,000');
    setLeadStatus('new');
    setLeadNotes('');
    setIsLeadModalOpen(true);
  };

  const handleOpenEditLead = (lead: any) => {
    setEditingLead(lead);
    setLeadName(lead.leadName);
    setLeadBusiness(lead.businessName);
    setLeadPhone(lead.phone);
    setLeadEmail(lead.email);
    setLeadProjectType(lead.projectType);
    setLeadBudgetRange(lead.budgetRange);
    setLeadStatus(lead.status);
    setLeadNotes(lead.notes);
    setIsLeadModalOpen(true);
  };

  const handleSaveLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      leadName,
      businessName: leadBusiness,
      phone: leadPhone,
      email: leadEmail,
      projectType: leadProjectType,
      budgetRange: leadBudgetRange,
      status: leadStatus,
      notes: leadNotes
    };

    if (editingLead) {
      const res = await updateLead(editingLead.id, payload);
      if (res.success) {
        triggerToast('Lead updated successfully.');
        setIsLeadModalOpen(false);
        loadData();
      } else {
        triggerToast('Failed to update lead.', 'error');
      }
    } else {
      const res = await addLead(payload);
      if (res.success) {
        triggerToast('Lead added successfully.');
        setIsLeadModalOpen(false);
        loadData();
      } else {
        triggerToast('Failed to add lead.', 'error');
      }
    }
  };

  // Delete confirm modal states
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    type: 'lead' | 'submission' | 'consultation' | null;
    id: string;
    title: string;
    description: string;
    isLoading: boolean;
  }>({
    isOpen: false,
    type: null,
    id: '',
    title: '',
    description: '',
    isLoading: false
  });

  const handleDeleteLead = (id: string) => {
    setDeleteModal({
      isOpen: true,
      type: 'lead',
      id,
      title: 'Delete Lead Profile',
      description: 'Are you sure you want to delete this lead? This action is permanent and cannot be undone.',
      isLoading: false
    });
  };

  const handleDeleteSubmission = (id: string) => {
    setDeleteModal({
      isOpen: true,
      type: 'submission',
      id,
      title: 'Delete Contact Message',
      description: 'Are you sure you want to delete this message submission? This action is permanent.',
      isLoading: false
    });
  };

  const handleDeleteConsultation = (id: string) => {
    setDeleteModal({
      isOpen: true,
      type: 'consultation',
      id,
      title: 'Delete Consultation',
      description: 'Are you sure you want to delete this consultation scheduling? This action is permanent.',
      isLoading: false
    });
  };

  const handleConfirmDelete = async () => {
    setDeleteModal(prev => ({ ...prev, isLoading: true }));
    let success = false;
    let msg = '';
    
    if (deleteModal.type === 'lead') {
      const res = await deleteLead(deleteModal.id);
      success = res.success;
      msg = success ? 'Lead deleted successfully.' : 'Failed to delete lead.';
    } else if (deleteModal.type === 'submission') {
      const res = await deleteSubmission(deleteModal.id);
      success = res.success;
      msg = success ? 'Message deleted successfully.' : 'Failed to delete message.';
    } else if (deleteModal.type === 'consultation') {
      const res = await deleteConsultation(deleteModal.id);
      success = res.success;
      msg = success ? 'Consultation deleted successfully.' : 'Failed to delete consultation.';
    }
    
    if (success) {
      triggerToast(msg, 'success');
      setDeleteModal({ isOpen: false, type: null, id: '', title: '', description: '', isLoading: false });
      loadData();
    } else {
      triggerToast(msg, 'error');
      setDeleteModal(prev => ({ ...prev, isLoading: false }));
    }
  };

  if (loading && !data) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-zinc-500 font-mono text-xs gap-3">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
        <span>Retrieving pipeline records...</span>
      </div>
    );
  }

  const leadsList = data?.leads || [];
  const submissionsList = data?.submissions || [];
  const consultationsList = data?.consultations || [];

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-4 right-4 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl backdrop-blur-xl bg-zinc-900 border-white/10"
          >
            {toast.type === 'success' ? (
              <CheckCircle className="h-4 w-4 text-emerald-400" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-400" />
            )}
            <span className="text-xs font-semibold text-white">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Leads & Inquiries Pipeline</h1>
          <p className="text-zinc-500 text-xs mt-1">
            Capture, qualify, and track your incoming agency client flow.
          </p>
        </div>
        
        {activeTab === 'leads' && (
          <button
            onClick={handleOpenAddLead}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/10 cursor-pointer"
          >
            <Plus className="h-4 w-4" /> Add Lead
          </button>
        )}
      </div>

      {/* Navigation Toolbar */}
      <div className="flex border-b border-white/5 pb-4 gap-2">
        {[
          { key: 'leads', label: 'Lead Pipeline', icon: Users, count: leadsList.length },
          { key: 'messages', label: 'Contact Messages', icon: MessageSquare, count: submissionsList.length },
          { key: 'consultations', label: 'Consultations', icon: Calendar, count: consultationsList.length }
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white text-zinc-950 font-black'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                isSelected ? 'bg-zinc-200 text-zinc-950' : 'bg-white/10 text-zinc-400'
              }`}>{tab.count}</span>
            </button>
          );
        })}
      </div>

      {/* Main Table Area */}
      <div className="glass-panel rounded-2xl border border-white/5 bg-zinc-900/20 overflow-hidden">
        {activeTab === 'leads' && (
          <div className="overflow-x-auto">
            {leadsList.length === 0 ? (
              <div className="py-20 text-center text-zinc-600 font-mono text-xs">
                No pipeline leads logged.
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-950/40 text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                    <th className="p-4">Contact Info</th>
                    <th className="p-4">Business Details</th>
                    <th className="p-4">Project Focus</th>
                    <th className="p-4">Budget Range</th>
                    <th className="p-4">Pipeline Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-zinc-300">
                  {leadsList.map((lead: any) => (
                    <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4">
                        <p className="font-bold text-white text-sm">{lead.leadName}</p>
                        <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{lead.email || 'No Email'} • {lead.phone || 'No Phone'}</p>
                      </td>
                      <td className="p-4 text-zinc-400">{lead.businessName || 'Individual'}</td>
                      <td className="p-4 text-zinc-400">{lead.projectType || 'Not Specified'}</td>
                      <td className="p-4 font-mono font-semibold">{lead.budgetRange}</td>
                      <td className="p-4">
                        <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                          lead.status === 'won'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : lead.status === 'lost'
                            ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                            : lead.status === 'proposal'
                            ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                            : 'bg-primary/10 text-primary-light border border-primary/20'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEditLead(lead)}
                            className="p-1.5 rounded-lg bg-zinc-950/60 hover:bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                          >
                            <Edit className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="p-1.5 rounded-lg bg-zinc-950/60 hover:bg-red-500/10 border border-white/5 text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="overflow-x-auto">
            {submissionsList.length === 0 ? (
              <div className="py-20 text-center text-zinc-600 font-mono text-xs">
                No contact form message submissions recorded.
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-950/40 text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                    <th className="p-4">From</th>
                    <th className="p-4">Context</th>
                    <th className="p-4">Message Submission</th>
                    <th className="p-4">Date Capture</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-zinc-300">
                  {submissionsList.map((sub: any) => (
                    <tr key={sub.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4">
                        <p className="font-bold text-white text-sm">{sub.name}</p>
                        <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{sub.email} • {sub.phone}</p>
                      </td>
                      <td className="p-4">
                        <p className="text-white font-semibold">{sub.businessName || 'Individual'}</p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">{sub.projectType} • {sub.budgetRange}</p>
                      </td>
                      <td className="p-4 max-w-xs truncate text-zinc-400 italic" title={sub.message}>
                        "{sub.message}"
                      </td>
                      <td className="p-4 text-zinc-500 font-mono text-[10px]">
                        {new Date(sub.createdAt).toLocaleString()}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDeleteSubmission(sub.id)}
                          className="p-1.5 rounded-lg bg-zinc-950/60 hover:bg-red-500/10 border border-white/5 text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === 'consultations' && (
          <div className="overflow-x-auto">
            {consultationsList.length === 0 ? (
              <div className="py-20 text-center text-zinc-600 font-mono text-xs">
                No consultations bookings scheduled.
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-950/40 text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                    <th className="p-4">Client Name</th>
                    <th className="p-4">Scheduled Date</th>
                    <th className="p-4">Project Focus</th>
                    <th className="p-4">Submission Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-zinc-300">
                  {consultationsList.map((cons: any) => (
                    <tr key={cons.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4">
                        <p className="font-bold text-white text-sm">{cons.clientName}</p>
                        <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{cons.email} • {cons.phone}</p>
                      </td>
                      <td className="p-4 font-bold text-primary-light font-mono">{cons.date}</td>
                      <td className="p-4 text-zinc-400">{cons.projectType}</td>
                      <td className="p-4 text-zinc-500 font-mono text-[10px]">
                        {new Date(cons.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDeleteConsultation(cons.id)}
                          className="p-1.5 rounded-lg bg-zinc-950/60 hover:bg-red-500/10 border border-white/5 text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {/* Lead Add/Edit Modal */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsLeadModalOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-lg glass-panel bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-6 z-10 text-left overflow-y-auto max-h-[90vh]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {editingLead ? 'Edit Lead Details' : 'Create New Lead'}
              </h3>
              <button
                onClick={() => setIsLeadModalOpen(false)}
                className="p-1 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <form onSubmit={handleSaveLead} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Lead Name</label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="e.g. Debanjan Amin"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Business Name</label>
                  <input
                    type="text"
                    value={leadBusiness}
                    onChange={(e) => setLeadBusiness(e.target.value)}
                    placeholder="e.g. D.A.B Digitals"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="e.g. client@gmail.com"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="e.g. +91 89181 86998"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Project Focus</label>
                  <input
                    type="text"
                    required
                    value={leadProjectType}
                    onChange={(e) => setLeadProjectType(e.target.value)}
                    placeholder="e.g. Next.js 15 Web Portal"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Budget Target</label>
                  <div className="relative">
                    <select
                      value={leadBudgetRange}
                      onChange={(e) => setLeadBudgetRange(e.target.value)}
                      className="w-full appearance-none px-3 py-2 pr-8 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 cursor-pointer"
                    >
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-zinc-950">{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Pipeline status</label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {LEAD_STATUS_OPTIONS.map((opt) => {
                    const isSelected = leadStatus === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setLeadStatus(opt.value)}
                        className={`py-2 px-1 rounded-lg text-[9px] font-bold tracking-wider uppercase border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-white border-primary/20 shadow-lg shadow-primary/10'
                            : 'bg-zinc-950/40 text-zinc-400 border-white/5 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Internal Notes</label>
                <textarea
                  value={leadNotes}
                  onChange={(e) => setLeadNotes(e.target.value)}
                  placeholder="Insert follow-up records or client notes here..."
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsLeadModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg bg-zinc-950/60 hover:bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold tracking-wide uppercase transition-all shadow-md shadow-primary/10 cursor-pointer"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal(prev => ({ ...prev, isOpen: false }))}
        onConfirm={handleConfirmDelete}
        title={deleteModal.title}
        description={deleteModal.description}
        isLoading={deleteModal.isLoading}
      />
    </div>
  );
}
