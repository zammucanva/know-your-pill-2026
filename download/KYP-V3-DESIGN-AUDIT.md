# KYP HOMEPAGE V3 — DESIGN AUDIT

**Branch:** `design/kyp-homepage-v3`
**Author:** Senior product designer + frontend architect
**State:** Audit only. **No code changes have been made.** Awaiting approval of design direction before any implementation.

---

## A. Current visual problems

After reading every homepage section, the global stylesheet, the tailwind config, the layout, the data layer, and the reusable primitives, here is what is broken:

1. **The hero is a decorated landing-page hero, not a composed cover.** It does the exact thing the brief forbids: heading + paragraph + button + blobs. The "neuro nodes" widget in the upper-right is a floating decorative island that competes with the headline instead of composing with it. The hero `min-h-[100svh]` + `justify-end` makes the headline hug the bottom, which is a vibe-coded "Apple-event" cliché, not editorial composition.

2. **The hero headline uses a brand gradient.** `kyp-text-gradient` paints the second clause teal→blue→violet. That single move is the loudest "AI-website" tell on the page. Premium editorial publications do not gradient-paint words.

3. **Blobs everywhere.** Every section that wants to feel "premium" reaches for the same prop: an absolutely-positioned `rounded-full` `blur-[100px]` `radial-gradient` div. Hero has two. Substance section has one. NeuroArcade has two. Footer has one. That is **six ambient blobs** doing the same job six times. It is the #1 thing making the page look templated.

4. **The conic `kyp-hero-glow` border on CTAs.** A 360° conic gradient with blur around a button is straight out of 2022 Web3 / Vercel-clone design. It does not belong on a medical education product.

5. **Stats section is decorative noise.** It renders an inline pill of 4 stats with separators, but the values ("12+", "4", "24/7", "Dual") are not weighted visually — they all look like body text with a bold span. No editorial weight. No composition. It exists because someone wanted a stats row.

6. **Medication library uses an inconsistent hybrid.** Featured row is `border-b` with a giant arrow. Secondary rows are `border-b` with smaller arrows. Then a `border-t` footer with category pills. The "01 — Primary" mono label is fine; everything else is half-card half-list — neither one nor the other.

7. **Substance section copies the medication library pattern** (numbered editorial rows with arrows) but adds molecule thumbnails that float in 40px circles. Two adjacent sections using the *same* composition is exactly the "section → heading → 3 rows → next section → heading → 3 rows" cadence the brief calls out as the AI tell.

8. **Timeline is the generic vertical stepper.** A 1px line on the left, colored dots, mono time labels, pill-shaped phase tags. This is the default shadcn/stepper UI. It is not a "scientific editorial sequence."

9. **NeuroArcade is a card.** It is a 2-column `lg:grid-cols-2` with a 4:3 image on one side and a heading + 3 feature rows + 2 buttons on the other. This is the most generic SaaS-section composition that exists. The `bg-foreground text-background` inversion is a vibe-coded "dark section for variety" move, not a deliberate art direction.

10. **Roadmap section is a third copy of the same list pattern.** Numbered rows, icon, title, description, comma-separated preview tags. By the time the reader reaches this section they have seen the same composition three times.

11. **FAQ is fine structurally** (sticky left heading + accordion right) but the accordion trigger is `font-serif text-lg` — every question looks like a sub-heading, which kills scanning.

12. **Emergency is a card with a decorative red blob** (`bg-emergency/15 blur-3xl` in the top-right). The brief explicitly says emergency should be "grounded, high contrast, stable, immediately legible." A blur-glow on a crisis section is the opposite of that.

13. **Footer has a giant "Know Your Pill" watermark** at 6% opacity. This is a popular 2023 agency-portfolio move. On a medical product it reads as decorative ego, not closing statement.

14. **The "ambient" `body::before` radial gradient** paints a teal halo at the top of every page. Combined with the per-section blobs, the whole site feels like it is glowing softly from every direction. That is the opposite of restraint.

15. **Typography is over-uniform.** Every section heading is `font-serif font-semibold tracking-[-0.03em]` with `clamp(1.75rem, 4vw, 3rem)` or a near-identical range. The result: every section heading is the same size. Hierarchy is flat.

16. **Color is overused as decoration.** `text-brand`, `text-neural`, `text-emergency`, `text-warning`, `text-success` all appear as eyebrow / accent colors. Five accent colors on one page = no system.

