# PHASE 2 — SUBSTANCE MIGRATION TEMPLATE

**Status: PHASE 2 SUBSTANCE MIGRATION TEMPLATE: COMPLETE — READY FOR BATCH MIGRATION**

**Reference implementation:** Alcohol (corrected), at `src/lib/kyp/data/substances/alcohol.ts` + `src/app/substances/[slug]/page.tsx`.

**Purpose:** Define a single, reusable specification for migrating the remaining 10 substance pages from `kyp-neon/*.html` into the Next.js minimalist platform. Every future substance migration must conform to this document.

**Scope:** This is a specification document only. No application source files were modified to produce this document.

---

## TABLE OF CONTENTS

1. [Canonical Substance schema](#1-canonical-substance-schema)
2. [Required common fields](#2-required-common-fields)
3. [Optional substance-specific fields](#3-optional-substance-specific-fields)
4. [Canonical /substances/[slug] route architecture](#4-canonical-substancesslug-route-architecture)
5. [Canonical minimalist UI components to reuse](#5-canonical-minimalist-ui-components-to-reuse)
6. [Source HTML → Substance schema mapping](#6-source-html--substance-schema-mapping)
7. [Source-fidelity rules](#7-source-fidelity-rules)
8. [Rules for preserving substance-specific sections](#8-rules-for-preserving-substance-specific-sections)
9. [Rules for handling content that does not fit the schema](#9-rules-for-handling-content-that-does-not-fit-the-schema)
10. [Rules prohibiting invented medical content](#10-rules-prohibiting-invented-medical-content)
11. [Medical-review flag handling](#11-medical-review-flag-handling)
12. [Asset reuse rules](#12-asset-reuse-rules)
13. [Homepage/card linking rules](#13-homepagecard-linking-rules)
14. [Validation checklist](#14-validation-checklist)
15. [Completion-report requirements](#15-completion-report-requirements)
16. [Incomplete source files — special handling](#16-incomplete-source-files--special-handling)

---

## 1. CANONICAL SUBSTANCE SCHEMA

The canonical schema lives in `src/lib/kyp/data/substance-types.ts`. The full TypeScript definition is reproduced below for reference. **Do not duplicate this schema elsewhere.** If a future substance requires a new optional field, extend `substance-types.ts` once and document the addition in the completion report.

```typescript
import type { DrugClassId } from "./types";

export interface SubstanceClassification {
  title: string;
  description: string;
  types?: {
    symbol?: string;       // e.g. Jellinek α, β, γ, δ, ε
    name: string;
    description?: string;
    features: string[];
  }[];
}

export interface SubstanceScreeningTool {
  name: string;
  description: string;
  questions: { text: string; meaning: string }[];
  scoring: string;
}

export interface SubstanceSeverityScale {
  level: string;
  value?: string;          // e.g. "25-100 mg%"
  effects: string;
}

export interface SubstanceMechanism {
  title: string;
  description: string;
}

export interface ClinicalFeature {
  symptom: string;
  mechanism?: string;
}

export interface WithdrawalPhase {
  phase: string;
  timing?: string;         // e.g. "6-12 hours" — preserve source units exactly
  symptoms: string;
}

export interface WithdrawalEmergencyCallout {
  title: string;           // e.g. "Delirium Tremens"
  description: string;     // source verbatim
}

export interface ComplicationEntry {
  name: string;
  description: string;
}

export interface MechanismFlowStep {
  step: string;            // e.g. "1", "2"
  title: string;
  description: string;
}

export interface ReactionSymptomGroup {
  category: string;        // e.g. "Common Symptoms", "Severe Symptoms"
  symptoms: string[];
}

export interface TreatmentOption {
  name: string;
  description: string;
  mechanism?: string;            // short class label (e.g. "Opioid Antagonist")
  notes?: string;                // contraindications, warnings
  mechanismFlow?: MechanismFlowStep[];
  mechanismNotes?: string[];
  reactionSymptoms?: ReactionSymptomGroup[];
}

export interface DetoxStep {
  title: string;
  description: string;
}

export interface SubstanceEmergency {
  warningSigns: string[];
  contacts: { label: string; number: string }[];
  // NOTE: no `immediateActions` field — this was invented in the first
  // Alcohol pass and removed during correction. Do not reintroduce it
  // unless the source HTML explicitly contains such a list.
}

export interface RecoveryInfo {
  title: string;
  description: string;
}

export interface SubstancePage {
  /* ---- Identity ---- */
  slug: string;
  name: string;
  disorderName: string;
  drugClass: DrugClassId;
  artwork?: string;
  artworkAlt?: string;

  /* ---- Hero ---- */
  tagline: string;
  summary: string;
  neurotransmitter: string;

  /* ---- Overview ---- */
  overview?: {
    title: string;
    description: string;
    keyConcepts?: string[];
    mechanisms?: SubstanceMechanism[];
  };

  /* ---- Classification (optional — substance-specific) ---- */
  classifications?: SubstanceClassification[];

  /* ---- Screening tools (optional — substance-specific) ---- */
  screeningTools?: SubstanceScreeningTool[];

  /* ---- Severity scale (optional — substance-specific) ---- */
  severityScale?: SubstanceSeverityScale[];

  /* ---- Neurobiology ---- */
  neurobiology?: {
    summary: string;
    mechanisms: SubstanceMechanism[];
    brainRegions?: string[];
    neurotransmitters?: string[];
  };

  /* ---- Intoxication ---- */
  intoxication?: {
    summary: string;
    clinicalFeatures: ClinicalFeature[];
    mechanisms?: string[];
    whenToSeekHelp?: string[];
  };

  /* ---- Withdrawal ---- */
  withdrawal?: {
    summary: string;
    phases: WithdrawalPhase[];
    mechanisms?: string[];
    emergencyCallout?: WithdrawalEmergencyCallout;
  };

  /* ---- Complications ---- */
  complications?: ComplicationEntry[];

  /* ---- Treatment ---- */
  treatment?: {
    summary: string;
    detoxificationSteps?: DetoxStep[];
    detoxificationProtocol?: { title: string; description: string; keyPoints?: string[] };
    medications?: TreatmentOption[];
    psychosocial?: TreatmentOption[];
    recovery?: RecoveryInfo[];
  };

  /* ---- Emergency ---- */
  emergency?: SubstanceEmergency;

  /* ---- Metadata ---- */
  lastReviewed: string;     // ISO date (YYYY-MM-DD)
  source: string;           // e.g. "Migrated from PROJECT-KYP <slug>.html (neon source). Content preserved faithfully."
}
```

The Substance registry lives in `src/lib/kyp/data/substances/index.ts`:

```typescript
import type { SubstancePage } from "../substance-types";
import { alcohol } from "./alcohol";
// Future: import { opioids } from "./opioids"; etc.

export const substancePages: SubstancePage[] = [
  alcohol,
  // opioids,
  // cannabis,
  // ...
];

export function getSubstancePage(slug: string): SubstancePage | undefined {
  return substancePages.find((s) => s.slug === slug);
}

export function getAllSubstanceSlugs(): string[] {
  return substancePages.map((s) => s.slug);
}
```

---

## 2. REQUIRED COMMON FIELDS

Every substance **must** populate these fields. A substance file that omits any required field is not a valid migration.

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| `slug` | `string` | Kebab-case of substance name | Must match the route parameter and the filename (`<slug>.ts`). |
| `name` | `string` | Source H1 / hero | e.g. "Alcohol", "Opioids", "Cannabis". |
| `disorderName` | `string` | Source `<title>` or H1 | e.g. "Alcohol Use Disorders", "Opioid Use Disorder". |
| `drugClass` | `DrugClassId` | Existing `src/lib/kyp/data/types.ts` union | Must match an existing `drugClasses` entry. |
| `tagline` | `string` | Source hero `<p class="lede">` | Verbatim from source. |
| `summary` | `string` | Source overview / first body paragraph | Verbatim from source. If the source has no clear summary paragraph, use the first non-heading text in the overview section. |
| `neurotransmitter` | `string` | Source neurobiology section | e.g. "GABA · Dopamine · Glutamate". Use middle-dot (·) as separator. |
| `lastReviewed` | `string` (ISO date) | Migration date | `YYYY-MM-DD`. |
| `source` | `string` | — | Use exactly: `"Migrated from PROJECT-KYP <slug>.html (neon source). Content preserved faithfully."` |

**Required-via-rendering:** Although `overview`, `neurobiology`, `intoxication`, `withdrawal`, `complications`, `treatment`, and `emergency` are all optional in the TypeScript schema, a substance page that omits more than one of them will render as a near-empty page. Treat them as required unless the source genuinely does not contain that section (see §16 for the three incomplete sources).

---

## 3. OPTIONAL SUBSTANCE-SPECIFIC FIELDS

These fields exist in the schema but are populated **only when the source contains the corresponding content**. Never populate them from general medical knowledge.

| Field | Used for | Source section example | Used by Alcohol? |
|-------|----------|------------------------|-------------------|
| `overview.keyConcepts` | Bullet list of foundational concepts | "Tolerance / Withdrawal / Neuroadaptation / Compulsive Drinking" | YES |
| `overview.mechanisms` | 2–4 mechanism cards (GABA / NMDA / Dopamine etc.) | "Brain Mechanisms" expandable section | YES |
| `classifications` | Classification systems with named types | Jellinek (5 species), Cloninger (Type I/II) | YES — Alcohol-specific. **Do not assume other substances have classifications.** |
| `screeningTools` | Screening questionnaire with per-question clinical meanings | CAGE (4 questions + meanings + scoring) | YES — Alcohol-specific. **CAGE does not exist for other substances.** |
| `severityScale` | Numeric severity scale with units | BAC (`mg%`) | YES — Alcohol-specific. **BAC does not exist for other substances.** Each substance with a severity scale must preserve source units exactly (do not convert `mg%` to `mg/dL`, do not collapse ranges, do not invent a "Sobriety" row). |
| `neurobiology.brainRegions` | Brain region badges | "Nucleus Accumbens", "Prefrontal Cortex" | YES |
| `neurobiology.neurotransmitters` | Neurotransmitter badges | "GABA", "Glutamate", "Dopamine" | YES |
| `intoxication.whenToSeekHelp` | Emergency sub-panel inside intoxication section | "When to Seek Help" / 4 source indicators | YES — only if source has this sub-panel |
| `withdrawal.emergencyCallout` | Emergency callout inside withdrawal section | DT "life-threatening emergency … ICU care" | YES — only if source has this callout |
| `treatment.detoxificationProtocol` | Protocol card with key points | "Detoxification Protocol" / "Safe Detoxification" | YES |
| `treatment.medications[].mechanismFlow` | Ordered multi-step mechanism flow | Disulfiram 5-step flow | YES — substance-specific (Disulfiram) |
| `treatment.medications[].mechanismNotes` | Additional mechanism bullets | Disulfiram 4 mechanism notes | YES — substance-specific |
| `treatment.medications[].reactionSymptoms` | Symptom groups for drug-induced reactions | Disulfiram-Ethanol Reaction Common/Severe | YES — substance-specific |
| `treatment.medications[].notes` | Contraindication / warning text | Disulfiram contraindications | YES |
| `treatment.psychosocial` | Psychosocial interventions | Psychotherapy, CBT, AA, Motivational Enhancement | YES |
| `treatment.recovery` | Long-term recovery entries | Relapse Prevention, Nutritional Rehabilitation | YES |

**Future substance-specific fields** (anticipated from the source audit, but only to be populated if the source contains them):

| Anticipated field | Source substance | Notes |
|-------------------|------------------|-------|
| Opioid `emergency.naloxoneInfo` | opioids.html | If source has a "Naloxone Mechanism" / "Naloxone Rescue" section. Schema may need extending. |
| Opioid `treatment.maintenance` | opioids.html | If source has a "Maintenance Therapy" section with methadone/buprenorphine. Schema may need extending. |
| Cannabis `preparations` | cannabis.html | If source has a "Cannabis Preparations" section. Schema may need extending. |
| Cocaine `preparations` | cocaine.html | If source has a "Forms & Administration" section (crack, freebase). Schema may need extending. |
| Inhalants `complications[].uniqueSyndrome` | inhalants.html | If source has "Sudden Sniffing Death Syndrome". Use existing `complications` array — no schema change needed. |
| LSD `complications[].uniqueSyndrome` | lsd.html | If source has "HPPD". Use existing `complications` array — no schema change needed. |
| Nicotine `treatment.nrt` | nicotine.html | If source has a "Nicotine Replacement Therapy" section. Schema may need extending. |

**When extending the schema for a substance-specific field:**
1. Add the new optional field to `substance-types.ts` (single source of truth).
2. Add rendering for the new field in `src/app/substances/[slug]/page.tsx`.
3. Document the extension in the substance's completion report.
4. Do not duplicate the field elsewhere.

---

## 4. CANONICAL /substances/[slug] ROUTE ARCHITECTURE

The route lives at `src/app/substances/[slug]/page.tsx` and is **frozen** as the canonical implementation. Do not create parallel substance routes (e.g. `/substance/[slug]`, `/substances-v2/[slug]`).

### 4.1 File structure

```
src/app/substances/[slug]/
└── page.tsx        # Server Component — single file, no client components
```

### 4.2 Required exports

| Export | Signature | Purpose |
|--------|-----------|---------|
| `generateStaticParams` | `(): { slug: string }[]` | Returns `getAllSubstanceSlugs().map((slug) => ({ slug }))` for SSG. |
| `generateMetadata` | `async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata>` | Awaits `params`, looks up the substance, returns `{ title, description, authors, openGraph }`. |
| `SubstancePage` (default) | `async ({ params }: { params: Promise<{ slug: string }> })` | Awaits `params`, calls `getSubstancePage(slug)`, returns `notFound()` if missing, otherwise renders the page. |

### 4.3 Required Next.js patterns

- **Server Component** — no `"use client"` directive at the top of the file.
- **Async params** — `params: Promise<{ slug: string }>` (Next.js 16 pattern). Always `await params` before reading `slug`.
- **`generateStaticParams` + `generateMetadata`** — both required for SSG and SEO.
- **`notFound()`** — call from `next/navigation` when `getSubstancePage(slug)` returns `undefined`.

### 4.4 Page shell

The page must compose the global chrome in this order:

```tsx
return (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <FloatingSearch variant="floating" />
    <main className="flex-1 pt-16">
      {/* HERO */}
      {/* OVERVIEW */}
      {/* CLASSIFICATION (optional) */}
      {/* SCREENING (optional) */}
      {/* SEVERITY SCALE (optional) */}
      {/* NEUROBIOLOGY */}
      {/* INTOXICATION */}
      {/* WITHDRAWAL */}
      {/* COMPLICATIONS */}
      {/* TREATMENT (steps + protocol + medications + psychosocial + recovery) */}
      {/* EMERGENCY */}
      {/* METADATA */}
    </main>
    <Footer />
  </div>
);
```

The global chrome (`Navbar`, `Footer`, `FloatingSearch`) is owned by the page, not by a shared layout wrapper. Do not introduce a `RouteFrame` or per-route layout component — the existing `src/app/layout.tsx` owns `ThemeProvider` + `Toaster` + fonts, and that is sufficient.

### 4.5 Section rendering rules

- Every optional section is rendered conditionally (`{substance.foo && (...)}`).
- Section IDs use kebab-case (`overview`, `classification`, `screening`, `severity`, `neurobiology`, `intoxication`, `withdrawal`, `complications`, `treatment`, `emergency`).
- Alternate sections use `className="bg-muted/20"` for visual rhythm.
- Section ordering follows the source HTML section ordering where possible (alcohol.html order: overview → classification → screening → severity → intoxication → withdrawal → complications → treatment → emergency). Substances with different source ordering should follow their own source.

---

## 5. CANONICAL MINIMALIST UI COMPONENTS TO REUSE

The substance route must reuse the existing `@/components/kyp/*` primitives. **Do not create new component families for substances.** Do not import any neon CSS/JS/UI.

### 5.1 Required imports

```tsx
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";  // only if needed
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
```

### 5.2 Component contracts (do not violate)

| Component | Allowed props | Notes |
|-----------|---------------|-------|
| `SectionHeader` | `eyebrow`, `title`, `description?`, `action?`, `tone?` | `tone` accepts ONLY `"brand" | "neural" | "emergency"`. **Do not pass `"warning"`** — this was the TypeScript error fixed in the Alcohol correction. Use `"emergency"` for warning-toned sections (Intoxication, Withdrawal, Complications, Emergency). |
| `Callout` | `variant`, `title`, `children` | `variant` accepts ONLY `"info" | "warning" | "danger" | "success" | "tip"`. **Do not pass `"emergency"`** — use `"danger"` for emergency-styled callouts (DT callout, contraindication boxes). |
| `Badge` | `variant`, `size`, `children` | Use `variant="brand"` for class badges, `variant="neural"` for brain-region/neurotransmitter badges, `variant="outline"` for key-concept chips. |
| `Section` | `id`, `className?`, `spacing?`, `children` | Use `className="bg-muted/20"` on alternate sections for visual rhythm. |
| `Container` | `className?`, `children` | Wraps section content; respects max-width. |

### 5.3 Icons

Use `lucide-react` icons only. Do not import SVGs from `kyp-neon/`. The Alcohol reference uses:

- `AlertTriangle` — warning signs, emergency indicators
- `Activity` — mechanism notes
- `HeartPulse` — reaction symptoms

Future substances may add other `lucide-react` icons as needed, but should not import from any other source.

### 5.4 Forbidden imports

- ❌ Anything from `kyp-neon/*` (CSS, JS, HTML, SVG, images other than `/artwork/*`)
- ❌ Anything from `PROJECT-KYP/*`
- ❌ GSAP, ScrollTrigger, or any animation library not already in `package.json`
- ❌ Any per-substance CSS variable (e.g. `--alcohol-primary`, `--opioid-accent`)
- ❌ Inline `<style>` tags
- ❌ Client components (`"use client"`) inside `substances/[slug]/page.tsx`

---

## 6. SOURCE HTML → SUBSTANCE SCHEMA MAPPING

The neon source HTML follows a consistent structure across substances. Map source sections to schema fields as follows:

| Source HTML section (by `id` or class) | Schema field | Notes |
|------------------------------------------|--------------|-------|
| `<section class="hero">` (hero block) | `tagline`, `summary`, `artwork`, `artworkAlt` | `tagline` ← hero `<p class="lede">`. `summary` ← first overview paragraph (hero has no summary). `artwork` ← existing `/artwork/<slug>.png`. |
| `#neural-learning-search` (search console) | — | **Intentionally not migrated.** Universal `⌘K` search replaces it. |
| `#<slug>-overview` or `#overview` | `overview` | `title` ← H2. `description` ← `section-subtitle`. `keyConcepts` ← expandable "Key Concepts" bullets. `mechanisms` ← expandable "Brain Mechanisms" cards. |
| `#classification` (e.g. Jellinek) | `classifications[0]` | `title` ← H2. `description` ← `section-subtitle`. `types[]` ← each card: `symbol` ← `.jellinek-type` (Greek letter), `name` ← `.jellinek-name`, `description` ← `.jellinek-desc`, `features[]` ← `.jellinek-feature` bullets. |
| `#cloninger` (second classification) | `classifications[1]` | `title` ← H2. `description` ← `section-subtitle`. `types[]` ← each `.cloninger-type-card`: `name` ← `.cloninger-title`, `features[]` ← `.cloninger-features` `<li>` text (strip the leading ✓). |
| `#cage` (CAGE questionnaire) | `screeningTools[0]` | `name` ← H2. `description` ← `section-subtitle`. `questions[]` ← each `.cage-card`: `text` ← `.cage-question` (strip quotes), `meaning` ← `.cage-meaning`. `scoring` ← `.cage-score-info` text (strip the leading "Scoring:" label). |
| `#bac-levels` (BAC scale) | `severityScale[]` | Each `.bac-level`: `value` ← `.bac-range` (preserve source unit notation — do not convert `mg%` to `mg/dL`), `effects` ← `.bac-symptoms`, `level` ← derive a short label from effects (e.g. "Excitement", "Slurred Speech"). |
| `#neurobiology` | `neurobiology` | `summary` ← `section-subtitle`. `mechanisms[]` ← each `.mechanism-card` or `.psychedelic-card` or `.gaba-card`: `title` ← card title, `description` ← card `<p>`. `brainRegions[]` and `neurotransmitters[]` ← derive from card content if source lists them; otherwise omit. |
| `#intoxication` | `intoxication` | `summary` ← `.pattern-summary <p>`. `clinicalFeatures[]` ← flatten all `.symptom-list <li>` across all `.symptom-column` groups into a single array. `mechanisms[]` ← `.mechanism-card` descriptions (if present). `whenToSeekHelp[]` ← `.emergency-indicators` / `.emergency-item` text (if present). |
| `#withdrawal` | `withdrawal` | `summary` ← `section-subtitle`. `phases[]` ← each `.timeline-event`: `phase` ← `.timeline-title`, `timing` ← `.timeline-time` (preserve source units exactly), `symptoms` ← `.timeline-desc`. `mechanisms[]` ← `.mechanism-card` descriptions. `emergencyCallout` ← if source has a DT/life-threatening callout, capture `title` ← callout H4 and `description` ← callout `<p>`. |
| `#complications` | `complications[]` | Each `.neuro-complication-card` / `.cocaine-complication-card`: `name` ← `.complication-title` / `.coc-complication-title`, `description` ← `.complication-desc` / `.coc-complication-desc`. Drop the cause tag (e.g. "Thiamine Deficiency") unless explicitly captured in a `notes`-style field. |
| `#treatment` | `treatment` | `summary` ← `section-subtitle`. `detoxificationSteps[]` ← each `.treatment-step`: `title` ← `.treatment-step-title`, `description` ← `.treatment-step-desc`. `detoxificationProtocol` ← `.pattern-card[data-pattern="detox"]`: `title` ← `.pattern-title-group h3`, `description` ← `.pattern-summary <p>`, `keyPoints[]` ← `.neuro-list <li>` text (strip leading bold label and em-dash if format is `<strong>Label</strong> — description`). `medications[]` ← `.medication-card`: `name` ← `.med-name`, `mechanism` ← `.med-class`, `description` ← `.med-mechanism`. `psychosocial[]` ← `.recovery-card` in `#psychosocial` section. `recovery[]` ← `.recovery-card` in `#recovery` section. |
| `#disulfiram` (substance-specific mechanism section) | `treatment.medications[]` entry with `mechanismFlow` + `reactionSymptoms` + `notes` | `mechanismFlow[]` ← each `.mechanism-step`: `step` ← `.mechanism-step-number`, `title` ← `.mechanism-step-title`, `description` ← `.mechanism-step-desc`. `reactionSymptoms[]` ← each `.symptom-column`: `category` ← column H5, `symptoms[]` ← column's `.symptom-list <li>`. `mechanismNotes[]` ← `.neuro-list <li>` from "Mechanism" sub-section. `notes` ← contraindication callout text (full source text, not truncated). |
| `#anticraving` / `#medications` (anti-craving section) | `treatment.medications[]` (appended) | Each `.medication-card` becomes a `TreatmentOption` with `name`, `mechanism` (← `.med-class`), `description` (← `.med-mechanism`). |
| `#psychosocial` | `treatment.psychosocial[]` | Each `.recovery-card`: `name` ← `.recovery-title`, `description` ← `.recovery-desc`. |
| `#recovery` | `treatment.recovery[]` | Each `.recovery-card`: `title` ← `.recovery-title`, `description` ← `.recovery-desc`. |
| `#emergency-help` | `emergency` | `warningSigns[]` ← each `.emergency-sign` text. **Do not invent an `immediateActions` array** — the source does not have one. `contacts[]` ← each `.emergency-contact-btn` (parse label and number from the text or `href`). If the source has an intro paragraph before the signs grid, render it as a `<p>` immediately after the `SectionHeader`. |

### 6.1 Source-ordered rendering

Where possible, render sections in source order. The Alcohol source order is: hero → overview → classification (Jellinek) → classification (Cloninger) → CAGE → BAC → intoxication → withdrawal → complications → treatment → disulfiram → anti-craving → psychosocial → recovery → emergency.

For substances with different source ordering (e.g. opioids has "Maintenance Therapy" between "Detoxification Protocol" and "Psychosocial Rehabilitation"), preserve the source order in the rendered page.

---

## 7. SOURCE-FIDELITY RULES

These rules are non-negotiable. The Alcohol correction pass was performed specifically because the first migration violated them.

### 7.1 Verbatim preservation

- **Section titles:** Preserve source H2/H3/H4 titles verbatim. Do not rename "Assessment" to "Comprehensive Evaluation", "Psychotherapy" to "Individual Therapy", "Motivational Enhancement" to "Motivational Interviewing", "Behavioral Therapy" to "Contingency Management", "Neuroplasticity Recovery" to "Neuroplasticity & Brain Healing", or "Family Support" to "Family Therapy".
- **Descriptions:** Preserve source paragraph text verbatim, including source punctuation, source quotation marks (e.g. `"Stocking-glove"`), and source em-dashes.
- **Numeric values:** Preserve source numeric values exactly. Do not convert `mg%` to `mg/dL`. Do not collapse `300-350 mg%` and `350-400 mg%` into `>400 mg%`. Do not narrow `12-48 hours` to `12-24 hours`. Do not narrow `48-96 hours` to `48-72 hours`.
- **Symptom text:** Preserve source symptom text verbatim. Do not rewrite "Death may occur" as "Respiratory arrest, coma, death".
- **Unit notation:** Preserve source unit notation exactly (`mg%`, `mg/dL`, `hours`, `days`, `μg`, etc.).
- **Greek letters:** Preserve source Greek letters exactly (α, β, γ, δ, ε — not "alpha", "beta", "gamma", "delta", "epsilon").

### 7.2 No content loss

- **All source sections must be migrated.** Do not omit a source section because it is "hard to schema-fit". If a section does not fit the schema, extend the schema (see §9) or note the gap in the completion report.
- **All source list items must be migrated.** Do not omit individual list items from a feature list, symptom list, or key-points list.
- **All source callouts must be migrated.** Do not omit emergency callouts, danger notes, or critical warnings.
- **All source medication entries must be migrated.** Do not substitute one medication for another (e.g. do not replace Carbamazepine with Gabapentin).

### 7.3 No content addition

- **No invented fields.** Do not add an `immediateActions` array to `SubstanceEmergency` unless the source explicitly contains such a list.
- **No invented list items.** Do not add "Suicidal ideation or attempts", "Severe dehydration or electrolyte imbalance", or "Severe bleeding or injury while intoxicated" to an emergency warning signs list unless the source contains them.
- **No invented rows.** Do not add a "Sobriety" row to a BAC scale unless the source contains one.
- **No invented meanings.** Do not add clinical interpretations to CAGE questions unless the source provides them.
- **No invented mechanism flows.** Do not add a 5-step mechanism flow to a medication unless the source provides one.
- **No invented symptom lists.** Do not add Common/Severe reaction symptom lists to a medication unless the source provides them.

### 7.4 No content substitution

- **No drug substitutions.** If the source lists Carbamazepine, do not migrate Gabapentin. If the source lists Methadone, do not migrate Buprenorphine. Each medication entry must match the source exactly.
- **No unit conversions.** If the source uses `mg%`, do not convert to `mg/dL`. If the source uses `hours`, do not convert to `minutes`.
- **No range narrowing.** If the source says `12-48 hours`, do not narrow to `12-24 hours`. If the source says `48-96 hours`, do not narrow to `48-72 hours`.
- **No row collapsing.** If the source has 6 BAC rows, do not collapse to 5.

### 7.5 File header attestation

Every substance file must begin with a header comment that accurately describes the source-fidelity policy. Use exactly this wording:

```typescript
import type { SubstancePage } from "../substance-types";

/**
 * <Substance Name> — migrated from PROJECT-KYP <slug>.html (neon source).
 *
 * Source-fidelity policy:
 *   - All clinical content transcribed verbatim (or near-verbatim where formatting
 *     required minor rewording) from kyp-neon/<slug>.html.
 *   - Source section headings, terminology, numeric values, time windows, and
 *     symptom text preserved exactly.
 *   - No medical claims added, removed, or substituted beyond what the source states.
 *
 * Source sections preserved:
 *   1. <list every source section migrated>
 */
export const <slug>: SubstancePage = {
  // ...
  source: "Migrated from PROJECT-KYP <slug>.html (neon source). Content preserved faithfully.",
};
```

The "Source sections preserved" list must enumerate every source section that was migrated. This is the audit trail.

---

## 8. RULES FOR PRESERVING SUBSTANCE-SPECIFIC SECTIONS

Each substance has unique content that does not appear in other substances. These must be preserved faithfully.

### 8.1 What counts as "substance-specific"

A section is substance-specific if it appears in only one substance's source HTML. Examples:

| Substance | Substance-specific sections |
|-----------|------------------------------|
| Alcohol | Jellinek classification, Cloninger classification, CAGE questionnaire, BAC scale, Disulfiram mechanism flow, Disulfiram-Ethanol Reaction |
| Opioids (anticipated) | Naloxone mechanism, Naloxone rescue, Maintenance therapy (methadone/buprenorphine) |
| Cannabis (anticipated) | Cannabis preparations, Amotivational syndrome, Hemp insanity |
| Cocaine (anticipated) | Forms & administration (crack, freebase) |
| Inhalants (anticipated) | Sudden Sniffing Death Syndrome |
| LSD (anticipated) | HPPD, Bad trip management |
| Nicotine (anticipated) | Nicotine Replacement Therapy (NRT) |

### 8.2 Preservation rules

1. **Do not assume universality.** CAGE is alcohol-specific. BAC is alcohol-specific. Jellinek is alcohol-specific. Disulfiram is alcohol-specific. Alcohol withdrawal timings (`6-12h`, `12-48h`, `48-96h`) are alcohol-specific. Alcohol emergency guidance is alcohol-specific. Do not copy any of these into other substances.
2. **Do not invent substance-specific sections.** If the source for substance X does not contain a section analogous to CAGE, do not invent one.
3. **Do not borrow across substances.** Each substance's content comes from its own source HTML only.
4. **Preserve source terminology.** If the source calls something "Amotivational Syndrome", do not rename it to "Motivation Deficit". If the source calls something "Hemp Insanity", do not rename it to "Cannabis Psychosis" (unless the source itself uses both terms — then preserve both).
5. **Preserve source structure.** If the source presents a 5-step mechanism flow, migrate it as a 5-step `mechanismFlow` array. If the source presents Common/Severe symptom groups, migrate them as a `reactionSymptoms` array with two `ReactionSymptomGroup` entries.

### 8.3 Substance-specific schema extensions

When a substance requires a field that does not exist in the schema:

1. **Check if an existing field can hold the content.** Many substance-specific sections can fit into `complications`, `treatment.medications`, or `treatment.psychosocial` without schema changes.
2. **If no existing field fits, extend the schema.** Add an optional field to `substance-types.ts`. Document the addition in the substance's completion report. Update this template document (§3) to list the new field.
3. **Do not duplicate.** Do not create a parallel field that duplicates an existing field's purpose.

---

## 9. RULES FOR HANDLING CONTENT THAT DOES NOT FIT THE SCHEMA

### 9.1 Source content with no schema home

If the source contains content that cannot be mapped to any existing schema field and cannot reasonably extend the schema:

1. **Do not omit the content.** Source-fidelity is non-negotiable.
2. **Do not paraphrase it into a different field.** If the content does not fit, do not force it.
3. **Add a new optional field.** Extend the schema with a clearly-named optional field that captures the source structure.
4. **Render the new field.** Add rendering in `page.tsx` using the existing minimalist UI primitives (Section, Container, SectionHeader, Badge, Callout).
5. **Document the extension.** Note it in the substance's completion report under "Schema extensions".

### 9.2 Decorative source content

The following source elements are **decorative** and should not be migrated:

- "Find a Concept Fast" neural search console (replaced by global `⌘K` search)
- Learning progress bar (replaced by the platform's own scrollspy + completion system, when present)
- Ambient-depth blobs, floating pills, decorative molecules
- Per-substance CSS variables (`--alcohol-primary`, `--opioid-accent`, etc.)
- GSAP / ScrollTrigger animations
- Theme toggle (the platform has its own theme system)
- Mobile menu toggle (the platform has its own navbar)
- Inline `<script>` blocks

These omissions are acceptable and do not need to be noted as "content loss" in the completion report.

### 9.3 Interactive source content

Some source content is interactive (e.g. CAGE card-flip, pattern-card expand/collapse). The migration should preserve the *content* of these interactions but not necessarily the *interaction pattern*:

- CAGE card-flip → render as explicit question+meaning cards (Alcohol reference implementation).
- Pattern-card expand/collapse → render all content expanded (the platform's minimalist aesthetic does not use accordions for primary content).
- Quick-search tag buttons → not migrated (replaced by `⌘K` search).

### 9.4 Source content with structural ambiguity

If the source structure is ambiguous (e.g. a section that could be either `complications` or `withdrawal.emergencyCallout`):

1. **Prefer the source's own section classification.** If the source puts it in `#withdrawal`, it goes in `withdrawal`.
2. **Prefer the most-specific schema field.** An emergency callout inside the withdrawal section goes in `withdrawal.emergencyCallout`, not in the page-level `emergency` block.
3. **Document the decision.** Note any structural interpretation in the completion report.

---

## 10. RULES PROHIBITING INVENTED MEDICAL CONTENT

### 10.1 Absolute prohibitions

The following are **forbidden** in any substance migration:

1. ❌ Inventing medical claims not present in the source.
2. ❌ Replacing source content with general medical knowledge.
3. ❌ Reinterpreting source clinical claims.
4. ❌ Changing treatment recommendations.
5. ❌ Substituting one medication for another.
6. ❌ Narrowing or widening source numeric ranges.
7. ❌ Converting source units (`mg%` → `mg/dL`, `hours` → `minutes`).
8. ❌ Adding emergency warning signs not in the source.
9. ❌ Adding `immediateActions` arrays not in the source.
10. ❌ Adding severity-scale rows not in the source.
11. ❌ Adding per-question clinical meanings not in the source.
12. ❌ Adding mechanism flows not in the source.
13. ❌ Adding reaction symptom lists not in the source.
14. ❌ Renaming source section titles to "improve" them.
15. ❌ Rewriting source descriptions to "clarify" them.

### 10.2 Permissible minor formatting changes

The following minor formatting changes are **allowed** because they do not alter clinical meaning:

- Stripping leading/trailing whitespace from source text.
- Converting source HTML entities (`&amp;` → `&`, `&gt;` → `>`).
- Converting source smart quotes to straight quotes (or vice versa) — but be consistent within a single file.
- Adding em-dashes or colons for list-item formatting when the source uses bold labels (e.g. `<strong>Tolerance</strong> — Need for increased...`).
- Truncating source text at sentence boundaries when a single source paragraph is split across multiple schema fields.

### 10.3 Permissible structural reorganisation

The following structural reorganisations are **allowed** because they preserve all source content:

- Moving Disulfiram from its own source section into `treatment.medications[]` (as long as all source content — mechanism flow, reaction symptoms, contraindications — is preserved on the medication entry).
- Splitting a source "Brain Mechanisms" expandable section into separate `overview.mechanisms` and `neurobiology.mechanisms` if the source itself splits them across overview and neurobiology sections.
- Merging multiple source callouts into a single `keyPoints[]` array if they all belong to the same protocol.

### 10.4 When in doubt

If you are unsure whether a change is permissible:

1. **Default to verbatim.** Preserve source text exactly.
2. **Document the decision.** Note any interpretation in the completion report.
3. **Flag for medical review.** If the source content is clinically ambiguous, flag it in the completion report under "Medical-review flags" (see §11).

---

## 11. MEDICAL-REVIEW FLAG HANDLING

### 11.1 What is a medical-review flag?

A medical-review flag is a note in the completion report that identifies content where the source itself is clinically ambiguous, internally inconsistent, or potentially outdated. The flag does **not** indicate that the migration deviated from source — it indicates that the source content itself warrants clinical review.

### 11.2 When to raise a flag

Raise a medical-review flag when:

- The source contains a clinical claim that conflicts with current standard guidelines (do not correct it — flag it).
- The source contains a numeric value (BAC range, withdrawal timing, medication dose) that differs from current standard references (do not correct it — flag it).
- The source contains a medication recommendation that has been superseded (do not correct it — flag it).
- The source contains an emergency protocol that differs from current ACLS/ATLS guidelines (do not correct it — flag it).
- The source is silent on a critical safety topic (e.g. opioid overdose naloxone dosing) — flag the gap; do not fill it.

### 11.3 When NOT to raise a flag

Do not raise a medical-review flag when:

- The source is clear and unambiguous. Just migrate it.
- The source uses older terminology that is still clinically valid (e.g. "alcoholism" instead of "alcohol use disorder"). Preserve source terminology; no flag needed.
- The source omits a section that another substance has (e.g. opioids has no CAGE). Do not flag this — it is source-faithful, not a gap.

### 11.4 Flag format

In the completion report, use this format:

```markdown
### Medical-review flags

| Flag | Source location | Issue | Action taken |
|------|-----------------|-------|--------------|
| <short label> | <source line/section> | <what is ambiguous/inconsistent/outdated> | Migrated verbatim from source. Flagged for clinical review. Not corrected. |
```

### 11.5 What never to do with a flag

- ❌ Do not correct the source content.
- ❌ Do not replace it with general medical knowledge.
- ❌ Do not remove it.
- ❌ Do not add a "correction" alongside it.
- ❌ Do not present it as validated clinical guidance.

The flag exists to make the gap visible to a future clinical reviewer, not to fill the gap.

---

## 12. ASSET REUSE RULES

### 12.1 Molecule images

Every substance has a molecule image already present in the Next.js platform at `/artwork/<slug>.png`. The mapping is:

| Substance | Artwork path |
|-----------|--------------|
| Alcohol | `/artwork/ethanol.png` |
| Cannabis | `/artwork/cannabis.png` |
| Opioids | `/artwork/morphine.png` |
| Cocaine | `/artwork/cocaine.png` |
| Nicotine | `/artwork/nicotine.png` |
| Amphetamine | `/artwork/amphetamine.png` |
| Benzodiazepines | `/artwork/diazepam.png` |
| Barbiturate | `/artwork/barbiturate.png` |
| Inhalants | `/artwork/inhalants.png` |
| LSD | `/artwork/lsd.png` |
| PCP | `/artwork/pcp.png` |

**Do not generate new molecule images.** Reuse the existing `/artwork/<slug>.png` for each substance.

### 12.2 Image alt text

`artworkAlt` should follow the pattern: `"<Substance> molecule — <substance>'s psychoactive component"` (or similar source-faithful description). For Alcohol: `"Ethanol molecule — alcohol's psychoactive component"`. Adapt for each substance based on the source's `<img alt="">` attribute.

### 12.3 Other assets

- **Do not import SVGs from `kyp-neon/` or `PROJECT-KYP/`.** The platform has its own icon system (`lucide-react`).
- **Do not import CSS from `kyp-neon/` or `PROJECT-KYP/`.** The platform has its own design system (`tailwind.config.ts` + `src/app/globals.css`).
- **Do not import fonts.** The platform loads fonts via `next/font/google` in `src/app/layout.tsx`.

### 12.4 Next.js Image component

Use `next/image` for the molecule image:

```tsx
import Image from "next/image";

{substance.artwork && (
  <div className="mt-6 flex justify-center">
    <div className="relative h-40 w-40">
      <Image
        src={substance.artwork}
        alt={substance.artworkAlt || substance.name}
        fill
        className="object-contain"
        sizes="160px"
      />
    </div>
  </div>
)}
```

---

## 13. HOMEPAGE/CARD LINKING RULES

### 13.1 The substances array in drugs.ts

The homepage substance cards read from `src/lib/kyp/data/drugs.ts`, which exports a `substances: Substance[]` array. Each substance entry has an `href` field.

**When migrating a substance**, update its `href` in `drugs.ts` from `/<slug>.html` to `/substances/<slug>`. This is the only field that needs updating in `drugs.ts`. Do not modify any other field on the substance entry (name, drugClass, description, neurotransmitter, artwork, artworkAlt).

### 13.2 The footer

The active footer is `src/components/kyp/sections/footer.tsx`. It has a "Substance Use" links column. When migrating a substance, update its link from `/<slug>.html` to `/substances/<slug>`.

### 13.3 Orphan files

Two orphan files exist and are not imported by any live module:

- `src/lib/kyp/homepage-data.ts`
- `src/components/kyp/footer.tsx`

These were updated for Alcohol (1-line href change each) but still contain stale `/<slug>.html` links for the other 10 substances. When migrating each subsequent substance, update its link in these orphan files as well, to keep the cleanup consistent. Do not delete these files unless confirmed unused and removal is safe.

### 13.4 Required verification

After migrating a substance, verify:

1. `grep -rn "/<slug>\.html" --include="*.ts" --include="*.tsx" src/` returns zero navigable links (a code comment referencing the source file path is acceptable).
2. `grep -rn "/substances/<slug>" --include="*.ts" --include="*.tsx" src/` returns the expected set of links (drugs.ts, sections/footer.tsx, optionally homepage-data.ts and kyp/footer.tsx).
3. The homepage substance card for the migrated substance links to `/substances/<slug>` (verify by fetching the homepage HTML and grepping).
4. The footer link for the migrated substance links to `/substances/<slug>` (verify by fetching any page HTML and grepping the footer).

---

## 14. VALIDATION CHECKLIST

Every substance migration must pass this checklist before the completion report is filed.

### 14.1 TypeScript

```bash
npx tsc --noEmit
```

- ✅ 0 errors in `src/app/substances/[slug]/page.tsx`
- ✅ 0 errors in `src/lib/kyp/data/substances/<slug>.ts`
- ✅ 0 errors in `src/lib/kyp/data/substance-types.ts` (if extended)
- ✅ 0 errors in `src/lib/kyp/data/substances/index.ts`
- ✅ No new errors introduced elsewhere (compare against pre-migration baseline)

### 14.2 ESLint

```bash
npx eslint src/app/substances/[slug]/page.tsx \
            src/lib/kyp/data/substances/<slug>.ts \
            src/lib/kyp/data/substance-types.ts \
            src/lib/kyp/data/substances/index.ts \
            src/lib/kyp/data/drugs.ts \
            src/components/kyp/sections/footer.tsx
```

- ✅ 0 errors, 0 warnings in all modified files

```bash
npm run lint
```

- ✅ 0 errors in `src/` (5 pre-existing errors in `kyp-neon/` are acceptable — that is the original neon source, not the migrated codebase)

### 14.3 Build

```bash
npm run build
```

- ✅ Build succeeds
- ✅ `/substances/<slug>` is SSG-prerendered (appears in the "Route (app)" output with `●` marker)
- ✅ All previously-prerendered routes still appear (no regression)

### 14.4 Route status codes

Start the dev server (`npm run dev`) and verify:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/substances/<slug>      # 200
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/                       # 200
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/drugs/sertraline       # 200
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/diseases/major-depressive-disorder  # 200
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/<slug>.html            # 404 (legacy URL no longer routed)
```

### 14.5 Rendered content verification

Fetch `/substances/<slug>` and grep the rendered HTML for each migrated item:

```bash
curl -s http://localhost:3000/substances/<slug> > /tmp/<slug>-page.html
```

For each source section that was migrated, verify the source text appears verbatim in the rendered HTML. For each item that should be absent (invented content from a prior failed pass, if applicable), verify 0 occurrences.

### 14.6 Isolation verification

```bash
git diff --name-only HEAD
```

- ✅ 0 drug data files modified (`src/lib/kyp/data/drugs/*.ts`)
- ✅ 0 disease data files modified
- ✅ 0 existing clinical JSON modified (`kyp-content.json`, `sertraline-extracted.json`)
- ✅ 0 Phase 1D files modified (none exist)
- ✅ `kyp-neon/<slug>.html` source not modified
- ✅ `src/app/globals.css` not modified
- ✅ `src/app/layout.tsx` not modified
- ✅ No other substance files created (only `<slug>.ts` is new)
- ✅ No other substance files modified (only the migrated substance's `drugs.ts` `href` field and `sections/footer.tsx` link are updated)

### 14.7 Neon CSS/JS verification

```bash
grep -oE 'kyp-neon|substance-use-advanced|neural-tracker' /tmp/<slug>-page.html
```

- ✅ Returns empty (no neon CSS/JS references on the rendered page)

### 14.8 Homepage link verification

```bash
curl -s http://localhost:3000/ > /tmp/homepage.html
grep -oE 'href="/substances/<slug>"|href="/<slug>\.html"' /tmp/homepage.html | sort | uniq -c
```

- ✅ All alcohol links on the homepage point to `/substances/<slug>`
- ✅ Zero `/<slug>.html` links on the homepage

### 14.9 Tests

No test runner is configured in this repository. The `package.json` scripts are limited to `dev`, `build`, `start`, `lint`, and Prisma commands. Tests are not required for migration validation.

---

## 15. COMPLETION-REPORT REQUIREMENTS

Every substance migration must produce a completion report at:

```
/home/z/my-project/download/PHASE_2_<SUBSTANCE>_MIGRATION_COMPLETION_REPORT.md
```

(Use the substance name in uppercase, e.g. `PHASE_2_OPIOIDS_MIGRATION_COMPLETION_REPORT.md`.)

### 15.1 Required sections

The completion report must include:

1. **Status line** — `PHASE 2 <SUBSTANCE> MIGRATION: COMPLETE — PENDING REVIEW` (or `CORRECTED — PENDING FINAL REVIEW` if a correction pass was performed).
2. **Files created** — table listing every new file.
3. **Files modified** — table listing every modified file, with the specific change.
4. **Files explicitly untouched** — table listing files that were not modified and why.
5. **Source files used** — table listing which `kyp-neon/*.html` files were read.
6. **Content sections migrated** — table mapping each source section to its schema field, with `Migrated? YES/NO/PARTIAL` and any omissions noted.
7. **Schema extensions** (if any) — list of new optional fields added to `substance-types.ts`, with rationale.
8. **Substance-specific content** — list of substance-specific sections (e.g. Naloxone for opioids, NRT for nicotine) and how they were preserved.
9. **Unresolved/unsupported medical claims** — table of any source content that could not be fully migrated or that warrants clinical review.
10. **Medical-review flags** (if any) — per §11.
11. **Validation results** — table with each validation check (TypeScript, ESLint, build, route status codes, isolation) and its result.
12. **Architecture verification** — table confirming canonical architecture is preserved (Server Component, async params, no neon imports, no duplicate route families, etc.).
13. **Source-fidelity attestation** — explicit statement that all source content was preserved verbatim and no medical claims were added, removed, or substituted.
14. **Recommendation for next phase** — what should happen next (e.g. migrate the next substance in priority order).

### 15.2 Verdict

The completion report must end with one of:

- **APPROVED FOR BATCH MIGRATION** — only if source fidelity is complete and no migration-related issue was found.
- **APPROVED WITH REVIEW FLAGS** — if the technical migration is sound but medical claims remain unresolved (source-faithful but clinically ambiguous).
- **BLOCKED — CORRECTION REQUIRED** — if source content was lost, materially changed, or architecture/regression problems exist.

### 15.3 Worklog entry

In addition to the completion report, append a worklog entry to `/home/z/my-project/worklog.md` following the standard format:

```markdown
---
Task ID: phase-2-<slug>-migration
Agent: <agent name>
Task: Phase 2 <Substance> Migration — migrate <substance> from kyp-neon/<slug>.html to the Next.js minimalist platform. Source of truth is the original neon HTML. No other substance to be migrated in this task.

Work Log:
- <concrete step 1>
- <concrete step 2>
- ...

Stage Summary:
- <key results>
- <produced artifacts>
- <final status>
```

---

## 16. INCOMPLETE SOURCE FILES — SPECIAL HANDLING

Three source files are incomplete. They **must not** be filled with invented content. Each must be migrated only with the content that actually exists in the source.

### 16.1 Amphetamine — partial source

**Source file:** `kyp-neon/amphetamine.html` (237 lines)

**Source status:** The HTML structure is present (hero, search, overview, neurobiology, intoxication, withdrawal, complications, treatment, emergency), but most content is rendered via inline CSS/JS rather than structured HTML. The HTML body contains only the section headings and the first paragraph of each section — the expandable "pattern-card" content (clinical features, mechanism details, treatment strategies) is thin.

**What can be migrated faithfully:**
- Hero (tagline, summary)
- Overview (description, key concepts, basic mechanism summary)
- Neurobiology (summary, 1–2 mechanism cards)
- Intoxication (summary, partial clinical features — Early Intoxication column + High Dose/Toxic column are present)
- Withdrawal (3 phases: Crash, Withdrawal, Extinction — with descriptions and symptom lists)
- Complications (1 card: Cardiovascular Complications with 5 symptoms)
- Treatment (summary, acute management summary, recovery cards)
- Emergency (6 warning signs, 2 contacts)

**What must NOT be done:**
- ❌ Do not invent additional clinical features to "fill out" the intoxication list.
- ❌ Do not invent additional complications beyond the 1 cardiovascular card present in source.
- ❌ Do not invent additional medications or treatment strategies.
- ❌ Do not pad the neurobiology section with general pharmacology knowledge.

**Migration approach:** Migrate only what the source contains. The rendered page will be shorter than Alcohol's — this is acceptable. Note the partial-source status in the completion report's "Unresolved/unsupported medical claims" section.

**If the source is later expanded** (e.g. by sourcing additional content from standard references — which is outside the scope of this template), that expansion must be a separate task with explicit medical-review approval, and the expanded content must be clearly marked as "not from neon source" in the file header.

### 16.2 LSD — thin source

**Source file:** `kyp-neon/lsd.html` (95 lines)

**Source status:** The HTML body is minified onto very few lines but contains substantive content for: hero, overview, neurobiology (4 mechanism cards: 5-HT2A Agonism, Default Mode Network Disruption, Cross-Modal Processing, Visual Cortex Activation), intoxication (perceptual + psychological effects), complications (HPPD section + psychiatric/behavioral complication cards), treatment (bad trip management + 4 recovery cards), emergency (6 warning signs + 2 contacts).

**What can be migrated faithfully:**
- Hero (tagline)
- Overview (description, history bullets)
- Neurobiology (4 mechanism cards)
- Intoxication (summary, perceptual effects list, psychological effects list)
- Complications (HPPD section with 4 symptom sub-items, psychiatric complications card with 5 symptoms, behavioral risks card with 5 symptoms)
- Treatment (bad trip management summary, 5 management strategies, 4 recovery cards)
- Emergency (6 warning signs, 2 contacts)

**What must NOT be done:**
- ❌ Do not invent additional neurobiology mechanisms.
- ❌ Do not invent additional complications beyond HPPD + psychiatric + behavioral.
- ❌ Do not invent withdrawal content (LSD is not physically addictive — source does not contain a withdrawal section, and one must not be created).
- ❌ Do not invent a severity scale (LSD has no BAC equivalent).
- ❌ Do not invent a screening tool (LSD has no CAGE equivalent).

**Migration approach:** The source is thin but usable. Migrate all source content faithfully. The rendered page will have no `withdrawal` section and no `severityScale` / `screeningTools` — this is correct and expected. Note the thin-source status in the completion report.

**HPPD handling:** The HPPD section in the source has a unique structure (intro paragraph + 4 symptom sub-cards: Visual Snow, Trails, Halos, Geometric Patterns). Migrate this as a `complications[]` entry with `name: "Hallucinogen Persisting Perception Disorder (HPPD)"` and `description` containing the intro paragraph. The 4 symptom sub-cards can be appended to the description as a bulleted list, or the schema can be extended with an optional `subItems` field if the structure warrants it. Document the choice in the completion report.

### 16.3 Barbiturate — previously classified as "CSS stub"

**Source file:** `kyp-neon/barbiturate.html` (43 lines, but content is minified/dense)

**Source status (corrected):** The prior audit (`PHASE_2_SUBSTANCE_MIGRATION_AUDIT.md`) classified this file as "STUB — 43 lines, all CSS, minimal HTML". **This classification is inaccurate.** The file is 43 lines only because the HTML body is minified onto single lines. The actual body content is substantive and includes: hero, overview (with barbiturate types: Phenobarbital, Pentobarbital, Secobarbital, Amobarbital), neurobiology (4 mechanism cards: GABA-A Receptor Modulation, CNS Depression, Respiratory Depression, Receptor Downregulation), intoxication (moderate + severe symptom columns + narrow therapeutic index warning), withdrawal (3 timeline events with timings: 6-24h, 24-72h, 3-7 days), treatment (medical detoxification summary + 5 management strategies + 4 recovery cards), emergency (6 warning signs + 2 contacts).

**What can be migrated faithfully:**
- Hero (tagline)
- Overview (description, 4 barbiturate types)
- Neurobiology (4 mechanism cards)
- Intoxication (summary, moderate symptom list, severe symptom list, narrow therapeutic index warning)
- Withdrawal (3 phases with source timings `6-24 hours`, `24-72 hours`, `3-7 days`)
- Treatment (detoxification summary, 5 management strategies, 4 recovery cards)
- Emergency (6 warning signs, 2 contacts)

**What must NOT be done:**
- ❌ Do not treat this as a stub and fill it with invented content.
- ❌ Do not invent a classification system (barbiturate source has no Jellinek/Cloninger equivalent).
- ❌ Do not invent a screening tool (barbiturate source has no CAGE equivalent).
- ❌ Do not invent a severity scale (barbiturate source has no BAC equivalent).
- ❌ Do not invent a disulfiram-equivalent mechanism flow.

**Migration approach:** Migrate all source content faithfully. The rendered page will be comparable in depth to Alcohol for the sections the source covers, but will omit `classifications`, `screeningTools`, and `severityScale` — this is correct and expected. Note in the completion report that the prior audit's "stub" classification was inaccurate and the source is in fact substantive.

### 16.4 General rule for all three

**The completion report for each of these three substances must explicitly state:**

1. The source was incomplete/thin/minified.
2. Only source-derived content was migrated.
3. No content was invented to "fill gaps".
4. The rendered page is shorter than a full-source substance (e.g. Alcohol) — this is expected and acceptable.
5. If a future clinical review determines that additional content is needed, that addition must be a separate task with explicit medical-review approval, and the added content must be clearly marked as "not from neon source" in the file header.

---

## APPENDIX A — Reference implementation file inventory

The corrected Alcohol migration is the reference implementation. Its files are:

| File | Purpose |
|------|---------|
| `src/lib/kyp/data/substance-types.ts` | Schema (single source of truth) |
| `src/lib/kyp/data/substances/alcohol.ts` | Alcohol content (source-faithful) |
| `src/lib/kyp/data/substances/index.ts` | Substance registry |
| `src/app/substances/[slug]/page.tsx` | Route (Server Component) |
| `src/lib/kyp/data/drugs.ts` | Homepage substance cards (alcohol `href` updated) |
| `src/components/kyp/sections/footer.tsx` | Footer (alcohol link updated) |
| `src/lib/kyp/homepage-data.ts` | Orphan (alcohol link updated) |
| `src/components/kyp/footer.tsx` | Orphan (alcohol link updated) |

When migrating a new substance, the new files are:

| File | Action |
|------|--------|
| `src/lib/kyp/data/substances/<slug>.ts` | CREATE — substance content |
| `src/lib/kyp/data/substances/index.ts` | MODIFY — add import + register in `substancePages` array |
| `src/lib/kyp/data/substance-types.ts` | MODIFY — only if schema extension is needed |
| `src/app/substances/[slug]/page.tsx` | MODIFY — only if new optional field requires rendering |
| `src/lib/kyp/data/drugs.ts` | MODIFY — update `<slug>` entry's `href` to `/substances/<slug>` |
| `src/components/kyp/sections/footer.tsx` | MODIFY — update `<substance>` link to `/substances/<slug>` |
| `src/lib/kyp/homepage-data.ts` | MODIFY — update orphan `<slug>` link (orphan file) |
| `src/components/kyp/footer.tsx` | MODIFY — update orphan `<substance>` link (orphan file) |

---

## APPENDIX B — Migration priority order

Per the original audit, the recommended migration priority is:

| Priority | Substance | Source lines | Reason |
|----------|-----------|--------------|--------|
| 1 | Alcohol | 2,536 | ✅ COMPLETE — reference implementation |
| 2 | Opioids | 2,381 | Second largest; overdose emergency content critical |
| 3 | Cocaine | 1,652 | Large; stimulant prototype |
| 4 | Cannabis | 1,738 | Large; cannabinoid prototype |
| 5 | Benzodiazepines | 1,210 | Medium; depressant prototype |
| 6 | PCP | 1,695 | Large; dissociative prototype |
| 7 | Inhalants | 1,092 | Medium; unique syndrome (Sudden Sniffing Death) |
| 8 | Nicotine | 841 | Medium; stimulant; NRT content |
| 9 | Amphetamine | 237 | Partial source — see §16.1 |
| 10 | LSD | 95 | Thin source — see §16.2 |
| 11 | Barbiturate | 43 (minified) | Previously classified as stub — see §16.3 |

Each substance is migrated one at a time, with its own completion report, and explicit approval is required before proceeding to the next.

---

## APPENDIX C — Forbidden actions (quick reference)

- ❌ Migrate more than one substance per task without explicit approval.
- ❌ Invent medical information not present in the source.
- ❌ Replace source content with general medical knowledge.
- ❌ Reinterpret source clinical claims.
- ❌ Change treatment recommendations.
- ❌ Modify existing drug/disease clinical JSON.
- ❌ Modify Phase 1D historical records (none exist, but the rule stands).
- ❌ Redesign the minimalist UI.
- ❌ Import neon CSS/JS/UI.
- ❌ Delete the original `<slug>.html` source file.
- ❌ Pass `tone="warning"` to `SectionHeader` (use `tone="emergency"`).
- ❌ Pass `variant="emergency"` to `Callout` (use `variant="danger"`).
- ❌ Add an `immediateActions` field to `SubstanceEmergency`.
- ❌ Convert source units (`mg%` → `mg/dL`).
- ❌ Narrow source time windows (`12-48h` → `12-24h`).
- ❌ Collapse source severity-scale rows.
- ❌ Substitute one medication for another.
- ❌ Rename source section titles.
- ❌ Rewrite source descriptions.
- ❌ Add per-question clinical meanings not in the source.
- ❌ Add mechanism flows not in the source.
- ❌ Add reaction symptom lists not in the source.
- ❌ Create a parallel route (e.g. `/substance/[slug]`).
- ❌ Create new UI component families for substances.
- ❌ Add per-substance CSS variables.
- ❌ Use client components inside `substances/[slug]/page.tsx`.

---

**PHASE 2 SUBSTANCE MIGRATION TEMPLATE: COMPLETE — READY FOR BATCH MIGRATION**

This template is frozen. Future substance migrations must conform to it. Any deviation must be documented in the substance's completion report and approved before proceeding.

No application source files were modified to produce this document.
