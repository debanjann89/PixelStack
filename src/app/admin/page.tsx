'use client';

import { useState, useEffect } from 'react';
import { getDashboardData } from '@/app/actions';
import {
  TrendingUp,
  Award,
  Zap,
  Briefcase,
  Users,
  MessageSquare,
  DollarSign,
  FileText,
  ArrowRight,
  TrendingDown,
  Percent,
  CheckCircle2,
  AlertCircle,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminOverview() {
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await getDashboardData();
      setDashboardData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-zinc-500 font-mono text-xs gap-3">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
        <span>Retrieving system analytics...</span>
      </div>
    );
  }

  const { stats, leads, submissions, consultations, projects, invoices } = dashboardData || {
    stats: {
      totalLeads: 0,
      newLeads: 0,
      contactedLeads: 0,
      proposalLeads: 0,
      wonLeads: 0,
      lostLeads: 0,
      winRate: 0,
      wonRevenue: 0,
      pipelineRevenue: 0
    },
    leads: [],
    submissions: [],
    consultations: [],
    projects: [],
    invoices: []
  };

  // Billing analytics
  const totalInvoiced = invoices.reduce((sum: number, inv: any) => sum + Number(inv.total_amount || 0), 0);
  const paidInvoiced = invoices
    .filter((inv: any) => inv.status === 'Paid')
    .reduce((sum: number, inv: any) => sum + Number(inv.total_amount || 0), 0);
  const pendingInvoiced = invoices
    .filter((inv: any) => inv.status === 'Pending' || inv.status === 'Partial')
    .reduce((sum: number, inv: any) => sum + Number(inv.total_amount || 0), 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">System Overview & Analytics</h1>
          <p className="text-zinc-500 text-xs mt-1">
            Real-time analytics and agency tracking for PixelStack Studio.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2.5">
          <Link
            href="/admin/clients"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/10 active:scale-[0.98]"
          >
            <Plus className="h-4 w-4" /> Add Client
          </Link>
          <Link
            href="/admin/documents"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-300 font-semibold text-xs tracking-wider uppercase transition-all"
          >
            <FileText className="h-4 w-4" /> Document Hub
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Won Revenue Card */}
        <div className="glass-panel p-5 rounded-2xl border border-white/5 relative overflow-hidden bg-zinc-900/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Won Revenue (Est)</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/15">
              <DollarSign className="h-4 w-4 text-emerald-400" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-white font-mono">₹{stats.wonRevenue.toLocaleString()}</h3>
            <p className="text-[10px] text-zinc-400 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-emerald-400" /> Based on closed won lead values
            </p>
          </div>
        </div>

        {/* Pipeline Revenue Card */}
        <div className="glass-panel p-5 rounded-2xl border border-white/5 relative overflow-hidden bg-zinc-900/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Active Pipeline (Est)</span>
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/15">
              <TrendingUp className="h-4 w-4 text-primary-light" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-white font-mono">₹{stats.pipelineRevenue.toLocaleString()}</h3>
            <p className="text-[10px] text-zinc-400 mt-1">In progress leads & negotiations</p>
          </div>
        </div>

        {/* Win Rate Card */}
        <div className="glass-panel p-5 rounded-2xl border border-white/5 relative overflow-hidden bg-zinc-900/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Deal Win Rate</span>
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/15">
              <Percent className="h-4 w-4 text-teal-400" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-white font-mono">{stats.winRate}%</h3>
            <div className="w-full bg-zinc-850 h-1.5 rounded-full mt-2.5 overflow-hidden">
              <div className="bg-teal-500 h-full rounded-full" style={{ width: `${stats.winRate}%` }}></div>
            </div>
          </div>
        </div>

        {/* Total Invoiced Card */}
        <div className="glass-panel p-5 rounded-2xl border border-white/5 relative overflow-hidden bg-zinc-900/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Paid / Total Billing</span>
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5">
              <Zap className="h-4 w-4 text-zinc-400" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-white font-mono">
              ₹{paidInvoiced.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">/ ₹{totalInvoiced.toLocaleString()}</span>
            </h3>
            <p className="text-[10px] text-zinc-400 mt-1.5 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" /> Paid: ₹{paidInvoiced.toLocaleString()}
              <span className="inline-block w-2 h-2 rounded-full bg-orange-500 ml-2" /> Pending: ₹{pendingInvoiced.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Core Counts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Leads', count: stats.totalLeads, color: 'text-primary-light', icon: Users, href: '/admin/leads' },
          { label: 'Consultations', count: consultations.length, color: 'text-teal-400', icon: MessageSquare, href: '/admin/leads' },
          { label: 'Active Projects', count: projects.length, color: 'text-emerald-400', icon: Briefcase, href: '/admin/projects' },
          { label: 'Billing Invoices', count: invoices.length, color: 'text-zinc-300', icon: DollarSign, href: '/admin/invoices' }
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="glass-panel p-4 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all flex items-center gap-4 cursor-pointer"
          >
            <div className="p-2.5 rounded-lg bg-zinc-950/60 border border-white/5">
              <item.icon className={`h-4.5 w-4.5 ${item.color}`} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">{item.label}</p>
              <h4 className="text-lg font-bold text-white mt-0.5 font-mono">{item.count}</h4>
            </div>
          </Link>
        ))}
      </div>

      {/* Detailed Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Recent Leads & Messages */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-zinc-900/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <h3 className="text-sm font-bold text-white">Recent Inquiries & Leads</h3>
                <p className="text-[10px] text-zinc-500 mt-0.5">Latest lead capture form submissions.</p>
              </div>
              <Link href="/admin/leads" className="text-xs text-primary-light hover:text-primary transition-colors flex items-center gap-1 font-semibold">
                Manage Leads <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {leads.slice(0, 4).length === 0 ? (
                <p className="text-xs text-zinc-600 font-mono text-center py-6">No recent leads found.</p>
              ) : (
                leads.slice(0, 4).map((lead: any) => (
                  <div key={lead.id} className="p-3 rounded-lg bg-zinc-950/40 border border-white/5 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">{lead.leadName}</h4>
                      <p className="text-[10px] text-zinc-400 mt-0.5">{lead.businessName} • {lead.projectType}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-zinc-500 font-mono font-semibold">{lead.budgetRange}</span>
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
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Billing & Project Activity */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-zinc-900/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <h3 className="text-sm font-bold text-white">Invoice Statements & Payments</h3>
                <p className="text-[10px] text-zinc-500 mt-0.5">Recent client billing operations.</p>
              </div>
              <Link href="/admin/invoices" className="text-xs text-primary-light hover:text-primary transition-colors flex items-center gap-1 font-semibold">
                View Invoices <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {invoices.slice(0, 4).length === 0 ? (
                <p className="text-xs text-zinc-600 font-mono text-center py-6">No recent invoices logged.</p>
              ) : (
                invoices.slice(0, 4).map((invoice: any) => (
                  <div key={invoice.id} className="p-3 rounded-lg bg-zinc-950/40 border border-white/5 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">{invoice.invoice_number}</h4>
                      <p className="text-[10px] text-zinc-400 mt-0.5">
                        {invoice.clients?.business_name || invoice.clients?.name || 'TBD Client'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-white font-mono">₹{Number(invoice.total_amount).toLocaleString()}</p>
                      <span className={`text-[9px] font-bold uppercase ${
                        invoice.status === 'Paid' ? 'text-primary-light' : 'text-orange-400'
                      }`}>
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