17. **The `kyp-grid-bg` utility** is a Tailwind component demo pattern. Not currently used on the homepage, but it exists in the system and will tempt the redesign. Avoid.

18. **Glass everywhere.** `kyp-glass` (backdrop-blur + saturation), navbar uses `backdrop-blur-xl backdrop-saturate-150`, floating search uses `backdrop-blur-xl`, hero search uses border-bottom only (good), mobile menu uses `backdrop-blur-xl`. Glassmorphism is on the explicit "do not" list.

19. **Rounded-everything.** `--radius: 0.875rem` baseline. Cards are `rounded-2xl`. Buttons are `rounded-full` or `rounded-xl`. Pills, chips, badges, contact cards — all rounded. Nothing is square. Nothing has a hard edge. This is the "over-rounded" tell.

20. **Reveal animation is the same everywhere.** Every block uses `<Reveal>` which does opacity + translateY + scale on scroll-into-view. By the third section the reader has subconsciously registered that everything slides up. Motion no longer communicates hierarchy — it is wallpaper.

---

## B. Why the page currently feels generic

- **Compositional monotony.** Five of nine sections use the same pattern: section-heading + intro paragraph + list-of-rows-with-arrows. The eye never has to re-orient, so it never gets a moment of surprise or rest.
- **Decorative excess.** Six ambient blobs, one body-wide gradient, one conic CTA glow, one giant footer watermark, one pulse dot, one set of floating neuro nodes. Every section reaches for a different piece of decoration, but the *type* of decoration is always "soft glow / blur / radial." The vocabulary is narrow and overused.
- **Over-typed hierarchy.** All headings are serif, all sub-headings are serif, all body is sans. Nothing breaks the rule. Nothing is set in mono at display size. Nothing is set in sans at display size. The serif is doing 100% of the headline work, which flattens it.
- **Five-color accent palette.** Brand teal + neural violet + warning amber + emergency coral + success green. Used as eyebrows, icons, dot colors. The page has no quiet sections because every section picks a different accent.
- **Soft-on-soft surfaces.** Background is `oklch(0.99 0.005 220)` — almost-white with a faint blue tint. Card is pure white. Muted is `oklch(0.96)`. Border is `oklch(0.92)`. The whole site floats on a 4-step near-white gradient with no hard contrast anywhere except NeuroArcade.
- **Everything is a Link with an ArrowRight.** 22 instances of `ArrowRight` across the homepage. The arrow is the most generic affordance in web design. Used this much, it stops signaling "go" and starts signaling "template."
- **Typography is not load-bearing.** The page never uses type *as* the composition. Type is always the *content inside* a composition. There is no moment where the word "KYP" or "12" or "SERTRALINE" is the visual.
- **Motion is uniform.** Same ease, same duration, same reveal pattern, same hover translate. Nothing rises faster or slower. Nothing holds longer.

---

## C. What should be removed

| Element | File | Reason |
|---|---|---|
| `body::before` ambient radial gradient | `globals.css` | Decorative. Makes the whole page glow. |
| Two hero blobs (teal upper-right, violet lower-left) | `home-hero.tsx` | The #1 AI-website tell. |
| `NeuroNodes` floating widget in hero | `home-hero.tsx` | Decorative island competing with headline. |
| `kyp-text-gradient` on second hero clause | `home-hero.tsx` | Gradient-painted words. |
| `kyp-hero-glow` conic gradient CTA border | `globals.css` | Web3/Vercel-clone tell. Unused on homepage currently but should be deleted from system. |
| Substance section blob | `substance-use-section.tsx` | Same prop, third time. |
| NeuroArcade dual blobs | `neuroarcade-section.tsx` | Same prop, fourth time. |
| NeuroArcade `bg-foreground text-background` inversion | `neuroarcade-section.tsx` | "Dark section for variety" is not art direction. |
| Footer ambient blob | `footer.tsx` | Same prop, fifth time. |
| Footer "Know Your Pill" 6% watermark | `footer.tsx` | Agency-portfolio ego. |
| Emergency decorative red blob (`bg-emergency/15 blur-3xl`) | `emergency-alert.tsx` | Decoration on a crisis section. |
| `kyp-grid-bg` utility | `globals.css` | Tailwind demo pattern. |
| `kyp-glass` utility (or at least its use on navbar/search/menu) | `globals.css` + components | Glassmorphism. Replace with opaque-or-nothing. |
| `Reveal`'s default `scale: 0.97` | `reveal.tsx` | Scale-on-scroll is a tell. Keep opacity + y, drop scale. |
| `kyp-float` / `kyp-drift` / `kyp-pulse` ambient keyframes | `globals.css` | Used for decoration, not communication. |
| Pulse dot on Emergency | `emergency-alert.tsx` | Motion on a crisis section. |
| Per-section accent color eyebrows (neural/warning/success) | multiple | Collapse to one ink color. Use scale and weight, not hue, for hierarchy. |

