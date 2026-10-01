# Concept-Type Psychiatry Lesson Template — Redesign Summary

**Release:** refresh/antidepressants-concept-template (Workstream B)
**Reference lesson:** `/psychiatry/psychiatric-phenomenology/` (Descriptive Phenomenology, Concept course, 32 min, High yield)
**Baseline:** main @ `f3f2dfc` · **Scope:** the concept-course presentation layer only — disorder courses, drug lessons, the six-phase architecture, the data model, the 109-note corpus and all clinical text are untouched.

---

## 1. File map (what implements the redesign)

| File | Role |
|---|---|
| `src/lib/kyp/psychiatry-concept-visibility.ts` | Data-driven section-visibility rules, revision-card splitting (content-preservation invariant), quick-facts priority cap, objective one-liners |
| `src/components/psychiatry/course/concept/concept-course-view.tsx` | The lesson-at-a-time stepper: navigator, hash contract, localStorage resume, progress indicator, lesson panels, end-of-lesson Continue |
| `src/components/psychiatry/course/concept/concept-hero.tsx` | Persistent course header (the h1) with three objective one-liners + "+N more" |
| `src/components/psychiatry/course/concept/concept-ui.tsx` | Shared atoms: real-topic-name section headers, evidence-grade dot + "i" tooltip, accessible accordion (first open, expand/collapse all), inline expander |
| `src/components/psychiatry/course/concept/concept-sections.tsx` | Lessons 1–3 sections: quick facts (capped), lazy knowledge graph, mechanism (steps + narrative expander), merged explanatory layer, pathways (accordions), timeline, clinical context (visibility-gated), signals, working criteria, responsive differential, applying-the-science, patient guide |
| `src/components/psychiatry/course/concept/concept-revision.tsx` | Lessons 4–6: Indian practice, decision wizard, common mistakes (accordions), exam tabs, clinical cases (disclosure + two-column definition layout), revision cards + print sheet |
| `src/components/psychiatry/course/course-view.tsx` | Dispatcher: `kind === "concept"` → new template; disorder courses unchanged |
| `src/app/psychiatry/[slug]/page.tsx` | Conditional main padding (no left rail on concept pages) + `<noscript>` progressive-enhancement rules |
| `src/app/globals.css` | Stepper CSS (one lesson at a time), reduced-motion, print revision stylesheet |
| `src/components/kyp/ui/resume-banner.tsx` | New optional `onBeforeNavigate` prop (concept stepper switches lesson before the resume scroll; drug behaviour unchanged) |
| `scripts/find-duplicates.mjs` + `reports/duplicates-psychiatric-phenomenology.md` | Duplicate detection (redesign E) |
| `tests/concept-template.test.ts` | 15-check regression suite |

## 2. What changed and why

**The audit findings addressed**

