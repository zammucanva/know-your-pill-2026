# KYP Universal Search — Architecture Audit & Corpus Census

Branch: `audit/universal-search` · Baseline: `857c50fa` (production main)
Evidence script: `scripts/search-audit-census.ts` (run: `bun scripts/search-audit-census.ts`)

---

## 1. Pipeline as implemented (Phase 1 findings)

```
QUERY (typed in SearchModal input)
  → normalization: query.trim().toLowerCase()            [component-level, inline]
  → ranking: rankResult(item, q) inline in search-modal.tsx
      single token: 7-tier rankToken (see §3)
      multi-token: AND semantics, rank = Σ token tiers
  → candidate pool: the ENTIRE 340-entry generated index (single global pool —
      no category-first scan, no per-category pre-limit)
  → filter rank > 0 → sort (tier asc, then title localeCompare)
  → slice(0, 12)                                         ← DISPLAY CAP (hardcoded)
  → grouping: SEARCH_RESULT_GROUPS (presentation-only, no per-group caps)
  → display: grouped buttons, data-idx = flat index
  → keyboard: ↓/↑ move activeIndex (flat), Enter → go(results[activeIndex]),
      Escape via radix Dialog (closes + focus return), Home/End NOT handled,
      Tab follows natural DOM order (matches visual grouped order)
  → routing: href "#anchor" → in-page scrollIntoView; "/route" → router.push
```

## 2. Component inventory (all verified in source)

| Piece | File | Role |
|---|---|---|
| Search modal | `src/components/kyp/ui/search-modal.tsx` | The engine (inline) + UI. Client component. |
| Trigger | `src/components/kyp/ui/floating-search.tsx` | Floating pill (≥lg), navbar button (≥xl), mobile-menu rows; global ⌘K/Ctrl+K with first-instance guard |
| Live index derivation | `src/lib/kyp/data/search-index.ts` | Server-side; imports full 145-monograph registry (6.7 MB) — never client |
| Client index artifact | `src/lib/kyp/data/search-index-generated.ts` | 340-entry self-contained literal (~100 KB); what the modal imports |
| Index generator | `scripts/gen-client-data.ts` | Deterministic; drift-pinned deep-equal by `tests/platform-hardening.test.ts` |
| Psychiatry records | `src/lib/kyp/data/psychiatry-search-records.generated.ts` | 111 records = hub + library + 109 notes (generator: `scripts/generate-psychiatry-search-records.ts`, module `src/lib/oxford/search.ts`) |
| Groups | `src/lib/kyp/search-groups.ts` | 9 presentation groups covering all 12 types exactly once (D-1 guard, pinned by `tests/psychiatry-site.test.ts` §86d) |
| History | `src/lib/hooks/use-search-history.ts` | localStorage `kyp:search-history` (static export) / `/api/search-history` (standalone) |
| Legacy engine | `src/lib/kyp/search.ts` | `searchKyp()` — imported by ZERO components (only by psychiatry-site.test.ts §86); single-token ranking that has drifted from the modal's multi-word version |
| Hero form | `src/components/kyp/sections/home-hero.tsx` | Separate homepage `role="search"` form: exact drug/substance slug jump, brand alias `zoloft`, hard-coded `depression/mdd/depressive → /diseases/major-depressive-disorder`, else synthetic ⌘K → modal opens **with the query discarded** |

Searchable fields: `title`, `keywords[]` (avg 14.4/entry, 4905 total), `description`. Record types: drug, psychiatry-note, collection, class, brain-region, side-effect, neurotransmitter, pathway, substance, disease, patient-guide (11 used of the 12 declared; `clinical` has zero records).

## 3. Current ranking (verbatim, 7 tiers)

1 exact title · 2 title starts-with · 3 title includes · 4 keyword exact · 5 keyword starts-with · 6 keyword includes · 7 description includes. Ties: title localeCompare. No token-boundary tier (a word-boundary match like "del" in "Deliberate" ranks equal to mid-word substring noise like "de" in "Codeine").

## 4. Corpus census (Phase 2 — real generated index)

**340 entries**: 145 drug · 111 psychiatry-note · 50 collection · 8 class · 6 brain-region · 6 side-effect · 5 neurotransmitter · 4 pathway · 3 substance · 1 disease · 1 patient-guide.