---

## D. What should be retained

These pieces are genuinely good and should be kept (possibly restyled but not rebuilt):

- **The data model.** `medicationClasses`, `substances`, `drugClasses`, `ssriTimeline`, `brainRegions`, `pathways`, `faqs`, `emergencyContacts`, `stats` — all clean, typed, single-source-of-truth. Do not touch.
- **Routing.** `/drugs/[slug]`, `/substances/[slug]`, `/diseases/[slug]`. Untouched.
- **Search behavior.** Hero form + FloatingSearch + ⌘K + SearchModal. Keep all of it. Restyle the chrome.
- **Playfair Display + Geist Sans + Geist Mono font pairing.** Good foundation. Keep the fonts. Use them harder.
- **The `Reveal` component concept.** Keep the component, drop the scale, tighten the duration. Use it sparingly — not on every block.
- **The `Section` + `Container` rhythm primitives.** Good. Keep. Adjust spacing scale.
- **The `useMagnetic` hook.** Good for one CTA. Use it on exactly one element (the hero search submit) and nowhere else.
- **The `Accordion` shadcn wrapper.** Good. Restyle trigger.
- **The `Callout` variants.** Good. Keep for drug pages.
- **OKLCH color tokens.** Good foundation. Reduce the palette, keep the format.
- **`prefers-reduced-motion` handling.** Already implemented in CSS and in `useMagnetic`. Keep and extend.
- **The "editorial row" pattern itself.** Not the problem. The problem is that *every* section uses it. Keep it for 2 sections, replace the rest with different compositions.

---

## E. New visual principles

1. **Composition first, components second.** Before writing any JSX, ask: what is the spatial relationship between the elements in this section? If the answer is "heading top, 3 rows below," redesign.
2. **Type is the visual.** At least one moment per section where the typography *is* the composition — an oversized number, a stacked word, a wide-set headline that breaks the grid.
3. **Restraint over decoration.** If a section can be expressed with type + whitespace + one hairline, it must be. Decoration is added only when it carries information.
4. **One accent, used rarely.** Teal is the only accent color on the homepage. Violet, amber, coral, green are removed from the homepage surface (they remain available for drug pages where they carry semantic meaning).
5. **Hard edges, not soft ones.** Reduce `--radius` baseline. Cards (when used) are `rounded-lg` max. Buttons can be pill or rectangular — pick one and commit. Images are square. Containers are square.
6. **Asymmetry over centering.** Default to left-aligned editorial composition. Center only when the section is a "moment" (hero closing statement, FAQ heading).
7. **Quiet vs. expressive rhythm.** At least one section on the homepage is near-silent (type + one rule, nothing else). At least one section carries visual energy (the brain / neuroscience moment). The contrast creates rhythm.
8. **Motion communicates hierarchy.** The hero reveals slowly. Section headings reveal quickly. List items do not reveal individually — they appear with their parent. Hover states use color and underline, not transform.
9. **No decorative motion.** No floating, no drifting, no pulsing, no spinning, no parallax-without-purpose. Motion is reserved for: scroll-into-view reveal (opacity + y only), hover state changes (color/underline), and one magnetic CTA.
10. **Empty space is content.** Vertical breathing room between sections goes from `py-20` to `py-32` minimum on desktop. The page should feel like a publication, not a dashboard.

---

## F. New homepage composition

The brief specifies 9 sections. Here is the proposed composition for each — each one *deliberately different* from its neighbors so the page reads as a sequence, not a stack.

