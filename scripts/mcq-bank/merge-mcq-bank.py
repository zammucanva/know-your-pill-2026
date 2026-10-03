#!/usr/bin/env python3
"""
merge-mcq-bank.py — Inject the 1,191-question KYP MCQ bank into the
per-drug TypeScript data files (src/lib/kyp/data/drugs/<slug>.ts).

Idempotent: re-running skips already-merged ids (no duplicates).
Usage:  python3 scripts/mcq-bank/merge-mcq-bank.py   (from repo root)
"""
import json, os, re, sys, glob
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BANK_DIR = os.path.join(ROOT, "data", "mcq")
DRUGS_DIR = os.path.join(ROOT, "src", "lib", "kyp", "data", "drugs")
REQUIRED = ["id", "question", "options", "correctIndex", "explanation", "afterSectionId"]

def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)

def render_quiz(q: dict) -> str:
    lines = ["    {"]
    lines.append(f'      id: {ts_str(q["id"])},')
    lines.append(f'      question: {ts_str(q["question"])},')
    lines.append("      options: [")
    for i, opt in enumerate(q["options"]):
        comma = "," if i < len(q["options"]) - 1 else ""
        lines.append(f"        {ts_str(opt)}{comma}")
    lines.append("      ],")
    lines.append(f'      correctIndex: {int(q["correctIndex"])},')
    lines.append(f'      explanation: {ts_str(q["explanation"])},')
    lines.append(f'      afterSectionId: {ts_str(q["afterSectionId"])},')
    lines.append("    },")
    return "\n".join(lines)

def existing_ids(src: str):
    return set(re.findall(r'^\s+id:\s*"([^"]+)",?\s*$', src, re.M))

def insert_quizzes(src: str, new_quizzes):
    m = re.search(r'^(\s*)microQuizzes:\s*\[\s*$', src, re.M)
    if not m:
        return None, "no microQuizzes array"
    close = re.compile(r'^  \],\s*$', re.M).search(src, m.end())
    if not close:
        return None, "closing bracket not found"
    block = "".join(render_quiz(q) + "\n" for q in new_quizzes)
    return src[:close.start()] + block + src[close.start():], None

def main():
    batches = sorted(glob.glob(os.path.join(BANK_DIR, "KYP_*_MCQ_Batch_*.json")))
    if not batches:
        print("FATAL: no batch files found in", BANK_DIR); sys.exit(1)

    per_drug = defaultdict(list)
    mixed, seen_ids = [], set()
    total = 0
    for path in batches:
        data = json.load(open(path))
        qs = data.get("microQuizzes", data.get("questions", [])) if isinstance(data, dict) else data
        for q in qs:
            missing = [k for k in REQUIRED if k not in q]
            if missing:
                print(f"FATAL: {os.path.basename(path)}:{q.get('id')} missing {missing}"); sys.exit(1)
            if q["id"] in seen_ids:
                print(f"FATAL: duplicate id in bank: {q['id']}"); sys.exit(1)
            seen_ids.add(q["id"]); total += 1
            slug = q.get("drugSlug")
            if slug == "mixed" or not slug:
                mixed.append({"source": os.path.basename(path), **{k: q[k] for k in REQUIRED}})
            else:
                per_drug[slug].append({k: q[k] for k in REQUIRED})

    report = {"totalBank": total, "mixedUnassigned": len(mixed),
              "drugFiles": 0, "inserted": 0, "skippedExisting": 0,
              "perDrug": {}, "errors": []}

    for slug, quizzes in sorted(per_drug.items()):
        fpath = os.path.join(DRUGS_DIR, f"{slug}.ts")
        if not os.path.exists(fpath):
            report["errors"].append(f"drug file not found: {slug}.ts"); continue
        src = open(fpath).read()
        ids = existing_ids(src)
        fresh = [q for q in quizzes if q["id"] not in ids]
        report["skippedExisting"] += len(quizzes) - len(fresh)
        if not fresh:
            report["perDrug"][slug] = {"before": len(ids), "inserted": 0}
            continue
        out, err = insert_quizzes(src, fresh)
        if err:
            report["errors"].append(f"{slug}: {err}"); continue
        before_n = src.count("afterSectionId:")
        out_n = out.count("afterSectionId:")
        if out_n != before_n + len(fresh):
            report["errors"].append(f"{slug}: quiz-count check failed ({before_n}->{out_n})"); continue
        open(fpath, "w").write(out)
        report["drugFiles"] += 1
        report["inserted"] += len(fresh)
        report["perDrug"][slug] = {"before": len(ids), "inserted": len(fresh),
                                   "after": len(ids) + len(fresh)}

    with open(os.path.join(BANK_DIR, "mixed-unassigned.json"), "w") as f:
        json.dump({"note": "Class-summary questions with no single drug home. "
                           "Candidate placements: class page quiz section, spaced-repetition mixed deck, or Custom Test 'mixed set'.",
                   "questions": mixed}, f, indent=1, ensure_ascii=False)
    with open(os.path.join(BANK_DIR, "merge-report.json"), "w") as f:
        json.dump(report, f, indent=1)

    print(f"bank={total}  inserted={report['inserted']}  files={report['drugFiles']}  "
          f"mixed(unassigned)={len(mixed)}  skipped(existing)={report['skippedExisting']}  "
          f"errors={len(report['errors'])}")
    for e in report["errors"][:20]: print("  ERR", e)

if __name__ == "__main__":
    main()
