"""
Build the hybrid /anatomy atlas: Z-Anatomy parts (from export_zanatomy.py) for the systems it covers in
detail, plus the existing BodyParts3D parts for the rest (urinary, sensory organs, body surface).

    python scripts/anatomy/build_atlas.py <zexp_dir> [--bp3d <dir with the original BodyParts3D atlas.json + body-N.bin.gz>] [--lite]

Reads the BodyParts3D parts to keep (urinary, sensory, body surface) from public/models, or from --bp3d (a copy of
the original BodyParts3D atlas, recoverable from git history), and writes the hybrid atlas to public/models.
--lite writes atlas-lite.json + body-lite-N.bin.gz for phones; run export_zanatomy.py with BUDGET_SCALE=0.4 for it.
"""
import gzip
import hashlib
import json
import os
import re
import struct
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", ".."))
MODELS = os.path.join(ROOT, "public", "models")
args = sys.argv[1:]
ZDIR = args[0]
BP = args[args.index("--bp3d") + 1] if "--bp3d" in args else MODELS
LITE = "--lite" in args  # lighter phone build: atlas-lite.json + body-lite-N.bin.gz (export with BUDGET_SCALE=0.4)
PREFIX = "body-lite" if LITE else "body"
MANIFEST = "atlas-lite.json" if LITE else "atlas.json"

KEEP_BP3D = {"urinary", "sensory", "integumentary"}
CHUNK_BYTES = 4_200_000
TAGS = ["skeletal", "muscular", "joints", "cardio", "nervous", "visceral", "lymph"]


def clean_name(raw):
    n = re.sub(r"\.\d{3}$", "", raw)
    side = None
    m = re.match(r"^(.*)\.(l|r)$", n, re.I)
    if m:
        n, side = m.group(1), ("Left" if m.group(2).lower() == "l" else "Right")
    n = n.replace("*", "").replace("_", " ")
    n = re.sub(r"\s+", " ", n).strip(" ,;'")
    if side and not re.match(r"^(left|right)\b", n, re.I):
        n = f"{side} {n[0].lower() + n[1:]}" if n else side
    return n[:1].upper() + n[1:]


def slug(n):
    return re.sub(r"[^a-z0-9]+", "-", n.lower()).strip("-")


def read_chunk(atlas, ci):
    c = atlas["chunks"][ci]
    path = os.path.join(BP, os.path.basename(c["gzip"]))
    with gzip.open(path, "rb") as f:
        return f.read()


