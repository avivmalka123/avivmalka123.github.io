#!/bin/bash
# One-time: gives the data worker an Anthropic API key so it can prepare every rep's morning screen and day review
# at night (21:30) and refresh at 06:00, without anyone waiting in the morning. Same key as in the apps.
cd "$(dirname "$0")"
echo ""
echo "הדבק כאן את מפתח Anthropic (מתחיל ב-sk-ant-) ולחץ Enter:"
while true; do
  read -r KEY
  KEY="$(printf '%s' "$KEY" | tr -d '[:space:]')"
  case "$KEY" in sk-ant-*) break ;; *) echo "❌ זה לא מפתח Anthropic (התקבל: ${KEY:0:12}…). העתק מהבורד: ⚙️ חיבור → Anthropic API Key, והדבק כאן:" ;; esac
done
printf '%s' "$KEY" | npx wrangler secret put ANTHROPIC_API_KEY
echo "✅ נשמר. מפעיל הכנה ראשונה לכל הנציגים (יכול לקחת כמה דקות)…"
set -a; source ~/.config/livecoach/.env; set +a
curl -s -H "x-app-key: $LC_APP_KEY" "https://livecoach-data.aviv1988.workers.dev/prepare?rep=all&what=review,morning" | head -c 1500
echo ""
