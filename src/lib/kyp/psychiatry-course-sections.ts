import type { NavItem } from "@/lib/kyp/use-scroll-spy";
import type { PsychiatryCourse } from "@/lib/kyp/data/psychiatry-courses/types";

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

/**
 * The section ids a course actually renders (drives nav + progress).
 * Single authority: the course view's conditional-rendering logic,
 * extracted here so the library page (per-course totals), tests and
 * any other surface derive the SAME outline instead of duplicating
 * the conditions. "top" is included — it is the hero anchor the
 * resume system targets; completion excludes it (see course view).
 */
export function getCourseRenderedSectionIds(course: PsychiatryCourse): Set<string> {
  const ids = new Set<string>();
  const add = (id: string) => ids.add(id);
  add("top");
  add("quick-facts");
  if (course.learningObjectives.length > 0) add("learning-objectives"); // rendered inside hero
  if (course.knowledgeGraph.length > 0) add("knowledge-graph");
  if (course.mechanism.steps.length > 0) add("mechanism");
  if (course.brainRegions.length > 0) add("brain");
  if (course.neurotransmitters.length > 0) add("neurotransmitters");
  if (course.pathways.length > 0) add("pathways");
  if (course.timeline.length > 0) add("timeline");
  if (course.epidemiology || (course.etiology && course.etiology.length > 0)) add("epidemiology-band");
  if (course.symptomClusters && course.symptomClusters.length > 0) add("symptoms");
  if (course.diagnosticCriteria && course.diagnosticCriteria.length > 0) add("diagnosis");
  if (course.differentialDiagnosis && course.differentialDiagnosis.length > 0) add("differential");
  if (course.management && course.management.length > 0) add("management");
  if (course.drugLinks.length > 0 || course.contentGaps.length > 0) add("drug-navigation");
  add("patient-guide");
  add("indian-practice");
  if (course.decisionPath) add("decision-path");
  if (course.commonMistakes && course.commonMistakes.length > 0) add("common-mistakes");
  if (course.examLens) add("exam-lens");
  if (course.clinicalCases && course.clinicalCases.length > 0) add("clinical-case");
  if (course.clinicalPearls.length > 0 || course.highYieldSummary.length > 0) add("high-yield");
  if (course.activeRecallQuestions.length > 0) add("active-recall");
  if (course.faqs.length > 0) add("faq");
  if (Object.values(course.references).some((category) => (category as unknown[]).length > 0)) add("references");
  return ids;
}
