import nodemailer from 'nodemailer';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnbdigitals.in';

// Gmail SMTP transporter using App Password
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER || '',
    pass: (process.env.SMTP_PASS || '').replace(/\s+/g, ''),
  },
});

interface LeadEmailData {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
}

/**
 * Send lead notification email to D&B Digitals team.
 * Fails silently (logged) so form submission isn't blocked.
 */
export async function sendLeadNotification(data: LeadEmailData) {
  const notifyEmail = process.env.NOTIFY_EMAIL || 'dabdigitalofficials@gmail.com';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0a0a0a; color: #e4e4e7; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 32px 24px; }
    .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 24px 28px; border-radius: 16px 16px 0 0; }
    .header h1 { color: #000; font-size: 20px; font-weight: 800; margin: 0 0 4px; letter-spacing: -0.3px; }
    .header p { color: rgba(0,0,0,0.7); font-size: 13px; margin: 0; }
    .body { background: #18181b; border: 1px solid #27272a; border-top: none; border-radius: 0 0 16px 16px; padding: 28px; }
    .field { margin-bottom: 18px; }
    .field-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #10b981; margin-bottom: 6px; }
    .field-value { font-size: 14px; color: #fafafa; line-height: 1.6; }
    .message-box { background: #0a0a0a; border: 1px solid #27272a; border-radius: 12px; padding: 16px; margin-top: 6px; }
    .footer { text-align: center; padding: 20px; font-size: 11px; color: #71717a; }
    .badge { display: inline-block; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); color: #10b981; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 999px; text-transform: uppercase; letter-spacing: 1px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New Lead Inquiry</h1>
      <p>D&B Digitals — ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="field-label">Full Name</div>
        <div class="field-value">${data.name}</div>
      </div>
      ${data.businessName ? `
      <div class="field">
        <div class="field-label">Business Name</div>
        <div class="field-value">${data.businessName}</div>
      </div>` : ''}
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${data.email}" style="color:#10b981;text-decoration:none;">${data.email}</a></div>
      </div>
      ${data.phone ? `
      <div class="field">
        <div class="field-label">Phone</div>
        <div class="field-value"><a href="tel:${data.phone}" style="color:#10b981;text-decoration:none;">${data.phone}</a></div>
      </div>` : ''}
      ${data.projectType ? `
      <div class="field">
        <div class="field-label">Project Type</div>
        <div class="field-value"><span class="badge">${data.projectType}</span></div>
      </div>` : ''}
      ${data.budgetRange ? `
      <div class="field">
        <div class="field-label">Budget Range</div>
        <div class="field-value">${data.budgetRange}</div>
      </div>` : ''}
      ${data.message ? `
      <div class="field">
        <div class="field-label">Project Description</div>
        <div class="message-box">
          <div class="field-value">${data.message.replace(/\n/g, '<br>')}</div>
        </div>
      </div>` : ''}
    </div>
    <div class="footer">
      This lead was submitted via the D&B Digitals contact form.<br>
      Reply directly to this email to respond to the client.
    </div>
  </div>
</body>
</html>`;

  try {
    await transporter.sendMail({
      from: `"D&B Digitals" <${process.env.SMTP_USER}>`,
      to: notifyEmail,
      replyTo: data.email,
      subject: `🔔 New Lead: ${data.name}${data.businessName ? ` — ${data.businessName}` : ''}`,
      html,
    });
    console.log('[Mailer] Lead notification sent to:', notifyEmail);
  } catch (err) {
    console.error('[Mailer] Failed to send lead notification:', err);
  }
}

/**
 * Send confirmation email to the client who submitted the form.
 * DPDP Act compliant — includes data processing notice and erasure rights.
 */
export async function sendClientConfirmation(data: LeadEmailData) {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fafafa; color: #18181b; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 32px 24px; }
    .header { background: #000; padding: 28px; border-radius: 16px 16px 0 0; text-align: center; }
    .header h1 { color: #10b981; font-size: 22px; font-weight: 800; margin: 0 0 4px; }
    .header p { color: #a1a1aa; font-size: 12px; margin: 0; }
    .body { background: #fff; border: 1px solid #e4e4e7; border-top: none; padding: 28px; }
    .body h2 { font-size: 18px; font-weight: 700; color: #18181b; margin: 0 0 12px; }
    .body p { font-size: 14px; line-height: 1.7; color: #52525b; margin: 0 0 16px; }
    .highlight { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 16px; margin: 16px 0; }
    .highlight p { font-size: 13px; color: #166534; margin: 0; }
    .footer { background: #fafafa; border: 1px solid #e4e4e7; border-top: none; border-radius: 0 0 16px 16px; padding: 20px 28px; }
    .footer p { font-size: 11px; color: #a1a1aa; line-height: 1.6; margin: 0 0 8px; }
    .footer a { color: #10b981; text-decoration: none; }
    .cta { display: inline-block; background: #10b981; color: #000; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 999px; text-decoration: none; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>D&B Digitals</h1>
      <p>Premium Web Design & Digital Growth Agency</p>
    </div>
    <div class="body">
      <h2>Hi ${data.name.split(' ')[0]}, we received your inquiry! 🎉</h2>
      <p>
        Thank you for reaching out to D&B Digitals. We've received your project details and our founding team will personally review your inquiry.
      </p>
      <div class="highlight">
        <p>
          ⏱ <strong>Expected response time:</strong> Within 2–4 hours during business hours (IST 10 AM – 8 PM). For urgent requests, reach us on WhatsApp at <a href="https://wa.me/918918186998" style="color:#166534;font-weight:600;">+91 89181 86998</a>.
        </p>
      </div>
      <p>
        In the meantime, feel free to explore our portfolio and recent case studies at <a href="${SITE_URL}/portfolio" style="color:#10b981;font-weight:600;">our website</a>.
      </p>
      <p style="text-align:center;margin-top:24px;">
        <a href="https://wa.me/918918186998" class="cta">Chat on WhatsApp →</a>
      </p>
    </div>
    <div class="footer">
      <p>
        <strong>Data Protection Notice (DPDP Act, 2023):</strong> Your personal data (name, email, phone, and project details) is collected solely to respond to your inquiry and provide you with a project proposal. Your data is stored securely and will be retained for up to 24 months. We do not share your data with any third parties.
      </p>
      <p>
        You have the right to access, correct, or request deletion of your personal data at any time by emailing <a href="mailto:dabdigitalofficials@gmail.com">dabdigitalofficials@gmail.com</a> with the subject line "Data Deletion Request". View our full <a href="${SITE_URL}/privacy">Privacy Policy</a>.
      </p>
      <p style="margin-top:12px;color:#d4d4d8;">
        © ${new Date().getFullYear()} D&B Digitals. Siliguri, West Bengal, India.
      </p>
    </div>
  </div>
</body>
</html>`;

  try {
    await transporter.sendMail({
      from: `"D&B Digitals" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `✅ We received your inquiry, ${data.name.split(' ')[0]}! — D&B Digitals`,
      html,
    });
    console.log('[Mailer] Client confirmation sent to:', data.email);
  } catch (err) {
    console.error('[Mailer] Failed to send client confirmation:', err);
  }
}
