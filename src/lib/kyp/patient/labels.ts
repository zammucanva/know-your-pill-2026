/**
 * KYP Patient Language Standard — reusable labels and terminology.
 *
 * This module is the CODE side of the standard documented in
 * docs/patient-language-standard.md. Components and authors import
 * these approved labels so the patient voice stays consistent across
 * every medication page.
 *
 * ⚠️ This is NOT a string-replacement dictionary. The terminology map
 * below is a curated, contextual reference used by AUTHORS when writing
 * patient copy (and by the two-layer "How it works" pattern). Context
 * always wins — for example "acute" means different things in different
 * medical contexts and is therefore NOT mapped here.
 */

/* ============================================================
   Approved patient section labels (guide structure §4)
   ============================================================ */

export const PATIENT_GUIDE_SECTIONS = {
  whatIsThis: "What is this medicine?",
  usedFor: "What is it used for?",
  howItWorks: "How does it work?",
  whenNotice: "When might I notice a difference?",
  commonSideEffects: "Common side effects",
  importantSideEffects: "Important side effects — know the warning signs",
  tellYourDoctor: "What should I tell my doctor?",
  interactions: "Other medicines, alcohol, and this medicine",
  missedDose: "What if I miss a dose?",
  stopping: "What if I want to stop?",
  monitoring: "What your doctor will check",
  urgentHelp: "When to get urgent help",
  keyReminders: "What should I remember?",
} as const;

/** Simple-layer label used by the two-layer mechanism pattern. */
export const IN_SIMPLE_TERMS_LABEL = "In simple terms";

/** Detail-layer label used by the two-layer mechanism pattern. */
export const MEDICAL_DETAIL_LABEL = "Medical detail";

/* ============================================================
   Patient hero labels (patient identity card)
   ============================================================ */

export const PATIENT_HERO_LABELS = {
  identity: "About this medicine",
  brands: "Common brands",
  whatToExpect: "What to expect",
  timeToNotice: "Time to notice a difference",
  usuallyTaken: "Usually taken",
  lastReviewed: "Last reviewed",
  readTime: "About 5 min read",
  plainLanguageNote: "Written in plain language for patients and caregivers.",
} as const;

/* ============================================================
   Terminology map — curated, contextual introductions.
   Authors USE these when writing; nothing is auto-replaced.
   ============================================================ */

export interface TerminologyEntry {
  /** The technical term as it appears in clinical content. */
  term: string;
  /** How to spell it out on first use (Rule 5). */
  spelledOut: string;
  /** The plain-language meaning a patient should take away. */
  plainMeaning: string;
}

export const PATIENT_TERMINOLOGY: TerminologyEntry[] = [
  {
    term: "SSRI",
    spelledOut: "selective serotonin reuptake inhibitor",
    plainMeaning:
      "a medicine that helps keep more serotonin available between brain cells",
  },
  {
    term: "SNRI",
    spelledOut: "serotonin and norepinephrine reuptake inhibitor",
    plainMeaning:
      "a medicine that helps keep more serotonin and norepinephrine available between brain cells",
  },
  {
    term: "NDRI",
    spelledOut: "norepinephrine and dopamine reuptake inhibitor",
    plainMeaning:
      "a medicine that helps keep more norepinephrine and dopamine available between brain cells",
  },
  {
    term: "NaSSA",
    spelledOut: "noradrenergic and specific serotonergic antidepressant",
    plainMeaning:
      "an antidepressant that raises norepinephrine and serotonin by blocking certain receptors instead of blocking recycling",
  },
  {
    term: "TCA",
    spelledOut: "tricyclic antidepressant",
    plainMeaning:
      "an older class of antidepressants that affects several brain chemicals and other receptors in the body",
  },
  {
    term: "serotonin",
    spelledOut: "serotonin (a chemical the brain uses to regulate mood, anxiety, sleep, and appetite)",
    plainMeaning:
      "one of the chemicals your brain uses to send messages between nerve cells",
  },
  {
    term: "norepinephrine",
    spelledOut: "norepinephrine (a chemical involved in energy, attention, and the body's stress response)",
    plainMeaning:
      "a brain chemical involved in energy, alertness, and attention",
  },
  {
    term: "dopamine",
    spelledOut: "dopamine (a brain chemical involved in motivation and reward)",
    plainMeaning: "a brain chemical involved in motivation and reward",
  },
  {
    term: "adverse effects",
    spelledOut: "side effects",
    plainMeaning: "unwanted effects a medicine can have on your body",
  },
  {
    term: "contraindication",
    spelledOut: "a reason NOT to take a medicine",
    plainMeaning:
      "a situation where a medicine should not be used because it could be unsafe",
  },
  {
    term: "discontinuation syndrome",
    spelledOut: "withdrawal-like symptoms after stopping too quickly",
    plainMeaning:
      "uncomfortable symptoms some people get when a medicine is stopped too suddenly",
  },
  {
    term: "therapeutic response",
    spelledOut: "improvement in symptoms",
    plainMeaning: "the medicine starting to work",
  },
  {
    term: "half-life",
    spelledOut: "the time it takes the body to remove half of the medicine",
    plainMeaning: "how long a medicine stays in your body",
  },
];

/** Look up a curated terminology entry (for authors and QA tooling). */
export function findTerminology(term: string): TerminologyEntry | undefined {
  const needle = term.trim().toLowerCase();
  return PATIENT_TERMINOLOGY.find((t) => t.term.toLowerCase() === needle);
}

/* ============================================================
   Sections that stay visible to the patient learning path.
   Mirrors the canonical patient `visibleSections` ("emergency"
   renders page-level outside the section navigator, so it is not
   listed here). Exported so the sticky section navigator can filter
   down to what patients can actually reach.
   ============================================================ */

export const PATIENT_VISIBLE_SECTIONS = [
  "top",
  "quick-facts",
  "patient-education",
  "faq",
] as const;
