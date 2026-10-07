# Aditya-L1 — Final Phase 7 package

An English / Tamil solar-mission story for Workshop 42 — ISRO Expo. Vite, vanilla JavaScript, procedural Three.js, GSAP/ScrollTrigger, Lenis and self-hosted fonts. All fourteen requested parts are present: thirteen story sections and the footer.

## Run the included finished build

With Node.js installed, open Terminal in this folder and run:

```bash
npm run expo
```

Open http://127.0.0.1:4173/ . For the auto-scrolling exhibit, open http://127.0.0.1:4173/?kiosk=1 . Add `&view=2d` to that URL for the 2D version. The included dist folder lets this work without npm ci or internet. Keep Terminal open. Stop with Ctrl+C.

Start-Expo.command (macOS) and Start-Expo.bat (Windows) run the same server. If macOS will not launch the command file from Finder, run `bash Start-Expo.command` in Terminal. Do not double-click dist/index.html.

## Edit the source

```bash
npm ci
npm run dev
```

The first dependency install needs internet. If the terminal says “vite: command not found”, run npm ci from this folder first. To rebuild for the expo or hosting:

```bash
npm run build
npm run check:build
npm run expo
```

Node.js 22 or newer is recommended. Dependencies are locked in package-lock.json. No CDN or API key is used.

## What is included

- The Sun, labelled rocket stages, Earth-to-L1 journey, five-point Lagrange diagram and halo orbit.
- The satellite viewer with seven instrument buttons and markers, plus why-space, science goals and human benefits.
- Facts, quiz, score sharing/download, FAQ and source credits, all bilingual with additive Deep dive content.
- Expo auto-scroll and looping, visitor pause, 60-second idle reset and large captions.
- Reduced-motion support and 2D fallback for weak devices, WebGL failure or manual selection.
- Production offline caching, generated from the build. The footer reports readiness. New versions wait for old tabs to close.
- Configurations for Netlify, Vercel and GitHub Pages. No live deployment has been made.
- Authorised-logo configuration with clearly marked empty slots. Official logos are not fabricated.

The earlier launch pin/separation corrections and the clear Earth/halo visual column remain included.

## Read next

- DEPLOYMENT.md: offline expo operation, rebuilding, updates and three hosting options.
- CUSTOMIZATION.md: colours, EN/TA text, logos, kiosk speed and optional GLB integration.
- VALIDATION.md: checks and practical limits.
- VERIFY-CHECKLIST.md: factual verification status.
- COMPLETE-CODE.md: every authored source/config/script file in copyable code blocks.
- THIRD-PARTY-LICENSES: bundled font and library notices.

## Important offline details

The local expo server works without internet even on a fresh browser. A hosted site must first be opened online over HTTPS and show the offline-ready message before offline reloads will work. Browser cache can be removed by the browser or user. Keep the local build on the expo laptop as backup. Source links and some native share destinations require connectivity. The site presents educational content, not live mission telemetry.

## Accuracy

No unresolved VERIFY items remain. Launch mass is 1,480.7 kg from the ISRO PSLV-C57 brochure, replacing the brief’s approximate 1,475 kg. All visual models, positions and animation timings are educational schematics. A native Tamil editorial review and a rehearsal on the actual expo devices remain sensible final event checks.
