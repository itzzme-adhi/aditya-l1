# Complete authored code — Phase 7

The ZIP also includes the dependency lockfile, fonts, licenses, documentation and finished dist folder. No source-code placeholders are used; logo slots are intentionally empty until authorised logos are supplied.

## package.json

```json
{
  "name": "aditya-l1-story",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "vite build --base=./ && node scripts/build-offline.mjs",
    "preview": "vite preview --host 0.0.0.0",
    "expo": "node scripts/serve.mjs",
    "check:build": "node scripts/check-build.mjs"
  },
  "dependencies": {
    "@fontsource/inter": "5.2.5",
    "@fontsource/space-grotesk": "5.2.5",
    "@fontsource/noto-sans-tamil": "5.2.5",
    "gsap": "3.13.0",
    "lenis": "1.3.11",
    "three": "0.180.0"
  },
  "devDependencies": {
    "vite": "6.3.6"
  }
}

```

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#070b14" />
    <title></title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>

```

## netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "dist"
[build.environment]
  NODE_VERSION = "22"
[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "no-cache"

```

## vercel.json

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "headers": [{"source":"/sw.js","headers":[{"key":"Cache-Control","value":"no-cache"}]}]
}

```

## Start-Expo.command

```bash
#!/bin/bash
cd -- "$(dirname -- "$0")"
node scripts/serve.mjs

```

## Start-Expo.bat

```bat
@echo off
cd /d "%~dp0"
node scripts\serve.mjs
pause

