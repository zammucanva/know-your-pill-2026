/** Shared SPL (DailyMed XML) text extraction. Text is captured as published: no rewording. */
export const decode = (s: string) =>
  s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, "&");

export function textOf(xml: string): string {
  return decode(
    xml
      .replace(/<(code|id|effectiveTime|setId|versionNumber)\b[^>]*\/>/g, "")
      .replace(/<title\b[^>]*>/g, "\n")
      .replace(/<\/(paragraph|item|tr|title|caption|list)>/g, "\n")
      .replace(/<br\s*\/?>/g, "\n")
      .replace(/<\/(td|th)>/g, " | ")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/[ \t\r\f\v]+/g, " ")
    .replace(/ ?\n ?/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

export function sections(xml: string): { loinc: string; title: string; body: string }[] {
  const out: { loinc: string; title: string; body: string }[] = [];
  const tok = /<section\b[^>]*>|<\/section>/g;
  const stack: { start: number; contentStart: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = tok.exec(xml))) {
    if (m[0].startsWith("</")) {
      const s = stack.pop();
      if (!s) continue;
      const inner = xml.slice(s.contentStart, m.index);
      const code = /<code\b[^>]*\bcode="([^"]+)"/.exec(inner);
      const title = /<title\b[^>]*>([\s\S]*?)<\/title>/.exec(inner);
      if (code) out.push({ loinc: code[1], title: title ? textOf(title[1]) : "", body: inner });
    } else stack.push({ start: m.index, contentStart: m.index + m[0].length });
  }
  return out;
}

