#!/usr/bin/env bash
# ==============================================================================
# D&B Digitals (dnbdigitals.in) — 1-Command Deployment Script for Hostinger VPS
# ==============================================================================
set -e

echo "🚀 [1/5] Pulling latest updates from Git..."
git pull origin main

echo "📦 [2/5] Installing dependencies..."
npm install --legacy-peer-deps

echo "🏗️ [3/5] Building Next.js production bundle..."
npm run build

echo "📁 [4/5] Syncing public and static assets for standalone server..."
if [ -d ".next/standalone" ]; then
  mkdir -p .next/standalone/.next
  cp -r public .next/standalone/ 2>/dev/null || true
  cp -r .next/static .next/standalone/.next/ 2>/dev/null || true
fi

echo "🔄 [5/5] Reloading PM2 process..."
if command -v pm2 >/dev/null 2>&1; then
  pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js
  pm2 save
  echo "✅ Application restarted successfully with PM2!"
else
  echo "⚠️ PM2 not found globally. Starting with node server.js..."
  echo "Tip: Run 'npm install -g pm2' for zero-downtime auto-restarting."
fi

echo "✨ Deployment complete! Visit https://dnbdigitals.in"
