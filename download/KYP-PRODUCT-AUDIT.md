# KYP — Independent Product Audit

**Author:** Senior product designer / frontend architect / medical-education strategist
**Date:** 29 August 2026
**Status:** Strategic audit only. No code modified.

---

## A. PRODUCT DIAGNOSIS

### What KYP currently is

KYP is a **medical content website with learning features bolted on**. It has:
- 12 drug pages (deep, structured, 6-lesson courses with inline MCQs)
- 3 substance pages (long, clinical, no learning layer)
- 1 disease page (half-wired — quizzes were orphaned until yesterday)
- A homepage that markets the content
- A search modal that finds the content
- A /learn page (added yesterday) that indexes the content
- A /quiz page (added yesterday) that aggregates 78 MCQs
- A /dashboard that tracks page visits

### What KYP should become

KYP should become an **interactive medical learning system** — not a reference website with quizzes, but a platform where the learning loop is the product and the content is the fuel.

The distinction:

| Reference website | Learning platform |
|---|---|
| User searches → reads → leaves | User arrives → learns → tests → reviews → returns |
| Success = time on page | Success = knowledge gained |
| Content is organized by topic | Content is organized by learning path |
| No memory of the user | Remembers what you've learned, what you struggled with |
| Flat hierarchy | Sequenced progression |
| Search-first | Path-first (search is secondary) |

### The biggest strategic mistake

**KYP treats learning as a feature, not as the product.**

The evidence:
1. The homepage is a marketing page, not a learning dashboard
2. The /learn page is an index of links, not a sequenced path
3. The /quiz is a one-shot practice test, not a spaced-repetition system
4. The drug pages are encyclopedic reference documents with quizzes sprinkled in
5. The role selected at signup influences nothing — it's a stored field with no effect
6. The /dashboard tracks page visits, not learning outcomes
7. There is no concept of "completion," "mastery," "weakness," or "next step"

The entire platform is built around the question "what content do you want to see?" when it should be built around "what do you want to learn next?"

### What makes it feel "AI/vibe coded"

After auditing every component, the vibe-coded feeling comes from **six specific patterns**:

1. **Decorative excess with no information value.** 9 component files still contain blur-blobs, radial gradients, or organic-gradient backgrounds. The hero has two floating gradient orbs. The footer has a giant "Know Your Pill" watermark at 6% opacity. The neuro nodes widget floats decorative labeled buttons in the hero. None of these communicate anything — they exist because "premium websites have visual interest."

2. **Uniform motion wallpaper.** `<Reveal>` is used in 11 of 12 homepage section files. Every block fades up with the same 550ms ease-out. By the third section, the user's brain has registered the pattern and stopped perceiving motion as meaningful. Motion that happens everywhere communicates nothing.

3. **Five-color accent palette with no system.** `text-brand` (teal), `text-neural` (violet), `text-warning` (amber), `text-emergency` (coral), `text-success` (green) — plus 8 drug-class colors. That's 13 accent colors. Each section picks a different one for its eyebrow label. The result reads as "each section was designed independently" rather than "one system."

4. **The serif-everywhere trap.** Playfair Display is used for the hero, every section heading, every drug name, every FAQ question, the footer watermark, and the /learn hero. When everything is serif, nothing is special. The display font loses its function.

5. **Over-rounded, over-shadowed surfaces.** `--radius: 0.875rem` baseline. Cards are `rounded-2xl`. Buttons are `rounded-full` or `rounded-xl`. Pills, chips, badges, contact cards — all rounded. Plus three shadow tokens (`shadow-soft`, `shadow-lift`, `shadow-glow`) applied liberally. The cumulative effect is "soft, friendly, app-like" — the opposite of "precise, clinical, serious."

6. **The "premium interactions" that aren't premium.** Magnetic hover (2-6px cursor attraction), scroll-reveal with scale, staggered children, organic gradients. These are technically sophisticated but visually generic — they're the exact motions every Vercel-clone template ships with. Real premium products (Apple, Stripe, Linear) use motion sparingly and purposefully. KYP uses it as wallpaper.

---

## B. INFORMATION ARCHITECTURE

### Current navigation

```
Navbar: Learn · Medications · Substances · Practice
(mixed: /learn and /quiz are routes; Medications and Substances are homepage anchors)
```

### The problem

The current nav mixes two mental models:
- **Routes** (Learn, Practice) = "go to a different experience"
- **Anchors** (Medications, Substances) = "scroll down on the homepage"

This is confusing. A user clicking "Medications" expects a medications page, not a scroll to a homepage section. The breadcrumb says `Learn / Medications / Sertraline` — but there IS no `/medications` page to land on.

### Recommended architecture

Three top-level destinations, each a real route:

```
LEARN     /learn         → learning hub (paths, MCQs, progress)
LIBRARY   /library       → reference index (medications, diseases, substances)
TOOLS     /tools         → interactive utilities (brain atlas, timeline, NeuroArcade)
```

