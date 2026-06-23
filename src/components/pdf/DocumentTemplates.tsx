'use client';

import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font
} from '@react-pdf/renderer';

// Register standard fonts
// Note: We use built-in Helvetica which is guaranteed to render instantly without loading delays.

// Unified Design Token Palette for PixelStack PDFs
const colors = {
  primary: '#10b981',       // Emerald Green
  primaryDark: '#059669',   // Dark Emerald
  secondary: '#14b8a6',     // Teal
  darkText: '#1e293b',      // Slate 800
  bodyText: '#475569',      // Slate 600
  lightText: '#94a3b8',     // Slate 400
  border: '#e2e8f0',        // Slate 200
  cardBg: '#f8fafc',        // Slate 50
  accent: '#062f1e'         // Deep Forest Green
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: colors.bodyText,
    lineHeight: 1.5,
    backgroundColor: '#ffffff'
  },
  coverPage: {
    padding: 50,
    fontFamily: 'Helvetica',
    backgroundColor: colors.accent,
    color: '#ffffff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  coverTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginBottom: 10
  },
  coverSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 40
  },
  coverFooter: {
    borderTop: '1 solid rgba(255,255,255,0.1)',
    paddingTop: 20,
    fontSize: 9,
    color: colors.primary
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1 solid ' + colors.primary,
    paddingBottom: 15,
    marginBottom: 20
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'column'
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    fontSize: 8,
    color: colors.lightText
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: colors.accent
  },
  logoAccent: {
    color: colors.primary
  },
  logoTagline: {
    fontSize: 8,
    color: colors.lightText,
    marginTop: 2
  },
  h1: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: colors.accent,
    marginBottom: 12,
    marginTop: 10
  },
  h2: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: colors.accent,
    marginBottom: 8,
    marginTop: 8
  },
  section: {
    marginBottom: 15
  },
  paragraph: {
    marginBottom: 10,
    textAlign: 'justify'
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15
  },
  card: {
    backgroundColor: colors.cardBg,
    border: '1 solid ' + colors.border,
    padding: 12,
    borderRadius: 6,
    flex: 1,
    minWidth: '45%'
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: colors.accent,
    marginBottom: 4
  },
  cardText: {
    fontSize: 9,
    color: colors.bodyText
  },
  bulletList: {
    marginBottom: 10,
    paddingLeft: 10
  },
  bulletItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4
  },
  bullet: {
    width: 10,
    color: colors.primary,
    fontWeight: 'bold'
  },
  bulletText: {
    flex: 1
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 40,
    right: 40,
    borderTop: '1 solid ' + colors.border,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
    color: colors.lightText
  },
  pageNum: {
    textAlign: 'right'
  },
  signatureRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingTop: 10
  },
  signatureBlock: {
    width: '45%',
    borderTop: '1 solid ' + colors.lightText,
    paddingTop: 6,
    alignItems: 'center'
  },
  signatureTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: colors.accent
  },
  signatureSubText: {
    fontSize: 8,
    color: colors.lightText,
    marginTop: 2
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    border: '1 solid ' + colors.border,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 15
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.accent,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    padding: 6
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1 solid ' + colors.border,
    padding: 6
  },
  tableRowAlt: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.cardBg,
    borderBottom: '1 solid ' + colors.border,
    padding: 6
  },
  col1: { flex: 3 },
  col2: { flex: 1, textAlign: 'center' },
  col3: { flex: 1, textAlign: 'right' },
  col4: { flex: 1, textAlign: 'right' },
  totalRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 6,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold'
  },
  totalLabel: {
    marginRight: 20
  },
  totalValue: {
    color: colors.primaryDark
  }
});

// Reusable Header Component
const PDFHeader = ({ docTitle }: { docTitle: string }) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Text style={styles.logoText}>
        Pixel<Text style={styles.logoAccent}>Stack</Text>
      </Text>
      <Text style={styles.logoTagline}>Building Modern Digital Experiences</Text>
    </View>
    <View style={styles.headerRight}>
      <Text style={{ fontFamily: 'Helvetica-Bold', color: colors.accent }}>{docTitle}</Text>
      <Text>+91 89181 86698 | hello@pixelstack.agency</Text>
    </View>
  </View>
);

