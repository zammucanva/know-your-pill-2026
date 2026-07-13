import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * SectionHeader — recurring section opener.
 *
 * Pattern:
 *   <SectionHeader
 *     eyebrow="Medication Library"
 *     title="Explore Medications"
 *     description="..."
 *     align="between"  // or "start" | "center"
 *     action={<Button>View all</Button>}
 *   />
 *
 * Variants:
 *   - start    : eyebrow + title + description stacked left
 *   - center   : all centered (for hero sub-sections)
 *   - between  : left text + right action (responsive stack on mobile)
 */
const sectionHeaderVariants = cva("flex flex-col gap-3", {
  variants: {
    align: {
      start: "items-start text-left",
      center: "items-center text-center",
      between: "sm:flex-row sm:items-end sm:justify-between sm:gap-6",
    },
  },
  defaultVariants: { align: "start" },
});

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeaderVariants> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  /** Tone of the eyebrow text — defaults to brand teal */
  tone?: "brand" | "neural" | "emergency";
}

const toneClass = {
  brand: "text-brand",
  neural: "text-neural",
  emergency: "text-emergency",
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "start",
  tone = "brand",
  className,
  ...props
}: SectionHeaderProps) {
  const textWrapClass = align === "between" ? "max-w-2xl" : align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl";

  return (
    <div className={cn(sectionHeaderVariants({ align }), className)} {...props}>
      <div className={textWrapClass}>
        {eyebrow && <p className={cn("text-overline", toneClass[tone])}>{eyebrow}</p>}
        <h2 className="mt-2 text-h2 text-foreground">{title}</h2>
        {description && (
          <p
            className={cn(
              "mt-3 text-body-lg text-muted-foreground leading-relaxed",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
