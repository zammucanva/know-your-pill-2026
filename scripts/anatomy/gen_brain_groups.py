"""
Regenerate the brainStructureGroups array in src/lib/anatomy/brain-registry.ts from public/models/atlas.json.

Z-Anatomy concepts have name-derived ids (ZA-<slug>), so Brain Mode groups are resolved by name rules here and
written out as explicit concept id lists (the registry stays a plain, auditable data table).

    python scripts/anatomy/gen_brain_groups.py
"""
import json
import os
import re

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", ".."))
atlas = json.load(open(os.path.join(ROOT, "public", "models", "atlas.json"), encoding="utf-8"))
system_of = {p["conceptId"]: p["system"] for p in atlas["parts"]}

# (id, label, description, regex) in priority order: the first matching rule claims a structure.
RULES = [
    ("ventricular-system", "Ventricular System", "CSF-filled chambers of the brain: lateral, third and fourth ventricles, plus the choroid plexus that makes the fluid", r"ventricle|choroid plexus|aqueduct"),
    ("cranial-nerves", "Cranial Nerves", "Olfactory, optic, oculomotor, trochlear, trigeminal, abducens, facial, vestibulocochlear, glossopharyngeal, vagus, accessory and hypoglossal nerves", r"\((i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii)\)|optic chiasm|chorda tympani|trigeminal nerve|cochlear nerve|vestibular nerve|facial nerve|oculomotor nerve|trochlear nerve|abducens nerve"),
    ("corpus-callosum", "Corpus Callosum", "Connects the two cerebral hemispheres", r"corpus callosum"),
    ("white-matter", "White Matter", "White matter of the cerebral hemispheres", r"white matter of telencephalon"),
    ("limbic-system", "Limbic System", "Hippocampus, amygdala, fornix and septal structures: memory and emotion", r"hippocamp|amygdal|fornix|septal nuclei|septum pellucidum|stria terminalis|habenula"),
    ("basal-ganglia", "Basal Ganglia", "Caudate, putamen, globus pallidus: motor control and reward", r"caudate|putamen|globus pallidus|lentiform"),
    ("thalamus", "Thalamus", "Sensory relay station and motor integration", r"thalamus|geniculate"),
    ("hypothalamus", "Hypothalamus", "Hormonal regulation, autonomic control, circadian rhythm", r"hypothalamus|mamillary"),
    ("cerebellum", "Cerebellum", "Motor coordination, balance and motor learning", r"cerebell|lobule|vermis|flocculus|culmen|declive|lingula|nodule|folium|tuber of|uvula of|pyramis|central lobule|wing of central"),
    ("midbrain", "Midbrain", "Midbrain, peduncles and colliculi", r"midbrain|peduncle|colliculus|red nucleus|interpeduncular|nucleus of (oculomotor|trochlear)|accessory nucleus of oculomotor|posterior commissure"),
    ("brainstem", "Brainstem", "Pons and medulla: relay, autonomic control and cranial nerve nuclei", r"pons|medulla oblongata|pyramid of medulla|olive|nucleus of (abducens|hypoglossal|solitary|accessory)|nuclei|nucleus ambiguus|nucleus of vagus|vagus nerve nucleus|salivatory|cochlear nucleus|motor nucleus of facial|posterior nucleus of vagus"),
    ("frontal-cortex", "Frontal Cortex", "Frontal gyri: executive function, motor control, language", r"frontal gyrus|precentral gyrus|orbital (part|gyri)|opercular part|triangular part|straight gyrus|frontopolar|paracentral gyrus|olfactory"),
    ("parietal-cortex", "Parietal Cortex", "Parietal gyri: somatosensory processing, spatial orientation", r"postcentral gyrus|supramarginal|angular gyrus|precuneus|parietal lobule"),
    ("temporal-cortex", "Temporal Cortex", "Temporal gyri: auditory processing, memory, language", r"temporal (gyr|pole|plane)|transverse temporal|occipitotemporal"),
    ("occipital-cortex", "Occipital Cortex", "Occipital gyri: visual processing", r"occipital (gyr|pole)|cuneus|lingual gyrus|lateral occipital"),
    ("other-cortex", "Other Cortical Structures", "Cingulate gyrus, insula and the anterior commissure", r"cingulate|insula|anterior commissure"),
]

groups = {r[0]: [] for r in RULES}
for c in atlas["concepts"]:
    if system_of.get(c["id"]) != "nervous":
        continue
    # peripheral nerve branches are not brain structures even when they share a word with a rule
    if re.search(r"median|ulnar|radial|plexus of|spinal nerve|root of spinal|cauda|brachial|sciatic|femoral|intercostal|phrenic|spinal cord|dorsal root", c["name"], re.I) and not re.search(r"choroid", c["name"], re.I):
        continue
    for gid, _l, _d, rx in RULES:
        if re.search(rx, c["name"], re.I):
            groups[gid].append(c["id"])
            break

order = ["frontal-cortex", "parietal-cortex", "temporal-cortex", "occipital-cortex", "other-cortex", "thalamus", "hypothalamus",
         "basal-ganglia", "limbic-system", "corpus-callosum", "white-matter", "brainstem", "midbrain", "cerebellum",
         "ventricular-system", "cranial-nerves"]
meta = {r[0]: r for r in RULES}
out = ["export const brainStructureGroups: BrainStructureGroup[] = ["]
for gid in order:
    ids = groups[gid]
    if not ids:
        continue
    _id, label, desc, _rx = meta[gid]
    out.append("  {")
    out.append(f'    id: "{gid}",')
    out.append(f'    label: "{label}",')
    out.append(f'    description: "{desc}",')
    out.append("    conceptIds: [")
    for i in range(0, len(ids), 3):
        out.append("      " + ", ".join(f'"{x}"' for x in ids[i:i + 3]) + ",")
    out.append("    ],")
    out.append("  },")
out.append("];")
block = "\n".join(out)

path = os.path.join(ROOT, "src", "lib", "anatomy", "brain-registry.ts")
src = open(path, encoding="utf-8", newline="").read().replace("\r\n", "\n")
a = src.index("export const brainStructureGroups")
b = src.index("];\n", a) + 3
src = src[:a] + "// GENERATED by scripts/anatomy/gen_brain_groups.py from public/models/atlas.json. Edit the rules there.\n" + block + "\n" + src[b:]
open(path, "w", encoding="utf-8", newline="\n").write(src)
for gid in order:
    print(gid, len(groups[gid]))
