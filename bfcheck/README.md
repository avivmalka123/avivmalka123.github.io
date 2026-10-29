# bfcheck: Black Friday readiness quiz ("בדיקת מוכנות לבלאק פריידיי")

Lead-capture quiz for Israeli store owners. 11 questions (one per screen), then first name, phone, optional email and consent, then a dark result screen with an isometric "growth map" of 9 engines, a 7-day plan, a Ping AI card, WhatsApp and training CTAs, and a 1080×1920 story image.
Planned page: **www.avivmalka.com/bf-check**. Brand on the page: "אביב מלכה · מועדון האיקומרס". Ping AI is only a recommended tool; Aviv is never shown as its owner.

## Files
| Path | What |
|---|---|
| `bfcheck/src/bf.html` | Source and standalone preview (CSS, markup, all page logic) |
| `bfcheck/src/common.js` | Helpers adapted from `pingf/src/common.js`: API base, UTM/fbclid capture (`bf_utm`), pixel (`trackSingle` to 2210072352882860), `/api/event` tracker |
| `bfcheck/build.py` | Builds `bfcheck/bf.js`: scopes CSS under `#pf-root`, injects fonts, CSS and markup into `<div id="pf-root">`, hides the Kajabi header and footer |
| `bfcheck/bf.js` | Built bundle that Kajabi loads |
| `~/אקדא/ping-funnel/migrations/0002_bf_quiz.sql` | `bf_quiz` table |
| `~/אקדא/ping-funnel/src/index.js` | `POST /api/bf`, `GET /admin/api/bf`, `POST /admin/api/bf/<id>/delete`, BF events in `/api/event` |
| `~/אקדא/ping-funnel/src/admin.html` | New "בדיקת מוכנות לבלאק פריידיי" table on /admin |

## Flow
1. Intro, then 11 questions. A single-choice tap advances on its own. The channels question has "המשך". There is a back button, and browser back also works. Answers are kept in localStorage `bf_ans`, so a refresh resumes the quiz.
2. Lead form. It shows the user's own map, blurred. First name and Israeli mobile (05X…) are required, email is optional, and the consent box is required (`CONSENT_REQUIRED` in bf.html). It also has a honeypot field and a privacy modal.
3. `POST /api/bf` with a client submission id `sid` and `event_id`. On success the pixel fires `Lead` with that `event_id`. On a network error or 5xx the pixel still fires `Lead`, the body is saved to `bf_pending`, one retry runs after 5 s, and another runs on the next visit. The `sid` makes the server treat a retry as a duplicate: no second row and no second alert. **The result is never blocked.**
4. Result, kept in `bf_res`, so a revisit shows it again:
   - ring X/9 and the "החנות היום / כשהכל דולק ✨" toggle, with rise, sweep and glow animations that respect prefers-reduced-motion
   - engine bottom sheet: what it does, why it matters before Black Friday, a WhatsApp-style example, and the status for this store
   - 7-day plan ordered cart → post → winback → welcome → wa → bundles → reviews → daily → list. With more than 7 items, two share a day; with fewer, Black Friday prep days fill the rest.
   - Ping card: Shopify → apps.shopify.com/ping-ai?utm_source=bfcheck…; other platforms → the free training
   - training and WhatsApp CTAs (prefilled "…ויצא לי X/9. אשמח לעזרה עם …")
   - share: `navigator.share` with the PNG when the device supports it, otherwise a download

Engines: on / partial / off. The score counts "on" only. The server recomputes the engines from the answer codes, so it does not trust the client. Option codes must match `BF_Q` in index.js and `Q`/`STATE` in bf.html.

## Pixel and events
- Browser only: `PageView`, `BFQuizAnswer`.
- Browser plus server log (and CAPI once a token is set): `BFQuizStart`, `BFResultView`, `BFPingClick`, `BFTrainingClick`, `BFWhatsAppClick`, `BFShare`.
- All of these carry `content_name: 'bf-quiz'` and use `trackSingleCustom`, except `PageView`, which uses `trackSingle`.
- `Lead`: `fbq('trackSingle','2210072352882860','Lead',{content_name:'bf-quiz',content_category:'lead-magnet'},{eventID})`. The same `event_id` is stored in `bf_quiz.event_id` and sent by the worker to CAPI as `Lead`, through the existing `capi()`, so the two deduplicate. CAPI stays off until `META_CAPI_TOKEN` is set. In the `events` table the server row is named `BFLead`, so the training funnel's Lead counts stay clean.