```
01 HERO
   Left-aligned, top-padded (not bottom-hugged).
   Stacked display word "KYP" set in 22vw Playfair, breaks the grid.
   Below: KNOW / YOUR / PILL in 3 lines of mono uppercase, wide-tracked.
   Below that: one editorial sentence (the existing tagline), 1 line max.
   Search as the primary interaction: full-width underline input, no box.
   Right side: ONE scientific visual — a single line-art brain cross-section
   (SVG, not PNG) that bleeds off the right edge. No blobs. No neuro nodes.
   Bottom of section: thin hairline rule, full width. Below the rule:
   inline stats as a single typeset line (no badges, no cards).

02 KYP INTRO / PLATFORM STATEMENT
   Centered, max-w-prose. Single Playfair paragraph at h2 size, 3 lines.
   One pull-quote feel. No CTA. No image. This is the "quiet" section.

03 MEDICATION LIBRARY
   Two-column asymmetric grid: left rail (sticky) holds section label + count
   "12" set in 10rem Playfair, plus the category list as text links.
   Right column holds the editorial row index (existing pattern, retained).
   Featured "Psychiatric Medications" remains the dominant row.
   Hairline separators only. No arrows on rows — replaced by row-hover
   background tint (1% ink) + the row title going from regular to semibold.

04 NEUROSCIENCE / BRAIN
   The signature moment. Full-bleed dark section (intentional, the only one).
   Large brain visual centered, overlapping a 12-column grid that breaks.
   6 brain-region labels positioned around the brain with thin connector lines
   (existing data). Region labels are mono uppercase. On hover, the region
   highlights and a 1-line description appears below.
   Below the brain: one oversized statement, 2 lines, set in Playfair italic.
   This is the only section with a dark background.

05 SUBSTANCE EXPLORATION
   Editorial index — similar to medication library but with a different rhythm:
   2 columns of rows, not 1. Left column: name + drug class. Right column:
   neurotransmitter chain (e.g. "GABA · Dopamine · Glutamate") set in mono.
   Hairline between rows. No molecule thumbnails in the homepage view
   (they live on the substance detail pages).
   Filter chips remain but are restyled as text buttons with a single underline
   on the active one.

06 TIMELINE
   Horizontal scientific sequence, not vertical stepper.
   6 milestones laid out left-to-right on a single thin horizontal rule.
   Each milestone: large date above the rule, title below, 2-line description
   below that. Phase color is a single dot on the rule (teal/ink only, no
   4-color phase coding on homepage — phase colors remain on drug pages).
   On mobile: collapses to vertical but keeps the "rule + dot + label" pattern.

07 NEUROARCADE
   Distinct visual identity without dark-mode gimmick.
   Tinted background: very subtle violet wash (5% ink), not dark.
   Left: large oversized word "ARCADE" set in 18vw Playfair, partially clipped
   by the right edge of its container.
   Right: 3 feature rows with hairline separators. Small inline icon (1 per row),
   not floating in a tinted square.
   Single CTA: text link with arrow, not a button. "Launch NeuroArcade →"

08 FAQ
   Single column, max-w-3xl, centered.
   Heading "Questions" set in 6rem Playfair, left-aligned within the column.
   Accordion below. Trigger is sans-serif, body-size, with a thin "+" indicator
   that rotates 45° on open. Hairline between items.
   No sticky left rail (the previous 2-column layout was over-engineered for 6 items).

09 FOOTER
   Minimal. Centered. Small text.
   Top: KYP wordmark (small, 1.5rem, not a watermark).
   Middle: 3 columns of links (Medications / Substance Use / Platform),
   not 4. Each column max 4 links.
   Bottom: one-line legal + © line. Single hairline above the legal line.
   No giant watermark. No blob. No social icons in colored circles
   (use plain text links: GitHub, Email).

EMERGENCY (between FAQ and Footer, position unchanged)
   Plain. High-contrast. Zero decoration.
   Black ink on warm white. Hairline border, square corners.
   3 contact rows: label (sans, semibold) · number (mono, large).
   No pulse. No blur. No icon-in-circle. Just text and a tel: link.
   Heading is "In a crisis right now?" set in 2rem Playfair, left-aligned.
```

---

## G. Typography strategy

**Three voices, used deliberately:**

| Voice | Font | Role | Range |
|---|---|---|---|
| Display | Playfair Display (600) | Hero word, section signatures, oversized numbers, FAQ heading, footer wordmark | `clamp(3rem, 12vw, 10rem)` down to `clamp(2rem, 5vw, 3.5rem)` |
| Editorial | Playfair Display (500, italic for pull-quotes) | Section intros, pull-quotes, Emergency heading | `clamp(1.5rem, 2.5vw, 2.25rem)` |
| Body | Geist Sans (400/500) | Paragraphs, list items, buttons, nav | `0.9375rem` to `1.125rem` |
| Metadata | Geist Mono (500, uppercase, wide-tracked) | Eyebrows, drug-class labels, neurotransmitter chains, stats labels, timeline dates | `0.6875rem` to `0.8125rem`, `letter-spacing: 0.14em–0.18em` |