Plus persistent:
- **Search** (⌘K, always available)
- **Account** (profile / dashboard / log in)

#### Desktop navigation

```
[KYP logo]    LEARN    LIBRARY    TOOLS         [Search ⌘K]    [Profile]
```

Four items. Not five, not seven. The brain can hold 4±1 items in working memory.

#### Mobile navigation

```
[KYP logo]                                    [Search]  [Menu ☰]
```

Menu opens a full-screen sheet:
```
LEARN
LIBRARY
TOOLS
─────────
Dashboard
Log in / Log out
Emergency
```

#### What belongs where

| Section | Route | Contains |
|---|---|---|
| **LEARN** | `/learn` | Learning paths, MCQ practice, progress dashboard, "continue where you left off" |
| **LIBRARY** | `/library` | Browse medications (12), diseases (1), substances (3) — the reference index |
| **TOOLS** | `/tools` | Brain Atlas, Clinical Timeline, NeuroArcade, Side Effect Library |
| **Search** | ⌘K modal | Cross-cutting discovery |
| **Account** | `/dashboard` | Profile, bookmarks, progress, settings |

#### Why this is better

- Each nav item is a **route**, not an anchor. No more confusion.
- LEARN is the product. LIBRARY is the reference. TOOLS are the utilities. Three clear purposes.
- The homepage becomes a **proper landing page** (not a scroll-tunnel) that routes into these three areas.
- Role-based personalization lives inside LEARN (recommended paths) and LIBRARY (default depth).

---

## C. LEARNING ECOSYSTEM

### The learning loop KYP needs

```
ARRIVE
  ↓
ASSESS — "What do you already know?" (optional diagnostic quiz)
  ↓
PATH — "Here's what to learn next, in order"
  ↓
LEARN — Read / watch / interact with one concept
  ↓
CHECK — One MCQ immediately after the concept (micro-retrieval)
  ↓
REVIEW — Spaced repetition surfaces what you got wrong
  ↓
PROGRESS — Visualize mastery (not just "pages visited")
  ↓
NEXT — System recommends the next concept
  ↓
(loop back to LEARN)
```

### What exists vs. what's needed

| Loop stage | Exists? | Current state | Gap |
|---|---|---|---|
| ARRIVE | ✅ | Homepage + /learn | /learn is an index, not a starting point |
| ASSESS | ❌ | Nothing | No diagnostic quiz, no "what do you know" |
| PATH | ❌ | /learn lists categories | No sequenced path, no "start here" |
| LEARN | ✅ | Drug pages are excellent | Substance/disease pages lack learning structure |
| CHECK | ✅ | 78 MCQs inline + /quiz | /quiz is one-shot, not spaced |
| REVIEW | ❌ | Nothing | No spaced repetition, no weakness tracking |
| PROGRESS | ⚠️ | /dashboard counts visits | No mastery tracking, no quiz-score history |
| NEXT | ❌ | Nothing | No recommendation engine |

### The /learn page redesign

Current /learn is a list of links to content categories. It should be a **personal learning dashboard**.

**For a new user (not logged in):**
```
LEARN

"Understand the science. Test what you know."

[Start with the basics →]     [Take a diagnostic quiz →]

──────────────────────────────

WHAT YOU CAN LEARN

  Medications          Diseases
  12 drugs · 72 MCQs   1 module · 6 MCQs

  Substances           Neuroscience
  3 modules            6 brain regions · 4 pathways

──────────────────────────────

RECOMMENDED STARTING POINTS

  01  Sertraline — the reference SSRI
  02  Major Depressive Disorder — the condition SSRIs treat
  03  Alcohol — GABA, glutamate, and withdrawal

──────────────────────────────

PRACTICE

  [Start MCQ practice →]  78 questions available
```

**For a returning user (logged in, has progress):**
```
LEARN

Welcome back, [Name].

CONTINUE WHERE YOU LEFT OFF
  [Sertraline — Lesson 3: Clinical Practice · 45% complete →]

YOUR WEAK AREAS (from quiz results)
  • CYP2D6 metabolism (got 2/4 wrong)
  • SSRI discontinuation syndrome (got 1/3 wrong)
  [Review these topics →]

RECENTLY VISITED
  [list of last 5 pages]

READY FOR THE NEXT STEP?
  Based on your progress, we recommend:
  [Fluoxetine →]  [Take the SSRI knowledge check →]
```

### How MCQs should work

Current /quiz: answer 78 questions in a row, see a score. That's a practice test, not a learning system.

**Better:**

1. **Micro-quizzes stay inline** on content pages (immediate retrieval after a concept). Already exists — keep it.

2. **/quiz becomes a spaced-practice system:**
   - User sees a short set of 5-10 questions, not all 78
   - Questions are selected based on: what the user got wrong before, what they haven't seen recently, what's related to what they just read
   - After answering, the user sees: correct/incorrect, explanation, and "we'll ask this again in 3 days"
   - A simple SM-2 or Leitner system tracks intervals per question

