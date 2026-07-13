import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * PageHeader — top-of-page hero header (NOT the homepage hero).
 *
 * Used by: every secondary page (drug pages, class pages, clinical patterns).
 * Pattern:
 *   <PageHeader eyebrow="SSRI" title="Sertraline" lede="..." />
 *
 * Variants:
 *   - default : left-aligned, padding-y 12
 *   - centered: center-aligned, padding-y 16
 *   - compact : padding-y 8 (for nested / sub-sections)
 */
const pageHeaderVariants = cva("flex flex-col gap-3", {
  variants: {
    variant: {
      default: "py-12 sm:py-16",
      centered: "py-14 sm:py-20 items-center text-center",
      compact: "py-8 sm:py-10",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface PageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageHeaderVariants> {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  actions,
  variant,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div className={cn(pageHeaderVariants({ variant }), className)} {...props}>
      {eyebrow && (
        <p className="text-overline text-brand">{eyebrow}</p>
      )}
      <h1 className="text-h1 text-foreground">{title}</h1>
      {lede && (
        <p
          className={cn(
            "text-body-lg text-muted-foreground leading-relaxed",
            variant === "centered" ? "max-w-2xl" : "max-w-2xl"
          )}
        >
          {lede}
        </p>
      )}
      {actions && <div className="mt-2 flex flex-wrap gap-3">{actions}</div>}
    </div>
  );
}
