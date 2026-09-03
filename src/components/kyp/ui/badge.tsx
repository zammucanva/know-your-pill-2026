import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge — the canonical pill-shaped label.
 * Use for status, classification, and short categorical labels.
 *
 * Variants:
 *   - default  : neutral
 *   - brand    : teal-tinted
 *   - neural   : violet-tinted (neuroscience)
 *   - emergency: coral (alert)
 *   - warning  : amber (caution)
 *   - success  : green (positive)
 *   - outline  : bordered, transparent background
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md font-medium transition-colors kyp-focus-ring",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground",
        brand: "bg-brand-soft text-brand-ink",
        neural: "bg-neural-soft text-neural",
        emergency: "bg-emergency-soft text-emergency",
        warning: "bg-warning-soft text-warning",
        success: "bg-success-soft text-success",
        outline: "border border-border bg-transparent text-foreground/80",
      },
      size: {
        sm: "px-2 py-0.5 text-[0.65rem]",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}
