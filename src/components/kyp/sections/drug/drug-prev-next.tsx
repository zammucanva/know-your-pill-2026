import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Badge } from "@/components/kyp/ui/badge";
import { drugs } from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugPrevNext — bottom-of-page navigation to the previous/next drug.
 *
 * Helps learners move through the curriculum sequentially
 * (e.g. Sertraline → Fluoxetine → Escitalopram → Paroxetine).
 *
 * Server Component.
 */
interface DrugPrevNextProps {
  currentSlug: string;
}

export function DrugPrevNext({ currentSlug }: DrugPrevNextProps) {
  const idx = drugs.findIndex((d) => d.slug === currentSlug);
  if (idx === -1) return null;

  const prev = idx > 0 ? drugs[idx - 1] : null;
  const next = idx < drugs.length - 1 ? drugs[idx + 1] : null;

  if (!prev && !next) return null;

  return (
    <Section spacing="tight">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2">
          {prev ? <PrevNextCard drug={prev} direction="prev" /> : <div className="hidden sm:block" />}
          {next ? <PrevNextCard drug={next} direction="next" /> : <div className="hidden sm:block" />}
        </div>
      </Container>
    </Section>
  );
}

function PrevNextCard({ drug, direction }: { drug: Drug; direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/drugs/${drug.slug}`}
      className={cn(
        "group flex items-center gap-3 rounded-xl border border-border/70 bg-card p-4 transition-all hover:border-brand/40 hover:shadow-[var(--shadow-card)]",
        isNext && "sm:flex-row-reverse sm:text-right"
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft/60 text-brand">
        {isNext ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
          {isNext ? "Next drug" : "Previous drug"}
        </p>
        <p className="mt-0.5 text-sm font-medium text-foreground truncate">{drug.genericName}</p>
        <p className="text-xs text-muted-foreground truncate">{drug.drugClassLabel}</p>
      </div>
    </Link>
  );
}
