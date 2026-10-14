/**
 * Presentation only: a statement written as "intro: item; item; item. More." is shown as an intro, a bullet list
 * and a closing sentence, so a long list of conditions, medicines or effects is easy to scan. The words are never
 * changed, added or dropped: joining the parts again gives the original text (apart from the separators).
 */
export interface ListText {
  intro: string;
  items: string[];
  outro: string;
}

export function splitList(text: string): ListText | null {
  const colon = text.indexOf(": ");
  if (colon < 10 || colon > 240) return null;
  const intro = text.slice(0, colon + 1);
  const rest = text.slice(colon + 2);
  const parts = rest.split(/;\s+/);
  if (parts.length < 3) return null;
  // The last item runs to the first full stop; anything after it is a closing sentence.
  const last = parts[parts.length - 1];
  const stop = last.search(/\.\s+[A-Z]/);
  const lastItem = stop === -1 ? last.replace(/\.$/, "") : last.slice(0, stop);
  const outro = stop === -1 ? "" : last.slice(stop + 1).trim();
  const items = [...parts.slice(0, -1), lastItem].map((i) => i.replace(/^(or|and)\s+/i, "").trim()).filter(Boolean);
  if (items.length < 3 || items.some((i) => i.length > 400)) return null;
  return { intro, items, outro };
}