| Audit finding | Resolution |
|---|---|
| ~22 sections in one endless scroll (496 KB HTML) | Lesson-at-a-time stepper — one lesson visible, all six in the DOM for no-JS/SEO/print |
| Navigation duplicated (top nav, breadcrumb, progress tracker, sidebar section list, Lesson N Complete banners) | ONE lesson navigator (chips desktop / select mobile) + ONE "Lesson X of Y" progress bar + the end-of-lesson takeaway folded into the Continue area |
| Ideas repeated 4–6× across sections | Duplicate detector built (redesign E); revision layer re-sliced into cards; every finding reported for human review (nothing auto-deleted) |
| Walls of text (7×~250-word revision paragraphs; 283-word mechanism narrative + 7 restating steps) | Steps render by default; narrative behind "Read the full narrative"; revision paragraphs became cards (source's own label as title + 3–6 bullets) |
| Disease-shaped sections forced onto concept topics with filler | Content-driven visibility (below) |
| "psychotherapy" tags on Applying-the-Science cards | Neutral "Skill" label on concept courses |
| Visual noise (grade legend, overall-grade row, per-card pills, 8 dense fact cards, 3-column differential with long cells) | Grade dot + single "i" tooltip; grade once beside the heading; five fact cards; clamped differential cells with More; stacked differential cards below 900px |
| Poor mobile behaviour (wide tables, knowledge graph, decision tree) | Responsive differential (<900px cards), grouped topic list <640px, one-question wizard, zero horizontal overflow at 320/375/768/1024/1440 |

## 3. Sections hidden / restructured for concept topics (data-driven)

The rules live in `psychiatry-concept-visibility.ts`; placeholder detection follows the spec phrases ("Not applicable", "No … figure", "is not recorded", "not invented").

| Family | Rendered | Hidden | Notes |
|---|---|---|---|
| Epidemiology | 18 (real data, e.g. sleep-basics) | 17 (14 placeholder + 3 absent) | Hidden families keep their data files untouched |
| Causes & risk factors (etiology) | 32 | 0 (3 absent) | Rendered with the real topic name "Underlying factors" |
| Patient Guide | 35 | 0 | The "Not applicable as an illness" lead-in in the reference lesson lives inside the `symptoms` field and is followed by real plain-language content — the guide renders |
| Brain + Neurotransmitters | 30 / 29 courses | merged | ONE collapsible "Explanatory layer (after the description)" inside Lesson 2 — same section ids (`#brain`, `#neurotransmitters`), mode gating and completion anchors; collapsed content is `display:none`, so it can never accrue reading progress (IntersectionObserver-verified) |
| "psychotherapy" category labels | → "Skill" | — | Concept branch of Applying the Science |

**Hidden fields, per course:** nothing is deleted from any data file — visibility is render-time only. The full per-course matrix is reproducible via `bun run scripts/test-concept-visibility.ts`.

## 4. Content integrity (what did NOT change)

- `git diff f3f2dfc --stat -- src/lib/kyp/data/psychiatry-courses/` → **empty** (zero concept-course data changes; the entire redesign is template-level)
- 109-note corpus: byte-identical (SHA-256 before/after)
- Revision-card splitting carries a **content-preservation invariant** — the card's title + bullets reconstruct the source paragraph exactly (verified for all 252 paragraphs across the 35 concept courses; 5 paragraphs that fail the safe split degrade to single-bullet cards carrying the verbatim text)
- All quiz questions, answers, explanations, FAQ entries and internal links preserved; FAQ items missing answers: **0** across all 35 concept courses
- Knowledge-graph `href="#brain"` / `href="#neurotransmitters"` links still resolve (the merged layer auto-opens on those hashes)

## 5. Duplicate-content report highlights

`reports/duplicates-psychiatric-phenomenology.md` — 845 cross-section repeats (8+ words), top 20 listed. Highest-frequency shorter phrases: "the overvalued idea" (11 sections), "prevention morbid jealousy" (9), "the patient recognises" (9). The spec-mandated known duplicate is verified present: **"no equipment" ×7 across 6 sections; "portable psychiatric skill" ×4 across 4; "every language" ×5 across 5.** Nothing was auto-deleted — every finding awaits human review.

## 6. Before/after metrics

Page height (full-page, 900px-tall viewport; "before" = production f3f2dfc, "after" = the redesigned page with all lessons in the DOM):

| Viewport | Before | After (document) | Learner-visible surface (one lesson) |
|---|---|---|---|
| 320 | 70,912 px (≈79 screens) | 5,757 px | 3,624 px |
| 375 | 62,064 px (≈69 screens) | 5,339 px | 3,258 px |
| 768 | 40,158 px (≈45 screens) | 4,144 px | 2,624 px |
| 1024 | 46,453 px (≈52 screens) | 4,148 px | 2,614 px |
| 1440 | 40,844 px (≈45 screens) | 4,182 px | 2,637 px |

Per-lesson heights at 1024×900: L1 1,685 px (1.9 screens — meets the ~2.5-screen first-view target), L2 3,221, L3 9,188, L4 3,298, L5 6,048, L6 2,614. Lessons beyond the target are content-bound: the corpus sections carry 150–400-word teaching paragraphs and the content-integrity rules forbid cutting them; every dense block is progressively disclosed instead. This is a documented judgement call against the "approximately 2.5 screens" target.

## 7. Accessibility

- **axe-core** (wcag221 + wcag2aa + best-practice) on the redesigned reference lesson: **0 violations** (from 2 initial — page-has-heading-one fixed by making the hero the persistent h1; landmark nesting fixed). Colour-contrast corrections were colour-only (new `--neural-ink` / `--warning-ink` tokens following the existing `--brand-ink` pattern; ink tones for small text on shared labels)
- **Lighthouse mobile** (local gzip server): **Accessibility 100**, **Best Practices 96**, Performance 69 (vs 59 on the pre-redesign page measured live under the same throttling; FCP 2.2 s → 1.2 s, LCP 6.0 s → 3.1 s). The ≥90 performance target is **not met** — the no-JS/print contract requires all lesson content in the initial HTML, which caps route-level performance; documented as a known limitation, not a blocker (the page is faster than before)
- Keyboard: stepper chips/select/Prev/Next are native controls; arrow-key navigation on the chip row; focus moves to the new lesson heading on switch; `aria-live` lesson announcements; visible focus rings throughout
- Closed disclosures are `display:none` (native `<details>` or `data-inactive`), so collapsed content can never accrue reading progress — IntersectionObserver-verified on the explanatory layer
- Reduced motion: stepper transitions disabled under `prefers-reduced-motion`; the knowledge graph renders without animation
- Zero horizontal overflow at 320 / 375 / 768 / 1024 / 1440 (all six lessons swept at each width)
- Heading hierarchy: h1 (persistent hero) → h2 (lesson) → h3 (section) — no skipped levels

## 8. No-JS result

With JavaScript disabled the server-rendered HTML keeps: all six lessons stacked and readable (no `data-inactive` at SSR), every exam panel stacked (null-initial tab state), and the closed disclosures readable via the `<noscript>` rules (closed Radix accordion content unhidden). The native `<details>` blocks (explanatory layer, All key facts, revision +N more lines, Read the full narrative, differential features on mobile) are fully operable without JavaScript. Verified against the exported HTML.

## 9. Progress contract (unchanged denominators)

Same store, same ids, same canonical denominator the library shows: dwell completed `quick-facts` → `mechanism` → `brain` (after expanding the layer — collapsed content never completes), library row synced (3/23), resume banner restored lesson 2 + the saved position, patient mode adapts the stepper to its 3 relevant lessons ("Lesson 1 of 3"). Drug pages keep their own 26-section contract (verified untouched).

## 10. Known follow-ups (documented, not blockers)

1. **Duplicate content**: 845 cross-section repeats await human editorial review — this release reports them; a future pass may rewrite (never by automation).
2. **Content-dense lessons exceed the 2.5-screen target** (L3/L5) — bounded by corpus volume and the content-integrity rules.
3. **Performance 69 vs ≥90 target** — inherent to the all-content-in-HTML architecture; a JS-split variant would break the no-JS/print contract.
4. Revision-card titles come from the source paragraphs' own leading labels — 19 of 252 paragraphs carry no label and render untitled cards.
5. The toggle chip background darkening (`bg-brand-ink`) is a colour-only change shared with drug pages — flagged for design review in a future pass.

## 11. Judgement calls and alternatives considered

| Decision | Alternatives rejected |
|---|---|
| Refresh scope = all 12 registered antidepressants | No subset is designated anywhere; "all registered" is the maximal non-expanding reading of "antidepressant refresh" |
| FDA labels via DailyMed as the approved source | No source PDFs exist in the sandbox; textbooks (Katzung/G&G) are not retrievable — existing textbook-anchored content is KEEP-only, never rewritten from memory |
| Merge brain+neurotransmitters under the existing ids | A new `explanatory-layer` id would have required migrating 35 courses' `learningPaths.visibleSections` + KG hrefs + completion denominators — avoidable, so avoided |
| Keep the epidemiology/etiology/patient-guide detection per-family on the defining fields | The literal "any placeholder phrase anywhere" reading would have hidden real content (the phenomenology patient guide's `symptoms` field opens with "Not applicable as an illness" before real content) |
| `sr-only` → native `<details>` / `display:none` for closed content | `sr-only` content can still intersect the reading observer (zero-size elements report intersection), which would have broken the honest-completion contract |
| Colour-only contrast fixes on shared components | Touching layout/structure would have violated "the Drug Lesson visual system remains the design oracle" |
| Revision cards re-slice the source text (programmatic) | A `bullets` data migration across 35 files was allowed but unnecessary — the split's reconstruction invariant proves content preservation without touching data |

## 12. Screenshots

`reports/screens/phenomenology-{before,after}-{320,375,768,1024,1440}.png` (before shots downscaled to 20,000 px height — the originals were ~70,000 px canvases; page heights above carry the exact numbers) + `phenomenology-after-1024-dark.png` (dark mode).
