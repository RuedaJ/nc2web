# Regenerative Capital Site (Next.js)

Semi-functional MVP with Tailwind, Leaflet (interactive map), Recharts (dashboard), and export scaffolding (PDF/Excel).

## Run locally
```bash
npm i
npm run dev
```

## Deploy on Vercel
1. Push this repo to GitHub.
2. On Vercel, import the repository. Framework preset: **Next.js**.
3. No special build settings needed. ENV keys optional (not required for OSM tiles).

## Notes
- Map tiles: OpenStreetMap (no key). Replace with Mapbox by swapping the TileLayer URL and adding token.
- Export buttons: client-side mock export of current map/dashboard into PDF and Excel.
