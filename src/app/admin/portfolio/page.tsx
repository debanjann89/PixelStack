'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Search,
  FolderOpen,
  Edit2,
  Trash2,
  Image as ImageIcon,
  Video as VideoIcon,
  Globe,
  Loader2,
  Clock,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import {
  getPortfolioItems,
  addPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem
} from '@/app/actions';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';

const GRADIENTS = [
  { name: 'Amber Glow', value: 'from-amber-600/10 to-orange-700/20' },
  { name: 'Emerald Teal', value: 'from-emerald-600/10 to-teal-800/20' },
  { name: 'Mint Forest', value: 'from-emerald-500/10 to-teal-700/20' },
  { name: 'Primary Glow', value: 'from-primary/10 to-secondary/20' },
  { name: 'Teal Emerald', value: 'from-teal-600/10 to-emerald-800/20' },
  { name: 'Slate Neutrals', value: 'from-slate-700/10 to-slate-800/20' }
];

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Form Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  
  // Fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Businesses');
  const [overview, setOverview] = useState('');
  const [description, setDescription] = useState('');
  const [techText, setTechText] = useState('');
  const [goalsText, setGoalsText] = useState('');
  const [resultsText, setResultsText] = useState('');
  const [duration, setDuration] = useState('');
  const [bgGradient, setBgGradient] = useState(GRADIENTS[3].value);
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  
  // Delete modal state
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: '', title: '', isLoading: false });

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadData = async () => {
    setLoading(true);
    const data = await getPortfolioItems();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setTitle('');
    setCategory('Businesses');
    setOverview('');
    setDescription('');
    setTechText('');
    setGoalsText('');
    setResultsText('');
    setDuration('');
    setBgGradient(GRADIENTS[3].value);
    setImageUrl('');
    setVideoUrl('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: any) => {
    setEditingItem(item);
    setTitle(item.title);
    setCategory(item.category);
    setOverview(item.overview || '');
    setDescription(item.description || '');
    setTechText((item.tech || []).join(', '));
    setGoalsText((item.goals || []).join('\n'));
    setResultsText((item.results || []).join('\n'));
    setDuration(item.duration || '');
    setBgGradient(item.bg_gradient || GRADIENTS[3].value);
    setImageUrl(item.image_url || '');
    setVideoUrl(item.video_url || '');
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !category.trim()) {
      triggerToast('Title and Category are required.', 'error');
      return;
    }

    const payload = {
      title: title.trim(),
      category: category.trim(),
      overview: overview.trim(),
      description: description.trim(),
      tech: techText.split(',').map((t) => t.trim()).filter(Boolean),
      goals: goalsText.split('\n').map((g) => g.trim()).filter(Boolean),
      results: resultsText.split('\n').map((r) => r.trim()).filter(Boolean),
      duration: duration.trim(),
      bg_gradient: bgGradient,
      image_url: imageUrl.trim(),
      video_url: videoUrl.trim()
    };

    if (editingItem) {
      const res = await updatePortfolioItem(editingItem.id, payload);
      if (res.success) {
        triggerToast('Portfolio item updated.');
        setIsModalOpen(false);
        loadData();
      } else {
        triggerToast(res.message || 'Failed to update item.', 'error');
      }
    } else {
      const res = await addPortfolioItem(payload);
      if (res.success) {
        triggerToast('Portfolio item added.');
        setIsModalOpen(false);
        loadData();
      } else {
        triggerToast(res.message || 'Failed to create item.', 'error');
      }
    }
  };

  const handleOpenDelete = (item: any) => {
    setDeleteModal({
      isOpen: true,
      id: item.id,
      title: `Delete '${item.title}'?`,
      isLoading: false
    });
  };

  const handleDeleteConfirm = async () => {
    setDeleteModal((prev) => ({ ...prev, isLoading: true }));
    const res = await deletePortfolioItem(deleteModal.id);
    if (res.success) {
      triggerToast('Portfolio item deleted.');
      setDeleteModal({ isOpen: false, id: '', title: '', isLoading: false });
      loadData();
    } else {
      triggerToast(res.message || 'Failed to delete item.', 'error');
      setDeleteModal((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-6 right-6 z-50 px-4 py-3 rounded-xl border shadow-xl flex items-center gap-2.5 backdrop-blur-md ${
              toast.type === 'error'
                ? 'bg-red-950/80 border-red-500/25 text-red-200'
                : 'bg-emerald-950/80 border-emerald-500/25 text-emerald-200'
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${toast.type === 'error' ? 'bg-red-400' : 'bg-primary'}`} />
            <span className="text-xs font-medium tracking-wide">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Portfolio Showcase</h1>
          <p className="text-zinc-500 text-xs mt-1">
            Manage your agency portfolio items showcased on the public website.
          </p>
        </div>
        
        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/10 active:scale-[0.98] cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Add Portfolio Item
        </button>
      </div>

      {/* Search Toolbar */}
      <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search projects by title, category, or stack..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-950/60 border border-white/5 rounded-lg pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-primary/50"
          />
        </div>
      </div>

      {/* Showcase Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 text-zinc-500 font-mono text-xs">
          <Loader2 className="h-6 w-6 animate-spin text-primary mb-3" />
          Loading portfolio items...
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="glass-panel p-16 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center">
          <FolderOpen className="h-10 w-10 text-zinc-600 mb-4" />
          <h3 className="text-sm font-bold text-zinc-400">No Showcase Projects Found</h3>
          <p className="text-xs text-zinc-650 mt-1 max-w-sm">
            {search ? 'No items match your search term.' : 'Get started by creating your first agency portfolio item.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-xl overflow-hidden flex flex-col h-full border border-white/5 group hover:border-white/10"
            >
              {/* Media Thumbnail */}
              <div className="aspect-[16/10] relative bg-zinc-950 border-b border-white/5 overflow-hidden">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.bg_gradient} flex items-center justify-center p-6 text-center`}>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-1">
                      {item.category}
                    </span>
                  </div>
                )}
                
                {/* Icons indicators */}
                <div className="absolute top-3 right-3 flex gap-1.5">
                  {item.image_url && (
                    <span className="bg-black/60 border border-white/10 p-1.5 rounded-lg text-zinc-300" title="Has Photo">
                      <ImageIcon className="h-3 w-3" />
                    </span>
                  )}
                  {item.video_url && (
                    <span className="bg-black/60 border border-white/10 p-1.5 rounded-lg text-zinc-300" title="Has Video Demo">
                      <VideoIcon className="h-3 w-3" />
                    </span>
                  )}
                </div>
              </div>

              {/* Contents */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[9px] bg-primary/5 text-primary-light border border-primary/10 rounded px-2 py-0.5 font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2.5 truncate">{item.title}</h3>
                  <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {item.overview || 'No overview provided.'}
                  </p>

                  {/* Tech chips */}
                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-4">
                      {item.tech.slice(0, 3).map((t: string) => (
                        <span key={t} className="text-[9px] bg-zinc-950 border border-white/5 text-zinc-500 font-mono px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                      {item.tech.length > 3 && (
                        <span className="text-[9px] text-zinc-600 font-mono px-1">+{item.tech.length - 3} more</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Actions row */}
                <div className="flex gap-2.5 border-t border-white/5 mt-5 pt-4">
                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-300 hover:text-white text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <Edit2 className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => handleOpenDelete(item)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-red-950/20 hover:bg-red-900/30 border border-red-500/10 text-red-400 hover:text-red-300 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        title={deleteModal.title}
        description="Are you sure you want to delete this portfolio item? This action is permanent and it will be immediately removed from the public website showcase."
        onClose={() => setDeleteModal({ isOpen: false, id: '', title: '', isLoading: false })}
        onConfirm={handleDeleteConfirm}
        isLoading={deleteModal.isLoading}
      />

      {/* Add / Edit Slideover / Dialog Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl glass-panel bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8 z-10 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <h2 className="text-xl font-bold text-white mb-2">
                {editingItem ? 'Edit Portfolio Showcase' : 'Add Showcase Project'}
              </h2>
              <p className="text-xs text-zinc-500 mb-6">
                Fill in the details to construct a premium showcase template for potential clients to browse.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 text-left text-xs">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Project Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. The Riviera Bistro"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                    >
                      <option value="Businesses">Businesses</option>
                      <option value="Restaurants">Restaurants</option>
                      <option value="Law Firms">Law Firms</option>
                      <option value="Dental Clinics">Dental Clinics</option>
                      <option value="Hotels">Hotels</option>
                      <option value="Other">Other / Custom</option>
                    </select>
                  </div>
                </div>

                {/* Categories Fallback if Custom */}
                {category === 'Other' && (
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Custom Category Name</label>
                    <input
                      type="text"
                      placeholder="e.g. E-Commerce"
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                )}

                {/* Row 2: Overview & Desc */}
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Card Overview (One-line Hook)</label>
                  <input
                    type="text"
                    placeholder="e.g. A premium ordering & booking website designed for a fine dining restaurant group."
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Detailed Project Description</label>
                  <textarea
                    rows={3}
                    placeholder="Describe the client challenge, what was developed, and how it solves their issue..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                  />
                </div>

                {/* Row 3: Image and Video */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <ImageIcon className="h-3.5 w-3.5 text-zinc-400" /> Photo / Image URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/... or public image link"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <VideoIcon className="h-3.5 w-3.5 text-zinc-400" /> Video Demo URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://youtube.com/watch?v=... or direct mp4 url"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                </div>

                {/* Tech chip input */}
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Technologies (Comma-separated)</label>
                  <input
                    type="text"
                    placeholder="Next.js 15, Tailwind CSS, TypeScript, Server Actions"
                    value={techText}
                    onChange={(e) => setTechText(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                  />
                </div>

                {/* Row 4: Duration & Gradient */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Project Duration</label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Weeks"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Background Gradient Preset (Card Fallback)</label>
                    <select
                      value={bgGradient}
                      onChange={(e) => setBgGradient(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                    >
                      {GRADIENTS.map((grad) => (
                        <option key={grad.value} value={grad.value}>{grad.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Lists inputs: Goals & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Project Goals (One goal per line)</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Build trust through photography showcases.&#10;Reduce seat reservation friction."
                      value={goalsText}
                      onChange={(e) => setGoalsText(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Project Outcomes / Metrics (One result per line)</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. +135% Increase in online bookings.&#10;Lighthouse score 100/100."
                      value={resultsText}
                      onChange={(e) => setResultsText(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 justify-end pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="py-2.5 px-5 rounded-lg bg-zinc-950/60 hover:bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2.5 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold cursor-pointer"
                  >
                    {editingItem ? 'Save Changes' : 'Create Showcase'}
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
