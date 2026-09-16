#!/bin/bash
# One-time: gives the data worker the Supabase publishable key (same key as in the manager board, ⚙️ חיבור).
cd "$(dirname "$0")"
echo ""
echo "הדבק כאן את המפתח של סופאבייס (מתחיל ב-sb_publishable_ או ב-eyJ) ולחץ Enter:"
while true; do
  read -r KEY
  KEY="$(printf '%s' "$KEY" | tr -d '[:space:]')"
  case "$KEY" in
    sb_publishable_*|eyJ*) break ;;
    *) echo "❌ זה לא מפתח של סופאבייס (התקבל: ${KEY:0:20}…). העתק מהבורד: ⚙️ חיבור → Supabase Publishable key → ⌘A ⌘C, והדבק כאן:" ;;
  esac
done
printf '%s' "$KEY" | npx wrangler secret put SUPABASE_KEY
echo "✅ נשמר (${#KEY} תווים). בדיקה:"
curl -s "https://livecoach-data.aviv1988.workers.dev/health"
echo ""
