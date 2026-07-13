import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Section — consistent vertical rhythm wrapper.
 *
 * Use around every top-level section on a page so spacing is uniform.
 * Combines with <Container /> for horizontal padding.
 *
 * Variants:
 *   - default : py-20 sm:py-24
 *   - tight   : py-12 sm:py-16
 *   - relaxed : py-24 sm:py-32
 *   - flush   : py-0 (when section has its own internal spacing)
 */
const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      default: "py-20 sm:py-24",
      tight: "py-12 sm:py-16",
      relaxed: "py-24 sm:py-32",
      flush: "py-0",
    },
  },
  defaultVariants: { spacing: "default" },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
}

export function Section({ spacing, as: Component = "section", className, ...props }: SectionProps) {
  return <Component className={cn(sectionVariants({ spacing }), className)} {...props} />;
}
