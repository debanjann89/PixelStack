'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Film,
  Sparkles,
  Play,
  CheckCircle2,
  X,
  ExternalLink,
  Loader2,
  Wand2
} from 'lucide-react';
import { REELS_DATA, ReelItem } from '@/data/reels';
import { getReels, addReel, updateReel, deleteReel, fetchInstagramReelMetadata } from '@/app/actions';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';

const CATEGORIES = [
  'Web Design',
  'Next.js Speed',
  'SEO Strategy',
  'Client Redesign',
  'UI/UX Design',
  'E-Commerce',
  'Case Study'
];

export default function AdminReelsPage() {
  const [reels, setReels] = useState<ReelItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Quick Add Header Bar state
  const [quickUrl, setQuickUrl] = useState('');
  const [isQuickFetching, setIsQuickFetching] = useState(false);

  // Form Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFetchingMeta, setIsFetchingMeta] = useState(false);
  const [editingReel, setEditingReel] = useState<ReelItem | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Design');
  const [description, setDescription] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [viewsBadge, setViewsBadge] = useState('');
  const [duration, setDuration] = useState('0:45');
  const [topicsText, setTopicsText] = useState('');
  const [embedPreviewUrl, setEmbedPreviewUrl] = useState('');

  // Delete modal
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: '',
    title: '',
    isLoading: false
  });

  // Load Reels
  const loadReels = async () => {
    setLoading(true);
    try {
      const local = localStorage.getItem('dnb_custom_reels');
      if (local) {
        try {
          const parsed = JSON.parse(local);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setReels(parsed);
            setLoading(false);
            return;
          }
        } catch {}
      }

      const data = await getReels();
      setReels(data || REELS_DATA);
    } catch {
      setReels(REELS_DATA);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReels();
  }, []);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Auto-Fetch Details from URL
  const handleAutoFetchDetails = async (targetUrl?: string) => {
    const urlToFetch = targetUrl || instagramUrl;
    if (!urlToFetch.trim()) {
      showToast('Please enter an Instagram Reel URL first.', 'error');
      return;
    }

    setIsFetchingMeta(true);
    try {
      const res = await fetchInstagramReelMetadata(urlToFetch);
      if (res.success && res.cleanUrl) {
        setInstagramUrl(res.cleanUrl);
        setTitle(res.title || '');
        setCategory(res.category || 'Web Design');
        setDescription(res.description || '');
        setViewsBadge(res.viewsBadge || 'Client Showcase');
        setTopicsText(res.topics ? res.topics.join(', ') : '');
        setEmbedPreviewUrl(res.embedUrl || '');
        showToast('✨ Reel details & tags auto-fetched successfully!');
      } else {
        showToast(res.message || 'Could not fetch metadata. Please enter details manually.', 'error');
      }
    } catch {
      showToast('Auto-fetch failed. Please enter details manually.', 'error');
    } finally {
      setIsFetchingMeta(false);
    }
  };

  // Quick Add from Top Bar
  const handleQuickAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickUrl.trim()) return;

    setIsQuickFetching(true);
    try {
      const res = await fetchInstagramReelMetadata(quickUrl.trim());
      if (res.success && res.cleanUrl) {
        setEditingReel(null);
        setInstagramUrl(res.cleanUrl);
        setTitle(res.title || '');
        setCategory(res.category || 'Web Design');
        setDescription(res.description || '');
        setViewsBadge(res.viewsBadge || 'Viral Breakdown');
        setTopicsText(res.topics ? res.topics.join(', ') : '');
        setEmbedPreviewUrl(res.embedUrl || '');
        setQuickUrl('');
        setIsModalOpen(true);
        showToast('✨ Reel analyzed! Review & click publish.');
      } else {
        // Still open modal so user can fill manually
        setEditingReel(null);
        setInstagramUrl(quickUrl.trim());
        setTitle('');
        setCategory('Web Design');
        setDescription('');
        setViewsBadge('Client Showcase');
        setTopicsText('Next.js, WebDesign');
        setEmbedPreviewUrl('');
        setQuickUrl('');
        setIsModalOpen(true);
        showToast('Please confirm the title and details.', 'error');
      }
    } catch {
      showToast('Error analyzing reel URL.', 'error');
    } finally {
      setIsQuickFetching(false);
    }
  };

  const handleOpenAddModal = () => {
    setEditingReel(null);
    setTitle('');
    setCategory('Web Design');
    setDescription('');
    setInstagramUrl('');
    setViewsBadge('Client Showcase');
    setDuration('0:45');
    setTopicsText('Next.js, WebDesign, Speed');
    setEmbedPreviewUrl('');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (reel: ReelItem) => {
    setEditingReel(reel);
    setTitle(reel.title);
    setCategory(reel.category);
    setDescription(reel.description);
    setInstagramUrl(reel.instagramUrl);
    setViewsBadge(reel.viewsBadge || '');
    setDuration(reel.duration || '0:45');
    setTopicsText(reel.topics ? reel.topics.join(', ') : '');
    
    // Extract embed URL if available
    const match = reel.instagramUrl.match(/(?:reel|p|tv)\/([A-Za-z0-9_-]+)/i);
    if (match && match[1]) {
      setEmbedPreviewUrl(`https://www.instagram.com/reel/${match[1]}/embed`);
    } else {
      setEmbedPreviewUrl('');
    }

    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !instagramUrl.trim()) {
      showToast('Title and Instagram URL are required.', 'error');
      return;
    }

    const topicsArray = topicsText
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter(Boolean);

    const reelPayload: ReelItem = {
      id: editingReel ? editingReel.id : `reel-${Date.now()}`,
      title: title.trim(),
      category,
      description: description.trim(),
      instagramUrl: instagramUrl.trim(),
      viewsBadge: viewsBadge.trim() || undefined,
      duration: duration.trim() || '0:45',
      topics: topicsArray.length > 0 ? topicsArray : ['Next.js', 'SEO']
    };

    let updatedList: ReelItem[];
    if (editingReel) {
      updatedList = reels.map((r) => (r.id === editingReel.id ? reelPayload : r));
      await updateReel(editingReel.id, reelPayload);
      showToast('Instagram Reel updated successfully!');
    } else {
      updatedList = [reelPayload, ...reels];
      await addReel(reelPayload);
      showToast('New Instagram Reel added to showcase!');
    }

    setReels(updatedList);
    localStorage.setItem('dnb_custom_reels', JSON.stringify(updatedList));
    setIsModalOpen(false);
  };

  const handleDeleteConfirm = async () => {
    setDeleteModal((prev) => ({ ...prev, isLoading: true }));
    try {
      await deleteReel(deleteModal.id);
      const updated = reels.filter((r) => r.id !== deleteModal.id);
      setReels(updated);
      localStorage.setItem('dnb_custom_reels', JSON.stringify(updated));
      showToast('Reel removed from showcase.');
    } catch {
      showToast('Failed to delete reel.', 'error');
    } finally {
      setDeleteModal({ isOpen: false, id: '', title: '', isLoading: false });
    }
  };

  const filteredReels = reels.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-8 right-8 z-50 px-5 py-3 rounded-xl border shadow-2xl flex items-center gap-2 text-sm font-medium ${
              toast.type === 'success'
                ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-300'
                : 'bg-red-950/90 border-red-500/40 text-red-300'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Homepage Showcase Manager
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
            <Film className="w-7 h-7 text-primary" />
            Instagram Reels Manager
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm mt-1">
            Paste any Instagram Reel link and our AI auto-fetches the details, hashtags, and category for your homepage showcase.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-primary/20 cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" /> Add Manually
        </button>
      </div>

      {/* 🚀 1-Click Auto-Fetch Link Bar */}
      <div className="bg-zinc-950 border border-primary/30 rounded-2xl p-4 md:p-6 mb-8 shadow-xl shadow-primary/5">
        <div className="flex items-center gap-2 mb-2">
          <Wand2 className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Quick Auto-Fetch from Instagram
          </span>
        </div>
        <form onSubmit={handleQuickAdd} className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            value={quickUrl}
            onChange={(e) => setQuickUrl(e.target.value)}
            placeholder="Paste Reel URL (e.g. https://www.instagram.com/reel/C8XYZ123/)..."
            className="flex-1 px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            disabled={isQuickFetching || !quickUrl.trim()}
            className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark disabled:opacity-50 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 cursor-pointer shadow-lg shadow-primary/20"
          >
            {isQuickFetching ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Analyzing Reel...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-black" />
                Auto-Fetch & Add
              </>
            )}
          </button>
        </form>
      </div>

      {/* Search & Active Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-3 relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, category, or description..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs text-zinc-400 font-medium">Active Reels</span>
          <span className="text-sm font-bold text-primary">{reels.length} Items</span>
        </div>
      </div>

      {/* Reels Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-24 text-zinc-500 text-sm">
          <div className="w-8 h-8 border-2 border-zinc-800 border-t-primary rounded-full animate-spin mb-4" />
        </div>
      ) : filteredReels.length === 0 ? (
        <div className="text-center py-24 border border-zinc-800 rounded-2xl bg-zinc-950/40">
          <Film className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
          <h3 className="text-white font-bold text-base mb-1">No Reels Found</h3>
          <p className="text-zinc-500 text-xs mb-4">Paste an Instagram Reel URL above to auto-fetch your first reel.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReels.map((reel) => (
            <div
              key={reel.id}
              className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-between hover:border-primary/40 transition-all group"
            >
              <div>
                {/* Top Tags */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    {reel.category}
                  </span>
                  {reel.viewsBadge && (
                    <span className="text-[10px] font-semibold text-zinc-400 flex items-center gap-1 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3 text-primary" />
                      {reel.viewsBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                  {reel.title}
                </h3>

                <p className="text-zinc-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                  {reel.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {reel.topics &&
                    reel.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded"
                      >
                        #{t}
                      </span>
                    ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-2">
                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-400 hover:text-primary flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> View on Instagram
                </a>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleOpenEditModal(reel)}
                    className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
                    title="Edit Reel"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() =>
                      setDeleteModal({
                        isOpen: true,
                        id: reel.id,
                        title: reel.title,
                        isLoading: false
                      })
                    }
                    className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-red-400 hover:border-red-500/40 flex items-center justify-center transition-colors cursor-pointer"
                    title="Delete Reel"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal with Auto-Fetch */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Film className="w-5 h-5 text-primary" />
                  {editingReel ? 'Edit Instagram Reel' : 'Add New Instagram Reel'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* URL Input with Inline Auto-Fetch Button */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Instagram Reel URL *
                    </label>
                    <button
                      type="button"
                      onClick={() => handleAutoFetchDetails()}
                      disabled={isFetchingMeta || !instagramUrl.trim()}
                      className="text-xs text-primary hover:text-primary-light flex items-center gap-1 font-semibold disabled:opacity-40 cursor-pointer"
                    >
                      {isFetchingMeta ? (
                        <>
                          <Loader2 className="w-3 h-3 animate-spin" /> Fetching...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3 h-3" /> Auto-Fetch Details
                        </>
                      )}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="url"
                      required
                      value={instagramUrl}
                      onChange={(e) => setInstagramUrl(e.target.value)}
                      placeholder="https://www.instagram.com/reel/C8XYZ123/..."
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50"
                    />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Reel Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Transforming a Slow WordPress Site into Next.js"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-primary/50"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Views / Spotlight Badge
                    </label>
                    <input
                      type="text"
                      value={viewsBadge}
                      onChange={(e) => setViewsBadge(e.target.value)}
                      placeholder="e.g. Client Showcase, Viral"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Short Description
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What value or client result does this reel showcase?"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Topics (Comma-separated hashtags)
                  </label>
                  <input
                    type="text"
                    value={topicsText}
                    onChange={(e) => setTopicsText(e.target.value)}
                    placeholder="Next.js 15, Speed Test, Healthcare"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50"
                  />
                </div>

                {/* Optional Live Embed Preview if available */}
                {embedPreviewUrl && (
                  <div className="pt-2">
                    <span className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Live Instagram Embed Preview:
                    </span>
                    <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black flex justify-center py-2">
                      <iframe
                        src={embedPreviewUrl}
                        className="w-[280px] h-[340px] border-0 rounded-lg"
                        scrolling="no"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-900">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    {editingReel ? 'Save Changes' : 'Publish to Showcase'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, id: '', title: '', isLoading: false })}
        onConfirm={handleDeleteConfirm}
        title="Delete Reel from Showcase?"
        description={`Are you sure you want to delete "${deleteModal.title}"? This will remove it from the homepage.`}
        isLoading={deleteModal.isLoading}
      />
    </div>
  );
}
