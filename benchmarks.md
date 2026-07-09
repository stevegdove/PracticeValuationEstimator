# Practice Valuation Benchmarks — Phase 1 Research (verified 2026-07-08)

Source for the calculator's config block. Every range below survived 3-vote adversarial
verification against 2025–2026 sources unless marked otherwise. Re-check annually —
these reflect the stabilized late-2025/mid-2026 market and would move with rates or
DSO capital-market shifts.

**Source-quality caveat:** all surviving sources are dental M&A advisors/brokers
(FOCUS Investment Banking, Ad Astra, Auxo, corroborated by Sorso, Tusk, Professional
Transition Strategies) — not transaction databases. Label everything in the app
"advisor-estimated ranges," not transaction-verified.

---

## Track 1 — Private buyer (doctor-to-doctor), % of average annual collections

| Metric | Value | Confidence |
|---|---|---|
| Full range | 50–100% of 3-yr average collections | Medium |
| Common band (calculator default range) | 60–80% | Medium |
| Applies to | Practices under ~$1.5M collections or ~$250K post-doctor-comp EBITDA | Medium |
| Typical financing | SBA 7(a) or conventional dental-specialty bank loans (BofA Practice Solutions, Wells Fargo) | — |

Sources: Ad Astra (June 2026), Professional Transition Strategies, Practice Exchange 2026 guide.
Steve's field anchor (50–90%) is consistent; use 50–100% as hard bounds, 60–80% as the scoring band.

## Track 2 — DSO/PE buyer, × adjusted EBITDA (size ladder) — HIGH confidence

| Adjusted EBITDA | Multiple | Buyer context |
|---|---|---|
| Under $250K | Route to Track 1 | DSOs rarely bid below this floor |
| $250–500K | 3–5× (weakest owner-dependent cases ~4× floor) | Thin DSO demand; often doctor-to-doctor territory |
| $500K–$1M | 5–7× | Small DSO tuck-ins |
| $1–3M | 7–9× | Regional DSO add-ons |
| $3–5M | 9–11× | Emerging platforms |
| $5M+ | 11×+ (largest $10M+ deals 10–15×) | Platform-level deals |

Sources: FOCUS Investment Banking (Dec 2025 + Apr 2026, citing PitchBook/Bain/VMG Health/Levin),
Ad Astra (June 2026); corroborated within ~1 turn by Sorso, Tusk, Auxo. Verified 3-0 on all tiers.

### Quality tiers within a size band (MEDIUM confidence — Auxo June 2026 + FOCUS Apr 2026)

| Practice profile | Multiple |
|---|---|
| Heavy doctor dependence, weak reporting, cleanup needed | 3.0–5.0× |
| Small solo (owner-dependency discount) | 4.2–5.4× |
| Established single location, credible EBITDA, stable hygiene | 5.0–6.5× |
| Multi-location, associate depth, clean reporting | 6.5–8.5× |
| Specialty group / regional platform candidate | 8.5–11.0×+ |

## Oral surgery (only specialty that survived verification — MEDIUM confidence)

Same size ladder shifted up: 5–7× under $1M, 7–9× at $1–3M, 9–11× at $3–5M, 11–13× at $5M+.
PE platform deals 10–13× vs 5–8× add-ons (~1–2 turns over GP at the top; 13× is a sell-side
ceiling, not a midpoint; assumes anesthesia infrastructure + multi-site density).
Source: FOCUS oral surgery report (June 2026). NOTE: "OMS sells at 1.0–1.6× revenue" was REFUTED.

## Adjusted EBITDA formula (framework HIGH confidence)

Adjusted EBITDA = reported operating profit
  + add-backs (personal/discretionary spend, vehicles, family employment, validated one-time costs)
  − owner-doctor comp normalized to fair-market clinical rate
  − durability / quality-of-earnings haircuts

Replacement-doctor comp rule of thumb: **~28–32% of GP production** (higher for specialists).
IMPORTANT: this figure is an industry rule of thumb from corroborating broker/CPA sources only —
present it as such, and make it an editable field in the calculator.
Sources: FOCUS Dec 2025, Auxo June 2026; corroborated by Tusk, Blue & Co (dental CPA), CT Acquisitions.

## Overhead benchmark (HIGH confidence)

GP overhead: **~62% of collections** (defensible range 55–65%; ADA HPI 2023 survey mean 61.3%).
Specialty-specific and rural/Medicaid overhead splits were REFUTED — do not use them.

## Value levers

**Verified magnitude:**
- Doctor dependence: owner producing 90%+ of collections → ~10–20% valuation cut
  (conservative floor; some sources 22–40%). Provider concentration >~40% from one clinician
  moves the practice down a band. (FOCUS/Sofer Advisors, direction unanimous across 6 firms.)

**Verified direction only — NO defensible magnitude (use as Bridge scoring-model
position-within-range factors, clearly labeled as our model, not market data):**
- Payer mix (FFS > PPO > Medicaid) — all quantified claims refuted 0-3
- Revenue growth trend, rural vs metro, equipment modernity (CBCT/scanners/mills), operatory capacity

## Specialty bands — ESTIMATED ONLY (Steve's call 2026-07-08: ship with "estimated" flag)

These did NOT survive verification (CT Acquisitions table, refuted 0-3). Included in the
calculator per Steve's decision, but every one must render with an "Estimated — market data
still being verified" badge and must never be presented as verified. Bands are for multi-site
practices >$2M EBITDA; single-office solo specialty runs roughly 5–9× SDE depending on specialty.

| Specialty | Est. EBITDA band (multi-site >$2M) |
|---|---|
| Orthodontics | 7.0–11.0× |
| Pediatric | 7.5–11.0× |
| Endodontics | 7.0–10.0× |
| Periodontics | 6.5–9.5× |
| Oral surgery | use VERIFIED ladder above instead |

For specialty % of collections (Track 1), no defensible number exists — the calculator shows
the GP 60–80% band with an "estimated for specialties" note.

## Refuted — do NOT use these numbers anywhere

- Ortho 7–10× / OMS 6–9× add-on premiums (Sorso via Ad Astra) — 0-3
- OMS at 1.0–1.6× revenue — 0-3
- Payer mix = 1–2 turns of variance — 0-3
- Medicaid 40%+ compresses 0.5–1.0×; associate-led adds 0.5–1.5× — 0-3
- Urban 60–65% vs rural 65–72% overhead split — 0-3

## Open gaps

1. Ortho, endo, perio, pedo multiples and % of collections (try Bentson Copple for ortho, ADA Practice Transitions)
2. Quantified payer-mix effect
3. Specialty overhead norms
4. Primary source for the 28–32% replacement-comp figure + specialist rates
