/**
 * Phase 6 bank smoke check — assemble + validate + stats dump.
 * Usage: bun scripts/phase6/check-bank.ts
 */
import { stahlMcqs, stahlBankIntegrity, stahlBankStats } from "../../src/lib/kyp/stahl-mcqs/assemble";
import { validateStahlBank } from "../../src/lib/kyp/stahl-mcqs/validate";

console.log(`Authored: ${stahlBankIntegrity.authored}`);
console.log(`Resolved: ${stahlMcqs.length}`);
console.log(`Excluded: ${stahlBankIntegrity.excluded.length}`);
for (const e of stahlBankIntegrity.excluded) console.log(`  ✗ ${e.drug}: ${e.reason}`);

const result = validateStahlBank({ requireFullDrugCoverage: true });
console.log(`\nValidation: ${result.ok ? "PASS" : "FAIL"} — ${result.violations.length} violations`);
for (const v of result.violations) console.log(`  ✗ [${v.code}] ${v.detail}`);
for (const w of result.warnings) console.log(`  ⚠ [${w.code}] ${w.detail}`);

const stats = stahlBankStats();
console.log(`\n=== STATS ===`);
console.log(`Total: ${stats.total} | Drugs: ${stats.drugsRepresented}/143 | Classes: ${stats.classesRepresented}`);
console.log(`Positions A/B/C/D: ${stats.answerPositions.join(" / ")}`);
console.log(`Difficulty:`, stats.byDifficulty);
console.log(`Topics:`, stats.byTopic);
console.log(`Types:`, stats.byType);
console.log(`Top classes:`, Object.entries(stats.byClass).sort((a, b) => b[1] - a[1]).slice(0, 12));

process.exit(result.ok ? 0 : 1);
