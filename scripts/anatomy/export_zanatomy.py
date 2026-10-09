"""
Export Z-Anatomy FBX files to compact per-part binary meshes for the KYP /anatomy atlas.

Run headless with Blender (4.x):

    blender -b -P scripts/anatomy/export_zanatomy.py -- <fbx_dir> <out_dir>

Z-Anatomy (https://github.com/LluisV/Z-Anatomy, CC BY-SA 4.0) shares BodyParts3D's body frame
(metres, feet at y ~ -0.09, head at y ~ 1.79 once converted to Y-up), so its parts sit in the same
space as the rest of the atlas. For every FBX this writes:

    <out_dir>/<tag>.bin    raw geometry (positions f32, normals i16 normalized, indices u32; 4-byte aligned)
    <out_dir>/<tag>.json   [{name, system, group, vertexCount, indexCount, bounds, positions, normals, indices}]

Each part is welded, decimated toward a per-group triangle budget (small parts keep proportionally
more triangles) and gets smooth vertex normals. scripts/anatomy/build_atlas.py then merges the result
with the remaining BodyParts3D parts. Non-commercial Z-Anatomy parts (inner ear, kidney) are skipped.
"""
import json
import math
import os
import re
import struct
import sys

import bpy
import mathutils

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
FBX_DIR, OUT_DIR = argv[0], argv[1]
os.makedirs(OUT_DIR, exist_ok=True)

# FBX import lands Z-up; the atlas is Y-up: (x, y, z) -> (x, z, -y)
TO_Y_UP = mathutils.Matrix(((1, 0, 0, 0), (0, 0, 1, 0), (0, -1, 0, 0), (0, 0, 0, 1)))

MIN_POLYS = 20
MARKER = re.compile(r"\.[ji]$|\.[oi]\d*[lr]?$", re.I)  # label stubs and origin/insertion markers

HEART = re.compile(r"atrium|ventricle|papillary|leaflet|auricle|chordae|coronary sinus|septum|myocard|heart|pericard|aortic valve|mitral|tricuspid|pulmonary valve|trabecul", re.I)
HEART_EXCLUDE = re.compile(r"artery|vein|nerve", re.I)
VEIN = re.compile(r"vein|vena|sinus|plexus|venous|azygos", re.I)

EYE_EAR = re.compile(r"^(suspensory ligament of eyeball|lacrimal|ampulla of lacrimal|nasolacrimal|retina|sclera|vitreous|posterior segment|anterior segment|anterior chamber|lens|iris|cornea|zonular|auditory tube|tympanic membrane|vestibule\b|cochlea\b)", re.I)
NEURAL_SKIP = re.compile(r"sulc|lat_fis|fissure|tract|fasciculus|fasciculi|corticospinal|nucleus proprius|reticular process|intermed|substance|central canal|horn of spinal|spinocerebellar|spinothalamic|spinotectal|reticulospinal|vestibulospinal|tectospinal|rubrospinal|posterolateral|dura|tentorium|falx", re.I)

FASCIA = re.compile(r"fascia|aponeuros|retinacul|iliotibial|sheath|bursa|ligament|septum|membrane|raphe|linea alba|tendinous|tendon of", re.I)

RESP = re.compile(r"trachea|bronch|lung|epiglottis|nasal cavity|larynx|pharynx", re.I)
REPRO = re.compile(r"testis|epididymis|ductus deferens|seminal|prostate|ejaculatory|penis|glans", re.I)
ENDO = re.compile(r"thyroid|suprarenal|pineal|parathyroid|hypophysis", re.I)
URINARY = re.compile(r"kidney|renal|bladder|ureter|urethra", re.I)
VISC_SKIP = re.compile(r"^pleura$|gingiva", re.I)

# (file, group) -> (system, triangle budget). Budgets keep the total download close to the old atlas.
FILES = {
    "SkeletalSystem100": "skeletal",
    "MuscularSystem100": "muscular",
    "Joints100": "joints",
    "CardioVascular41": "cardio",
    "NervousSystem100": "nervous",
    "VisceralSystem100": "visceral",
    "LymphoidOrgans100": "lymph",
}
BUDGET = {
    "skeletal": 430_000,
    "muscular": 520_000,
    "muscular-fascia": 60_000,
    "joints": 45_000,
    "cardiac": 130_000,
    "arterial": 300_000,
    "venous": 220_000,
    "nervous": 520_000,
    "respiratory": 150_000,
    "digestive": 210_000,
    "endocrine": 18_000,
    "reproductive": 18_000,
    "lymph": 20_000,
}


# BUDGET_SCALE=0.4 builds the lighter atlas served to phones (see build_atlas.py --lite)
SCALE = float(os.environ.get("BUDGET_SCALE", "1"))


