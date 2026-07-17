# KYP (Know Your Pill) — Complete Architecture & Theme Reference

> **India-first medical education platform for MBBS students, NEET PG/INICET/FMGE aspirants, healthcare professionals, and patients.**
>
> Built with Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, and Zustand.
> 44,726 lines of code across 197 files. 12 drug pages + 1 disease hub + homepage.

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Design System](#design-system)
4. [Color Tokens](#color-tokens)
5. [Typography](#typography)
6. [Component Architecture](#component-architecture)
7. [Drug Page Template (v2.0 Frozen)](#drug-page-template-v20-frozen)
8. [Disease Page Template (v1.0)](#disease-page-template-v10)
9. [India Layer](#india-layer)
10. [Educational UX Layer](#educational-ux-layer)
11. [Data Layer](#data-layer)
12. [Search System](#search-system)
13. [Routing](#routing)
14. [Artwork & Assets](#artwork--assets)
15. [KYP Content Standard](#kyp-content-standard)
16. [Permanent Principles](#permanent-principles)

---

## Tech Stack

```
Framework:     Next.js 16 (App Router, Turbopack)
Language:      TypeScript 5
Styling:       Tailwind CSS 4 + shadcn/ui (New York style)
Icons:         Lucide React
Animation:     Framer Motion
State:         Zustand (with persist middleware)
Theme:         next-themes (light/dark)
Fonts:         Geist Sans (body) + Playfair Display (headings) + Geist Mono
Database:      Prisma ORM (SQLite) — available but not used for content
Search:        Custom Spotlight-style search (⌘K)
Images:        Next.js Image component (optimization, lazy loading)
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, ThemeProvider, metadata)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design system (tokens, utilities, keyframes)
│   ├── drugs/[slug]/
│   │   ├── page.tsx            # Drug page (Server Component, async params)
│   │   ├── loading.tsx         # Skeleton loader
│   │   ├── error.tsx           # Error boundary
│   │   └── not-found.tsx       # 404 with drug suggestions
│   └── diseases/[slug]/
│       └── page.tsx            # Disease page
├── components/
│   ├── kyp/
│   │   ├── ui/                 # 25+ reusable UI primitives
│   │   └── sections/           # Homepage + drug + disease sections
│   │       ├── drug/           # 30+ drug-specific section components
│   │       ├── home-hero.tsx
│   │       ├── navbar.tsx
│   │       ├── footer.tsx
│   │       └── ...
│   └── ui/                     # shadcn/ui components
├── lib/
│   ├── kyp/
│   │   ├── data/               # Structured data layer
│   │   │   ├── types.ts        # All TypeScript interfaces
│   │   │   ├── index.ts        # Barrel export
│   │   │   ├── classes.ts      # Drug class definitions
│   │   │   ├── drugs.ts        # Substance data (with artwork paths)
│   │   │   ├── medications.ts  # Homepage categories + medication classes
│   │   │   ├── brain.ts        # Brain regions + neural pathways
│   │   │   ├── side-effects.ts # Side effect library
│   │   │   ├── platform.ts     # Stats, emergency contacts, FAQs, timelines
│   │   │   ├── search-index.ts # Universal search index
│   │   │   ├── drugs/          # Individual drug data files
│   │   │   │   ├── index.ts    # Drug registry
│   │   │   │   ├── sertraline.ts
│   │   │   │   ├── fluoxetine.ts
│   │   │   │   └── ... (12 drugs total)
│   │   │   └── diseases/       # Disease data files
│   │   │       ├── index.ts
│   │   │       └── major-depressive-disorder.ts
│   │   ├── disease-types.ts    # Disease interface
│   │   ├── patient-mode-store.ts
│   │   ├── guided-learning-toggle.tsx
│   │   ├── use-scroll-spy.ts
│   │   └── use-patient-mode-content.ts
│   └── utils.ts                # cn() utility (clsx + tailwind-merge)
└── public/
    ├── artwork/                # Custom illustrations
    ├── logo-navy-128.png       # Navbar/footer logo (36px)
    ├── logo-navy-512.png       # Apple touch icon
    └── favicon.png             # 32px favicon
```

---

## Design System

### Design Philosophy
- **Premium medical textbook** aesthetic (Apple Education meets Amboss)
- **Editorial, not dashboard** — typography and whitespace over cards and borders
- **India-first** — every page has Indian clinical context
- **Progressive disclosure** — guided learning modes hide irrelevant sections
- **Active learning** — micro-quizzes, checkpoints, active recall

### Visual Treatment Rules
1. **Prominent card styling** is reserved ONLY for: Hero, Emergency, Black Box Warning, Contraindications
2. **All other content** uses prose, lists, spacing — NOT bordered containers
3. **Tabbed modules** merge related sections (Indian Practice, Learning, Drug Navigation)
4. **Section spacing** > boxed panels
5. **overflow-x: hidden** on body (prevents mobile horizontal scroll)
6. **prefers-reduced-motion** disables all animations

### CSS Custom Utilities (globals.css)
```css
.kyp-glass          /* Glass morphism (navbar, modals) */
.kyp-grid-bg        /* Subtle grid texture for hero backgrounds */
.kyp-hero-glow      /* Animated gradient border for hero CTA */
.kyp-pulse-dot      /* Pulsing dot for emergency indicators */
.kyp-float          /* Floating animation (brain nodes) */
.kyp-drift          /* Slow drift animation (ambient blobs) */
.kyp-scroll         /* Custom thin scrollbar */
.kyp-text-gradient  /* Brand → neural text gradient */
.kyp-focus-ring     /* Focus visible ring */
.kyp-divider        /* Soft horizontal divider */
```

---

## Color Tokens

### Brand Colors (CSS variables in :root and .dark)
```css
--brand:           /* Primary teal (oklch) */
--brand-soft:      /* Light teal background */
--brand-ink:       /* Dark teal text */
--neural:          /* Violet (neuroscience accent) */
--neural-soft:     /* Light violet background */
--emergency:       /* Coral red (alerts) */
--emergency-soft:  /* Light coral background */
--warning:         /* Amber (caution) */
--warning-soft:    /* Light amber background */
--success:         /* Green (positive) */
--success-soft:    /* Light green background */
```

### Drug Class Accent Colors
```css
--class-depressant:    /* Violet */
--class-stimulant:     /* Amber */
--class-hallucinogen:  /* Magenta */
--class-opioid:        /* Blue */
--class-cannabinoid:   /* Green */
--class-dissociative:  /* Purple */
--class-inhalant:      /* Cyan */
--class-ssri:          /* Teal */
```

### Usage in Components
```tsx
// Badge variants
<Badge variant="brand" />      // teal
<Badge variant="neural" />     // violet
<Badge variant="emergency" />  // coral
<Badge variant="warning" />    // amber
<Badge variant="success" />    // green
<Badge variant="outline" />    // bordered, transparent

// Drug class accent
<span className={drugClass.accentClass} />  // e.g. "text-[var(--class-ssri)]"
```

---

## Typography

### Font Families
```css
--font-sans:   Geist Sans (body, UI, navigation)
--font-serif:  Playfair Display (headings H1-H3, display text)
--font-mono:   Geist Mono (code, data, numbers)
```

### Type Scale (defined in globals.css @layer base)
```css
.text-display    /* clamp(2.5rem, 5vw, 3.75rem) — H1 hero */
.text-h1         /* clamp(2rem, 3.5vw, 2.75rem) — section titles */
.text-h2         /* clamp(1.625rem, 2.5vw, 2rem) — subsection */
.text-h3         /* 1.375rem — card titles */
.text-h4         /* 1.0625rem — sub-card titles (sans, not serif) */
.text-body-lg    /* 1.125rem — lead paragraphs */
.text-body       /* 0.9375rem — default body text */
.text-body-sm    /* 0.8125rem — secondary text */
.text-caption    /* 0.75rem — captions, footnotes */
.text-overline   /* 0.6875rem, uppercase, 0.16em tracking — labels */
```

### Font Loading
```tsx
// layout.tsx — Playfair variable set on <html> via inline style
<html style={{ "--font-playfair": playfair.style.fontFamily }}>
<body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans`}>
```

### Typography Rules
- H1 uses Playfair Display serif (via `.text-display` class)
- H2-H3 use Playfair Display serif
- H4 and below use Geist Sans
- All headings are weight 600
- Body text is weight 400
- Overline labels are weight 600, uppercase, 0.16em letter-spacing

---

## Component Architecture

### UI Primitives (src/components/kyp/ui/)
All built on shadcn/ui base with KYP design tokens:

| Component | Purpose | Variants |
|-----------|---------|----------|
| `Badge` | Pill-shaped labels | brand, neural, emergency, warning, success, outline (× sm/md/lg) |
| `Stat` | KPI display | default, brand, elevated |
| `Callout` | Inline alert box | info, warning, danger, success, tip |
| `Accordion` | Collapsible Q&A | Wraps shadcn Accordion |
| `Container` | Content wrapper | narrow (48rem), default (80rem), wide (96rem) |
| `Section` | Vertical rhythm wrapper | default (py-20), tight (py-12), relaxed (py-24), flush (py-0) |
| `PageHeader` | Top-of-page header | default, centered, compact |
| `SectionHeader` | Section opener | start, center, between (× brand/neural/emergency tone) |
| `CardPrimitive` | Shared card chassis | flat, elevated, featured, outline (× interactive) |
| `MedicationCard` | Medication class card | featured, comingSoon states |
| `DrugClassCard` | Clinical category card | — |
| `ClinicalCard` | Substance card with artwork | artwork image or fallback gradient |
| `BrainCard` | Brain region card | — |
| `PathwayCard` | Neural pathway card | — |
| `SideEffectCard` | Side effect entry card | — |
| `EmergencyAlert` | Crisis contact section | — |
| `Timeline` | Vertical timeline | onset/peak/duration/recovery phases |
| `HeroSection` | Parameterized hero | default, split, centered |
| `SearchModal` | Spotlight search (⌘K) | — |
| `FloatingSearch` | FAB + inline search button | floating, button |
| `MechanismFlow` | Visual mechanism diagram | node variants: input/process/target/output/inhibit |
| `MonitoringChecklist` | Interactive checklist | — |
| `SideEffectReceptorMap` | Receptor→side effect visual | — |
| `StickyLearningNav` | Left rail + mobile sheet | scrollspy + manual completion |
| `LearningProgress` | Duolingo-style progress | — |
| `PatientModeToggle` | Medical/Patient toggle | — |
| `DifficultyToggle` | 4-level difficulty | patient, medical, resident, clinician |
| `GuidedLearningToggle` | 4-mode learning paths | patient(5min), mbbs(20min), neetPg(35min), resident(45min) |
| `GuidedLearningVisibility` | Section visibility wrapper | hides sections not in current path |
| `MicroQuiz` | Inline MCQ with reveal | — |
| `Checkpoint` | Lesson transition marker | — |
| `ActiveRecallSection` | End-of-page retrieval practice | — |
| `LessonProgress` | Sticky lesson tracker | — |
| `LearningPath` | Breadcrumb component | — |

### Merged Tabbed Modules (Visual Simplification)
These replace multiple separate sections with single tabbed modules:

| Module | Replaces | Tabs |
|--------|----------|------|
| `HeroInfoStrip` | LearningTimeBadge + CBMEMapping | (inline strip, no tabs) |
| `EvidenceAndIndianPractice` | GuidelineComparison + EvidenceHierarchy | Guideline Comparison · Evidence Hierarchy |
| `IndianClinicalModule` | IndianPractice + Encounter + Workflow + EducationalRx | Practice & Brands · Hospital Encounter · Prescription Workflow · Sample Prescription |
| `LearningModule` | ClinicalPearls + ExamLens + MemoryTricks + WardPearls | Clinical Pearls · Exam Lens · Memory Tricks · Ward Pearls |
| `DrugNavigationModule` | DrugFamilyNav + ComparisonTables + IndianComparison + RelatedDrugs | Drug Family · Comparison Table · Indian Scenarios · Related Drugs |

---

## Drug Page Template (v2.0 Frozen)

### Section Order (Lesson-Grouped)
```
Lesson 1: Foundations
  1. Hero (learning path, read time, high-yield stars, CBME)
  2. Quick Facts (4-card grid)
  3. HeroInfoStrip (read/study/revision time + high-yield + CBME)
  4. Learning Objectives
  5. Knowledge Graph (interactive grid, 15 nodes)
  → Checkpoint

Lesson 2: Mechanism & Neuroscience
  6. Mechanism (visual flow diagram + 6-step text + PK grid)
  7. Brain Regions (BrainCard grid)
  8. Neurotransmitters (chips + receptor cards)
  9. Neural Pathways (PathwayCard grid)
  10. Timeline (7 events)
  → Checkpoint + Micro-Quiz

Lesson 3: Clinical Practice
  11. Clinical Uses (FDA + off-label indications)
  12. Side Effects (common + serious + receptor map)
  13. Monitoring (interactive checklist + renal/hepatic + pregnancy)
  14. Contraindications (black box + absolute + relative)
  15. Evidence & Indian Practice (tabbed: guidelines + hierarchy)
  16. Drug Interactions (sorted by severity)
  17. Patient Education (plain language + 10 points)
  → Checkpoint + Micro-Quiz

Lesson 4: Indian Context
  18. Indian Clinical Module (4 tabs: practice/encounter/workflow/prescription)
  19. Clinical Decision Path (interactive 8-node tree)
  20. Common Mistakes + When NOT to Use
  → Checkpoint

Lesson 5: Exam Revision
  21. Learning Module (4 tabs: pearls/exam/tricks/ward + frequency + PYQ)
  22. Clinical Cases (real patient with teaching points)
  23. Drug Navigation (4 tabs: family/comparison/Indian/related)
  24. High-Yield Summary (12-point revision)
  → Checkpoint

Lesson 6: Active Recall
  25. Active Recall (6 questions with reveal answers)
  26. FAQ
  27. Evidence Sources (International vs Indian)
  28. PageMetadataStrip (difficulty, time, reviewed, evidence level)
  29. Prev/Next drug navigation
  30. Emergency (112, Tele-MANAS 14416)
```

### Drug Schema (types.ts — key fields)
```typescript
interface Drug {
  // Identity
  slug, genericName, brandNames, drugClass, drugClassLabel, drugClassFullName
  learningPath: string[]  // ["Psychiatry", "Antidepressants", "SSRIs", "Sertraline"]
  
  // Hero
  tagline, summary, estimatedReadTime, yieldRating, highYieldLevel, primaryAudience
  
  // Learning
  learningObjectives: string[]
  mechanism: DrugMechanism (summary, molecularTarget, effect, steps[], PK, halfLife, metabolism)
  mechanismFlow: MechanismFlow (nodes[], edges[], caption)
  
  // Neuroscience
  neurotransmitters[], receptors[], brainRegionIds[], pathwayIds[]
  
  // Clinical
  indications: DrugIndication[] (name, status: fda-approved/off-label, description, ageGroup)
  contraindications: DrugContraindication[] (name, severity: absolute/relative, rationale)
  blackBoxWarnings: DrugWarning[]
  commonSideEffects: DrugSideEffectEntry[] (name, frequency, severity, description, management, sideEffectId)
  seriousSideEffects: DrugSideEffectEntry[]
  
  // Safety
  monitoring: DrugMonitoringParameter[] (parameter, frequency, rationale)
  interactions: DrugInteraction[] (drug, severity, mechanism, action)
  pregnancy: DrugPregnancyInfo (legacyCategory?, evidenceBasedSummary, indianPracticeNote, summary, lactation)
  renalAdjustment, hepaticAdjustment
  
  // Education
  patientExplanation, patientEducationPoints[]
  clinicalPearls[], examPearls?[], examLens?: ExamLens
  memoryTricks: MemoryTrick[] (title, trick, remembers)
  highYieldSummary[]
  
  // Clinical
  clinicalCases: ClinicalCase[] (title, presentation, history, examination, diagnosis, rationale, management, outcome, teachingPoints)
  comparisonTables: DrugComparisonTable[] (title, primaryDrug, rows[], takeaway)
  
  // India Layer
  indianPractice?: IndianPracticeInfo (prescriptionStatus, brands[], typicalDoses, prescribingScenarios[], availability, costCategory, costNote, monitoring, patientCounselling[])
  cbmeMapping?: CBMEMapping (subject, mbbsYear, competencyCodes[], competencyDescriptions[], integrationSubjects[], topic)
  guidelineComparisons?: GuidelineComparison[] (topic, internationalSource, internationalRecommendation, indianSource, indianRecommendation)
  indianReferences?: IndianReference[]
  evidenceHierarchy?: EvidenceHierarchy (international[], indian[], indianClinicalPractice)
  indianEncounterContext?: IndianEncounterContext (governmentHospitals, privateHospitals, medicalColleges, primaryCare, psychiatryOPD)
  prescriptionWorkflow?: PrescriptionWorkflow (beforePrescribing[], duringTreatment[], followUp[], whenToRefer[])
  examFrequency?: ExamFrequency (neetPg, inicet, mbbsViva, fmge — 1-5 stars)
  pyqMetadata?: PYQMetadata[] (exam, year, concept, topic)
  indianComparisonContexts?: IndianComparisonContext[] (scenario, recommendation, alternative?)
  janAushadhi?: JanAushadhiInfo (available, note?)
  evidenceSources?: EvidenceSources (international: DrugReference[], indian: IndianReference[])
  
  // v2.0
  clinicalDecisionPath?: ClinicalDecisionPath (title, nodes[], startNodeId)
  educationalPrescription?: EducationalPrescription (scenario, lines[], followUp[], disclaimer)
  commonMistakes?: CommonMistake[] (mistake, why, correction)
  whenNotToUse?: WhenNotToUseEntry[] (scenario, reason, alternative)
  wardPearls?: WardPearls (professorMayAsk[], residentExpects[], consultantsDo[], internsMiss[])
  highYieldLevel?: HighYieldLevel ("extreme" | "high" | "moderate" | "background" | "rare")
  drugFamilyNav?: DrugFamilyNav (familyName, members[])
  learningTimeBreakdown?: LearningTimeBreakdown (read, study, revision)
  
  // Educational UX
  microQuizzes?: MicroQuiz[] (id, question, options[], correctIndex, explanation, afterSectionId)
  activeRecallQuestions?: ActiveRecallQuestion[] (question, answer, topic)
  learningPaths?: LearningPath[] (mode, label, estimatedTime, description, visibleSections[])
  lessonGroups?: LessonGroup[] (number, title, description, sectionIds[], checkpoint)
  
  // Other
  knowledgeGraph: KnowledgeGraphNode[] (label, type, href, note?)
  timeline: TimelineEvent[] (time, title, description, phase)
  faqs: FAQItem[] (question, answer)
  patientMode: PatientModeContent (tagline, summary, mechanism, sideEffects, monitoring, contraindications, interactions)
  sectionDifficulty?: Record<string, SectionDifficulty>
  
  // Metadata
  lastReviewed, reviewers?
}
```

---

## Disease Page Template (v1.0)

### Section Order
```
1. Hero (learning path, read time, high-yield)
2. Learning Objectives
3. Knowledge Graph
4. Epidemiology (Global + Indian side-by-side)
5. Etiology & Risk Factors (categorized grid)
6. Pathophysiology (summary + neurotransmitters/brain/pathways + details)
7. Symptoms (4 clusters: emotional, cognitive, somatic, behavioural)
8. Diagnosis (DSM-5/ICD-10/ICD-11 + severity scales + differential)
9. Management (treatment options + drug cross-links to KYP drug pages)
10. Indian Practice (guidelines, govt/private/primary care, cost, counselling)
11. Clinical Cases (structured with teaching points)
12. Active Recall (6 questions with reveal)
13. FAQ
14. Evidence Sources (International vs Indian)
15. Emergency (112, Tele-MANAS 14416)
```

---

## India Layer

### Permanent Principle
> KYP is India-first, evidence-first. Indian brands, Indian exams, Indian curriculum, Indian practice — but international evidence remains the scientific foundation. When international and Indian guidance differ, both are presented clearly and labeled by source. No invented "Indian clinical practice" when no formal guideline exists.

### India-First Features
1. **Indian brands** (3-8 per drug, sourced from CDSCO/CIMS/MIMS)
2. **Prescription status** (Schedule H, H1, X, OTC)
3. **CBME mapping** (actual NMC competency codes like PH7.3, PY3.2)
4. **Exam Lens** (MBBS viva/practical/long-answer, NEET PG high-yield/PYQ, INICET clinical reasoning, FMGE, Psychiatry Residency)
5. **Exam frequency** (★ to ★★★★★ per exam)
6. **PYQ metadata** (concept-level, no copyrighted questions)
7. **Guideline comparison** (International vs Indian — with honest "no dedicated IPS guideline" when applicable)
8. **Evidence hierarchy** (International → Indian Guidelines → Indian Clinical Practice)
9. **Indian encounter context** (Government hospitals, Private, Medical colleges, Primary care, Psychiatry OPD)
10. **Prescription workflow** (Before → During → Follow-up → Refer)
11. **Indian comparison contexts** (Government setup, Private, Pregnancy, Adolescents, Elderly, Cost-sensitive)
12. **Jan Aushadhi** availability badge
13. **Evidence sources** (International vs Indian split — KD Tripathi, IPS, NMC CBME, NMHP/DMHP, Tele-MANAS, CDSCO)
14. **Cost category** (🟢 Low / 🟡 Moderate / 🔴 High — no exact prices)
15. **India-specific patient counselling** (generic substitution, Tele-MANAS, Jan Aushadhi, family involvement)
16. **Ward pearls** (Professor may ask, Resident expects, Consultants do, Interns miss)
17. **Educational prescription** (Indian OPD Rx template with disclaimer)

---

## Educational UX Layer

### Guided Learning Mode
4 curated paths, each showing a different subset of sections:
- **Patient (5 min)**: Hero, Quick Facts, Patient Education, FAQ, Emergency
- **MBBS Student (20 min)**: Foundations, mechanism, clinical uses, side effects, MBBS exam content
- **NEET PG / INICET (35 min)**: Full clinical detail with exam content, PYQs, Indian context, active recall
- **Resident / Clinician (45 min)**: Everything including ward pearls, guideline comparison, full evidence

### Micro-Quizzes
- 6 per drug page, placed inline after key sections
- 4-option MCQ → click answer → reveal correct/incorrect + explanation
- No re-answering after submission

### Lesson Progression
- 6 lessons per drug page (Foundations → Mechanism → Clinical → Indian → Exam → Active Recall)
- Checkpoint after each lesson: "✓ Lesson N Complete. Continue →"
- Sticky LessonProgress indicator at top (numbered markers with scrollspy)

### Active Recall
- 6 open-ended questions at end of page
- "Think, then reveal answer" buttons
- Includes callout explaining why retrieval practice works (2-3× stronger retention)

### Manual Section Completion
- Checkbox next to each section in sticky nav
- Persists per-drug to localStorage
- Progress counter: "X of Y sections completed"

---

## Data Layer

### Barrel Export Pattern
```typescript
// All imports go through the barrel — never import individual files
import { substances, drugClasses, searchIndex, drugs } from "@/lib/kyp/data";
```

### Drug Registry
```typescript
// src/lib/kyp/data/drugs/index.ts
export const drugs: Drug[] = [sertraline, fluoxetine, ...]; // 12 drugs
export function getDrugBySlug(slug: string): Drug | undefined;
export function getAllDrugSlugs(): string[];
```

### Adding a New Drug
1. Create `src/lib/kyp/data/drugs/<slug>.ts` — a `Drug` object with ALL fields
2. Import in `src/lib/kyp/data/drugs/index.ts` and add to `drugs[]` array
3. Done — `/drugs/<slug>` automatically renders with all sections, SEO, search, 404 protection

### Adding a New Disease
1. Create `src/lib/kyp/data/diseases/<slug>.ts` — a `Disease` object
2. Import in `src/lib/kyp/data/diseases/index.ts` and add to `diseases[]`
3. Done — `/diseases/<slug>` renders

---

## Search System

### Universal Search (⌘K)
- Spotlight-style modal with arrow-key navigation
- Searches across 8 types: drugs, drug classes, neurotransmitters, side effects, brain regions, pathways, clinical patterns, patient guides
- Indian brand names are searchable (searching "Serta" → finds Sertraline)
- CBME competency codes are searchable (searching "PH7.3" → finds Sertraline)
- Exam tags are searchable (searching "NEET PG" → surfaces exam-relevant drugs)

### Search Index
```typescript
// src/lib/kyp/data/search-index.ts
export const searchIndex: SearchableItem[] = [
  // Medications (from drugs registry — includes Indian brands as keywords)
  // Substances (legacy HTML pages)
  // Drug classes
  // Brain regions
  // Pathways
  // Side effects
  // Neurotransmitters (curated)
  // Clinical patterns (ICD-10)
  // Patient guides
];
```

---

## Routing

### Drug Pages
- Route: `/drugs/[slug]` (dynamic, static-generated via `generateStaticParams`)
- Server Component (async params — Next.js 16 pattern)
- Files: `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
- `generateMetadata` for per-drug SEO (title, description, OpenGraph, Twitter)

### Disease Pages
- Route: `/diseases/[slug]` (dynamic, static-generated)
- Server Component

### Homepage
- Route: `/` (static)
- Sections: Hero → Stats → Categories → Medication Library → Substance Use → Knowledge Graph → Brain Atlas → Side Effects → Timeline → NeuroArcade → FAQ → Emergency → Footer

### Legacy HTML Pages
- Original PROJECT-KYP HTML files (alcohol.html, cannabis.html, etc.) still exist in `public/`
- Linked from substance cards and search results
- Being gradually replaced by Next.js routes

---

## Artwork & Assets

### Logo
- `public/logo-navy-128.png` — Navbar/footer (36px display, priority loaded)
- `public/logo-navy-512.png` — Apple touch icon
- `public/favicon.png` — 32px favicon

### Substance Artwork
Located in `public/artwork/`:
| File | Substance | Style |
|------|-----------|-------|
| ethanol.png | Alcohol | Chemical structure (black on white) |
| cannabis.png | Cannabis | Illustration (green leaf) |
| morphine.png | Opioids | Chemical structure |
| cocaine.png | Cocaine | Chemical structure |
| nicotine.png | Nicotine | Chemical structure |
| amphetamine.png | Amphetamines | Chemical structure |
| diazepam.png | Benzodiazepines | Chemical structure |
| barbiturate.png | Barbiturates | Illustration (blue capsules) |
| inhalants.png | Inhalants | Illustration (spray can) |
| lsd.png | LSD | Chemical structure |
| pcp.png | PCP | Chemical structure |
| withdrawal.png | Withdrawal | Illustration (brain) |

### Section Artwork
| File | Location | Treatment |
|------|----------|-----------|
| med-library.png | Medication Library section | Background watermark (opacity 0.35, radial mask, behind content) |
| neuro-arcade.png | NeuroArcade section | Split layout (image left, content right) |
| gaba.png | Saved for Neurotransmitter Atlas | Not yet displayed |

### Image Rules
- Use Next.js `Image` component (automatic optimization, responsive srcset)
- `loading="lazy"` for all images below the fold
- `priority` only for navbar logo
- `object-cover` for substance cards (4:3 aspect ratio)
- `object-contain` for background watermarks
- `rounded-xl` on all image containers
- Meaningful `alt` text for accessibility and SEO
- `sizes` attribute set responsively for each context

---

## KYP Content Standard v1.0

Every educational page — whether it's a drug, disease, neurotransmitter, brain region, side effect, or clinical case — must answer these eight questions:

1. **What is it?**
2. **Why does it happen?**
3. **How does it work?**
4. **Why is it clinically important?**
5. **How is it managed in India?**
6. **What should an MBBS/NEET PG student remember?**
7. **How does it connect to other concepts in KYP?**
8. **Where can the learner go next?**

If a page cannot answer all eight, it isn't complete.

---

## Permanent Principles

1. **India-first, evidence-first** — Indian brands, exams, curriculum, practice. International evidence is the scientific foundation. Both are presented when they differ.

2. **Academic honesty** — When no dedicated Indian guideline exists, say so. Never invent "Indian clinical practice" consensus. Label recommendations by source (IPS, NMC, NICE, FDA).

3. **Template is frozen** — KYP Canonical Drug Template v2.0 is FROZEN. No new components, layouts, or design changes. Only bug fixes, medical accuracy improvements, and content additions.

4. **Adding a drug = 2 file changes** — Create the data file + add to registry array. Zero component changes.

5. **Deprecate FDA pregnancy categories** — Use evidence-based summaries + Indian practice notes. The old A/B/C/D/X letter categories are deprecated by the FDA.

6. **No exact prices** — Use 🟢 Low / 🟡 Moderate / 🔴 High cost categories with "Cost varies by manufacturer and region" disclaimer.

7. **Educational prescriptions are examples only** — Always include "Educational example only. Not a substitute for clinical judgment."

8. **PYQs are concept-level only** — No copyrighted questions. Only the concept tested, year, and topic area.

9. **Emergency on every page** — 112 (emergency) and 14416 (Tele-MANAS) are on every drug and disease page.

10. **Reduced motion respected** — `@media (prefers-reduced-motion: reduce)` disables all animations.

---

## Current Drug Library (12 drugs, 5 classes)

| Class | Drugs | Total Lines |
|-------|-------|-------------|
| SSRIs (6) | Sertraline, Fluoxetine, Escitalopram, Paroxetine, Citalopram, Fluvoxamine | ~10,860 |
| SNRIs (2) | Venlafaxine, Duloxetine | ~3,735 |
| NDRI (1) | Bupropion | ~1,869 |
| NaSSA (1) | Mirtazapine | ~1,832 |
| TCAs (2) | Amitriptyline, Clomipramine | ~3,910 |
| **Total** | **12 drugs** | **~22,268 lines** |

## Disease Library

| Disease | Status |
|---------|--------|
| Major Depressive Disorder | ✅ Complete (1,809 lines) |
| GAD, OCD, PTSD, Bipolar, Schizophrenia | Planned |

---

## Build & Deploy

```bash
# Development
bun run dev          # Next.js dev server on port 3000
bun run lint         # ESLint check

# Production
bun run build        # Next.js build (standalone output)
bun run start        # Production server

# Database (available but not used for content)
bun run db:push      # Push Prisma schema
bun run db:generate  # Generate Prisma client
```

### Next.js Config
```typescript
const nextConfig = {
  output: "standalone",
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
};
```

### ESLint
- Config: `eslint.config.mjs` (Next.js core-web-vitals + TypeScript)
- Ignores: `node_modules`, `.next`, `PROJECT-KYP/` (legacy HTML), `examples/`, `skills/`

---

*This document is the canonical reference for KYP's architecture, design system, and content standards. Any new development must follow these patterns exactly.*
