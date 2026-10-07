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