```

## src/content.json

```json
{
  "schemaVersion": 2,
  "defaultLanguage": "en",
  "languages": [
    {
      "id": "en",
      "label": "EN"
    },
    {
      "id": "ta",
      "label": "தமிழ்"
    }
  ],
  "sources": [
    {
      "id": "isro-overview",
      "url": "https://www.isro.gov.in/ISRO_EN/Aditya_L1.html"
    },
    {
      "id": "isro-orbit",
      "url": "https://www.isro.gov.in/Aditya_L1_Mission_Completion_of_First_Halo_Orbit.html"
    },
    {
      "id": "nasa-weather",
      "url": "https://science.nasa.gov/heliophysics/focus-areas/space-weather/"
    },
    {
      "id": "nasa-effects",
      "url": "https://sdo.gsfc.nasa.gov/mission/spaceweather.php"
    },
    {
      "id": "nasa-processes",
      "url": "https://science.nasa.gov/heliophysics/focus-areas/"
    },
    {
      "id": "isro-flight",
      "url": "https://www.isro.gov.in/media_isro/pdf/AdityaL1_Mission_Brochure.pdf"
    },
    {
      "id": "isro-halo",
      "url": "https://www.isro.gov.in/halo-orbit-insertion-adtya-l1.html"
    },
    {
      "id": "nasa-lagrange",
      "url": "https://science.nasa.gov/solar-system/resources/faq/what-are-lagrange-points/"
    },
    {
      "id": "isro-timeline",
      "url": "https://www.isro.gov.in/Aditya_L1.html?timeline=timeline"
    },
    {
      "id": "isro-payloads",
      "url": "https://www.isro.gov.in/media_isro/pdf/Aditya_L1_Booklet.pdf"
    },
    {
      "id": "iia-velc",
      "url": "https://www.iiap.res.in/projects/velc/"
    },
    {
      "id": "spl-papa",
      "url": "https://www.spl.gov.in/SPLv2/index.php/advanced-technologies/aditya-l1.html"
    },
    {
      "id": "isro-images",
      "url": "https://www.isro.gov.in/SUIT_Aditya-L1_Captures_SolarFlare.html"
    }
  ],
  "verification": [
    {
      "factId": "launch-mass",
      "status": "RESOLVED",
      "value": 1480.7,
      "unit": "kg",
      "reason": "ISRO PSLV-C57 mission brochure, page 2, specifies spacecraft mass 1480.7 kg. This replaces the brief’s approximate 1475 kg.",
      "source": "isro-flight"
    }
  ],
  "ui": {
    "en": {
      "title": "Aditya-L1 — A journey towards understanding our Sun",
      "brand": "ADITYA-L1",
      "edition": "WORKSHOP 42 / ISRO EXPO",
      "skip": "Skip to the story",
      "language": "Choose language",
      "depth": "Choose reading depth",
      "quick": "Quick view",
      "deep": "Deep dive",
      "deeper": "A little deeper",
      "navigation": "Story chapters",
      "progress": "Story progress",
      "loading": "Preparing your journey",
      "ready": "Ready to explore",
      "start": "Begin the journey",
      "scroll": "Scroll to discover",
      "analogy": "Think of it this way",
      "chapter": "CHAPTER",
      "source": "Source: ISRO",
      "footer": "Workshop 42 — ISRO Expo",
      "phase": "PHASE 02 / OUR LIVING STAR",
      "statusQuick": "Quick view selected. Short explanations are visible.",
      "statusDeep": "Deep dive selected. Extra detail is now visible.",
      "statusLanguage": "English selected.",
      "note": "An independent educational experience.",
      "art": "Artist’s impression · not to scale",
      "sourceNASA": "Source: NASA",
      "effects": "A connection to everyday life",
      "sceneDescription": "Illustrated Sun with a glowing orange surface and a field of stars.",
      "staticNotice": "Still illustration. The full story is available below.",
      "flight": "Flight sequence",
      "previous": "Previous event",
      "next": "Next event",
      "allEvents": "Read the complete flight sequence",
      "event": "Event",
      "flightHint": "Scroll to launch, or use the event buttons.",
      "flightArt": "Simplified model · distances and animation speed are not to scale",
      "plannedTime": "Planned time after PS1 ignition",
      "seconds": "seconds",
      "skipFlight": "Skip the launch animation",
      "sun": "Sun",
      "earth": "Earth",
      "pointSelector": "Choose a Lagrange point",
      "diagram": "Sun–Earth Lagrange points, schematic top view. L1 is between the Sun and Earth; L2 beyond Earth; L3 beyond the Sun; L4 ahead of Earth and L5 behind.",
      "diagramNote": "Schematic top view. Sizes and distances are exaggerated for clarity.",
      "routeNote": "Illustrative route, not a flight reconstruction.",
      "journeyStages": "Stages of the journey",
      "haloNote": "Illustrative 3D loop. Scroll to follow the spacecraft; the loop is not to scale.",
      "haloView": "Halo orbit viewing angle",
      "front": "Front view",
      "tilted": "Tilted view",
      "side": "Side view",
      "orbitLabel": "L1 · no physical object here",
      "sourceBoth": "Sources: ISRO and NASA",
      "haloDiagram": "A tilted loop around L1 with a spacecraft marker. L1 is a location, not a planet.",
      "journeyDiagram": "A schematic path from Earth through widening loops towards L1.",
      "viewer": "Explore the satellite",
      "dragHint": "Drag the model to rotate. When this area is focused, use the arrow keys. Choose a numbered marker or an instrument below.",
      "staticHint": "Choose a numbered marker or instrument to explore the schematic.",
      "rotateLeft": "Rotate left",
      "rotateRight": "Rotate right",
      "resetView": "Reset view",
      "instrumentList": "Choose an instrument",
      "openInstrument": "Explore instrument",
      "modelNote": "Teaching model: shapes, instrument positions and sizes are simplified.",
      "memory": "2 cameras + 2 X-ray detectors + 2 particle counters + 1 magnet-meter = 7 eyes",
      "memoryNote": "A memory aid: some instruments do more than take pictures or count particles.",
      "madeIndia": "All seven payloads were developed in India by institutes and ISRO centres working together.",
      "payloadDeep": "How it works",
      "payloadAnalogy": "Think of it this way",
      "continueEarth": "Continue to Earth →"
    },
    "ta": {
      "title": "ஆதித்யா-L1 — நம் சூரியனை அறியும் பயணம்",
      "brand": "ஆதித்யா-L1",
      "edition": "WORKSHOP 42 / இஸ்ரோ கண்காட்சி",
      "skip": "கதைக்குச் செல்லவும்",
      "language": "மொழியைத் தேர்ந்தெடுக்கவும்",
      "depth": "வாசிப்பு அளவைத் தேர்ந்தெடுக்கவும்",
      "quick": "சுருக்கமாக",
      "deep": "விரிவாக",
      "deeper": "இன்னும் கொஞ்சம் தெரிந்துகொள்வோம்",
      "navigation": "கதையின் பகுதிகள்",
      "progress": "வாசிப்பின் முன்னேற்றம்",
      "loading": "உங்கள் பயணம் தயாராகிறது",
      "ready": "பயணத்திற்குத் தயார்",
      "start": "பயணத்தைத் தொடங்குங்கள்",
      "scroll": "கீழே நகர்த்திப் பாருங்கள்",
      "analogy": "இப்படிக் கற்பனை செய்யுங்கள்",
      "chapter": "பகுதி",
      "source": "ஆதாரம்: இஸ்ரோ",
      "footer": "Workshop 42 — இஸ்ரோ கண்காட்சி",
      "phase": "கட்டம் 02 / நம் சூரியன்",
      "statusQuick": "சுருக்கமான விளக்கங்கள் காட்டப்படுகின்றன.",
      "statusDeep": "கூடுதல் விவரங்களும் இப்போது காட்டப்படுகின்றன.",
      "statusLanguage": "தமிழ் தேர்ந்தெடுக்கப்பட்டது.",
      "note": "கல்விக்காக உருவாக்கப்பட்ட தனித்த முயற்சி.",
      "art": "கற்பனைக் காட்சி · அளவுகள் உண்மையான விகிதத்தில் இல்லை",
      "sourceNASA": "ஆதாரம்: நாசா",
      "effects": "அன்றாட வாழ்வுடன் ஒரு தொடர்பு",
      "sceneDescription": "ஒளிரும் ஆரஞ்சு நிறப் பரப்புடன் சூரியனும் பின்னணியில் விண்மீன்களும் கொண்ட விளக்கக் காட்சி.",
      "staticNotice": "நிலையான விளக்கக் காட்சி. முழுக் கதையையும் கீழே படிக்கலாம்.",
      "flight": "ஏவுதல் நிகழ்வுகள்",
      "previous": "முந்தைய நிகழ்வு",
      "next": "அடுத்த நிகழ்வு",
      "allEvents": "முழு ஏவுதல் வரிசையையும் படிக்கவும்",
      "event": "நிகழ்வு",
      "flightHint": "ஏவுதலைக் காண கீழே நகர்த்துங்கள் அல்லது நிகழ்வு பொத்தான்களைப் பயன்படுத்துங்கள்.",
      "flightArt": "எளிய மாதிரி · தொலைவுகளும் அசைவு வேகமும் உண்மையான விகிதத்தில் இல்லை",
      "plannedTime": "PS1 இயக்கம் தொடங்கியதிலிருந்து திட்டமிடப்பட்ட நேரம்",
      "seconds": "விநாடிகள்",
      "skipFlight": "ஏவுதல் அசைவைக் கடந்து செல்லவும்",
      "sun": "சூரியன்",
      "earth": "பூமி",
      "pointSelector": "ஒரு லாக்ராஞ்ச் புள்ளியைத் தேர்ந்தெடுக்கவும்",
      "diagram": "சூரியன்–பூமி லாக்ராஞ்ச் புள்ளிகளின் எளிய மேல்நோக்குக் காட்சி. L1 சூரியனுக்கும் பூமிக்கும் இடையில்; L2 பூமிக்கு அப்பால்; L3 சூரியனுக்கு அப்பால்; L4 பூமிக்கு முன்னால்; L5 பின்னால்.",
      "diagramNote": "எளிய மேல்நோக்குக் காட்சி. தெளிவுக்காக அளவுகளும் இடைவெளிகளும் மாற்றப்பட்டுள்ளன.",
      "routeNote": "விளக்கத்திற்கான பாதை; உண்மையான பறப்புப் பாதையின் மறுஉருவாக்கம் அல்ல.",
      "journeyStages": "பயணத்தின் படிகள்",
      "haloNote": "விளக்கத்திற்கான முப்பரிமாண வளையம். விண்கலத்தைப் பின்தொடர கீழே நகர்த்துங்கள். அளவுகள் உண்மையான விகிதத்தில் இல்லை.",
      "haloView": "ஹேலோ சுற்றுப்பாதையின் பார்வைக் கோணம்",
      "front": "நேர்ப் பார்வை",
      "tilted": "சாய்ந்த பார்வை",
      "side": "பக்கப் பார்வை",
      "orbitLabel": "L1 · இங்கே ஒரு பொருள் இல்லை",
      "sourceBoth": "ஆதாரங்கள்: இஸ்ரோ மற்றும் நாசா",
      "haloDiagram": "L1-ஐச் சுற்றிய சாய்ந்த வளையமும் விண்கலக் குறியீடும். L1 ஒரு இடம்; கோள் அல்ல.",
      "journeyDiagram": "பூமியிலிருந்து விரிவடையும் வளையங்கள் வழியாக L1-ஐ நோக்கிச் செல்லும் எளிய பாதை.",
      "viewer": "விண்கலத்தை ஆராயுங்கள்",
      "dragHint": "மாதிரியை இழுத்துச் சுழற்றுங்கள். இந்தப் பகுதியைத் தேர்ந்தெடுத்தபின் அம்புக்குறி விசைகளையும் பயன்படுத்தலாம். எண் குறியையோ கீழுள்ள கருவியையோ தேர்ந்தெடுங்கள்.",
      "staticHint": "விளக்கப் படத்தில் உள்ள எண் குறியையோ கருவியையோ தேர்ந்தெடுத்து அறியுங்கள்.",
      "rotateLeft": "இடப்புறம் சுழற்று",
      "rotateRight": "வலப்புறம் சுழற்று",
      "resetView": "பார்வையை மீட்டமை",
      "instrumentList": "ஒரு கருவியைத் தேர்ந்தெடுக்கவும்",
      "openInstrument": "கருவியை அறிக",
      "modelNote": "கற்பித்தல் மாதிரி: வடிவங்கள், கருவிகளின் இடங்கள் மற்றும் அளவுகள் எளிமைப்படுத்தப்பட்டுள்ளன.",
      "memory": "2 கேமராக்கள் + 2 X-கதிர் கண்டறிவிகள் + 2 துகள் எண்ணிகள் + 1 காந்தமானி = 7 கண்கள்",
      "memoryNote": "நினைவில் வைக்க உதவும் ஒப்பீடு: சில கருவிகள் படம் எடுப்பதையும் துகள் எண்ணுவதையும் தாண்டிப் பணியாற்றுகின்றன.",
      "madeIndia": "ஏழு கருவிகளும் இந்தியாவில் ஆராய்ச்சி நிறுவனங்களும் இஸ்ரோ மையங்களும் இணைந்து உருவாக்கியவை.",
      "payloadDeep": "இது எப்படிச் செயல்படுகிறது?",
      "payloadAnalogy": "இப்படிக் கற்பனை செய்யுங்கள்",
      "continueEarth": "பூமியுடன் பயணத்தைத் தொடருங்கள் →"
    }
  },
  "sections": [
    {
      "id": "hero",
      "sources": [
        "isro-overview"
      ],
      "facts": [],
      "en": {
        "nav": "Our Sun",
        "eyebrow": "ADITYA-L1 / INDIA’S SOLAR OBSERVATORY",
        "title": "Aditya-L1: India’s First Mission to Study the Sun",
        "quick": {
          "body": "Aditya means Sun (ஆதித்யா). Meet India’s first space-based observatory dedicated to our nearest star.",
          "analogy": "An observatory is a science lookout. This one watches the Sun from space."
        },
        "deep": {
          "paragraphs": [
            "Aditya-L1 studies the Sun and its influence on the space around us. It combines instruments that observe sunlight with instruments that measure the particles and magnetic field near the spacecraft.",
            "A magnetic field is an invisible influence around a magnet. Think of the pattern made by iron filings around a bar magnet."
          ]
        }
      },
      "ta": {
        "nav": "நம் சூரியன்",
        "eyebrow": "ஆதித்யா-L1 / இந்தியாவின் சூரிய ஆய்வகம்",
        "title": "ஆதித்யா-L1: சூரியனை ஆய்வு செய்யும் இந்தியாவின் முதல் விண்வெளித் திட்டம்",
        "quick": {
          "body": "ஆதித்யா என்றால் சூரியன். நமக்கு மிக அருகிலுள்ள விண்மீனை ஆராயும் இந்தியாவின் முதல் விண்வெளி ஆய்வகத்தைச் சந்தியுங்கள்.",
          "analogy": "ஆய்வகம் என்பது அறிவியலுக்கான கண்காணிப்பு இடம். இது விண்வெளியிலிருந்து சூரியனைக் கவனிக்கிறது."
        },
        "deep": {
          "paragraphs": [
            "ஆதித்யா-L1 சூரியனையும், சுற்றியுள்ள விண்வெளியில் அதன் தாக்கத்தையும் ஆராய்கிறது. சில கருவிகள் சூரிய ஒளியைப் பார்க்கின்றன. மற்றவை விண்கலத்திற்கு அருகிலுள்ள துகள்களையும் காந்தப்புலத்தையும் அளக்கின்றன.",
            "காந்தப்புலம் என்பது காந்தத்தைச் சுற்றியுள்ள கண்ணுக்குத் தெரியாத தாக்கம். ஒரு காந்தத்தைச் சுற்றி இரும்புத் துகள்கள் வரிசையாக அமைவதை நினைத்துப் பாருங்கள்."
          ]
        }
      }
    },
    {
      "id": "why-sun",
      "sources": [
        "nasa-weather",
        "nasa-effects",
        "nasa-processes"
      ],
      "facts": [],
      "en": {
        "nav": "Why the Sun?",
        "eyebrow": "SPACE WEATHER. EVERYDAY LIFE.",
        "title": "What happens on the Sun can reach home.",
        "quick": {
          "body": "The Sun sends a steady stream of tiny charged particles into space. We call it the solar wind. Solar storms can disturb satellites, GPS navigation, radio links and, in severe cases, power grids.",
          "analogy": "Space weather is like weather for space. Studying the Sun helps us understand when conditions may become stormy."
        },
        "deep": {
          "paragraphs": [
            "Charged particles carry an electric charge—think of tiny travellers with an electrical identity. The solar wind is a stream of these particles, rather than a breeze made of air.",
            "A coronal mass ejection, or CME, is a huge release of solar material and magnetic field. Think of the Sun sending a great cloud into space. Not every cloud heads towards Earth.",
            "A solar flare is a sudden burst of light and energy, like a bright flash. A flare and a CME are different events, although they can happen together.",
            "GPS is the satellite system that helps your phone find its position—like signposts in the sky. Storms can make its signals less reliable. Mobile services can also be affected indirectly if supporting power or satellite links are disrupted. This does not mean every solar storm will stop ordinary mobile calls.",
            "Aditya-L1 provides observations that help scientists understand this activity. It contributes to research; it is not a promise that every storm can be predicted."
          ]
        },
        "effects": [
          {
            "symbol": "satellite",
            "title": "Satellites",
            "body": "Electronics and satellite operations can be affected."
          },
          {
            "symbol": "location",
            "title": "Finding our way",
            "body": "GPS positions can become less accurate."
          },
          {
            "symbol": "signal",
            "title": "Staying connected",
            "body": "Some radio and satellite links can be disrupted."
          },
          {
            "symbol": "power",
            "title": "Keeping lights on",
            "body": "Severe storms can stress electricity networks."
          }
        ]
      },
      "ta": {
        "nav": "சூரியன் ஏன்?",
        "eyebrow": "விண்வெளி வானிலை. அன்றாட வாழ்க்கை.",
        "title": "சூரியனில் நடப்பது நம் வாழ்வையும் தொடலாம்.",
        "quick": {
          "body": "சூரியனிலிருந்து மின்சுமை கொண்ட சிறிய துகள்கள் தொடர்ந்து விண்வெளியில் பாய்கின்றன. இதுவே சூரியக் காற்று. சூரியப் புயல்கள் செயற்கைக்கோள்கள், GPS வழிகாட்டுதல், வானொலித் தொடர்பு ஆகியவற்றைப் பாதிக்கலாம். மிகக் கடுமையான புயல்கள் மின்வலையையும் பாதிக்கலாம்.",
          "analogy": "விண்வெளிக்கும் ஒரு வானிலை உண்டு என்று நினைத்துப் பாருங்கள். சூரியனை ஆராய்வது, அங்கு எப்போது புயலான சூழல் உருவாகலாம் என்பதைப் புரிந்துகொள்ள உதவுகிறது."
        },
        "deep": {
          "paragraphs": [
            "மின்சுமைத் துகள்கள் என்பவை மின்சாரப் பண்பைக் கொண்ட சிறிய பயணிகள் போன்றவை. சூரியக் காற்று என்பது இந்தத் துகள்களின் ஓட்டம். அது பூமியில் வீசும் காற்றைப் போன்றது அல்ல.",
            "கொரோனல் மாஸ் எஜெக்ஷன் அல்லது CME என்பது சூரியப் பொருளும் காந்தப்புலமும் பெருமளவில் வெளியேறும் நிகழ்வு. சூரியன் விண்வெளிக்குள் ஒரு பெரிய மேகத்தை அனுப்புவதாக நினைத்துக்கொள்ளுங்கள். எல்லா மேகங்களும் பூமியை நோக்கி வருவதில்லை.",
            "சூரியச் சுடர்வெடிப்பு என்பது ஒளியும் ஆற்றலும் திடீரென வெளிப்படும் நிகழ்வு; ஒரு பிரகாசமான மின்னல் போல. இதுவும் CME-யும் வெவ்வேறு நிகழ்வுகள். ஆனால் இரண்டும் ஒரே நேரத்தில் நடக்கலாம்.",
            "GPS என்பது உங்கள் கைப்பேசி இருக்கும் இடத்தைக் கண்டறிய உதவும் செயற்கைக்கோள் அமைப்பு; வானில் உள்ள வழிகாட்டிப் பலகைகள் போல. புயல்கள் அதன் சமிக்ஞைகளின் துல்லியத்தைக் குறைக்கலாம். மின்சாரம் அல்லது செயற்கைக்கோள் இணைப்புகள் பாதிக்கப்பட்டால் கைப்பேசிச் சேவைகளும் மறைமுகமாகப் பாதிக்கப்படலாம். ஒவ்வொரு சூரியப் புயலும் சாதாரண கைப்பேசி அழைப்புகளை நிறுத்திவிடும் என்று இதற்குப் பொருள் இல்லை.",
            "இந்தச் செயல்பாடுகளைப் புரிந்துகொள்ள ஆதித்யா-L1-ன் கண்காணிப்புகள் உதவுகின்றன. இது அறிவியல் ஆராய்ச்சிக்குப் பங்களிக்கிறது. எல்லாப் புயல்களையும் முன்கூட்டியே கணிக்க முடியும் என்ற உறுதி அல்ல."
          ]
        },
        "effects": [
          {
            "symbol": "satellite",
            "title": "செயற்கைக்கோள்கள்",
            "body": "மின்னணுக் கருவிகளும் செயல்பாடுகளும் பாதிக்கப்படலாம்."
          },
          {
            "symbol": "location",
            "title": "வழியைக் கண்டறிதல்",
            "body": "GPS காட்டும் இடத்தின் துல்லியம் குறையலாம்."
          },
          {
            "symbol": "signal",
            "title": "தொடர்பில் இருப்பது",
            "body": "சில வானொலி, செயற்கைக்கோள் இணைப்புகள் தடைப்படலாம்."
          },
          {
            "symbol": "power",
            "title": "மின்சார வசதி",
            "body": "கடுமையான புயல்கள் மின்வலையில் சிக்கல்களை ஏற்படுத்தலாம்."
          }
        ]
      }
    },
    {
      "id": "launch",
      "sources": [
        "isro-flight"
      ],
      "facts": [],
      "en": {
        "nav": "The launch",
        "eyebrow": "PSLV-C57 / A RELAY TO SPACE",
        "title": "A powerful start. A careful handover.",
        "quick": {
          "body": "PSLV is the Polar Satellite Launch Vehicle—India’s rocket for carrying spacecraft into orbit. C57 identifies this flight. Its sections work in turn to send Aditya-L1 on its way. An orbit is a looping path, like a track around Earth.",
          "analogy": "Think of a relay race. Each rocket stage does its part, then hands the job to the next. Leaving used sections behind makes the remaining rocket lighter."
        },
        "deep": {
          "paragraphs": [
            "This sequence follows ISRO’s PSLV-C57 brochure. Times shown here are planned flight-profile values, not measured telemetry. Telemetry is the rocket’s live report card. Scroll time is deliberately compressed and is not a mission clock.",
            "Four ground-lit boosters start just after the main first stage. The other two are air-lit: they start later, while flying. The four ground-lit boosters separate in two pairs.",
            "PS1 and HPS3 use solid propellant; PS2 and PS4 use liquid propellant. Propellant supplies the material for a rocket’s push. Think of solid material packed inside a motor versus liquids supplied from tanks.",
            "The long coast and PS4 restart are part of this mission’s flight profile. Cutting off an engine does not stop the spacecraft: it keeps moving. This teaching sequence groups related booster events and omits smaller control and post-separation operations."
          ]
        }
      },
      "ta": {
        "nav": "ஏவுதல்",
        "eyebrow": "PSLV-C57 / விண்வெளிக்கான தொடர் ஓட்டம்",
        "title": "வலுவான தொடக்கம். கவனமான பொறுப்பு மாற்றம்.",
        "quick": {
          "body": "PSLV என்பது Polar Satellite Launch Vehicle என்பதன் சுருக்கம்; விண்கலங்களைச் சுற்றுப்பாதைக்குக் கொண்டுசெல்லும் இந்திய ராக்கெட். C57 இந்தப் பயணத்தைக் குறிக்கிறது. இதன் பகுதிகள் மாறிமாறிச் செயல்பட்டு ஆதித்யா-L1-ஐ அனுப்புகின்றன. சுற்றுப்பாதை என்பது பூமியைச் சுற்றிய ஓட்டத்தடம் போன்ற ஒரு பாதை.",
          "analogy": "ஒரு தொடர் ஓட்டத்தை நினைத்துப் பாருங்கள். ஒவ்வொரு ராக்கெட் நிலையும் தன் வேலையைச் செய்து அடுத்ததிடம் ஒப்படைக்கிறது. பயன்படுத்திய பகுதிகளை விட்டுச் செல்வதால் மீதமுள்ள ராக்கெட்டின் எடை குறைகிறது."
        },
        "deep": {
          "paragraphs": [
            "இந்த வரிசை இஸ்ரோவின் PSLV-C57 கையேட்டை அடிப்படையாகக் கொண்டது. இங்கு காட்டப்படுவது திட்டமிடப்பட்ட நேரங்கள்; நேரடியாக அளந்த பறப்புத் தரவுகள் அல்ல. நேரடித் தரவு என்பது ராக்கெட் அனுப்பும் உடனடி அறிக்கை போன்றது. திரை அசைவின் நேரம் உண்மையான பயண நேரம் அல்ல.",
            "முதல் நிலைக்குப் பிறகு நான்கு தரைத் தொடக்க உந்திகள் இயக்கப்படுகின்றன. மற்ற இரண்டு உந்திகள் பறக்கும்போது இயக்கப்படுகின்றன. தரைத் தொடக்க உந்திகள் இரண்டு ஜோடிகளாகப் பிரிகின்றன.",
            "PS1 மற்றும் HPS3 திட உந்துபொருளைப் பயன்படுத்துகின்றன. PS2 மற்றும் PS4 திரவ உந்துபொருளைப் பயன்படுத்துகின்றன. உந்துபொருள் ராக்கெட்டிற்குத் தேவையான தள்ளுவிசையை உருவாக்க உதவுகிறது. இயந்திரத்திற்குள் நிரப்பிய திடப் பொருளையும் தொட்டியிலிருந்து வரும் திரவங்களையும் ஒப்பிட்டுப் பாருங்கள்.",
            "நீண்ட நேர இயந்திரமற்ற பயணமும் PS4 மறுதொடக்கமும் இந்தப் பயணத் திட்டத்தின் பகுதிகள். இயந்திரத்தை நிறுத்துவதால் விண்கலம் நின்றுவிடாது. இந்தக் கற்பித்தல் வரிசையில் தொடர்புடைய துணை உந்தி நிகழ்வுகள் சேர்த்துக் காட்டப்படுகின்றன. சிறிய கட்டுப்பாட்டு நிகழ்வுகளும் பிரிந்த பிறகான செயல்பாடுகளும் காட்டப்படவில்லை."
          ]
        }
      }
    },
    {
      "id": "journey",
      "sources": [
        "isro-timeline",
        "isro-orbit"
      ],
      "facts": [
        {
          "id": "l1-distance",
          "value": 1500000,
          "unit": "km",
          "approximate": true,
          "status": "VERIFIED",
          "source": "isro-overview"
        }
      ],
      "en": {
        "nav": "The journey",
        "eyebrow": "EARTH → L1 / A NEW PERSPECTIVE",
        "title": "A long journey. A carefully chosen seat.",
        "quick": {
          "body": "Aditya-L1 travels from Earth to a region about 1.5 million kilometres away, towards the Sun. That is only about 1% of the Earth–Sun distance.",
          "analogy": "Think of joining a highway: first build up speed on the approach, then take the route towards your destination."
        },
        "deep": {
          "paragraphs": [
            "Orbit raising means using engine pushes to stretch the spacecraft’s path around Earth. An orbit is a repeating route around a body, like a track around a playground.",
            "The sphere of influence is a useful boundary for planning a path. Think of changing from a local street map to a regional map. Earth’s gravity continues beyond it.",
            "ISRO reported the spacecraft beyond Earth’s sphere of influence on 30 September 2023. It entered its target halo orbit on 6 January 2024.",
            "Cruise means travelling between major engine manoeuvres. Like a ship between ports, the spacecraft can make smaller course corrections along the way."
          ]
        }
      },
      "ta": {
        "nav": "பயணம்",
        "eyebrow": "பூமி → L1 / ஒரு புதிய பார்வை",
        "title": "ஒரு நீண்ட பயணம். கவனமாகத் தேர்ந்தெடுத்த இடம்.",
        "quick": {
          "body": "பூமியிலிருந்து சூரியனை நோக்கிச் சுமார் 15 லட்சம் கிலோமீட்டர் தொலைவில் உள்ள பகுதிக்கு ஆதித்யா-L1 பயணிக்கிறது. இது பூமி–சூரியன் இடைவெளியில் சுமார் 1% மட்டுமே.",
          "analogy": "நெடுஞ்சாலையில் சேர்வது போல: முதலில் அணுகுபாதையில் தேவையான வேகத்தைப் பெறுங்கள்; பிறகு இலக்கை நோக்கிய பாதையில் செல்லுங்கள்."
        },
        "deep": {
          "paragraphs": [
            "சுற்றுப்பாதையை உயர்த்துதல் என்பது இயந்திர உந்துதல்களால் பூமியைச் சுற்றிய பாதையை விரிவாக்குவது. சுற்றுப்பாதை என்பது விளையாட்டு மைதானத்தைச் சுற்றிய ஓட்டத்தடம் போன்றது.",
            "செல்வாக்கு எல்லை என்பது பயணப் பாதையைக் கணக்கிட உதவும் எல்லை. உள்ளூர் வரைபடத்திலிருந்து பெரிய பகுதியின் வரைபடத்திற்கு மாறுவது போல. இந்த எல்லைக்கு அப்பாலும் பூமியின் ஈர்ப்பு தொடர்கிறது.",
            "2023 செப்டம்பர் 30 அன்று விண்கலம் பூமியின் செல்வாக்கு எல்லையைக் கடந்ததாக இஸ்ரோ தெரிவித்தது. 2024 ஜனவரி 6 அன்று இலக்கு ஹேலோ சுற்றுப்பாதையை அடைந்தது.",
            "முக்கிய இயந்திர இயக்கங்களுக்கு இடையிலான பயணமே நீண்ட பயணக் கட்டம். துறைமுகங்களுக்கு இடையில் செல்லும் கப்பல் போல, வழியில் சிறிய பாதைத் திருத்தங்கள் செய்யலாம்."
          ]
        }
      }
    },
    {
      "id": "lagrange",
      "sources": [
        "nasa-lagrange",
        "isro-overview"
      ],
      "facts": [],
      "en": {
        "nav": "What is L1?",
        "eyebrow": "FIVE SPECIAL PLACES / ONE CLEAR VIEW",
        "title": "A balance that moves with Earth.",
        "quick": {
          "body": "Lagrange points are special locations where gravity and orbital motion fit together. A spacecraft can stay near the same place relative to the Sun and Earth. Aditya-L1’s halo orbit near L1 gives it a continuous view of the Sun without eclipses.",
          "analogy": "Imagine two children pulling a rope from opposite ends. A balanced marker suggests the idea of balance—but L1 is not the midpoint, and the whole Sun–Earth system is moving."
        },
        "deep": {
          "paragraphs": [
            "Gravity is the attraction between objects, like an invisible pull. At L1, the Sun’s pull and Earth’s pull combine to give the motion needed to go around the Sun with Earth. It is not a zero-gravity point.",
            "In a rotating reference frame—a view that turns along with Earth—the five points stay in place. Imagine a camera riding on a merry-go-round.",
            "L1, L2 and L3 are unstable: small departures can grow. L4 and L5 are stable in the ideal Sun–Earth model. Select each point below to compare them."
          ]
        }
      },
      "ta": {
        "nav": "L1 என்றால் என்ன?",
        "eyebrow": "ஐந்து சிறப்பு இடங்கள் / ஒரு தெளிவான பார்வை",
        "title": "பூமியுடன் நகரும் ஒரு சமநிலை.",
        "quick": {
          "body": "ஈர்ப்பும் சுற்றுப்பாதை இயக்கமும் பொருந்தும் சிறப்பு இடங்களே லாக்ராஞ்ச் புள்ளிகள். சூரியன், பூமி ஆகியவற்றை ஒப்பிடும்போது விண்கலம் ஒரே பகுதியின் அருகில் இருக்க முடியும். L1 அருகிலுள்ள ஆதித்யா-L1-ன் ஹேலோ பாதை கிரகணத் தடையின்றி சூரியனைத் தொடர்ந்து பார்க்க உதவுகிறது.",
          "analogy": "இரண்டு குழந்தைகள் ஒரு கயிற்றை எதிரெதிர் முனைகளிலிருந்து இழுப்பதை நினைத்துப் பாருங்கள். சமநிலையிலுள்ள ஒரு குறி இந்த எண்ணத்தை விளக்கலாம். ஆனால் L1 நடுப்புள்ளி அல்ல; முழு சூரியன்–பூமி அமைப்பும் நகர்கிறது."
        },
        "deep": {
          "paragraphs": [
            "ஈர்ப்பு என்பது பொருட்களுக்கு இடையிலான கண்ணுக்குத் தெரியாத இழுப்பு. L1-இல் சூரியன், பூமி ஆகியவற்றின் கூட்டு இழுப்பு விண்கலம் பூமியுடன் சேர்ந்து சூரியனைச் சுற்றத் தேவையான இயக்கத்தைத் தருகிறது. இங்கே ஈர்ப்பு இல்லாமல் போவதில்லை.",
            "பூமியுடன் சேர்ந்து திரும்பும் பார்வையில் இந்த ஐந்து புள்ளிகளும் ஒரே இடத்தில் இருப்பதுபோல் தெரியும். சுற்றும் ராட்டினத்தில் பொருத்திய கேமராவைக் கற்பனை செய்யுங்கள்.",
            "L1, L2, L3 அருகில் சிறிய விலகல்கள் பெரிதாகலாம். எளிய சூரியன்–பூமி மாதிரியில் L4, L5 நிலையானவை. ஒவ்வொரு புள்ளியையும் தேர்ந்தெடுத்து ஒப்பிடுங்கள்."
          ]
        }
      }
    },
    {
      "id": "halo",
      "sources": [
        "isro-halo",
        "nasa-lagrange"
      ],
      "facts": [
        {
          "id": "halo-period",
          "value": 177.86,
          "unit": "Earth days",
          "approximate": true,
          "status": "VERIFIED",
          "source": "isro-halo"
        }
      ],
      "en": {
        "nav": "The halo orbit",
        "eyebrow": "A LOOP IN SPACE / A STEADY WATCH",
        "title": "It keeps moving. And keeps watching.",
        "quick": {
          "body": "Aditya-L1 follows a three-dimensional loop around the L1 region. This is called a halo orbit. L1 is a location in space, not a planet or an object pulling the satellite.",
          "analogy": "Keeping this orbit is like balancing a pencil on your fingertip. Small adjustments stop a tiny drift from growing. These engine corrections are called station-keeping."
        },
        "deep": {
          "paragraphs": [
            "The loop is seen in a view that turns with the Sun–Earth line. The spacecraft is also travelling around the Sun with Earth. Think of walking around a spot on a moving carousel.",
            "ISRO describes the orbit’s period as about 177.86 Earth days. A period is the time for one full loop, like one lap of a track. The animation is sped up and does not reproduce the measured orbit.",
            "Engineers track the spacecraft and plan station-keeping burns. These are brief engine pushes, not continuous engine firing. The chosen halo orbit provides an uninterrupted solar view."
          ]
        }
      },
      "ta": {
        "nav": "ஹேலோ பாதை",
        "eyebrow": "விண்வெளியில் ஒரு வளையம் / தொடர் கண்காணிப்பு",
        "title": "தொடர்ந்து நகர்கிறது. தொடர்ந்து கவனிக்கிறது.",
        "quick": {
          "body": "L1 பகுதியைச் சுற்றிய முப்பரிமாண வளையப் பாதையில் ஆதித்யா-L1 செல்கிறது. இதுவே ஹேலோ சுற்றுப்பாதை. L1 என்பது விண்வெளியில் ஓர் இடம்; விண்கலத்தை இழுக்கும் கோளோ பொருளோ அல்ல.",
          "analogy": "விரல் நுனியில் பென்சிலைச் சமநிலையில் வைத்திருப்பது போல. சிறிய சரிசெய்தல்கள் விலகல் பெரிதாவதைத் தடுக்கின்றன. இத்தகைய இயந்திரப் பாதைத் திருத்தங்களே நிலைப்பராமரிப்பு."
        },
        "deep": {
          "paragraphs": [
            "சூரியன்–பூமி வரியுடன் திரும்பும் பார்வையில் இந்த வளையம் தெரிகிறது. விண்கலம் பூமியுடன் சேர்ந்து சூரியனையும் சுற்றுகிறது. நகரும் ராட்டினத்தில் ஓர் இடத்தைச் சுற்றி நடப்பதை நினைத்துப் பாருங்கள்.",
            "ஒரு முழுச் சுற்றுக்குச் சுமார் 177.86 பூமி நாட்கள் ஆகும் என்று இஸ்ரோ குறிப்பிடுகிறது. ஒரு சுற்றுக்காலம் என்பது ஓட்டத்தடத்தில் ஒரு முழுச் சுற்று வர எடுக்கும் நேரம் போன்றது. இந்த அசைவு விரைவுபடுத்தப்பட்டது; அளந்த உண்மைப் பாதையின் மறுஉருவாக்கம் அல்ல.",
            "பொறியாளர்கள் விண்கலத்தைக் கண்காணித்துப் பாதைத் திருத்தங்களைத் திட்டமிடுகின்றனர். இவை குறுகிய இயந்திர உந்துதல்கள்; தொடர்ச்சியான இயக்கம் அல்ல. தேர்ந்தெடுத்த ஹேலோ பாதை சூரியனைத் தடையின்றிப் பார்க்க உதவுகிறது."
          ]
        }
      }
    },
    {
      "id": "satellite",
      "sources": [
        "isro-payloads"
      ],
      "facts": [],
      "en": {
        "nav": "Seven instruments",
        "eyebrow": "ONE SPACECRAFT / SEVEN WAYS TO DISCOVER",
        "title": "Meet the Sun’s seven eyes.",
        "quick": {
          "body": "A payload is a scientific instrument carried by a spacecraft. Aditya-L1 carries seven, each asking a different question.",
          "analogy": "Like a science kit: a camera, a particle counter and a magnetic-field meter notice different things."
        },
        "deep": {
          "paragraphs": [
            "Four instruments look towards the Sun. Three sample particles and magnetic fields near the spacecraft. Together they connect distant activity to local conditions."
          ]
        }
      },
      "ta": {
        "nav": "ஏழு கருவிகள்",
        "eyebrow": "ஒரு விண்கலம் / ஏழு ஆய்வு வழிகள்",
        "title": "சூரியனை அறியும் ஏழு கண்கள்.",
        "quick": {
          "body": "விண்கலம் எடுத்துச் செல்லும் அறிவியல் கருவியே ஆய்வுப் பயன்சுமை. ஆதித்யா-L1-இல் ஏழு கருவிகள் உள்ளன. ஒவ்வொன்றும் வேறொரு கேள்விக்கு விடை தேடுகிறது.",
          "analogy": "அறிவியல் கருவிப்பெட்டி போல: கேமரா, துகள் எண்ணி, காந்தமானி ஆகியவை வெவ்வேறு தகவல்களைத் தருகின்றன."
        },
        "deep": {
          "paragraphs": [
            "நான்கு கருவிகள் சூரியனை நோக்கிக் கவனிக்கின்றன. மூன்று கருவிகள் விண்கலத்தின் அருகிலுள்ள துகள்களையும் காந்தப்புலத்தையும் அளக்கின்றன. இவை தொலைவிலுள்ள செயல்பாட்டையும் அருகிலுள்ள சூழலையும் இணைத்துப் புரிந்துகொள்ள உதவுகின்றன."
          ]
        }
      }
    },
    {
      "id": "why-space",
      "sources": [
        "isro-payloads"
      ],
      "facts": [],
      "en": {
        "nav": "Why space?",
        "eyebrow": "ABOVE OUR PROTECTIVE SKY",
        "title": "To see more, go beyond the air.",
        "quick": {
          "body": "Earth’s atmosphere blocks X-rays and much ultraviolet light. Its magnetic field redirects many charged particles. To sample the solar wind and observe these kinds of light clearly, these instruments work in space.",
          "analogy": "Our planet wears a protective coat. It helps keep us safe, but hides some of the signals scientists want to study."
        },
        "deep": {
          "paragraphs": [
            "Not all ultraviolet light is blocked; some reaches the ground. The atmosphere and magnetic field protect us in different ways.",
            "Space instruments can detect light absorbed by air and sample the solar wind outside Earth’s magnetic surroundings. Ground-based solar telescopes are still valuable; different observations complement each other."
          ]
        }
      },
      "ta": {
        "nav": "விண்வெளி ஏன்?",
        "eyebrow": "நம்மைக் காக்கும் வானுக்கு அப்பால்",
        "title": "மேலும் காண, காற்றைக் கடந்து செல்லுங்கள்.",
        "quick": {
          "body": "பூமியின் வளிமண்டலம் X-கதிர்களையும் பெருமளவு புறஊதா ஒளியையும் தடுக்கிறது. அதன் காந்தப்புலம் பல மின்சுமைத் துகள்களின் பாதையை மாற்றுகிறது. இவற்றைத் தெளிவாகக் கவனிக்கவும் சூரியக் காற்றை அளக்கவும் இந்தக் கருவிகள் விண்வெளியில் இயங்குகின்றன.",
          "analogy": "பூமி ஒரு பாதுகாப்பு மேலங்கியை அணிந்திருப்பது போல. அது நம்மைக் காக்கிறது; ஆனால் அறிவியலாளர்கள் தேடும் சில சமிக்ஞைகளை மறைக்கிறது."
        },
        "deep": {
          "paragraphs": [
            "எல்லாப் புறஊதா ஒளியும் தடுக்கப்படுவதில்லை; சில தரையை அடைகின்றன. வளிமண்டலமும் காந்தப்புலமும் வெவ்வேறு வழிகளில் நம்மைப் பாதுகாக்கின்றன.",
            "காற்றால் தடுக்கப்படும் ஒளியையும் பூமியின் காந்தச் சூழலுக்கு வெளியேயுள்ள சூரியக் காற்றையும் விண்வெளிக் கருவிகள் அளக்க முடியும். தரையிலுள்ள சூரியத் தொலைநோக்கிகளும் பயனுள்ளவை. வெவ்வேறு கண்காணிப்புகள் ஒன்றுக்கொன்று உதவுகின்றன."
          ]
        }
      }
    },
    {
      "id": "science",
      "sources": [
        "isro-flight"
      ],
      "facts": [],
      "en": {
        "nav": "Science goals",
        "eyebrow": "FIVE QUESTIONS / A STAR FULL OF CLUES",
        "title": "Big questions. Careful measurements.",
        "quick": {
          "body": "Aditya-L1 collects evidence to help explain how the Sun’s outer layers behave and influence space around us.",
          "analogy": "Like detectives comparing clues, scientists combine different instruments rather than relying on a single picture."
        },
        "deep": {
          "paragraphs": [
            "The corona is the Sun’s outer atmosphere. Solar atmosphere dynamics means how its layers move and change—like tracking winds and clouds, but in hot charged gas.",
            "Temperature is related to the random motion of particles. Different motion along and across a magnetic field can give different temperatures by direction; this is not simply one side of the Sun being hotter than another."
          ]
        },
        "effects": [
          {
            "symbol": "power",
            "title": "Why is the corona so hot?",
            "body": "The outer atmosphere is hotter than the surface below. How does energy reach it? Like asking why the air above a stove could be hotter than the stove."
          },
          {
            "symbol": "signal",
            "title": "How does solar wind speed up?",
            "body": "What accelerates particles away from the Sun? Like finding what pushes a flowing stream faster."
          },
          {
            "symbol": "satellite",
            "title": "How do CMEs begin?",
            "body": "Study huge releases of solar material and magnetic field. Like tracing a storm back to its first signs."
          },
          {
            "symbol": "location",
            "title": "How do solar layers change?",
            "body": "Follow motion and energy between atmospheric layers. Like watching weather at different heights."
          },
          {
            "symbol": "power",
            "title": "Does direction change temperature?",
            "body": "Anisotropy means direction matters. Particles can have different thermal motion along and across a magnetic field—like a crowd moving more freely one way."
          }
        ]
      },
      "ta": {
        "nav": "அறிவியல் நோக்கங்கள்",
        "eyebrow": "ஐந்து கேள்விகள் / தடயங்கள் நிறைந்த விண்மீன்",
        "title": "பெரிய கேள்விகள். கவனமான அளவீடுகள்.",
        "quick": {
          "body": "சூரியனின் வெளிப்புற அடுக்குகள் எவ்வாறு செயல்படுகின்றன, சுற்றியுள்ள விண்வெளியை எவ்வாறு பாதிக்கின்றன என்பதை விளக்க ஆதித்யா-L1 தரவுகளைச் சேகரிக்கிறது.",
          "analogy": "தடயங்களை ஒப்பிடும் துப்பறிவாளர்கள் போல, அறிவியலாளர்கள் ஒரே படத்தை மட்டும் நம்பாமல் பல கருவிகளின் தகவல்களை இணைக்கின்றனர்."
        },
        "deep": {
          "paragraphs": [
            "கொரோனா சூரியனின் வெளிப்புற வளிமண்டலம். அதன் அடுக்குகள் எவ்வாறு நகர்ந்து மாறுகின்றன என்பதை ஆராய்வதே வளிமண்டல இயக்கவியல்; சூடான மின்சுமை வாயுவில் காற்றையும் மேகங்களையும் கண்காணிப்பது போன்றது.",
            "வெப்பநிலை துகள்களின் ஒழுங்கற்ற இயக்கத்துடன் தொடர்புடையது. காந்தப்புலத் திசையிலும் குறுக்காகவும் வேறுபட்ட இயக்கம், திசைக்கு ஏற்ப வேறுபட்ட வெப்பநிலைகளைத் தரலாம். சூரியனின் ஒரு பக்கம் மற்றதைவிடச் சூடாக இருப்பதை மட்டும் இது குறிக்கவில்லை."
          ]
        },
        "effects": [
          {
            "symbol": "power",
            "title": "கொரோனா ஏன் இவ்வளவு சூடாக உள்ளது?",
            "body": "வெளிப்புற வளிமண்டலம் கீழுள்ள பரப்பைவிடச் சூடானது. ஆற்றல் அங்கே எப்படிச் செல்கிறது? அடுப்பைவிட மேலுள்ள காற்று சூடாக இருந்தால் ஏன் என்று கேட்பது போல."
          },
          {
            "symbol": "signal",
            "title": "சூரியக் காற்றின் வேகம் எப்படி அதிகரிக்கிறது?",
            "body": "சூரியனிலிருந்து துகள்களை வேகமாகச் செலுத்துவது எது? ஓடையின் வேகத்தை அதிகரிக்கும் காரணத்தைத் தேடுவது போல."
          },
          {
            "symbol": "satellite",
            "title": "CME எப்படித் தொடங்குகிறது?",
            "body": "சூரியப் பொருளும் காந்தப்புலமும் பெருமளவில் வெளியேறுவதை ஆராய்தல். புயலின் முதல் அறிகுறிகளைத் தேடுவது போல."
          },
          {
            "symbol": "location",
            "title": "சூரிய அடுக்குகள் எப்படி மாறுகின்றன?",
            "body": "வளிமண்டல அடுக்குகளுக்கு இடையிலான இயக்கத்தையும் ஆற்றலையும் ஆராய்தல். வெவ்வேறு உயரங்களில் வானிலையைக் கவனிப்பது போல."
          },
          {
            "symbol": "power",
            "title": "திசைக்கு ஏற்ப வெப்பநிலை மாறுமா?",
            "body": "திசையைப் பொறுத்துப் பண்புகள் மாறுவதே அனிசோட்ரோபி. காந்தப்புலத்தின் திசையிலும் குறுக்காகவும் துகள்களின் வெப்ப இயக்கம் வேறுபடலாம்; ஒரு திசையில் எளிதாக நகரும் கூட்டம் போல."
          }
        ]
      }
    },
    {
      "id": "matters",
      "sources": [
        "nasa-weather"
      ],
      "facts": [],
      "en": {
        "nav": "Why it matters",
        "eyebrow": "FROM OUR STAR / TO OUR EVERYDAY LIVES",
        "title": "Understanding the Sun helps us prepare.",
        "quick": {
          "body": "Better knowledge of space weather supports efforts to protect satellites, navigation, communications and power networks. It also grows India’s space-science capability and invites the next generation to ask bigger questions.",
          "analogy": "Like learning to read the sky before planning a journey, understanding the Sun helps people make better-informed choices."
        },
        "deep": {
          "paragraphs": [
            "Research improves understanding over time. Aditya-L1 does not shield Earth, switch off storms or guarantee an exact warning for every event.",
            "Building instruments, analysing data and asking new questions train people as well as advance science. A student at this expo could become part of that work."
          ]
        }
      },
      "ta": {
        "nav": "நமக்கு ஏன் முக்கியம்?",
        "eyebrow": "நம் விண்மீனிலிருந்து / நம் அன்றாட வாழ்வுக்கு",
        "title": "சூரியனை அறிவது தயாராக இருக்க உதவுகிறது.",
        "quick": {
          "body": "விண்வெளி வானிலையை நன்கு அறிவது செயற்கைக்கோள்கள், வழிகாட்டுதல், தகவல்தொடர்பு மற்றும் மின்வலையைப் பாதுகாக்கும் முயற்சிகளுக்கு உதவுகிறது. இந்தியாவின் விண்வெளி அறிவியலையும் வளர்த்து, அடுத்த தலைமுறையைப் பெரிய கேள்விகள் கேட்க அழைக்கிறது.",
          "analogy": "பயணத்தைத் திட்டமிடுமுன் வானிலையை அறிந்துகொள்வது போல, சூரியனைப் புரிந்துகொள்வது தகவலறிந்த முடிவுகளுக்கு உதவுகிறது."
        },
        "deep": {
          "paragraphs": [
            "ஆராய்ச்சி காலப்போக்கில் புரிதலை மேம்படுத்துகிறது. ஆதித்யா-L1 பூமிக்குக் கவசம் அமைப்பதோ புயல்களை நிறுத்துவதோ எல்லா நிகழ்வுகளுக்கும் துல்லிய எச்சரிக்கை தருவதாக உறுதியளிப்பதோ இல்லை.",
            "கருவிகளை உருவாக்குதல், தரவுகளை ஆராய்தல், புதிய கேள்விகளைக் கேட்டல் ஆகியவை அறிவியலுடன் மனிதர்களின் திறனையும் வளர்க்கின்றன. இந்தக் கண்காட்சிக்கு வரும் மாணவரும் அந்தப் பணியில் பங்கேற்கலாம்."
          ]
        }
      }
    },
    {
      "id": "facts",
      "sources": [
        "isro-flight"
      ],
      "en": {
        "eyebrow": "MISSION SNAPSHOT",
        "title": "Small numbers. A big adventure.",
        "nav": "Quick facts",
        "quick": {
          "body": "Six anchors to remember the story. Distances are approximate.",
          "analogy": "Like the details on a travel ticket: the vehicle, destination and departure date."
        },
        "deep": {
          "paragraphs": [
            "Payload means a scientific instrument carried by the spacecraft, like a tool in an explorer’s backpack.",
            "Launch mass includes the spacecraft and its fuel. The PSLV-C57 brochure specifies 1,480.7 kg. L1 is a region in space; the spacecraft follows a halo orbit around it."
          ]
        }
      },
      "ta": {
        "eyebrow": "பயணத்தின் சுருக்கம்",
        "title": "சில எண்கள். ஒரு பெரிய பயணம்.",
        "nav": "முக்கிய தகவல்கள்",
        "quick": {
          "body": "இந்தப் பயணத்தை நினைவில் கொள்ள ஆறு தகவல்கள். தூரங்கள் தோராயமானவை.",
          "analogy": "பயணச்சீட்டில் உள்ள வாகனம், செல்லும் இடம், புறப்படும் நாள் போன்ற தகவல்கள்."
        },
        "deep": {
          "paragraphs": [
            "அறிவியல் கருவி என்பது விண்கலத்தில் எடுத்துச் செல்லப்படும் ஆய்வுக் கருவி. பயணியின் பையில் இருக்கும் உதவிக் கருவி போன்றது.",
            "ஏவும்போதைய நிறையில் விண்கலமும் எரிபொருளும் அடங்கும். PSLV-C57 கையேடு 1,480.7 கிலோ என்று குறிப்பிடுகிறது. L1 ஒரு விண்வெளிப் பகுதி. விண்கலம் அதைச் சுற்றி வளையப் பாதையில் இயங்குகிறது."
          ]
        }
      }
    },
    {
      "id": "quiz",
      "sources": [
        "isro-overview"
      ],
      "en": {
        "eyebrow": "YOUR TURN",
        "title": "How much Sun do you know?",
        "nav": "Quiz",
        "quick": {
          "body": "Six questions. No timer. Every answer teaches you something.",
          "analogy": "Think of this as a friendly checkpoint on your space journey."
        },
        "deep": {
          "paragraphs": [
            "Try answering before returning to the story. Your first answer counts, and the explanation helps you learn.",
            "You can restart at any time. Your answers stay in this open page only; no account or personal details are needed."
          ]
        }
      },
      "ta": {
        "eyebrow": "உங்கள் முறை",
        "title": "சூரியனைப் பற்றி எவ்வளவு தெரியும்?",
        "nav": "வினாடி வினா",
        "quick": {
          "body": "ஆறு கேள்விகள். நேரக் கட்டுப்பாடு இல்லை. ஒவ்வொரு பதிலும் புதிதாகக் கற்றுத் தரும்.",
          "analogy": "விண்வெளிப் பயணத்தில் ஒரு நட்பான நினைவூட்டல் என்று நினைத்துக் கொள்ளுங்கள்."
        },
        "deep": {
          "paragraphs": [
            "கதையை மீண்டும் படிக்கும் முன் பதில் சொல்லிப் பாருங்கள். முதல் பதிலே மதிப்பெண்ணுக்கு எடுத்துக்கொள்ளப்படும். விளக்கம் கற்றுக்கொள்ள உதவும்.",
            "எப்போது வேண்டுமானாலும் மீண்டும் தொடங்கலாம். பதில்கள் திறந்திருக்கும் இந்தப் பக்கத்தில் மட்டும் இருக்கும். கணக்கும் தனிப்பட்ட தகவலும் தேவையில்லை."
          ]
        }
      }
    },
    {
      "id": "faq",
      "sources": [
        "isro-overview"
      ],
      "en": {
        "eyebrow": "KEEP ASKING",
        "title": "Curiosity belongs here.",
        "nav": "Questions",
        "quick": {
          "body": "Big questions are welcome. Start with one.",
          "analogy": "Every question opens another window onto the Sun."
        },
        "deep": {
          "paragraphs": [
            "These answers describe the purpose and design of the mission. This exhibit does not display live spacecraft telemetry — the engineering updates sent home by the spacecraft."
          ]
        }
      },
      "ta": {
        "eyebrow": "தொடர்ந்து கேளுங்கள்",
        "title": "ஆர்வத்திற்கு இங்கே இடம் உண்டு.",
        "nav": "கேள்விகள்",
        "quick": {
          "body": "எந்தக் கேள்வியாக இருந்தாலும் கேளுங்கள். ஒன்றிலிருந்து தொடங்கலாம்.",
          "analogy": "ஒவ்வொரு கேள்வியும் சூரியனை அறிய ஒரு புதிய சாளரம்."
        },
        "deep": {
          "paragraphs": [
            "இந்தப் பதில்கள் திட்டத்தின் நோக்கத்தையும் வடிவமைப்பையும் விளக்குகின்றன. விண்கலம் அனுப்பும் நேரடி பொறியியல் தகவல்கள் இங்கே காட்டப்படவில்லை."
          ]
        }
      }
    }
  ],
  "launchEvents": [
    {
      "id": "liftoff",
      "plannedSeconds": "0–0.62",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "PS1 + four boosters start",
        "body": "The main first-stage motor and four side boosters begin the lift. Boosters are extra helpers for the heavy start."
      },
      "ta": {
        "title": "PS1 + நான்கு துணை உந்திகள் தொடங்குகின்றன",
        "body": "முதல் நிலையின் முதன்மை உந்தியும் நான்கு பக்க உந்திகளும் உயர்த்தத் தொடங்குகின்றன. கனமான தொடக்கச் சுமையைத் தூக்க உதவும் கூடுதல் உதவியாளர்களே துணை உந்திகள்."
      }
    },
    {
      "id": "air-lit",
      "plannedSeconds": "25.0",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "Two more boosters light",
        "body": "The two remaining side boosters start while the rocket is already flying."
      },
      "ta": {
        "title": "மேலும் இரண்டு உந்திகள் இயங்குகின்றன",
        "body": "ராக்கெட் பறந்துகொண்டிருக்கும்போது மீதமுள்ள இரண்டு பக்க உந்திகள் இயக்கப்படுகின்றன."
      }
    },
    {
      "id": "ground-separation",
      "plannedSeconds": "69.9–70.1",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "Four boosters leave",
        "body": "The four boosters lit near the ground detach in pairs. Empty helpers need not travel further."
      },
      "ta": {
        "title": "நான்கு உந்திகள் பிரிகின்றன",
        "body": "தரைக்கு அருகில் இயக்கப்பட்ட நான்கு துணை உந்திகள் ஜோடிகளாகப் பிரிகின்றன. வேலை முடிந்த உதவியாளர்களை இனியும் சுமக்கத் தேவையில்லை."
      }
    },
    {
      "id": "air-separation",
      "plannedSeconds": "92.0",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "The last two boosters leave",
        "body": "The two boosters started in flight now detach too."
      },
      "ta": {
        "title": "மீதமுள்ள இரண்டு உந்திகளும் பிரிகின்றன",
        "body": "பறக்கும்போது இயக்கப்பட்ட இரண்டு துணை உந்திகளும் இப்போது பிரிகின்றன."
      }
    },
    {
      "id": "ps1-separation",
      "plannedSeconds": "109.40",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "PS1 hands over",
        "body": "The first stage separates. A stage is one section of the rocket with its own propulsion—like one runner in a relay."
      },
      "ta": {
        "title": "PS1 பொறுப்பை ஒப்படைக்கிறது",
        "body": "முதல் நிலை பிரிகிறது. நிலை என்பது தனக்கென உந்து அமைப்பைக் கொண்ட ராக்கெட்டின் பகுதி; தொடர் ஓட்டத்தில் ஒரு வீரரைப் போல."
      }
    },
    {
      "id": "ps2-ignition",
      "plannedSeconds": "109.60",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "PS2 takes the lead",
        "body": "The second-stage engine starts. The next runner takes over."
      },
      "ta": {
        "title": "PS2 பொறுப்பை ஏற்கிறது",
        "body": "இரண்டாம் நிலையின் இயந்திரம் இயக்கப்படுகிறது. அடுத்த வீரர் ஓட்டத்தைத் தொடர்கிறார்."
      }
    },
    {
      "id": "fairing-separation",
      "plannedSeconds": "204.40",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "The protective cover opens",
        "body": "The heat shield, or fairing, splits away. It is like a helmet that protected the spacecraft during the climb through thick air."
      },
      "ta": {
        "title": "பாதுகாப்புக் கவசம் திறக்கிறது",
        "body": "வெப்பக் கவசம் பிரிகிறது. அடர்த்தியான காற்றைக் கடக்கும்போது விண்கலத்தைப் பாதுகாத்த தலைக்கவசம் போன்றது இது."
      }
    },
    {
      "id": "ps2-separation",
      "plannedSeconds": "262.38",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "PS2 separates",
        "body": "The second stage has finished its job and detaches."
      },
      "ta": {
        "title": "PS2 பிரிகிறது",
        "body": "இரண்டாம் நிலை தன் பணியை முடித்துப் பிரிகிறது."
      }
    },
    {
      "id": "ps3-ignition",
      "plannedSeconds": "263.58",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "HPS3 starts",
        "body": "The third stage lights. HPS3 is its name in the mission brochure."
      },
      "ta": {
        "title": "HPS3 இயங்கத் தொடங்குகிறது",
        "body": "மூன்றாம் நிலை இயக்கப்படுகிறது. திட்டக் கையேட்டில் இதன் பெயர் HPS3."
      }
    },
    {
      "id": "ps3-separation",
      "plannedSeconds": "581.42",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "HPS3 separates",
        "body": "The third stage detaches after its work. The upper stage and spacecraft coast onward. Coasting is moving without an engine firing."
      },
      "ta": {
        "title": "HPS3 பிரிகிறது",
        "body": "மூன்றாம் நிலை பணி முடிந்து பிரிகிறது. மேல்நிலையும் விண்கலமும் தொடர்ந்து நகர்கின்றன. இயந்திரம் இயங்காமலும் ஏற்கெனவே பெற்ற வேகத்தில் நகர முடியும்."
      }
    },
    {
      "id": "ps4-first",
      "plannedSeconds": "1493.52",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "PS4: first engine burn",
        "body": "The fourth stage fires for the first time. A burn is an engine-powered push."
      },
      "ta": {
        "title": "PS4: முதல் இயக்கம்",
        "body": "நான்காம் நிலை முதல் முறையாக இயக்கப்படுகிறது. இயந்திர இயக்கம் விண்கலத்திற்கு ஓர் உந்துதலை அளிக்கிறது."
      }
    },
    {
      "id": "ps4-first-cutoff",
      "plannedSeconds": "1523.38",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "PS4 pauses",
        "body": "The engines stop after the first burn. The rocket continues moving during a coast."
      },
      "ta": {
        "title": "PS4 இடைநிறுத்தம்",
        "body": "முதல் இயக்கத்திற்குப் பிறகு இயந்திரங்கள் நிறுத்தப்படுகின்றன. ராக்கெட் தொடர்ந்து நகர்கிறது."
      }
    },
    {
      "id": "ps4-second",
      "plannedSeconds": "3127.52",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "PS4: second engine burn",
        "body": "The fourth stage restarts. This second push shapes the intended Earth orbit."
      },
      "ta": {
        "title": "PS4: இரண்டாம் இயக்கம்",
        "body": "நான்காம் நிலை மீண்டும் இயக்கப்படுகிறது. இந்த இரண்டாவது உந்துதல் பூமியைச் சுற்றும் இலக்குப் பாதையை அமைக்க உதவுகிறது."
      }
    },
    {
      "id": "ps4-second-cutoff",
      "plannedSeconds": "3599.52",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "PS4 finishes",
        "body": "The engines shut down again. The powered part of the launch is complete."
      },
      "ta": {
        "title": "PS4 பணியை முடிக்கிறது",
        "body": "இயந்திரங்கள் மீண்டும் நிறுத்தப்படுகின்றன. ஏவுதலின் உந்துதல் பகுதி முடிவடைகிறது."
      }
    },
    {
      "id": "satellite-separation",
      "plannedSeconds": "3799.52",
      "status": "VERIFIED",
      "source": "isro-flight",
      "en": {
        "title": "Aditya-L1 flies free",
        "body": "The spacecraft separates from the rocket. Its longer journey towards L1 comes next."
      },
      "ta": {
        "title": "ஆதித்யா-L1 தனியே பயணிக்கிறது",
        "body": "விண்கலம் ராக்கெட்டிலிருந்து பிரிகிறது. L1-ஐ நோக்கிய நீண்ட பயணம் அடுத்து தொடங்குகிறது."
      }
    }
  ],
  "lagrangePoints": [
    {
      "id": "L1",
      "en": {
        "title": "A clear view of the Sun",
        "quick": "Between Earth and the Sun. Aditya-L1 loops around this region to keep watching our star.",
        "deep": "At L1, the combined gravity of the Sun and Earth lets a spacecraft keep pace with Earth around the Sun. The gravitational pulls do not simply cancel."
      },
      "ta": {
        "title": "சூரியனின் தெளிவான காட்சி",
        "quick": "பூமிக்கும் சூரியனுக்கும் இடையில் உள்ளது. நம் சூரியனைத் தொடர்ந்து கவனிக்க ஆதித்யா-L1 இந்தப் பகுதியைச் சுற்றுகிறது.",
        "deep": "L1-இல் சூரியன், பூமி ஆகியவற்றின் கூட்டு ஈர்ப்பு விண்கலம் பூமியுடன் சேர்ந்து சூரியனைச் சுற்ற உதவுகிறது. இரு ஈர்ப்பு விசைகளும் வெறுமனே ஒன்றையொன்று நீக்குவதில்லை."
      }
    },
    {
      "id": "L2",
      "en": {
        "title": "Beyond Earth",
        "quick": "On the far side of Earth from the Sun. It is a different observing location, not Aditya-L1’s home.",
        "deep": "Like L1, L2 needs course corrections for spacecraft to stay nearby."
      },
      "ta": {
        "title": "பூமிக்கு அப்பால்",
        "quick": "சூரியனுக்கு எதிர்ப்புறத்தில் பூமிக்கு அப்பால் உள்ளது. இது வேறு ஒரு கண்காணிப்பு இடம்; ஆதித்யா-L1-ன் இருப்பிடம் அல்ல.",
        "deep": "L1 போலவே, L2-க்கு அருகில் இருக்கவும் விண்கலங்களுக்குப் பாதைத் திருத்தங்கள் தேவை."
      }
    },
    {
      "id": "L3",
      "en": {
        "title": "Beyond the Sun",
        "quick": "On the opposite side of the Sun from Earth.",
        "deep": "L3 lies on the Sun–Earth line and is unstable: a small drift tends to grow. Think of a ball balanced on a ridge."
      },
      "ta": {
        "title": "சூரியனுக்கு அப்பால்",
        "quick": "பூமிக்கு எதிர்ப்புறத்தில் சூரியனுக்கு அப்பால் உள்ளது.",
        "deep": "L3 சூரியன்–பூமி வரியில் உள்ளது. இங்கே சிறிய விலகல் பெரிதாகலாம்; ஒரு மேட்டின் உச்சியில் சமநிலையில் இருக்கும் பந்து போல."
      }
    },
    {
      "id": "L4",
      "en": {
        "title": "Ahead of Earth",
        "quick": "Ahead of Earth in its trip around the Sun.",
        "deep": "In the ideal Sun–Earth model, L4 makes an equilateral triangle with the Sun and Earth: all three sides are equal. It is more stable than L1, like a marble near the bottom of a bowl."
      },
      "ta": {
        "title": "பூமிக்கு முன்னால்",
        "quick": "சூரியனைச் சுற்றும் பயணத்தில் பூமிக்கு முன்னால் உள்ளது.",
        "deep": "எளிய சூரியன்–பூமி மாதிரியில், L4 அவற்றுடன் சமபக்க முக்கோணத்தை உருவாக்குகிறது; மூன்று பக்கங்களும் சமம். L1-ஐவிட இது நிலையானது; கிண்ணத்தின் அடியில் இருக்கும் கோலி போல."
      }
    },
    {
      "id": "L5",
      "en": {
        "title": "Behind Earth",
        "quick": "Behind Earth in its trip around the Sun.",
        "deep": "L5 forms the other equilateral triangle. Like L4, it is stable in the ideal Sun–Earth model; real missions still account for other influences."
      },
      "ta": {
        "title": "பூமிக்குப் பின்னால்",
        "quick": "சூரியனைச் சுற்றும் பயணத்தில் பூமிக்குப் பின்னால் உள்ளது.",
        "deep": "L5 மற்றொரு சமபக்க முக்கோணத்தை உருவாக்குகிறது. எளிய சூரியன்–பூமி மாதிரியில் L4 போல இதுவும் நிலையானது. உண்மையான பயணங்களில் பிற தாக்கங்களும் கணக்கில் கொள்ளப்படுகின்றன."
      }
    }
  ],
  "journeyStages": [
    {
      "en": {
        "title": "Raise the orbit",
        "body": "Engine pushes stretch the path around Earth."
      },
      "ta": {
        "title": "சுற்றுப்பாதையை விரிவாக்குதல்",
        "body": "இயந்திர உந்துதல்கள் பூமியைச் சுற்றிய பாதையை விரிவாக்குகின்றன."
      }
    },
    {
      "en": {
        "title": "Leave Earth’s neighbourhood",
        "body": "The journey passes beyond Earth’s sphere of influence—an orbital planning boundary, not the end of Earth’s gravity."
      },
      "ta": {
        "title": "பூமியின் அருகாமையைக் கடத்தல்",
        "body": "பாதை கணக்கிடப் பயன்படுத்தும் பூமியின் செல்வாக்கு எல்லையைக் கடக்கிறது. அந்த எல்லையில் பூமியின் ஈர்ப்பு மறைவதில்லை."
      }
    },
    {
      "en": {
        "title": "Cruise towards L1",
        "body": "The spacecraft travels onward, with small corrections to its path."
      },
      "ta": {
        "title": "L1-ஐ நோக்கிய பயணம்",
        "body": "சிறிய பாதைத் திருத்தங்களுடன் விண்கலம் தொடர்ந்து பயணிக்கிறது."
      }
    },
    {
      "en": {
        "title": "Enter the halo orbit",
        "body": "An engine manoeuvre guides it into the intended loop near L1."
      },
      "ta": {
        "title": "ஹேலோ சுற்றுப்பாதையில் நுழைதல்",
        "body": "இயந்திர இயக்கம் விண்கலத்தை L1-க்கு அருகிலுள்ள இலக்கு வளையப் பாதையில் செலுத்துகிறது."
      }
    }
  ],
  "instruments": [
    {
      "id": "VELC",
      "en": {
        "title": "The Sun’s hidden outer glow",
        "quick": "Blocks the bright solar disk to reveal the faint corona—the Sun’s outer atmosphere.",
        "analogy": "Like covering a bright lamp with your hand to see the faint glow beside it.",
        "deep": "VELC creates an artificial eclipse inside its optics. It also splits light into wavelengths—like a prism making a rainbow—to study the corona."
      },
      "ta": {
        "title": "சூரியனின் மங்கலான வெளிப்புற ஒளி",
        "quick": "பிரகாசமான சூரிய வட்டத்தை மறைத்து, அதன் வெளிப்புற வளிமண்டலமான கொரோனாவைக் காண்கிறது.",
        "analogy": "விளக்கின் அருகிலுள்ள மங்கலான ஒளியைக் காண, பிரகாசமான விளக்கைக் கையால் மறைப்பது போல.",
        "deep": "VELC தனது ஒளியியல் அமைப்புக்குள் செயற்கைக் கிரகணத்தை உருவாக்குகிறது. பட்டகம் வானவில் உருவாக்குவது போல ஒளியை அலைநீளங்களாகப் பிரித்தும் கொரோனாவை ஆய்வு செய்கிறது."
      }
    },
    {
      "id": "SUIT",
      "en": {
        "title": "Pictures beyond our eyesight",
        "quick": "Takes pictures of the Sun in near-ultraviolet light, which our eyes cannot see.",
        "analogy": "Like a camera with a special window onto invisible colours.",
        "deep": "Ultraviolet, or UV, is light beyond the violet end of the rainbow. SUIT observes the visible surface and a layer above it, called the chromosphere—like examining different layers of an onion."
      },
      "ta": {
        "title": "நம் கண்களுக்கு அப்பாற்பட்ட படங்கள்",
        "quick": "நம் கண்களுக்குத் தெரியாத அருகுப் புறஊதாக் கதிர்களில் சூரியனைப் படம் எடுக்கிறது.",
        "analogy": "கண்ணுக்குத் தெரியாத நிறங்களுக்கான சிறப்புச் சாளரமுள்ள கேமரா போல.",
        "deep": "புறஊதா அல்லது UV என்பது வானவில்லின் ஊதா நிறத்திற்கு அப்பாலுள்ள ஒளி. SUIT சூரியனின் கண்ணுக்குத் தெரியும் பரப்பையும் அதற்கு மேலுள்ள குரோமோஸ்பியர் அடுக்கையும் ஆராய்கிறது; வெங்காயத்தின் வெவ்வேறு அடுக்குகளைப் பார்ப்பது போல."
      }
    },
    {
      "id": "SoLEXS",
      "en": {
        "title": "A softer X-ray signal",
        "quick": "Measures lower-energy, or soft, X-rays from the Sun.",
        "analogy": "Like a meter listening to the quieter part of an energetic signal.",
        "deep": "X-rays are high-energy light, invisible to our eyes. Soft means lower energy, not a soft texture. SoLEXS measures how X-ray output changes, helping researchers study solar flares."
      },
      "ta": {
        "title": "குறைந்த ஆற்றல் X-கதிர்கள்",
        "quick": "சூரியனின் குறைந்த ஆற்றல் கொண்ட மென் X-கதிர்களை அளக்கிறது.",
        "analogy": "ஓர் ஆற்றல்மிக்க சமிக்ஞையின் மெதுவான பகுதியைக் கவனிக்கும் அளவுக் கருவி போல.",
        "deep": "X-கதிர்கள் கண்களுக்குத் தெரியாத உயராற்றல் ஒளி. மென் என்பது குறைந்த ஆற்றலைக் குறிக்கும்; மென்மையான பொருளை அல்ல. X-கதிர் வெளியீட்டின் மாற்றங்களை அளந்து சூரியச் சுடர்வெடிப்புகளை ஆராய SoLEXS உதவுகிறது."
      }
    },
    {
      "id": "HEL1OS",
      "en": {
        "title": "Catching powerful flashes",
        "quick": "Measures higher-energy, or hard, X-rays to study solar flares.",
        "analogy": "Like a fast reporter watching for a sudden burst of activity.",
        "deep": "A solar flare is a sudden release of energy, like a flash. Hard X-rays have higher energy than soft X-rays. HEL1OS helps track this energetic emission."
      },
      "ta": {
        "title": "ஆற்றல்மிக்க ஒளிவெடிப்புகள்",
        "quick": "சூரியச் சுடர்வெடிப்புகளை ஆராய உயராற்றல் கொண்ட கடின X-கதிர்களை அளக்கிறது.",
        "analogy": "திடீர் செயல்பாட்டைக் கவனிக்கும் வேகமான செய்தியாளர் போல.",
        "deep": "சூரியச் சுடர்வெடிப்பு என்பது மின்னல் போலத் திடீரென ஆற்றல் வெளிப்படுவது. கடின X-கதிர்கள் மென் X-கதிர்களைவிட அதிக ஆற்றல் கொண்டவை. இந்த வெளியீட்டைக் கண்காணிக்க HEL1OS உதவுகிறது."
      }
    },
    {
      "id": "ASPEX",
      "en": {
        "title": "Counting passing particles",
        "quick": "Studies particles in the solar wind passing the spacecraft.",
        "analogy": "Like a traffic counter that also checks how fast the traffic moves.",
        "deep": "ASPEX combines particle measurements to study the solar wind. These are local measurements: the instrument samples what reaches the spacecraft, rather than taking a distant photograph."
      },
      "ta": {
        "title": "கடந்து செல்லும் துகள்கள்",
        "quick": "விண்கலத்தைக் கடக்கும் சூரியக் காற்றுத் துகள்களை ஆராய்கிறது.",
        "analogy": "வாகனங்களை எண்ணுவதுடன் அவற்றின் வேகத்தையும் கவனிக்கும் போக்குவரத்துக் கருவி போல.",
        "deep": "சூரியக் காற்றை ஆராய ASPEX துகள் அளவீடுகளை இணைக்கிறது. இது விண்கலத்திற்கு வரும் துகள்களை நேரடியாக அளக்கிறது; தொலைவிலுள்ள ஒன்றைப் படம் எடுப்பதல்ல."
      }
    },
    {
      "id": "PAPA",
      "en": {
        "title": "What is the solar wind made of?",
        "quick": "Examines charged particles in the solar wind.",
        "analogy": "Like sorting a mixed bag of beads by their different properties.",
        "deep": "Charged particles carry an electric charge. PAPA studies their properties and composition. This helps scientists understand the plasma—a gas containing free charged particles—around the spacecraft."
      },
      "ta": {
        "title": "சூரியக் காற்றில் என்ன உள்ளது?",
        "quick": "சூரியக் காற்றின் மின்சுமை கொண்ட துகள்களை ஆராய்கிறது.",
        "analogy": "கலந்த மணிகளை அவற்றின் பண்புகளின்படி பிரிப்பது போல.",
        "deep": "மின்சுமைத் துகள்களுக்கு மின்சாரப் பண்பு உண்டு. PAPA அவற்றின் பண்புகளையும் கலவையையும் ஆராய்கிறது. தனித்த மின்சுமைத் துகள்கள் நிறைந்த வாயுவே பிளாஸ்மா. விண்கலத்தைச் சுற்றிய பிளாஸ்மாவைப் புரிந்துகொள்ள இது உதவுகிறது."
      }
    },
    {
      "id": "MAG",
      "en": {
        "title": "Feeling an invisible field",
        "quick": "Measures the magnetic field in space.",
        "analogy": "Like a sensitive compass that measures the field’s strength and direction.",
        "deep": "A magnetic field is an invisible influence, like the one that turns a compass needle. Sensors on a boom—a long support arm—help measure away from the spacecraft’s own magnetic interference."
      },
      "ta": {
        "title": "கண்ணுக்குத் தெரியாத காந்தப்புலம்",
        "quick": "விண்வெளியில் உள்ள காந்தப்புலத்தை அளக்கிறது.",
        "analogy": "காந்தப்புலத்தின் வலிமையையும் திசையையும் அளக்கும் நுண்ணுணர்வுள்ள திசைகாட்டி போல.",
        "deep": "காந்தப்புலம் என்பது திசைகாட்டி முள்ளைத் திருப்பும் கண்ணுக்குத் தெரியாத தாக்கம் போன்றது. நீண்ட தாங்குக் கம்பியில் உள்ள உணரிகள், விண்கலத்தின் சொந்தக் காந்தத் தாக்கத்திலிருந்து விலகி அளக்க உதவுகின்றன."
      }
    }
  ],
  "finale": {
    "en": {
      "facts": [
        {
          "value": "PSLV-C57",
          "label": "The launch vehicle",
          "detail": "A four-stage rocket: a relay team handing the spacecraft onward."
        },
        {
          "value": "7",
          "count": 7,
          "label": "Scientific payloads",
          "detail": "Seven tools, each measuring a different part of the Sun’s story."
        },
        {
          "value": "≈1.5 million km",
          "count": 1.5,
          "suffix": " million km",
          "prefix": "≈",
          "decimals": 1,
          "label": "From Earth towards the Sun",
          "detail": "About 1% of the Earth–Sun distance."
        },
        {
          "value": "Halo orbit",
          "label": "A loop around L1",
          "detail": "A three-dimensional path around a useful observing region."
        },
        {
          "value": "2 Sept 2023",
          "label": "Launch day",
          "detail": "The journey began from Sriharikota, India."
        },
        {
          "value": "1,480.7 kg",
          "count": 1480.7,
          "decimals": 1,
          "suffix": " kg",
          "label": "Spacecraft mass at launch",
          "detail": "The value specified in ISRO’s PSLV-C57 mission brochure."
        }
      ],
      "questions": [
        {
          "question": "What does Aditya-L1 study?",
          "options": [
            "The Sun",
            "The Moon",
            "The ocean"
          ],
          "answer": 0,
          "explanation": "Aditya-L1 observes the Sun and measures its surroundings in space."
        },
        {
          "question": "Where does Aditya-L1 observe from?",
          "options": [
            "On the Sun’s surface",
            "A halo orbit around Sun–Earth L1",
            "A runway on Earth"
          ],
          "answer": 1,
          "explanation": "It loops around L1, about 1.5 million km from Earth towards the Sun."
        },
        {
          "question": "Why put an X-ray instrument in space?",
          "options": [
            "Space makes every object bigger",
            "Earth’s air blocks solar X-rays",
            "X-rays exist only at night"
          ],
          "answer": 1,
          "explanation": "Our atmosphere absorbs solar X-rays, so these detectors work above it."
        },
        {
          "question": "Which instrument creates an artificial eclipse?",
          "options": [
            "MAG",
            "PAPA",
            "VELC"
          ],
          "answer": 2,
          "explanation": "VELC hides the bright solar disk to study the faint corona, the Sun’s outer atmosphere."
        },
        {
          "question": "Why are small orbit corrections needed?",
          "options": [
            "L1 is unstable, like a pencil balanced on a fingertip",
            "The Sun switches off each night",
            "The spacecraft must land every week"
          ],
          "answer": 0,
          "explanation": "Small drift grows near L1. Carefully timed engine firings keep the spacecraft near its planned path."
        },
        {
          "question": "What does “space weather” help us understand?",
          "options": [
            "Rain inside a rocket",
            "Changes caused by solar activity that can affect technology",
            "Clouds on the Moon"
          ],
          "answer": 1,
          "explanation": "Solar activity can disturb satellites, navigation, some radio links and power grids."
        }
      ],
      "faq": [
        {
          "question": "Will it go to the Sun?",
          "quick": "No. It observes from a halo orbit around L1, far from the Sun’s surface.",
          "analogy": "Think of a lookout watching a mountain from a safe viewpoint.",
          "deep": "L1 is about 1% of the way from Earth to the Sun. Aditya-L1 is an observatory, not a solar landing mission."
        },
        {
          "question": "Why not go closer?",
          "quick": "L1 gives a steady view of the Sun for this mission’s science.",
          "analogy": "A good viewing seat can matter more than the closest seat.",
          "deep": "Different missions choose different orbits. Going closer demands different heat protection and mission design. Aditya-L1 combines remote views of the Sun with measurements of particles and fields near the spacecraft."
        },
        {
          "question": "Is it dangerous for Earth?",
          "quick": "The spacecraft observes the Sun. It does not create solar storms or change the Sun.",
          "analogy": "A weather station measures a storm; it does not make one.",
          "deep": "Solar storms are natural events. Aditya-L1 helps researchers understand them; it cannot stop them."
        },
        {
          "question": "Can we see it?",
          "quick": "You cannot see Aditya-L1 with your unaided eyes from Earth.",
          "analogy": "A tiny object very far away becomes too faint to spot.",
          "deep": "It is a small spacecraft about 1.5 million km away. The model here is enlarged and the scene is not to scale."
        },
        {
          "question": "How is it different from Chandrayaan?",
          "quick": "Chandrayaan explores the Moon. Aditya-L1 studies the Sun.",
          "analogy": "Two explorers carry different toolkits for different destinations.",
          "deep": "Chandrayaan missions investigate our Moon. Aditya-L1 studies solar light, particles and magnetic fields from its orbit near L1."
        },
        {
          "question": "Does it take pictures I can see?",
          "quick": "Yes. ISRO publishes selected solar images, including images from SUIT.",
          "analogy": "Special-light cameras reveal details that ordinary eyes miss.",
          "deep": "Ultraviolet light is invisible to our eyes. Scientists display these measurements as images, often using colours to show features. The official link below needs an internet connection."
        }
      ],
      "ui": {
        "question": "Question {n} of {total}",
        "correct": "Correct!",
        "incorrect": "Good try.",
        "next": "Next question",
        "finish": "See my score",
        "restart": "Try again",
        "score": "You scored {score} / {total}",
        "perfect": "Seven eyes. One curious explorer. Brilliant work!",
        "encourage": "Keep exploring. Every question is a new discovery.",
        "share": "Share result",
        "download": "Download score card",
        "copy": "Copy result",
        "copied": "Result copied.",
        "shareFailed": "Sharing is unavailable. Copy the result text below.",
        "shareText": "I scored {score}/{total} on the Aditya-L1 quiz at Workshop 42 — ISRO Expo!",
        "shareLabel": "Your result to share",
        "images": "See ISRO’s solar images",
        "footer": "Workshop 42 — ISRO Expo",
        "credit": "Science source: Indian Space Research Organisation (ISRO). Additional explanations reference NASA. Independent educational exhibit; not an official ISRO website.",
        "collegeLogo": "COLLEGE LOGO PLACEHOLDER",
        "isroLogo": "ISRO LOGO PLACEHOLDER",
        "logoNote": "Insert authorised logo files here. No official logo has been recreated.",
        "sources": "Mission sources",
        "home": "Back to the Sun",
        "kioskPlaying": "Expo story playing · touch or press a key to explore",
        "kioskPaused": "Your turn · story resets after 60 idle seconds",
        "kioskReduced": "Reduced motion · automatic scrolling is off",
        "resume": "Restart expo story",
        "pause": "Pause story",
        "simple": "Use 2D view",
        "rich": "Use 3D view",
        "visualLabel": "Visual mode",
        "kioskCaption": "{chapter} · {title}",
        "downloadName": "aditya-l1-score.txt",
        "sourceLabels": [
          "ISRO mission overview",
          "ISRO launch brochure",
          "ISRO solar images"
        ],
        "offlinePreparing": "Preparing this visit for offline use…",
        "offlineReady": "Ready for offline use on this browser.",
        "offlineUpdate": "An update is ready. Close all tabs of this site and reopen while online.",
        "offlineUnavailable": "Offline browser caching is unavailable. Use the local expo server without internet.",
        "offlineDev": "Development preview. Build the site to enable offline browser caching.",
        "collegeLogoAlt": "College logo",
        "isroLogoAlt": "ISRO logo"
      }
    },
    "ta": {
      "facts": [
        {
          "value": "PSLV-C57",
          "label": "ஏவுகலம்",
          "detail": "நான்கு நிலை ராக்கெட். தொடர் ஓட்ட வீரர்களைப் போலப் பொறுப்பை அடுத்த நிலைக்கு வழங்குகிறது."
        },
        {
          "value": "7",
          "count": 7,
          "label": "அறிவியல் கருவிகள்",
          "detail": "சூரியனின் கதையை வெவ்வேறு வழிகளில் அளக்கும் ஏழு கருவிகள்."
        },
        {
          "value": "≈15 லட்சம் கி.மீ.",
          "count": 15,
          "suffix": " லட்சம் கி.மீ.",
          "prefix": "≈",
          "label": "பூமியிலிருந்து சூரியன் நோக்கி",
          "detail": "பூமி–சூரியன் தூரத்தில் சுமார் 1%."
        },
        {
          "value": "வளையப் பாதை",
          "label": "L1-ஐச் சுற்றி ஒரு வட்டமிடல்",
          "detail": "ஆய்வுக்கு ஏற்ற பகுதியைச் சுற்றிய முப்பரிமாணப் பாதை."
        },
        {
          "value": "2 செப். 2023",
          "label": "ஏவப்பட்ட நாள்",
          "detail": "இந்தியாவின் ஸ்ரீஹரிகோட்டாவில் பயணம் தொடங்கியது."
        },
        {
          "value": "1,480.7 கிலோ",
          "count": 1480.7,
          "decimals": 1,
          "suffix": " கிலோ",
          "label": "ஏவும்போதைய விண்கல நிறை",
          "detail": "ISRO-வின் PSLV-C57 திட்டக் கையேட்டில் குறிப்பிடப்பட்ட அளவு."
        }
      ],
      "questions": [
        {
          "question": "ஆதித்யா-L1 எதை ஆய்வு செய்கிறது?",
          "options": [
            "சூரியன்",
            "நிலா",
            "கடல்"
          ],
          "answer": 0,
          "explanation": "ஆதித்யா-L1 சூரியனைக் கவனித்து அருகிலுள்ள விண்வெளிச் சூழலையும் அளக்கிறது."
        },
        {
          "question": "ஆதித்யா-L1 எங்கிருந்து ஆய்வு செய்கிறது?",
          "options": [
            "சூரியனின் மேற்பரப்பில்",
            "சூரியன்–பூமி L1-ஐச் சுற்றிய வளையப் பாதையில்",
            "பூமியில் ஒரு ஓடுபாதையில்"
          ],
          "answer": 1,
          "explanation": "பூமியிலிருந்து சூரியன் நோக்கிச் சுமார் 15 லட்சம் கி.மீ. தொலைவிலுள்ள L1-ஐச் சுற்றுகிறது."
        },
        {
          "question": "எக்ஸ்-கதிர் கருவியை ஏன் விண்வெளியில் வைக்க வேண்டும்?",
          "options": [
            "விண்வெளியில் அனைத்தும் பெரிதாகும்",
            "பூமியின் காற்று சூரிய எக்ஸ்-கதிர்களைத் தடுக்கிறது",
            "இரவில் மட்டுமே எக்ஸ்-கதிர்கள் உண்டு"
          ],
          "answer": 1,
          "explanation": "நமது வளிமண்டலம் சூரிய எக்ஸ்-கதிர்களை உறிஞ்சுகிறது. அதற்கு மேலே இந்தக் கருவிகள் இயங்க வேண்டும்."
        },
        {
          "question": "செயற்கைக் கிரகணத்தை உருவாக்கும் கருவி எது?",
          "options": [
            "MAG",
            "PAPA",
            "VELC"
          ],
          "answer": 2,
          "explanation": "VELC பிரகாசமான சூரிய வட்டை மறைத்து, அதன் மங்கலான வெளி வளிமண்டலமான கொரோனாவை ஆய்வு செய்கிறது."
        },
        {
          "question": "சிறிய பாதைத் திருத்தங்கள் ஏன் தேவை?",
          "options": [
            "விரலில் நிற்கும் பென்சிலைப் போல L1 நிலையற்றது",
            "ஒவ்வோர் இரவும் சூரியன் அணைந்துவிடும்",
            "விண்கலம் வாரந்தோறும் தரையிறங்க வேண்டும்"
          ],
          "answer": 0,
          "explanation": "L1 அருகே சிறிய விலகல் பெரிதாகலாம். சரியான நேரத்தில் இயந்திரத்தை இயக்கிப் பாதையைத் திருத்துகிறார்கள்."
        },
        {
          "question": "விண்வெளி வானிலை எதைப் புரிந்துகொள்ள உதவும்?",
          "options": [
            "ராக்கெட்டிற்குள் மழை",
            "தொழில்நுட்பத்தைப் பாதிக்கக்கூடிய சூரியச் செயல்பாடுகள்",
            "நிலாவில் மேகங்கள்"
          ],
          "answer": 1,
          "explanation": "சூரியச் செயல்பாடுகள் செயற்கைக்கோள்கள், வழிகாட்டுதல், சில வானொலி இணைப்புகள் மற்றும் மின்வலையங்களைப் பாதிக்கலாம்."
        }
      ],
      "faq": [
        {
          "question": "அது சூரியனுக்குச் செல்லுமா?",
          "quick": "இல்லை. சூரியனின் மேற்பரப்பிலிருந்து வெகு தொலைவில், L1-ஐச் சுற்றிய வளையப் பாதையில் இருந்து ஆய்வு செய்கிறது.",
          "analogy": "தொலைவில் உள்ள பாதுகாப்பான இடத்திலிருந்து மலையைக் கவனிப்பது போன்றது.",
          "deep": "பூமியிலிருந்து சூரியன் செல்லும் தூரத்தில் சுமார் 1% இடத்தில் L1 உள்ளது. ஆதித்யா-L1 ஒரு ஆய்வுக்கூடம்; சூரியனில் தரையிறங்கும் திட்டம் அல்ல."
        },
        {
          "question": "ஏன் இன்னும் அருகில் செல்லவில்லை?",
          "quick": "இந்த ஆய்வுக்கு L1-இலிருந்து சூரியனைத் தொடர்ந்து பார்க்க முடியும்.",
          "analogy": "மிக அருகில் அமர்வதைவிட நன்றாகத் தெரியும் இடத்தில் அமர்வது பயனுள்ளதாக இருக்கலாம்.",
          "deep": "ஒவ்வொரு திட்டமும் அதன் நோக்கத்திற்கு ஏற்ற பாதையைத் தேர்ந்தெடுக்கும். அருகில் செல்ல வேறுபட்ட வெப்பப் பாதுகாப்பு தேவை. ஆதித்யா-L1 சூரியனைப் படம் பிடிப்பதுடன், தன் அருகிலுள்ள துகள்களையும் காந்தப் புலத்தையும் அளக்கிறது."
        },
        {
          "question": "பூமிக்கு ஆபத்தா?",
          "quick": "இது சூரியனைக் கவனிக்கிறது. சூரியப் புயல்களை உருவாக்கவோ சூரியனை மாற்றவோ செய்யாது.",
          "analogy": "வானிலை நிலையம் புயலை அளக்கும்; அதை உருவாக்காது.",
          "deep": "சூரியப் புயல்கள் இயற்கையானவை. அவற்றைப் புரிந்துகொள்ள ஆதித்யா-L1 உதவும்; அவற்றை நிறுத்தாது."
        },
        {
          "question": "அதை நம்மால் பார்க்க முடியுமா?",
          "quick": "பூமியிலிருந்து வெறும் கண்களால் ஆதித்யா-L1-ஐப் பார்க்க முடியாது.",
          "analogy": "மிகத் தொலைவில் உள்ள சிறிய பொருள் கண்களுக்குத் தெரியாத அளவு மங்கலாகும்.",
          "deep": "சிறிய விண்கலம் சுமார் 15 லட்சம் கி.மீ. தொலைவில் உள்ளது. இங்குள்ள மாதிரி பெரிதாக்கப்பட்டுள்ளது; காட்சி உண்மையான அளவுவிகிதத்தில் இல்லை."
        },
        {
          "question": "சந்திரயானிலிருந்து இது எப்படி வேறுபடுகிறது?",
          "quick": "சந்திரயான் நிலாவை ஆய்வு செய்கிறது. ஆதித்யா-L1 சூரியனை ஆய்வு செய்கிறது.",
          "analogy": "வெவ்வேறு இடங்களுக்குச் செல்லும் ஆய்வாளர்கள் வெவ்வேறு கருவிகளை எடுத்துச் செல்வது போன்றது.",
          "deep": "சந்திரயான் திட்டங்கள் நிலாவை ஆராய்கின்றன. ஆதித்யா-L1 சூரிய ஒளி, துகள்கள், காந்தப் புலங்களை L1 அருகிலிருந்து ஆய்வு செய்கிறது."
        },
        {
          "question": "நான் பார்க்கக்கூடிய படங்களை எடுக்குமா?",
          "quick": "ஆம். SUIT எடுத்த படங்கள் உட்படத் தேர்ந்தெடுத்த சூரியப் படங்களை ISRO வெளியிடுகிறது.",
          "analogy": "சிறப்பு ஒளிக் கேமராக்கள் சாதாரணக் கண்களுக்குத் தெரியாத விவரங்களைக் காட்டுகின்றன.",
          "deep": "புறஊதா ஒளியை நமது கண்களால் பார்க்க முடியாது. விஞ்ஞானிகள் அளவீடுகளைப் படங்களாக மாற்றுகிறார்கள். அம்சங்களை விளக்க வண்ணங்களையும் பயன்படுத்தலாம். கீழுள்ள அதிகாரப்பூர்வ இணைப்புக்கு இணையம் தேவை."
        }
      ],
      "ui": {
        "question": "கேள்வி {n} / {total}",
        "correct": "சரியான பதில்!",
        "incorrect": "நல்ல முயற்சி.",
        "next": "அடுத்த கேள்வி",
        "finish": "மதிப்பெண்ணைப் பார்",
        "restart": "மீண்டும் முயற்சி",
        "score": "உங்கள் மதிப்பெண் {score} / {total}",
        "perfect": "ஏழு கண்கள். ஓர் ஆர்வமுள்ள ஆய்வாளர். அருமை!",
        "encourage": "தொடர்ந்து ஆராயுங்கள். ஒவ்வொரு கேள்வியும் ஒரு புதிய கண்டுபிடிப்பு.",
        "share": "பகிர்",
        "download": "மதிப்பெண் அட்டையைப் பதிவிறக்கு",
        "copy": "பதிலை நகலெடு",
        "copied": "முடிவு நகலெடுக்கப்பட்டது.",
        "shareFailed": "பகிர்வு கிடைக்கவில்லை. கீழுள்ள முடிவை நகலெடுக்கவும்.",
        "shareText": "Workshop 42 — ISRO Expo ஆதித்யா-L1 வினாடி வினாவில் நான் {score}/{total} பெற்றேன்!",
        "shareLabel": "பகிர்வதற்கான உங்கள் முடிவு",
        "images": "ISRO-வின் சூரியப் படங்களைப் பார்",
        "footer": "Workshop 42 — ISRO Expo",
        "credit": "அறிவியல் தகவல்: இந்திய விண்வெளி ஆய்வு நிறுவனம் (ISRO). கூடுதல் விளக்கங்களுக்கு NASA ஆதாரங்கள். இது தனித்த கல்விக் கண்காட்சி; அதிகாரப்பூர்வ ISRO இணையதளம் அல்ல.",
        "collegeLogo": "கல்லூரி இலச்சினைக்கான இடம்",
        "isroLogo": "ISRO இலச்சினைக்கான இடம்",
        "logoNote": "அனுமதி பெற்ற இலச்சினைக் கோப்புகளை இங்கே சேர்க்கவும். அதிகாரப்பூர்வ இலச்சினைகள் மீண்டும் உருவாக்கப்படவில்லை.",
        "sources": "திட்ட ஆதாரங்கள்",
        "home": "சூரியனுக்குத் திரும்பு",
        "kioskPlaying": "கண்காட்சிக் கதை இயங்குகிறது · தொடவும் அல்லது விசையை அழுத்தவும்",
        "kioskPaused": "உங்கள் முறை · 60 நொடிகள் செயல்பாடின்றி இருந்தால் கதை மீண்டும் தொடங்கும்",
        "kioskReduced": "குறைந்த இயக்கம் · தானியக்க நகர்வு நிறுத்தப்பட்டுள்ளது",
        "resume": "கண்காட்சிக் கதையை மீண்டும் தொடங்கு",
        "pause": "கதையை நிறுத்து",
        "simple": "2D காட்சியைப் பயன்படுத்து",
        "rich": "3D காட்சியைப் பயன்படுத்து",
        "visualLabel": "காட்சி முறை",
        "kioskCaption": "{chapter} · {title}",
        "downloadName": "aditya-l1-score.txt",
        "sourceLabels": [
          "ISRO திட்ட அறிமுகம்",
          "ISRO ஏவுதல் கையேடு",
          "ISRO சூரியப் படங்கள்"
        ],
        "offlinePreparing": "இணையமின்றிப் பயன்படுத்த இந்தப் பக்கம் தயாராகிறது…",
        "offlineReady": "இந்த உலாவியில் இணையமின்றிப் பயன்படுத்தத் தயார்.",
        "offlineUpdate": "புதுப்பிப்பு தயார். இந்தத் தளத்தின் எல்லாத் தாவல்களையும் மூடி, இணையத்துடன் மீண்டும் திறக்கவும்.",
        "offlineUnavailable": "உலாவியின் இணையமில்லாச் சேமிப்பு கிடைக்கவில்லை. உள்ளூர் கண்காட்சி சேவையகத்தை இணையமின்றிப் பயன்படுத்தலாம்.",
        "offlineDev": "உருவாக்க முன்னோட்டம். இணையமில்லாச் சேமிப்பை இயக்கத் தளத்தை build செய்யவும்.",
        "collegeLogoAlt": "கல்லூரி இலச்சினை",
        "isroLogoAlt": "ISRO இலச்சினை"
      }
    }
  },
  "branding": {
    "collegeLogo": "",
    "isroLogo": ""
  }
}