**Rules:**

- Display type appears **at most once per section**. If two display moments are needed, the second is set in Editorial size, not Display.
- Italic Playfair is reserved for pull-quotes and the brain section statement. Used nowhere else.
- Mono uppercase is the only "label" treatment. No more `text-overline` brand-colored eyebrows. All eyebrows are mono, ink-colored, with an optional index number ("03 — Substance Exploration").
- Body copy max line-length: 62ch. Enforced via `max-w-prose` or explicit `max-w-[62ch]`.
- Headings do not all share one clamp range. Hero: `clamp(3rem, 12vw, 10rem)`. Section signatures: `clamp(2rem, 5vw, 3.5rem)`. Intros: `clamp(1.5rem, 2.5vw, 2.25rem)`. Three distinct ranges, three distinct roles.
- Drop the `font-feature-settings: "ss01", "cv01", "cv02"` on body — it does nothing on Geist and adds noise.

---

## H. Color strategy

**Reduced palette. Two ink colors, one accent, one tint, one dark surface.**

| Token | Light | Dark | Role |
|---|---|---|---|
| `--background` | `oklch(0.99 0.003 80)` — warm ivory (slight yellow shift, not blue) | `oklch(0.13 0.005 80)` | Page |
| `--foreground` | `oklch(0.18 0.01 80)` — near-black, warm | `oklch(0.96 0.005 80)` | Body type |
| `--ink-muted` | `oklch(0.45 0.01 80)` — warm mid-grey | `oklch(0.65 0.008 80)` | Secondary type, hairlines at low contrast |
| `--rule` | `oklch(0.88 0.005 80)` — hairline rule color | `oklch(1 0 0 / 12%)` | All 1px dividers |
| `--accent` | `oklch(0.50 0.10 195)` — teal (kept from current brand) | `oklch(0.70 0.11 195)` | Hover, focus, one CTA, timeline dot, link underline |
| `--surface-dark` | `oklch(0.16 0.01 80)` — warm near-black for brain section only | (same) | Brain section background |
| `--surface-dark-fg` | `oklch(0.92 0.005 80)` | (same) | Brain section text |
| `--emergency` | `oklch(0.55 0.18 25)` — kept | `oklch(0.65 0.20 25)` | Emergency section only |

**Removed from homepage:** neural-violet, warning-amber, success-green as eyebrow/accent colors. (They remain defined in the token system for drug pages where they carry semantic meaning — e.g. side-effect severity.)

**Removed entirely:** all `--class-*` accent color overrides on the homepage surface. Substance rows use ink + hairline only. Drug class names appear as mono text, not colored chips.

**No gradients on the homepage.** Zero. Not on text, not on backgrounds, not on borders.

**Tint strategy:** the only "tinted" section is NeuroArcade, which gets a 5% ink wash (`oklch(0.96 0.005 80)` over the ivory). Everything else is either ivory, dark-surface, or emergency-red.

---

## I. Interaction strategy

**Allowed interactions (complete list):**

1. **Scroll-into-view reveal** — opacity 0→1, y 16px→0, 400ms, ease-out. No scale. Used on section headings and signature moments only. List items appear with their parent, not individually.
2. **Magnetic hover** on exactly one element: the hero search submit button. Strength 0.2, max offset 4px.
3. **Hover state on links** — color shift from `ink-muted` to `foreground` over 180ms. Optional underline reveal. No translate, no scale, no shadow.
4. **Hover state on substance/medication rows** — row background tint shifts from transparent to `oklch(0.97 0.005 80)` over 200ms. Row title goes regular→semibold. No arrow translate.
5. **Accordion open/close** — content height transition, 240ms. "+" indicator rotates 45° over 180ms.
6. **Brain region hover** (brain section only) — region label opacity 40%→100%, connector line opacity 20%→80%, description text fades in. 200ms.
7. **Focus rings** — 2px solid `--accent`, 2px offset. Visible on keyboard nav only (not on mouse click).
8. **Navbar scroll state** — transparent→opaque background transition over 240ms when scrolled past 16px. No blur. (Drop `backdrop-blur`.)

**Forbidden:**

- Floating, drifting, pulsing, spinning, parallax, scroll-jacking, bouncy easings, liquid morph, particle systems, conic gradients, animated borders, glow effects, shimmer, marquee.

