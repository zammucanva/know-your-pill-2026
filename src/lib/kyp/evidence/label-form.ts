/**
 * What kind of product a US label title describes, so that a statement taken from a label is never presented as
 * if it were about a different form (a liquid, an injection kit, an inhaler, an extended-release tablet, or a
 * combination product). Read from the title only; nothing is inferred beyond it.
 */
export interface LabelForm {
  /** Short name of the form, e.g. "extended-release tablet". */
  label: string;
  /** True for an ordinary tablet or capsule taken by mouth (not extended-release, chewable, liquid, etc.). */
  plainOral: boolean;
}

export const isCombinationTitle = (title: string) => / AND [A-Z]/.test(title.replace(/\[.*$/, ""));

export function formOf(title: string): LabelForm {
  const t = title.toUpperCase();
  const oral = /TABLET|CAPSULE/.test(t);
  const special: [RegExp, string][] = [
    [/AEROSOL|INHAL|SPRAY/, "inhaled or spray product"],
    // A kit is an injection only when the title names no tablet or capsule (some kits hold tablets).
    [oral ? /INJECT/ : /INJECT|\bKIT\b/, "injection"],
    [/PATCH|TRANSDERMAL/, "skin patch"],
    [/EXTENDED[- ]RELEASE|EXTENDED RELEASE/, "extended-release product"],
    [/DELAYED[- ]RELEASE/, "delayed-release product"],
    [/ORALLY DISINTEGRATING/, "orally disintegrating tablet"],
    [/CHEWABLE/, "chewable tablet"],
    [/SOLUTION|SUSPENSION|LIQUID|SYRUP/, "liquid"],
  ];
  for (const [re, label] of special) if (re.test(t)) return { label, plainOral: false };
  if (/TABLET|CAPSULE/.test(t)) return { label: /CAPSULE/.test(t) && !/TABLET/.test(t) ? "capsule" : "tablet", plainOral: true };
  return { label: "product form not stated", plainOral: false };
}
