# KYP Link Map

## Canonical URL Patterns

| Content type | URL pattern | Example |
|---|---|---|
| Medication (drug page) | `/drugs/{slug}` | `/drugs/sertraline` |
| Substance (substance page) | `/substances/{slug}` | `/substances/alcohol` |
| Disease | `/diseases/{slug}` | `/diseases/major-depressive-disorder` |
| Homepage section | `/{section-id}` | `/#library`, `/#substances`, `/#emergency` |
| Auth | `/welcome` | `/welcome` |

## Available Pages (return 200)

### Medications (12)
`/drugs/sertraline`, `/drugs/fluoxetine`, `/drugs/escitalopram`, `/drugs/paroxetine`, `/drugs/citalopram`, `/drugs/fluvoxamine`, `/drugs/venlafaxine`, `/drugs/duloxetine`, `/drugs/bupropion`, `/drugs/mirtazapine`, `/drugs/amitriptyline`, `/drugs/clomipramine`

### Substances (3 migrated)
`/substances/alcohol`, `/substances/opioids`, `/substances/cannabis`

### Diseases (1)
`/diseases/major-depressive-disorder`

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
1. Psychiatric Medications (12 drug pages, featured)
2. Pain Management (coming soon)
3. Antibiotics (planned)
4. Substance Use Disorders (3 substance pages, featured)

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
