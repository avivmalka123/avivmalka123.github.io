#!/bin/bash
# Weekly refresh of the LiveCoach Meta audiences (run by hand or from cron, Sunday 08:00):
#   0 8 * * 0  /bin/bash "/Users/avivmalka/אקדא/audiences/weekly.sh" >> "/Users/avivmalka/אקדא/audiences/weekly.log" 2>&1
# 1) pulls Fireberry accounts + ToChat open/closed leads + call summaries, 2) scores, 3) replaces the members of the 6 audiences in Meta, 4) Telegram summary.
set -e
cd "$(dirname "$0")"
set -a; source ~/.config/livecoach/.env; set +a
A=$(printf '%s:%s' "$TOCHAT_TENANT" "$TOCHAT_API_KEY" | base64)
python3 pull.py "$A" "$TOCHAT_BASE" "$FIREBERRY_TOKEN"
python3 score.py
python3 sync_meta.py --telegram
echo "$(date '+%F %T') weekly audiences done"
