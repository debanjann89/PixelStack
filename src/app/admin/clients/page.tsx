'use client';

import { useState, useEffect } from 'react';
import { getClients, addClient, updateClient, deleteClient } from '@/app/actions';
import {
  Users,
  Plus,
  Edit,
  Trash2,
  X,
  AlertCircle,
  CheckCircle,
  Building,
  Mail,
  Phone,
  MapPin,
  FileText,
  DollarSign,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';

const PACKAGE_OPTIONS = [
  { label: 'Starter Package (₹15,000)', value: 'Starter Package', cost: 15000 },
  { label: 'Growth Package (₹20,000)', value: 'Growth Package', cost: 20000 },
  { label: 'Premium Package (₹30,000+)', value: 'Premium Package', cost: 30000 },
  { label: 'Bespoke Custom SLA', value: 'Bespoke Custom SLA', cost: 0 }
];

const CLIENT_STATUS_OPTIONS = [
  'Lead',
  'Negotiation',
  'Onboarding',
  'Project Started',
  'Reviewing Wireframes',
  'Development Stage',
  'SEO Audits',
  'Completed',
  'On Maintenance'
];

export default function ClientsManager() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<any>(null);
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Starter Package');
  const [projectCost, setProjectCost] = useState('10000');
  const [timeline, setTimeline] = useState('2 Weeks');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('Lead');

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadClients = async () => {
    setLoading(true);
    const data = await getClients();
    setClients(data);
    setLoading(false);
  };

  useEffect(() => {
    loadClients();
  }, []);

  const handleOpenAdd = () => {
    setEditingClient(null);
    setName('');
    setBusinessName('');
    setIndustry('');
    setPhone('');
    setEmail('');
    setProjectType('Website Development');
    setProjectDescription('');
    setSelectedPackage('Starter Package');
    setProjectCost('10000');
    setTimeline('2 Weeks');
    setAddress('');
    setNotes('');
    setStatus('Lead');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (client: any) => {
    setEditingClient(client);
    setName(client.name);
    setBusinessName(client.business_name || '');
    setIndustry(client.industry || '');
    setPhone(client.phone || '');
    setEmail(client.email || '');
    setProjectType(client.project_type || 'Website Development');
    setProjectDescription(client.project_description || '');
    setSelectedPackage(client.selected_package || 'Starter Package');
    setProjectCost(String(client.project_cost || '0'));
    setTimeline(client.timeline || '');
    setAddress(client.address || '');
    setNotes(client.notes || '');
    setStatus(client.status || 'Lead');
    setIsModalOpen(true);
  };

  const handlePackageChange = (val: string) => {
    setSelectedPackage(val);
    const pkg = PACKAGE_OPTIONS.find(p => p.value === val);
    if (pkg && pkg.cost > 0) {
      setProjectCost(String(pkg.cost));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name,
      business_name: businessName,
      industry,
      phone,
      email,
      project_type: projectType,
      project_description: projectDescription,
      selected_package: selectedPackage,
      project_cost: projectCost,
      timeline,
      address,
      notes,
      status
    };

    if (editingClient) {
      const res = await updateClient(editingClient.id, payload);
      if (res.success) {
        triggerToast('Client profile updated.');
        setIsModalOpen(false);
        loadClients();
      } else {
        triggerToast('Failed to update client profile.', 'error');
      }
    } else {
      const res = await addClient(payload);
      if (res.success) {
        triggerToast('Client profile created.');
        setIsModalOpen(false);
        loadClients();
      } else {
        triggerToast('Failed to create client profile.', 'error');
      }
    }
  };

  // Delete confirm modal states
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    id: string;
    title: string;
    description: string;
    isLoading: boolean;
  }>({
    isOpen: false,
    id: '',
    title: '',
    description: '',
    isLoading: false
  });

  const handleDelete = (id: string) => {
    setDeleteModal({
      isOpen: true,
      id,
      title: 'Delete Client Profile',
      description: 'Are you sure you want to delete this client profile? This will also remove all associated projects and invoices in the system.',
      isLoading: false
    });
  };

  const handleConfirmDelete = async () => {
    setDeleteModal(prev => ({ ...prev, isLoading: true }));
    const res = await deleteClient(deleteModal.id);
    if (res.success) {
      triggerToast('Client profile deleted.');
      setDeleteModal({ isOpen: false, id: '', title: '', description: '', isLoading: false });
      loadClients();
    } else {
      triggerToast('Failed to delete client profile.', 'error');
      setDeleteModal(prev => ({ ...prev, isLoading: false }));
    }
  };

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
          <h1 className="text-2xl font-bold text-white tracking-tight">Client Profiles & Accounts</h1>
          <p className="text-zinc-500 text-xs mt-1">
            Maintain accounts metadata, project contracts, and billing entities.
          </p>
        </div>
        
        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/10 cursor-pointer animate-fade-in"
        >
          <Plus className="h-4 w-4" /> Create Profile
        </button>
      </div>

      {/* Client List */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-zinc-500 font-mono text-xs gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
          <span>Loading client directory...</span>
        </div>
      ) : clients.length === 0 ? (
        <div className="glass-panel py-20 rounded-2xl border border-white/5 bg-zinc-900/20 text-center text-zinc-600 font-mono text-xs">
          No client profiles created yet. Click "Create Profile" to add one.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <motion.div
              layout
              key={client.id}
              className="glass-panel rounded-2xl border border-white/5 bg-zinc-900/10 hover:bg-zinc-900/30 transition-all flex flex-col justify-between overflow-hidden relative"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-white/5 space-y-2">
                <div className="flex justify-between items-start">
                  <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                    client.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : client.status === 'Lead'
                      ? 'bg-zinc-800 text-zinc-400 border border-white/5'
                      : 'bg-primary/10 text-primary-light border border-primary/20'
                  }`}>
                    {client.status}
                  </span>
                  
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleOpenEdit(client)}
                      className="p-1 rounded text-zinc-500 hover:text-white transition-colors cursor-pointer hover:bg-white/5"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="p-1 rounded text-zinc-500 hover:text-red-400 transition-colors cursor-pointer hover:bg-red-500/5"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">{client.name}</h3>
                  {client.business_name && (
                    <p className="text-zinc-400 text-xs font-semibold flex items-center gap-1.5 mt-0.5">
                      <Building className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                      {client.business_name} <span className="text-[10px] text-zinc-600">({client.industry || 'Business'})</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3.5 flex-1">
                {/* Meta details */}
                <div className="space-y-1.5 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
                    <span className="truncate">{client.email || 'No email logged'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
                    <span>{client.phone || 'No phone logged'}</span>
                  </div>
                  {client.address && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
                      <span className="truncate">{client.address}</span>
                    </div>
                  )}
                </div>

                {/* Project Specs */}
                <div className="bg-zinc-950/40 border border-white/5 rounded-xl p-3 space-y-2">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold text-zinc-500">
                    <span>Selected Package</span>
                    <span>Cost Estimate</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold text-white">
                    <span className="text-primary-light font-black">{client.selected_package || 'Custom'}</span>
                    <span className="font-mono text-white">₹{Number(client.project_cost).toLocaleString()}</span>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-400 font-medium">
                    <span>Timeline: {client.timeline || 'TBD'}</span>
                    <span className="text-[9px] text-zinc-500 truncate max-w-[120px]">{client.project_type}</span>
                  </div>
                </div>

                {/* Notes */}
                {client.notes && (
                  <div className="text-[11px] text-zinc-500 italic bg-white/5 border border-white/5 rounded-lg p-2 max-h-[60px] overflow-y-auto">
                    "{client.notes}"
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Client Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-xl glass-panel bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-6 z-10 text-left overflow-y-auto max-h-[90vh]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {editingClient ? 'Update Client Profile' : 'Create Client Profile'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Client Contact Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Debanjan Amin"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Business / Company Name</label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. D.A.B Digitals"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Industry Sector</label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="e.g. Legal, SaaS"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. client@agency.com"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 89181 86998"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Project Classification</label>
                  <input
                    type="text"
                    required
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    placeholder="e.g. Website Development"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Design Timeline</label>
                  <input
                    type="text"
                    required
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="e.g. 2-3 Weeks"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Service Package</label>
                  <div className="relative">
                    <select
                      value={selectedPackage}
                      onChange={(e) => handlePackageChange(e.target.value)}
                      className="w-full appearance-none px-3 py-2 pr-8 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 cursor-pointer"
                    >
                      {PACKAGE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-zinc-950">{opt.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Contract Cost (₹)</label>
                  <input
                    type="number"
                    required
                    value={projectCost}
                    onChange={(e) => setProjectCost(e.target.value)}
                    placeholder="15000"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Account Status</label>
                  <div className="relative">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full appearance-none px-3 py-2 pr-8 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 cursor-pointer"
                    >
                      {CLIENT_STATUS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-zinc-950">{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Billing Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. 12 Corporate Road, Kolkata"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Project Brief Description</label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Summarize the client goals, competitors, or specific page counts..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 resize-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Internal Account Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Record credentials logs, developer tasks, or onboarding notes..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg bg-zinc-950/60 hover:bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold tracking-wide uppercase transition-all shadow-md shadow-primary/10 cursor-pointer"
                >
                  Save Profile
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