3. **Quiz results feed back into the learning loop:**
   - Wrong answers → "topics to revisit" with direct links
   - Right answers → increase the interval before the question returns
   - The /dashboard shows a "mastery" score per topic, not just "pages visited"

### What this requires technically

- A `QuizAttempt` model in Prisma (userId, questionId, correct, timestamp)
- A `QuestionSchedule` model (userId, questionId, nextReviewAt, interval, easeFactor)
- An API endpoint `/api/quiz/session` that returns the next 5-10 questions based on the schedule
- An API endpoint `/api/quiz/submit` that records the attempt and updates the schedule
- The /dashboard reads from these to show mastery

This is a real feature, not a UI tweak. But it's the feature that turns KYP from "reference website" into "learning platform."

---

## D. HOMEPAGE

### What the homepage should be

The homepage is a **landing page that routes into the three product areas** (Learn, Library, Tools). It is NOT a dashboard. It is NOT a marketing page. It is a **portal**.

### Section-by-section structure

```
1. HERO (the orientation)
2. THREE DOORS (Learn / Library / Tools)
3. FEATURED CONTENT (one drug, one disease, one substance — editorial picks)
4. THE LEARNING LOOP (visual explanation of how KYP works)
5. EVIDENCE (real numbers: 12 drugs, 78 MCQs, 6 brain regions)
6. EMERGENCY (always visible, always calm)
7. FOOTER
```

### Section details

#### 1. HERO

**Purpose:** Tell the user what KYP is and what they can do here, in 3 seconds.

**Visual concept:** Not a decorated hero. A precise statement.
- Left-aligned, top of viewport
- One line: "Know Your Pill" (wordmark, not a sentence)
- One line: "Medical education, made visual." (the positioning statement)
- One search bar (the primary action — "Search a medication, disease, or concept")
- No blobs, no gradient text, no floating widgets, no scroll hint

**Why:** The hero's job is orientation. Decoration delays orientation.

#### 2. THREE DOORS

**Purpose:** Make the three product areas immediately discoverable.

