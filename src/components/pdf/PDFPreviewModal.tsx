'use client';

import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  { ssr: false }
);

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: any;
  fileName: string;
}

export default function PDFPreviewModal({ isOpen, onClose, document: pdfDocument, fileName }: PDFPreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl h-[85vh] glass-panel rounded-2xl flex flex-col z-10 overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-zinc-950/80">
          <div>
            <h3 className="text-sm font-bold text-white">Document Preview</h3>
            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{fileName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Viewer */}
        <div className="flex-1 bg-zinc-900 relative flex items-center justify-center min-h-[300px]">
          <PDFViewer className="w-full h-full border-none">
            {pdfDocument}
          </PDFViewer>
        </div>
      </motion.div>
    </div>
  );
}