def classify(tag, name):
    """Return (system, group) or None to skip."""
    if MARKER.search(name):
        return None
    if tag == "skeletal":
        return ("skeletal", "skeletal")
    if tag == "muscular":
        return ("connective", "muscular-fascia") if FASCIA.search(name) else ("muscular", "muscular")
    if tag == "joints":
        return ("connective", "joints")
    if tag == "cardio":
        if HEART.search(name) and not HEART_EXCLUDE.search(name):
            return ("cardiac", "cardiac")
        return ("venous", "venous") if VEIN.search(name) else ("arterial", "arterial")
    if tag == "nervous":
        if EYE_EAR.search(name):
            return None
        # sulcus-only fillers are skipped, but combined 'gyrus and sulcus' cortex pieces and the insula are kept
        if NEURAL_SKIP.search(name) and not re.search(r"gyr|insula", name, re.I):
            return None
        return ("nervous", "nervous")
    if tag == "visceral":
        if URINARY.search(name) or VISC_SKIP.search(name):
            return None  # urinary stays BodyParts3D (kidney is non-commercial in Z-Anatomy)
        if RESP.search(name):
            return ("respiratory", "respiratory")
        if REPRO.search(name):
            return ("reproductive", "reproductive")
        if ENDO.search(name):
            return ("endocrine", "endocrine")
        return ("digestive", "digestive")
    if tag == "lymph":
        return ("lymphatic", "lymph")
    return None


def tri_count(mesh):
    return sum(max(0, len(p.vertices) - 2) for p in mesh.polygons)


def allocate(counts, budget):
    """target_i = min(orig_i, floor_i, k * orig_i^0.85) with k solved so the sum hits the budget."""
    floors = [min(c, 120) for c in counts]
    if sum(counts) <= budget:
        return list(counts)

    def total(k):
        return sum(max(f, min(c, int(k * c ** 0.85))) for c, f in zip(counts, floors))

    lo, hi = 0.0, 50.0
    for _ in range(40):
        mid = (lo + hi) / 2
        if total(mid) > budget:
            hi = mid
        else:
            lo = mid
    return [max(f, min(c, int(lo * c ** 0.85))) for c, f in zip(counts, floors)]


def process(fbx_name, tag):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.fbx(filepath=os.path.join(FBX_DIR, fbx_name + ".fbx"))
    items = {}
    for o in bpy.context.scene.objects:
        if o.type != "MESH" or len(o.data.polygons) < MIN_POLYS:
            continue
        c = classify(tag, o.name)
        if not c:
            continue
        items.setdefault(c, []).append(o)

    blob = bytearray()
    parts = []

    def align():
        while len(blob) % 4:
            blob.append(0)

    for (system, group), objs in sorted(items.items()):
        counts = [tri_count(o.data) for o in objs]
        targets = allocate(counts, int(BUDGET[group] * SCALE))
        print(f"## {fbx_name} {system}/{group}: {len(objs)} parts {sum(counts)} -> {sum(targets)} tris", flush=True)
        for o, orig, target in zip(objs, counts, targets):
            for m in list(o.modifiers):
                o.modifiers.remove(m)
            weld = o.modifiers.new("w", "WELD")
            weld.merge_threshold = 1e-5
            if target < orig:
                dec = o.modifiers.new("d", "DECIMATE")
                dec.decimate_type = "COLLAPSE"
                dec.ratio = max(0.001, min(1.0, target / orig))
                dec.use_collapse_triangulate = True
            dg = bpy.context.evaluated_depsgraph_get()
            ev = o.evaluated_get(dg)
            me = bpy.data.meshes.new_from_object(ev, depsgraph=dg)
            me.calc_loop_triangles()
            mw = TO_Y_UP @ o.matrix_world
            rot = mw.to_3x3()
            nv = len(me.vertices)
            if nv == 0 or len(me.loop_triangles) == 0:
                bpy.data.meshes.remove(me)
                continue
            pos = [mw @ v.co for v in me.vertices]
            nrm = [(rot @ v.normal).normalized() for v in me.vertices]
            idx = [i for t in me.loop_triangles for i in t.vertices]
            if any(math.isnan(c) for p in pos for c in p):
                bpy.data.meshes.remove(me)
                continue
            mn = [min(p[i] for p in pos) for i in range(3)]
            mx = [max(p[i] for p in pos) for i in range(3)]
            align()
            p_off = len(blob)
            blob += struct.pack("<%df" % (nv * 3), *[c for p in pos for c in p])
            align()
            n_off = len(blob)
            blob += struct.pack("<%dh" % (nv * 3), *[max(-32767, min(32767, int(round(c * 32767)))) for n in nrm for c in n])
            align()
            i_off = len(blob)
            blob += struct.pack("<%dI" % len(idx), *idx)
            parts.append({
                "name": o.name, "system": system, "group": group,
                "vertexCount": nv, "indexCount": len(idx),
                "bounds": [mn, mx],
                "positions": p_off, "normals": n_off, "indices": i_off,
            })
            bpy.data.meshes.remove(me)
    align()
    with open(os.path.join(OUT_DIR, tag + ".bin"), "wb") as f:
        f.write(blob)
    with open(os.path.join(OUT_DIR, tag + ".json"), "w") as f:
        json.dump(parts, f)
    print(f"### {tag}: {len(parts)} parts, {len(blob)/1e6:.1f} MB", flush=True)


for fbx, tag in FILES.items():
    if len(argv) > 2 and tag not in argv[2:]:
        continue
    process(fbx, tag)
