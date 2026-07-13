"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { EmergencyContact } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * EmergencyAlert — inline alert variant for actual crisis contact info.
 * Distinct from <Callout variant="danger" /> which is for non-emergency danger.
 *
 * Renders a pulsing red section with contact cards inside.
 * Used by: every page footer / emergency section.
 */
interface EmergencyAlertProps {
  title?: string;
  description?: string;
  contacts: EmergencyContact[];
  className?: string;
}

export function EmergencyAlert({
  title = "In a crisis right now?",
  description = "If you or someone near you is in immediate danger — overdose, suicidal thoughts, severe withdrawal, or unresponsiveness — call now. These lines are free, confidential, and staffed by trained professionals.",
  contacts,
  className,
}: EmergencyAlertProps) {
  return (
    <CardPrimitive
      variant="featured"
      interactive={false}
      className={cn("border-emergency/30 bg-gradient-to-br from-emergency-soft/60 via-card to-card", className)}
    >
      {/* Decorative pulse */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emergency/15 blur-3xl" />

      <CardBody className="relative p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left: copy */}
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75 kyp-pulse-dot" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emergency" />
              </span>
              <p className="text-overline text-emergency">Emergency · Available 24/7</p>
            </div>

            <h2 className="mt-4 text-h1 text-foreground">{title}</h2>
            <p className="mt-3 max-w-lg text-body-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-emergency/20 bg-background/60 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-emergency" />
              <p className="text-body-sm text-muted-foreground">
                <strong className="text-foreground">This website is educational only.</strong>{" "}
                It does not replace a doctor, pharmacist, emergency service, or local medical
                guideline. When in doubt, always call.
              </p>
            </div>
          </div>

          {/* Right: contact cards */}
          <div className="grid gap-3">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-emergency/20 bg-card p-4 transition-all hover:border-emergency/40 hover:shadow-[var(--shadow-emergency)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emergency/10 text-emergency">
                    <Phone className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{c.label}</p>
                    <p className="text-xs text-muted-foreground">{c.description}</p>
                  </div>
                </div>
                <span className="font-mono text-lg font-bold text-emergency">{c.number}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </CardBody>
    </CardPrimitive>
  );
}
