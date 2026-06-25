'use client';

import { useState, useEffect } from 'react';
import {
  getInvoices,
  getClients,
  getClientProjects,
  addInvoice,
  updateInvoice,
  deleteInvoice,
  logDocumentGeneration
} from '@/app/actions';
import {
  DollarSign,
  Plus,
  Edit,
  Trash2,
  X,
  AlertCircle,
  CheckCircle,
  Calendar,
  User,
  PlusCircle,
  MinusCircle,
  FileText,
  Receipt,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFPreviewModal from '@/components/pdf/PDFPreviewModal';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';
import { InvoicePDF, ReceiptPDF } from '@/components/pdf/DocumentTemplates';

export default function InvoicesManager() {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // PDF Preview states
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [pdfDocument, setPdfDocument] = useState<React.ReactElement | null>(null);
  const [pdfFileName, setPdfFileName] = useState('');

  // Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState<any>(null);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [clientId, setClientId] = useState('');
  const [projectId, setProjectId] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [packageSelected, setPackageSelected] = useState('Starter Package');
  const [paymentInstructions, setPaymentInstructions] = useState('Please transfer UPI to dabdigitals@upi or Bank A/C: 1234567890 (IFSC: SBIN0000123)');
  const [status, setStatus] = useState('Pending');

  // Interactive Breakdown items
  const [items, setItems] = useState<Array<{ description: string; qty: number; rate: number; amount: number }>>([
    { description: 'Next.js 15 Custom Web Development', qty: 1, rate: 10000, amount: 10000 }
  ]);

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadData = async () => {
    setLoading(true);
    const invData = await getInvoices();
    const clientData = await getClients();
    const projData = await getClientProjects();
    setInvoices(invData);
    setClients(clientData);
    setProjects(projData);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOpenAdd = () => {
    if (clients.length === 0) {
      triggerToast('Create a client profile first before generating invoices.', 'error');
      return;
    }
    
    // Auto-generate invoice number: e.g. INV-2026-00X
    const year = new Date().getFullYear();
    const count = invoices.length + 1;
    const padded = String(count).padStart(3, '0');
    const autoNumber = `INV-${year}-${padded}`;

    const today = new Date().toISOString().split('T')[0];
    const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    setEditingInvoice(null);
    setInvoiceNumber(autoNumber);
    setClientId(clients[0].id);
    setProjectId('');
    setIssueDate(today);
    setDueDate(nextWeek);
    setPackageSelected(clients[0].selected_package || 'Starter Package');
    setPaymentInstructions('Please transfer UPI to dabdigitals@upi or Bank A/C: 1234567890 (IFSC: SBIN0000123)');
    setStatus('Pending');

    const defaultCost = Number(clients[0].project_cost || 10000);
    setItems([
      {
        description: `${clients[0].selected_package || 'Starter Package'} Web Development Services`,
        qty: 1,
        rate: defaultCost,
        amount: defaultCost
      }
    ]);

    setIsModalOpen(true);
  };

  const handleOpenEdit = (inv: any) => {
    setEditingInvoice(inv);
    setInvoiceNumber(inv.invoice_number);
    setClientId(inv.client_id);
    setProjectId(inv.project_id || '');
    setIssueDate(inv.issue_date);
    setDueDate(inv.due_date);
    setPackageSelected(inv.package_selected || 'Starter Package');
    setPaymentInstructions(inv.payment_instructions || '');
    setStatus(inv.status || 'Pending');
    setItems(inv.services_breakdown || []);
    setIsModalOpen(true);
  };

  const handleClientSelect = (id: string) => {
    setClientId(id);
    const client = clients.find(c => c.id === id);
    if (client) {
      setPackageSelected(client.selected_package || 'Starter Package');
      const defaultCost = Number(client.project_cost || 10000);
      setItems([
        {
          description: `${client.selected_package || 'Starter Package'} Web Development Services`,
          qty: 1,
          rate: defaultCost,
          amount: defaultCost
        }
      ]);
    }
  };

  const handleAddItemRow = () => {
    setItems([...items, { description: '', qty: 1, rate: 0, amount: 0 }]);
  };

  const handleRemoveItemRow = (idx: number) => {
    if (items.length === 1) return;
    setItems(items.filter((_, i) => i !== idx));
  };

  const handleItemFieldChange = (idx: number, field: string, val: any) => {
    const updated = [...items];
    const row = { ...updated[idx] };
    (row as any)[field] = val;
    if (field === 'qty' || field === 'rate') {
      row.amount = Number(row.qty || 0) * Number(row.rate || 0);
    }
    updated[idx] = row;
    setItems(updated);
  };

  // Calculate Net Total
  const totalAmount = items.reduce((sum, item) => sum + (item.amount || 0), 0);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      invoice_number: invoiceNumber,
      client_id: clientId,
      project_id: projectId || null,
      issue_date: issueDate,
      due_date: dueDate,
      package_selected: packageSelected,
      services_breakdown: items,
      amount: totalAmount,
      total_amount: totalAmount,
      payment_instructions: paymentInstructions,
      status: status
    };

    if (editingInvoice) {
      const res = await updateInvoice(editingInvoice.id, payload);
      if (res.success) {
        triggerToast('Invoice details saved.');
        setIsModalOpen(false);
        loadData();
      } else {
        triggerToast('Failed to save invoice.', 'error');
      }
    } else {
      const res = await addInvoice(payload);
      if (res.success) {
        triggerToast('Invoice billed successfully.');
        setIsModalOpen(false);
        loadData();
      } else {
        triggerToast('Failed to bill invoice.', 'error');
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
      title: 'Delete Billing Statement',
      description: 'Are you sure you want to delete this billing invoice? This action is permanent and cannot be undone.',
      isLoading: false
    });
  };

  const handleConfirmDelete = async () => {
    setDeleteModal(prev => ({ ...prev, isLoading: true }));
    const res = await deleteInvoice(deleteModal.id);
    if (res.success) {
      triggerToast('Invoice statement deleted.');
      setDeleteModal({ isOpen: false, id: '', title: '', description: '', isLoading: false });
      loadData();
    } else {
      triggerToast('Failed to delete invoice.', 'error');
      setDeleteModal(prev => ({ ...prev, isLoading: false }));
    }
  };

  // Preview Invoice PDF
  const handlePreviewInvoice = async (inv: any) => {
    const client = clients.find(c => c.id === inv.client_id) || inv.clients || {};
    setPdfDocument(<InvoicePDF invoice={inv} client={client} />);
    setPdfFileName(`DAB_Digitals_Invoice_${inv.invoice_number}_${client.name?.replace(/\s+/g, '_')}.pdf`);
    setIsPreviewOpen(true);
    
    // Log PDF generation event
    await logDocumentGeneration(client.id || null, 'Invoice', inv.invoice_number, { invoice_id: inv.id });
  };

  // Preview Receipt PDF
  const handlePreviewReceipt = async (inv: any) => {
    const client = clients.find(c => c.id === inv.client_id) || inv.clients || {};
    setPdfDocument(<ReceiptPDF invoice={inv} client={client} />);
    setPdfFileName(`DAB_Digitals_Receipt_REC_${inv.invoice_number}_${client.name?.replace(/\s+/g, '_')}.pdf`);
    setIsPreviewOpen(true);

    // Log PDF generation event
    await logDocumentGeneration(client.id || null, 'Receipt', `REC-${inv.invoice_number}`, { invoice_id: inv.id });
  };

  const clientProjects = projects.filter(p => p.client_id === clientId);

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Invoice Statements & Payments</h1>
          <p className="text-zinc-500 text-xs mt-1">
            Billed ledger transactions, custom service breakdowns, and receipts printing.
          </p>
        </div>
        
        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/10 cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Create Invoice
        </button>
      </div>

      {/* Invoices List */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-zinc-500 font-mono text-xs gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
          <span>Loading ledger statements...</span>
        </div>
      ) : invoices.length === 0 ? (
        <div className="glass-panel py-20 rounded-2xl border border-white/5 bg-zinc-900/20 text-center text-zinc-600 font-mono text-xs">
          No billing invoices recorded. Click "Create Invoice" to start.
        </div>
      ) : (
        <div className="glass-panel rounded-2xl border border-white/5 bg-zinc-900/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-zinc-950/40 text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                  <th className="p-4">Invoice No</th>
                  <th className="p-4">Account Client</th>
                  <th className="p-4">Billing Dates</th>
                  <th className="p-4">Statement Value</th>
                  <th className="p-4">Payment status</th>
                  <th className="p-4 text-right">PDF documents</th>
                  <th className="p-4 text-right">Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-zinc-300">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-bold text-white font-mono">{inv.invoice_number}</td>
                    <td className="p-4">
                      <p className="font-semibold text-white">{inv.clients?.name || 'TBD Account'}</p>
                      <p className="text-[10px] text-zinc-500 mt-0.5">{inv.clients?.business_name || 'Individual'}</p>
                    </td>
                    <td className="p-4 font-mono text-zinc-400">
                      <span className="text-[10px] text-zinc-500 block uppercase font-bold">Due Date</span>
                      {inv.due_date}
                    </td>
                    <td className="p-4 font-mono text-white font-bold">
                      ₹{Number(inv.total_amount).toLocaleString()}
                    </td>
                    <td className="p-4">
                      <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                        inv.status === 'Paid'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                      }`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2.5">
                        <button
                          onClick={() => handlePreviewInvoice(inv)}
                          className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1.5 rounded bg-zinc-950/60 hover:bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <FileText className="h-3 w-3 text-primary-light" /> Invoice
                        </button>
                        {inv.status === 'Paid' && (
                          <button
                            onClick={() => handlePreviewReceipt(inv)}
                            className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1.5 rounded bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-900/30 text-emerald-400 transition-colors cursor-pointer"
                          >
                            <Receipt className="h-3 w-3" /> Receipt
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(inv)}
                          className="p-1.5 rounded bg-zinc-950/60 hover:bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Edit className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(inv.id)}
                          className="p-1.5 rounded bg-zinc-950/60 hover:bg-red-500/10 border border-white/5 text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
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

      {/* Invoice Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-2xl glass-panel bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-6 z-10 text-left overflow-y-auto max-h-[90vh]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {editingInvoice ? 'Modify Invoice Statement' : 'Generate Billing Invoice'}
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
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Invoice Number</label>
                  <input
                    type="text"
                    required
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    placeholder="e.g. INV-2026-001"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Billed Client Profile</label>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Link Project (Optional)</label>
                  <div className="relative">
                    <select
                      value={projectId}
                      onChange={(e) => setProjectId(e.target.value)}
                      className="w-full appearance-none px-3 py-2 pr-8 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 cursor-pointer"
                    >
                      <option value="" className="bg-zinc-950">Not Linked / General</option>
                      {clientProjects.map((p) => (
                        <option key={p.id} value={p.id} className="bg-zinc-950">{p.title}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Billed Package Type</label>
                  <input
                    type="text"
                    required
                    value={packageSelected}
                    onChange={(e) => setPackageSelected(e.target.value)}
                    placeholder="e.g. Growth Package"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Issue Date</label>
                  <input
                    type="date"
                    required
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Due Date</label>
                  <input
                    type="date"
                    required
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Billing status</label>
                  <div className="relative">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full appearance-none px-3 py-2 pr-8 rounded-lg bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none focus:border-primary/50 cursor-pointer font-bold"
                    >
                      <option value="Pending" className="bg-zinc-950 text-orange-400">Pending</option>
                      <option value="Partial" className="bg-zinc-950 text-orange-400">Partial</option>
                      <option value="Paid" className="bg-zinc-950 text-primary-light">Paid</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Dynamic Service Items Breakdown */}
              <div className="space-y-3.5">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Itemized Services Breakdown</h4>
                  <button
                    type="button"
                    onClick={handleAddItemRow}
                    className="flex items-center gap-1 text-[10px] text-primary-light hover:text-primary transition-colors font-bold cursor-pointer"
                  >
                    <PlusCircle className="h-3.5 w-3.5" /> Add Service Row
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <div className="flex-1">
                        <input
                          type="text"
                          required
                          value={item.description}
                          onChange={(e) => handleItemFieldChange(idx, 'description', e.target.value)}
                          placeholder="Service description"
                          className="w-full px-2.5 py-1.5 rounded bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none"
                        />
                      </div>
                      <div className="w-14">
                        <input
                          type="number"
                          required
                          min={1}
                          value={item.qty}
                          onChange={(e) => handleItemFieldChange(idx, 'qty', parseInt(e.target.value, 10))}
                          className="w-full px-2.5 py-1.5 rounded bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none font-mono text-center"
                        />
                      </div>
                      <div className="w-24">
                        <input
                          type="number"
                          required
                          value={item.rate}
                          onChange={(e) => handleItemFieldChange(idx, 'rate', parseFloat(e.target.value))}
                          placeholder="Rate (₹)"
                          className="w-full px-2.5 py-1.5 rounded bg-zinc-950/60 border border-white/5 text-white text-xs focus:outline-none font-mono"
                        />
                      </div>
                      <div className="w-24 text-right font-mono font-bold text-white text-xs">
                        ₹{(item.amount || 0).toLocaleString()}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveItemRow(idx)}
                        disabled={items.length === 1}
                        className="text-zinc-600 hover:text-red-400 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                      >
                        <MinusCircle className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-end items-center gap-3">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Gross Total Billed:</span>
                  <span className="text-base font-bold text-white font-mono">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Banking Details & Payment Instructions</label>
                <textarea
                  value={paymentInstructions}
                  onChange={(e) => setPaymentInstructions(e.target.value)}
                  placeholder="Specify UPI and account coordinates..."
                  rows={2.5}
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
                  Save Invoice
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