```

## src/finale.js

```javascript
import { gsap } from 'gsap';
const node=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
const format=(s,values)=>s.replace(/\{(\w+)\}/g,(_,k)=>values[k]??'');
export function createFinale(content,{motion,onLayout}){
 let language='en',deep=false,index=0,answers=[],result=false,counterObserver;
 const tweens=new Set();
 const facts=node('div','facts-grid'),quiz=node('div','quiz-panel'),faq=node('div','faq-list'),footer=node('div','expo-footer');
 const confetti=node('div','confetti');confetti.setAttribute('aria-hidden','true');
 document.body.append(confetti);
 const local=()=>content.finale[language];
 const score=()=>answers.reduce((sum,a,i)=>sum+Number(a===local().questions[i].answer),0);
 function button(text,handler,cls='action-button'){const b=node('button',cls,text);b.type='button';b.addEventListener('click',handler);return b;}
 function focusQuestion(){(quiz.querySelector('h3'))?.focus({preventScroll:true});onLayout();}
 function celebrate(){
  if(motion.matches)return;
  confetti.replaceChildren();
  for(let i=0;i<48;i++){const p=node('i');p.style.left=`${Math.random()*100}%`;p.style.setProperty('--drift',`${(Math.random()-.5)*260}px`);p.style.background=['#ffc77a','#97e4ed','#fff3cf'][i%3];p.style.animationDelay=`${Math.random()*.4}s`;p.addEventListener('animationend',()=>p.remove(),{once:true});confetti.append(p);}
 }
 function renderQuiz(){
  const c=local(),u=c.ui;quiz.replaceChildren();
  if(result){
   const title=node('h3','score-title',format(u.score,{score:score(),total:c.questions.length}));title.tabIndex=-1;
   const shareText=format(u.shareText,{score:score(),total:c.questions.length});
   const text=node('textarea','share-text');text.readOnly=true;text.value=shareText;text.setAttribute('aria-label',u.shareLabel);
   const feedback=node('p','share-status');feedback.setAttribute('role','status');
   const actions=node('div','quiz-actions');
   actions.append(button(u.share,async()=>{
    if(navigator.share){try{await navigator.share({text:shareText});return;}catch(e){if(e.name==='AbortError')return;}}
    feedback.textContent=u.shareFailed;text.focus();text.select();
   }),button(u.copy,async()=>{try{await navigator.clipboard.writeText(shareText);feedback.textContent=u.copied;}catch{feedback.textContent=u.shareFailed;text.focus();text.select();}}),button(u.download,()=>{
    const url=URL.createObjectURL(new Blob([u.footer+'\n\n'+shareText+'\n'],{type:'text/plain;charset=utf-8'}));const a=node('a');a.href=url;a.download=u.downloadName;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
   }),button(u.restart,()=>{reset();focusQuestion();}));
   quiz.append(title,node('p','',score()===c.questions.length?u.perfect:u.encourage),text,actions,feedback);return;
  }
  const q=c.questions[index],answered=answers[index]!==undefined;
  quiz.append(node('p','eyebrow',format(u.question,{n:index+1,total:c.questions.length})));
  const field=node('fieldset'),legend=node('legend','quiz-question',q.question);field.append(legend);
  const options=node('div','quiz-options');
  q.options.forEach((option,i)=>{
   const b=button(option,()=>{answers[index]=i;renderQuiz();quiz.querySelector('.quiz-feedback').focus({preventScroll:true});onLayout();},'quiz-option');
   b.disabled=answered;
   if(answered){b.classList.toggle('is-correct',i===q.answer);b.classList.toggle('is-wrong',i===answers[index]&&i!==q.answer);b.setAttribute('aria-pressed',String(i===answers[index]));}
   options.append(b);
  });
  field.append(options);quiz.append(field);
  if(answered){
   const feedback=node('p','quiz-feedback',`${answers[index]===q.answer?u.correct:u.incorrect} ${q.explanation}`);feedback.tabIndex=-1;feedback.setAttribute('role','status');quiz.append(feedback);
   quiz.append(button(index===c.questions.length-1?u.finish:u.next,()=>{if(index===c.questions.length-1){result=true;renderQuiz();if(score()===c.questions.length)celebrate();}else{index++;renderQuiz();}const target=quiz.querySelector('legend,h3');target.tabIndex=-1;target.focus({preventScroll:true});onLayout();}));
  }
  if(answers.length)quiz.append(button(u.restart,()=>{reset();const target=quiz.querySelector('legend');target.tabIndex=-1;target.focus({preventScroll:true});onLayout();},'action-button secondary'));
 }
 function renderFacts(){
  counterObserver?.disconnect();tweens.forEach(t=>t.kill());tweens.clear();facts.replaceChildren();
  const c=local();
  counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(!entry.isIntersecting)return;counterObserver.unobserve(entry.target);
   const i=Number(entry.target.dataset.index),item=c.facts[i];if(item.count===undefined||motion.matches)return;
   const value=entry.target.querySelector('.fact-value'),animated={value:0};
   value.setAttribute('aria-hidden','true');entry.target.append(node('span','sr-only',item.value));
   const t=gsap.to(animated,{value:item.count,duration:1.1,ease:'power2.out',onUpdate:()=>{value.textContent=(item.prefix||'')+animated.value.toLocaleString(language==='ta'?'en-IN':'en-US',{minimumFractionDigits:item.decimals||0,maximumFractionDigits:item.decimals||0})+(item.suffix||'');},onComplete:()=>{value.textContent=item.value;tweens.delete(t);}});tweens.add(t);
  }),{threshold:.2});
  c.facts.forEach((f,i)=>{const card=node('article','fact-card');card.dataset.index=i;card.append(node('p','fact-value',f.value),node('h3','',f.label),node('p','',f.detail));facts.append(card);counterObserver.observe(card);});
 }
 function renderFAQ(){
  const open=[...faq.querySelectorAll('details')].map(d=>d.open);faq.replaceChildren();
  local().faq.forEach((q,i)=>{const detail=node('details','faq-item');detail.open=!!open[i];const summary=node('summary','',q.question);detail.append(summary,node('p','',q.quick),node('p','faq-analogy',q.analogy));if(deep)detail.append(node('p','faq-deep',q.deep));if(i===5){const a=node('a','source',local().ui.images);a.href=content.sources.find(s=>s.id==='isro-images').url;a.target='_blank';a.rel='noopener noreferrer';detail.append(a);}detail.addEventListener('toggle',onLayout);faq.append(detail);});
 }
 function renderFooter(){
  const u=local().ui;footer.replaceChildren();const logos=node('div','logo-placeholders');for(const key of ['collegeLogo','isroLogo']){
   const slot=node('div','logo-slot',u[key]);const path=content.branding?.[key];
   if(path){const image=node('img');image.alt=u[key+'Alt'];image.src=new URL(path,document.baseURI).href;image.addEventListener('load',()=>{slot.replaceChildren(image);});}
   logos.append(slot);
  }
  const sources=node('div','footer-links');
  for(const [i,id] of ['isro-overview','isro-flight','isro-images'].entries()){const a=node('a','source',u.sourceLabels[i]);a.href=content.sources.find(s=>s.id===id).url;a.target='_blank';a.rel='noopener noreferrer';sources.append(a);}
  const home=node('a','cta',u.home);home.href='#hero';
  footer.append(node('h2','',u.footer),logos,node('p','',u.logoNote),node('p','',u.credit),node('h3','',u.sources),sources,home);
 }
 function render(lang,isDeep){language=lang;deep=isDeep;renderFacts();renderQuiz();renderFAQ();renderFooter();}
 function reset(){index=0;answers=[];result=false;confetti.replaceChildren();renderQuiz();}
 function stopMotion(){tweens.forEach(t=>t.progress(1));confetti.replaceChildren();}
 motion.addEventListener('change',stopMotion);
 return{facts,quiz,faq,footer,render,reset,dispose(){counterObserver?.disconnect();tweens.forEach(t=>t.kill());confetti.remove();motion.removeEventListener('change',stopMotion);}};
}

