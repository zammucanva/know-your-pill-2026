import { Table } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug, DrugComparisonTable } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugComparisonTables — head-to-head comparison tables.
 *
 * Renders one or more comparison tables with the primary drug highlighted
 * in the first column. Designed for "Why choose X instead?" decisions.
 *
 * Accessibility:
 *   - Real <table> element with proper <thead>, <tbody>, <th scope>
 *   - Responsive: horizontally scrolls on mobile
 *
 * Server Component.
 */
interface DrugComparisonTablesProps {
  drug: Drug;
}

export function DrugComparisonTables({ drug }: DrugComparisonTablesProps) {
  return (
    <Section id="comparison" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Comparison Tables"
          title="When to choose which."
          description="Side-by-side comparison with related drugs in the same class. Use these tables to make an informed choice — every SSRI has trade-offs."
        />

        <div className="mt-10 space-y-10">
          {drug.comparisonTables.map((table, i) => (
            <ComparisonTable key={i} table={table} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ComparisonTable({ table }: { table: DrugComparisonTable }) {
  const comparisonDrugCount = table.rows[0]?.comparisons.length ?? 0;
  const comparisonDrugs = table.rows[0]?.comparisons.map((c) => c.drug) ?? [];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Table className="h-5 w-5 text-brand" />
        <h3 className="text-h3">{table.title}</h3>
      </div>

      {/* Real semantic table — wraps in overflow-x for mobile */}
      <div className="overflow-x-auto kyp-scroll rounded-xl border border-border/70">
        <table className="w-full border-collapse text-body-sm">
          <thead>
            <tr className="border-b border-border/70 bg-muted/40">
              <th scope="col" className="p-3 text-left text-overline text-muted-foreground">
                Attribute
              </th>
              <th scope="col" className="p-3 text-left text-overline text-brand bg-brand-soft/30">
                {table.primaryDrug}
                <span className="ml-1 text-[0.6rem] font-bold uppercase text-brand">★</span>
              </th>
              {comparisonDrugs.map((d) => (
                <th key={d} scope="col" className="p-3 text-left text-overline text-muted-foreground">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr
                key={row.attribute}
                className={cn(
                  "border-b border-border/50 last:border-b-0",
                  i % 2 === 1 && "bg-muted/20"
                )}
              >
                <th scope="row" className="p-3 text-left font-semibold text-foreground">
                  {row.attribute}
                </th>
                <td className="p-3 font-medium text-foreground bg-brand-soft/20">
                  {row.primaryValue}
                </td>
                {row.comparisons.map((c) => (
                  <td key={c.drug} className="p-3 text-muted-foreground">
                    {c.value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Takeaway */}
      <div className="mt-5">
        <Callout variant="tip" title="When to choose which">
          {table.takeaway}
        </Callout>
      </div>
    </div>
  );
}
