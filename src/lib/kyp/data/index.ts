/**
 * Barrel export — single import surface for the KYP data layer.
 *
 *   import { substances, drugClasses, searchIndex } from "@/lib/kyp/data";
 *
 * Never import from individual files in components — go through here
 * so we can refactor the underlying structure without touching consumers.
 */

export * from "./types";
export * from "./classes";
export * from "./drugs";
export * from "./medications";
export * from "./brain";
export * from "./side-effects";
export * from "./platform";
export * from "./search-index";
export * from "./drugs/index";
