from pathlib import Path
import os
import re

ROOT = Path(__file__).resolve().parent.parent
ASSETS_DIR = ROOT / 'sf-symbols'
TEXT_EXTENSIONS = {'.html', '.css', '.js', '.json', '.md', '.txt', '.ts', '.tsx', '.jsx'}

if not ASSETS_DIR.exists():
    raise SystemExit(f'Assets directory not found: {ASSETS_DIR}')

used_names = set()
for path in ROOT.rglob('*'):
    if not path.is_file():
        continue
    if path.suffix.lower() not in TEXT_EXTENSIONS:
        continue
    try:
        text = path.read_text(encoding='utf-8')
    except Exception:
        continue
    for match in re.finditer(r'sf-symbols/([^"\'\s>]+\.svg)', text, re.IGNORECASE):
        used_names.add(match.group(1).split('/')[-1])

all_svg_files = sorted(ASSETS_DIR.glob('*.svg'))
unused_files = [path for path in all_svg_files if path.name not in used_names]

for path in unused_files:
    path.unlink()
    print(f'Removed {path.name}')

print(f'Used SVGs: {len(used_names)}')
print(f'Remaining SVGs: {len(all_svg_files) - len(unused_files)}')
print(f'Removed SVGs: {len(unused_files)}')
