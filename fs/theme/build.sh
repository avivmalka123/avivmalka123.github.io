#!/usr/bin/env bash
# Rebuilds base.zip from ../theme-src.
# Theme folders go at the zip root (no wrapping folder) - Shopify rejects wrapped zips.
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$HERE/../theme-src"
OUT="$HERE/base.zip"

for d in assets config layout locales sections snippets templates; do
  [ -d "$SRC/$d" ] || { echo "missing $SRC/$d" >&2; exit 1; }
done

# every JSON file must parse before we ship it
python3 -I - "$SRC" <<'PY'
import json, pathlib, sys
bad = 0
for p in sorted(pathlib.Path(sys.argv[1]).rglob('*.json')):
    try:
        json.loads(p.read_text(encoding='utf-8'))
    except Exception as e:
        bad += 1
        print(f'JSON error in {p}: {e}', file=sys.stderr)
sys.exit(1 if bad else 0)
PY

rm -f "$OUT"
cd "$SRC"
zip -q -r -X -9 "$OUT" assets config layout locales sections snippets templates \
  -x '*.DS_Store' -x '__MACOSX/*' -x '*/.*'
echo "built $OUT ($(du -k "$OUT" | cut -f1) KB, $(unzip -Z1 "$OUT" | grep -vc '/$') files)"