// Reusable Footer Component
const PDFFooter = ({ pageNum, totalPages = 1 }: { pageNum: number; totalPages?: number }) => (
  <View style={styles.footer}>
    <Text>© PixelStack Studio. Confidential Document.</Text>
    <Text style={styles.pageNum}>Page {pageNum}</Text>
  </View>
);

// ==========================================
// 1. AGENCY BROCHURE PDF
// ==========================================
export const BrochurePDF = () => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.coverPage}>
      <View>
        <Text style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: colors.primary, marginBottom: 15 }}>
          Corporate Capabilities Brochure
        </Text>
        <Text style={styles.coverTitle}>PixelStack</Text>
        <Text style={styles.coverSubtitle}>Building Modern Digital Experiences That Drive Growth</Text>
      </View>
      <View style={{ marginBottom: 40 }}>
        <Text style={{ fontSize: 10, color: '#ffffff', marginBottom: 4 }}>Next.js 15 App Router Experts</Text>
        <Text style={{ fontSize: 10, color: '#ffffff', marginBottom: 4 }}>Bespoke Website Development & UI/UX Design</Text>
        <Text style={{ fontSize: 10, color: '#ffffff' }}>Search Engine Optimization & Digital Growth Strategy</Text>
      </View>
      <View style={styles.coverFooter}>
        <Text>PixelStack Studio • hello@pixelstack.agency • +91 89181 86698</Text>
      </View>
    </Page>

    {/* Content Page */}
    <Page size="A4" style={styles.page}>
      <PDFHeader docTitle="Agency Capabilities Brochure" />
      
      <Text style={styles.h1}>About PixelStack</Text>
      <Text style={styles.paragraph}>
        PixelStack is an elite digital engineering agency founded by Debanjan Amin and Banashree Das. We bridge the gap between simple website layouts and high-performance business applications. We build custom web products that look premium, load in under 500ms, and turn visitors into actual customers.
      </Text>

      <Text style={styles.h2}>Our Core Capabilities</Text>
      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Website Development</Text>
          <Text style={styles.cardText}>Bespoke, high-performance web systems using Next.js 15, React 19, and Server Actions. Optimized for Google Core Web Vitals.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>UI/UX Design</Text>
          <Text style={styles.cardText}>Stunning visual screens inspired by Stripe, Vercel, and Linear. Focused on intuitive navigation and user conversions.</Text>
        </View>
      </View>
      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>SEO Foundations</Text>
          <Text style={styles.cardText}>Structured semantic HTML, JSON-LD Schema markup, dynamic sitemaps, and indexing strategies to rank #1 locally.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Digital Marketing & Socials</Text>
          <Text style={styles.cardText}>Tailored audience acquisition funnels, content planning, and digital branding maps to scale corporate visibility.</Text>
        </View>
      </View>

      <Text style={styles.h2}>Premium Pricing Packages</Text>
      <View style={styles.bulletList}>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Starter Package (₹10,000)</Text>: Custom 5-page responsive site, basic SEO, contact form, WhatsApp.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Growth Package (₹15,000)</Text>: Custom 10-page site, analytics, enhanced SEO, lead capture, blog setup.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Premium Package (Starting ₹30,000)</Text>: Bespoke portal flow, priority SLA, 1-year hosting, SSL, and maintenance.</Text>
        </View>
      </View>

      <PDFFooter pageNum={2} />
    </Page>
  </Document>
);

