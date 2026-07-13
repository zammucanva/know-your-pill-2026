"use client";

import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * LearningPath — breadcrumb showing where this drug sits in the curriculum.
 *
 * Example: Psychiatry → Antidepressants → SSRIs → Sertraline
 *
 * Helps learners understand the hierarchy and "what's next" after this page.
 *
 * Client Component — uses scroll behaviour (no state needed, but kept client
 * for future interactivity like "next: Fluoxetine" CTA).
 */
interface LearningPathProps {
  path: string[];
  className?: string;
}

export function LearningPath({ path, className }: LearningPathProps) {
  if (path.length === 0) return null;

  return (
    <nav aria-label="Learning path" className={cn("flex flex-wrap items-center gap-1.5 text-caption", className)}>
      <a
        href="/"
        className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-brand"
      >
        <Home className="h-3 w-3" />
        <span className="sr-only">Home</span>
      </a>
      {path.map((segment, i) => {
        const isLast = i === path.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-muted-foreground/60" aria-hidden />
            {isLast ? (
              <span className="font-semibold text-foreground">{segment}</span>
            ) : (
              <span className="text-muted-foreground">{segment}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
