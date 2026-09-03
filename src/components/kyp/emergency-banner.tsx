"use client";

import { motion } from "framer-motion";
import { Phone, AlertTriangle, ExternalLink } from "lucide-react";
import { emergencyContacts } from "@/lib/kyp/data";

export function EmergencyBanner() {
  return (
    <section id="emergency" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-emergency/30 bg-gradient-to-br from-emergency-soft/60 via-card to-card p-8 sm:p-10"
        >
          {/* Decorative pulse */}
<div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            {/* Left: copy */}
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-md bg-emergency opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emergency" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emergency">
                  Emergency · Available 24/7
                </p>
              </div>

              <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
                In a crisis right now?
              </h2>
              <p className="mt-3 max-w-lg text-base text-muted-foreground">
                If you or someone near you is in immediate danger — overdose, suicidal thoughts,
                severe withdrawal, or unresponsiveness — call now. These lines are free,
                confidential, and staffed by trained professionals.
              </p>

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-emergency/20 bg-background/60 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-emergency" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">This website is educational only.</strong>{" "}
                  It does not replace a doctor, pharmacist, emergency service, or local medical
                  guideline. When in doubt, always call.
                </p>
              </div>
            </div>

            {/* Right: contact cards */}
            <div className="grid gap-3">
              {emergencyContacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={`tel:${c.number.replace(/[^0-9+]/g, "")}`}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-emergency/20 bg-card p-4 transition-all hover:border-emergency/40 hover:shadow-md hover:shadow-card/5"
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
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-lg font-bold text-emergency">{c.number}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