- 145/145 Stahl monographs present as `medication-*` records → `/drugs/{slug}` ✓
- 109 psychiatry notes + hub + library → `/psychiatry/*` ✓ (111 records)
- 40 drug classes present as `collection-class-*` → `/drugs/class/{id}` (the separate 8 `class-*` records are the legacy `drugClassList`, anchored to `/#categories`) ✓
- **Duplicate ids: 0.** Broken hrefs: 0 — `tests/routes-search.test.ts` link-checks every entry (340 dynamic tests + anchors).
- **Shared titles: 6** — all are *distinct destinations sharing a taxonomy label* ("Atypical Antidepressants" ×4 = 4 genuinely different classes: atypical / multimodal / SARI / SPARI; descriptions differentiate). Reported, not a defect; no index change made.
- Shared hrefs by design: `/#knowledge-graph` ×15 (brain/NT/pathway anchors), `/drugs/#antidepressants` ×9, `/#categories` ×8, `/#side-effects` ×6.
- Non-ASCII content is em-dash/α/δ/& only — lowercase-safe; no diacritic folding needed.
- The diseases registry contains exactly 1 disease (Major Depressive Disorder) — "Diseases" group is sparse by data reality, not by search defect.

## 5. Defect list (verified against the real index)

| # | Severity | Finding | Evidence |
|---|---|---|---|
| **D-S1** | **CRITICAL** | Hard display cap `slice(0, 12)` < legitimate matches. `de` = 286 matches, 12 shown; 13 title-prefix records exist, 1 (Dextromethorphan) hidden even at the strongest tier. `d` = 26 title-prefix, 14 hidden. The defining mission defect. | census sim |
| **D-S2** | HIGH | No token-prefix tier: word-boundary matches rank equal to mid-word substring noise ("del" in "Deliberate" == "de" in "Codeine"). Mission ranking puts token-prefix above substring. | §3 |
| **D-S3** | HIGH | Hero form fallback discards the typed query: user types "de", presses Search, modal opens EMPTY (synthetic ⌘K → open effect resets query to ""). | home-hero.tsx:98-109 + search-modal.tsx:173-178 |
| **D-S4** | MEDIUM | Hard-coded content routing in hero: `q === "depression" \|\| q === "mdd" \|\| q.includes("depressive")` → MDD disease page. Non-generic; bypasses universal ranking. | home-hero.tsx:105-106 |
| **D-S5** | MEDIUM | Two divergent engine copies: modal (multi-word AND) vs `searchKyp` (single-token) — the lib copy is unused by any UI but still exported and tested; a drift hazard. | grep: zero component imports |
| **D-S6** | LOW | Keyboard: Home/End not handled; Tab = natural DOM order (correct); Escape + focus-return handled by radix Dialog (verified live in prior QA). | search-modal.tsx:228-240 |
| **D-S7** | LOW | Display cap is undocumented in the UI: user cannot tell results were truncated (footer shows only "340 entries indexed"). | search-modal.tsx:405-408 |

## 6. Mission checklist verdict (pre-fix)

- searches the complete index: **YES** (single global pool, all 340)
- prefix matching: YES (title + keyword)
- token-prefix matching: **NO** (D-S2)
- substring matching: YES
- aliases/metadata: YES (keywords + description)
- category limits before global ranking: **NO** (correct — global sort first)
- grouping loses results: NO (presentation-only) — but the **global cap** truncates (D-S1)
- short-query broad discovery: **DEFECTIVE** (D-S1)
- keyboard-index consistency: flat index preserved through grouping ✓; hover-preview updates activeIndex by design (Spotlight semantics, B12 verdict: not a defect); Home/End missing (D-S6)

## 7. Fix design (implemented in this branch)

1. **Canonical pure engine** `src/lib/kyp/search.ts` (replaces the drifted `searchKyp`): `normalizeQuery` (NFKC + lowercase + trim + whitespace collapse), `tokenizeQuery`, 8-tier `rankToken` (adds **token-prefix** tier), multi-word AND `rankResult`, `searchUniversal(items, q, {cap})` → `{ items, total }`, `SEARCH_DISPLAY_CAP = 50`. Zero data imports (bundle-safe; pure parameter input).
2. **Display cap 12 → 50, documented** in code + UI: footer shows "N of M matches" when querying (D-S1 + D-S7). 50 aligns with the previous engine's own max limit.
3. **Ranking model (documented order)**: 1 exact title · 2 title starts-with · 3 **title token starts-with** · 4 title contains · 5 keyword exact · 6 keyword starts-with · 7 keyword contains · 8 description contains. Multi-word: AND, Σ tiers. Ties: title localeCompare, then id (deterministic).
4. **Modal consumes the engine** (no inline copy) — keeps the generated-artifact import pin.
5. **Hero handoff fixed** (D-S3/D-S4): `kyp:search` CustomEvent carries the query; FloatingSearch seeds the modal (one-shot), the hard-coded depression route removed — the generic engine now serves those queries with full ranked choice.
6. **Keyboard: Home/End** move to first/last result (D-S6).

## 8. Ranking model after the fix (the contract)

For a single-token query, tiers in ascending cost (lower sorts first):

