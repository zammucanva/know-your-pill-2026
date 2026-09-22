/**
 * Minimal YAML front-matter parser for the note corpus.
 *
 * Supports exactly the subset the notes use (see template.md):
 *   key: "value"
 *   key: value
 *   key: ["a", "b", "c"]
 *
 * No anchors, no nesting, no multi-line scalars — deliberately tiny so the
 * loader has zero dependencies and the lockfile is untouched.
 */
import type { Audience, NoteFrontMatter, Priority } from "./types";

const AUDIENCES: Audience[] = [
  "patients & families",
  "medical students",
  "residents & clinicians",
];

export function parseFrontMatter(raw: string): {
  fm: Partial<NoteFrontMatter>;
  body: string;
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { fm: {}, body: raw };

  const fm: Record<string, string | string[]> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z_][\w]*)\s*:\s*(.*)$/.exec(line);
    if (!kv) continue;
    const key = kv[1];
    let value = kv[2].trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      fm[key] = [...value.matchAll(/"([^"]*)"/g)].map((m) => m[1]);
    } else {
      // Strip surrounding quotes and trailing # comments (not inside quotes).
      value = value.replace(/^"(.*)"$/, "$1").replace(/\s+#\s*.*$/, "");
      if (key === "priority") {
        // priority: P1  # P1 core | P2 supporting | P3 optional
        const p = /^(P[123])/.exec(value);
        if (p) value = p[1];
      }
      fm[key] = value;
    }
  }

  return { fm: fm as Partial<NoteFrontMatter>, body: raw.slice(match[0].length) };
}

/** Validate + normalise front matter into the typed contract. */
export function normaliseFrontMatter(
  fm: Partial<NoteFrontMatter>,
  fileSlug: string
): NoteFrontMatter {
  const audiences = Array.isArray(fm.audiences)
    ? (fm.audiences.filter((a): a is Audience => AUDIENCES.includes(a as Audience)))
    : [];
  const priority =
    fm.priority === "P1" || fm.priority === "P2" || fm.priority === "P3"
      ? (fm.priority as Priority)
      : "P2";
  return {
    title: (fm.title ?? "").trim(),
    slug: (fm.slug ?? fileSlug).trim(),
    category: (fm.category ?? "").trim(),
    source_map: (fm.source_map ?? "").trim(),
    audiences: audiences.length ? audiences : ["medical students"],
    priority,
    last_reviewed: (fm.last_reviewed ?? "").trim(),
    reading_time: fm.reading_time,
  };
}
