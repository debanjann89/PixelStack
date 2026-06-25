'use client';

import { useState, useEffect } from 'react';
import {
  getClientProjects,
  getClients,
  addClientProject,
  updateClientProject,
  deleteClientProject
} from '@/app/actions';
import {
  Briefcase,
  Plus,
  Edit,
  Trash2,
  X,
  AlertCircle,
  CheckCircle,
  Clock,
  User,
  ExternalLink,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';

const PROJECT_STATUS_OPTIONS = [
  'Project Started',
  'Design & Wireframing',
  'Development Stage',
  'SEO Audit',
  'Client Testing',
  'Completed',
  'On Hold'
];

export default function ProjectsManager() {
  const [projects, setProjects] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [clientId, setClientId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Starter Package');
  const [cost, setCost] = useState('10000');
  const [timeline, setTimeline] = useState('2 Weeks');
  const [status, setStatus] = useState('Project Started');

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadData = async () => {
    setLoading(true);
    const projData = await getClientProjects();
    const clientData = await getClients();
    setProjects(projData);
    setClients(clientData);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOpenAdd = () => {
    if (clients.length === 0) {
      triggerToast('Please create a client profile first before starting a project.', 'error');
      return;
    }
    setEditingProject(null);
    setClientId(clients[0].id);
    setTitle('');
    setDescription('');
    setSelectedPackage('Starter Package');
    setCost('10000');
    setTimeline('2 Weeks');
    setStatus('Project Started');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (project: any) => {
    setEditingProject(project);
    setClientId(project.client_id);
    setTitle(project.title);
    setDescription(project.description || '');
    setSelectedPackage(project.selected_package || 'Starter Package');
    setCost(String(project.cost || '0'));
    setTimeline(project.timeline || '');
    setStatus(project.status || 'Project Started');
    setIsModalOpen(true);
  };

  const handleClientSelect = (id: string) => {
    setClientId(id);
    // Auto-populate default package / cost from client profile
    const client = clients.find(c => c.id === id);
    if (client) {
      setSelectedPackage(client.selected_package || 'Starter Package');
      setCost(String(client.project_cost || '0'));
      setTimeline(client.timeline || '2 Weeks');
      setTitle(`${client.business_name || client.name} Redesign`);
      setDescription(client.project_description || '');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      client_id: clientId,
      title,
      description,
      selected_package: selectedPackage,
      cost,
      timeline,
      status
    };

    if (editingProject) {
      const res = await updateClientProject(editingProject.id, payload);
      if (res.success) {
        triggerToast('Project updated successfully.');
        setIsModalOpen(false);
        loadData();
      } else {
        triggerToast('Failed to update project.', 'error');
      }
    } else {
      const res = await addClientProject(payload);
      if (res.success) {
        triggerToast('Project started successfully.');
        setIsModalOpen(false);
        loadData();
      } else {
        triggerToast('Failed to start project.', 'error');
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
      title: 'Delete Client Project',
      description: 'Are you sure you want to delete this client project? This action is permanent and cannot be undone.',
      isLoading: false
    });
  };

  const handleConfirmDelete = async () => {
    setDeleteModal(prev => ({ ...prev, isLoading: true }));
    const res = await deleteClientProject(deleteModal.id);
    if (res.success) {
      triggerToast('Project deleted successfully.');
      setDeleteModal({ isOpen: false, id: '', title: '', description: '', isLoading: false });
      loadData();
    } else {
      triggerToast('Failed to delete project.', 'error');
      setDeleteModal(prev => ({ ...prev, isLoading: false }));
    }
  };

  const getStatusPercentage = (statusStr: string) => {
    switch (statusStr) {
      case 'Project Started': return 10;
      case 'Design & Wireframing': return 30;
      case 'Development Stage': return 60;
      case 'SEO Audit': return 80;
      case 'Client Testing': return 90;
      case 'Completed': return 100;
      default: return 0;
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
          <h1 className="text-2xl font-bold text-white tracking-tight">Project Tracking</h1>
          <p className="text-zinc-500 text-xs mt-1">
            Monitor deliverables timelines, developer completion ratios, and deployment status.
          </p>
        </div>
        
        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/10 cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Start Project
        </button>
      </div>

      {/* Projects List */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-zinc-500 font-mono text-xs gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
          <span>Loading projects log...</span>
        </div>
      ) : projects.length === 0 ? (
        <div className="glass-panel py-20 rounded-2xl border border-white/5 bg-zinc-900/20 text-center text-zinc-600 font-mono text-xs">
          No client projects currently tracked. Click "Start Project" to launch one.
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => {
            const pct = getStatusPercentage(project.status);
            return (
              <motion.div
                layout
                key={project.id}
                className="glass-panel rounded-2xl border border-white/5 bg-zinc-900/10 hover:bg-zinc-900/20 p-5 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative"
              >
                {/* Details Section */}
                <div className="space-y-2.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] bg-primary/10 border border-primary/20 text-primary-light font-bold px-2 py-0.5 rounded tracking-wide uppercase font-mono">
                      {project.selected_package}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-semibold font-mono flex items-center gap-1">
                      <Clock className="h-3 w-3 shrink-0" /> Timeline: {project.timeline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight truncate">{project.title}</h3>
                    <p className="text-zinc-400 text-xs font-semibold flex items-center gap-1.5 mt-0.5 truncate">
                      <User className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                      Client: {project.clients?.name} {project.clients?.business_name && `(${project.clients.business_name})`}
                    </p>
                  </div>

                  {project.description && (
                    <p className="text-zinc-500 text-xs truncate max-w-xl">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Status Progress Section */}
                <div className="w-full md:w-64 space-y-2 shrink-0">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-white">{project.status}</span>
                    <span className="text-primary-light font-mono">{pct}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-zinc-500 font-semibold">
                    <span>Valued: ₹{Number(project.cost).toLocaleString()}</span>
                    <span>Started: {new Date(project.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 shrink-0 self-end md:self-center">
                  <button
                    onClick={() => handleOpenEdit(project)}
                    className="p-2 rounded-lg bg-zinc-950/60 hover:bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 rounded-lg bg-zinc-950/60 hover:bg-red-500/10 border border-white/5 text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-lg glass-panel bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-6 z-10 text-left overflow-y-auto max-h-[90vh]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {editingProject ? 'Modify Project Deliverables' : 'Start Client Project'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              {!editingProject && (
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Associate Client Profile</label>
                  <div className="relative">
                    <select
                      value={clientId}
                      onChange={(e) => handleClientSelect(e.target.value)}
                      className="w-full appearance-none px-3 py-2 pr-8 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 cursor-pointer"
                    >
                      {clients.map((c) => (
                        <option key={c.id} value={c.id} className="bg-zinc-950">
                          {c.name} {c.business_name ? `(${c.business_name})` : ''}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Project Working Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Acme Website Redesign"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Service Package & Level</label>
                <div className="relative">
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full appearance-none px-3 py-2 pr-8 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 cursor-pointer"
                  >
                    <option value="Starter Package" className="bg-zinc-950">Starter Package</option>
                    <option value="Growth Package" className="bg-zinc-950">Growth Package</option>
                    <option value="Premium Package" className="bg-zinc-950">Premium Package</option>
                    <option value="Bespoke Custom SLA" className="bg-zinc-950">Bespoke Custom SLA</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Timeline Duration</label>
                  <input
                    type="text"
                    required
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="e.g. 2 Weeks"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Budget Allocation (₹)</label>
                  <input
                    type="number"
                    required
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="15000"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Project Execution Status</label>
                <div className="relative">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full appearance-none px-3 py-2 pr-8 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 cursor-pointer"
                  >
                    {PROJECT_STATUS_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-zinc-950">{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Detailed Deliverables Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Build 10 page Next.js 15 app router web system with standard on-page SEO schema, contact submission, and fully responsive styling."
                  rows={4}
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
                  Save Project
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
