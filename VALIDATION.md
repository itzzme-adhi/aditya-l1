# Validation report — Phase 7

## Production build

`npm run build` passed. It generates the Vite bundle and a versioned service worker. `npm run check:build` passed: 55 nonempty local cache entries, bundled fonts, no external HTML/CSS asset references, EN/TA quick and deep layers, seven instruments, thirteen chapters and zero unresolved VERIFY items.

The uncompressed dist folder is approximately 2.4 MB. Its main JavaScript file is approximately 790 kB (219 kB gzip). Vite emits its advisory for a chunk over 500 kB; this is a warning, not a build failure. The fixed stack and fonts are bundled locally.

## Production offline browser checks

Chromium opened the actual dist output through scripts/serve.mjs at both a root URL and /aditya-l1/ on a second local port. External requests were blocked from the first load. Each scope cached 55 files. After the offline-ready message and worker activation, the browser's network was disabled completely and the page navigated again with ?view=2d.

Both root and subfolder checks passed:

- All thirteen story sections loaded from the offline cache.
- EN → Tamil → EN switches worked.
- Tamil Deep dive content and its locally bundled font loaded.
- All seven fallback instrument buttons remained selectable.
- The six-question quiz completed with a score of 6/6 while offline.
- A 390px-wide viewport had no horizontal page overflow.
- Zero page runtime errors and zero external requests were reported.

The reusable test is tests/offline.cjs. It uses a separately installed Playwright/browser, supplied through PLAYWRIGHT_MODULE, CHROMIUM_EXECUTABLE and optional CHROMIUM_ARGS. These are test tools only and are not runtime site dependencies. The environment's lightweight Chromium required multiprocess mode for service-worker testing; after adjusting the test launcher, both scenarios completed successfully.

## Earlier functional checks retained

Phase 6 checks covered normal WebGL startup, WebGL-failure fallback, all instrument controls, wrong-answer feedback, perfect-score confetti, score-card download, retained answers across language changes, keyboard FAQ operation and the Earth glass-blur fix.

Kiosk checks exercised automatic advancement, interaction pause, the 60-second idle reset, end-of-story looping and reduced-motion disabling autoplay. These used an accelerated browser clock. Phase 7 does not change kiosk timing or the Three.js journey.

## Practical limits

- No actual Netlify, Vercel or GitHub Pages account was supplied, so no live deployment or custom domain was created. Configuration files and instructions are included.
- Browser tests do not establish a 60fps guarantee on a mid-range laptop. Run a full-screen rehearsal on the actual projector computer; choose 2D view if it cannot sustain the scene. Pixel ratio is capped, particles are instanced, rendering pauses in hidden tabs and weak-device/failure fallback remains in place.
- Real Safari, iOS and Android hardware were not available in this environment. Confirm touch rotation, native sharing and offline storage on your intended devices.
- A hosted URL needs a completed first online load for offline caching. Private mode, storage eviction or clearing site data can remove that cache. The local expo server works without internet and is the event backup.
- Official logos and a real GLB were not provided. Logo placeholders remain intentional; the GLB guide describes a future optional extension.
- The scientific VERIFY checklist is clear. Visuals are explicitly schematic. Professional/native Tamil editorial approval has not been claimed.
