"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * LearningPath — breadcrumb showing where this page sits in the curriculum.
 *
 * Example: Psychiatry → Antidepressants → SSRIs → Sertraline
 *
 * Helps learners understand the hierarchy and "what's next" after this page.
 *
 * Segments render as plain text by default. Pass `links` (same length as
 * `path`) to make individual segments navigable — a segment renders as a
 * next/link <Link> when its entry is a string. Internal navigation MUST go
 * through next/link (never a plain <a href="/…">) so hrefs get the GitHub
 * Pages basePath prepended automatically; a raw anchor would resolve to the
 * root domain and break on Pages. The Home icon follows the same rule.
 *
 * Client Component — kept client-side for future interactivity (e.g. a
 * "next: Fluoxetine" CTA); the component itself holds no state.
 */
interface LearningPathProps {
  path: string[];
  /** Optional href per segment (same length as `path`); undefined = plain text. */
  links?: Array<string | undefined>;
  className?: string;
}

export function LearningPath({ path, links, className }: LearningPathProps) {
  if (path.length === 0) return null;

  return (
    <nav aria-label="Learning path" className={cn("flex flex-wrap items-center gap-1.5 text-caption", className)}>
      <Link
        href="/"
        className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-brand"
      >
        <Home className="h-3 w-3" />
        <span className="sr-only">Home</span>
      </Link>
      {path.map((segment, i) => {
        const isLast = i === path.length - 1;
        const href = links?.[i];
        return (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-muted-foreground/60" aria-hidden />
            {isLast || !href ? (
              <span className={isLast ? "font-semibold text-foreground" : "text-muted-foreground"}>
                {segment}
              </span>
            ) : (
              <Link
                href={href}
                className="text-muted-foreground underline-offset-2 transition-colors hover:text-brand hover:underline"
              >
                {segment}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
