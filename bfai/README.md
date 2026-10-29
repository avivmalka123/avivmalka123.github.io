# bfai: Black Friday AI campaign builder ("עובד AI לבלאק פריידיי")

Project #2 of the holiday lead-magnet series (after `bfcheck/`). The store owner answers 9 short steps, leaves first name and phone, and a Gemini-backed "AI worker" builds a personal Black Friday plan in about 20 seconds:
- calendar 7.11 to 3.12
- 10 ad previews (feed and story)
- 5 UGC scripts
- 5 bundles with a margin check
- 7 emails, 5 SMS and 5 WhatsApp messages
- 5 automations
- a "what it could be worth" calculator
- a Ping AI CTA

Planned page: **www.avivmalka.com/bf-ai**. Brand on the page: "אביב מלכה · מועדון האיקומרס". Ping AI is only a recommended tool; Aviv is never shown as its owner.

## Files
| Path | What |
|---|---|
| `bfai/src/bfai.html` | Source and standalone preview: CSS, markup, wizard, generation screen, plan page, and all money math (bundles, calculator) |
| `bfai/src/common.js` | Copy of `bfcheck/src/common.js` with its own keys (`bfai_utm`, `bfai_vid`, `bfai_fbc`), `content_name:'bf-ai'`, and a long-request mode for generation calls |
| `bfai/build.py` | Builds `bfai/bfai.js` the same way as bfcheck: CSS scoped under `#pf-root`, Kajabi header and footer hidden |
| `bfai/bfai.js` | Built bundle that Kajabi loads |
| `~/אקדא/ping-funnel/migrations/0003_bf_ai.sql` | `bf_ai` table |
| `~/אקדא/ping-funnel/src/bfai.js` | Answer validation, Gemini prompts and schemas, sanitizer, handlers, cron fallback, admin list |
| `~/אקדא/ping-funnel/src/index.js` | Routes, events allow-list, alert mirror for kind `bfai`, cron and retention hooks, Tick `?at=` early-arm, admin routes. The existing endpoints are unchanged. |
| `~/אקדא/ping-funnel/src/admin.html` | New "עובד AI לבלאק פריידיי (bf-ai)" table on /admin |

## Flow
1. **Hero.** It shows the countdown chip ("עוד N ימים לבלאק פריידיי · 27.11"), 3 "what you get" items and a gold CTA, which fires `BFAIStart`.
2. **Wizard, one step per screen:**
   1. store name
   2. platform
   3. category, plus optional free text
   4. 1–5 products: name, price, and cost in ₪ or margin % (toggle, optional)
   5. audience and ages
   6. tone
   7. max discount (10–30%)
   8. channels
   9. monthly visitors

   Single-choice steps advance on their own. Back works, both the button and browser back. Answers are kept in localStorage `bfai_ans`, so a refresh resumes the wizard.
3. **Lead form.** First name and Israeli mobile are required. Email is optional. Marketing consent is **optional**, with the same wording as bfcheck. The privacy modal adds Google as a processor that receives no personal data. There is also a honeypot field, and the bot check measures time from the start of the wizard.
4. **`POST /api/bfai`** returns `{id, event_id}`. The id is a 16-byte random plan id. The pixel then fires `Lead` with that `event_id`, the URL becomes `?plan=<id>`, and `bfai_res` remembers the id.
5. **Generation.** The page calls `POST /api/bfai/gen` 4 times in parallel (`ads`, `ugc`, `mail`, `msg`) and ticks off each step label as its part returns. Typical time is 17–21 s.
   - A part that fails is retried once.
   - A part that another request is already writing (`busy`) is polled through `GET /api/bfai/plan`.
   - A part that still fails shows a "לבנות את החלק הזה" card, and the rest of the plan still renders.
6. **Plan page** (dark, with a sticky chip nav). Its sections are listed in the next section.
7. **Reloading** `?plan=<id>` on any device loads the cached plan from D1 without generating again. If parts are missing, only those parts are generated.

## Plan page sections
- **Summary.** Headline, big idea, main offer, early-access perk, 3 tips, and a "copy link" button.
- **Calendar.** Built in code with fixed Israeli dates. Each day's items link to the generated piece, and channels the store does not have are dimmed with "(אין לך עדיין)".
  - 27.11 is a Friday, so sends go out in the morning before Shabbat.
  - 28.11 goes out only after Shabbat ends.