| Tier | Match | Example (real index, q=`de`) |
|---|---|---|
| 1 | title == query | — |
| 2 | title starts with query | Delirium, Desvenlafaxine |
| 3 | a title **word** starts with query | Major **De**pressive Disorder, Suicide & **De**liberate Self-Harm |
| 4 | title contains query | Co**de**ine |
| 5 | keyword == query | — |
| 6 | keyword starts with query | (keyword "dependence" on Alcohol Use Disorders) |
| 7 | keyword contains query | many |
| 8 | description contains query | noise tier, last |

Multi-word queries keep AND semantics with Σ-tier scoring (a 2×tier-2 beats exact+weak). Short queries get broad discovery *through the raised, documented cap*; long queries narrow naturally because fewer items satisfy all tokens — relevance progressively dominates without any special-casing.

**Display policy (documented):** the modal renders at most `SEARCH_DISPLAY_CAP = 50` results from the globally ranked pool, strongest first; the footer states exactly how many matches exist and how many are shown. Grouping remains presentation-only and never suppresses a ranked result: every one of the 50 slots is assigned by global rank before any group renders.

---

## 9. Fix outcome — verified evidence (implementation complete)

| Defect | Fix | Verification |
|---|---|---|
| D-S1 | cap 12 → `SEARCH_DISPLAY_CAP = 50`, shown/total in footer | `de` → 50 shown of 286; **all 13 title-prefix records present**; `d` → 50 shown (26 prefix, was 14 hidden); browser-verified footer "50 of 286 matches" at 320–1440 |
| D-S2 | token-prefix tier 3 added | "Major Depressive Disorder" (word boundary) outranks "Codeine" (mid-word) for `de`; `del` finds "Suicide & **Del**iberate Self-Harm" |
| D-S3 | `kyp:search` CustomEvent handoff with one-shot seed | browser-verified: hero "de" → Submit → modal opens WITH "de", 50 results; plain ⌘K after close → empty |
| D-S4 | hard-coded depression route removed | generic handoff; hero source pins test forbids its return |
| D-S5 | `searchKyp` replaced by the canonical pure engine | modal + tests consume one engine; platform-hardening pin updated to assert no inline copy |
| D-S6 | Home / End keyboard support | browser-verified: End → idx 49 highlighted + scrolled, Home → idx 0 |
| D-S7 | footer documents the cap | "N of M matches" (query) / "N entries indexed" (empty) |

**Full gates (all on this branch, fresh runs):**
- typecheck EXIT 0 · lint 0 errors (5 known pre-existing warnings)
- **1418/1418 tests pass** (1364 pre-existing + 54 new in `tests/universal-search.test.ts`; 238,476 expects)
- content-lock **165/165 PASS** · medical-data **UNCHANGED** (all object hashes identical)
- standalone build EXIT 0 · static export EXIT 0 (**322 pages, 145/145 drug routes**, robots/sitemap/manifest present)
- OSV: 0 production advisories
- bundle firewall: modal chunk +960 B raw (+275 B gz), hero chunk −98 B; engine has **zero data-layer imports**; registry stays confined to the 5 pinned engine routes
- search performance: **0.6 ms per search** over the full 340-entry index (worst probe, 1000-run median)
- browser QA (static export served locally): ⌘K / navbar button / mobile-menu row / hero form all open the modal; ↓ ↑ Home End Enter Escape + backdrop click all verified; Enter routed to `/psychiatry/delirium/` and `/drugs/lisdexamfetamine/`; hover preview updates the flat active index (Spotlight semantics); real-browser keyboard dispatch verified (focused input receives keys — an initial harness artifact where the CLI pressed the element under the mouse was root-caused, not an app defect)
- mobile (320/375/768): modal fits, no horizontal overflow, result buttons 58 px touch targets, results list scrolls (3111 px content), Escape + backdrop close, floating pill stays hidden < lg (B3 intact), search reachable via menu row
- evidence: `reports/screens/search/de-{320,375,768,1024,1440}-{light,dark}.png` (10 shots, each programmatically state-verified before capture: query `de`, 50 results, correct theme class)

**Known limitations (documented, out of scope):**
- Morphological variants are not stemmed: the full word "depression" does not substring-match the "Depressive Disorders" course (prefix queries "depress"/"dep" do). Keyword enrichment would be a medical-metadata change — deliberately not made under the content firewall.
- Focus after Escape lands on `<body>`, not the trigger (radix Dialog without DialogTrigger association). **Verified identical on baseline `857c50fa`** — pre-existing behavior, not a regression; noted for a future a11y pass.
- Shared taxonomy labels ("Atypical Antidepressants" ×4 distinct classes) render as repeated titles with differentiating descriptions — data-modeling quirk, reported in §4.
