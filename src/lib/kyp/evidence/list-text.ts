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

/** Abbreviations whose full stop must not end a sentence or a list ("St. John's Wort"). */
const ABBREV = /\b(St|Dr|Mr|Mrs|Ms|vs|approx|No)\./g;
const HOLD = "\u0001";

export function splitList(text: string): ListText | null {
  const held = text.replace(ABBREV, (_m, a) => a + HOLD);
  const list = splitListRaw(held);
  if (!list) return null;
  const back = (t: string) => t.split(HOLD).join(".");
  return { intro: back(list.intro), items: list.items.map(back), outro: back(list.outro) };
}

function splitListRaw(text: string): ListText | null {
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
  if (!itemsStandAlone(intro, cleaned)) return null;
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

/**
 * A comma can separate independent items ("nausea, headache, dizziness") or it can sit inside ONE item that shares a
 * head word with its neighbours ("swelling of the lips, face, throat or tongue", "feeling angry, irritable, restless").
 * Bullets would turn the second kind into separate, wrong items, so a list is refused when it shows any of these
 * signs. Refusing only means the statement stays a sentence; no word is ever changed.
 *   - an item opens with a word that governs the items after it (feeling, swelling, difficulty, a combination of ...)
 *     and a later item is a short fragment that could not stand alone;
 *   - an item is an adverbial or qualifier ("mainly of the tongue", "especially ...");
 *   - an item is a clause with its own modal verb ("your original condition may come back") under an intro that
 *     promises examples ("such as", "include").
 */
const GOVERNING = /^(?:feeling|feel|being|having|seeing|hearing|getting|difficulty|trouble|problems?|pain|swelling|loss|signs?|a combination)\b/i;
const QUALIFIER = /^(?:mainly|especially|particularly|usually|often|sometimes|including|such as|for example|e\.g\.|in particular)\b/i;
/** Words that only complete a governing head ("swelling of the [lips, face, throat]", "feeling [angry, irritable]"). */
const FRAGMENT_WORDS = new Set(("face lips tongue throat mouth jaw arms legs hands feet eyes ears skin neck chest ankles fingers toes limbs muscles joints nose stomach back head body "
  + "angry irritable restless depressed anxious agitated confused shaky sick tired dizzy drowsy sleepy weak faint nervous sad upset lightheaded "
  + "and or the of your").split(" "));
const isFragment = (item: string) => item.toLowerCase().split(/\s+/).every((w) => FRAGMENT_WORDS.has(w.replace(/[^a-z]/g, "")));
/** An item that continues the previous one (a relative clause, a contrast, a frequency word) is not an item. */
const CONTINUES = /^(?:which|that|who|whom|whose|where|when|while|but|so|plus|because|although|rarely|occasionally|very rarely|also)\b/i;
function itemsStandAlone(intro: string, items: string[]): boolean {
  if (items.some((i) => CONTINUES.test(i) || /\b(?:and|or|but)$/i.test(i))) return false;
  // "signs of X such as a, b, c": the later items are examples of the first, not parallel to it.
  if (/\b(?:such as|for example|including)\s+[^()]*$/i.test(items[0])) return false;
  if (/^a combination\b/i.test(items[0]) || items.some((i) => QUALIFIER.test(i))) return false;
  if (/\b(?:such as|include|includes|including)\s*:?$/i.test(intro) && items.some((i) => /\b(?:may|can|could|will|would|should|must)\b/i.test(i))) return false;
  // A short fragment after an item that governs it is part of that item, not a new one.
  for (let i = 1; i < items.length; i++) if (isFragment(items[i]) && items.slice(0, i).some((e) => GOVERNING.test(e))) return false;
  return true;
}