- **10 ad mockups.** Instagram feed and story cards made in HTML/CSS, with a feed/story toggle per ad. Each card has a store-initial avatar, the primary text, the headline, a CTA, and a visual block with the overlay text and product name. There are no photos and no prices except the store's own.
- **5 UGC scripts.** Hook (0–2 s), middle, CTA, creator and shot notes.
- **5 bundles.** The AI only picks products, quantities, a name and the discount. The page computes everything else:
  - Bundle price = round(list × (1 − d)).
  - Net price without 18% VAT (toggle).
  - Minus goods cost and an optional extra cost per bundle.
  - Gross profit in ₪ and as a %, with a verdict: כדאי ≥ 35% · גבולי 20–35% · לא כדאי < 20% (labeled as our rule of thumb).
  - It also shows profit at full price for comparison.
  - Costs are editable. An unknown or cleared cost shows "להשלים עלות" and a description of the calculation.
- **Messages.**
  - 7 emails, with a note on the "פרסומת" subject rule.
  - 5 SMS: the store prefix and "[קישור] להסרה השב הסר" are added in code, and a Hebrew-aware counter shows 70 chars per single SMS and 67 per part.
  - 5 WhatsApp messages, opted-in customers only, with an opt-out line.
  - 5 automations: trigger, who, when, channel and copy.
- **Calculator.** Every input is editable, and every default that is not from the store's answers is marked "הנחה". The output is labeled "הערכה לפי ההנחות שלך, לא התחייבות" and "מחזור, לא רווח".
- **Ping CTA.**
  - "ל-Shopify ←" links to `https://apps.shopify.com/ping-ai?utm_source=bfai`.
  - "ל-WordPress / WooCommerce ←" installs nothing. It records `woo_waitlist=1` on the row, fires `BFAIWooWaitlist` and shows "הצטרפת לרשימת ההמתנה לגרסת WooCommerce. נעדכן אותך."
  - The button that matches the store's platform is gold and tagged "הפלטפורמה שלך".
  - Below it are the training link (`/ping-training?utm_source=bfai`) and a WhatsApp link to 972525535537 with prefilled text.
- **Copy buttons** on every piece fire `BFAICopy`. Only the first copy is logged on the server; the rest are pixel only.

## AI (server side only)
- **Model.** `GEMINI_MODEL` defaults to `gemini-3.8-flash`, the newest flash model on the key on 29.10.2026; `gemini-2.5-flash` is already closed to new users. It runs with `thinkingLevel: low`, `responseMimeType: application/json` and a `responseSchema` per part. Each call has a 55 s timeout and one retry.
- **What Gemini receives.** Only store and product data, plus a margin bucket per product. It never receives the name, phone or email.
- **System prompt (Hebrew).** It asks for natural spoken Hebrew in short sentences, lists banned clichés, and requires plural forms (feminine if the audience is women only) and the real store and product names. It also forbids:
  - any ₪ amount other than the store's prices, and any discount above the max
  - "1+1"
  - income promises
  - fake scarcity, testimonials or statistics

  WhatsApp and SMS are for opted-in customers only, with an opt-out line, and links appear as `[קישור]`.
- **Deterministic sanitizer (`cleanText`) after the AI.**
  - Any ₪ amount that is not a product price becomes `[מחיר]`.
  - Any % above the max is clamped to the max.
  - "1+1" and "השני חינם" are replaced.
  - Em dashes are removed.
  - SMS texts are composed in code, and WhatsApp messages get an opt-out line if one is missing.
  - Product indexes and discounts are clamped, and every array is forced to its fixed length.
- **Cost guards.**
  - `rate` buckets per IP: lead 5 per 10 min, gen 24 per 10 min, plan reads 120, actions 60.
  - At most 12 part generations per plan.
  - Daily cap `BFAI_DAILY_CAP` (default 300 plans per Israel day), counted once per plan. Over the cap, the row is set to `capped` and the page says the worker is busy and to come back later from the same link.

## Alert (one per lead)
- **When it goes out.** The alert goes out when the last of the 4 parts finishes. If the plan has not finished 2 minutes after sign-up (failed, capped or still running), the cron sends it anyway, with the plan status. The Tick alarm is pulled forward with `?at=` so this fallback fires about 2–2.5 minutes after sign-up, not up to 7.
- **How it is sent.** It uses the alerts row `<id>:bfai` (kind `bfai`) and the existing `deliver()` and backoff retries. The body goes to `MAKE_HOOK` as `{source:'bf-ai', funnel:'bf-ai', stage:'bfai', name, phone, store, platform, plan_status, plan_url, utm_*, summary}`.
- **Summary.** "🤖 עובד AI לבלאק פריידיי · <store>", then name, phone, email, platform, category, products with prices and costs, visitors, channels, max discount, audience and tone, consent, source and campaign, funnel, plan status, and the plan URL.
- **Admin retry.** `/admin/api/alert/<id>:bfai/retry`.

