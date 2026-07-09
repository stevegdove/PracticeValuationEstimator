# What's My Practice Worth? — valuation estimator

A single-page, client-side valuation estimator for dental practice owners that
doubles as a **lead-generation funnel**. Owner enters numbers from their last
three P&Ls; the page shows a live, mortgage-calculator-style estimate two ways —
private buyer (% of collections) and DSO/PE (multiple of adjusted EBITDA) — with
a plain-English narrative.

- **All math runs in the browser.** No financials are ever transmitted.
- **Two-stage capture:** an email gate unlocks the estimate (your nurture list),
  then a high-intent "Connect me with a broker" form captures timeline, phone,
  and consent — these are the sellable, broker-ready leads. Both land in one
  Google Sheet via Apps Script, tagged by lead type.
- **Direct-sold sponsorships:** a "Recommended partners" section + footer strip,
  driven by the editable `SPONSORS` config. Geo-target a broker by state; when no
  paid sponsor matches, a house "advertise here" slot shows instead.
- Benchmark ranges and scoring weights live in the `BENCHMARKS` config block
  at the top of the `<script>` in `index.html` — edit numbers there, no code
  knowledge needed. Sources and confidence levels: `benchmarks.md`.

## Monetization config (edit in `index.html`)

- **`SPONSORS`** — add a paid placement: `{ name, tag, logo, blurb, url, states?, strip? }`.
  Omit `states` to show everywhere; add e.g. `states: ["TX","AZ"]` to show a broker
  only to visitors in those states. `strip: true` also lists them in the footer.
- **`HOUSE_AD`** — the fallback "advertise here" slot shown when no sponsor matches.
- Leads: the Sheet gets a `Lead type` column — `estimate` (gate) vs `broker`
  (consented, high-intent). Sell/route the `broker` rows.

**Before selling leads:** the gate + broker consent copy and the in-page privacy
modal are written to disclose broker sharing and paid sponsorships honestly. Keep
them — selling contacts legally counts as a "sale of personal data" (CCPA and
similar), and the consent checkbox is your basis for the broker referrals.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app — page, styles, config, calculator, SEO |
| `benchmarks.md` | Researched + verified valuation benchmarks with citations (July 2026) |
| `apps-script.gs` | Google Apps Script that receives leads into a Sheet |
| `robots.txt`, `sitemap.xml` | SEO crawl files |
| `assets/og-card.png` | 1200×630 social share image (regenerate with `python3 /tmp/ogcard.py` style script) |
| `assets/` | Bridge logos + favicon |

## SEO

Built in: keyword-optimized title + meta description, canonical URL, Open Graph +
Twitter cards with a branded share image, JSON-LD structured data (WebApplication +
**FAQPage** for rich results + Organization), a crawlable on-page FAQ/content section,
`robots.txt`, and `sitemap.xml`.

**If you move to a custom domain** (e.g. bridgedental.ai/valuation), find-and-replace
`https://stevegdove.github.io/PracticeValuationEstimator/` across `index.html` (canonical,
og:url, og:image, twitter:image, JSON-LD `url`), `robots.txt`, and `sitemap.xml`. Then submit
the sitemap in Google Search Console for fastest indexing.

## Contact / no personal info

The tool never routes dentists to a personal inbox — leads flow to brokers via the Stage-2
form. `CONTACT_EMAIL` (top of the config) is your **buy-side + privacy** address only, used by
the "become a partner" house ad and the privacy opt-out link. Point it at a monitored business
mailbox (currently `stevedove@dovedentalgroup.com`).

## Run locally

```bash
python3 -m http.server 4601 --directory practice-valuation
```

Then open http://localhost:4601. (Or use the `practice-valuation` entry in
`.claude/launch.json`.)

## Set up lead capture (one time, ~5 minutes)

1. Go to https://script.google.com → **New project** (sign in as the account
   that should own the leads sheet).
2. Delete the placeholder code, paste in the contents of `apps-script.gs`, save.
3. **Deploy → New deployment → Web app.**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Authorize when prompted, then copy the web app URL (ends in `/exec`).
5. In `index.html`, set `APPS_SCRIPT_URL = "…/exec"`.
6. Test: submit the gate once and check that a "Practice Valuation Leads"
   spreadsheet appeared in that account's Google Drive with your row in it.

While `APPS_SCRIPT_URL` is empty, the gate still unlocks — nothing is sent.
The gate remembers unlocked visitors via localStorage; to see it again during
testing, clear site data or run `localStorage.removeItem('bdval_unlocked')` in
the console.

## Publishing

Same pattern as the prompt generator: push the folder to a GitHub Pages repo
(or drop it on any static host). Update the GoatCounter/OG tags in
`index.html` if the final URL differs.

## Honesty guardrails (don't remove)

- The "Educational estimate — not an appraisal" pill, the results disclaimer,
  and the ESTIMATED badge on ortho/pedo/endo/perio bands are load-bearing:
  those specialty numbers did **not** survive fact-checking (see
  `benchmarks.md`) and must never be presented as verified.
- Re-check benchmark ranges yearly — they reflect the late-2025/mid-2026 market.