```

## src/kiosk.js

```javascript
export function createKiosk(content,{motion,goTo,reset}){
 if(new URLSearchParams(location.search).get('kiosk')!=='1')return{render(){},start(){},dispose(){}};
 document.documentElement.dataset.kiosk='true';
 let language='en',playing=false,idleTimer,frame,last=0,holdUntil=0;
 const panel=document.createElement('aside');panel.className='kiosk-panel';
 const caption=document.createElement('p');caption.className='kiosk-caption';
 const status=document.createElement('p');const button=document.createElement('button');button.type='button';
 panel.append(caption,status,button);document.body.append(panel);
 const copy=()=>content.finale[language].ui;
 function render(lang=language){language=lang;const u=copy();status.textContent=motion.matches?u.kioskReduced:playing?u.kioskPlaying:u.kioskPaused;button.textContent=playing?u.pause:u.resume;document.documentElement.dataset.kioskPlaying=String(playing);updateCaption();}
 let previousCaption='';
 function updateCaption(){const section=content.sections.find(s=>s.id===document.documentElement.dataset.chapter)||content.sections[0];const text=copy().kioskCaption.replace('{chapter}',String(content.sections.indexOf(section)+1).padStart(2,'0')).replace('{title}',section[language].title);if(text!==previousCaption){caption.textContent=text;previousCaption=text;}}
 function pause(){playing=false;last=0;clearTimeout(idleTimer);render();if(!document.hidden)idleTimer=setTimeout(restart,60000);}
 function restart(){clearTimeout(idleTimer);reset();goTo(0);playing=!motion.matches;holdUntil=Date.now()+3500;last=0;render();}
 function step(now){
  if(!document.hidden&&playing){
   const dt=last?Math.min((now-last)/1000,.05):0;last=now;
   if(Date.now()>holdUntil){const end=document.documentElement.scrollHeight-innerHeight;
    if(scrollY>=end-2){playing=false;render();idleTimer=setTimeout(restart,4500);}
    else goTo(Math.min(end,scrollY+dt*65));
   }
  }else last=0;
  if(!document.hidden)updateCaption();
  frame=requestAnimationFrame(step);
 }
 function interact(e){if(e.target===button)return;pause();}
 const events=['pointerdown','touchstart','keydown','wheel'];events.forEach(type=>window.addEventListener(type,interact,{passive:true}));
 button.addEventListener('click',()=>playing?pause():restart());
 function visibility(){if(document.hidden){clearTimeout(idleTimer);last=0;}else if(!playing){pause();}}
 function reduced(){pause();}
 document.addEventListener('visibilitychange',visibility);motion.addEventListener('change',reduced);
 return{render,start(){restart();frame=requestAnimationFrame(step);},dispose(){clearTimeout(idleTimer);cancelAnimationFrame(frame);events.forEach(type=>window.removeEventListener(type,interact));document.removeEventListener('visibilitychange',visibility);motion.removeEventListener('change',reduced);panel.remove();}};
}

