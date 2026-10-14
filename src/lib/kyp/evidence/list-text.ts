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
  if (colon < 10 || colon > 240) return cueList(text);
  const intro = text.slice(0, colon + 1);
  const rest = text.slice(colon + 2);
  const parts = rest.split(/;\s+/);
  if (parts.length < 3) return commaList(intro, rest);
  // The last item runs to the first full stop; anything after it is a closing sentence.
  const last = parts[parts.length - 1];
  const stop = last.search(/\.\s+[A-Z]/);
  const lastItem = stop === -1 ? last.replace(/\.$/, "") : last.slice(0, stop);
  const outro = stop === -1 ? "" : last.slice(stop + 1).trim();
  const items = [...parts.slice(0, -1), lastItem].map((i) => i.replace(/^(or|and)\s+/i, "").trim()).filter(Boolean);
  if (items.length < 3 || items.some((i) => i.length > 400)) return null;
  return { intro, items, outro };
}

/**
 * A list written with commas ("intro: a, b (with, a comma), c, d, and e.") is split at the commas that are not
 * inside brackets and not between two digits. It needs at least five short items, so ordinary sentences with a
 * few commas are never turned into lists.
 */
function commaList(intro: string, rest: string): ListText | null {
  const end = rest.search(/\.\s+[A-Z]|\.$/);
  const body = end === -1 ? rest : rest.slice(0, end);
  const outro = end === -1 || rest.slice(end).replace(/^\.\s*/, "") === "" ? "" : rest.slice(end + 1).trim();
  const items: string[] = [];
  let depth = 0;
  let from = 0;
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (ch === "(" || ch === "[") depth++;
    else if (ch === ")" || ch === "]") depth = Math.max(0, depth - 1);
    else if (ch === "," && depth === 0 && !(/\d/.test(body[i - 1] ?? "") && /\d/.test(body[i + 1] ?? ""))) {
      items.push(body.slice(from, i));
      from = i + 1;
    }
  }
  items.push(body.slice(from));
  const cleaned = items.map((i) => i.trim().replace(/^(or|and)\s+/i, "").trim()).filter(Boolean);
  if (cleaned.length < 5 || cleaned.some((i) => i.split(/\s+/).length > 14 || /[.!?]\s/.test(i))) return null;
  return { intro, items: cleaned, outro };
}

/**
 * A single sentence whose list follows a cue phrase instead of a colon ("... if you have a, b, c, d, and e."). Only the
 * first cue is tried, the same five-short-items rule applies, and the cue stays at the end of the intro so the words
 * read in the same order. Presentation only.
 */
const CUE = /\b(?:if you(?: or a family member)? (?:have|get|notice|develop|experience)|include|includes|including|such as)\s+(?=\S)/i;
function cueList(text: string): ListText | null {
  const m = CUE.exec(text);
  if (!m || m.index < 10) return null;
  const before = text.slice(0, m.index);
  if ((before.match(/\(/g) ?? []).length !== (before.match(/\)/g) ?? []).length) return null; // the cue is inside brackets
  const cut = m.index + m[0].length;
  const intro = text.slice(0, cut).trimEnd();
  const list = commaList(intro, text.slice(cut));
  return list;
}
