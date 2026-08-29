"""Extract every user-visible English string from the homepage sections so we can verify copy-immutability after redesign."""
import re, json, pathlib
sections_dir = pathlib.Path("src/components/kyp/sections")
homepage_files = ["home-hero.tsx","stats-section.tsx","medication-library-section.tsx","substance-use-section.tsx","timeline-section.tsx","neuroarcade-section.tsx","roadmap-section.tsx","faq-section.tsx","emergency-section.tsx","footer.tsx","navbar.tsx"]
out = {}
for f in homepage_files:
    p = sections_dir / f
    if not p.exists(): continue
    src = p.read_text()
    strings = []
    # Match JSX text content between > and < that contains actual letters
    for m in re.finditer(r'>([^<>{}\n]+)<', src):
        t = m.group(1).strip()
        if t and re.search(r'[A-Za-z]', t) and not t.startswith("{") and len(t) > 1:
            strings.append(t)
    # Match string literals in props like title="..."
    for m in re.finditer(r'(?:title|description|label|placeholder|aria-label|question|answer)=["\']([^"\']+)["\']', src):
        s = m.group(1).strip()
        if s:
            strings.append(s)
    out[f] = strings
print(json.dumps(out, indent=2, ensure_ascii=False))
