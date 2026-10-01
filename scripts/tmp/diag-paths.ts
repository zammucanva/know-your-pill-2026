import { drugs } from "../../src/lib/kyp/data/drugs/index";
const withPaths = drugs.filter((d) => d.pathwayIds.length > 0).map((d) => d.slug);
console.log("pathwayIds>0:", withPaths.length, withPaths.slice(0, 12));
const serotonergic = drugs.filter((d) => d.brainRegionIds.includes("raphe-nuclei") && d.neurotransmitters.some((nt) => /serotonin/i.test(nt)));
console.log("serotonergic count:", serotonergic.length);
import { sigma1ReceptorNote } from "../../src/components/kyp/sections/drug/drug-neurotransmitters";
const s1 = drugs.filter((d) => sigma1ReceptorNote(d) !== undefined).map((d) => d.slug).sort();
console.log("sigma1 drugs:", s1);
