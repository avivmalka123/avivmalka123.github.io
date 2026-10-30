# base.zip – placeholder tokens

Theme: **חנות בעברית 1.0.0** (Hebrew/RTL build of Shopify Dawn 16.0.0).
Source: `../theme-src/`. Rebuild with `./build.sh`.

The wizard downloads `base.zip`, runs `String.replaceAll(token, value)` on **every text file**
(`.json`, `.liquid`, `.css`, `.js`, `.svg`), re-zips with fflate and hands the zip to the merchant.
All tokens currently live only in JSON files (listed below), but replacing in every text file is safe:
no token string occurs anywhere else in the theme, and no token is a substring of another
(`__BG__`/`__BG2__`, `__ACCENT__`/`__ACCENT_TEXT__`, `__TEXT__`/`__HERO_TEXT__` do not overlap).

Keep the zip layout as is: `assets/ config/ layout/ locales/ sections/ snippets/ templates/` at the
zip root, no wrapping folder.

## Colour tokens

Value: a 6-digit hex colour such as `#1a1a1a` (lower or upper case). Must always be replaced –
Shopify rejects the theme if a colour setting is not a valid colour.

| Token | Meaning | Where (all in `config/settings_data.json` → `current.color_schemes`) |
|---|---|---|
| `__BG__` | main page background | scheme-1 background; scheme-3 text + secondary button label (light text on the dark footer) |
| `__BG2__` | soft alternate background | scheme-2 background (USP row, FAQ, product-card image background) |
| `__TEXT__` | main text colour | scheme-1 + scheme-2 text, secondary button label/links, shadow |
| `__ACCENT__` | brand / button colour | scheme-1, 2, 3 button; scheme-4 + 5 background and button label |
| `__ACCENT_TEXT__` | text on the accent colour | scheme-1, 2, 3 button label; scheme-4 + 5 text, button, secondary button label |
| `__DARK__` | dark band / footer background | scheme-3 background + shadow; scheme-4 + 5 shadow |

Gradients are empty strings in every scheme.

How the schemes are used:

| Scheme | Colours | Used by |
|---|---|---|
| scheme-1 | `__BG__` / `__TEXT__`, accent buttons | page body, header, best-sellers, "about", cart drawer, product page |
| scheme-2 | `__BG2__` / `__TEXT__`, accent buttons | USP/trust row, FAQ, product-card image background |
| scheme-3 | `__DARK__` / `__BG__`, accent buttons | footer, sold-out badge |
| scheme-4 | `__ACCENT__` / `__ACCENT_TEXT__`, inverted buttons | hero banner, newsletter band, sale badge |
| scheme-5 | `__ACCENT__` / `__ACCENT_TEXT__` | announcement bar |

## Text tokens

| Token | Content | Where |
|---|---|---|
| `__STORE_NAME__` | store name | `templates/index.json` → about heading "על __STORE_NAME__" and newsletter heading "הצטרפו למועדון של __STORE_NAME__"; `sections/footer-group.json` → footer `copyright_text` (© year, name); `config/settings_data.json` → `brand_headline` (footer brand block heading); `templates/password.json` → "__STORE_NAME__ נפתחת בקרוב" |
| `__HERO_TITLE__` | hero headline | `templates/index.json` → `hero` (image-banner) heading block |
| `__HERO_TEXT__` | hero sub-line | `templates/index.json` → `hero` text block |
| `__ANNOUNCE__` | announcement-bar text | `sections/header-group.json` → announcement-bar block |
| `__USP1__` `__USP2__` `__USP3__` | three short benefit lines | `templates/index.json` → `usp` (trust-badges icon row: truck / lock / return icons) |
| `__ABOUT__` | short "about us" paragraph | `templates/index.json` → `about` rich-text block, inside `<p>…</p>` |

### Escaping text values (important)

Every text token sits inside a JSON string, and most of them inside Shopify rich text (HTML).
Before `replaceAll`, the wizard should transform each text value like this:

1. HTML-escape `&` → `&amp;`, `<` → `&lt;`, `>` → `&gt;`, `"` → `&quot;` (leave apostrophes / geresh `'` as they are).
2. JSON-escape the result: `\` → `\\`, `"` → `\"` (none left after step 1), control characters removed.
3. Newlines: replace with a space. Only `__ABOUT__` may contain paragraphs – split them with `</p><p>`
   (inserted after step 1).

In code: `JSON.stringify(htmlEscape(value).replace(/\s*\n\s*/g, ' ')).slice(1, -1)`.

The plain-text spots (announcement bar, password-page heading, footer copyright name) decode those
entities again before Liquid escapes them, so the same escaped value displays correctly everywhere.

Suggested lengths: store name ≤ 40 chars, hero title ≤ 60, hero text ≤ 140, announcement ≤ 70,
each USP ≤ 40, about ≤ 600.

## Fixed Hebrew content (no token)

- Hero button "לקנייה עכשיו" → `/collections/all`; best-sellers "הנמכרים ביותר" (collection `all`, 4 products).
- FAQ "שאלות נפוצות" – 4 generic Q&A (shipping, returns, payment security, support).
- Product page: trust line "משלוח מהיר לכל הארץ · תשלום מאובטח · החזרה קלה" under the add-to-cart button,
  collapsible tabs "משלוחים", "החזרות והחלפות", "תשלום מאובטח".
- Footer: brand block, menus "ניווט" (main-menu) and "מידע ומדיניות" (footer), payment icons, policy links.
  Shopify's default English menu titles (Home, Catalog, Contact, Search, policies…) are shown in Hebrew
  by `snippets/link-title-he.liquid`; any title the merchant types is shown as-is.

## Verification done on this build

`build.sh` re-parses every JSON file before zipping. A replacement dry-run (sample values with quotes,
`&`, `<>`, apostrophe and a newline, escaped as above) produced 0 leftover tokens, 18/18 JSON files
parsing, valid hex in all 5 schemes, and `shopify theme check` with 0 errors (10 warnings, all inherited
from Dawn except the license-notice snippet being unreferenced).
