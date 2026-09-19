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

### Medications (12)
`/drugs/sertraline`, `/drugs/fluoxetine`, `/drugs/escitalopram`, `/drugs/paroxetine`, `/drugs/citalopram`, `/drugs/fluvoxamine`, `/drugs/venlafaxine`, `/drugs/duloxetine`, `/drugs/bupropion`, `/drugs/mirtazapine`, `/drugs/amitriptyline`, `/drugs/clomipramine`

### Medication class collections (5)
`/drugs/class/ssri`, `/drugs/class/snri`, `/drugs/class/ndri`, `/drugs/class/nassa`, `/drugs/class/tca`

Derived from the canonical drug registry via `src/lib/kyp/data/drug-taxonomy.ts` (never a second medication array). Unknown class ids 404.

### Substances (3 migrated)
`/substances/alcohol`, `/substances/opioids`, `/substances/cannabis`

### Diseases (1)
`/diseases/major-depressive-disorder`

### Study & practice
`/study` (Study Mode hub), `/study/mistakes` (Mistake Book — questions to revisit, device-local), `/study/review` (spaced review — the Retention Engine's due queue + review session), `/study/analytics` (test history analytics — per-topic/class accuracy, duration trends, mistake persistence), `/quiz` (Quick MCQs — supports `?filter={drug|disease}`), `/quiz/custom` (Custom Test builder — supports `?class={classId}` pre-selection, `?preset={id}` one-tap launch, `?retest=1` Mistake Book handoff, `?weak=1` one-tap Weak-Area Test), `/compare` (side-by-side medication comparison, 2-3 selections)

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