## Pixel and events
- **Lead.** `fbq('trackSingle','2210072352882860','Lead',{content_name:'bf-ai',content_category:'lead-magnet'},{eventID})` fires after a successful `/api/bfai`. The worker sends CAPI `Lead` with the same `event_id` (once `META_CAPI_TOKEN` is set) and logs `BFAILead` in `events`.
- **Custom events (pixel plus `/api/event`).** `BFAIStart`, `BFAIPlanView` (with platform), `BFAIPingClick` (with platform), `BFAIWooWaitlist`, `BFAICopy` (with section), `BFAITrainingClick` and `BFAIWhatsAppClick`. `BFAIStep` is pixel only.

## Endpoints (ping-funnel worker)
- **`POST /api/bfai`.** Takes `{sid, name, phone, email?, consent, privacy_ack:true, answers:{store, platform, category, category_text, products[{name, price, mode, cost|margin}], audience[], ages[], tone, maxd, channels[], visitors}, hp, elapsed, event_id, vid, utm, fbclid, fbc, fbp, referrer, landing_url}`.
  - Validation errors return 422.
  - A filled honeypot or an `elapsed` under 12 s returns `{ok:true, spam:true}`.
  - A retry with the same `sid` and phone returns the same id.
- **`POST /api/bfai/gen`.** Takes `{id, part}` and returns `{ok, part, data, status}`, or `err: busy | cap | limit | gen | off`.
- **`GET /api/bfai/plan?id=`.** Returns `{status, answers, parts, busy[], woo}`. It never returns the name, phone or email.
- **`POST /api/bfai/act`.** Takes `{id, action: view | ping | woo}`.
- **Admin.** `GET /admin/api/bfai` and `POST /admin/api/bfai/<id>/delete`. Deleting a training lead also deletes its linked `bf_ai` rows. Retention is 730 days.

## Local test (what was run on 29.10.2026)
```bash
D=$TMPDIR/bfai-dev; mkdir -p $D && cp -R ~/אקדא/ping-funnel/{src,migrations,wrangler.toml} $D/
# .dev.vars of the copy: TOKEN_SECRET, ADMIN_PW=localadmin, IP_SALT, MAKE_HOOK=http://127.0.0.1:8797/hook (fake), GEMINI_API_KEY
python3 hook.py $D/hook.log &                      # fake Make hook, logs bodies
cd $D && npx wrangler d1 migrations apply ping-funnel --local && npx wrangler dev --port 8791 --ip 127.0.0.1 --test-scheduled
cd ~/projects/avivmalka123.github.io && python3 -m http.server 8862 --bind 127.0.0.1
open 'http://127.0.0.1:8862/bfai/src/bfai.html?api=http://127.0.0.1:8791&utm_source=ig&utm_campaign=test'
curl http://127.0.0.1:8791/__scheduled             # cron: fallback alerts + retries
python3 bfai/build.py && node --check bfai/bfai.js
```
`GEMINI_API_KEY` is also in `~/אקדא/ping-funnel/.dev.vars`, which git ignores. Screenshots are in `~/אקדא/ping-ai/launch/bf-ai/shots/`.

## Production deploy (in this order; nothing here has been run)
1. **Worker** (`~/אקדא/ping-funnel`):
   ```bash
   npx wrangler d1 migrations apply ping-funnel --remote   # applies only 0003_bf_ai.sql (creates bf_ai)
   npx wrangler secret put GEMINI_API_KEY                  # paste the key from ~/.claude/mcp-servers/meta-ads/.env
   npx wrangler deploy
   curl https://ping-funnel.aviv1988.workers.dev/health
   ```
   - **Optional vars.** `GEMINI_MODEL` (default `gemini-3.8-flash`), `BFAI_DAILY_CAP` (default `300`), `BFAI_PAGE` (default `https://www.avivmalka.com/bf-ai`) and `GEMINI_THINKING` (default `low`). Set them in `[vars]` or with `wrangler secret put`.
   - **Origins.** The allowed origins already include www.avivmalka.com and avivmalka123.github.io.
   - **Alert destination.** Alerts go to the current `MAKE_HOOK`, the same one bf-quiz uses. For a separate WhatsApp group, point a new Make scenario at a new hook first. The "יש summary" filter already passes these alerts.
2. **Pages.** Run `python3 bfai/build.py && node --check bfai/bfai.js`, then commit `bfai/` and push to `avivmalka123/avivmalka123.github.io` (main).
3. **Kajabi.** Create page `bf-ai` by cloning the bf-check page (2152367560). In its Custom Code block:
   ```html
   <div id="pf-root"></div><script src="https://avivmalka123.github.io/bfai/bfai.js?v=1"></script>
   ```
   Bump `?v=` after each rebuild. The result link is `https://www.avivmalka.com/bf-ai?plan=<id>`, so the page must keep its query string. Kajabi does.
4. **Real test.** Build one plan from a phone. Then check:
   - the WhatsApp alert and its plan link
   - the row in /admin
   - `Lead` in Events Manager (Test Events)
   - a second open of the link, which must load without generating again