**Reduced motion:**

- All reveals become instant (opacity 1, y 0).
- Magnetic hover disabled.
- Brain hover becomes tap-to-reveal on touch / click-to-toggle on desktop.
- Accordion still functions (it is content, not decoration).
- Navbar scroll-state still functions (it is functional, not decorative).

---

## J. Responsive strategy

**Three deliberate breakpoints, not five.**

| Range | Name | Strategy |
|---|---|---|
| `< 768px` | Mobile | Single column everywhere. Hero word scales down but stays oversized. Brain section becomes a vertical stack (brain visual on top, region list below as text). Timeline collapses to vertical. NeuroArcade "ARCADE" word is partially clipped (intentional). FAQ stays single-column. |
| `768px–1023px` | Tablet | Two-column layouts begin. Brain section brain visual takes 60% width, region list 40%. Substance rows show 2 columns. Medication library left rail appears at 768px. |
| `≥ 1024px` | Desktop | Full compositions as described in section F. |

**Mobile art-direction rules:**

- Hero word "KYP" still breaks the grid on mobile — it just breaks it less (e.g. extends 8% past the right edge instead of 20%).
- No horizontal overflow. Any element that breaks the grid must use `overflow-hidden` on its parent.
- Touch targets minimum 44×44px. Verified on all interactive elements.
- Hover-only behaviors (magnetic, brain hover) are disabled via `@media (hover: hover)` query. Tap-to-reveal replaces them.
- Typography clamp ranges are tuned so nothing goes below 1.5rem on mobile (headings) or 0.875rem (body).
- Navbar collapses to logo + menu button + emergency button. Search moves into the menu.

**Forbidden:** simply stacking desktop components vertically. Each mobile section is re-composed, not re-flowed.

---

## K. Component architecture changes

**New primitives to create:**

| Primitive | Purpose |
|---|---|
| `EditorialSection` | Wraps `Section` + adds an optional `index` prop that renders "01 —" mono label automatically. Enforces consistent eyebrow treatment. |
| `DisplayHeading` | Renders a Playfair heading with three named sizes (`signature`, `intro`, `moment`) instead of every component inventing its own clamp. |
| `Hairline` | Single 1px rule, full-width, `--rule` color. Replaces ad-hoc `border-b border-border/30` everywhere. |
| `NeuralField` | The single brain-line-art SVG motif. Inline SVG, not an image. Accepts a `variant` prop (`hero` \| `brain-section` \| `footer-mark`). Used in exactly 3 places. |
| `EditorialRow` | The shared row pattern used by medication library + substance section. Props: `index`, `title`, `meta`, `description`, `href`. Renders consistently. |
| `SectionLabel` | Mono uppercase label with optional index. Replaces all `text-overline text-brand` eyebrows. |

**Existing primitives to modify:**

| Primitive | Change |
|---|---|
| `Reveal` | Drop `scale` from default. Reduce duration to 400ms. Reduce y to 16px. |
| `Section` | Default spacing from `py-20 sm:py-24` to `py-24 sm:py-32`. Add `quiet` variant (`py-32 sm:py-48`). |
| `Container` | Add `prose` width variant (62ch). |
| `Accordion` | Trigger from `font-serif text-lg` to `font-sans text-base`. Replace chevron with "+". |
| `CardPrimitive` | Reduce `rounded-2xl` to `rounded-lg`. Drop `featured` variant (no glows). Drop `interactive` lift (no translate-y on hover). |
| `Callout` | Keep variants but remove `rounded-xl` → `rounded-lg`. Keep for drug pages. Not used on homepage. |
| `FloatingSearch` | Replace `backdrop-blur-xl` with opaque `bg-card`. Keep pill shape. |
| `Navbar` | Replace `backdrop-blur-xl backdrop-saturate-150` with `bg-background/95` (no blur). |
| `EmergencyAlert` | Strip decorative blob. Strip pulse. Square corners. Plain rows. |

**Existing primitives to delete from homepage use (keep in codebase for drug pages):**

- `BrainCard`, `PathwayCard`, `SideEffectCard`, `DrugClassCard`, `MedicationCard`, `ClinicalCard` — none used on homepage currently, none will be.
- `kyp-grid-bg`, `kyp-glass`, `kyp-hero-glow`, `kyp-text-gradient`, `kyp-float`, `kyp-drift`, `kyp-pulse-dot` — utilities deleted from globals.css.

