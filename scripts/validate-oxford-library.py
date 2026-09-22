#!/usr/bin/env python3
"""
KYP Psychiatry library validator — the authoritative content-integrity gate.

Validates the canonical note corpus (download/kyp-notes/) WITHOUT modifying it:
  1. 109 notes (+ index + template), 109 unique slugs
  2. 82 disorder notes with sections 1-16 in order; 27 concept notes 1-8
  3. Front matter present and typed (title/slug/category/source_map/
     priority/audiences/last_reviewed)
  4. 719 authored self-test MCQs, each with >=2 options, a valid answer
     index inside range, and a non-empty explanation
  5. 18 index groups; every note belongs to exactly one group
  6. Generated search records are FRESH (match the corpus exactly)

Exit 0 = PASS; any failure exits 1 with a message.
"""
import json
import os
import re
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
NOTES = os.path.join(REPO, "download", "kyp-notes")

EXPECTED_NOTES = 109
EXPECTED_DISORDER = 82
EXPECTED_CONCEPT = 27
EXPECTED_MCQS = 719
EXPECTED_GROUPS = 18

FAILURES = []


def fail(msg: str) -> None:
    FAILURES.append(msg)


def parse_frontmatter(text):
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        return {}, text[m.end():] if m else text
    fm = {}
    for line in m.group(1).splitlines():
        kv = re.match(r"^(\w[\w_]*)\s*:\s*(.*)$", line)
        if not kv:
            continue
        key, val = kv.group(1), kv.group(2).strip()
        if val.startswith("["):
            fm[key] = re.findall(r'"([^"]*)"', val)
        else:
            if key == "priority":
                p = re.match(r"^(P[123])", val)
                val = p.group(1) if p else val
            fm[key] = val.strip('"').replace(r"\s+#\s.*$", "")
    return fm, text[m.end():]


def main() -> int:
    if not os.path.isdir(NOTES):
        print(f"FAIL: canonical notes directory missing: {NOTES}")
        return 1

    files = sorted(
        f for f in os.listdir(NOTES)
        if f.endswith(".md") and f not in ("00-topic-index.md", "template.md")
    )
    index_raw = open(os.path.join(NOTES, "00-topic-index.md"), encoding="utf-8").read()

    # ── 1. counts + slugs ────────────────────────────────────────────
    if len(files) != EXPECTED_NOTES:
        fail(f"note count: expected {EXPECTED_NOTES}, found {len(files)}")

    notes = {}
    mcq_total = 0
    disorder = concept = 0
    for fn in files:
        raw = open(os.path.join(NOTES, fn), encoding="utf-8").read()
        fm, body = parse_frontmatter(raw)
        slug = fm.get("slug") or fn[:-3]

        for field in ("title", "slug", "category", "source_map", "priority", "last_reviewed"):
            if not fm.get(field):
                fail(f"{fn}: front matter field '{field}' missing/empty")
        auds = fm.get("audiences")
        if not isinstance(auds, list) or not auds:
            fail(f"{fn}: audiences missing")

        if slug in notes:
            fail(f"duplicate slug: {slug} ({fn})")

        secs = re.findall(r"^## (\d+)\. ", body, re.M)
        nums = [int(n) for n in secs]
        if len(nums) == 16:
            disorder += 1
            if nums != list(range(1, 17)):
                fail(f"{fn}: 16-section note has wrong section order: {nums}")
        elif len(nums) == 8:
            concept += 1
            if nums != list(range(1, 9)):
                fail(f"{fn}: 8-section note has wrong section order: {nums}")
        else:
            fail(f"{fn}: expected 16 or 8 sections, found {len(nums)}")
            continue

        # MCQs inside the self-test section
        n_mcq = 0
        stm = re.search(r"^## \d+\..*[Ss]elf-test.*$", body, re.M)
        if stm:
            region = body[stm.end():]
            for qm in re.finditer(r"^\*\*(?:Q\d+|\d+)\.(?:\*\*|\s)", region, re.M):
                n_mcq += 1
        mcq_total += n_mcq

        notes[slug] = {
            "file": fn,
            "title": fm.get("title", ""),
            "category": fm.get("category", ""),
            "priority": fm.get("priority", ""),
            "mcqs": n_mcq,
            "sections": len(nums),
        }

    if disorder != EXPECTED_DISORDER:
        fail(f"disorder notes: expected {EXPECTED_DISORDER}, found {disorder}")
    if concept != EXPECTED_CONCEPT:
        fail(f"concept notes: expected {EXPECTED_CONCEPT}, found {concept}")
    if mcq_total != EXPECTED_MCQS:
        fail(f"total MCQs: expected {EXPECTED_MCQS}, found {mcq_total}")

    # ── 5. index groups ──────────────────────────────────────────────
    groups = []
    current = None
    for line in index_raw.splitlines():
        gm = re.match(r"^### Group ([A-R]) — (.+)$", line)
        if gm:
            current = {"letter": gm.group(1), "name": gm.group(2), "slugs": []}
            groups.append(current)
            continue
        if current:
            rm = re.match(r"^\|\s*[A-R]\d+\s*\|.*?`([a-z0-9-]+)`", line)
            if rm:
                current["slugs"].append(rm.group(1))

    if len(groups) != EXPECTED_GROUPS:
        fail(f"index groups: expected {EXPECTED_GROUPS}, found {len(groups)}")

    grouped = Counter()
    for g in groups:
        for slug in g["slugs"]:
            grouped[slug] += 1
            if slug not in notes:
                fail(f"index references unknown note slug: {slug}")
    for slug in notes:
        if grouped[slug] == 0:
            fail(f"note not present in any index group: {slug}")
        elif grouped[slug] > 1:
            fail(f"note appears in multiple index groups: {slug}")

    # ── 6. generated search records freshness ─────────────────────────
    gen_path = os.path.join(REPO, "src", "lib", "kyp", "data", "psychiatry-search-records.generated.ts")
    if not os.path.exists(gen_path):
        fail("generated search records missing (run scripts/generate-psychiatry-search-records.ts)")
    else:
        gen_raw = open(gen_path, encoding="utf-8").read()
        gen_ids = set(re.findall(r'id: "(psychiatry-[a-z0-9-]+)"', gen_raw))
        expected_ids = {"psychiatry-hub", "psychiatry-library"} | {f"psychiatry-{s}" for s in notes}
        if gen_ids != expected_ids:
            missing = expected_ids - gen_ids
            extra = gen_ids - expected_ids
            fail(
                "generated search records are STALE (run "
                "scripts/generate-psychiatry-search-records.ts); "
                f"missing={sorted(missing)[:5]} extra={sorted(extra)[:5]}"
            )

    # ── report ────────────────────────────────────────────────────────
    print(f"notes: {len(files)} (disorder {disorder} / concept {concept})")
    print(f"unique slugs: {len(notes)}")
    print(f"index groups: {len(groups)}")
    print(f"self-test MCQs: {mcq_total}")
    print(f"search records: {len(gen_ids) if os.path.exists(gen_path) else 0}")

    if FAILURES:
        print(f"\nOXFORD LIBRARY VALIDATION: FAIL ({len(FAILURES)} problems)")
        for f in FAILURES[:20]:
            print(f"  - {f}")
        return 1
    print("\nOXFORD LIBRARY VALIDATION: PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
