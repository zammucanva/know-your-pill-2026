import type { NavItem } from "@/lib/kyp/use-scroll-spy";

/**
 * Psychiatry course section registry — the single source of truth for
 * the six-lesson learning journey's in-page navigation, mirroring
 * DRUG_COURSE_NAV_ITEMS for the drug course template.
 *
 * The same list powers:
 *   - StickyLearningNav (left rail / navigator)
 *   - SectionReadTracker (per-section read tracking + resume position)
 *   - ResumeBanner (continue-where-you-left-off)
 *
 * Lesson grouping (visible in the navigator dialog):
 *   1. Foundations            top, quick-facts, learning-objectives, knowledge-graph
 *   2. Mechanism & Neuroscience  mechanism, brain, neurotransmitters, pathways, timeline
 *   3. Clinical Practice       symptoms, diagnosis, differential, management, patient-guide
 *   4. Indian Context          indian-practice, decision-path, common-mistakes
 *   5. Exam Revision           exam-lens, clinical-case, drug-navigation, high-yield
 *   6. Active Recall           active-recall, faq, references
 */

export interface CourseNavItem {
  id: string;
  label: string;
  group: string;
}

export const PSYCH_COURSE_NAV_ITEMS: CourseNavItem[] = [
  { id: "top", label: "Overview", group: "Foundations" },
  { id: "quick-facts", label: "Quick Facts", group: "Foundations" },
  { id: "learning-objectives", label: "Objectives", group: "Foundations" },
  { id: "knowledge-graph", label: "Knowledge Graph", group: "Foundations" },

  { id: "mechanism", label: "Mechanism", group: "Mechanism & Neuroscience" },
  { id: "brain", label: "Brain", group: "Mechanism & Neuroscience" },
  { id: "neurotransmitters", label: "Neurotransmitters", group: "Mechanism & Neuroscience" },
  { id: "pathways", label: "Pathways", group: "Mechanism & Neuroscience" },
  { id: "timeline", label: "Timeline", group: "Mechanism & Neuroscience" },

  { id: "symptoms", label: "Symptoms", group: "Clinical Practice" },
  { id: "diagnosis", label: "Diagnosis", group: "Clinical Practice" },
  { id: "differential", label: "Differential", group: "Clinical Practice" },
  { id: "management", label: "Management", group: "Clinical Practice" },
  { id: "patient-guide", label: "Patient Guide", group: "Clinical Practice" },

  { id: "indian-practice", label: "Indian Practice", group: "Indian Context" },
  { id: "decision-path", label: "Decision Path", group: "Indian Context" },
  { id: "common-mistakes", label: "Common Mistakes", group: "Indian Context" },

  { id: "exam-lens", label: "Exam Content", group: "Exam Revision" },
  { id: "clinical-case", label: "Clinical Case", group: "Exam Revision" },
  { id: "drug-navigation", label: "Drug Navigation", group: "Exam Revision" },
  { id: "high-yield", label: "High-Yield", group: "Exam Revision" },

  { id: "active-recall", label: "Active Recall", group: "Active Recall" },
  { id: "faq", label: "FAQ", group: "Active Recall" },
  { id: "references", label: "References", group: "Active Recall" },
];

/** Nav items for a course, filtered to the sections it actually
 *  renders (a concept course omits disorder-only sections). */
export function courseNavItems(renderedSectionIds: Set<string>): NavItem[] {
  return PSYCH_COURSE_NAV_ITEMS.filter(
    (item) => item.id === "top" || renderedSectionIds.has(item.id)
  ).map(({ id, label, group }) => ({ id, label, group }));
}
