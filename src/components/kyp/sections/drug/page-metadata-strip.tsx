import { Clock, Calendar, CheckCircle2, Globe, BookMarked } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * PageMetadataStrip — minimal professional metadata footer.
 *
 * Renders at the very end of every drug page (after references, before emergency):
 *   - Difficulty: MBBS · NEET PG · INICET
 *   - Read time
 *   - Last updated
 *   - Reviewed by
 *   - Evidence level: Indian + International
 *
 * Small, minimal, very professional. Builds trust.
 *
 * Server Component.
 */
interface PageMetadataStripProps {
  drug: Drug;
}

const difficultyLabels: { key: string; label: string }[] = [
  { key: "mbbs", label: "MBBS" },
  { key: "neetPg", label: "NEET PG" },
  { key: "inicet", label: "INICET" },
  { key: "fmge", label: "FMGE" },
];

export function PageMetadataStrip({ drug }: PageMetadataStripProps) {
  const lastReviewed = new Date(drug.lastReviewed).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  // Determine which exam levels this drug is relevant for
  const relevantExams = drug.examFrequency
    ? difficultyLabels.filter((d) => {
        const freq = drug.examFrequency![d.key as keyof typeof drug.examFrequency];
        return freq && freq >= 3;
      })
    : difficultyLabels.filter((d) => d.key !== "fmge");

  return (
    <Container className="py-6">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/40 pt-4 text-xs text-muted-foreground">
        {/* Difficulty levels */}
        <div className="flex items-center gap-1.5">
          <BookMarked className="h-3 w-3" />
          <span>Difficulty:</span>
          <span className="font-medium text-foreground">
            {relevantExams.map((e) => e.label).join(" · ")}
          </span>
        </div>

        {/* Read time */}
        {drug.learningTimeBreakdown && (
          <div className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            <span className="font-medium text-foreground">{drug.learningTimeBreakdown.read}</span>
            <span>read</span>
          </div>
        )}

        {/* Last updated */}
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3" />
          <span>Last updated</span>
          <span className="font-medium text-foreground">{lastReviewed}</span>
        </div>

        {/* Reviewed by */}
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3 w-3" />
          <span>Reviewed by</span>
          <span className="font-medium text-foreground">KYP Editorial Board</span>
        </div>

        {/* Evidence level */}
        <div className="flex items-center gap-1.5">
          <Globe className="h-3 w-3" />
          <span>Evidence:</span>
          <span className="font-medium text-foreground">Indian + International</span>
        </div>
      </div>
    </Container>
  );
}