**Visual concept:** Three large clickable regions, not cards. Editorial typography.
```
LEARN                    LIBRARY                 TOOLS
Build understanding      Reference material      Interactive utilities
12 drugs · 78 MCQs       16 entries indexed      Brain atlas · Timeline
[Start learning →]       [Browse library →]      [Open tools →]
```
Asymmetric: LEARN is visually dominant (it's the product). LIBRARY and TOOLS are secondary.

**Why:** A first-time visitor needs to understand the platform's shape in one glance. Three doors communicate shape. A scroll of cards communicates "there's a lot of stuff."

#### 3. FEATURED CONTENT

**Purpose:** Show the depth of a single page — prove the content is serious.

**Visual concept:** One drug, one disease, one substance — each as a large editorial row with a real fact.
```
SERTRALINE
The reference SSRI. Blocks SERT within hours; full effect at 4-6 weeks.
[Read the 6-lesson course →]

MAJOR DEPRESSIVE DISORDER
DSM-5 criteria, pathophysiology, and the drugs that treat it.
[Study the disease module →]

ALCOHOL
GABA potentiation, glutamate suppression, and the withdrawal timeline.
[Explore the substance module →]
```

**Why:** Proves depth. A grid of 12 drug cards proves breadth but not depth. One featured drug with a real pharmacology fact proves KYP is serious.

#### 4. THE LEARNING LOOP

**Purpose:** Explain how KYP works as a learning system.

**Visual concept:** A horizontal diagram, not animated.
```
LEARN → CHECK → REVIEW → PROGRESS
read    quiz    revisit    see growth
```
Four stages, one line each. No cards, no icons-in-circles.

**Why:** New users don't know KYP has a learning system. This tells them in 5 seconds.

#### 5. EVIDENCE

**Purpose:** Build trust with real numbers.

**Visual concept:** One line of text, no cards.
```
12 medications · 1 disease module · 3 substances · 6 brain regions · 78 practice questions
```

**Why:** Real numbers build trust. Cards with big numbers feel like SaaS marketing.

#### 6. EMERGENCY

**Purpose:** Make crisis resources always reachable.

**Visual concept:** Plain. High contrast. Zero decoration. One heading, three phone numbers.

**Why:** Emergency content must be calm and immediately actionable. Already covered in existing design — keep it.

#### 7. FOOTER

**Purpose:** Minimal navigation and legal.

**Visual concept:** Small text, 3 columns, one hairline.

### What to remove from the current homepage

| Section | Why remove |
|---|---|
| Hero blobs + neuro nodes widget | Decorative, no information |
| StatsSection (inline pill stats) | Redundant with EVIDENCE section |
| RoadmapSection | "Coming soon" content doesn't belong on a landing page |
| NeuroArcade dark section | Belongs in TOOLS, not homepage |
| FAQ | Belongs on a /help or /faq page, not the homepage |
| Footer watermark | Agency-portfolio ego |
| All per-section accent color eyebrows | Collapse to one ink color |

---

## E. UNIVERSAL SEARCH

### Current state

The search modal is functional: it indexes 40+ items, ranks them, shows recent searches, and now groups results by content type. It's the best-built component on the site.

### What's missing

1. **No search intent detection.** If I type "sertraline side effects," the search treats it as a string match. It doesn't understand I want side-effect content related to sertraline.

2. **No filters.** I can't say "only show me medications" or "only show me things with MCQs."

3. **No "learning" results.** Search returns content pages. It doesn't return learning paths or quiz sets.

4. **No empty-query guidance.** When the search opens with no query, it shows "Suggested searches" — a flat list. It could show: "Jump to your recent learning," "Practice MCQs," "Continue where you left off."

### The ideal search experience

#### Desktop (⌘K modal)

```
┌─────────────────────────────────────────────┐
│ 🔍  Search medications, diseases, concepts…  │
│                                              │
│ ── FILTER ────────────────────────────────── │
│  All  Medications  Diseases  Substances      │
│  Neuroscience  Side Effects  MCQs            │
│                                              │
│ ── RECENT (if logged in) ─────────────────── │
│  🕐 sertraline → Sertraline                  │
│  🕐 dopamine → Dopamine (DA)                 │
│                                              │
│ ── RESULTS ───────────────────────────────── │
│  MEDICATIONS (3)                             │
│   Sertraline — SSRI                          │
│   Fluoxetine — SSRI                          │
│   Escitalopram — SSRI                        │
│                                              │
│  DISEASES (1)                                │
│   Major Depressive Disorder                  │
│                                              │
│  MCQs (4)                                    │
│   "Which transporter does Sertraline inhibit?"│
│   "What is the half-life of fluoxetine?"     │
│   ...                                        │
└─────────────────────────────────────────────┘
```

**Key features:**
- **Filter tabs** at the top — click "Medications" to narrow
- **MCQs as first-class results** — searching "sertraline" shows both the drug page AND quiz questions about sertraline
- **Recent searches** with the result they clicked (already exists — keep)
- **Grouped results** (already exists — keep)
- **Keyboard navigation** (already exists — keep)

#### Mobile

Search is a **full-screen sheet** on mobile, not a centered modal. The keyboard takes half the screen, so the results need the other half.

#### Empty state (no query)

Show three things:
1. **Continue learning** (if logged in) — your last page
2. **Popular searches** — Sertraline, MDD, Alcohol, Dopamine
3. **Browse instead** — link to /library

#### No results state

```
No results for "xyz"

Did you mean:
  • Sertraline (medication)
  • Serotonin (neurotransmitter)

Or browse:
  → All medications
  → All diseases
  → All substances
```

Fuzzy matching + fallback navigation. Never leave the user stuck.

#### Ranking

Current ranking (exact title → starts-with → includes → keyword → description) is good. Keep it. Add one layer: **if the user is logged in and has visited a result before, boost it.**

---

## F. SIGNUP / ONBOARDING

### Current state

The /welcome page is a multi-step form: welcome → signup → verify → role → done. It works. But it's a generic SaaS signup with a medical skin.

### What's wrong

1. **Role selection is meaningless.** The user picks "Medical Student" and... nothing changes. The homepage looks the same. The /learn page looks the same. The MCQs are the same difficulty. The role is stored in the database and never read by the frontend.

2. **"Verify your email" is fake.** The button says "Verify email" but clicking it just goes to the next step. There's no actual email sent. This is dishonest UX.

3. **The "done" step is anticlimactic.** "You're ready. KYP is ready for you." Then the user lands on the homepage and has to figure out what to do next.

4. **The /enter scroll animation** is beautiful but it's a performance, not an onboarding. It doesn't teach the user anything about how KYP works.

### The ideal onboarding flow

```
STEP 1: Create account
  Name, email, password.
  (No role selection yet — that comes after they're in.)

STEP 2: The scroll animation (/enter)
  This is a moment of welcome, not a form.
  "KYP / Medicine" → docks into the header.
  The user arrives at the homepage.

STEP 3: First-run guidance (not a modal — a persistent hint)
  On the homepage, a small dismissible banner:
  "New here? Start with Sertraline — the reference SSRI.
   [Start the 6-lesson course →] [Take a quick tour →]"

STEP 4: Role selection (deferred, optional, contextual)
  After the user visits their second page, prompt:
  "What brings you to KYP?"
  [Patient] [Student] [Medical Student] [Resident] [Psychiatrist]
  "This helps us recommend the right depth. You can change it anytime."

STEP 5: Role actually does something
  - Patient → default to Guided Learning "Patient" mode (5-min reads),
    simpler terminology, patient-education sections highlighted
  - Medical Student → default to "MBBS" mode (20-min reads),
    exam pearls and clinical cases highlighted, MCQs at exam difficulty
  - Resident → default to "Resident" mode (45-min reads),
    decision pathways and Indian practice highlighted
  - Psychiatrist → default to reference mode, no guided learning,
    quick lookup prioritized over learning paths
```

### Why this is better

- **Role selection is deferred** until the user has context. Asking "are you a patient or a doctor?" before they've seen the product is premature.
- **Role actually changes the experience.** This is the difference between personalization and demographic collection.
- **Email verification is honest.** Either implement it (send a real email) or remove the step. Don't fake it.
- **The first-run hint** guides the user to their first learning action, rather than dumping them on the homepage.

### Role terminology

The current labels are mostly good. One change:

| Current | Recommended | Reason |
|---|---|---|
| Patient | Patient | Keep |
| Student | Curious Learner | "Student" is ambiguous — could mean medical student |
| Medical Student / Student Doctor | Medical Student | Simplify |
| Resident | Resident | Keep |
| Psychiatrist | Practicing Psychiatrist | "Practicing" signals clinical-level depth |
| Healthcare Professional | Healthcare Professional | Keep |
| General Learner | (remove — "Curious Learner" covers this) | Redundant |

---

## G. VISUAL DESIGN SYSTEM

### Typography

**Two fonts. Three roles. No exceptions.**

| Role | Font | Usage | Size range |
|---|---|---|---|
| Display | Playfair Display (600) | Hero wordmark, one signature moment per page | `clamp(3rem, 8vw, 6rem)` |
| Body | Geist Sans (400/500/600) | Everything else — headings, body, buttons, nav, labels | `0.875rem` to `2rem` |
| Mono | Geist Mono (500) | Metadata, drug-class labels, timestamps, code-like data | `0.75rem` to `0.875rem` |

**Rules:**
- Display type appears **once per page, maximum twice.** If every section heading is Playfair, nothing is special.
- Section headings use Geist Sans at `font-weight: 600`, not Playfair. This is the biggest single change you can make to stop feeling vibe-coded.
- Mono is for data, not for decoration. Eyebrow labels use mono, not serif.

### Spacing

**8px base grid. No in-between values.**

```
0  4  8  12  16  24  32  48  64  96  128
```

Section vertical padding: `64px` mobile, `96px` tablet, `128px` desktop. The current `py-20 sm:py-24` (80/96px) is too tight for editorial breathing room.

### Grid

**12-column desktop, 4-column mobile.** Max content width: `72rem` (1152px). Not the current `80rem` — slightly narrower feels more intentional.

### Border radius

**Two values. Not three, not five.**

```
--radius-sm: 4px   (badges, pills, small chips)
--radius-md: 8px   (cards, buttons, inputs)
```

Everything is either 4px or 8px. No `rounded-full` except for the theme toggle and avatar. No `rounded-2xl` anywhere. This is the fastest way to make KYP look clinical instead of app-like.

### Shadows

**One shadow. Used rarely.**

```
--shadow-card: 0 1px 3px oklch(0.18 0.01 80 / 0.08);
```

Delete `--shadow-soft`, `--shadow-lift`, `--shadow-glow`, `--shadow-emergency`. Multiple shadow tokens encourage inconsistent depth. One shadow, used only on cards that need to feel elevated (modals, dropdowns). Content sections have no shadow — they use hairline borders.

### Colors

**Reduce from 13 accents to 3.**

| Token | Value | Role |
|---|---|---|
| `--ink` | `oklch(0.18 0.01 80)` | Primary text (warm near-black) |
| `--ink-muted` | `oklch(0.45 0.01 80)` | Secondary text |
| `--paper` | `oklch(0.99 0.003 80)` | Background (warm ivory) |
| `--rule` | `oklch(0.90 0.005 80)` | Hairlines, borders |
| `--accent` | `oklch(0.50 0.10 195)` | Teal — links, focus, one CTA |
| `--emergency` | `oklch(0.55 0.18 25)` | Emergency section only |
| `--surface-dark` | `oklch(0.14 0.01 80)` | Brain atlas section (the one dark moment) |

**Removed from the homepage surface:** neural-violet, warning-amber, success-green, and all 8 drug-class colors. Drug-class colors remain in the token system for drug detail pages (where they carry semantic meaning) but are NOT used for eyebrows, icons, or decoration on the homepage or /learn.

### Cards

**Use cards only when grouping genuinely improves comprehension.** Currently, cards are the default container for everything. They should be the exception.

When a card IS used:
- `border: 1px solid var(--rule)`
- `border-radius: 8px`
- `background: var(--paper)` (same as page — no elevated white)
- No shadow by default. Shadow only on hover for interactive cards.
- Padding: `24px` inside, `32px` for featured cards.

### Buttons

**Three variants. No more.**

```
Primary:    bg: --accent, color: white, radius: 8px, padding: 12px 20px
Secondary:  border: 1px solid --rule, bg: transparent, color: --ink
Text:       no border, no bg, color: --accent, underline on hover
```

No `rounded-full` buttons. No ghost buttons with backdrop-blur. No gradient buttons.

### Navigation

**Opaque, not glass.** The navbar currently uses `backdrop-blur-xl backdrop-saturate-150`. Replace with `bg-paper/95` (opaque, no blur). Glassmorphism is on the explicit "do not" list.

### Section transitions

**Hairlines, not gradients.** Every section separator is a single 1px `--rule` line. No gradient dividers. No `kyp-divider` with a fade-to-transparent effect.

### Image treatment

**Square corners on all images.** Molecule artwork, brain visuals, hero images — all `border-radius: 0`. Rounded images feel like a photo gallery. Square images feel like a medical reference.

---

## H. MOTION SYSTEM

### What should animate

| Interaction | Animation | Duration | Easing |
|---|---|---|---|
| Scroll-into-view reveal | opacity 0→1, y 12px→0 | 300ms | ease-out |
| Hover on interactive card | border color shift, subtle bg tint | 150ms | linear |
| Hover on link | underline appears / color shift | 100ms | linear |
| Accordion open/close | height auto transition | 200ms | ease-out |
| Modal open | opacity + scale 0.98→1 | 200ms | ease-out |
| Page transition (Next.js) | opacity fade | 150ms | linear |

**That's it. Six animations. Total.**

### What should NOT animate

- **No scale on scroll reveal.** The current `Reveal` component does `scale: 0.97 → 1`. Delete the scale. Opacity + y is enough.
- **No magnetic hover.** The `useMagnetic` hook is used on exactly one element (the hero search button). It's a vibe-coded affectation. Delete it.
- **No floating, drifting, or pulsing.** Delete `kyp-float`, `kyp-drift`, `kyp-pulse-dot` keyframes and all their usages.
- **No parallax.** No scroll-linked transforms except the /enter page docking animation (which is purposeful).
- **No staggered children.** `RevealGroup` with `staggerChildren` makes lists feel like a slideshow. Let lists appear as a unit.
- **No animated gradients.** The `kyp-hero-glow` conic gradient is static but should be deleted entirely.
- **No scroll-jacking.** Scroll position should never be locked or overridden.

### Reduced motion

Already implemented in CSS (`prefers-reduced-motion: reduce` zeroes out all durations). Keep this. Extend it to the /enter page (already done). Verify every new interaction respects it.

---

## I. "ANTI-VIBE-CODE" RULES

25 concrete rules. Print these. Tape them to the monitor.

1. **Never create a card solely because there is content.** If the content can be expressed as type + whitespace + a hairline, it must be.

2. **Display type (Playfair) appears once per page.** If two sections both use Playfair headings, one must change.

3. **One accent color per page.** Teal is the only accent on the homepage and /learn. Violet, amber, coral, green are reserved for semantic meaning on detail pages.

4. **No gradient text.** Ever. Not on hero words, not on section titles, not on links.

5. **No blur-blobs.** If you find yourself writing `blur-[100px]`, stop. You're about to add a vibe-coded element.

6. **No `backdrop-blur` on navigation.** Navigation is opaque or transparent. Not glass.

7. **Section headings are sans-serif, not serif.** Serif is for display moments only.

8. **Eyebrow labels are mono, not serif.** And they're ink-colored, not accent-colored.

9. **One shadow token.** If you need a second shadow, you need a reason.

10. **Two border-radius values.** 4px or 8px. No `rounded-full`, no `rounded-2xl`, no `rounded-3xl`.

11. **Motion communicates hierarchy.** If everything reveals on scroll, nothing is important. Reserve reveal for section headings and one signature moment per page.

12. **No scale on reveal.** Opacity + translate only. Scale-on-scroll is the #1 Framer Motion tell.

13. **No magnetic hover.** It's a parlor trick. Buttons don't need to chase the cursor.

14. **No floating, drifting, or pulsing.** If an element needs attention, use color or position — not perpetual motion.

15. **Every nav item is a route.** Never mix routes and anchors in the same nav bar.

16. **Breadcrumbs reflect the product hierarchy, not the URL.** `Learn / Medications / Sertraline` — not `Home / #library / Sertraline`.

17. **Numbers are real.** Never fabricate stats. If you don't have progress data, show "Recommended starting points" instead.

18. **Empty states have an action.** Never show "No results" without suggesting what to do next.

19. **Emergency content has zero decoration.** No blob, no pulse, no blur. Just text and phone numbers.

20. **Images are square.** Rounded images feel like Instagram. Square images feel like a textbook.

21. **One font for body, one for display, one for mono.** Three fonts total. No more.

22. **If you can remove an element and the page still works, remove it.** Decoration that isn't load-bearing is noise.

23. **Hover states use color, not transform.** No `translate-y`, no `scale`, no `rotate` on hover. Color and underline only.

24. **The homepage is a portal, not a dashboard.** It routes to the three product areas. It doesn't try to be all of them.

25. **If a senior designer couldn't tell whether this was built by a human or an AI, it's not done yet.** Keep refining until the intentionality is visible.

---

## J. PRIORITY ROADMAP

### P0 — Critical (do these first)

1. **Reduce the color palette to 3 accents.** This single change will do more to kill the vibe-coded feeling than anything else.
2. **Remove all blur-blobs, gradient text, and decorative keyframes.** 9 files affected. Mechanical change, massive visual impact.
3. **Change section headings from Playfair to Geist Sans.** Reserve Playfair for one display moment per page.
4. **Reduce border-radius to 4px/8px.** Delete `rounded-2xl`, `rounded-full` (except theme toggle).
5. **Make the navbar opaque.** Remove `backdrop-blur` and `backdrop-saturate`.

### P1 — High (do these next)

6. **Fix the navigation architecture.** Three routes: Learn / Library / Tools. Remove anchor-based nav items.
7. **Create /library route.** A real index page for browsing medications, diseases, substances — not a homepage anchor.
8. **Redesign the homepage as a portal.** Hero + Three Doors + Featured Content + Learning Loop + Evidence + Emergency.
9. **Strip the Reveal component's scale.** Opacity + y only. Reduce duration to 300ms.
10. **Delete the OrganicGradient, kyp-hero-glow, kyp-text-gradient utilities.** And the neuro nodes widget in the hero.

### P2 — Medium (do these after the above)

11. **Build the spaced-repetition quiz system.** QuizAttempt + QuestionSchedule models, /quiz becomes a session-based practice tool.
12. **Make role selection actually change the experience.** Wire the role to Guided Learning mode defaults.
13. **Redesign /learn as a personal dashboard.** "Continue where you left off" + "Your weak areas" + "Next recommended step."
14. **Add search filters.** Filter tabs in the search modal.
15. **Add MCQs as search results.** Searching "sertraline" shows quiz questions about sertraline.

### P3 — Polish (do these last)

16. **Build /tools route.** Consolidate Brain Atlas, Timeline, NeuroArcade, Side Effect Library into one tools hub.
17. **Redesign the drug page.** Reduce from 26 sections. The current page is overwhelming.
18. **Add learning paths to substance pages.** They currently have zero learning layer.
19. **Implement honest email verification.** Or remove the step.
20. **Add a /help or /faq page.** Move FAQ off the homepage.

---

## K. TECHNICAL IMPLEMENTATION PLAN

### Components to create

| Component | Purpose |
|---|---|
| `LibraryPage` | `/library` route — browse all content by type |
| `ToolsPage` | `/tools` route — hub for Brain Atlas, Timeline, NeuroArcade, Side Effects |
| `LearningDashboard` | Replaces current /learn with a personal dashboard (continue, weak areas, next step) |
| `QuizSession` | Replaces current /quiz with spaced-repetition sessions |
| `SearchFilter` | Filter tabs in the search modal |
| `PortalDoor` | The "Three Doors" homepage section |
| `LearningLoop` | The "how KYP works" diagram on the homepage |
| `Breadcrumbs` | Reusable breadcrumb component (currently inline JSX in 3 places) |

### Components to remove

| Component | Why |
|---|---|
| `OrganicGradient` | Decorative. No information value. |
| `kyp-text-gradient` utility | Gradient text is banned. |
| `kyp-hero-glow` utility | Conic gradient is a Web3 tell. |
| `kyp-grid-bg` utility | Tailwind demo pattern. |
| `kyp-glass` utility | Glassmorphism is banned. |
| `kyp-float`, `kyp-drift` keyframes | Perpetual motion is banned. |
| `kyp-pulse-dot` (on emergency only) | Emergency must be static. |
| `useMagnetic` hook | Magnetic hover is banned. |
| `NeuroNodes` (hero widget) | Decorative island. Competes with headline. |
| `RoadmapSection` | "Coming soon" doesn't belong on a live product. |

### Components to consolidate

| Current | Consolidate into |
|---|---|
| `StatsSection` + `LearnBanner` | One "Evidence + Entry" section on the homepage |
| `BrainAtlasSection` + `SideEffectsSection` + `KnowledgeGraphSection` | Move to `/tools` route |
| `DifficultyToggle` (legacy) | Delete — superseded by `GuidedLearningToggle` |
| `PatientModeToggle` + `GuidedLearningToggle` | Merge into one system |

### Data structures needed

```prisma
model QuizAttempt {
  id          String   @id @default(cuid())
  userId      String
  questionId  String
  sourceType  String   // "drug" | "disease"
  sourceSlug  String
  correct     Boolean
  answeredAt  DateTime @default(now())
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@index([userId, answeredAt])
}

model QuestionSchedule {
  id              String   @id @default(cuid())
  userId          String
  questionId      String
  interval        Int      @default(1)  // days
  easeFactor      Float    @default(2.5)
  nextReviewAt    DateTime @default(now())
  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([userId, questionId])
}
```

### Routes needed

| Route | Purpose |
|---|---|
| `/library` | Browse all content by type (medications, diseases, substances) |
| `/tools` | Hub for interactive utilities |
| `/help` | FAQ moved off the homepage |

### State management

- **Learning progress:** Prisma + API (already exists for page visits). Extend with QuizAttempt + QuestionSchedule.
- **Guided learning mode:** Zustand store (already exists: `kyp-guided-learning-mode`). Wire to user role.
- **Section completion:** Zustand store (already exists: `kyp-section-completion`). Extend to feed into /dashboard mastery score.

### Accessibility requirements

- All interactive elements: 44×44px minimum touch target
- Focus rings: 2px solid `--accent`, 2px offset
- All decorative elements: `aria-hidden`
- All form inputs: associated `<label>`
- Color contrast: AAA on body text (15.8:1), AA on muted text (6.4:1)
- Reduced motion: all animations gated behind `prefers-reduced-motion: no-preference`

### Animation architecture

- Delete Framer Motion `Reveal` scale. Keep opacity + y.
- Delete `RevealGroup` stagger. Lists appear as units.
- Keep `/enter` scroll-linked animation (purposeful, not decorative).
- Keep accordion height transition (functional, not decorative).
- Everything else: CSS transitions, not Framer Motion.

### Responsive strategy

Three breakpoints, not five:
- Mobile: `< 768px` — single column, re-composed (not re-flowed)
- Tablet: `768px–1023px` — two-column layouts begin
- Desktop: `≥ 1024px` — full compositions

---

## L. FINAL RECOMMENDATION

### If I were hired as lead product designer, here's what I'd do:

#### Change first

**Reduce the color palette and remove all decorative effects.** This is a 2-hour change that will do more to fix the vibe-coded feeling than any other single action. Delete the blobs, the gradient text, the conic glows, the floating keyframes, the glass utilities. Reduce 13 accent colors to 3. Change section headings from serif to sans. This alone will make KYP look like a different product.

#### Throw away

1. **The OrganicGradient system.** All of it. It's the loudest AI-website tell.
2. **The neuro nodes widget in the hero.** It's a decorative island that competes with the headline.
3. **The footer watermark.** "Know Your Pill" at 6% opacity is agency-portfolio ego.
4. **The RoadmapSection.** "Coming soon" content makes the product feel unfinished.
5. **The staggered Reveal animations.** Motion wallpaper communicates nothing.
6. **The `useMagnetic` hook.** A parlor trick.
7. **The fake email verification step.** Dishonest UX.

#### Preserve

1. **The drug page content and structure.** The 6-lesson course with inline MCQs, checkpoints, and active recall is genuinely excellent. It's the best part of KYP.
2. **The data layer.** 12 drugs, 1 disease, 3 substances, 78 MCQs — all real, all structured, all typed. This is the foundation.
3. **The search modal.** It's the best-built component on the site. Keep the ranking, keep the grouping, keep the keyboard nav.
4. **The /enter scroll animation.** It's purposeful motion (not decorative) and it's already built. Keep it.
5. **The Guided Learning system.** 4 modes (Patient/MBBS/NEET PG/Resident) with per-section visibility. This is real personalization infrastructure. Wire it to the role.
6. **The backend (auth, progress, bookmarks, search history).** Solid foundation. Extend it, don't rebuild it.

#### What would make KYP genuinely memorable

**The spaced-repetition learning loop.**

Right now, KYP's content is as good as any medical textbook. But a textbook doesn't test you, doesn't remember what you struggled with, doesn't surface the right concept at the right interval, and doesn't show you your growth.

If KYP builds the learning loop — learn → check → review → progress → next — it stops being "a website with medical content" and becomes "the system that teaches you medicine." That's the product. The content is the fuel. The loop is the engine.

No other free medical education platform does this well. UpToDate is a reference. Osmosis is a video library. AMBOSS is a question bank. None of them connect reading → quizzing → spaced review → progress visualization into one coherent loop.

KYP already has the content (excellent drug pages) and the quizzes (78 MCQs). It has the auth and progress infrastructure. It's 80% of the way there. The missing 20% is the loop: QuizAttempt tracking, spaced-repetition scheduling, mastery visualization, and next-step recommendation.

**Build the loop. That's what makes KYP memorable.**

---

## Summary

KYP is not a bad product. It has excellent content, a solid technical foundation, and real infrastructure. But it presents itself as "a website with medical pages" when it should present itself as "a system that teaches you medicine."

The vibe-coded feeling comes from decorative excess (6 ambient blobs, gradient text, conic glows, organic gradients, floating widgets), uniform motion (Reveal on everything), too many colors (13 accents), and over-rounded surfaces. Fixing this is mechanical: delete the decoration, reduce the palette, change serif headings to sans, reduce the radius.

The strategic gap is the learning loop. KYP has content and quizzes but doesn't connect them into a system that remembers, reviews, and recommends. Building that loop — with QuizAttempt tracking, spaced repetition, and mastery visualization — is what transforms KYP from a reference website into a learning platform.

**Do the visual cleanup first (P0, 2 hours). Then build the loop (P2, the real product work).**