**No new dependencies.** Uses existing Next.js, React, Tailwind, Framer Motion.

---

## L. Performance / accessibility constraints

**Performance:**

- No new images. The brain visual is inline SVG. The hero word is type. The footer wordmark is type.
- Existing `/artwork/*.png` images are not used on the homepage redesign (they live on substance detail pages). NeuroArcade currently loads `neuro-arcade.png` — replace with type + SVG motif.
- No web fonts added. Playfair, Geist Sans, Geist Mono already loaded.
- Animations use `transform` and `opacity` only. No `width`, `height`, `top`, `left` transitions.
- Target LCP: the hero word "KYP" is text — LCP is < 1s.
- Target CLS: 0. All sections have explicit min-heights where needed.
- Framer Motion `Reveal` uses `whileInView` with `viewport={{ once: true }}` — no re-triggering, no observers piling up.

**Accessibility:**

- All interactive elements have visible focus rings (2px solid accent, 2px offset).
- All decorative SVGs have `aria-hidden`.
- Brain section region labels are real `<button>` elements with `aria-expanded` and accessible descriptions.
- Emergency contact rows are `<a href="tel:...">` with descriptive accessible names.
- FAQ accordion uses shadcn/radix accordion — already keyboard accessible.
- Color contrast verified: ink `oklch(0.18 0.01 80)` on ivory `oklch(0.99 0.003 80)` = 15.8:1. Muted `oklch(0.45 0.01 80)` on ivory = 6.4:1. Both pass AAA.
- Reduced motion: all animations gated behind `@media (prefers-reduced-motion: no-preference)` where applicable, and the global `prefers-reduced-motion: reduce` block in globals.css zeros out durations.
- Touch targets: all buttons and links ≥ 44×44px. Verified on mobile.

---

## Section-by-section redesign plan

(Implementation order. Each phase = one commit. Commit messages follow the `design(v3): ...` convention.)

### Phase 1 — Global visual system
**Commit:** `design(v3): establish editorial visual system`

Files: `src/app/globals.css`, `src/app/layout.tsx`, `src/components/kyp/ui/section.tsx`, `src/components/kyp/ui/container.tsx`, `src/components/kyp/ui/reveal.tsx`, `src/components/kyp/ui/card-primitive.tsx`, `src/components/kyp/ui/accordion.tsx`

- Replace color tokens with reduced palette (warm ivory + warm near-black + one teal accent + one dark surface + emergency red).
- Drop `body::before` ambient gradient.
- Drop `kyp-grid-bg`, `kyp-glass`, `kyp-hero-glow`, `kyp-text-gradient`, `kyp-float`, `kyp-drift`, `kyp-pulse-dot` utilities.
- Reduce `--radius` from `0.875rem` to `0.5rem`.
- Adjust `Section` default spacing to `py-24 sm:py-32`, add `quiet` variant.
- Add `Container` `prose` variant (62ch).
- Strip `Reveal` default `scale`, reduce duration to 400ms, reduce y to 16px.
- Reduce `CardPrimitive` radius, drop `featured` glow.
- Restyle `Accordion` trigger: sans, body size, "+" indicator.
- Verify: `npx tsc --noEmit` passes, page still renders (visual diff expected, no breaks).

### Phase 2 — Hero
**Commit:** `design(v3): rebuild homepage hero composition`

Files: `src/components/kyp/sections/home-hero.tsx`, new `src/components/kyp/ui/neural-field.tsx`

- Remove blobs, neuro nodes widget, gradient text.
- Build stacked display word "KYP" + "KNOW / YOUR / PILL" mono treatment.
- Inline search as full-width underline input.
- Single inline SVG brain line-art on the right, bleeding off-edge.
- Hairline rule + inline stats line at the bottom.
- Magnetic hover on submit button only.

### Phase 3 — Medication library
**Commit:** `design(v3): redesign medication library`

Files: `src/components/kyp/sections/medication-library-section.tsx`, new `src/components/kyp/ui/editorial-row.tsx`, new `src/components/kyp/ui/editorial-section.tsx`, new `src/components/kyp/ui/section-label.tsx`, new `src/components/kyp/ui/display-heading.tsx`

- Two-column asymmetric layout: sticky left rail with oversized "12" + category text links, right column with editorial row index.
- Featured Psychiatric Medications row remains dominant.
- Hairline separators. No arrows. Row hover = tint + weight shift.
- Build `EditorialRow`, `EditorialSection`, `SectionLabel`, `DisplayHeading` primitives.