// ==========================================
// 2. PROJECT PROPOSAL PDF
// ==========================================
export const ProposalPDF = ({ client }: { client: any }) => (
  <Document>
    <Page size="A4" style={styles.coverPage}>
      <View>
        <Text style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: colors.primary, marginBottom: 15 }}>
          Project Proposal
        </Text>
        <Text style={styles.coverTitle}>Web System Proposal</Text>
        <Text style={styles.coverSubtitle}>Prepared for {client.business_name || client.name}</Text>
      </View>
      <View style={{ marginBottom: 40 }}>
        <Text style={{ fontSize: 10, color: '#ffffff', marginBottom: 4 }}>Date: {new Date().toLocaleDateString()}</Text>
        <Text style={{ fontSize: 10, color: '#ffffff', marginBottom: 4 }}>Prepared By: Debanjan Amin</Text>
        <Text style={{ fontSize: 10, color: '#ffffff' }}>Target Timeline: {client.timeline || '2-3 Weeks'}</Text>
      </View>
      <View style={styles.coverFooter}>
        <Text>PixelStack Studio • hello@pixelstack.agency</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <PDFHeader docTitle="Project Proposal" />

      <Text style={styles.h1}>1. Project Overview & Goals</Text>
      <Text style={styles.paragraph}>
        We are pleased to submit this proposal to build a modern digital solution for **{client.business_name}** ({client.name}). Based on our discussions, we understand your primary objective is to build a high-performance web asset in the **{client.industry || 'Business'}** sector.
      </Text>
      <Text style={styles.paragraph}>
        Our main goal is to replace slow, outdated structures with a modern Next.js 15 architecture. This will enable faster page speeds (sub-500ms), increase user conversion rates, and lay down technical SEO foundations to secure ranking visibility on search engines.
      </Text>

      <Text style={styles.h1}>2. Scope & Deliverables</Text>
      <Text style={styles.paragraph}>
        We propose delivering the **{client.selected_package || 'Growth Package'}** as the structural foundation:
      </Text>
      <View style={styles.bulletList}>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Custom UI/UX layout design mockups inspired by Stripe and Vercel.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Next.js 15 frontend architecture using fully responsive styling.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Secure server endpoints for contact captures and validated schemas.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Comprehensive On-page Metadata, Robots config, and Sitemap compilation.</Text>
        </View>
      </View>

      <Text style={styles.h2}>3. Financial Summary</Text>
      <Text style={styles.paragraph}>
        Total Contract Estimate: **₹{client.project_cost || '15,000'}**. 
        Payment structure requires a 50% advance to initiate the project, with the remaining 50% due immediately upon final layout launch and deployment.
      </Text>

      <View style={styles.signatureRow}>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>Debanjan Amin</Text>
          <Text style={styles.signatureSubText}>Co-Founder, PixelStack</Text>
        </View>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>{client.name}</Text>
          <Text style={styles.signatureSubText}>Client Authorized Signatory</Text>
        </View>
      </View>

      <PDFFooter pageNum={2} />
    </Page>
  </Document>
);

