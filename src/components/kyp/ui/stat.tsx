import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Stat — KPI display.
 * Renders a large value, a label, and an optional description.
 *
 * Used by: homepage stats, future dashboards, drug page monitoring panels.
 */
const statVariants = cva(
  "rounded-2xl border bg-card p-5 transition-colors",
  {
    variants: {
      variant: {
        default: "border-border/70",
        brand: "border-brand/20 bg-brand-soft/30",
        elevated: "border-border/70 shadow-[var(--shadow-card)]",
      },
      align: {
        left: "text-left",
        center: "text-center",
      },
    },
    defaultVariants: { variant: "default", align: "left" },
  }
);

export interface StatProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statVariants> {
  value: string;
  label: string;
  description?: string;
}

export function Stat({
  value,
  label,
  description,
  variant,
  align,
  className,
  ...props
}: StatProps) {
  return (
    <div className={cn(statVariants({ variant, align }), className)} {...props}>
      <p className="font-sans text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-sm font-semibold">{label}</p>
      {description && (
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