def main():
    atlas = json.load(open(os.path.join(BP, "atlas.json"), encoding="utf-8"))
    chunk_cache = {}

    out_parts, out_blobs = [], []  # blob list parallel to parts: (position bytes, normal bytes, index bytes)

    # 1) kept BodyParts3D parts
    kept_ids = set()
    for p in atlas["parts"]:
        if p["system"] not in KEEP_BP3D:
            continue
        ci = p["chunk"]
        if ci not in chunk_cache:
            chunk_cache[ci] = read_chunk(atlas, ci)
        buf = chunk_cache[ci]
        pos = buf[p["positions"]:p["positions"] + p["vertexCount"] * 12]
        nor = buf[p["normals"]:p["normals"] + p["vertexCount"] * 6]
        idx = buf[p["indices"]:p["indices"] + p["indexCount"] * 4]
        out_parts.append({k: p[k] for k in ("id", "name", "conceptId", "system", "vertexCount", "indexCount", "bounds")})
        out_blobs.append((pos, nor, idx))
        kept_ids.add(p["id"])

    concepts = []
    for c in atlas["concepts"]:
        els = [e for e in c["elements"] if e in kept_ids]
        if els:
            concepts.append({"id": c["id"], "name": c["name"], "elements": els})

    # 2) Z-Anatomy parts
    by_name = {}
    n = 0
    z_tris = 0
    for tag in TAGS:
        meta = json.load(open(os.path.join(ZDIR, tag + ".json")))
        raw = open(os.path.join(ZDIR, tag + ".bin"), "rb").read()
        for p in meta:
            n += 1
            pid = f"ZA{n:04d}"
            name = clean_name(p["name"])
            cid = "ZA-" + slug(name)
            base, k = cid, 2
            # one concept per cleaned name; identical names share it
            if cid not in by_name:
                by_name[cid] = {"id": cid, "name": name, "elements": []}
            by_name[cid]["elements"].append(pid)
            pos = raw[p["positions"]:p["positions"] + p["vertexCount"] * 12]
            nor = raw[p["normals"]:p["normals"] + p["vertexCount"] * 6]
            idx = raw[p["indices"]:p["indices"] + p["indexCount"] * 4]
            out_parts.append({"id": pid, "name": name, "conceptId": cid, "system": p["system"],
                              "vertexCount": p["vertexCount"], "indexCount": p["indexCount"],
                              "bounds": p["bounds"]})
            out_blobs.append((pos, nor, idx))
            z_tris += p["indexCount"] // 3
    concepts.extend(by_name.values())

    # 3) pack into chunks (same layout as before: f32 positions, i16 normals, u32 indices, 4-byte aligned)
    chunks, cur, cur_len, ci = [], bytearray(), 0, 0

    def flush():
        nonlocal cur, ci
        if not cur:
            return
        raw = bytes(cur)
        name = f"{PREFIX}-{ci}.bin"
        gz = gzip.compress(raw, 9)
        with open(os.path.join(MODELS, name + ".gz"), "wb") as f:
            f.write(gz)
        chunks.append({"url": f"/models/{name}", "bytes": len(raw), "gzip": f"/models/{name}.gz", "gzipBytes": len(gz),
                       "hash": hashlib.sha1(gz).hexdigest()[:10]})
        cur = bytearray()
        ci += 1

    def align():
        while len(cur) % 4:
            cur.append(0)

    for part, (pos, nor, idx) in zip(out_parts, out_blobs):
        if len(cur) + len(pos) + len(nor) + len(idx) + 16 > CHUNK_BYTES:
            flush()
        align()
        part["chunk"] = ci
        part["positions"] = len(cur)
        cur += pos
        part["normals"] = len(cur)
        cur += nor
        align()
        part["indices"] = len(cur)
        cur += idx
    flush()
    # remove stale chunks from the previous build
    for f in os.listdir(MODELS):
        m = re.match(rf"{PREFIX}-(\d+)\.bin\.gz$", f)
        if m and int(m.group(1)) >= ci:
            os.remove(os.path.join(MODELS, f))

    total_tris = sum(p["indexCount"] for p in out_parts) // 3
    manifest = {
        "version": "Hybrid: Z-Anatomy + BodyParts3D 4.0",
        "parts": out_parts,
        "chunks": chunks,
        "triangles": total_tris,
        "concepts": concepts,
        "sourceTriangles": atlas.get("sourceTriangles"),
        "optimized": {"method": "Blender weld + quadric collapse (Z-Anatomy); meshoptimizer (BodyParts3D)",
                      "zAnatomyParts": n, "bodyParts3dParts": len(kept_ids)},
        "sex": "male",
        "source": "Z-Anatomy + BodyParts3D",
        "scope": f"Adult male reference anatomy · {len(out_parts):,} meshes (Z-Anatomy for skeleton, muscles, "
                 "cardiovascular, nervous, respiratory, digestive, endocrine, reproductive and lymphatic systems; "
                 "BodyParts3D for urinary, sensory organs and body surface)",
    }
    with open(os.path.join(MODELS, MANIFEST), "w", encoding="utf-8", newline="\n") as f:
        json.dump(manifest, f, separators=(",", ":"))
    mb = sum(c["gzipBytes"] for c in chunks) / 1e6
    print(f"parts={len(out_parts)} (Z {n}, BP3D {len(kept_ids)}) tris={total_tris:,} z_tris={z_tris:,} chunks={len(chunks)} gz={mb:.1f} MB")


main()
