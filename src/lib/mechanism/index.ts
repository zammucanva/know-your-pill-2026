/**
 * KYP Mechanism System — public API of the data layer.
 *
 * Phase A exports the typed model, the controlled vocabulary, fail-loud
 * validation, the deterministic layout engine and the data-derived
 * accessibility text. Pilot definitions and the legacy adapters are added
 * by the migration phase (see `pilots.ts` / `normalize.ts`).
 */

export * from "./vocabulary";
export * from "./model";
export * from "./validate";
export * from "./layout";
export * from "./describe";
export * from "./normalize";
export * from "./pilots";
