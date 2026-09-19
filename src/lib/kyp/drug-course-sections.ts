/**
 * Drug course section map — the canonical course outline of the
 * medication page template (src/app/drugs/[slug]/page.tsx).
 *
 * SINGLE SOURCE OF TRUTH for which anchored sections exist on every
 * /drugs/[slug] course page. It exists so that question-to-knowledge
 * deep links (NOW-N6) can verify an anchor before linking to it —
 * a question may only ever deep-link to a section id that the page
 * template actually renders, and must fall back to the page root
 * otherwise. The page template imports this list to build its
 * sticky navigator, so the two can never drift apart.
 *
 * This is navigation structure, NOT medical content — it contains no
 * claims, and it lives outside the content-locked data directory.
 */

export interface CourseNavItem {
  id: string;
  label: string;
  group: string;
}

/** The 26-section course outline shared by every medication page. */
export const DRUG_COURSE_NAV_ITEMS: CourseNavItem[] = [
  { id: "top", label: "Overview", group: "Lesson 1" },
  { id: "quick-facts", label: "Quick Facts", group: "Lesson 1" },
  { id: "learning-objectives", label: "Objectives", group: "Lesson 1" },
  { id: "knowledge-graph", label: "Knowledge Graph", group: "Lesson 1" },
  { id: "mechanism", label: "Mechanism", group: "Lesson 2" },
  { id: "brain-regions", label: "Brain", group: "Lesson 2" },
  { id: "neurotransmitters", label: "Neurotransmitters", group: "Lesson 2" },
  { id: "neural-pathways", label: "Pathways", group: "Lesson 2" },
  { id: "timeline", label: "Timeline", group: "Lesson 2" },
  { id: "clinical-uses", label: "Clinical Uses", group: "Lesson 3" },
  { id: "side-effects", label: "Side Effects", group: "Lesson 3" },
  { id: "monitoring", label: "Monitoring", group: "Lesson 3" },
  { id: "contraindications", label: "Contraindications", group: "Lesson 3" },
  { id: "evidence-practice", label: "Evidence", group: "Lesson 3" },
  { id: "interactions", label: "Interactions", group: "Lesson 3" },
  { id: "patient-education", label: "Patient Guide", group: "Lesson 3" },
  { id: "indian-clinical", label: "Indian Practice", group: "Lesson 4" },
  { id: "decision-path", label: "Decision Path", group: "Lesson 4" },
  { id: "common-mistakes", label: "Mistakes", group: "Lesson 4" },
  { id: "learning-module", label: "Exam Content", group: "Lesson 5" },
  { id: "clinical-case", label: "Clinical Case", group: "Lesson 5" },
  { id: "drug-navigation", label: "Drug Navigation", group: "Lesson 5" },
  { id: "high-yield-summary", label: "High-Yield", group: "Lesson 5" },
  { id: "active-recall", label: "Active Recall", group: "Lesson 6" },
  { id: "faq", label: "FAQ", group: "Lesson 6" },
  { id: "references", label: "References", group: "Lesson 6" },
];

/** Every anchored section id that exists on a drug course page. */
export const DRUG_PAGE_SECTION_IDS: readonly string[] = DRUG_COURSE_NAV_ITEMS.map(
  (item) => item.id
);

/** True when `sectionId` is an anchor the drug page really renders. */
export function isDrugPageSection(sectionId: string | null | undefined): boolean {
  return Boolean(sectionId) && DRUG_PAGE_SECTION_IDS.includes(sectionId as string);
}

/**
 * Question-to-knowledge deep link (NOW-N6): link to the exact anchored
 * section of the drug page when it exists, and to the drug page root
 * otherwise — never to an anchor that may not resolve.
 */
export function anchoredDrugHref(
  slug: string,
  sectionId?: string | null
): string {
  const base = `/drugs/${slug}`;
  return isDrugPageSection(sectionId) ? `${base}#${sectionId}` : base;
}

/**
 * Belt-and-braces re-verification for hrefs stored or passed around:
 * if the href points at a drug page with an anchor that the course
 * template does not render, fall back to the page root. Non-drug
 * hrefs (e.g. disease pages) pass through unchanged.
 */
export function verifyDrugHref(href: string): string {
  const match = href.match(/^\/drugs\/([^/#]+)(?:#([^#]+))?$/);
  if (!match) return href;
  const [, slug, anchor] = match;
  if (!anchor) return href;
  return DRUG_PAGE_SECTION_IDS.includes(anchor) ? href : `/drugs/${slug}`;
}
