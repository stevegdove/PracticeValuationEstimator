# What's My Practice Worth? — valuation estimator

A single-page, client-side valuation estimator for dental practice owners.
Owner enters numbers from their last three P&Ls; the page shows a live,
mortgage-calculator-style estimate two ways — private buyer (% of collections)
and DSO/PE (multiple of adjusted EBITDA) — with a plain-English narrative.

- **All math runs in the browser.** No financials are ever transmitted.
- Results sit behind an email gate; leads go to a Google Sheet via Apps Script.
- Benchmark ranges and scoring weights live in the `BENCHMARKS` config block
  at the top of the `<script>` in `index.html` — edit numbers there, no code
  knowledge needed. Sources and confidence levels: `benchmarks.md`.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app — page, styles, config, calculator |
| `benchmarks.md` | Researched + verified valuation benchmarks with citations (July 2026) |
| `apps-script.gs` | Google Apps Script that receives leads into a Sheet |
| `assets/` | Bridge logos + favicon |

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
