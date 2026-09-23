"use client";

import * as React from "react";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MdBlock } from "@/lib/oxford/types";
import { parseInline } from "@/lib/oxford/markdown";

/**
 * MarkdownView — renders the note corpus's markdown subset with KYP
 * design tokens. Bold, italics, links, tables, lists, quotes and
 * sub-headings — exactly the structures the canonical notes use.
 *
 * The lesson polish adds two dedicated clinical-case treatments on top
 * of the plain structures (the note text itself is never rewritten):
 *   - Case openers: `**Case N: title** body` paragraphs and `### Case N:
 *     title` headings render with a case eyebrow + serif title.
 *   - Teaching points: `*Teaching points: ...*` paragraphs render as a
 *     bordered teaching callout.
 *
 * No external markdown dependency: the corpus format is a fixed,
 * validated subset (see src/lib/oxford/markdown.ts).
 */

/* ─── Case / teaching-point matchers (fixed corpus subset) ─────────── */

/** `**Case 1: the title** rest of the paragraph` → structured opener. */
function caseIntroMatch(text: string): { label: string; title: string; body: string } | null {
  const m = text.match(/^\*\*(Case\s+\d+)\s*[::]\s*(.*?)\*\*([\s\S]*)$/);
  if (!m) return null;
  return { label: m[1], title: m[2].trim(), body: m[3].trim() };
}

/** `### Case 1: the title` heading text → structured case heading. */
function caseHeadingMatch(text: string): { label: string; title: string } | null {
  const m = text.match(/^(Case\s+\d+)\s*[::]\s*(.*)$/i);
  if (!m) return null;
  return { label: m[1], title: m[2].trim() };
}

/** `*Teaching points: ...*` / `**Teaching points:** ...` → callout body. */
function teachingPointsMatch(text: string): string | null {
  const m = text.match(/^[*_]{1,2}\s*Teaching points?\s*[::]\s*/i);
  if (!m) return null;
  let rest = text.slice(m[0].length);
  // The corpus wraps the whole remark in emphasis — strip the closing
  // marker so the callout can apply its own (non-italic) typography.
  rest = rest.replace(/[*_]+\s*$/, "");
  return rest;
}

/* ─── Clinical case treatments ─────────────────────────────────────── */

function CaseIntro({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <figure className="my-6 rounded-xl border border-brand/25 bg-brand/[0.03] p-5">
      <figcaption className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
          {label}
        </span>
        {title && (
          <span className="font-serif text-[17px] font-semibold leading-snug tracking-tight text-foreground">
            {title}
          </span>
        )}
      </figcaption>
      {body && (
        <div className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">
          <InlineText text={body} />
        </div>
      )}
    </figure>
  );
}

function CaseHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mt-7 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 border-b border-brand/20 pb-2.5">
      <span className="rounded-md bg-brand/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
        {label}
      </span>
      {title && (
        <span className="font-serif text-[17px] font-semibold leading-snug tracking-tight text-foreground">
          {title}
        </span>
      )}
    </div>
  );
}

function TeachingPoints({ text }: { text: string }) {
  return (
    <aside className="my-5 rounded-lg border-l-2 border-brand/50 bg-brand/[0.04] px-4 py-3">
      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
        <Lightbulb className="h-3.5 w-3.5" aria-hidden /> Teaching points
      </p>
      <p className="mt-1.5 text-sm leading-[1.7] text-foreground/80">
        <InlineText text={text} />
      </p>
    </aside>
  );
}

/* ─── Inline renderer ──────────────────────────────────────────────── */

export function InlineText({ text, as: Tag = "span" }: { text: string; as?: "span" | "div" }) {
  const segments = React.useMemo(() => parseInline(text), [text]);
  return (
    <Tag>
      {segments.map((seg, i) => {
        if ("link" in seg) {
          return (
            <a
              key={i}
              href={seg.link.href}
              className="font-medium text-brand underline decoration-brand/30 underline-offset-2 hover:decoration-brand"
              target={seg.link.href.startsWith("http") ? "_blank" : undefined}
              rel={seg.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {seg.link.label}
            </a>
          );
        }
        return (
          <span
            key={i}
            className={cn(
              seg.bold && "font-semibold text-foreground",
              seg.italic && "italic"
            )}
          >
            {seg.text}
          </span>
        );
      })}
    </Tag>
  );
}

/* ─── Block renderer ───────────────────────────────────────────────── */

export function MarkdownView({ blocks, className }: { blocks: MdBlock[]; className?: string }) {
  return (
    <div className={cn("space-y-4 text-[15px] leading-[1.7] text-muted-foreground", className)}>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "paragraph": {
            const caseIntro = caseIntroMatch(block.text);
            if (caseIntro) {
              return <CaseIntro key={i} {...caseIntro} />;
            }
            const teaching = teachingPointsMatch(block.text);
            if (teaching !== null) {
              return <TeachingPoints key={i} text={teaching} />;
            }
            return (
              <p key={i} className="min-w-0">
                <InlineText text={block.text} />
              </p>
            );
          }
          case "heading": {
            const caseHeading = caseHeadingMatch(block.text);
            if (caseHeading) {
              return <CaseHeading key={i} {...caseHeading} />;
            }
            return block.level === 3 ? (
              <h4
                key={i}
                className="pt-2 text-[17px] font-semibold tracking-tight text-foreground"
              >
                {block.text}
              </h4>
            ) : (
              <h5 key={i} className="pt-1 text-sm font-semibold text-foreground">
                {block.text}
              </h5>
            );
          }
          case "list":
            return block.ordered ? (
              <ol key={i} className="ml-4 list-decimal space-y-1.5 marker:text-brand/70">
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="ml-4 list-disc space-y-1.5 marker:text-brand/70">
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-brand/40 pl-4 italic text-foreground/80"
              >
                <InlineText text={block.text} />
              </blockquote>
            );
          case "table":
            return (
              <div key={i} className="-mx-2 overflow-x-auto px-2 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      {block.columns.map((c, j) => (
                        <th
                          key={j}
                          className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-foreground/70"
                        >
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-b border-border/60 align-top">
                        {row.map((cell, k) => (
                          <td key={k} className="px-3 py-2">
                            <InlineText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