### Phase 4 — Neuroscience / brain section
**Commit:** `design(v3): rebuild brain section as signature moment`

Files: new `src/components/kyp/sections/brain-section.tsx`, new `src/components/kyp/ui/neural-field.tsx` (expanded)

- Full-bleed dark section. Large inline-SVG brain visual centered.
- 6 region labels positioned with thin connector lines (existing `brainRegions` data).
- Hover/tap reveals description.
- Below brain: Playfair italic statement, 2 lines.
- Replace the existing `BrainAtlasSection` (not currently used on homepage) or build fresh.

### Phase 5 — Substance exploration
**Commit:** `design(v3): redesign substance exploration`

Files: `src/components/kyp/sections/substance-use-section.tsx`

- Two-column row layout: name + class on left, neurotransmitter chain on right (mono).
- Hairline between rows. No molecule thumbnails on homepage.
- Filter chips restyled as text buttons, single underline on active.

### Phase 6 — Timeline
**Commit:** `design(v3): redesign timeline as horizontal sequence`

Files: `src/components/kyp/sections/timeline-section.tsx`, `src/components/kyp/ui/timeline.tsx`

- Horizontal rule with 6 milestones left-to-right on desktop.
- Date above, title below, 2-line description below that.
- Single teal dot per milestone (no 4-color phase coding on homepage).
- Collapses to vertical on mobile, keeping rule + dot + label pattern.

### Phase 7 — NeuroArcade
**Commit:** `design(v3): redesign neuroarcade`

Files: `src/components/kyp/sections/neuroarcade-section.tsx`

- Tinted background (5% ink wash), not dark.
- Oversized "ARCADE" word partially clipped by container edge.
- 3 feature rows with hairline separators, inline icons.
- Single text-link CTA with arrow, not a button.

### Phase 8 — FAQ
**Commit:** `design(v3): redesign faq`

Files: `src/components/kyp/sections/faq-section.tsx`

- Single column, max-w-3xl, centered.
- "Questions" heading left-aligned within column, 6rem Playfair.
- Accordion below with restyled triggers (already done in Phase 1).

### Phase 9 — Emergency + Footer
**Commit:** `design(v3): redesign emergency and footer`

Files: `src/components/kyp/sections/emergency-section.tsx`, `src/components/kyp/ui/emergency-alert.tsx`, `src/components/kyp/sections/footer.tsx`

- Emergency: strip blob, pulse, blur. Square border. Plain rows. Label + number.
- Footer: drop watermark, drop blob. Small KYP wordmark. 3 columns of links. Single hairline. Plain text social links.

### Phase 10 — Responsive + accessibility + performance pass
**Commit:** `design(v3): responsive, a11y, and performance pass`

Files: all homepage sections + globals.css

- Verify all breakpoints (390, 768, 1024, 1280, 1440).
- Verify keyboard nav across all interactive elements.
- Verify reduced-motion behavior.
- Verify color contrast AAA.
- Verify no horizontal overflow.
- Run `npx tsc --noEmit`, `npm run lint`, `npm run build`.
- Capture screenshots at all breakpoints.

### Phase 11 — Content integrity verification
**Commit:** `design(v3): verify content integrity`

- Diff `scripts/v3-baseline-copy.json` against post-redesign extraction.
- Verify all internal links still resolve.
- Verify search behavior unchanged.
- Verify ⌘K still opens SearchModal.
- Verify all drug/substance/disease routes still work.
- No commit if any copy changed — must be reverted.

---

## Quality gates (re-stating the brief's test)

Before requesting approval, the redesign must pass:

1. **"If I removed the KYP logo, would this still look like a professionally designed medical product?"** — Yes. The composition, typography, and restraint should signal "medical reference" without branding.
2. **"Does this look like a collection of components?"** — No. Each section has a distinct composition.
3. **"Could this exact UI belong to 500 other AI-generated websites?"** — No. The oversized type, horizontal timeline, asymmetric medication library, and dark brain section are not template patterns.
4. **"Is every visual element here intentional?"** — Yes. Every type choice, every hairline, every space, every color is justifiable.

---

## STOP — awaiting approval

Per the brief:

> After I approve the design plan: Implement in this order.
> DO NOT merge. DO NOT push to main. DO NOT deploy.

**This audit is complete. No code has been modified.** The branch `design/kyp-homepage-v3` is clean.

Awaiting your approval of the design direction before beginning Phase 1.