// ==========================================
// 3. WEBSITE DEVELOPMENT CONTRACT PDF
// ==========================================
export const ContractPDF = ({ client }: { client: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader docTitle="Website Development Contract" />

      <Text style={styles.h1}>Service Agreement Contract</Text>
      <Text style={styles.paragraph}>
        This Agreement is made on {new Date().toLocaleDateString()} between **PixelStack Studio** (hereinafter "Developer") and **{client.business_name || client.name}** (hereinafter "Client").
      </Text>

      <Text style={styles.h2}>1. Scope of Work</Text>
      <Text style={styles.paragraph}>
        Developer agrees to execute design, coding, testing, and deployment of a custom website in accordance with the {client.selected_package || 'selected package'} specifications. Deliverables include a custom Next.js 15 site, mobile layout responsiveness, and search indexing schema.
      </Text>

      <Text style={styles.h2}>2. Payment Terms</Text>
      <Text style={styles.paragraph}>
        The Client agrees to pay Developer a total fee of **₹{client.project_cost || '15,000'}** for services rendered. Payments shall be executed according to the following schedule:
        - 50% deposit (₹{(client.project_cost || 15000) * 0.5}) upon signing this agreement, prior to commencement of design.
        - 50% final payment (₹{(client.project_cost || 15000) * 0.5}) immediately upon website handover and server deployment.
      </Text>

      <Text style={styles.h2}>3. Revision Policy</Text>
      <Text style={styles.paragraph}>
        We include up to three (3) major rounds of design revisions during the wireframing phase. Any subsequent changes requested post-launch or outside the original scope will be billed at an additional rate of ₹1,000 per page.
      </Text>

      <Text style={styles.h2}>4. Intellectual Property & Code Ownership</Text>
      <Text style={styles.paragraph}>
        Upon final invoice clearance, full intellectual property and ownership rights of the custom code, designs, and content will be transferred to the Client. Developer retains the right to display screenshots of the completed project in their portfolio showcase.
      </Text>

      <Text style={styles.h2}>5. SLA Support & Terminations</Text>
      <Text style={styles.paragraph}>
        Developer includes a standard {client.selected_package === 'Premium Package' ? '30 days' : '15 days'} SLA support window. Either party may terminate this agreement with 7 days written notice if the other party breaches material terms.
      </Text>

      <View style={styles.signatureRow}>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>Debanjan Amin</Text>
          <Text style={styles.signatureSubText}>Developer Signatory, PixelStack</Text>
        </View>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>{client.name}</Text>
          <Text style={styles.signatureSubText}>Client Signatory</Text>
        </View>
      </View>

      <PDFFooter pageNum={1} />
    </Page>
  </Document>
);

// ==========================================
// 4. WELCOME LETTER PDF
// ==========================================
export const WelcomePDF = ({ client }: { client: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader docTitle="Welcome Package & Onboarding" />

      <Text style={styles.h1}>Welcome to PixelStack!</Text>
      <Text style={styles.paragraph}>
        Dear {client.name},
      </Text>
      <Text style={styles.paragraph}>
        On behalf of the PixelStack team, we are absolutely thrilled to welcome you as a client. We appreciate the trust you have placed in us to design and engineer your new digital asset.
      </Text>
      <Text style={styles.paragraph}>
        Our primary mission is to ensure that **{client.business_name || 'your business'}** establishes a modern, fast, and highly authoritative web footprint. We don't just build layouts; we build conversion pipelines.
      </Text>

      <Text style={styles.h2}>What Happens Next? (Our Workflow)</Text>
      <View style={styles.bulletList}>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>1.</Text>
          <Text style={styles.bulletText}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Information Gathering</Text>: Please fill out the Client Requirement Form to specify your design colors, logo assets, and page content preferences.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>2.</Text>
          <Text style={styles.bulletText}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Wireframing & UI Drafts</Text>: We design high-fidelity visual mockups of your home screen and get your approval.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>3.</Text>
          <Text style={styles.bulletText}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Development</Text>: Debanjan Amin handles full-stack coding in Next.js 15, optimizing speed scores.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>4.</Text>
          <Text style={styles.bulletText}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Audit & Launch</Text>: Banashree Das conducts SEO schema indexing audits before final edge server deployment.</Text>
        </View>
      </View>

      <Text style={styles.h2}>How We Communicate</Text>
      <Text style={styles.paragraph}>
        To keep communication swift and transparent, we set up a direct WhatsApp channel for your project. You can also reach us via phone at **+91 89181 86698** or email at **hello@pixelstack.agency**.
      </Text>

      <Text style={styles.paragraph}>
        We are excited to kick off this project and collaborate with you. Thank you for choosing PixelStack!
      </Text>

      <View style={{ marginTop: 25 }}>
        <Text style={{ fontFamily: 'Helvetica-Bold', color: colors.accent }}>Debanjan Amin & Banashree Das</Text>
        <Text style={styles.signatureSubText}>Co-Founders, PixelStack Studio</Text>
      </View>

      <PDFFooter pageNum={1} />
    </Page>
  </Document>
);

// ==========================================
// 5. CLIENT REQUIREMENT FORM PDF
// ==========================================
export const RequirementsPDF = ({ client }: { client: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader docTitle="Client Website Requirement Sheet" />

      <Text style={styles.h1}>Client Project Requirements</Text>
      <Text style={styles.paragraph}>
        Please review the following requirements gathered for **{client.business_name}** ({client.name}). This metadata coordinates the design layout and core code functionalities.
      </Text>

      <Text style={styles.h2}>1. Business Overview</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Client Name</Text></View>
          <View style={{ flex: 2 }}><Text>{client.name}</Text></View>
        </View>
        <View style={styles.tableRowAlt}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Business Name</Text></View>
          <View style={{ flex: 2 }}><Text>{client.business_name}</Text></View>
        </View>
        <View style={styles.tableRow}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Target Industry</Text></View>
          <View style={{ flex: 2 }}><Text>{client.industry || 'Not Specified'}</Text></View>
        </View>
        <View style={styles.tableRowAlt}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Project Scope</Text></View>
          <View style={{ flex: 2 }}><Text>{client.project_type || 'Custom Development'}</Text></View>
        </View>
      </View>

      <Text style={styles.h2}>2. Design & Branding Preferences</Text>
      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Color Aesthetics</Text>
          <Text style={styles.cardText}>Preferred Brand Colors: Forest green, teal, mint accent, and neutral darks. (Clean, high-end Vercel/Linear feel).</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Required Features</Text>
          <Text style={styles.cardText}>Mobile responsive layout, custom Google Maps, direct WhatsApp floating contact, and lead forms.</Text>
        </View>
      </View>

      <Text style={styles.h2}>3. Specific Requirements & Project Scope</Text>
      <Text style={styles.paragraph}>
        {client.project_description || 'Custom full-stack web build aiming to generate leads, improve business trust, and render fast loading times.'}
      </Text>

      <Text style={styles.h2}>4. Assets Checklist Required from Client</Text>
      <View style={styles.bulletList}>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>[ ]</Text>
          <Text style={styles.bulletText}>High-resolution vector logo files (.SVG or transparent .PNG format).</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>[ ]</Text>
          <Text style={styles.bulletText}>Original office photos, clinic photos, or staff bios text copy.</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>[ ]</Text>
          <Text style={styles.bulletText}>Domain name registrar login credentials (or nameserver mappings).</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>[ ]</Text>
          <Text style={styles.bulletText}>Social media profile links (Facebook, Instagram, LinkedIn).</Text>
        </View>
      </View>

      <PDFFooter pageNum={1} />
    </Page>
  </Document>
);

// ==========================================
// 6. INVOICE PDF
// ==========================================
export const InvoicePDF = ({ invoice, client }: { invoice: any; client: any }) => {
  const breakdown = Array.isArray(invoice.services_breakdown) 
    ? invoice.services_breakdown 
    : [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PDFHeader docTitle="Invoice / Billing Statement" />

        {/* Invoice Metadata */}
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <View>
            <Text style={{ fontSize: 9, color: colors.lightText, textTransform: 'uppercase' }}>Billed To:</Text>
            <Text style={{ fontSize: 11, fontFamily: 'Helvetica-Bold', color: colors.accent }}>{client.name}</Text>
            <Text style={{ marginTop: 2 }}>{client.business_name}</Text>
            <Text>{client.address || 'Address TBD'}</Text>
            <Text>{client.email} | {client.phone}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 9, color: colors.lightText, textTransform: 'uppercase' }}>Invoice Details:</Text>
            <Text style={{ fontSize: 11, fontFamily: 'Helvetica-Bold', color: colors.primaryDark }}>{invoice.invoice_number}</Text>
            <Text style={{ marginTop: 2 }}>Issue Date: {invoice.issue_date}</Text>
            <Text>Due Date: {invoice.due_date}</Text>
            <Text style={{ fontFamily: 'Helvetica-Bold', color: invoice.status === 'Paid' ? colors.primary : '#ea580c' }}>
              Status: {invoice.status.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text style={styles.h2}>Billing Breakdown</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.col1}>Service Description</Text>
            <Text style={styles.col2}>Qty</Text>
            <Text style={styles.col3}>Rate (₹)</Text>
            <Text style={styles.col4}>Amount (₹)</Text>
          </View>

          {breakdown.length === 0 ? (
            <View style={styles.tableRow}>
              <Text style={styles.col1}>{invoice.package_selected || 'Custom Web Development Services'}</Text>
              <Text style={styles.col2}>1</Text>
              <Text style={styles.col3}>{invoice.amount}</Text>
              <Text style={styles.col4}>{invoice.amount}</Text>
            </View>
          ) : (
            breakdown.map((item: any, i: number) => (
              <View key={i} style={i % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
                <Text style={styles.col1}>{item.description}</Text>
                <Text style={styles.col2}>{item.qty}</Text>
                <Text style={styles.col3}>{item.rate}</Text>
                <Text style={styles.col4}>{item.amount}</Text>
              </View>
            ))
          )}

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Due:</Text>
            <Text style={styles.totalValue}>₹{invoice.total_amount}</Text>
          </View>
        </View>

        <Text style={styles.h2}>Payment Instructions</Text>
        <Text style={styles.paragraph}>
          {invoice.payment_instructions || 'Please complete payment via bank transfer or UPI within 7 business days. Bank account: State Bank of India, A/C: 1234567890, IFSC: SBIN0000123. UPI: pixelstack@upi'}
        </Text>

        <View style={styles.signatureRow}>
          <View style={styles.signatureBlock}>
            <Text style={styles.signatureTitle}>Debanjan Amin</Text>
            <Text style={styles.signatureSubText}>Authorized Signatory, PixelStack</Text>
          </View>
        </View>

        <PDFFooter pageNum={1} />
      </Page>
    </Document>
  );
};

// ==========================================
// 7. PAYMENT RECEIPT PDF
// ==========================================
export const ReceiptPDF = ({ invoice, client }: { invoice: any; client: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader docTitle="Payment Receipt" />

      <Text style={styles.h1}>Official Payment Receipt</Text>
      <Text style={styles.paragraph}>
        Thank you for your payment. This document serves as official confirmation that payment has been received in full for the referenced invoice.
      </Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Receipt Number</Text></View>
          <View style={{ flex: 2 }}><Text>REC-{invoice.invoice_number}</Text></View>
        </View>
        <View style={styles.tableRowAlt}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Invoice Reference</Text></View>
          <View style={{ flex: 2 }}><Text>{invoice.invoice_number}</Text></View>
        </View>
        <View style={styles.tableRow}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Client Details</Text></View>
          <View style={{ flex: 2 }}><Text>{client.name} | {client.business_name}</Text></View>
        </View>
        <View style={styles.tableRowAlt}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Payment Date</Text></View>
          <View style={{ flex: 2 }}><Text>{new Date().toLocaleDateString()}</Text></View>
        </View>
        <View style={styles.tableRow}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Amount Received</Text></View>
          <View style={{ flex: 2, color: colors.primaryDark, fontFamily: 'Helvetica-Bold' }}>
            <Text>₹{invoice.total_amount}</Text>
          </View>
        </View>
        <View style={styles.tableRowAlt}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Payment Method</Text></View>
          <View style={{ flex: 2 }}><Text>UPI / Bank Transfer</Text></View>
        </View>
      </View>

      <Text style={styles.h2}>Notes</Text>
      <Text style={styles.paragraph}>
        The project status has been updated to Paid. Revisions or handover schedules will proceed in accordance with the contract terms.
      </Text>

      <View style={styles.signatureRow}>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>Debanjan Amin</Text>
          <Text style={styles.signatureSubText}>Accounts Lead, PixelStack</Text>
        </View>
      </View>

      <PDFFooter pageNum={1} />
    </Page>
  </Document>
);

// ==========================================
// 8. WEBSITE HANDOVER PDF
// ==========================================
export const HandoverPDF = ({ client }: { client: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader docTitle="Project Handover & Credentials log" />

      <Text style={styles.h1}>Website Handover Certificate</Text>
      <Text style={styles.paragraph}>
        This document marks the official completion and successful handover of the custom web project for **{client.business_name}** ({client.name}). All code, domains, and administrative rights are transferred with this signoff.
      </Text>

      <Text style={styles.h2}>1. Deployment Coordinates</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Production URL</Text></View>
          <View style={{ flex: 2, color: colors.primaryDark }}><Text>https://{client.business_name?.toLowerCase().replace(/[^a-z0-9]/g, '') || 'client'}.pixelstack.agency</Text></View>
        </View>
        <View style={styles.tableRowAlt}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Tech Stack</Text></View>
          <View style={{ flex: 2 }}><Text>Next.js 15, Tailwind CSS, TypeScript, Server Actions</Text></View>
        </View>
        <View style={styles.tableRow}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Hosting Provider</Text></View>
          <View style={{ flex: 2 }}><Text>Edge Server Network (Vercel Production Node)</Text></View>
        </View>
      </View>

      <Text style={styles.h2}>2. Admin Logins & Access Credentials</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>System Administrative logins</Text>
        <Text style={styles.cardText}>Admin Panel URL: https://example.com/admin</Text>
        <Text style={styles.cardText}>Default Admin Username: admin@{client.business_name?.toLowerCase().replace(/[^a-z0-9]/g, '') || 'client'}.com</Text>
        <Text style={styles.cardText}>Default Password: PixelHandover2026_Secure</Text>
        <Text style={{ fontSize: 8, color: '#dc2626', marginTop: 4, fontFamily: 'Helvetica-Bold' }}>
          *IMPORTANT: Please change this default password immediately upon your first login to secure your system.
        </Text>
      </View>

      <Text style={styles.h2}>3. SLA Support & Maintenance</Text>
      <Text style={styles.paragraph}>
        Your contract includes **{client.selected_package === 'Starter Package' ? '7 days' : client.selected_package === 'Growth Package' ? '15 days' : '30 days'}** of post-launch SLA support. For updates, emergency patches, or content additions post support, billing proceeds at ₹1,000 per page, or via our monthly maintenance contract (₹2,000/month).
      </Text>

      <View style={styles.signatureRow}>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>Debanjan Amin</Text>
          <Text style={styles.signatureSubText}>Technical Co-Founder, PixelStack</Text>
        </View>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>{client.name}</Text>
          <Text style={styles.signatureSubText}>Client Signoff / Approved</Text>
        </View>
      </View>

      <PDFFooter pageNum={1} />
    </Page>
  </Document>
);

// ==========================================
// 9. TESTIMONIAL REQUEST PDF
// ==========================================
export const TestimonialPDF = ({ client }: { client: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader docTitle="Client Testimonial Feedback Form" />

      <Text style={styles.h1}>Client Review & Testimonial</Text>
      <Text style={styles.paragraph}>
        We loved collaborating with you on your new web portal! To help us continuously improve and showcase our capabilities, please share your experience working with Debanjan Amin and Banashree Das.
      </Text>

      <Text style={styles.h2}>1. Performance Feedback Questions</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Rating (1 - 5 Stars)</Text></View>
          <View style={{ flex: 2 }}><Text>[ ] 1   [ ] 2   [ ] 3   [ ] 4   [ ] 5 Stars</Text></View>
        </View>
        <View style={styles.tableRowAlt}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>Quality of UI Design</Text></View>
          <View style={{ flex: 2 }}><Text>[ ] Poor  [ ] Satisfactory  [ ] Excellent</Text></View>
        </View>
        <View style={styles.tableRow}>
          <View style={{ flex: 1, fontFamily: 'Helvetica-Bold' }}><Text>System Load Speed</Text></View>
          <View style={{ flex: 2 }}><Text>[ ] Fast  [ ] Standard  [ ] Sub-500ms Instant</Text></View>
        </View>
      </View>

      <Text style={styles.h2}>2. Your Written Review</Text>
      <View style={{ height: 100, border: '1 solid ' + colors.border, borderRadius: 6, padding: 8, marginBottom: 15 }}>
        <Text style={{ color: colors.lightText }}>Share how the new website has impacted your business leads, customer trust, or workflow...</Text>
      </View>

      <Text style={styles.h2}>3. Consents & Authorizations</Text>
      <View style={styles.bulletList}>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>[ ]</Text>
          <Text style={styles.bulletText}>I authorize PixelStack Studio to publish this testimonial review, including my business logo and name, on their website and branding brochures.</Text>
        </View>
      </View>

      <View style={styles.signatureRow}>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>{client.name}</Text>
          <Text style={styles.signatureSubText}>Client Signatory</Text>
        </View>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>{new Date().toLocaleDateString()}</Text>
          <Text style={styles.signatureSubText}>Date</Text>
        </View>
      </View>

      <PDFFooter pageNum={1} />
    </Page>
  </Document>
);
