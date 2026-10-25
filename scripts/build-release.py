"""Create a static release without audit snapshots, tests, or repository metadata."""
from pathlib import Path
import shutil

root = Path(__file__).resolve().parent.parent
destination = root / 'dist'
destination.mkdir(exist_ok=True)
assets = ('index.html', 'sw.js', 'manifest.json', 'apple-touch-icon.png',
          'og-image.png', 'robots.txt', 'sitemap.xml', 'CNAME', '_headers')
unexpected = {p.name for p in destination.iterdir()} - set(assets)
if unexpected:
    raise SystemExit('Unexpected files in dist; inspect before packaging: ' + ', '.join(sorted(unexpected)))
for asset in assets:
    shutil.copyfile(root / asset, destination / asset)
print(f'Prepared {len(assets)} release files in {destination}')
