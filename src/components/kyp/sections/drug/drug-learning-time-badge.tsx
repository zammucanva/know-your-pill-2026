import { Clock, BookOpen, RefreshCw, Star } from "lucide-react";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug, HighYieldLevel } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * LearningTimeBadge — compact callout showing read/study/revision times
 * + high-yield level. Rendered in the hero area (after Quick Facts).
 *
 * Server Component.
 */
interface LearningTimeBadgeProps {
  drug: Drug;
}

const highYieldConfig: Record<HighYieldLevel, { stars: number; label: string; variant: "neural" | "warning" | "outline" | "default" }> = {
  extreme: { stars: 5, label: "Extremely High Yield — Memorize", variant: "neural" },
  high: { stars: 4, label: "Frequently Asked", variant: "neural" },
  moderate: { stars: 3, label: "Know the concept", variant: "warning" },
  background: { stars: 2, label: "Background knowledge", variant: "outline" },
  rare: { stars: 1, label: "Rare", variant: "default" },
};

export function DrugLearningTimeBadge({ drug }: LearningTimeBadgeProps) {
  const ltb = drug.learningTimeBreakdown;
  const hyl = drug.highYieldLevel;
  if (!ltb && !hyl) return null;

  const hyConfig = hyl ? highYieldConfig[hyl] : null;

  return (
    <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-neural/20 bg-neural-soft/10">
      <CardBody className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Learning times */}
          {ltb && (
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Read</span>
                <span className="text-xs font-semibold text-foreground tabular-nums">{ltb.read}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Study</span>
                <span className="text-xs font-semibold text-foreground tabular-nums">{ltb.study}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Revision</span>
                <span className="text-xs font-semibold text-foreground tabular-nums">{ltb.revision}</span>
              </div>
            </div>
          )}

          {/* High-yield indicator */}
          {hyConfig && (
            <div className="flex items-center gap-2">
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
              <Badge variant={hyConfig.variant} size="sm">{hyConfig.label}</Badge>
            </div>
          )}
        </div>
      </CardBody>
    </CardPrimitive>
  );
}