## Worker endpoint
`POST /api/bf` takes this JSON: `{sid, name, phone, email?, consent, privacy_ack:true, answers:{platform, orders, cart, welcome, post, list, winback, bundles, reviews, channels[], daily}, hp, elapsed, event_id, vid, utm:{…}, fbclid, fbc, fbp, referrer, landing_url}`.
- **Rate limit:** 6 per IP per 10 min, then 429.
- **Spam:** a filled honeypot or `elapsed` under 8 s gets `{ok:true, spam:true}` and nothing is stored.
- **Validation:** returns 422 with `fields`.
- **Retry:** a `sid` that already exists returns `{ok, id, on_count, event_id, dup:true}`.
- **Row:** a `bf_quiz` row with `funnel='bf-quiz'`, the UTM fields, `lead_id` (an existing training lead with the same phone or email; no lead row is created) and `alert_state`.
- **Alert:** an `alerts` row `<id>:bf` (kind `bf`) is delivered at once to `MAKE_HOOK` with `source:'bf-quiz'`, `funnel:'bf-quiz'`, `on_count`, `utm_*` and a Hebrew `summary`. Retries use the existing backoff in the Tick alarm (cron). Admin retry: `/admin/api/alert/<id>:bf/retry`.
- **Deletion and retention:** deleting a training lead also deletes its linked bf rows. Retention is 730 days, the same as leads.

## Local test
```bash
# isolated copy, so the real MAKE_HOOK in .dev.vars is never called
D=$TMPDIR/bfdev; mkdir -p $D && cp -R ~/אקדא/ping-funnel/{src,migrations,wrangler.toml} $D/
printf 'TOKEN_SECRET=local\nADMIN_PW=localadmin\nIP_SALT=x\nMAKE_HOOK=http://127.0.0.1:8799/hook\n' > $D/.dev.vars
python3 hook.py $D/hook.log &                                   # fake Make hook on 127.0.0.1:8799, logs bodies
cd $D && npx wrangler d1 migrations apply ping-funnel --local && npx wrangler dev --port 8787 --test-scheduled
cd ~/projects/avivmalka123.github.io && python3 -m http.server 8855 --bind 127.0.0.1
open 'http://127.0.0.1:8855/bfcheck/src/bf.html?api=http://127.0.0.1:8787&utm_source=fb&utm_campaign=test'
npx wrangler d1 execute ping-funnel --local --command "SELECT id,name,phone,on_count,utm_source,event_id,alert_state FROM bf_quiz"
curl http://127.0.0.1:8787/__scheduled                         # runs the cron (alert retries)
python3 bfcheck/build.py && node --check bfcheck/bf.js
```
`?api=` only works on localhost; everywhere else the page talks to https://ping-funnel.aviv1988.workers.dev. Admin runs on the worker at `/admin` (Basic auth).

## Production deploy (in this order; nothing here has been run)
1. **Worker** (`~/אקדא/ping-funnel`):
   ```bash
   npx wrangler d1 migrations apply ping-funnel --remote   # applies only 0002_bf_quiz.sql (creates bf_quiz)
   npx wrangler deploy
   curl https://ping-funnel.aviv1988.workers.dev/health
   ```
   Allowed origins already include www.avivmalka.com and avivmalka123.github.io. No new secrets are needed. Alerts go to the current `MAKE_HOOK` (Make 10065260 → the "לידים פינג - הדרכה" WhatsApp group). For a separate group, point a new Make scenario at a new hook first. The scenario's filter "יש summary" already passes these alerts.
2. **Pages**: `python3 bfcheck/build.py && node --check bfcheck/bf.js`, then commit `bfcheck/` and push to `avivmalka123/avivmalka123.github.io` (main). GitHub Pages caches for about 10 min.
3. **Kajabi**: create page `bf-check` (clone ping-training as before). In the hero Custom Code block:
   ```html
   <div id="pf-root"></div><script src="https://avivmalka123.github.io/bfcheck/bf.js?v=1"></script>
   ```
   This is the same base URL the live /ping-training uses (`https://avivmalka123.github.io/pingf/lp.js?v=2`). Bump `?v=` after each rebuild.
4. **Real test:** submit one lead from a phone. Check the WhatsApp alert, the row in /admin, and the `Lead` event in Events Manager (Test Events).
