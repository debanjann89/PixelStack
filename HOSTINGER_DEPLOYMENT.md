# 🚀 Hostinger Deployment Guide for D&B Digitals (`dnbdigitals.in`)

This repository is pre-configured for zero-downtime deployment on **Hostinger VPS** and **Hostinger Cloud / Web Hosting (Node.js hPanel)**.

---

## 📋 Pre-Deployment Checklist

- **Official Domain:** `https://dnbdigitals.in`
- **Node.js Target Version:** 20.x or 18.x LTS
- **Production Server Entrypoint:** `server.js` (or `ecosystem.config.js` via PM2)
- **Email System:** Gmail SMTP with App Password (`bjrlehsipjendmqt`)
- **Database:** Supabase PostgreSQL

---

## 🌐 DNS Setup for `dnbdigitals.in`

In your Hostinger or Domain Registrar DNS Zone:

| Type | Name | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `<Your_Hostinger_Server_IP>` | Auto / 14400 |
| **CNAME** | `www` | `dnbdigitals.in` | Auto / 14400 |

---

## Option 1: Deploy on Hostinger VPS (Ubuntu 22.04 / 24.04) — Recommended ⚡

### Step 1: Connect to your Hostinger VPS
```bash
ssh root@<YOUR_VPS_IP>
```

### Step 2: One-time Server Setup (Node 20, PM2, Nginx)
```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git nginx

# Install PM2 globally
sudo npm install -g pm2
```

### Step 3: Clone the Repository
```bash
# Navigate to web root
mkdir -p /var/www/dnbdigitals
cd /var/www/dnbdigitals

# Clone repository
git clone https://github.com/debanjann89/PixelStack.git .
```

### Step 4: Setup Environment Variables
```bash
# Copy production env template
cp .env.example .env.production
cp .env.example .env.local

# If you need to edit:
nano .env.local
```

Make sure `.env.local` contains:
```env
NEXT_PUBLIC_SITE_URL=https://dnbdigitals.in
NEXT_PUBLIC_SUPABASE_URL=https://rxazsxnxpumjyscqzkzq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4YXpzeG54cHVtanlzY3F6a3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NjQ3MjgsImV4cCI6MjA5NzQ0MDcyOH0.W_t6hmxBYXinxWoZTE8WzXT92icq2_vIchvXxyPZtCc
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=dabdigitalofficials@gmail.com
SMTP_PASS=bjrlehsipjendmqt
NOTIFY_EMAIL=dabdigitalofficials@gmail.com
NODE_ENV=production
PORT=3000
```

### Step 5: Run Automated Deployment
```bash
chmod +x deploy.sh
./deploy.sh
```

### Step 6: Configure Nginx & Free SSL (Let's Encrypt)
```bash
# Copy the included Nginx config
sudo cp nginx.dnbdigitals.in.conf /etc/nginx/sites-available/dnbdigitals.in
sudo ln -s /etc/nginx/sites-available/dnbdigitals.in /etc/nginx/sites-enabled/

# Test and reload Nginx
sudo nginx -t
sudo systemctl reload nginx

# Install Free SSL Certificate via Certbot
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d dnbdigitals.in -d www.dnbdigitals.in
```

### Step 7: Ensure PM2 starts on server boot
```bash
pm2 startup
# (Run the command displayed in your terminal, then:)
pm2 save
```

Whenever you push new code to GitHub in the future, simply run:
```bash
cd /var/www/dnbdigitals && ./deploy.sh
```

---

## Option 2: Deploy on Hostinger Web / Cloud Hosting (hPanel Node.js) ☁️

If your Hostinger plan includes **Node.js** in hPanel:

1. Log in to **Hostinger hPanel** → Go to **Websites** → Select `dnbdigitals.in`.
2. In the sidebar, search for **Node.js**.
3. Configure the settings:
   - **Node.js Version:** `20.x` (or `18.x`)
   - **Application Mode:** `Production`
   - **Application Root:** `/public_html` (or your uploaded subfolder)
   - **Application Startup File:** `server.js`
4. Upload project files (via Git integration, FTP, or File Manager).
5. Add **Environment Variables** in hPanel:
   - `NEXT_PUBLIC_SITE_URL` = `https://dnbdigitals.in`
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://rxazsxnxpumjyscqzkzq.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `<YOUR_KEY>`
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `dabdigitalofficials@gmail.com`
   - `SMTP_PASS` = `bjrlehsipjendmqt`
   - `NOTIFY_EMAIL` = `dabdigitalofficials@gmail.com`
6. Click **Run NPM Install**, then in the SSH/Terminal console run:
   ```bash
   npm run build
   ```
7. Click **Start Application**.

---

## 📬 Gmail Notification Troubleshooting

If form emails fail to deliver:
1. Verify that **2-Step Verification** is enabled on the Google Account used in `SMTP_USER`.
2. Confirm the 16-character App Password matches the exact Google account (if generated under personal email or agency email, ensure `SMTP_USER` matches that account).
3. Check the server logs with:
   ```bash
   pm2 logs dnbdigitals
   ```
