'use client';

import { useState, useEffect } from 'react';
import {
  getClients,
  getInvoices,
  getDocumentHistory,
  logDocumentGeneration
} from '@/app/actions';
import {
  FileText,
  User,
  PlusCircle,
  Clock,
  Eye,
  CheckCircle,
  AlertCircle,
  BookOpen,
  FileCheck,
  Smile,
  Compass,
  Key,
  Layers,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFPreviewModal from '@/components/pdf/PDFPreviewModal';
import {
  BrochurePDF,
  ProposalPDF,
  ContractPDF,
  WelcomePDF,
  RequirementsPDF,
  InvoicePDF,
  ReceiptPDF,
  HandoverPDF,
  TestimonialPDF
} from '@/components/pdf/DocumentTemplates';

export default function DocumentHub() {
  const [clients, setClients] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [history, setHistory] = useState<any[]>([]);
  const [selectedClientId, setSelectedClientId] = useState('');
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Invoice selection for Invoice / Receipt generation
  const [selectedInvoiceId, setSelectedInvoiceId] = useState('');

  // PDF Preview states
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [pdfDocument, setPdfDocument] = useState<React.ReactElement | null>(null);
  const [pdfFileName, setPdfFileName] = useState('');

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadData = async () => {
    setLoading(true);
    const clientData = await getClients();
    const invData = await getInvoices();
    const histData = await getDocumentHistory();
    setClients(clientData);
    setInvoices(invData);
    setHistory(histData);
    if (clientData.length > 0) {
      setSelectedClientId(clientData[0].id);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleGenerate = async (docKey: string) => {
    const client = clients.find(c => c.id === selectedClientId);
    if (!client) {
      triggerToast('Please select a client profile first.', 'error');
      return;
    }

    let docElement: React.ReactElement | null = null;
    let filename = '';
    let docTitle = '';

    switch (docKey) {
      case 'brochure':
        docElement = <BrochurePDF />;
        docTitle = 'PixelStack Agency Brochure';
        filename = `PixelStack_Agency_Brochure.pdf`;
        break;
      case 'proposal':
        docElement = <ProposalPDF client={client} />;
        docTitle = `Project Proposal - ${client.name}`;
        filename = `PixelStack_Proposal_${client.name.replace(/\s+/g, '_')}.pdf`;
        break;
      case 'contract':
        docElement = <ContractPDF client={client} />;
        docTitle = `Service Agreement - ${client.name}`;
        filename = `PixelStack_Contract_${client.name.replace(/\s+/g, '_')}.pdf`;
        break;
      case 'welcome':
        docElement = <WelcomePDF client={client} />;
        docTitle = `Welcome Onboarding - ${client.name}`;
        filename = `PixelStack_Welcome_Letter_${client.name.replace(/\s+/g, '_')}.pdf`;
        break;
      case 'requirements':
        docElement = <RequirementsPDF client={client} />;
        docTitle = `Requirements checklist - ${client.name}`;
        filename = `PixelStack_Requirements_${client.name.replace(/\s+/g, '_')}.pdf`;
        break;
      case 'handover':
        docElement = <HandoverPDF client={client} />;
        docTitle = `Handover Credentials - ${client.name}`;
        filename = `PixelStack_Handover_${client.name.replace(/\s+/g, '_')}.pdf`;
        break;
      case 'testimonial':
        docElement = <TestimonialPDF client={client} />;
        docTitle = `Testimonial Request - ${client.name}`;
        filename = `PixelStack_Testimonial_Form_${client.name.replace(/\s+/g, '_')}.pdf`;
        break;
      case 'invoice': {
        const invoice = invoices.find(i => i.id === selectedInvoiceId);
        if (!invoice) {
          triggerToast('Please select a valid invoice from the dropdown.', 'error');
          return;
        }
        docElement = <InvoicePDF invoice={invoice} client={client} />;
        docTitle = `Billing Invoice ${invoice.invoice_number}`;
        filename = `PixelStack_Invoice_${invoice.invoice_number}.pdf`;
        break;
      }
      case 'receipt': {
        const invoice = invoices.find(i => i.id === selectedInvoiceId);
        if (!invoice || invoice.status !== 'Paid') {
          triggerToast('Selected invoice must be Paid to generate a receipt.', 'error');
          return;
        }
        docElement = <ReceiptPDF invoice={invoice} client={client} />;
        docTitle = `Payment Receipt REC-${invoice.invoice_number}`;
        filename = `PixelStack_Receipt_REC_${invoice.invoice_number}.pdf`;
        break;
      }
      default:
        break;
    }

    if (docElement) {
      setPdfDocument(docElement);
      setPdfFileName(filename);
      setIsPreviewOpen(true);
      triggerToast(`${docTitle} generated.`);
      
      // Log generation in database
      const res = await logDocumentGeneration(client.id, docKey.toUpperCase(), docTitle, {
        invoice_id: docKey === 'invoice' || docKey === 'receipt' ? selectedInvoiceId : undefined
      });
      if (res.success) {
        // Refresh history
        const histData = await getDocumentHistory();
        setHistory(histData);
      }
    }
  };

  const handleReplayPreview = (log: any) => {
    const client = log.clients || {};
    let docElement: React.ReactElement | null = null;
    const docKey = log.doc_type.toLowerCase();

    switch (docKey) {
      case 'brochure':
        docElement = <BrochurePDF />;
        break;
      case 'proposal':
        docElement = <ProposalPDF client={client} />;
        break;
      case 'contract':
        docElement = <ContractPDF client={client} />;
        break;
      case 'welcome':
        docElement = <WelcomePDF client={client} />;
        break;
      case 'requirements':
        docElement = <RequirementsPDF client={client} />;
        break;
      case 'handover':
        docElement = <HandoverPDF client={client} />;
        break;
      case 'testimonial':
        docElement = <TestimonialPDF client={client} />;
        break;
      case 'invoice': {
        const invId = log.metadata?.invoice_id;
        const invoice = invoices.find(i => i.id === invId);
        if (invoice) {
          docElement = <InvoicePDF invoice={invoice} client={client} />;
        } else {
          triggerToast('Linked invoice details no longer exist in the system.', 'error');
          return;
        }
        break;
      }
      case 'receipt': {
        const invId = log.metadata?.invoice_id;
        const invoice = invoices.find(i => i.id === invId);
        if (invoice) {
          docElement = <ReceiptPDF invoice={invoice} client={client} />;
        } else {
          triggerToast('Linked invoice details no longer exist.', 'error');
          return;
        }
        break;
      }
      default:
        break;
    }

    if (docElement) {
      setPdfDocument(docElement);
      setPdfFileName(log.name.replace(/\s+/g, '_') + '.pdf');
      setIsPreviewOpen(true);
    }
  };

  const selectedClient = clients.find(c => c.id === selectedClientId);
  const clientInvoices = invoices.filter(i => i.client_id === selectedClientId);
  const paidClientInvoices = clientInvoices.filter(i => i.status === 'Paid');

  // Sync selected invoice ID when client changes
  useEffect(() => {
    const filtered = invoices.filter(i => i.client_id === selectedClientId);
    if (filtered.length > 0) {
      setSelectedInvoiceId(filtered[0].id);
    } else {
      setSelectedInvoiceId('');
    }
  }, [selectedClientId, invoices]);

  const documentTemplates = [
    { key: 'brochure', title: 'Agency Brochure', desc: 'Agency capabilities brochure detailing services and packages.', icon: BookOpen },
    { key: 'proposal', title: 'Client Proposal', desc: 'Custom project proposal detailing scope and milestones.', icon: FileText },
    { key: 'contract', title: 'Service Contract', desc: 'Legal web development service agreement contract.', icon: FileCheck },
    { key: 'welcome', title: 'Welcome Onboarding', desc: 'Onboarding welcome letter outlining agency workflow.', icon: Smile },
    { key: 'requirements', title: 'Requirements Form', desc: 'Client requirements sheet listing assets and branding.', icon: Compass },
    { key: 'invoice', title: 'Billed Invoice', desc: 'Billing statement listing service items and totals.', icon: FileText, needsInvoice: true },
    { key: 'receipt', title: 'Payment Receipt', desc: 'Official payment receipt confirming full settlement.', icon: CheckCircle, needsPaidInvoice: true },
    { key: 'handover', title: 'Handover Document', desc: 'Handover certificate listing credentials and deployment.', icon: Key },
    { key: 'testimonial', title: 'Testimonial Request', desc: 'Review collection template gathering customer feedback.', icon: Layers }
  ];

  return (
    <div className="space-y-8">
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

      {/* PDF Preview Modal */}
      {pdfDocument && (
        <PDFPreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          document={pdfDocument}
          fileName={pdfFileName}
        />
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Corporate Document Hub</h1>
        <p className="text-zinc-500 text-xs mt-1">
          Generate, preview, and print 9 premium PDF documents with unified brand aesthetics.
        </p>
      </div>

      {/* Select Client Profile */}
      <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-zinc-900/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
            <User className="h-5 w-5 text-primary-light" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Target Client Account</h3>
            <p className="text-[10px] text-zinc-500 mt-0.5">Select a client profile to populate document metadata.</p>
          </div>
        </div>

        {loading ? (
          <div className="animate-pulse h-9 w-48 bg-zinc-800 rounded"></div>
        ) : clients.length === 0 ? (
          <span className="text-xs text-orange-400 font-semibold">No clients created. Create a client first.</span>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <select
              value={selectedClientId}
              onChange={(e) => setSelectedClientId(e.target.value)}
              className="px-3 py-2 rounded-lg bg-zinc-950/80 border border-white/5 text-white text-xs font-semibold focus:outline-none w-full sm:w-64"
            >
              {clients.map((c) => (
                <option key={c.id} value={c.id} className="bg-zinc-950">
                  {c.name} {c.business_name ? `(${c.business_name})` : ''}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {documentTemplates.map((tmpl) => {
          const Icon = tmpl.icon;
          const isInvoiceSelectable = tmpl.needsInvoice && clientInvoices.length > 0;
          const isReceiptSelectable = tmpl.needsPaidInvoice && paidClientInvoices.length > 0;
          const isDisabled = (tmpl.needsInvoice && !isInvoiceSelectable) || (tmpl.needsPaidInvoice && !isReceiptSelectable);

          return (
            <div
              key={tmpl.key}
              className={`glass-panel p-5 rounded-2xl border border-white/5 bg-zinc-900/10 flex flex-col justify-between gap-5 relative overflow-hidden transition-all ${
                isDisabled ? 'opacity-50' : 'hover:bg-zinc-900/30'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-950/60 border border-white/5">
                    <Icon className="h-4.5 w-4.5 text-primary-light" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{tmpl.title}</h4>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">{tmpl.desc}</p>
              </div>

              {/* Input for invoices selection */}
              {tmpl.needsInvoice && isInvoiceSelectable && (
                <div className="space-y-2 text-left">
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-500">Pick Billing Invoice</label>
                  <select
                    value={selectedInvoiceId}
                    onChange={(e) => setSelectedInvoiceId(e.target.value)}
                    className="w-full px-2 py-1.5 rounded bg-zinc-950/80 border border-white/5 text-white text-[11px] focus:outline-none"
                  >
                    {clientInvoices.map((inv) => (
                      <option key={inv.id} value={inv.id} className="bg-zinc-950">
                        {inv.invoice_number} (₹{Number(inv.total_amount).toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {tmpl.needsPaidInvoice && isReceiptSelectable && (
                <div className="space-y-2 text-left">
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-500">Pick Paid Invoice</label>
                  <select
                    value={selectedInvoiceId}
                    onChange={(e) => setSelectedInvoiceId(e.target.value)}
                    className="w-full px-2 py-1.5 rounded bg-zinc-950/80 border border-white/5 text-white text-[11px] focus:outline-none font-semibold text-emerald-400"
                  >
                    {paidClientInvoices.map((inv) => (
                      <option key={inv.id} value={inv.id} className="bg-zinc-950">
                        {inv.invoice_number} (₹{Number(inv.total_amount).toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {isDisabled && (
                <div className="text-[10px] text-orange-400/80 italic font-semibold flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  {tmpl.needsInvoice ? 'Please bill an invoice first.' : 'No Paid invoices available.'}
                </div>
              )}

              <button
                type="button"
                disabled={isDisabled}
                onClick={() => handleGenerate(tmpl.key)}
                className="w-full py-2.5 rounded-lg bg-zinc-950/60 hover:bg-white/5 border border-white/5 hover:border-white/10 text-white font-bold text-xs tracking-wider uppercase transition-all disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
              >
                <PlusCircle className="h-4 w-4" /> Print & Preview
              </button>
            </div>
          );
        })}
      </div>

      {/* Generation History Log */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-4 w-4 text-zinc-500" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Document Generation Log</h3>
        </div>

        <div className="glass-panel rounded-2xl border border-white/5 bg-zinc-900/20 overflow-hidden">
          <div className="overflow-x-auto">
            {history.length === 0 ? (
              <div className="py-12 text-center text-zinc-600 font-mono text-xs">
                No documents generated yet.
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-950/40 text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                    <th className="p-4">Document Type</th>
                    <th className="p-4">Reference Title</th>
                    <th className="p-4">Associated Client</th>
                    <th className="p-4">Created Time</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-zinc-300 font-medium">
                  {history.map((log) => (
                    <tr key={log.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-mono font-bold text-primary-light uppercase text-[10px]">
                        {log.doc_type}
                      </td>
                      <td className="p-4 text-white font-semibold">{log.name}</td>
                      <td className="p-4 text-zinc-400">{log.clients?.name || 'All Agency (Capabilities)'}</td>
                      <td className="p-4 text-zinc-500 font-mono text-[10px]">
                        {new Date(log.created_at).toLocaleString()}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleReplayPreview(log)}
                          className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1.5 rounded bg-zinc-950/60 hover:bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Eye className="h-3 w-3 text-primary-light" /> Re-Preview
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
