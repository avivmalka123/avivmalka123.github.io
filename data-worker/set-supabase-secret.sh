#!/bin/bash
# One-time: gives the data worker the Supabase publishable key so ToChat webhook events are stored in Supabase
# (Cloudflare KV free tier allows only 1,000 writes/day). Paste the same key you entered in the manager board (⚙️ חיבור).
cd "$(dirname "$0")"
read -r -p "Supabase publishable key (sb_publishable_...): " KEY
printf '%s' "$KEY" | npx wrangler secret put SUPABASE_KEY
echo "✅ done. The worker now stores webhook state in Supabase (run supabase.sql first for the tc_* tables)."
