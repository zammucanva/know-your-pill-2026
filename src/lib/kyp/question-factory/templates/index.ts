/**
 * Template registry.
 *
 * Adding a question type means adding one QuestionTemplate here. A
 * template is active only when the source facts exist to support it:
 * enumerate() returns no slots otherwise, which the planner treats as
 * INSUFFICIENT SOURCE DATA for that template.
 */

import { ASSOCIATION_TEMPLATES } from "./association";
import { FORWARD_TEMPLATES, INVERSE_TEMPLATES } from "./attribute";
import { BRAIN_TEMPLATES } from "./brain";
import { CLASSIFICATION_TEMPLATES } from "./classification";
import { CLINICAL_TEMPLATES } from "./clinical";
import { MULTIFACT_TEMPLATES } from "./multifact";
import type { QuestionTemplate } from "./types";

export type { BuildResult, Candidate, ConceptKey, QuestionTemplate, Slot, TemplateContext } from "./types";

export const TEMPLATES: QuestionTemplate[] = [
  ...FORWARD_TEMPLATES,
  ...INVERSE_TEMPLATES,
  ...CLASSIFICATION_TEMPLATES,
  ...ASSOCIATION_TEMPLATES,
  ...MULTIFACT_TEMPLATES,
  ...CLINICAL_TEMPLATES,
  ...BRAIN_TEMPLATES,
];

const byId = new Map(TEMPLATES.map((t) => [t.id, t]));

export function getTemplate(id: string): QuestionTemplate | undefined {
  return byId.get(id);
}

export const TEMPLATE_IDS = TEMPLATES.map((t) => t.id);
