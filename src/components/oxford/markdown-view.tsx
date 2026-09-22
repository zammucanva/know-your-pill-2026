"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { MdBlock } from "@/lib/oxford/types";
import { parseInline } from "@/lib/oxford/markdown";

/**
 * MarkdownView — renders the note corpus's markdown subset with KYP
 * design tokens. Bold, italics, links, tables, lists, quotes and
 * sub-headings — exactly the structures the canonical notes use.
 *
 * No external markdown dependency: the corpus format is a fixed,
 * validated subset (see src/lib/oxford/markdown.ts).
 */

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

export function MarkdownView({ blocks, className }: { blocks: MdBlock[]; className?: string }) {
  return (
    <div className={cn("space-y-4 text-[15px] leading-relaxed text-muted-foreground", className)}>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "paragraph":
            return (
              <p key={i} className="min-w-0">
                <InlineText text={block.text} />
              </p>
            );
          case "heading":
            return block.level === 3 ? (
              <h4
                key={i}
                className="pt-2 text-[15px] font-semibold tracking-tight text-foreground"
              >
                {block.text}
              </h4>
            ) : (
              <h5 key={i} className="pt-1 text-sm font-semibold text-foreground">
                {block.text}
              </h5>
            );
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
