#!/bin/bash
# Sets the data worker's secrets from ~/.config/livecoach/.env (never printed, never committed).
# Run once: bash data-worker/set-secrets.sh
set -e
cd "$(dirname "$0")"
set -a; source ~/.config/livecoach/.env; set +a
if [ -z "$LC_APP_KEY" ]; then
  LC_APP_KEY=$(python3 -c "import secrets;print(secrets.token_urlsafe(24))")
  printf '\nLC_APP_KEY=%s\n' "$LC_APP_KEY" >> ~/.config/livecoach/.env
  echo "created LC_APP_KEY in ~/.config/livecoach/.env"
fi
for s in TOCHAT_TENANT TOCHAT_API_KEY FIREBERRY_TOKEN; do printf '%s' "${!s}" | npx wrangler secret put "$s"; done
printf '%s' "$LC_APP_KEY" | npx wrangler secret put APP_KEY
echo
echo "✅ done. Paste this as 'מפתח נתונים' in the manager board and in LiveCoach settings:"
echo "$LC_APP_KEY"
