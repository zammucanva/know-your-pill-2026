# KYP Link Map

## Canonical URL Patterns

| Content type | URL pattern | Example |
|---|---|---|
| Medication (drug page) | `/drugs/{slug}` | `/drugs/sertraline` |
| Medication class collection | `/drugs/class/{classId}` | `/drugs/class/ndri` |
| Substance (substance page) | `/substances/{slug}` | `/substances/alcohol` |
| Disease | `/diseases/{slug}` | `/diseases/major-depressive-disorder` |
| Homepage section | `/{section-id}` | `/#library`, `/#substances`, `/#emergency` |
| Auth | `/welcome` | `/welcome` |

## Available Pages (return 200)

### Medications (143 — 12 original + 131 Stahl's Prescriber's Guide 6th ed.)
All 143 medication pages live at `/drugs/{slug}` (e.g. `/drugs/sertraline`, `/drugs/olanzapine`, `/drugs/clozapine`). The full list is the canonical registry itself (`src/lib/kyp/data/drugs/index.ts`), browsable on `/drugs` and `/medicine`. Unknown slugs 404.

### Medication class collections (40 — every drugClassLabel in the registry)
`/drugs/class/{classId}` (e.g. `/drugs/class/ssri`, `/drugs/class/atypical-antipsychotic`, `/drugs/class/tca`)

Derived from the canonical drug registry via `src/lib/kyp/data/drug-taxonomy.ts` (never a second medication array). Unknown class ids 404. NOTE: these collections group by `drugClassLabel`; the Phase 5 class comparison (`/compare/classes`) groups by the canonical `DrugClassId` taxonomy — the two views are complementary.

### Substances (3 migrated)
`/substances/alcohol`, `/substances/opioids`, `/substances/cannabis`

### Diseases (1)
`/diseases/major-depressive-disorder`