```

## src/launch.js

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function createLaunch(content, { goTo, travel }) {
  const make=(tag,cls)=>{const e=document.createElement(tag);if(cls)e.className=cls;return e;};
  const element=make('div','launch-experience');
  const panel=make('div','launch-panel');
  const caption=make('div','launch-caption glass-card');
  const counter=make('p','eyebrow');
  const title=make('h3');
  const body=make('p');
  const time=make('p','flight-time');
  const hint=make('p','flight-hint');
  const buttons=make('div','flight-buttons');
  const previous=make('button');previous.type='button';
  const next=make('button');next.type='button';
  buttons.append(previous,next);
  const skip=make('button','skip-flight');skip.type='button';
  const continueButton=make('button','continue-earth');continueButton.type='button';
  caption.append(counter,title,body,time,buttons,hint,continueButton,skip);
  const space=make('div','launch-space');space.setAttribute('aria-hidden','true');
  const illustration=make('div','static-rocket');
  illustration.append(make('i','rocket-body'),make('i','rocket-booster left'),make('i','rocket-booster right'));
  space.append(illustration);
  panel.append(caption,space);
  const disclaimer=make('p','flight-disclaimer');
  const details=make('details','flight-details');
  const summary=make('summary');
  const list=make('ol');
  details.append(summary,list);
  const end=make('div');end.id='launch-end';end.tabIndex=-1;
  element.append(panel,disclaimer,details,end);
  let index=0,language='en',deep=false,trigger;
  const clamp=n=>Math.max(0,Math.min(content.launchEvents.length-1,n));
  function display() {
    const ui=content.ui[language];const event=content.launchEvents[index];
    counter.textContent=`${ui.event} ${String(index+1).padStart(2,'0')} / ${content.launchEvents.length}`;
    title.textContent=event[language].title;body.textContent=event[language].body;
    time.textContent=`${ui.plannedTime}: ${event.plannedSeconds} ${ui.seconds}`;time.hidden=!deep;
    previous.textContent=ui.previous;next.textContent=ui.next;
    previous.disabled=index===0;next.disabled=index===content.launchEvents.length-1;
    continueButton.textContent=ui.continueEarth;continueButton.hidden=index!==content.launchEvents.length-1;
    hint.textContent=ui.flightHint;skip.textContent=ui.skipFlight;
    disclaimer.textContent=ui.flightArt;summary.textContent=ui.allEvents;
    panel.setAttribute('aria-label',ui.flight);
    panel.dataset.event=event.id;
  }
  function select(n,manual=false) {
    index=clamp(n);display();
    if(manual) {
      if(trigger)goTo(trigger.start+((index+.85)/(content.launchEvents.length+1))*(trigger.end-trigger.start));
      else travel.progress=(index+.85)/(content.launchEvents.length+1);
    }
  }
  previous.addEventListener('click',()=>select(index-1,true));
  next.addEventListener('click',()=>select(index+1,true));
  continueButton.addEventListener('click',()=>{travel.progress=1;const target=document.getElementById('journey');goTo(target);target.tabIndex=-1;target.focus({preventScroll:true});});
  skip.addEventListener('click',()=>{goTo(end);end.focus({preventScroll:true});});
  // Full sequence gives screen-reader users an uninterrupted reading route.
  details.addEventListener('toggle',()=>ScrollTrigger.refresh());
  return { element,
    render(lang,isDeep) {
      language=lang;deep=isDeep;display();
      list.replaceChildren(...content.launchEvents.map(event=>{
        const item=make('li');const h=make('h4');h.textContent=event[lang].title;
        const p=make('p');p.textContent=event[lang].body;
        const timing=make('p','flight-time');timing.hidden=!deep;
        timing.textContent=`${content.ui[lang].plannedTime}: ${event.plannedSeconds} ${content.ui[lang].seconds}`;
        item.append(h,p,timing);return item;
      }));
    },
    wire(canPin) {
      trigger=undefined;
      if(!canPin){details.open=true;return;}
      details.open=false;
      const tween=gsap.to(travel,{progress:1,ease:'none',onUpdate:()=>select(Math.min(14,Math.floor(travel.progress*16))),scrollTrigger:{
        trigger:panel,start:'top 115px',end:()=>`+=${(content.launchEvents.length+1)*350}`,
        pin:true,scrub:.25,invalidateOnRefresh:true,refreshPriority:10
      }});
      trigger=tween.scrollTrigger;
    }
  };
}

```

## src/main.js

```javascript
import './styles.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/noto-sans-tamil/400.css';
import '@fontsource/noto-sans-tamil/600.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import content from './content.json';
import { createSolarScene } from './scene.js';
import { createLaunch } from './launch.js';
import { createOrbitalUI } from './orbital-ui.js';
import { createSatelliteUI } from './satellite-ui.js';
import { createFinale } from './finale.js';
import { createKiosk } from './kiosk.js';
import { createOfflineStatus } from './offline.js';
const offline=createOfflineStatus(content);

gsap.registerPlugin(ScrollTrigger);
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const state = { language: content.defaultLanguage, deep: false, active: 0 };
let lenis;
let context;
let progressTrigger;
let refreshFrame;
let announcementTimer;
let solarScene;
let layoutFrame;
function refreshLayout(){cancelAnimationFrame(layoutFrame);layoutFrame=requestAnimationFrame(()=>{lenis?.resize();ScrollTrigger.refresh();});}
const finale=createFinale(content,{motion,onLayout:refreshLayout});
const kiosk=createKiosk(content,{motion,goTo(top){if(lenis)lenis.scrollTo(top,{immediate:true,force:true});else window.scrollTo({top,behavior:"instant"});ScrollTrigger.update();},reset(){state.language=content.defaultLanguage;state.deep=false;finale.reset();document.querySelectorAll("details").forEach(d=>d.open=false);renderContent();lenis?.resize();ScrollTrigger.refresh();}});
const sceneTravel = { value: 0 };
const launchTravel = { progress: 0, blend: 0 };
const pinLayout = matchMedia("(min-width: 900px) and (min-height: 700px)");
let launch;
const orbitTravel = { blend:0,path:0,halo:0,loop:0,angle:.7 };
const orbitalUI = createOrbitalUI(content,orbitTravel);
const satelliteState = {blend:0,yaw:.28,pitch:-.12,selected:0,rect:null};
const satelliteUI = createSatelliteUI(content,satelliteState);
satelliteState.onProject = points => satelliteUI.project(points);
const ui = () => content.ui[state.language];
const make = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};
const app = document.querySelector('#app');
const skip = make('a', 'skip');
skip.href = '#story';
const background = make('div', 'backdrop');
background.setAttribute('aria-hidden', 'true');
// One fixed canvas for the entire camera journey.
const canvas = make('canvas', 'scene');
canvas.id = 'scene';
canvas.setAttribute('aria-hidden', 'true');
const stillSun = make('div', 'still-sun');
stillSun.setAttribute('aria-hidden', 'true');
const sceneCaption = make('p', 'scene-caption');
const staticNotice = make('p', 'static-notice');
const loader = make('div', 'loader');
loader.setAttribute('role', 'status');
const loaderText = make('p');
const loaderBar = make('progress');
loaderBar.max = 100;
loaderBar.value = 0;
loader.append(make('div', 'loader-mark'), loaderText, loaderBar);
const header = make('header', 'header');
const brand = make('a', 'brand');
brand.href = '#hero';
const controls = make('div', 'controls');
const languageGroup = make('div', 'segmented');
languageGroup.setAttribute('role', 'group');
const languageButtons = content.languages.map(({ id, label }) => {
  const button = make('button', '', label);
  button.type = 'button';
  button.lang = id;
  button.addEventListener('click', () => changeLanguage(id));
  languageGroup.append(button);
  return { id, button };
});
const depthGroup = make('div', 'segmented depth');
depthGroup.setAttribute('role', 'group');
const quickButton = make('button');
const deepButton = make('button');
quickButton.type = deepButton.type = 'button';
quickButton.addEventListener('click', () => changeDepth(false));
deepButton.addEventListener('click', () => changeDepth(true));
depthGroup.append(quickButton, deepButton);
controls.append(languageGroup, depthGroup);
header.append(brand, controls);
const visualButton=make('button','visual-mode');
visualButton.type='button';
const force2D=new URLSearchParams(location.search).get('view')==='2d';
visualButton.addEventListener('click',()=>{const url=new URL(location.href);if(force2D)url.searchParams.delete('view');else url.searchParams.set('view','2d');location.assign(url.href);});
header.append(visualButton);
const progress = make('div', 'scroll-progress');
progress.setAttribute('role', 'progressbar');
progress.setAttribute('aria-valuemin', '0');
progress.setAttribute('aria-valuemax', '100');
const progressFill = make('div');
progress.append(progressFill);
const nav = make('nav', 'chapter-nav');
const navList = make('ol');
nav.append(navList);
const main = make('main');
main.id = 'story';
main.tabIndex = -1;
const footer = make('footer');
footer.append(finale.footer,offline.element);
const status = make('div', 'sr-only');
status.setAttribute('role', 'status');
status.setAttribute('aria-live', 'polite');
app.append(background, stillSun, canvas, skip, header, progress, nav, main, footer, sceneCaption, staticNotice, status, loader);

const chapters = content.sections.map((section, index) => {
  const root = make('section', `chapter ${index === 0 ? 'hero' : ''}`);
  root.id = section.id;
  root.setAttribute('aria-labelledby', `${section.id}-title`);
  const wrap = make('div', 'chapter-inner');
  const eyebrow = make('p', 'eyebrow');
  const title = make(index === 0 ? 'h1' : 'h2');
  title.id = `${section.id}-title`;
  const body = make('p', 'intro');
  const card = make('aside', 'glass-card');
  const analogyLabel = make('p', 'card-label');
  const analogy = make('p');
  card.append(analogyLabel, analogy);
  const deep = make('div', 'deep-copy');
  deep.id = `${section.id}-deep`;
  const deepTitle = make('h3');
  const deepBody = make('div');
  deep.append(deepTitle, deepBody);
  const source = make('a', 'source');
  source.href = content.sources.find(item => item.id === section.sources[0]).url;
  source.target = '_blank';
  source.rel = 'noopener noreferrer';
  const effects = make('div', 'effects-grid');
  effects.setAttribute('role', 'group');
  wrap.append(eyebrow, title, body, card, effects, deep, source);
  let cta;
  let scrollLabel;
  if (index === 0) {
    cta = make('a', 'cta');
    cta.href = `#${content.sections[1].id}`;
    scrollLabel = make('p', 'scroll-hint');
    wrap.append(cta, scrollLabel);
  }
  if (section.id === 'launch') {
    launch = createLaunch(content, { travel: launchTravel, goTo(target) {
      if (lenis) lenis.scrollTo(target, { immediate: true, force: true, offset: typeof target === 'number' ? 0 : -(header.getBoundingClientRect().height+16) });
      else if (typeof target === 'number') window.scrollTo({top:target,behavior:'instant'});
      else window.scrollTo({top:scrollY+target.getBoundingClientRect().top-header.getBoundingClientRect().height-16,behavior:'instant'});
      ScrollTrigger.update();
    }});
    wrap.append(launch.element);
  }
  if (orbitalUI[section.id]) wrap.append(orbitalUI[section.id]);
  if (section.id === "satellite") wrap.append(satelliteUI.element);
  if (finale[section.id]) wrap.append(finale[section.id]);
  root.append(wrap);
  main.append(root);
  const item = make('li');
  const link = make('a', 'chapter-link');
  link.href = `#${section.id}`;
  const number = make('span', 'nav-number', String(index + 1).padStart(2, '0'));
  const label = make('span', 'nav-label');
  link.append(number, label);
  item.append(link);
  navList.append(item);
  return { section, root, eyebrow, title, body, analogyLabel, analogy, deep, deepTitle, deepBody, source, effects, cta, scrollLabel, link, label };
});
quickButton.setAttribute('aria-controls', chapters.map(c => c.deep.id).join(' '));
deepButton.setAttribute('aria-controls', chapters.map(c => c.deep.id).join(' '));

function announce(text) {
  clearTimeout(announcementTimer);
  status.textContent = '';
  announcementTimer = setTimeout(() => { status.textContent = text; }, 30);
}
function renderContent() {
  const copy = ui();
  offline.render(state.language);
  finale.render(state.language,state.deep);
  kiosk.render(state.language);
  visualButton.textContent=content.finale[state.language].ui[force2D?"rich":"simple"];
  visualButton.setAttribute("aria-label",content.finale[state.language].ui.visualLabel+": "+visualButton.textContent);
  document.documentElement.lang = state.language;
  document.title = copy.title;
  brand.textContent = copy.brand;
  brand.setAttribute('aria-label', copy.title);
  skip.textContent = copy.skip;
  languageGroup.setAttribute('aria-label', copy.language);
  depthGroup.setAttribute('aria-label', copy.depth);
  quickButton.textContent = copy.quick;
  deepButton.textContent = copy.deep;
  quickButton.setAttribute('aria-pressed', String(!state.deep));
  deepButton.setAttribute('aria-pressed', String(state.deep));
  for (const { id, button } of languageButtons) button.setAttribute('aria-pressed', String(id === state.language));
  nav.setAttribute('aria-label', copy.navigation);
  progress.setAttribute('aria-label', copy.progress);
  loaderText.textContent = copy.loading;
  loaderBar.setAttribute('aria-label', copy.loading);
  launch?.render(state.language,state.deep);
  orbitalUI.render(state.language,state.deep);
  satelliteUI.render(state.language,state.deep);
  orbitalUI.update(motion.matches);
  sceneCaption.textContent = copy.art;
  staticNotice.textContent = copy.staticNotice;
  for (const chapter of chapters) {
    const local = chapter.section[state.language];
    chapter.eyebrow.textContent = local.eyebrow;
    chapter.title.textContent = local.title;
    chapter.body.textContent = local.quick.body;
    chapter.analogyLabel.textContent = copy.analogy;
    chapter.analogy.textContent = local.quick.analogy;
    chapter.deep.hidden = !state.deep;
    chapter.deepTitle.textContent = copy.deeper;
    chapter.deepBody.replaceChildren(...local.deep.paragraphs.map(text => make('p', '', text)));
    chapter.source.textContent = chapter.section.sources[0].startsWith('nasa-') ? copy.sourceNASA : copy.source;
    chapter.effects.setAttribute('aria-label', copy.effects);
    chapter.effects.hidden = !local.effects;
    chapter.effects.replaceChildren(...(local.effects || []).map(effect => {
      const card = make('article', 'effect-card');
      const icon = make('span', `effect-icon icon-${effect.symbol}`);
      icon.setAttribute('aria-hidden', 'true');
      card.append(icon, make('h3', '', effect.title), make('p', '', effect.body));
      return card;
    }));
    chapter.label.textContent = local.nav;
    chapter.link.setAttribute('aria-label', `${copy.chapter} ${chapters.indexOf(chapter) + 1}: ${local.nav}`);
    if (chapter.cta) {
      chapter.cta.textContent = copy.start;
      chapter.scrollLabel.textContent = copy.scroll;
    }
  }
}
function preservePosition(update) {
  const anchor = chapters[state.active].root;
  const offset = anchor.getBoundingClientRect().top;
  update();
  cancelAnimationFrame(refreshFrame);
  refreshFrame = requestAnimationFrame(() => {
    const destination = window.scrollY + anchor.getBoundingClientRect().top - offset;
    lenis?.resize();
    if (lenis) lenis.scrollTo(destination, { immediate: true, force: true });
    else window.scrollTo({ top: destination, behavior: 'instant' });
    ScrollTrigger.refresh();
    updateProgress();
  });
}
function changeLanguage(language) {
  if (state.language === language) return;
  preservePosition(() => { state.language = language; renderContent(); });
  announce(ui().statusLanguage);
}
function changeDepth(deep) {
  if (state.deep === deep) return;
  preservePosition(() => { state.deep = deep; renderContent(); });
  announce(deep ? ui().statusDeep : ui().statusQuick);
}
function updateProgress() {
  const distance = document.documentElement.scrollHeight - innerHeight;
  const value = distance > 0 ? Math.max(0, Math.min(1, scrollY / distance)) : 0;
  progressFill.style.transform = `scaleX(${value})`;
  progress.setAttribute('aria-valuenow', String(Math.round(value * 100)));
  let active = 0;
  chapters.forEach((chapter, index) => {
    if (chapter.root.getBoundingClientRect().top <= innerHeight * 0.45) active = index;
  });
  state.active = active;
  document.documentElement.dataset.chapter=chapters[active].section.id;
  chapters.forEach((chapter, index) => {
    if (index === active) chapter.link.setAttribute('aria-current', 'location');
    else chapter.link.removeAttribute('aria-current');
  });
}
const tick = time => {
  if (document.hidden) return;
  lenis?.raf(time * 1000);
  solarScene?.setProgress(sceneTravel.value);
  solarScene?.setLaunch(launchTravel.progress,launchTravel.blend);
  solarScene?.setOrbital(orbitTravel);
  orbitalUI.update(motion.matches);
  satelliteUI.measure();
  solarScene?.setSatellite(satelliteState);
  solarScene?.draw(time);
};
function setupMotion() {
  context?.revert();
  progressTrigger?.kill();
  lenis?.destroy();
  lenis = undefined;
  gsap.ticker.remove(tick);
  if (!motion.matches) {
    lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tick);
  }
  solarScene?.setMotion(motion.matches);
  orbitalUI.update(motion.matches);
  context = gsap.context(() => {
    launch?.wire(!motion.matches && pinLayout.matches && document.documentElement.dataset.scene==='webgl');

    if (!motion.matches) {
      gsap.to(sceneTravel, { value: 1, ease: 'none', scrollTrigger: {
        trigger: document.querySelector('#why-sun'), start: 'top bottom', end: 'bottom top', scrub: 1
      }});
      gsap.to(launchTravel, { blend:1,ease:'none',scrollTrigger:{
        trigger:document.querySelector('#launch'),start:'top 90%',end:'top 15%',scrub:.5
      }});
      gsap.to(orbitTravel,{blend:1,ease:'none',scrollTrigger:{trigger:'#journey',start:'top 90%',end:'top 20%',scrub:.5}});
      gsap.to(orbitTravel,{path:1,ease:'none',scrollTrigger:{trigger:'#journey',start:'top 65%',end:'bottom 75%',scrub:.6}});
      gsap.to(orbitTravel,{halo:1,ease:'none',scrollTrigger:{trigger:'#halo',start:'top 90%',end:'top 20%',scrub:.6}});
      gsap.to(orbitTravel,{loop:1,ease:'none',scrollTrigger:{trigger:'#halo',start:'top 65%',end:'bottom 60%',scrub:.6}});
      gsap.to(satelliteState,{blend:1,ease:'none',scrollTrigger:{trigger:'#satellite',start:'top 90%',end:'top 20%',scrub:.5}});
      for (const chapter of chapters) {
        gsap.from(chapter.root.querySelector('.glass-card'), {
          y: 30, ease: 'none',
          scrollTrigger: { trigger: chapter.root, start: 'top 90%', end: 'top 35%', scrub: true }
        });
      }
    }
  }, main);
  progressTrigger = ScrollTrigger.create({
    start: 0, end: 'max', onUpdate: updateProgress, onRefresh: updateProgress
  });
  ScrollTrigger.refresh();
}
app.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.getElementById(link.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  if (lenis) lenis.scrollTo(target, { offset: -(header.getBoundingClientRect().height+16) });
  else window.scrollTo({ top: scrollY + target.getBoundingClientRect().top - header.getBoundingClientRect().height - 16, behavior: 'instant' });
  if (!target.hasAttribute('tabindex')) target.tabIndex = -1;
  target.focus({ preventScroll: true });
  history.replaceState(null, '', link.hash);
});
const visibility = () => {
  if (document.hidden) { lenis?.stop(); gsap.ticker.remove(tick); }
  else { lenis?.start(); if (!motion.matches) gsap.ticker.add(tick); ScrollTrigger.refresh(); }
};
motion.addEventListener('change', setupMotion);
pinLayout.addEventListener('change', setupMotion);
document.addEventListener('visibilitychange', visibility);
async function boot() {
renderContent();
loaderBar.value = 35;
// Each completed loading milestone advances the bar; no fake timer progress.
await Promise.allSettled([
  document.fonts.load('500 16px "Space Grotesk"'),
  document.fonts.load('400 16px "Inter"'),
  document.fonts.load('400 16px "Noto Sans Tamil"', 'தமிழ்')
]);
loaderBar.value = 80;
solarScene = createSolarScene(canvas, { onMode(mode) {
  const changed = document.documentElement.dataset.scene !== mode;
  document.documentElement.dataset.scene = mode;
  staticNotice.hidden = mode === 'webgl';
  satelliteUI.mode();
  if (changed && mode === 'fallback' && solarScene) requestAnimationFrame(setupMotion);
}});
setupMotion();
loaderBar.value = 100;
loaderText.textContent = ui().ready;
await new Promise(resolve => requestAnimationFrame(resolve));
loader.remove();
updateProgress();
kiosk.start();
offline.start();
}
boot();
if (import.meta.hot) import.meta.hot.dispose(() => {
  kiosk.dispose();
  finale.dispose();
  cancelAnimationFrame(layoutFrame);
  context?.revert();
  progressTrigger?.kill();
  lenis?.destroy();
  solarScene?.dispose();
  gsap.ticker.remove(tick);
  motion.removeEventListener('change', setupMotion);
  pinLayout.removeEventListener('change', setupMotion);
  document.removeEventListener('visibilitychange', visibility);
  cancelAnimationFrame(refreshFrame);
  clearTimeout(announcementTimer);
});

