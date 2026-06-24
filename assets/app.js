/* ── Theme ── */
const THEME_KEY = 'adhunt_theme';

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  document.querySelectorAll('.theme-toggle button').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.themeSet === theme));
}

document.querySelectorAll('[data-theme-set]').forEach(btn =>
  btn.addEventListener('click', () => setTheme(btn.dataset.themeSet)));

setTheme(localStorage.getItem(THEME_KEY) ||
  (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

/* ── Language ── */
const LANG_KEY = 'adhunt_lang';

function setLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.querySelectorAll('[data-en]').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
  document.querySelectorAll('[data-ru]').forEach(el => el.style.display = lang === 'ru' ? '' : 'none');
  document.querySelectorAll('.lang button').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  // bilingual placeholders
  document.querySelectorAll('[data-ph-en]').forEach(inp => {
    inp.placeholder = lang === 'ru' ? (inp.dataset.phRu || '') : (inp.dataset.phEn || '');
  });
}

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
setLang(localStorage.getItem(LANG_KEY) || 'en');

/* ── Burger / mobile nav ── */
const burger = document.querySelector('.burger');
let mobileNav = document.querySelector('.mobile-nav');

if (burger && !mobileNav) {
  mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  const links = document.querySelector('.nav-links');
  if (links) mobileNav.innerHTML = links.innerHTML;
  const contact = document.querySelector('.nav-right .btn-primary');
  if (contact) { const clone = contact.cloneNode(true); clone.style = ''; mobileNav.appendChild(clone); }
  document.body.appendChild(mobileNav);
}
if (burger) burger.addEventListener('click', () => mobileNav.classList.toggle('open'));

/* ── Scroll reveal with stagger ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    // stagger siblings inside .cards, .dirs, .vacs
    const parent = el.parentElement;
    if (parent && (parent.classList.contains('cards') || parent.classList.contains('dirs') || parent.classList.contains('vacs'))) {
      const siblings = [...parent.children];
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = (idx * 0.08) + 's';
    }
    el.classList.add('visible');
    revealObserver.unobserve(el);
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// Safety net: show everything after 2.5s if observer missed
setTimeout(() => document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('visible')), 2500);

/* ── Counter animation ── */
function animateCount(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

const countObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); countObserver.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

/* Hover effects are handled purely in CSS for a calmer, lighter feel. */
