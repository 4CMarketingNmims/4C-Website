# Mumbai, in place

A mobile-first React Leaflet map of Mumbai with a few starting locations. Select a map marker to open a bottom sheet with details and a directions link.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Create a production build with `npm run build`.

For phone testing, connect your phone to the same Wi-Fi and double-click `start-phone.cmd`. Then open `http://192.168.1.101:5174/` on the phone.

Map tiles are provided by OpenStreetMap. Location data lives in `src/App.jsx`.
