import { describe, it, expect } from "bun:test";
import { systems, getSystemById } from "@/lib/anatomy/systems";
import type { SystemId } from "@/lib/anatomy/types";

/**
 * Registry integrity tests for the 15 BodyParts3D anatomical systems.
 * These ids must match the `system` field of every atlas part, so the
 * SystemsPanel can toggle visibility on the real model.
 */

const VALID_SYSTEM_IDS: SystemId[] = [
  "skeletal",
  "muscular",
  "nervous",
  "cardiac",
  "sensory",
  "arterial",
  "venous",
  "respiratory",
  "digestive",
  "endocrine",
  "urinary",
  "reproductive",
  "lymphatic",
  "integumentary",
  "connective",
];

describe("systems — registry integrity", () => {
  it("defines exactly 15 anatomical systems", () => {
    expect(systems).toHaveLength(15);
  });

  it("has unique ids", () => {
    const ids = systems.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every id is a valid SystemId union member", () => {
    for (const s of systems) {
      // Compile-time pin: `s.id` is typed SystemId by the source module; the
      // runtime check below guards against union/registry drift.
      const id: SystemId = s.id;
      expect(VALID_SYSTEM_IDS, `system id "${id}"`).toContain(id);
    }
  });

  it("covers every SystemId union member (no orphan union ids)", () => {
    const ids = new Set(systems.map((s) => s.id));
    for (const valid of VALID_SYSTEM_IDS) {
      expect(ids.has(valid), `union member "${valid}" has no registry entry`).toBe(true);
    }
  });

  it("names and descriptions are non-empty", () => {
    for (const s of systems) {
      expect(s.name.trim().length, `${s.id}.name`).toBeGreaterThan(0);
      expect(s.description.trim().length, `${s.id}.description`).toBeGreaterThan(0);
    }
  });

  it("colors are valid #rrggbb hex strings", () => {
    for (const s of systems) {
      expect(s.color, `${s.id}.color = "${s.color}"`).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });

  it("icon names are non-empty strings", () => {
    for (const s of systems) {
      expect(typeof s.icon).toBe("string");
      expect(s.icon.trim().length, `${s.id}.icon`).toBeGreaterThan(0);
    }
  });

  it("defaultVisible is a boolean", () => {
    for (const s of systems) {
      expect(typeof s.defaultVisible, `${s.id}.defaultVisible`).toBe("boolean");
    }
  });

  it("has both default-visible and default-hidden systems", () => {
    expect(systems.some((s) => s.defaultVisible)).toBe(true);
    expect(systems.some((s) => !s.defaultVisible)).toBe(true);
  });
});

describe("getSystemById", () => {
  it("returns the matching system", () => {
    const skeletal = getSystemById("skeletal");
    expect(skeletal?.id).toBe("skeletal");
    expect(skeletal?.name).toBe("Skeleton");
    expect(getSystemById("nervous")?.name).toBe("Nervous System");
    expect(getSystemById("cardiac")?.name).toBe("Heart");
  });

  it("returns undefined for unknown ids", () => {
    expect(getSystemById("not-a-system" as SystemId)).toBeUndefined();
    expect(getSystemById("" as SystemId)).toBeUndefined();
  });
});
