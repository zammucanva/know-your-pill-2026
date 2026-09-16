"use client";

import * as React from "react";
import type { NavItem } from "@/lib/kyp/use-scroll-spy";
import {
  markSectionComplete,
  recordCourseVisit,
  setCurrentSection,
  syncCourseCompletion,
  getCourseProgress,
} from "@/lib/kyp/progress/progress-store";

/**
 * SectionReadTracker — invisible client component that turns genuine
 * reading into persisted progress. It is the memory layer of the
 * medication course pages; it renders NOTHING.
 *
 * What it does (all client-side, post-hydration):
 *   1. On mount, records the course visit (visit count, last-visited
 *      pointers, recent activity). Never touches section completion.
 *   2. Runs the same scrollspy geometry as the visible section
 *      navigator, so "the section you are reading" means the same
 *      thing everywhere on the page.
 *   3. Accumulates dwell time per section while it is the active
 *      section. After DWELL_MS of cumulative active reading a section
 *      is marked complete — a fast skim past the bottom never counts,
 *      and simply opening the page never counts.
 *   4. Persists the learner's current position (section id + label)
 *      so the resume affordance and Study Mode can continue exactly
 *      where they left off.
 *   5. After any completion change, re-evaluates course completion
 *      against the full outline (all sections required).
 *
 * Honesty rules (from the product audit):
 *   - no completion on page load
 *   - no completion for scrolling past without reading
 *   - progress counts only reflect genuinely read sections
 */

/** Cumulative active-reading time before a section counts as read. */
const DWELL_MS = 2000;
/** Dwell sampling resolution. */
const TICK_MS = 500;

interface SectionReadTrackerProps {
  drugSlug: string;
  title: string;
  items: NavItem[];
  /** Scrollspy offset — must match the visible navigator (120px). */
  offset?: number;
}

export function SectionReadTracker({
  drugSlug,
  title,
  items,
  offset = 120,
}: SectionReadTrackerProps) {
  const outlineIds = React.useMemo(() => items.map((i) => i.id), [items]);
  const labelsById = React.useMemo(() => {
    const map = new Map<string, string>();
    for (const item of items) map.set(item.id, item.label);
    return map;
  }, [items]);

  // ── 1. Record the visit (once per mount) ───────────────────────
  React.useEffect(() => {
    recordCourseVisit(drugSlug, title);
  }, [drugSlug, title]);

  // ── 2–5. Scrollspy + dwell + current section + completion ─────
  React.useEffect(() => {
    if (outlineIds.length === 0) return;

    let activeId = "";
    let activeSince = Date.now();
    // Cumulative dwell per section, this session only.
    const dwell = new Map<string, number>();

    const labelFor = (id: string) => labelsById.get(id) ?? id;

    const completeSection = (id: string) => {
      const before = getCourseProgress(drugSlug);
      if (!before || !before.completedSections.includes(id)) {
        markSectionComplete(drugSlug, id);
        syncCourseCompletion(drugSlug, outlineIds);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length === 0) return;
        const nextId = visible[0].target.id;
        if (nextId === activeId) return;

        // Bank the dwell earned by the outgoing section.
        if (activeId) {
          const banked = (dwell.get(activeId) ?? 0) + (Date.now() - activeSince);
          dwell.set(activeId, banked);
          if (banked >= DWELL_MS) completeSection(activeId);
        }

        activeId = nextId;
        activeSince = Date.now();

        // Persist where the learner currently is.
        setCurrentSection(drugSlug, nextId, labelFor(nextId));
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 }
    );

    const missing: string[] = [];
    for (const id of outlineIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
      else missing.push(id);
    }
    // The outline must exist on the page — a mismatch would silently
    // cap progress below 100%, so log it loudly in development.
    if (missing.length > 0 && process.env.NODE_ENV === "development") {
      console.warn(
        `[SectionReadTracker] sections missing from the DOM for "${drugSlug}":`,
        missing.join(", ")
      );
    }

    // Dwell sampler — banks time for the section that is still active
    // while the learner reads without the observer firing again.
    const ticker = window.setInterval(() => {
      if (!activeId) return;
      const banked = (dwell.get(activeId) ?? 0) + (Date.now() - activeSince);
      activeSince = Date.now();
      dwell.set(activeId, banked);
      if (banked >= DWELL_MS) completeSection(activeId);
    }, TICK_MS);

    // Bank the final section's dwell if the learner leaves while
    // reading it.
    const flush = () => {
      if (!activeId) return;
      const banked = (dwell.get(activeId) ?? 0) + (Date.now() - activeSince);
      activeSince = Date.now();
      dwell.set(activeId, banked);
      if (banked >= DWELL_MS) completeSection(activeId);
    };
    window.addEventListener("pagehide", flush);

    return () => {
      flush();
      window.clearInterval(ticker);
      window.removeEventListener("pagehide", flush);
      observer.disconnect();
    };
  }, [drugSlug, outlineIds, labelsById, offset]);

  return null;
}
