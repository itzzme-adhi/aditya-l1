# Customization guide

## Text, languages and scientific details

All displayed copy is in src/content.json. Edit EN and TA together. The main story uses sections[].en/ta.quick.body and quick.analogy. Add depth to deep.paragraphs; keep quick explanations intact. Instrument copy is in instruments. Phase 6 facts, questions, FAQ and footer labels are in finale.en/ta. A quiz answer is the zero-based index of its correct option (0 is the first option). Keep the same ordering and answer indexes in both languages so switching language preserves answers correctly.

Set defaultLanguage to en or ta. Kiosk inactivity resets to that language and Quick view. Changes appear in npm run dev; run npm run build again before using the expo server or deploying.

For a new unverified scientific claim, add a verification entry with status VERIFY, a factId, reason and source. The included check:build deliberately fails while VERIFY items remain. Resolve it against an authoritative source before the public release. The resolved launch mass is 1,480.7 kg from ISRO's PSLV-C57 brochure.

## Colours and readability

Edit the variables at the beginning of src/styles.css:

```css
:root {
  --bg: #070b14;
  --text: #f5f4ee;
  --muted: #bcc5d5;
  --gold: #ffc77a;
  --cyan: #97e4ed;
}
```

These are the existing defaults. Some 3D materials and specific panels have literal colours; find the matching hex in src/scene.js, rocket.js, orbits.js, satellite.js and styles.css when changing the full palette. Keep bright text on dark cards and test focus outlines, disabled quiz options and Tamil line wrapping. Do not put blur or an opaque panel across the reserved Earth/halo visual column.

Heading fonts are Space Grotesk, body fonts Inter and Tamil Noto Sans Tamil. They are imported from installed @fontsource packages in main.js and bundled locally. Do not replace them with a remote CSS font link if offline use matters.

## Official and college logos

No official logos are supplied. Get authorised image files, create public/logos, and put the files there. For example, if your files are college.png and isro.png, set this existing object in content.json:

```json
"branding": {
  "collegeLogo": "logos/college.png",
  "isroLogo": "logos/isro.png"
}
```

Paths are relative, with no leading slash. Update finale.en.ui and finale.ta.ui keys collegeLogoAlt and isroLogoAlt with meaningful alternative text. Change logoNote in both languages once the files are added. Empty paths or files that fail to load keep the visible placeholders. The build automatically copies public files into dist and adds them to the offline cache.

Use local PNG, WebP or trusted SVG files. Do not hotlink a logo: the offline cache only includes local build assets.

## Kiosk speed and captions

In src/kiosk.js, `dt*65` controls approximate pixels per second. Lower it for slower reading. `60000` is the required idle-reset delay in milliseconds. `3500` is the initial hero hold; `4500` is the end hold. Captions and control labels live in content.json. Keep reduced-motion handling intact. Changing the content length changes the time required for one full loop.

## Optional future replacement with a real GLB model

The delivered build uses procedural geometry only, as requested. A real model is an optional later extension; no model is downloaded or fabricated here. Get a licensed, accurate self-contained GLB with embedded textures. Optimise its geometry and textures for the target laptop. Avoid decoder-dependent compression unless you also bundle the required decoder locally.

The integration contract is in src/satellite.js: createSatellite() returns root, update(state,camera), and project(camera,rect). The main scene calls it synchronously. Preserve this contract, the existing camera fitting, rotation controls and the HTML instrument list.

1. Save the model at public/models/aditya-l1.glb.
2. Import GLTFLoader from `three/addons/loaders/GLTFLoader.js` in satellite.js. The installed Three.js package includes it; no CDN is needed.
3. Keep the procedural spacecraft visible while loading. Start `new GLTFLoader().load(new URL('models/aditya-l1.glb', document.baseURI).href, onLoad, undefined, onError)` inside createSatellite. In onError keep the working procedural model and its hotspots.
4. In onLoad, measure the gltf.scene bounds with THREE.Box3. Centre it and fit its dimensions to the existing roughly 5.4-unit panel span. Place it inside the existing root, so update() continues to control the whole object. Remove and dispose the replaced procedural body meshes only after loading succeeds.
5. Supply seven correctly located anchor objects in model coordinates, ordered VELC, SUIT, SoLEXS, HEL1OS, ASPEX, PAPA, MAG. Update the existing dots/anchors to those locations. Do not reuse schematic coordinates and call them engineering-accurate. project() must still return seven entries with x, y and visible fields.
6. Dispose removed geometries, materials and texture maps, and prevent a late loader callback from attaching a model after the scene is disposed. The current release traversal handles procedural geometries/materials; extend it to dispose imported textures and skeleton resources where applicable.
7. Update modelNote and the instrument descriptions in both languages if the model's documented fidelity changes. Preserve the 2D schematic for WebGL failure.
8. Rebuild so the GLB enters the offline cache. Test startup, rotation, seven markers, phone layout and a complete offline reload. Large models increase first-load and cache size; measure on the actual expo hardware.

This is the integration guide, not a claim that an unprovided GLB has been implemented or validated. Three.js reference: https://threejs.org/docs/#examples/en/loaders/GLTFLoader

## Keep the continuous story stable

Launch pinning must be registered before the journey/halo triggers. Let one GSAP ticker advance Lenis and the renderer. Do not introduce a second animation loop for another WebGL canvas. Use ScrollTrigger.refresh after content-height changes. Keep the pixel-ratio cap, hidden-tab checks, disposal and fallback logic when extending the project.