```

## src/offline.js

```javascript
export function createOfflineStatus(content){
 const element=document.createElement('p');element.className='offline-status';element.setAttribute('role','status');
 let language=content.defaultLanguage,key='offlinePreparing';
 function render(lang=language){language=lang;element.textContent=content.finale[language].ui[key];}
 function set(value){key=value;render();}
 async function start(){
  if(!import.meta.env.PROD){set('offlineDev');return;}
  if(!('serviceWorker' in navigator)||!window.isSecureContext){set('offlineUnavailable');return;}
  try{
   const registration=await navigator.serviceWorker.register(new URL('./sw.js',document.baseURI),{scope:'./',updateViaCache:'none'});
   function watch(){const worker=registration.installing;if(worker)worker.addEventListener('statechange',()=>{if(worker.state==='installed'&&registration.waiting)set('offlineUpdate');if(worker.state==='redundant')set('offlineUnavailable');});}
   registration.addEventListener('updatefound',watch);watch();
   await navigator.serviceWorker.ready;set(registration.waiting?'offlineUpdate':'offlineReady');
  }catch{set('offlineUnavailable');}
 }
 return{element,render,start};
}

```

## src/orbital-ui.js

```javascript
const NS='http://www.w3.org/2000/svg';
const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
const svg=(tag,attrs={})=>{const e=document.createElementNS(NS,tag);for(const [k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
export function createOrbitalUI(content, state) {
  let language='en',deep=false,selected='L1';
  const ui=()=>content.ui[language];
  const journey=el('div','journey-visual');
  const routeSvg=svg('svg',{viewBox:'0 0 800 320',role:'img'});
  const routePath='M 95 210 C 170 110 230 260 95 255 C -5 230 100 65 225 145 C 355 275 110 335 60 200 C 45 80 300 50 360 175 S 560 250 710 90';
  routeSvg.append(svg('path',{d:routePath,fill:'none',stroke:'#ffc77a','stroke-width':2,opacity:.18}));
  const drawing=svg('path',{d:routePath,fill:'none',stroke:'#ffc77a','stroke-width':3,pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1});routeSvg.append(drawing);
  routeSvg.append(svg('circle',{cx:115,cy:205,r:20,fill:'#4ca4c7'}),svg('circle',{cx:710,cy:90,r:6,fill:'#ffc77a'}));
  const earthText=svg('text',{x:115,y:250,'text-anchor':'middle',fill:'#b4e8f4'}),l1Text=svg('text',{x:710,y:67,'text-anchor':'middle',fill:'#ffc77a'});
  routeSvg.append(earthText,l1Text);
  const routeCaption=el('p','visual-note');const stageList=el('ol','journey-stages');journey.append(routeSvg,routeCaption,stageList);
  const lagrange=el('div','lagrange-interactive glass-card');
  const map=svg('svg',{viewBox:'0 0 1000 660',role:'img'});
  map.append(svg('circle',{cx:450,cy:330,r:300,fill:'none',stroke:'#ffffff24','stroke-width':2,'stroke-dasharray':'6 10'}));
  map.append(svg('path',{d:'M150 330 H840 M450 330 L600 70 L750 330 L600 590 Z',fill:'none',stroke:'#ffffff22','stroke-width':2}));
  map.append(svg('circle',{cx:450,cy:330,r:32,fill:'#ffc16d'}),svg('circle',{cx:750,cy:330,r:16,fill:'#89dbea'}));
  const sunLabel=svg('text',{x:450,y:394,'text-anchor':'middle',fill:'#ffd699'}),earthLabel=svg('text',{x:750,y:390,'text-anchor':'middle',fill:'#b8f2ff'});map.append(sunLabel,earthLabel);
  const coords={L1:[690,330],L2:[840,330],L3:[150,330],L4:[600,70],L5:[600,590]};
  const circles={};
  for(const point of content.lagrangePoints){
    const [x,y]=coords[point.id];const circle=svg('circle',{cx:x,cy:y,r:13,fill:'#23344c',stroke:'#ffc77a','stroke-width':3});
    circle.style.cursor='pointer';circle.addEventListener('click',()=>choose(point.id));circles[point.id]=circle;
    const label=svg('text',{x,y:y-27,'text-anchor':'middle',fill:'#f4eee2'});label.textContent=point.id;map.append(circle,label);
  }
  const buttons=el('div','point-buttons');buttons.setAttribute('role','group');
  const pointButtons={};
  for(const p of content.lagrangePoints){const b=el('button','',p.id);b.type='button';b.addEventListener('click',()=>choose(p.id));buttons.append(b);pointButtons[p.id]=b;}
  const panel=el('div','point-description');panel.setAttribute('aria-live','polite');panel.setAttribute('aria-atomic','true');
  const pointTitle=el('h3'),pointQuick=el('p'),pointDeep=el('p');panel.append(pointTitle,pointQuick,pointDeep);
  const note=el('p','visual-note');lagrange.append(map,buttons,panel,note);
  const halo=el('div','halo-visual');
  const views=el('div','orbit-views');views.setAttribute('role','group');
  const viewButtons=[];
  for(const [id,angle]of [['front',0],['tilted',.7],['side',1.4]]){
    const b=el('button');b.type='button';b.addEventListener('click',()=>{state.angle=angle;renderViews();drawHalo();});views.append(b);viewButtons.push({id,angle,b});
  }
  const haloSvg=svg('svg',{viewBox:'0 0 700 390',role:'img'});
  const orbitPath=svg('path',{fill:'none',stroke:'#8de3ed','stroke-width':3});
  const cross=svg('path',{d:'M340 195 H360 M350 185 V205',stroke:'#ffc77a','stroke-width':2});
  const craft=svg('rect',{width:14,height:14,rx:2,fill:'#ffc77a'});
  haloSvg.append(orbitPath,cross,craft);
  const orbitLabel=el('p','orbit-label'),haloNote=el('p','visual-note');halo.append(views,haloSvg,orbitLabel,haloNote);
  function choose(id){selected=id;renderPoint();}
  function renderPoint(){
    const p=content.lagrangePoints.find(p=>p.id===selected)[language];
    pointTitle.textContent=`${selected} · ${p.title}`;pointQuick.textContent=p.quick;pointDeep.textContent=p.deep;pointDeep.hidden=!deep;
    for(const id of Object.keys(pointButtons)){pointButtons[id].setAttribute('aria-pressed',String(id===selected));circles[id].setAttribute('fill',id===selected?'#ffc77a':'#23344c');}
  }
  function renderViews(){for(const {id,angle,b}of viewButtons){b.textContent=ui()[id];b.setAttribute('aria-pressed',String(angle===state.angle));}}
  function haloPoint(t){return [350+Math.cos(t)*240*Math.cos(state.angle)-Math.sin(2*t)*35*Math.sin(state.angle),195+Math.sin(t)*125];}
  let drawnAngle;
  function drawHalo(){if(drawnAngle!==state.angle){const pts=[];for(let i=0;i<=100;i++)pts.push(haloPoint(i/100*Math.PI*2));orbitPath.setAttribute('d',pts.map((p,i)=>`${i?'L':'M'}${p[0]} ${p[1]}`).join(' '));drawnAngle=state.angle;}const p=haloPoint((state.loop+.08)*Math.PI*2);craft.setAttribute('x',p[0]-7);craft.setAttribute('y',p[1]-7);}
  return {journey,lagrange,halo,
    render(lang,isDeep){language=lang;deep=isDeep;
      routeSvg.setAttribute('aria-label',ui().journeyDiagram);map.setAttribute('aria-label',ui().diagram);haloSvg.setAttribute('aria-label',ui().haloDiagram);
      earthText.textContent=ui().earth;l1Text.textContent=content.lagrangePoints[0].id;sunLabel.textContent=ui().sun;earthLabel.textContent=ui().earth;
      buttons.setAttribute('aria-label',ui().pointSelector);views.setAttribute('aria-label',ui().haloView);
      routeCaption.textContent=ui().routeNote;note.textContent=ui().diagramNote;haloNote.textContent=ui().haloNote;orbitLabel.textContent=ui().orbitLabel;
      stageList.setAttribute('aria-label',ui().journeyStages);
      stageList.replaceChildren(...content.journeyStages.map(s=>{const item=el('li');item.append(el('h3','',s[lang].title),el('p','',s[lang].body));return item;}));renderPoint();renderViews();drawHalo();
    },
    update(reduced){drawing.setAttribute('stroke-dashoffset',String(reduced?0:1-state.path));if(!reduced)drawHalo();}
  };
}

```

## src/orbits.js

```javascript
import * as THREE from 'three';

export function createOrbitalScenes() {
  const root=new THREE.Group();
  const journey=new THREE.Group();root.add(journey);
  const halo=new THREE.Group();root.add(halo);
  const earth=new THREE.Group();earth.position.set(-1.1,-.8,0);journey.add(earth);
  const surface=new THREE.ShaderMaterial({
    vertexShader:`varying vec3 p;varying vec3 n;void main(){p=position;n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec3 p;varying vec3 n;void main(){vec3 q=normalize(p);float land=sin(q.x*9.+sin(q.y*5.))*cos(q.y*8.+q.z*5.)+sin(q.z*13.+q.x*4.)*.4;vec3 c=mix(vec3(.025,.16,.32),vec3(.11,.35,.27),smoothstep(.23,.48,land));float cloud=smoothstep(.68,.88,sin(q.x*21.+q.y*8.)*cos(q.z*18.-q.y*11.));c=mix(c,vec3(.6,.8,.85),cloud*.55);float light=.5+.5*max(dot(normalize(n),normalize(vec3(-1.,.5,1.))),0.);gl_FragColor=vec4(c*light,1.);}`
  });
  earth.add(new THREE.Mesh(new THREE.SphereGeometry(.7,48,32),surface));
  const atmosphere=new THREE.ShaderMaterial({transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,
    vertexShader:`varying vec3 n;varying vec3 v;void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalMatrix*normal;v=-p.xyz;gl_Position=projectionMatrix*p;}`,
    fragmentShader:`varying vec3 n;varying vec3 v;void main(){float a=pow(1.-abs(dot(normalize(n),normalize(v))),3.);gl_FragColor=vec4(.1,.65,1.,a*.55);}`});
  earth.add(new THREE.Mesh(new THREE.SphereGeometry(.75,40,28),atmosphere));
  const route=[];
  for(let i=0;i<=180;i++) {
    const t=i/180;
    if(t<.57){const u=t/.57,a=u*Math.PI*5,r=.82+u*.42;route.push(new THREE.Vector3(-1.1+Math.cos(a)*r,-.8+Math.sin(a)*r*.65,Math.sin(a)*.35));}
    else {const u=(t-.57)/.43;route.push(new THREE.Vector3(-2.34+u*3.85,-.8+u*2.2,Math.sin(u*Math.PI)*.7));}
  }
  const routeGeometry=new THREE.BufferGeometry().setFromPoints(route);
  const routeLine=new THREE.Line(routeGeometry,new THREE.LineBasicMaterial({color:0xffc77a,transparent:true,opacity:.95}));journey.add(routeLine);
  const destination=new THREE.Mesh(new THREE.SphereGeometry(.05,12,8),new THREE.MeshBasicMaterial({color:0xffd48c}));destination.position.copy(route.at(-1));journey.add(destination);
  const craft=()=>{
    const group=new THREE.Group();
    group.add(new THREE.Mesh(new THREE.BoxGeometry(.17,.2,.15),new THREE.MeshStandardMaterial({color:0xd4a348,metalness:.65,roughness:.45})));
    const panelMaterial=new THREE.MeshStandardMaterial({color:0x237ab0,metalness:.4,roughness:.5,side:THREE.DoubleSide});
    for(const sign of [-1,1]){const panel=new THREE.Mesh(new THREE.BoxGeometry(.29,.14,.02),panelMaterial);panel.position.x=sign*.24;group.add(panel);}
    return group;
  };
  const traveler=craft();journey.add(traveler);
  const haloGroup=new THREE.Group();halo.add(haloGroup);
  const orbit=[];
  const point=t=>new THREE.Vector3(1.75*Math.cos(t),1.25*Math.sin(t),.35*Math.sin(2*t));
  for(let i=0;i<=160;i++)orbit.push(point(i/160*Math.PI*2));
  haloGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(orbit),new THREE.LineBasicMaterial({color:0x85e5ef})));
  // Crosshair marks a mathematical location, not a central gravitating object.
  const axes=[new THREE.Vector3(-.12,0,0),new THREE.Vector3(.12,0,0),new THREE.Vector3(0,-.12,0),new THREE.Vector3(0,.12,0)];
  haloGroup.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(axes),new THREE.LineBasicMaterial({color:0xffc77a})));
  const orbiter=craft();orbiter.scale.setScalar(1.35);haloGroup.add(orbiter);
  let viewAngle=.7;
  return {root,update(state,time,dt,camera){
    const chapter=document.documentElement.dataset.chapter;
    root.visible=state.blend>.001&&(chapter==='journey'||chapter==='halo');
    const depth=-(1-state.blend)*10;
    const worldHeight=2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*(camera.position.z-depth);
    const worldWidth=worldHeight*camera.aspect;
    // Reserve the right 36% of the viewport; match the CSS reading column.
    const scale=worldWidth*.36/4.7;
    root.position.set(worldWidth*.24,-.05,depth);
    root.scale.setScalar(scale);
    journey.visible=chapter==='journey';
    journey.scale.setScalar(1);
    journey.position.x=.45;
    earth.rotation.y=time*.045;
    const count=Math.max(2,Math.floor(1+state.path*(route.length-1)));
    routeGeometry.setDrawRange(0,count);
    traveler.position.copy(route[Math.min(count-1,route.length-1)]);
    traveler.rotation.y=time*.1;
    halo.visible=chapter==='halo';halo.scale.setScalar(1);
    viewAngle=THREE.MathUtils.lerp(viewAngle,state.angle,1-Math.exp(-dt*5));
    haloGroup.rotation.set(.16,viewAngle,-.2);
    const a=(state.loop+.08)*Math.PI*2;
    orbiter.position.copy(point(a));orbiter.rotation.y=a;
  }};
}

```

## src/rocket.js

```javascript
import * as THREE from 'three';

// Illustrative proportions, not an engineering reconstruction.
export function createRocket() {
  const root = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({color:0xe8ecee,roughness:.4,metalness:.3});
  const dark = new THREE.MeshStandardMaterial({color:0x617185,roughness:.5,metalness:.25});
  const orange = new THREE.MeshStandardMaterial({color:0xc76635,roughness:.5,metalness:.25});
  const gold = new THREE.MeshStandardMaterial({color:0xd5a13d,roughness:.35,metalness:.65});
  const blue = new THREE.MeshStandardMaterial({color:0x153858,roughness:.35,metalness:.55});
  const fire = new THREE.MeshBasicMaterial({color:0xffad3c,transparent:true,opacity:.8,blending:THREE.AdditiveBlending,depthWrite:false});
  function mesh(geometry,material,parent,y=0) {
    const item=new THREE.Mesh(geometry,material);item.position.y=y;parent.add(item);return item;
  }
  function cylinder(radius,height,material,parent,y=0) {return mesh(new THREE.CylinderGeometry(radius,radius,height,24),material,parent,y);}
  function stage(y,height,radius,material) {
    const group=new THREE.Group();group.position.y=y;root.add(group);
    cylinder(radius,height,material,group);
    cylinder(radius*1.025,.08,dark,group,-height/2+.09);
    cylinder(radius*1.025,.08,dark,group,height/2-.09);
    mesh(new THREE.CylinderGeometry(radius*.36,radius*.62,.2,16),dark,group,-height/2-.1);
    const flame=mesh(new THREE.ConeGeometry(radius*.64,1.1,16),fire,group,-height/2-.67);
    flame.rotation.z=Math.PI;
    return {group,flame,y};
  }
  const stages=[stage(-1.5,2.5,.27,white),stage(.43,1.24,.27,white),stage(1.47,.75,.24,orange),stage(2.05,.38,.2,dark)];
  const boosters=[];
  for(let i=0;i<6;i++) {
    const angle=i*Math.PI/3;
    const part=stage(-1.8,1.85,.12,white);
    part.group.position.x=Math.cos(angle)*.43;part.group.position.z=Math.sin(angle)*.43;
    mesh(new THREE.ConeGeometry(.12,.27,16),white,part.group,1.06);
    boosters.push({...part,angle,air:i===1||i===4});
  }
  const fairings=[];
  for(let i=0;i<2;i++) {
    const half=new THREE.Group();half.position.y=2.82;root.add(half);
    mesh(new THREE.CylinderGeometry(.34,.34,1,24,1,true,i*Math.PI,Math.PI),white,half);
    mesh(new THREE.ConeGeometry(.34,.5,24,1,true,i*Math.PI,Math.PI),white,half,.75);
    fairings.push(half);
  }
  const satellite=new THREE.Group();satellite.position.y=2.65;root.add(satellite);
  mesh(new THREE.BoxGeometry(.36,.4,.32),gold,satellite);
  for(const x of [-.205,.205]) {const panel=mesh(new THREE.BoxGeometry(.04,.34,.3),blue,satellite);panel.position.x=x;}
  const clamp=THREE.MathUtils.clamp;
  const ramp=(n,start)=>THREE.MathUtils.smoothstep(n,start,start+.75);
  function detach(part,n,start,direction=1) {
    const a=ramp(n,start);
    part.group.position.y=part.y-a*3;
    part.group.position.x=a*direction*1.35;
    part.group.rotation.z=a*direction*.45;
    part.group.visible=n<start+1.2;
  }
  return { root,
    update(progress,blend,time) {
      root.visible=blend>.001;
      const n=Math.min(clamp(progress,0,1)*16,14.99999);
      const mobile=innerWidth<900;
      const focus=THREE.MathUtils.smoothstep(n,4,10);
      root.position.set(mobile ? .35 : 2.55, THREE.MathUtils.lerp(-.15,-3.7,focus), (1-blend)*-12);
      root.scale.setScalar(mobile ? .58 : THREE.MathUtils.lerp(.74,1.5,focus));
      root.rotation.z=-.025-Math.min(n,4)*.015;
      root.rotation.y=.35;
      stages.forEach((s,i)=>{s.group.position.set(0,s.y,0);s.group.rotation.z=0;s.group.visible=true;s.flame.visible=false;});
      detach(stages[0],n,4,-1);detach(stages[1],n,7,1);detach(stages[2],n,9,-1);
      stages[0].flame.visible=n<4;
      stages[1].flame.visible=n>=5&&n<7;
      stages[2].flame.visible=n>=8&&n<9;
      stages[3].flame.visible=(n>=10&&n<11)||(n>=12&&n<13);
      for(const part of boosters) {
        const start=part.air?3:2;
        const a=ramp(n,start);
        part.group.position.set(Math.cos(part.angle)*(.43+a*1.6),part.y-a*2,Math.sin(part.angle)*(.43+a*1.6));
        part.group.rotation.z=-Math.cos(part.angle)*a*.5;
        part.group.visible=n<start+1.2;
        part.flame.visible=n<start&&(!part.air||n>=1);
        part.flame.scale.y=1+.08*Math.sin(time*18+part.angle);
      }
      fairings.forEach((half,i)=>{
        const a=ramp(n,6);const side=i===0?1:-1;
        half.position.set(side*a*1.7,2.82-a*.8,0);
        half.rotation.z=-side*a*.65;half.visible=n<7.2;
      });
      satellite.position.set(ramp(n,14)*.7,2.65+ramp(n,14)*1.0,0);
      stages.forEach(s=>{s.flame.scale.y=1+.07*Math.sin(time*20);});
      // The spacecraft remains stowed; panel deployment belongs to a later phase.
    }
  };
}

```

## src/satellite-ui.js

```javascript
const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
export function createSatelliteUI(content,state) {
  let language='en',deep=false,drag;
  const element=el('div','satellite-experience');
  const layout=el('div','satellite-layout');
  const stage=el('div','satellite-stage');stage.tabIndex=0;stage.setAttribute('role','group');
  const hint=el('p','satellite-hint');hint.id='satellite-help';stage.setAttribute('aria-describedby',hint.id);
  const sketch=el('div','satellite-sketch');sketch.setAttribute('aria-hidden','true');
  sketch.append(el('i','sketch-core'),el('i','sketch-panel panel-left'),el('i','sketch-panel panel-right'),el('i','sketch-boom'));stage.append(sketch);
  const positions=[[39,39],[57,39],[39,57],[57,57],[28,31],[68,65],[69,16]];
  const markers=content.instruments.map((p,i)=>{
    const b=el('button','instrument-marker',String(i+1));b.type='button';b.addEventListener('click',()=>select(i));stage.append(b);return b;
  });
  const details=el('div','instrument-details glass-card');details.id='instrument-details';details.setAttribute('aria-live','polite');details.setAttribute('aria-atomic','true');
  const name=el('p','eyebrow'),title=el('h3'),quick=el('p'),analogyLabel=el('p','card-label'),analogy=el('p'),extra=el('div','instrument-deep'),extraTitle=el('h4'),extraBody=el('p');extra.append(extraTitle,extraBody);details.append(name,title,quick,analogyLabel,analogy,extra);
  layout.append(stage,details);
  const rotation=el('div','rotation-controls');
  const left=el('button'),right=el('button'),reset=el('button');for(const b of [left,right,reset])b.type='button';rotation.append(left,right,reset);
  left.addEventListener('click',()=>{state.yaw-=.25;});right.addEventListener('click',()=>{state.yaw+=.25;});reset.addEventListener('click',()=>{state.yaw=.28;state.pitch=-.12;});
  const list=el('div','instrument-list');list.setAttribute('role','group');
  const buttons=content.instruments.map((p,i)=>{const b=el('button','',p.id);b.type='button';b.setAttribute('aria-controls',details.id);b.addEventListener('click',()=>select(i));list.append(b);return b;});
  markers.forEach(b=>b.setAttribute('aria-controls',details.id));
  const note=el('p','visual-note'),memory=el('p','memory-banner'),memoryNote=el('p','visual-note'),credit=el('p','payload-credit');
  element.append(hint,layout,rotation,list,note,memory,memoryNote,credit);
  function select(index){state.selected=index;renderDetails();}
  function renderDetails(){const p=content.instruments[state.selected],s=p[language],u=content.ui[language];name.textContent=p.id;title.textContent=s.title;quick.textContent=s.quick;analogyLabel.textContent=u.payloadAnalogy;analogy.textContent=s.analogy;extraTitle.textContent=u.payloadDeep;extraBody.textContent=s.deep;extra.hidden=!deep;buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===state.selected)));markers.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===state.selected)));}
  function interactive(){return document.documentElement.dataset.scene==='webgl';}
  stage.addEventListener('pointerdown',e=>{
    if(!interactive()||e.target.closest('button')||e.button!==0)return;
    drag={id:e.pointerId,x:e.clientX,y:e.clientY};stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');
  });
  stage.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;state.yaw+=(e.clientX-drag.x)*.009;state.pitch=Math.max(-1,Math.min(1,state.pitch+(e.clientY-drag.y)*.006));drag.x=e.clientX;drag.y=e.clientY;});
  function release(){drag=undefined;stage.classList.remove('dragging');}
  stage.addEventListener('pointerup',release);stage.addEventListener('pointercancel',release);stage.addEventListener('lostpointercapture',release);
  stage.addEventListener('keydown',e=>{
    if(e.target!==stage||!interactive())return;
    if(e.key==='ArrowLeft')state.yaw-=.2;else if(e.key==='ArrowRight')state.yaw+=.2;else if(e.key==='ArrowUp')state.pitch=Math.max(-1,state.pitch-.15);else if(e.key==='ArrowDown')state.pitch=Math.min(1,state.pitch+.15);else return;e.preventDefault();
  });
  function setFallback(){markers.forEach((b,i)=>{b.style.left=positions[i][0]+'%';b.style.top=positions[i][1]+'%';b.hidden=false;});}
  return {element,
    render(lang,isDeep){language=lang;deep=isDeep;const u=content.ui[lang];stage.setAttribute('aria-label',u.viewer);list.setAttribute('aria-label',u.instrumentList);left.textContent=u.rotateLeft;right.textContent=u.rotateRight;reset.textContent=u.resetView;note.textContent=u.modelNote;memory.textContent=u.memory;memoryNote.textContent=u.memoryNote;credit.textContent=u.madeIndia;markers.forEach((b,i)=>b.setAttribute('aria-label',`${u.openInstrument} ${content.instruments[i].id}`));renderDetails();this.mode();},
    mode(){const live=interactive();hint.textContent=content.ui[language][live?'dragHint':'staticHint'];rotation.hidden=!live;stage.classList.toggle('is-static',!live);if(!live)setFallback();},
    measure(){state.rect=stage.getBoundingClientRect();},
    project(points){if(!interactive())return;
      const clamp=(x,min,max)=>Math.max(min,Math.min(max,x));
      const positions=points.map(p=>({...p,x:clamp(p.x,24,state.rect.width-24),y:clamp(p.y,24,state.rect.height-24)}));
      for(let pass=0;pass<8;pass++)for(let i=0;i<positions.length;i++)for(let j=i+1;j<positions.length;j++){
        const a=positions[i],b=positions[j],dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy);
        if(length<48){const nx=length>1?dx/length:1,ny=length>1?dy/length:0,push=(48-length)/2;a.x-=nx*push;a.y-=ny*push;b.x+=nx*push;b.y+=ny*push;}
      }
      positions.forEach((p,i)=>{const b=markers[i];b.style.left=clamp(p.x,24,state.rect.width-24)+'px';b.style.top=clamp(p.y,24,state.rect.height-24)+'px';b.hidden=!p.visible;});
    }
  };
}

```

## src/satellite.js

```javascript
import * as THREE from 'three';

