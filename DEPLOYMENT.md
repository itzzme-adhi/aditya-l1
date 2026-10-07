# Run and publish Aditya-L1

## Fastest way to use the finished exhibit

This ZIP includes the finished dist folder. Install Node.js if it is not already on the computer, extract the ZIP, and open Terminal in the aditya-l1 folder:

```bash
npm run expo
```

Open http://127.0.0.1:4173/ in the browser. The expo loop is http://127.0.0.1:4173/?kiosk=1 . Keep Terminal open. Ctrl+C stops the local server. This command uses Node's built-in modules, so it needs neither npm ci nor internet. On macOS, Start-Expo.command runs the same server; if Finder will not open it, run `bash Start-Expo.command` from Terminal. On Windows, Start-Expo.bat runs it. Use your browser's full-screen mode for the projector.

Do not open dist/index.html by double-clicking it. JavaScript modules must be served over HTTP or HTTPS.

## Editing and rebuilding

Use Node.js 22 or newer. From the directory containing package.json:

```bash
npm ci
npm run dev
```

npm ci needs internet for the first dependency installation. Open the Local URL Vite prints. Changes to src update this development preview. To create the production bundle after editing:

```bash
npm run build
npm run check:build
npm run expo
```

The build runs Vite and then generates dist/sw.js from every file in dist. Rebuild after changing text, logos, fonts or models. Do not hand-edit dist. The bundle uses relative paths so the same files work at a domain root or under a repository subdirectory.

## Offline use: two distinct options

**Local expo laptop:** keep the Node expo server running and open the localhost URL. Everything required by the exhibit is local, so Wi-Fi can be off even for its first visit.

**Hosted site on a visitor's phone:** first open the HTTPS site while online. Wait for “Ready for offline use on this browser” in the footer. It can then reload offline in that browser, including EN/தமிழ், both depth layers, the quiz and instruments. A first-ever visit to a hosted URL still needs internet. Browser storage can be cleared or evicted; the local server is the reliable expo backup. Private browsing and some browser settings can block offline caching.

Source links and operating-system sharing may require connectivity. Downloading or copying a score remains available where the browser allows it. The site does not fetch live mission data.

New builds receive a new cache identifier. Existing open tabs keep their current complete version. When the footer announces an update, close every tab of the site and reopen while online. This lets the waiting update activate. For troubleshooting, clear this site's service worker and storage in browser developer tools, then reload online. Do not clear unrelated sites' storage.

A LAN URL such as http://192.168.x.x is not a secure context for service workers on many browsers. It can still load the site from the running laptop, but use HTTPS hosting for phone offline caching.

## Netlify

For a manual deployment, build locally and upload the **dist folder** using Netlify's manual deploy interface. For Git integration, put the project contents at the repository root, import the repository, and use:

- Build command: `npm run build`
- Publish directory: `dist`

netlify.toml supplies these settings. No environment secrets are needed. Deploying uploads the exhibit to a public URL according to your chosen project settings.

## Vercel

Import a Git repository containing this project. Choose the directory containing package.json as the Root Directory. The included vercel.json selects Vite, `npm run build`, and `dist`. Deploy from the dashboard and use the resulting HTTPS URL. No backend, database or API keys are required.

## GitHub Pages

Put the **contents** of aditya-l1 at the repository root, including .github/workflows/pages.yml. In repository Settings → Pages, select **GitHub Actions** as the source. The supplied workflow builds on a push to main or when manually started in Actions, then uploads dist to Pages. If your default branch has another name, change `branches: [main]` in the workflow. Hosting availability and repository visibility depend on your GitHub plan and settings.

The relative asset paths and scope-aware offline worker support a project URL such as https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/ . Those capitalised names are values you supply, not literal URLs. Keep the trailing slash. Use `?kiosk=1` after it for expo mode.

## Before announcing your URL

1. Open the real deployed URL in a fresh browser. Check fonts, Tamil and the Earth transition.
2. Try each of the seven instrument buttons and finish the quiz.
3. Wait for the footer's offline-ready message. Disconnect, reload, and switch language.
4. Check kiosk interaction and its 60-second idle reset on the actual expo device.
5. Confirm the authorised logos and college name are correct.

This package is deployment-ready; it has not been published to a hosting account. Choose one provider and deploy using the steps above. No hosting account or repository was supplied for an actual publication.

## Documentation checked

- Vite deployment: https://vite.dev/guide/static-deploy.html
- Netlify Vite setup: https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/
- Service worker requirements and lifecycle: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