### Study & practice
`/study` (Study Mode hub), `/study/mistakes` (Mistake Book — questions to revisit, device-local), `/study/review` (spaced review — the Retention Engine's due queue + review session), `/study/analytics` (test history analytics — per-topic/class accuracy, duration trends, mistake persistence), `/quiz` (Quick MCQs — supports `?filter={drug|disease|stahl}`; the `stahl` filter serves the Phase 6 Prescriber-Guide Clinical MCQ bank: 178 source-grounded questions over all 143 medications, every option a verbatim canonical string, drug name, or logical negation — each question shows only its compact drug context, which deep-links the `#prescriber-guide` anchor; the bank/zone/topic metadata stays internal to the MCQ data for validation, filtering and Mistake Book attribution and is not repeated per question), `/quiz/custom` (Custom Test builder — supports `?class={classId}` pre-selection, `?preset={id}` one-tap launch, `?retest=1` Mistake Book handoff, `?weak=1` one-tap Weak-Area Test, plus the opt-in "Stahl's Prescriber's Guide" bank toggle — off by default, adds the selected medications' Stahl questions to the pool under the `stahl` template id; Stahl mistakes self-identify in the Mistake Book via namespaced `{slug}|stahl:{id}` identities), `/compare` (side-by-side medication comparison, 2-3 selections), `/compare/classes` (Stahl's Phase 5 — Class Comparison / Choose by Concern: pick one of the 32 DrugClassId classes derived live from the registry, select up to 6 concerns from the 13 supported dimensions, and read a matrix of each medication's own documented profile; supports `?class={drugClassId}` deep links and `?concerns={id,id}` explicit selection; missing data degrades to "Data not available"; never ranks medications), `/interactions` (Interaction Checker — every interaction the library's own profiles list between 2-6 selected medications, pairwise, verbatim, both directions; unmatched pairs degrade honestly)

### Other
`/` (homepage), `/welcome` (signup/login)

## Homepage Section Anchors

| Anchor | Section |
|---|---|
| `#top` | Hero |
| `#library` | Medication library (includes clinical subcategory chips) |
| `#substances` | Substance use education |
| `#timeline` | Drug timeline demo |
| `#neuroarcade` | NeuroArcade |
| `#roadmap` | In development (roadmap) |
| `#faq` | FAQ |
| `#emergency` | Emergency contacts |

## Category Hierarchy

The homepage has ONE primary category system (Medication Library) with clinical subcategories nested within:

**Top-level categories (Medication Library section):**
1. Psychiatric Medications (12 drug pages, featured — links to `/drugs`)
2. Pain Management (coming soon)
3. Antibiotics (planned)
4. Substance Use Disorders (3 substance pages, featured)

**Medication taxonomy (derived from each drug's canonical `learningPath`, browsable on `/drugs` and `/drugs/class/{classId}`):**

```
Medication Library (/drugs)
└── Psychiatry (#psychiatry)
    └── Antidepressants (#antidepressants)
        ├── SSRIs  (/drugs/class/ssri)  — 6 medications
        ├── SNRIs  (/drugs/class/snri)  — 2 medications
        ├── NDRIs  (/drugs/class/ndri)  — 1 medication (bupropion)
        ├── NaSSAs (/drugs/class/nassa) — 1 medication (mirtazapine)
        └── TCAs   (/drugs/class/tca)   — 2 medications
```

- The taxonomy is DERIVED from the canonical drug registry (`src/lib/kyp/data/drug-taxonomy.ts`) — no second medication array.
- Drug-page breadcrumbs (Psychiatry → Antidepressants → class → medication) link every segment to the collection that browses it.
- Search discovers the collections via `collection` entries in the search index (Psychiatry, Antidepressants, SSRIs, SNRIs, NDRIs, NaSSAs, TCAs).

**Clinical subcategories (nested within Psychiatric Medications as filter chips):**
- Mood & Depression (maps to SSRIs)
- Psychosis & Thought Disorders (maps to antipsychotics)
- Emotional Stability (maps to mood stabilisers)
- Anxiety & Calmness (maps to anxiolytics)
- Sleep & Recovery (maps to sleep aids)

These clinical subcategories are NOT separate top-level sections. They are alternative browse paths within psychiatric pharmacology.

## Unmigrated Substances

These substances exist in the `substances` data array (homepage cards) but do NOT have individual pages yet. Their cards link to `#substances` (the substance use section) rather than a dedicated page:

Cocaine, Nicotine, Amphetamines, Benzodiazepines, Barbiturates, Inhalants, LSD, PCP, Withdrawal State

## Legacy Redirects (standalone mode only)

The following legacy `.html` URLs redirect to their canonical destinations in standalone mode. In static export mode (GitHub Pages), these return a 404 page with navigation links.

| Legacy URL | Redirects to |
|---|---|
| `/psychiatric.html` | `/#library` |
| `/pain-management.html` | `/#library` |
| `/antibiotics.html` | `/#library` |
| `/substance-use.html` | `/#substances` |
| `/medicine.html` | `/#library` |
| `/cocaine.html` | `/#substances` |
| `/nicotine.html` | `/#substances` |
| `/amphetamine.html` | `/#substances` |
| `/benzodiazepines.html` | `/#substances` |
| `/barbiturate.html` | `/#substances` |
| `/inhalants.html` | `/#substances` |
| `/lsd.html` | `/#substances` |
| `/pcp.html` | `/#substances` |
| `/acute-intoxication.html` | `/#substances` |
| `/withdrawal-state.html` | `/#substances` |

## Footer Links (canonical)

The footer links to:
- **Medications:** Sertraline, Fluoxetine, Escitalopram, Bupropion (direct drug pages)
- **Substance Use:** Alcohol, Opioids, Cannabis (direct substance pages)
- **Clinical:** Major Depressive Disorder, Emergency Help, FAQ
- **Platform:** Categories, Medication Library, Substance Use, NeuroArcade, Roadmap, Emergency

## Navigation Consistency

All three navigation surfaces (header nav, footer nav, homepage cards) now point to the same canonical URLs. No `.html` routes remain in any source file.

## SEO Infrastructure (Phase 7 — Structured Data / Schema.org)

### Canonical site origin
Single source of truth: `src/lib/kyp/site-url.ts` (`SITE_URL` / `getSiteUrl()` / `absoluteUrl(path)`).
- Default: `https://zammucanva.github.io/know-your-pill-2026` (the GitHub Pages project site — the repo's only public deployment; no CNAME).
- Override per deployment via `NEXT_PUBLIC_SITE_URL` at build time. Never localhost.
- `metadataBase` in `src/app/layout.tsx` resolves relative metadata URLs against it.

### URL form per mode (they never contradict)
| Mode | trailingSlash | Canonical / OG / JSON-LD / sitemap URL form |
|---|---|---|
| Standalone / dev (`next build`, `next dev`) | false | `…/drugs/sertraline` (no slash) |
| GitHub Pages export (`GITHUB_PAGES=1`) | true | `…/drugs/sertraline/` (trailing slash — matches Next's metadata normalization) |

The mode is wired via `NEXT_PUBLIC_TRAILING_SLASH` in `next.config.ts`.

### Structured data (JSON-LD)
- Builder: `src/lib/kyp/structured-data/index.ts` — the ONLY schema implementation (`buildDrugStructuredData(drug, pageTitle)` → `@graph` with **MedicalWebPage** + **Drug** + **BreadcrumbList**; `serializeJsonLd()` = injection-safe serializer; `validateDrugStructuredData()` = independent runtime validator).
- Rendered by `src/components/kyp/json-ld.tsx` (server component) inside `src/app/drugs/[slug]/page.tsx` — exactly one `<script type="application/ld+json">` per drug page, all 143 drugs.
- Breadcrumb: Home (`/`) → Medication Library (`/drugs`) → class (`/drugs/class/{classId}`) → drug (`/drugs/{slug}`) — real registry-derived routes only.
- Tests: `tests/structured-data.test.ts` (41 tests: identity, source-grounding, determinism, omission policy, serialization security, sitemap inventory, Phase 3–6 regression anchors).

### Sitemap
- `src/app/sitemap.tsx` (NOT `.ts` — the export build's `pageExtensions: ["tsx","jsx"]` excludes `.ts` routes) → `/sitemap.xml`, 201 URLs: `/`, `/drugs`, 40 class pages, 143 drug pages, 3 substances, 1 disease, 12 learning/practice pages + `/legal/terms`. Absolute canonical URLs; `lastModified` from canonical clinical review dates only (deterministic across rebuilds).
- Export build requires `export const dynamic = "force-static"` on the sitemap module (static-export route-handler rule).

### Robots
- `public/robots.txt` — policy unchanged (search/social allowed, AI-training scrapers disallowed); a `Sitemap:` directive pointing at the canonical sitemap was appended.

### Known SEO limitation (documented, not changed)
Drug pages and the site define no `og:image` (no canonical per-drug artwork exists). Adding one is a content/branding decision, not a Phase 7 technical fix — left as-is deliberately.

## Learning-Chain Deep Links (hardening run)

| Surface | URL | Behaviour |
|---|---|---|
| Drug page CTA | `/quiz?drug={slug}` | Focused practice: that medication's micro-quizzes + its Stahl Prescriber-Guide MCQs, with a "Practice all topics" clear action |
| Disease page CTA | `/quiz?filter=disease` | Disease-question pool (pre-existing `?filter=` mechanism) |
| Drug page interactions section | `/interactions?drug={slug}` | Interaction Checker with the medication preselected (user picks the second drug); unknown slugs are ignored |
| Study analytics class rows | `/quiz/custom?class={classId}` | Custom Test pre-filtered to that class (same mapping the Study Mode accuracy chips use) |

## Client-Bundle Data Artifacts (hardening run)

The data barrel (`src/lib/kyp/data/index.ts`) re-exports the full 143-monograph registry via `export *`, so ANY client-side value-import ships the whole registry to the browser. Rules established:

- **Client components never value-import from `@/lib/kyp/data`** — import the specific module (`@/lib/kyp/data/platform`, `…/classes`, `…/brain`, `…/side-effects`, `…/drugs/index`, …). Enforced by `tests/platform-hardening.test.ts`.
- **Search** consumes the GENERATED artifact `src/lib/kyp/data/search-index-generated.ts` (self-contained entries; the live derivation in `search-index.ts` imports the registry at module scope). Regenerate after any registry change with `bun run gen:client-data`; drift is pinned by test (deep-equal).
- **Study surfaces** (StudyNextPanel, ContinueStudying, DailyPlan) consume `src/lib/kyp/study/course-stats-generated.ts` (outline sizes + course count + first course slug) instead of deriving from the registry in three client chunks.
- The registry still ships (by design) on the surfaces that genuinely need full records client-side: `/quiz`, `/quiz/custom`, `/study/review`, `/compare`, `/interactions`.
- Server components (homepage sections, `/drugs`, `/learn`, drug/class pages, `/study`) may import from the barrel freely — computed at request/build time.

## Print & PWA (hardening run)

- **Print stylesheet** — `@media print` block in `src/app/globals.css`: floating chrome is `print:hidden` (navbar, FAB search, sticky rails, guided-learning toggle, lesson strip, footer), framer-motion inline opacity/transform is forced visible (below-the-fold `Reveal` content would otherwise print blank), dark mode is forced to the light palette, sticky elements become static, clipped tables expand, cards avoid page-break-inside.
- **PWA manifest** — `public/manifest.webmanifest` (icons 64/128/512, theme colour `#007677`, standalone display; relative paths so one file serves both standalone and GitHub Pages basePath). Linked from `layout.tsx` metadata + `themeColor` viewport export. No service worker (documented decision — static-export caching risk).
