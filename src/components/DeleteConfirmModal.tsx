'use client';

import { Trash2, X, Loader2, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  isLoading?: boolean;
}

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  isLoading = false
}: DeleteConfirmModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={isLoading ? undefined : onClose}
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="relative w-full max-w-md glass-panel bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-6 z-10 text-center overflow-hidden"
          >
            {/* Upper Glow Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500/50 via-rose-600 to-red-500/50" />

            {/* Close Button */}
            {!isLoading && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            )}

            {/* Alert Icon */}
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>

            {/* Text Contents */}
            <h3 className="text-base font-bold text-white tracking-tight mb-2">{title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6 px-2">
              {description}
            </p>

            {/* Actions Buttons */}
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                disabled={isLoading}
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-lg bg-zinc-950/60 hover:bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isLoading}
                onClick={onConfirm}
                className="flex-1 py-2.5 px-4 rounded-lg bg-red-650 hover:bg-red-700 text-white text-xs font-bold tracking-wide uppercase transition-all shadow-lg shadow-red-900/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" /> Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-3.5 w-3.5" /> Confirm Delete
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