export function createSatellite() {
  const root=new THREE.Group();
  const gold=new THREE.MeshStandardMaterial({color:0xb88632,metalness:.65,roughness:.42});
  const silver=new THREE.MeshStandardMaterial({color:0xc9d4de,metalness:.65,roughness:.3});
  const dark=new THREE.MeshStandardMaterial({color:0x142335,metalness:.4,roughness:.4});
  const solar=new THREE.MeshStandardMaterial({color:0x174c80,metalness:.45,roughness:.35});
  const lens=new THREE.MeshStandardMaterial({color:0x64bcdb,metalness:.55,roughness:.15});
  function box(x,y,z,mat,px=0,py=0,pz=0){const m=new THREE.Mesh(new THREE.BoxGeometry(x,y,z),mat);m.position.set(px,py,pz);root.add(m);return m;}
  box(1.5,1.4,1.1,gold);
  box(1.57,.08,1.17,silver,0,.72);box(1.57,.08,1.17,silver,0,-.72);
  for(const side of [-1,1]) {
    box(.5,.07,.07,silver,side*1.0);
    box(1.5,1.28,.06,solar,side*1.95,0,0);
    for(let j=0;j<7;j++)box(.015,1.28,.065,silver,side*1.95-.75+j*.25,0,.005);
    for(let j=0;j<5;j++)box(1.5,.012,.065,silver,side*1.95,-.64+j*.32,.005);
  }
  const anchors=[[-.45,.46,.78],[.45,.44,.77],[-.5,-.36,.73],[.48,-.36,.74],[-.83,.58,0],[.84,-.58,0],[1.12,1.86,.03]];
  for(let i=0;i<4;i++){
    const [x,y,z]=anchors[i];
    const tube=new THREE.Mesh(new THREE.CylinderGeometry(i<2?.2:.11,i<2?.2:.11,.32,24),dark);tube.rotation.x=Math.PI/2;tube.position.set(x,y,z-.15);root.add(tube);
    const aperture=new THREE.Mesh(new THREE.CircleGeometry(i<2?.15:.075,24),lens);aperture.position.set(x,y,z+.018);root.add(aperture);
  }
  box(.23,.27,.28,silver,-.85,.45);box(.23,.27,.28,silver,.85,-.45);
  const boom=new THREE.Mesh(new THREE.CylinderGeometry(.022,.022,1.3,10),silver);boom.position.set(.91,1.22,0);boom.rotation.z=-.34;root.add(boom);
  box(.17,.14,.17,dark,1.12,1.86,.03);
  const dots=anchors.map(p=>{const m=new THREE.Mesh(new THREE.SphereGeometry(.057,12,8),new THREE.MeshBasicMaterial({color:0xffcf79}));m.position.fromArray(p).add(new THREE.Vector3(0,0,.07));root.add(m);return m;});
  const vector=new THREE.Vector3();
  return {root,
    update(state,camera){
      const r=state.rect;
      root.visible=state.blend>.01&&r&&r.bottom>100&&r.top<innerHeight;
      if(!root.visible)return;
      const h=2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.position.z;
      const w=h*camera.aspect;
      root.position.set((r.left+r.width/2)/innerWidth*w-w/2,h/2-(r.top+r.height/2)/innerHeight*h,0);
      root.rotation.set(state.pitch,state.yaw,0);
      root.scale.setScalar(Math.min(r.width/6.3,r.height/4)*h/innerHeight*.88*state.blend);
      dots.forEach((d,i)=>{d.material.color.setHex(i===state.selected?0xffffff:0xffcf79);d.scale.setScalar(i===state.selected?1.4:1);});
    },
    project(camera,rect){
      return dots.map(dot=>{dot.getWorldPosition(vector);vector.project(camera);return {x:(vector.x*.5+.5)*innerWidth-rect.left,y:(-.5*vector.y+.5)*innerHeight-rect.top,visible:Math.abs(vector.z)<1};});
    }
  };
}

```

## src/scene.js

```javascript
import * as THREE from 'three';
import { createRocket } from './rocket.js';
import { createOrbitalScenes } from './orbits.js';
import { createSatellite } from './satellite.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const vertex = `
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vView;
void main(){
  vPosition=position;
  vec4 mv=modelViewMatrix*vec4(position,1.0);
  vNormal=normalize(normalMatrix*normal);
  vView=normalize(-mv.xyz);
  gl_Position=projectionMatrix*mv;
}`;
const noise = `
float hash(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise3(vec3 p){
  vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
  return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
    mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
}
float fbm(vec3 p){float a=.5,s=0.0;for(int i=0;i<4;i++){s+=a*noise3(p);p=p*2.03+vec3(11.7,5.9,3.1);a*=.5;}return s;}
`;
const surface = `
uniform float uTime;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vView;
${noise}
void main(){
 vec3 p=normalize(vPosition);
 float t=uTime*.022;
 float flow=fbm(p*4.0+vec3(t,-t*.4,t*.3));
 float cells=fbm(p*25.0+flow*2.2+vec3(0,t,0));
 float fine=noise3(p*115.0+flow);
 float hot=smoothstep(.27,.72,cells*.8+fine*.2);
 vec3 color=mix(vec3(.48,.035,.003),vec3(1.6,.55,.065),hot);
 float rim=pow(1.0-max(dot(normalize(vNormal),normalize(vView)),0.0),3.0);
 color+=vec3(.7,.17,.012)*rim;
 gl_FragColor=vec4(color,1.0);
}`;
const halo = `
varying vec3 vNormal;
varying vec3 vView;
void main(){
 float rim=pow(1.0-abs(dot(normalize(vNormal),normalize(vView))),3.6);
 gl_FragColor=vec4(vec3(1.5,.32,.035),rim*.48);
}`;
const glowVertex = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
const glowFragment = `
varying vec2 vUv;uniform float uTime;
void main(){
 vec2 p=(vUv-.5)*2.0;float r=length(p);float a=atan(p.y,p.x);
 float rays=.89+.06*sin(a*17.0+uTime*.04)+.05*sin(a*31.0-uTime*.03);
 float glow=exp(-r*r*7.0)*(1.0-smoothstep(.35,1.0,r))*rays;
 gl_FragColor=vec4(vec3(1.0,.22,.018),glow*.65);
}`;

export function createSolarScene(canvas, { onMode }) {
  let renderer, composer, bloom, output, renderPass, scene, sun, stars, camera;
  let disposed = false, failed = false, suspended = false, quality = 1;
  let launchProgress = 0, launchBlend = 0, rocket, orbital;
  let orbitState = {blend:0,path:0,halo:0,loop:0,angle:.7};
  let satellite, satelliteState={blend:0,rect:null};
  let progress = 0, elapsed = 0, last = 0, samples = 0, totalMs = 0;
  let reduced = false;
  const pointer = new THREE.Vector2();
  const smoothed = new THREE.Vector2();
  const coarse = matchMedia('(pointer: coarse)');
  const weak = (navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
  const uniforms = { uTime: { value: 0 } };
  function release() {
    if (!renderer) return;
    scene?.traverse(object => {
      object.geometry?.dispose();
      if (object.material) for (const material of [object.material].flat()) material.dispose();
      if (object.isInstancedMesh) object.dispose();
    });
    bloom?.dispose(); output?.dispose(); renderPass?.dispose(); composer?.dispose();
    renderer.dispose();
    renderer = undefined;
  }
  function fallback() {
    failed = true;
    onMode('fallback');
    release();
  }
  function resize() {
    if (!renderer || disposed) return;
    const width = innerWidth, height = innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, quality === 1 ? (width < 760 ? 1.35 : 1.75) : 1));
    renderer.setSize(width, height, false);
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(width, height);
    last = 0;
  }
  function move(event) {
    if (coarse.matches || reduced) return;
    pointer.set((event.clientX / innerWidth - .5) * 2, (event.clientY / innerHeight - .5) * 2);
  }
  function lost(event) { event.preventDefault(); fallback(); }
  if (weak || new URLSearchParams(location.search).get('view')==='2d' || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    onMode('fallback');
    return { draw() {}, setProgress() {}, setLaunch() {}, setOrbital() {}, setSatellite() {}, setMotion() {}, dispose() {} };
  }
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
    renderer.setClearColor(0x070b14, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = .85;
    renderer.debug.onShaderError = () => { failed = true; };
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
    camera.position.set(0, 0, 9);
    sun = new THREE.Group();
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.65, 64, 40), new THREE.ShaderMaterial({ uniforms, vertexShader: vertex, fragmentShader: surface }));
    sun.add(sphere);
    const corona = new THREE.Mesh(new THREE.SphereGeometry(1.71, 48, 32), new THREE.ShaderMaterial({vertexShader: vertex, fragmentShader: halo, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false}));
    sun.add(corona);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(8.7, 8.7), new THREE.ShaderMaterial({uniforms, vertexShader: glowVertex, fragmentShader: glowFragment, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false}));
    glow.position.z = -.3;
    sun.add(glow);
    scene.add(sun);
    // One instanced draw call for every star; no per-star objects or textures.
    const count = innerWidth < 760 ? 420 : 800;
    stars = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 4, 3), new THREE.MeshBasicMaterial({color: 0xb1cfe1, transparent: true, opacity: .65}), count);
    const matrix = new THREE.Object3D();
    let seed = 42;
    const random = () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296; };
    for (let i = 0; i < count; i++) {
      matrix.position.set((random()-.5)*45, (random()-.5)*30, -4-random()*32);
      matrix.scale.setScalar(.009+random()*.021);
      matrix.updateMatrix();
      stars.setMatrixAt(i,matrix.matrix);
    }
    stars.instanceMatrix.needsUpdate = true;
    scene.add(stars);
    rocket = createRocket();
    scene.add(rocket.root);
    orbital=createOrbitalScenes();scene.add(orbital.root);
    satellite=createSatellite();scene.add(satellite.root);
    scene.add(new THREE.HemisphereLight(0xc1e4ff,0x313144,2.2));
    const key = new THREE.DirectionalLight(0xffe3b1,3.5);key.position.set(-3,4,6);scene.add(key);
    const rim = new THREE.DirectionalLight(0x69c9ff,2);rim.position.set(4,2,-2);scene.add(rim);
    composer = new EffectComposer(renderer);
    renderPass = new RenderPass(scene, camera);
    bloom = new UnrealBloomPass(new THREE.Vector2(1,1), .4, .65, .85);
    output = new OutputPass();
    composer.addPass(renderPass); composer.addPass(bloom); composer.addPass(output);
    resize();
    renderer.compile(scene, camera);
    if (failed) throw new Error();
    onMode('webgl');
  } catch {
    fallback();
  }
  window.addEventListener('resize',resize);
  window.addEventListener('pointermove',move,{passive:true});
  canvas.addEventListener('webglcontextlost',lost);
  return {
    setProgress(value) { progress = value; },
    setLaunch(value,blend) { launchProgress=value;launchBlend=blend; },
    setOrbital(value) { orbitState=value; },
    setSatellite(value) {satelliteState=value;},
    setMotion(value) {
      reduced = value; last = 0;
      onMode(failed ? 'fallback' : reduced ? 'static' : 'webgl');
    },
    draw(time) {
      if (disposed || failed || !renderer) return;
      if (['facts','quiz','faq'].includes(document.documentElement.dataset.chapter)) {last=0;return;}
      if ((innerWidth < 900 || innerHeight < 700) && launchBlend > .99 && orbitState.blend < .01) { last=0; return; }
      if (document.hidden || reduced) { last=0; suspended=true; return; }
      if (suspended) { last=0; suspended=false; }
      const dt = last ? Math.min(time-last,.1) : 1/60;
      last=time; elapsed+=dt;
      uniforms.uTime.value=elapsed;
      smoothed.lerp(pointer, 1-Math.exp(-dt*3));
      const mobile=innerWidth<760;
      sun.scale.setScalar(mobile ? .65 : 1);
      sun.position.set(mobile ? .04 : 2.45-progress*.65, mobile ? .9-progress*.4 : .25+progress*.15, -progress*2.5);
      sun.position.x += launchBlend*13;
      sun.visible=launchBlend<.99;
      rocket.update(launchProgress,launchBlend,elapsed);
      rocket.root.scale.multiplyScalar(1-orbitState.blend);
      rocket.root.visible=rocket.root.visible&&orbitState.blend<.99;
      orbital.update(orbitState,elapsed,dt,camera);
      sun.children[0].rotation.y=elapsed*.018;
      camera.position.set(smoothed.x*.1, -smoothed.y*.065, 9+progress*1.3);
      camera.lookAt(0,0,0);
      camera.updateMatrixWorld();
      orbital.root.scale.multiplyScalar(1-satelliteState.blend);
      orbital.root.visible=orbital.root.visible&&satelliteState.blend<.99;
      satellite.update(satelliteState,camera);
      if(satellite.root.visible){satellite.root.updateMatrixWorld(true);satelliteState.onProject?.(satellite.project(camera,satelliteState.rect));}
      stars.rotation.y=progress*.06+smoothed.x*.009;
      stars.rotation.x=smoothed.y*.006;
      try { composer.render(dt); } catch { fallback(); return; }
      if (failed) { fallback(); return; }
      if (elapsed>2 && samples<100) { samples++; totalMs+=dt*1000; }
      if (samples===100) {
        const average=totalMs/samples;
        if (average>65) { fallback(); return; }
        if (average>34 && quality===1) { quality=0; bloom.enabled=false; resize(); }
        samples++;
      }
    },
    dispose() {
      disposed=true;
      window.removeEventListener('resize',resize);
      window.removeEventListener('pointermove',move);
      canvas.removeEventListener('webglcontextlost',lost);
      release();
    }
  };
}

```

## src/styles.css

```css
:root{color-scheme:dark;--bg:#070b14;--text:#f5f4ee;--muted:#bcc5d5;--gold:#ffc77a;--cyan:#97e4ed;font-family:Inter,sans-serif;font-synthesis:none;background:var(--bg);color:var(--text);font-size:18px}
*{box-sizing:border-box}body{margin:0}button,a{-webkit-tap-highlight-color:transparent}button{font:inherit}a{color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}::selection{background:#ffc77a;color:#111827}:focus-visible{outline:3px solid var(--cyan);outline-offset:6px}html{scroll-padding-top:140px}body{overflow-x:hidden}p{line-height:1.75}button{min-height:44px}h1,h2,h3,.brand{font-family:'Space Grotesk',sans-serif}h1,h2{letter-spacing:-.055em;line-height:1.08;font-weight:500;margin:22px 0 28px;text-wrap:balance}h1{font-size:clamp(2.7rem,6.2vw,6.3rem);max-width:1080px}h2{font-size:clamp(2.4rem,5vw,5rem);max-width:950px}h3{font-size:1.15rem}html[lang=ta] body,html[lang=ta] button,html[lang=ta] h1,html[lang=ta] h2,html[lang=ta] h3,html[lang=ta] .brand{font-family:'Noto Sans Tamil',sans-serif}html[lang=ta] h1,html[lang=ta] h2{line-height:1.5;letter-spacing:-.025em;font-size:clamp(2rem,4vw,4rem)}[hidden]{display:none!important}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.backdrop{position:fixed;inset:0;z-index:-2;background:radial-gradient(ellipse at 92% 25%,#59301e70,transparent 48%),radial-gradient(ellipse at 4% 85%,#113a4e60,transparent 40%),var(--bg)}.backdrop:after{content:'';position:absolute;inset:0;opacity:.14;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%23ffffff' filter='url(%23n)' opacity='.22' d='M0 0h180v180H0z'/%3E%3C/svg%3E");pointer-events:none}.scene{position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none}.skip{position:fixed;top:-200px;left:20px;z-index:110;background:var(--gold);color:#10131c;padding:12px 20px}.skip:focus{top:16px}.header{position:fixed;top:0;left:0;right:0;z-index:20;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 4vw;background:#080d18ed;border-bottom:1px solid #ffffff18;backdrop-filter:blur(18px)}.brand{font-size:1.1rem;text-decoration:none;letter-spacing:.09em;white-space:nowrap}.controls{display:flex;gap:12px}.segmented{display:flex;border:1px solid #ffffff26;border-radius:100px;padding:4px;background:#131b29}.segmented button{color:#d0d8e6;background:none;border:0;border-radius:100px;padding:8px 17px;font-size:.78rem;font-weight:600}.segmented button[aria-pressed=true]{background:var(--gold);color:#151923}.segmented button:hover{box-shadow:inset 0 0 0 1px var(--gold)}.scroll-progress{position:fixed;z-index:22;left:0;right:0;top:0;height:3px;background:#ffffff12}.scroll-progress>div{height:100%;transform:scaleX(0);transform-origin:left;background:linear-gradient(90deg,var(--gold),var(--cyan))}.chapter-nav{position:fixed;right:2vw;top:50%;transform:translateY(-50%);z-index:15}.chapter-nav ol{list-style:none;padding:0;margin:0;display:grid;gap:12px}.chapter-link{display:flex;align-items:center;justify-content:flex-end;min-width:44px;min-height:44px;text-decoration:none;position:relative}.nav-number{width:36px;height:36px;display:grid;place-items:center;border:1px solid #ffffff35;border-radius:50%;color:var(--muted);font-size:.65rem;background:#0b111ee8}.chapter-link[aria-current] .nav-number{background:var(--gold);border-color:var(--gold);color:#161a24}.nav-label{position:absolute;right:48px;background:#121c2e;padding:8px 12px;border:1px solid #ffffff25;border-radius:8px;white-space:nowrap;font-size:.75rem;opacity:0;pointer-events:none}.chapter-link:hover .nav-label,.chapter-link:focus-visible .nav-label{opacity:1}.chapter{min-height:100svh;display:flex;align-items:center;padding:150px 10vw 100px 8vw;position:relative;scroll-margin-top:0}.chapter+.chapter{border-top:1px solid #ffffff12}.chapter-inner{width:100%;max-width:1120px;margin:auto}.eyebrow{font-size:.7rem;letter-spacing:.19em;color:var(--gold);font-weight:600;margin:0}.intro{font-size:clamp(1.1rem,1.7vw,1.5rem);max-width:740px;color:#d6dce5;margin:0 0 30px}.glass-card{padding:22px 28px;border:1px solid #ffffff24;border-radius:18px;background:linear-gradient(110deg,#ffffff0c,#ffffff03);backdrop-filter:blur(12px);max-width:730px;box-shadow:0 20px 60px #00000018}.glass-card p{margin:0;font-size:1rem}.glass-card .card-label{color:var(--gold);font-size:.67rem;text-transform:uppercase;letter-spacing:.13em;font-weight:600;margin-bottom:10px}.deep-copy{border-left:2px solid var(--cyan);padding:2px 0 2px 24px;max-width:740px;margin-top:30px}.deep-copy h3{color:var(--cyan);margin:10px 0}.deep-copy p{color:#d6dce5;font-size:1rem}.source{display:block;width:fit-content;font-size:.72rem;color:var(--muted);margin-top:22px;text-underline-offset:4px}.cta{display:inline-flex;align-items:center;min-height:48px;background:var(--gold);color:#121824;border-radius:100px;padding:14px 24px;text-decoration:none;font-weight:600;margin-top:30px;font-size:.85rem}.cta:after{content:'↓';margin-left:20px}.scroll-hint{font-size:.72rem;color:var(--muted);margin-top:22px}.scroll-hint:before{content:'';display:inline-block;width:30px;height:1px;background:var(--gold);vertical-align:middle;margin-right:12px}footer{padding:40px 8vw;border-top:1px solid #ffffff20;color:var(--muted);display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-size:.8rem}.loader{position:fixed;inset:0;z-index:100;background:var(--bg);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px}.loader p{font-size:1rem}.loader progress{width:min(280px,70vw);height:5px;accent-color:var(--gold)}.loader-mark{width:48px;height:48px;border:1px solid var(--gold);border-radius:50%;box-shadow:0 0 50px #ff9b3733}
@media(min-width:1800px){:root{font-size:24px}.chapter-inner{max-width:1500px}.intro,.glass-card,.deep-copy{max-width:1050px}}
@media(max-width:760px){.header{padding:12px 18px;flex-wrap:wrap;gap:10px}.brand{font-size:.95rem}.controls{gap:6px}.segmented button{padding:7px 11px;font-size:.7rem}.chapter{padding:170px 46px 75px 22px}.chapter-nav{right:5px}.nav-number{width:27px;height:27px;font-size:.6rem}.chapter-nav ol{gap:3px}.glass-card{padding:20px}.intro{font-size:1.05rem}.eyebrow{font-size:.6rem;letter-spacing:.12em}h1{font-size:clamp(2.4rem,9vw,3.9rem)}.chapter-link{min-width:38px}html[lang=ta] .controls{flex-wrap:wrap}.deep-copy{padding-left:18px}footer{padding:30px 22px}}
@media(max-width:460px){.header{display:block}.controls{margin-top:10px;justify-content:space-between}.segmented button{padding:7px 10px}.brand{display:inline-block}.chapter{padding-top:170px}.depth{flex:1;justify-content:center}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.glass-card{backdrop-filter:none}}
/* Phase 2: one shared visual behind both narrative chapters. */
.backdrop{z-index:0;pointer-events:none;background:radial-gradient(ellipse at 84% 45%,#27130e80,transparent 55%),var(--bg)}
.scene{z-index:1}.chapter,footer{z-index:2;position:relative}.header{z-index:20}.chapter-nav{z-index:15}
.chapter{min-height:112svh;padding-top:160px;padding-bottom:120px}.chapter-inner{max-width:1450px}
.hero .chapter-inner{margin-left:0}.hero h1{font-size:clamp(2.8rem,4.8vw,5rem);max-width:15ch;letter-spacing:-.055em}
.hero .eyebrow{max-width:60ch}.hero .intro,.hero .glass-card,.hero .deep-copy{max-width:570px}
.hero .intro{font-size:clamp(1.05rem,1.5vw,1.25rem)}
.hero .glass-card{background:#0b101cdd;backdrop-filter:blur(16px)}
.chapter-inner>h1,.chapter-inner>h2,.intro,.eyebrow{text-shadow:0 2px 30px #070b14}
#why-sun{background:linear-gradient(180deg,#070b1400,#070b14e6 18%,#070b14f2 90%)}
#why-sun .chapter-inner{max-width:1120px;margin-left:0}
#why-sun h2{max-width:17ch}#why-sun .intro{max-width:760px}
.effects-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:40px 0 24px;max-width:1100px}
.effect-card{border:1px solid #ffffff24;border-radius:16px;padding:22px 20px;background:#101827ec}
.effect-card h3{font-size:1rem;margin:18px 0 10px}.effect-card p{font-size:.88rem;color:var(--muted);margin:0;line-height:1.65}
.effect-icon{display:block;width:26px;height:26px;border:1px solid var(--gold);position:relative;color:var(--gold)}
.icon-satellite{transform:rotate(-30deg);width:18px;height:24px;margin-left:5px}.icon-satellite:before,.icon-satellite:after{content:'';position:absolute;top:5px;width:8px;height:13px;border:1px solid var(--gold)}.icon-satellite:before{left:-11px}.icon-satellite:after{right:-11px}
.icon-location{border-radius:50% 50% 50% 0;transform:rotate(-45deg);width:22px;height:22px}.icon-location:after{content:'';position:absolute;inset:6px;border:1px solid var(--gold);border-radius:50%}
.icon-signal{border-radius:100% 0 0 0;border-bottom:0;border-right:0;transform:rotate(45deg);width:23px;height:23px}.icon-signal:after{content:'';position:absolute;bottom:0;right:0;width:12px;height:12px;border:1px solid var(--gold);border-bottom:0;border-right:0;border-radius:100% 0 0 0}
.icon-power{border:0;background:var(--gold);clip-path:polygon(55% 0,13% 57%,48% 57%,38% 100%,88% 38%,56% 38%)}
.scene-caption{position:fixed;right:5vw;bottom:16px;z-index:3;max-width:38vw;font-size:.6rem;color:#d7c9b3;text-align:right;pointer-events:none;background:#070b14bd;padding:5px 10px;border-radius:6px}
.static-notice{position:fixed;bottom:14px;left:4vw;font-size:.65rem;background:#070b14ed;padding:6px 12px;z-index:4;color:var(--muted);max-width:45vw}
.still-sun{display:none;position:fixed;z-index:1;pointer-events:none;right:3vw;top:23vh;width:clamp(280px,36vw,650px);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffe4a8,#f5ab31 30%,#d65b0b 65%,#ffb438 95%);box-shadow:0 0 50px #ffb53566,0 0 160px #ff6f2633,inset 0 0 22px #ffe2a9}
html[data-scene=fallback] .still-sun,html[data-scene=static] .still-sun{display:block}
html[data-scene=fallback] .scene,html[data-scene=static] .scene{visibility:hidden}
footer{background:#070b14;padding-bottom:95px}
html[lang=ta] .hero h1{font-size:clamp(2rem,3.5vw,3.7rem);max-width:19ch}
@media(max-width:1100px) and (min-width:760px){.hero .intro,.hero .glass-card,.hero .deep-copy{max-width:53vw}.effects-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:759px){
 .hero{padding-top:58svh;background:linear-gradient(180deg,transparent 26svh,#070b14dd 60svh,#070b14ee 85%)}
 .hero h1{font-size:clamp(2.3rem,8.8vw,4rem);max-width:18ch}.hero .eyebrow{font-size:.59rem;letter-spacing:.1em}
 .hero .intro,.hero .glass-card,.hero .deep-copy{max-width:100%}
 .effects-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.effect-card{padding:18px 14px}.effect-card h3{font-size:.86rem}.effect-card p{font-size:.8rem}
 .scene-caption{right:9px;bottom:7px;max-width:70vw;font-size:.5rem}.static-notice{position:absolute;top:140px;bottom:auto;left:20px;max-width:75vw;font-size:.6rem}
 .still-sun{top:23svh;right:calc(50% - 145px);width:290px}
 #why-sun{padding-top:110px}.chapter-nav{right:3px}.nav-label{max-width:75vw;white-space:normal}
 html[lang=ta] .hero h1{font-size:clamp(1.9rem,7vw,3rem);max-width:100%;line-height:1.5}
}
@media(max-width:380px){.effects-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.still-sun{display:block}.scene{visibility:hidden}}
/* Tamil glyph fallback is needed even while the interface is in English. */
:root{font-family:Inter,'Noto Sans Tamil',sans-serif}
h1,h2,h3,.brand{font-family:'Space Grotesk','Noto Sans Tamil',sans-serif}
button[lang=ta]{font-family:'Noto Sans Tamil',sans-serif}
/* Phase 3: the launch remains readable without pinning or WebGL. */
#launch{background:linear-gradient(#070b14f2, #070b1400 750px);display:block;min-height:100svh;padding-right:8vw}
#launch .chapter-inner{max-width:1400px}#launch h2{max-width:18ch}
.launch-experience{margin-top:65px}.launch-panel{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:center;min-height:calc(100svh - 145px);gap:4vw;padding:20px 0}
.launch-caption{max-width:560px;background:#0b1422f2!important;transform:none!important;padding:30px}
.launch-caption h3{font-size:clamp(1.5rem,2.6vw,2.7rem);line-height:1.25;letter-spacing:-.035em;margin:20px 0}
.launch-caption .eyebrow{font-size:.7rem}.launch-caption p{font-size:1.05rem}.launch-caption .flight-time{font-size:.8rem;color:var(--cyan);margin-top:18px}
.flight-buttons{display:flex;gap:12px;margin-top:25px;flex-wrap:wrap}.flight-buttons button,.skip-flight{font:inherit;border:1px solid #ffffff40;border-radius:30px;color:var(--text);background:#162233;padding:12px 18px;font-size:.8rem}
.flight-buttons button:last-child{background:var(--gold);color:#141927;border-color:var(--gold)}.flight-buttons button:disabled{opacity:.4;cursor:default}
.launch-caption .flight-hint{font-size:.75rem;color:var(--muted);margin:18px 0}.skip-flight{background:none;padding:8px 0;border:0;border-radius:0;text-decoration:underline;text-underline-offset:4px}
.flight-disclaimer{font-size:.75rem;color:var(--muted);max-width:700px}.flight-details{background:#0c1422f5;padding:24px;border:1px solid #ffffff26;border-radius:16px;margin-top:30px;max-width:850px}.flight-details summary{cursor:pointer;min-height:44px;line-height:1.7;color:var(--gold);font-size:1rem}.flight-details ol{padding-left:26px}.flight-details li{padding:12px 0;border-top:1px solid #ffffff18}.flight-details h4{font-size:1rem;margin:8px 0}.flight-details p{font-size:.95rem;color:var(--muted)}.flight-details .flight-time{font-size:.8rem;color:var(--cyan)}
#launch-end{height:1px;scroll-margin-top:150px}.launch-space{height:450px;display:grid;place-items:center}.static-rocket{display:none;width:100px;height:350px;position:relative;transform:rotate(12deg)}.rocket-body{position:absolute;left:32px;top:0;width:36px;height:320px;background:linear-gradient(90deg,#8495a6,#fff 48%,#bdc7d3);clip-path:polygon(50% 0,100% 10%,100% 100%,0 100%,0 10%)}.rocket-body:after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(transparent 0 68px,#c4704299 70px 82px,transparent 84px 100px)}.rocket-booster{position:absolute;bottom:30px;width:22px;height:170px;background:linear-gradient(90deg,#8395a8,#e1e8ed);border-radius:50% 50% 3px 3px}.rocket-booster.left{left:6px}.rocket-booster.right{right:6px}
html[data-scene=fallback] .static-rocket,html[data-scene=static] .static-rocket{display:block}
html[data-chapter=launch] .still-sun{display:none}html[data-chapter=launch] .scene-caption{display:none}
html[lang=ta] .launch-caption h3{line-height:1.5;font-size:clamp(1.35rem,2vw,2rem)}html[lang=ta] .launch-caption p{font-size:.95rem}
@media(max-width:899px),(max-height:699px){
 .launch-panel{grid-template-columns:1fr;min-height:0;gap:15px}.launch-caption{max-width:100%;padding:23px}.launch-space{height:330px;order:-1;background:radial-gradient(ellipse,#243e5466,transparent 68%)}.static-rocket{display:block;transform:rotate(12deg) scale(.8)}
 html[data-chapter=launch] .scene{visibility:hidden}#launch{background:#070b14e8;padding-left:22px;padding-right:46px}.flight-details{padding:16px}.flight-details ol{padding-left:22px}.launch-experience{margin-top:24px}.launch-caption h3{font-size:1.8rem}
}
.launch-panel,.launch-caption,.flight-details,.launch-space{min-width:0;max-width:100%}
.launch-caption,.flight-details{overflow-wrap:anywhere}
/* Phase 4: Earth-to-L1, an accessible five-point diagram and halo views. */
#journey,#halo{display:block;min-height:120svh;padding-right:8vw;background:linear-gradient(90deg,#070b14ef 0%,#070b14ce 38%,#070b1410 100%)}
#journey h2,#halo h2{max-width:16ch}#journey .intro,#halo .intro,#journey .glass-card,#halo .glass-card{max-width:610px}
#lagrange{background:#070b14e8;display:block}#lagrange .chapter-inner{max-width:1100px}
.journey-visual{margin-top:36px;max-width:1100px}.journey-visual>svg{width:min(100%,640px);height:auto;display:block;background:#0a1424dd;border-radius:20px;border:1px solid #ffffff18}
.journey-stages{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;list-style:none;padding:0;counter-reset:stage;margin-top:30px}
.journey-stages li{border:1px solid #ffffff24;border-radius:16px;background:#0e1828f2;padding:22px;counter-increment:stage}
.journey-stages li:before{content:counter(stage,decimal-leading-zero);color:var(--gold);font-family:'Space Grotesk',sans-serif;font-size:.8rem}
.journey-stages h3{font-size:1rem;line-height:1.5}.journey-stages p{font-size:.86rem;color:var(--muted);line-height:1.7}
.visual-note{font-size:.75rem;color:var(--muted);line-height:1.65;max-width:650px}
.lagrange-interactive{margin-top:35px;max-width:100%;background:#0b1424f5}.lagrange-interactive svg{width:100%;height:auto;display:block;max-height:580px}.lagrange-interactive svg text{font-size:23px;font-family:Inter,'Noto Sans Tamil',sans-serif}
.point-buttons,.orbit-views{display:flex;gap:10px;flex-wrap:wrap}.point-buttons button,.orbit-views button{min-width:48px;min-height:48px;padding:10px 17px;border:1px solid #ffffff40;background:#152237;color:var(--text);border-radius:30px;font-size:.85rem}
.point-buttons button[aria-pressed=true],.orbit-views button[aria-pressed=true]{color:#101724;background:var(--gold);border-color:var(--gold)}
.point-description{padding:14px 0;min-height:165px;max-width:820px}.point-description h3{font-size:1.35rem;line-height:1.5}.point-description p{font-size:1rem;margin:14px 0}
.halo-visual{margin-top:35px;min-height:430px;max-width:690px}.halo-visual>svg{display:block;width:100%;height:auto;background:#0c1827db;border-radius:20px;margin-top:25px}.orbit-label{font-size:.9rem;color:var(--gold)}
html[data-scene=webgl] .halo-visual>svg{visibility:hidden}html[data-scene=webgl] .halo-visual{max-width:600px}
html[data-chapter=journey] .still-sun,html[data-chapter=lagrange] .still-sun,html[data-chapter=halo] .still-sun{display:none}
html[data-chapter=journey] .scene-caption,html[data-chapter=lagrange] .scene-caption,html[data-chapter=halo] .scene-caption{display:none}
@media(max-width:1000px){.journey-stages{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:899px){
 #journey,#halo,#lagrange{padding-left:22px;padding-right:46px;background:#070b14ee}
 .journey-stages{grid-template-columns:1fr}.journey-stages li{padding:20px}.journey-stages p{font-size:.95rem}
 .lagrange-interactive{padding:16px}.lagrange-interactive svg text{font-size:30px}.point-buttons{gap:6px}.point-buttons button{padding:8px 12px;min-width:44px}.point-description{min-height:0;overflow-wrap:anywhere}.point-description h3{font-size:1.15rem}
 .halo-visual{min-height:0}.orbit-views button{font-size:.75rem;padding:8px 13px}.halo-visual>svg{visibility:visible!important}
 html[data-chapter=journey] .scene,html[data-chapter=lagrange] .scene,html[data-chapter=halo] .scene{visibility:hidden}
}
/* Phase 5: DOM controls and projected hotspots share the existing canvas. */
#satellite,#why-space,#science,#matters{display:block;padding-right:8vw;background:linear-gradient(180deg,#070b14ed,#070b1470)}
#satellite .chapter-inner{max-width:1450px}#satellite h2{max-width:18ch}
.satellite-experience{margin-top:36px}.satellite-hint{font-size:.85rem;color:var(--muted);max-width:780px}
.satellite-layout{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:28px;align-items:start}
.satellite-stage{position:relative;min-width:0;height:500px;border:1px solid #ffffff28;border-radius:22px;touch-action:pan-y;cursor:grab}
.satellite-stage.dragging{cursor:grabbing;touch-action:none}.satellite-stage.is-static{cursor:default}
.instrument-marker{position:absolute;z-index:4;width:44px;height:44px;min-height:44px;transform:translate(-50%,-50%);border:1px solid #ffe1ae;border-radius:50%;background:#111d2bed;color:var(--gold);font-size:.8rem;box-shadow:0 0 18px #ffc77a22}
.instrument-marker[aria-pressed=true]{background:var(--gold);color:#091420}
.instrument-details{min-width:0;background:#0d1829f5;transform:none!important;padding:25px;overflow-wrap:anywhere}
.instrument-details h3{font-size:1.65rem;line-height:1.4;margin:16px 0}.instrument-details>p{margin:14px 0;font-size:1rem}.instrument-details .card-label{margin:24px 0 8px}.instrument-details .eyebrow{font-size:.8rem;color:var(--gold)}
.instrument-deep{border-top:1px solid #ffffff28;margin-top:22px;padding-top:10px}.instrument-deep h4{color:var(--cyan);font-size:.9rem}.instrument-deep p{color:var(--muted);font-size:.95rem}
.rotation-controls,.instrument-list{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}.rotation-controls button,.instrument-list button{min-height:48px;padding:10px 18px;border-radius:24px;background:#152337;color:var(--text);border:1px solid #ffffff38;font:inherit;font-size:.82rem}
.instrument-list button[aria-pressed=true]{background:var(--gold);color:#101721;border-color:var(--gold)}
.memory-banner{padding:25px;border:1px solid #fbc47750;border-radius:16px;background:#1f1a17ed;color:var(--gold);font-size:clamp(1.15rem,1.8vw,1.6rem);line-height:1.7;margin-top:35px;max-width:1050px}.payload-credit{font-size:1rem;color:var(--muted);max-width:900px}
.satellite-sketch{display:none;position:absolute;inset:0;pointer-events:none}.is-static .satellite-sketch{display:block}
.sketch-core{position:absolute;left:36%;top:32%;width:26%;height:34%;background:linear-gradient(120deg,#ceac56,#7d5722);border:2px solid #e8d39c;border-radius:8px}.sketch-panel{position:absolute;top:38%;width:25%;height:23%;border:1px solid #a0cedc;background:repeating-linear-gradient(90deg,transparent 0 18px,#6a9bad 19px 20px),repeating-linear-gradient(0deg,#133751 0 18px,#6a9bad 19px 20px)}.panel-left{left:8%}.panel-right{right:8%}.sketch-boom{position:absolute;width:3px;height:28%;background:#c7d9dd;left:65%;top:13%;transform:rotate(22deg)}
#science .effects-grid{grid-template-columns:repeat(3,minmax(0,1fr));max-width:1150px}#science .effect-card{padding:25px}#science .effect-card p{font-size:.95rem}
html[data-chapter=satellite] .still-sun,html[data-chapter=why-space] .still-sun,html[data-chapter=science] .still-sun,html[data-chapter=matters] .still-sun{display:none}
html[data-chapter=satellite] .scene-caption,html[data-chapter=why-space] .scene-caption,html[data-chapter=science] .scene-caption,html[data-chapter=matters] .scene-caption{display:none}
@media(max-width:1000px){.satellite-layout{grid-template-columns:1fr}.satellite-stage{height:430px;max-width:720px}.instrument-details{max-width:100%}#science .effects-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:759px){#satellite,#why-space,#science,#matters{padding-left:22px;padding-right:46px}.satellite-stage{height:330px}.satellite-layout{gap:16px}.instrument-details{padding:20px}.instrument-details h3{font-size:1.35rem}.instrument-marker{width:38px;min-height:38px;height:38px;font-size:.72rem}.instrument-list button{font-size:.75rem;padding:9px 12px}.rotation-controls button{font-size:.7rem;padding:8px 12px}#science .effects-grid{grid-template-columns:1fr}.memory-banner{padding:20px}.chapter-nav ol{gap:0}.nav-number{width:24px;height:24px}.chapter-link{min-height:36px}}
#satellite{background:transparent}.satellite-stage{touch-action:none}.satellite-stage.is-static{touch-action:pan-y}
.continue-earth{display:block;background:var(--gold);color:#101724;border:0;border-radius:24px;padding:12px 20px;font:inherit;font-size:.85rem;margin:16px 0;min-height:48px}
/* Earth clarity fix: reserve a separate visual column with no glass overlay. */
@media(min-width:900px){
 #journey,#halo{background:none;padding-right:0}
 #journey .chapter-inner,#halo .chapter-inner{width:44vw;max-width:640px;margin-left:0;margin-right:0}
 #journey .intro,#halo .intro,#journey .glass-card,#halo .glass-card,#journey .deep-copy,#halo .deep-copy{max-width:100%}
 #journey .journey-visual,#halo .halo-visual{max-width:100%}
 #journey .journey-stages{grid-template-columns:repeat(2,minmax(0,1fr))}
 #journey .journey-visual>svg{max-width:100%}
 #journey .glass-card,#halo .glass-card{backdrop-filter:none;background:#0c1522f5}
}
/* Phase 6: learning activities and expo controls. */
#facts,#quiz,#faq{display:block;background:#070b14f5}
#facts .chapter-inner,#quiz .chapter-inner,#faq .chapter-inner{max-width:1150px}
.facts-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:44px}
.fact-card{padding:28px;border:1px solid #ffffff28;border-radius:20px;background:linear-gradient(145deg,#17263be8,#111622ee);min-width:0}
.fact-value{font-family:'Space Grotesk',sans-serif;font-size:clamp(1.5rem,2.6vw,2.5rem);color:var(--gold);line-height:1.3;margin:0 0 24px;overflow-wrap:anywhere;font-variant-numeric:tabular-nums}
.fact-card h3{font-size:1rem}.fact-card>p:last-child{font-size:.95rem;color:var(--muted)}
.quiz-panel{margin-top:40px;padding:clamp(22px,4vw,48px);border-radius:24px;background:#111d2cf5;border:1px solid #97e4ed55;max-width:940px}
.quiz-panel fieldset{border:0;padding:0;margin:24px 0;min-width:0}.quiz-question,.score-title{font:500 clamp(1.3rem,2.5vw,2rem)/1.5 'Space Grotesk',sans-serif;padding:0;margin:0 0 25px;width:100%}
.quiz-options{display:grid;gap:12px}.quiz-option{text-align:left;padding:18px 22px;border-radius:14px;border:1px solid #ffffff40;background:#19283d;color:var(--text);font-size:1.05rem;line-height:1.6}
.quiz-option:hover:not(:disabled){border-color:var(--gold)}.quiz-option:disabled{cursor:default;opacity:1}.quiz-option.is-correct{border:2px solid #a4edd4;background:#153c32}.quiz-option.is-wrong{border:2px solid #ffbaa9;background:#462725}
.quiz-feedback{padding:18px;border-left:3px solid var(--cyan);background:#070d18;line-height:1.8}.quiz-actions{display:flex;flex-wrap:wrap;gap:12px}.action-button{padding:12px 20px;border:1px solid var(--gold);border-radius:24px;background:var(--gold);color:#101824;min-height:48px;margin:8px 12px 8px 0;font-size:1rem;line-height:1.6}.action-button.secondary{color:var(--text);background:transparent}
.share-text{width:100%;min-height:115px;resize:vertical;background:#080f1b;color:var(--text);border:1px solid #ffffff44;border-radius:12px;padding:16px;font:inherit;line-height:1.8}
.faq-list{margin-top:40px;max-width:960px}.faq-item{border-bottom:1px solid #ffffff30;padding:20px 0}.faq-item summary{font-size:1.2rem;line-height:1.7;cursor:pointer;padding:12px 24px 12px 0}.faq-item p{max-width:850px}.faq-analogy{color:var(--gold)}.faq-deep{padding:15px 20px;border-left:2px solid var(--cyan);background:#111d2c}.faq-item .source{margin-bottom:15px}
.expo-footer{max-width:1150px;margin:auto}.expo-footer h2{font-size:clamp(1.8rem,4vw,3.5rem)}.logo-placeholders{display:flex;flex-wrap:wrap;gap:20px;margin:30px 0}.logo-slot{padding:28px;min-height:110px;display:grid;place-items:center;border:2px dashed #9faec3;border-radius:12px;color:var(--muted);max-width:100%;font-size:.9rem}.footer-links{display:flex;flex-wrap:wrap;gap:24px}.expo-footer>p{max-width:850px;color:var(--muted)}
.visual-mode{background:#142236;color:var(--text);border:1px solid #ffffff40;border-radius:22px;padding:8px 14px;font-size:.75rem;white-space:nowrap}.header{gap:12px}.controls{margin-left:auto}
.chapter-nav{max-height:calc(100svh - 160px);overflow-y:auto;scrollbar-width:none}.chapter-nav ol{gap:0}.chapter-link{min-height:44px}
html[data-chapter=facts] .scene,html[data-chapter=quiz] .scene,html[data-chapter=faq] .scene,html[data-chapter=facts] .still-sun,html[data-chapter=quiz] .still-sun,html[data-chapter=faq] .still-sun,html[data-chapter=facts] .scene-caption,html[data-chapter=quiz] .scene-caption,html[data-chapter=faq] .scene-caption{display:none}
.confetti{position:fixed;inset:0;z-index:90;pointer-events:none;overflow:hidden}.confetti i{position:absolute;top:-20px;width:9px;height:16px;animation:confetti-fall 2.8s ease-in forwards}@keyframes confetti-fall{to{transform:translate(var(--drift),110vh) rotate(600deg)}}
.kiosk-panel{position:fixed;left:0;right:0;bottom:0;z-index:40;display:grid;grid-template-columns:1fr auto;gap:4px 24px;padding:14px 4vw;background:#07101bf5;border-top:1px solid #97e4ed66}.kiosk-caption{font-size:clamp(1.3rem,2vw,2rem);line-height:1.35;margin:0;color:var(--gold)}.kiosk-panel>p:nth-child(2){grid-column:1;font-size:.85rem;margin:0;color:var(--muted)}.kiosk-panel button{grid-column:2;grid-row:1/3;align-self:center;background:#172b40;color:var(--text);border:1px solid #97e4ed;border-radius:24px;padding:10px 20px}
html[data-kiosk=true] *,html[data-kiosk=true]{cursor:none!important}html[data-kiosk=true] footer{padding-bottom:240px}html[data-kiosk=true] .chapter{padding-bottom:220px}html[data-kiosk=true] .scene-caption{bottom:160px}
html[data-scene=fallback] #journey .chapter-inner,html[data-scene=static] #journey .chapter-inner,html[data-scene=fallback] #halo .chapter-inner,html[data-scene=static] #halo .chapter-inner{width:100%;max-width:1000px}
html[data-scene=fallback] #journey,html[data-scene=static] #journey,html[data-scene=fallback] #halo,html[data-scene=static] #halo{padding-right:10vw}
@media(max-width:900px){.facts-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.header{flex-wrap:wrap}.header .brand{margin-right:auto}.header .controls{order:3;width:100%;margin-left:0;justify-content:space-between}.header .visual-mode{margin-left:auto}.chapter-nav{max-height:calc(100svh - 200px);top:58%}.kiosk-caption{font-size:1.15rem}.kiosk-panel>p:nth-child(2){font-size:.7rem}}
@media(max-width:600px){.facts-grid{grid-template-columns:1fr}.fact-card{padding:24px}.header{display:flex}.header .controls{margin-top:0;gap:5px}.segmented button{font-size:.68rem;padding:8px}.chapter-nav .nav-number{width:26px;height:26px}.chapter-nav{right:0}.chapter-link{min-width:36px;min-height:44px}.kiosk-panel{display:block;padding:12px 18px}.kiosk-panel button{margin-top:8px;font-size:.8rem;padding:8px 16px}.faq-item summary{font-size:1.1rem}.quiz-option{font-size:1rem}.quiz-panel{padding:20px}.logo-slot{width:100%}.instrument-marker{width:44px;height:44px;min-height:44px}.orbit-views button{font-size:.85rem}.rotation-controls button{font-size:.85rem}.effect-card p,.effect-card h3{font-size:.95rem}}
html[lang=ta] .quiz-question,html[lang=ta] .score-title,html[lang=ta] .fact-value{font-family:'Noto Sans Tamil',sans-serif;line-height:1.65}
@media(pointer:fine) and (prefers-reduced-motion:no-preference){body{cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Ccircle cx='13' cy='13' r='9' fill='%23070b14' stroke='%23ffc77a' stroke-width='2'/%3E%3Ccircle cx='13' cy='13' r='2' fill='%23ffc77a'/%3E%3C/svg%3E") 13 13,auto}}
.offline-status{margin:36px auto 0;max-width:1150px;color:var(--cyan);font-size:.9rem;line-height:1.7}.logo-slot img{max-width:220px;max-height:110px;object-fit:contain}

```

## scripts/build-offline.mjs

```javascript
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { createHash } from 'node:crypto';
const root=resolve('dist');
async function walk(dir){const all=[];for(const entry of await readdir(dir,{withFileTypes:true})){const file=resolve(dir,entry.name);if(entry.isDirectory())all.push(...await walk(file));else if(entry.name!=='sw.js')all.push(file);}return all;}
const files=(await walk(root)).sort();
const hash=createHash('sha256');for(const file of files){hash.update(relative(root,file));hash.update(await readFile(file));}
const version=hash.digest('hex').slice(0,16);
const assets=files.map(file=>'./'+relative(root,file).split('\\').join('/'));
const worker=`// Generated from the entire production bundle. Do not edit dist files.
const PREFIX='aditya-l1:'+self.registration.scope+':';
const CACHE=PREFIX+${JSON.stringify(version)};
const ASSETS=${JSON.stringify(assets)};
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});
// Wait for old tabs to close before activating a new build; keep each visit coherent.
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{for(const name of await caches.keys())if(name.startsWith(PREFIX)&&name!==CACHE)await caches.delete(name);await self.clients.claim();})());
});
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 const home=new URL('./',self.registration.scope);
 if(event.request.mode==='navigate'&&(url.pathname===home.pathname||url.pathname===home.pathname+'index.html')){
  event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(new URL('index.html',home).href))||fetch(event.request)));return;
 }
 if(ASSETS.some(path=>new URL(path,self.registration.scope).href===url.href))event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request))||fetch(event.request)));
});
`;
await writeFile(resolve(root,'sw.js'),worker);
console.log(`Offline cache ${version}: ${assets.length} local files.`);

```

