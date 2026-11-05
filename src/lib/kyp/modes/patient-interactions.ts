/**
 * Patient interactions: what the registry actually holds, and how to say so honestly.
 *
 * There are two existing patient-facing sources and one canonical clinical one:
 *   - `patientGuide.interactions`   authored plain-language text (12 medicines)
 *   - `patientMode.interactions`    registry text for every medicine; for 131 of them it is a
 *                                   SHARED TEMPLATE (fixed lead-in, a list of agent names, and a fixed
 *                                   general alcohol sentence), for 2 it is bespoke wording
 *   - `interactions[].drug`         canonical interaction names (clinical terms)
 * Nothing here paraphrases a clinical interaction record. The patient view shows the existing text
 * verbatim, labelled by where it came from, and lists the canonical names verbatim.
 */

export type PatientInteractionOrigin = "authored-guide" | "authored-registry" | "template";

export const TEMPLATE_PREFIX =
  "Tell your doctor and pharmacist about everything you take, including over-the-counter and herbal products. Common interacting agents include: ";
export const TEMPLATE_ALCOHOL_TAIL = "Avoid alcohol unless your doctor says it is safe.";

/** True when the text is the shared template (fixed lead-in, a list, and the fixed alcohol sentence). */
export function isTemplateText(text: string): boolean {
  const t = text.trim();
  return t.startsWith(TEMPLATE_PREFIX) && t.endsWith(TEMPLATE_ALCOHOL_TAIL) && t.length > TEMPLATE_PREFIX.length + TEMPLATE_ALCOHOL_TAIL.length;
}

export function originOf(source: string, text: string): PatientInteractionOrigin {
  if (source.startsWith("patientGuide.")) return "authored-guide";
  return isTemplateText(text) ? "template" : "authored-registry";
}

/**
 * Copy for the Patient interactions view. Declared here so the UI, the fidelity test and the audit
 * agree on exactly what is said. None of it is a medicine-specific claim.
 */
export const PATIENT_INTERACTION_COPY = {
  heading: "Taking other medicines with this one",
  originLabel: {
    "authored-guide": "Written for patients in this guide.",
    "authored-registry": "Written for patients in this guide.",
    template: "Standard wording used for many medicines in this guide. No individual review is recorded for this medicine.",
  },
  limitation:
    "This guide cannot check the medicines you take. Ask your prescriber or pharmacist before you start, stop or combine any medicine.",
  missingStatement:
    "This guide has no patient wording about other medicines for this medicine. Ask your prescriber or pharmacist before you start, stop or combine any medicine.",
  listHeading: "Names this guide lists for this medicine",
  listIntro:
    "These are clinical names from this guide's interaction list. Tick the ones you take or might take, then show your pharmacist. Ask your pharmacist what a name means if you are unsure.",
  listCaveat: "This list may not include every medicine that interacts. Not ticking an item does not mean a combination is safe.",
  noList:
    "This guide has no interaction names recorded for this medicine. That does not mean it has no interactions: ask your prescriber or pharmacist.",
} as const;

/** Pure summary of what the patient ticked: a count and the names, nothing more. */
export function summarizeTicks(names: readonly string[], ticked: Readonly<Record<string, boolean>>, keys: readonly string[]): { count: number; ticked: string[] } {
  const picked: string[] = [];
  names.forEach((n, i) => {
    if (ticked[keys[i]]) picked.push(n);
  });
  return { count: picked.length, ticked: picked };
}
