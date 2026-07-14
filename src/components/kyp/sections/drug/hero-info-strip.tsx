import { Clock, BookOpen, RefreshCw, Star, BookMarked } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug, HighYieldLevel } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * HeroInfoStrip — compact horizontal information strip that merges:
 *   - Learning time breakdown (read / study / revision)
 *   - High-yield level (5-star indicator)
 *   - CBME mapping (subject + year)
 *
 * Replaces the separate LearningTimeBadge + CBMEMapping sections.
 * Uses typography and spacing instead of cards/borders.
 *
 * Server Component.
 */
interface HeroInfoStripProps {
  drug: Drug;
}

const highYieldConfig: Record<HighYieldLevel, { stars: number; label: string }> = {
  extreme: { stars: 5, label: "Extremely High Yield" },
  high: { stars: 4, label: "High Yield" },
  moderate: { stars: 3, label: "Moderate Yield" },
  background: { stars: 2, label: "Background" },
  rare: { stars: 1, label: "Rare" },
};

export function HeroInfoStrip({ drug }: HeroInfoStripProps) {
  const ltb = drug.learningTimeBreakdown;
  const hyl = drug.highYieldLevel;
  const cbme = drug.cbmeMapping;

  if (!ltb && !hyl && !cbme) return null;

  const hyConfig = hyl ? highYieldConfig[hyl] : null;

  return (
    <Container className="py-3">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
        {/* Learning times */}
        {ltb && (
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span className="font-medium text-foreground tabular-nums">{ltb.read}</span> read
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <BookOpen className="h-3 w-3" />
              <span className="font-medium text-foreground tabular-nums">{ltb.study}</span> study
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <RefreshCw className="h-3 w-3" />
              <span className="font-medium text-foreground tabular-nums">{ltb.revision}</span> revision
            </span>
          </div>
        )}

        {/* Divider */}
        {(ltb || hyConfig) && cbme && (
          <span className="h-3 w-px bg-border" aria-hidden />
        )}

        {/* High-yield indicator */}
        {hyConfig && (
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3",
                    i < hyConfig.stars ? "fill-neural text-neural" : "text-muted-foreground/30"
                  )}
                />
              ))}
            </div>
            <span className="font-medium text-neural">{hyConfig.label}</span>
          </div>
        )}

        {/* Divider */}
        {hyConfig && cbme && (
          <span className="h-3 w-px bg-border" aria-hidden />
        )}

        {/* CBME mapping */}
        {cbme && (
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <BookMarked className="h-3 w-3" />
            <span className="font-medium text-foreground">{cbme.subject}</span>
            <span>·</span>
            <span>{cbme.mbbsYear}</span>
          </div>
        )}
      </div>
    </Container>
  );
}
