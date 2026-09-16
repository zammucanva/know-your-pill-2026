/**
 * KYP Patient Guide types — the patient language layer.
 *
 * A PatientGuide is the plain-language presentation layer for ONE
 * canonical medication. It is NOT a second source of medical truth:
 *
 *   - Medical FACTS live in the canonical drug registry
 *     (src/lib/kyp/data/drugs/<slug>.ts) and never change here.
 *   - Where the canonical registry already contains patient-grade
 *     wording (drug.patientMode.*, drug.patientExplanation), the guide
 *     IMPORTS and reuses it verbatim, so wording stays single-sourced.
 *   - Everything else here is a plain-language REPHRASING of canonical
 *     content, written to the KYP Patient Language Standard
 *     (docs/patient-language-standard.md):
 *       - Grade 7–9 target reading level where practical
 *       - short sentences, one main idea each
 *       - medical terms are INTRODUCED (spelled out on first use),
 *         never hidden
 *       - safety language stays strong — never softened
 *       - timelines, doses and warnings only ever restate canonical
 *         values; nothing is invented
 *
 * Authoring convention: a future medication adds its clinical content in
 * src/lib/kyp/data/drugs/<slug>.ts (unchanged process) and, if it should
 * be patient-readable, adds a sibling file
 * src/lib/kyp/patient/drugs/<slug>.ts exporting a PatientGuide whose
 * `slug` matches the canonical drug. The registry in ../index.ts wires
 * it in; every drug page automatically renders it in Patient mode.
 */

/** A plain-language use entry ("What is it used for?"). */
export interface PatientGuideUse {
  /** Plain name, e.g. "Depression" or "Nerve pain". */
  name: string;
  /** One or two short sentences explaining it in ordinary words. */
  plain: string;
  /** Whether this use is officially approved or a common off-label use. */
  status: "approved" | "off-label";
}

/**
 * A serious effect entry ("Important side effects").
 * The `name` KEEPS the official clinical term (Rule: never rename serious
 * clinical conditions); `whatItMeans` and `whatToDo` are plain language.
 */
export interface PatientGuideImportantEffect {
  /** Official clinical name — e.g. "Serotonin syndrome". */
  name: string;
  /** Plain-language description of what it is. */
  whatItMeans: string;
  /** Plain-language action the reader should take. */
  whatToDo: string;
}

/** The complete patient guide for one medication. */
export interface PatientGuide {
  /** Must match a canonical drug slug (validated by the registry). */
  slug: string;

  /** The drug class introduced in plain words, keeping the term. E.g.
   *  "Sertraline is an SSRI (selective serotonin reuptake inhibitor)…" */
  classInPlainWords: string;

  /** 1. What is this medicine? — one plain opening sentence. */
  whatIsThis: string;

  /** 2. What is it used for? */
  usedFor: {
    /** One-line intro in plain language. */
    intro: string;
    uses: PatientGuideUse[];
  };

  /** 3. How does it work? — always two layers (simple first, term taught after). */
  howItWorks: {
    /** "In simple terms" paragraph. */
    simple: string;
    /** "Medical detail" paragraph — may reuse the canonical clinical summary. */
    medicalDetail: string;
  };

  /** 4. When might I notice a difference? — source-supported timing only. */
  whenNotice: string;

  /** Compact one-line timing for at-a-glance surfaces (hero card, quick
   *  facts). Derived from the same canonical timing as `whenNotice`. */
  timelineShort: string;

  /** When/how the medicine is usually taken — from canonical counselling
   *  content (education points / FAQs). */
  usuallyTaken: string;

  /** 5. Common side effects. */
  commonSideEffects: {
    /** One-line plain intro (e.g. "Most people who take … feel some of these
     *  in the first week or two. They usually settle as your body adapts."). */
    intro: string;
    /** Ordinary-language list, e.g. "Feeling sick (nausea)". */
    list: string[];
    /** Optional closing note derived from canonical content. */
    note?: string;
  };

  /** 6. Important side effects — clinical names kept, plain explanations. */
  importantSideEffects: {
    intro: string;
    items: PatientGuideImportantEffect[];
  };

  /** 7. What should I tell my doctor? */
  tellYourDoctor: string[];

  /** 8. Interactions — plain overview with the key examples. */
  interactions: string;

  /** 9. What if I miss a dose? */
  missedDose: string;

  /** 10. What if I want to stop? */
  stopping: string;

  /** 11. Monitoring — what your doctor will check and why. */
  monitoring: string;

  /** 12. When to get urgent help — strong, unsoftened safety language. */
  urgentHelp: {
    intro: string;
    signs: string[];
    action: string;
  };

  /** 13. What should I remember? — the short list that matters most. */
  keyReminders: string[];

  /**
   * Statements in this guide where simplification could not be verified
   * against canonical content with full confidence. Each entry is shown
   * to editors as "MEDICAL REVIEW REQUIRED" — nothing is silently changed.
   */
  reviewFlags?: string[];
}
