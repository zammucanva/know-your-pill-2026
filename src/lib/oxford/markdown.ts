/**
 * Markdown block parser for the note corpus.
 *
 * Parses the markdown SUBSET the notes use into typed blocks:
 *   - pipe tables (| a | b |)
 *   - ordered / unordered lists (1. / -)
 *   - blockquotes (>)
 *   - ### / #### sub-headings inside sections
 *   - paragraphs (everything else, including bold/italic inline markup
 *     which the renderer resolves)
 *
 * Deliberately no external markdown dependency — the lockfile stays frozen
 * and the renderer stays fully styled by KYP design tokens.
 */
import type { MdBlock, MdTable, MdList, MdHeading, MdParagraph, MdQuote } from "./types";

export function parseBlocks(sectionBody: string): MdBlock[] {
  const lines = sectionBody.split(/\r?\n/);
  const blocks: MdBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // blank
    if (!line.trim()) {
      i++;
      continue;
    }

    // table
    if (line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const table = parseTable(tableLines);
      if (table) {
        blocks.push(table);
        continue;
      }
    }

    // list (ordered or bullet)
    if (/^\s*(\d+\.|[-*])\s+/.test(line)) {
      const ordered = /^\s*\d+\./.test(line);
      const items: string[] = [];
      while (i < lines.length && /^\s*(\d+\.|[-*])\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*(\d+\.|[-*])\s+/, ""));
        i++;
      }
      const list: MdList = { kind: "list", ordered, items };
      blocks.push(list);
      continue;
    }

    // blockquote
    if (line.trim().startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].replace(/^\s*>\s?/, ""));
        i++;
      }
      const quote: MdQuote = { kind: "quote", text: quoteLines.join(" ").trim() };
      blocks.push(quote);
      continue;
    }

    // sub-heading
    const heading = /^(#{3,4})\s+(.*)$/.exec(line);
    if (heading) {
      const h: MdHeading = {
        kind: "heading",
        level: heading[1].length === 3 ? 3 : 4,
        text: heading[2].trim(),
      };
      blocks.push(h);
      i++;
      continue;
    }

    // paragraph — consecutive non-special lines joined. A line that
    // STARTS with a bold lead-in (**Q** / **Tagline:** style) begins a
    // new paragraph so bold-led structures (FAQ Q&A, MCQ stems) stay
    // separate blocks.
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("|") &&
      !/^\s*(\d+\.|[-*])\s+/.test(lines[i]) &&
      !lines[i].trim().startsWith(">") &&
      !/^#{3,4}\s+/.test(lines[i]) &&
      !/^##\s/.test(lines[i])
    ) {
      if (paraLines.length > 0 && /^\*\*[^*]+\*\*/.test(lines[i].trim())) {
        break; // bold lead-in line starts a new block
      }
      paraLines.push(lines[i].trim());
      i++;
    }
    if (paraLines.length) {
      const p: MdParagraph = { kind: "paragraph", text: paraLines.join(" ") };
      blocks.push(p);
    }
  }

  return blocks;
}

function parseTable(tableLines: string[]): MdTable | null {
  const cells = (row: string) =>
    row
      .replace(/^\s*\|/, "")
      .replace(/\|\s*$/, "")
      .split("|")
      .map((c) => c.trim());

  if (tableLines.length < 2) return null;
  const columns = cells(tableLines[0]);
  const separator = tableLines[1];
  // separator row like |---|---|
  if (!/^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(separator) || !/-/.test(separator)) {
    // Not a real table (missing separator) — treat as paragraphs upstream.
    return null;
  }
  const rows: string[][] = [];
  for (let r = 2; r < tableLines.length; r++) {
    const row = cells(tableLines[r]);
    if (row.length === columns.length) rows.push(row);
    else if (row.length > 0) rows.push([...row, ...Array(columns.length - row.length).fill("")]);
  }
  return { kind: "table", columns, rows };
}

/* ─── Inline markup (used by the React renderer) ────────────────────── */

export type InlineSegment =
  | { text: string; bold?: boolean; italic?: boolean }
  | { link: { label: string; href: string }; text: string };

/**
 * Split an inline-marked string into segments. Handles **bold**,
 * *italic* (single asterisk only), and [label](href) links. Bold spans
 * may contain italics and vice versa; unmatched markers stay literal.
 */
export function parseInline(text: string): InlineSegment[] {
  // Tokenise with a combined regex; walk the token list building segments.
  const tokens: Array<{ type: "b" | "i" | "l" | "t"; value: string }> = [];
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) tokens.push({ type: "t", value: text.slice(last, m.index) });
    if (m[1] !== undefined) tokens.push({ type: "b", value: m[1] });
    else if (m[2] !== undefined) tokens.push({ type: "i", value: m[2] });
    else if (m[3] !== undefined) tokens.push({ type: "l", value: m[3] + "\u0000" + m[4] });
    last = m.index + m[0].length;
  }
  if (last < text.length) tokens.push({ type: "t", value: text.slice(last) });

  const segments: InlineSegment[] = [];
  for (const t of tokens) {
    if (t.type === "t") segments.push({ text: t.value });
    else if (t.type === "b") segments.push({ text: t.value, bold: true });
    else if (t.type === "i") segments.push({ text: t.value, italic: true });
    else {
      const [label, href] = t.value.split("\u0000");
      segments.push({ link: { label, href }, text: label });
    }
  }
  return segments;
}

/** Strip inline markup to plain text (used for taglines/summaries). */
export function inlineToPlain(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}