## scripts/check-build.mjs

```javascript
import { readFile,stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
const root=resolve('dist');const sw=await readFile(resolve(root,'sw.js'),'utf8');
const assets=JSON.parse(sw.match(/const ASSETS=(\[[^\n]+\]);/)[1]);
assert(assets.includes('./index.html'));assert(assets.some(a=>a.endsWith('.woff2')));
for(const asset of assets){assert(!/^https?:/.test(asset));assert((await stat(resolve(root,asset))).size>0);}
const html=await readFile(resolve(root,'index.html'),'utf8');
assert(!/(?:src|href)=["']https?:/i.test(html));
for(const asset of assets.filter(a=>a.endsWith('.css'))){const css=await readFile(resolve(root,asset),'utf8');assert(!/url\(\s*["']?https?:/i.test(css));}
const c=JSON.parse(await readFile('src/content.json','utf8'));
for(const s of c.sections)for(const lang of ['en','ta'])assert(s[lang].quick.body&&s[lang].deep.paragraphs.length);
assert.equal(c.instruments.length,7);assert.equal(c.sections.length,13);
assert.equal(c.verification.filter(v=>v.status==='VERIFY').length,0);
console.log(`PASS: ${assets.length} local cache entries, bundled fonts, no external HTML/CSS assets, bilingual layers, 7 instruments, 13 chapters, no unresolved VERIFY items.`);

```

## scripts/serve.mjs

```javascript
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
const port=Number(process.env.PORT||4173),host=process.env.HOST||'127.0.0.1';
const base='/'+(process.env.BASE_PATH||'').replace(/^\/+|\/+$/g,'');
const prefix=base==='/'?'/':base+'/';
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.woff2':'font/woff2','.woff':'font/woff','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.glb':'model/gltf-binary'};
await stat(resolve(root,'index.html'));
createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(pathname===base&&base!=='/'){res.writeHead(302,{Location:prefix});res.end();return;}
  if(!pathname.startsWith(prefix)){res.writeHead(404);res.end();return;}
  const file=resolve(root,pathname.slice(prefix.length)||'index.html');
  if(!file.startsWith(resolve(root)+sep)){res.writeHead(403);res.end();return;}
  const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:data);
 }catch{res.writeHead(404);res.end();}
}).listen(port,host,()=>console.log(`Aditya-L1: http://${host}:${port}${prefix}\nExpo: http://${host}:${port}${prefix}?kiosk=1\nPress Ctrl+C to stop.`)).on('error',error=>{console.error(error.message);process.exitCode=1;});

```

## .github/workflows/pages.yml

```yaml
name: Publish Aditya-L1
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: false
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4

```

## tests/offline.cjs

```javascript
// Run with PLAYWRIGHT_MODULE pointing to an installed Playwright module and
// CHROMIUM_EXECUTABLE pointing to a browser binary. No test dependency is shipped.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');const {spawn}=require('node:child_process');const path=require('node:path');
(async()=>{
 const root=path.resolve(__dirname,'..');
 const servers=[['4173',''],['4174','/aditya-l1']].map(([PORT,BASE_PATH])=>spawn(process.execPath,['scripts/serve.mjs'],{cwd:root,env:{...process.env,PORT,BASE_PATH},stdio:'ignore'}));
 let browser;try{
 await new Promise(r=>setTimeout(r,600));
 const args=process.env.CHROMIUM_ARGS?JSON.parse(process.env.CHROMIUM_ARGS):[];
 browser=await chromium.launch({executablePath:process.env.CHROMIUM_EXECUTABLE||undefined,args,headless:true});
 const results=[];const errors=[];const external=[];
 for(const base of ['http://127.0.0.1:4173/','http://127.0.0.1:4174/aditya-l1/']){
  const context=await browser.newContext({reducedMotion:'reduce',viewport:{width:1280,height:900}});
  await context.route('**/*',route=>{if(new URL(route.request().url()).hostname!=='127.0.0.1'){external.push(route.request().url());return route.abort();}return route.continue();});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base);await page.waitForSelector('.loader',{state:'detached'});
  await page.waitForFunction(()=>document.querySelector('.offline-status')?.textContent.includes('Ready for offline'));
  await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
  const cacheCount=await page.evaluate(async()=>{const keys=await caches.keys();const c=await caches.open(keys.find(k=>k.startsWith('aditya-l1:')));return(await c.keys()).length;});assert.equal(cacheCount,55);
  // Disable every network connection, then perform a navigation with a query string.
  await context.setOffline(true);await page.goto(base+'?view=2d');await page.waitForSelector('.loader',{state:'detached'});
  assert.equal(await page.locator('.chapter').count(),13);
  await page.getByRole('button',{name:'தமிழ்',exact:true}).click();await page.getByRole('button',{name:'விரிவாக',exact:true}).click();
  assert.equal(await page.locator('.faq-deep').count(),6);
  assert(await page.evaluate(()=>document.fonts.check('400 16px "Noto Sans Tamil"','தமிழ்')));
  for(let i=0;i<7;i++){await page.locator('.instrument-list button').nth(i).click();assert.equal(await page.locator('.instrument-marker[aria-pressed=true]').count(),1);}
  await page.getByRole('button',{name:'EN',exact:true}).click();
  for(const a of [0,1,1,2,0,1]){await page.locator('.quiz-option').nth(a).click();await page.locator('.quiz-panel .action-button').first().click();}
  assert((await page.locator('.score-title').textContent()).includes('6 / 6'));
  await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  results.push({base,cachedFiles:cacheCount,offlineQuiz:'6/6',TamilFonts:true,mobileOverflow:false});
 }
 assert.deepEqual(errors,[]);assert.deepEqual(external,[]);console.log(JSON.stringify({results,errors,externalRequests:external.length},null,2));
 }finally{await browser?.close();servers.forEach(s=>s.kill());}
})().catch(error=>{console.error(error);process.exitCode=1;});

```
