/* ================================
   toukrichtemed — Main JavaScript
   Bilingual FR/AR · Vanilla JS
   ================================ */

/* ---- Language Switcher ---- */
const LANG_KEY = 'toukr_lang';

function setLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem(LANG_KEY, lang);

  // Update switcher button label
  document.querySelectorAll('.lang-btn-label').forEach(el => {
    el.textContent = lang === 'ar' ? 'FR' : 'عربية';
  });

  // Update active page link aria-current (re-evaluate)
  updateActiveNav();
}

function initLanguage() {
  const saved = localStorage.getItem(LANG_KEY);
  const lang = saved || 'fr';
  setLanguage(lang);
}

/* ---- Active Navigation ---- */
function updateActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPage = href.split('/').pop();
    const isActive = (linkPage === currentPath) ||
      (currentPath === '' && linkPage === 'index.html') ||
      (currentPath === 'index.html' && linkPage === 'index.html');
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
    link.classList.toggle('active', isActive);
  });
}

/* ---- Mobile Menu ---- */
function initMobileMenu() {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);

    // Toggle hamburger ↔ close icon
    const iconOpen = btn.querySelector('.icon-menu');
    const iconClose = btn.querySelector('.icon-close');
    if (iconOpen) iconOpen.classList.toggle('hidden', isOpen);
    if (iconClose) iconClose.classList.toggle('hidden', !isOpen);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
      const iconOpen = btn.querySelector('.icon-menu');
      const iconClose = btn.querySelector('.icon-close');
      if (iconOpen) iconOpen.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
    }
  });
}

/* ---- Sticky Navbar ---- */
function initStickyNav() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ---- Scroll Animations (IntersectionObserver) ---- */
function initScrollAnimations() {
  const animatedEls = document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right');
  if (!animatedEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  animatedEls.forEach(el => observer.observe(el));
}

/* ---- Animated Counters ---- */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1600;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(eased * target);
    el.textContent = prefix + value.toLocaleString('fr-FR') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ---- FAQ Accordion ---- */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      items.forEach(i => i.classList.remove('open'));

      // Open current if was closed
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ---- Scroll to Top ---- */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- Language button click ---- */
function initLangBtn() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('lang');
      setLanguage(current === 'ar' ? 'fr' : 'ar');
    });
  });
}

/* ---- Contact form → WhatsApp ---- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = (form.querySelector('[name="name"]')?.value || '').trim();
    const email = (form.querySelector('[name="email"]')?.value || '').trim();
    const phone = (form.querySelector('[name="phone"]')?.value || '').trim();
    const message = (form.querySelector('[name="message"]')?.value || '').trim();

    const lang = document.documentElement.getAttribute('lang');
    let text;
    if (lang === 'ar') {
      text = `مرحباً، أنا ${name}.\n📧 ${email}${phone ? '\n📞 ' + phone : ''}\n\n${message}`;
    } else {
      text = `Bonjour, je suis ${name}.\n📧 ${email}${phone ? '\n📞 ' + phone : ''}\n\n${message}`;
    }

    const waUrl = `https://wa.me/212698921518?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}

/* ---- Smooth Scroll for anchor links ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });

        // Close mobile menu if open
        document.getElementById('mobile-menu')?.classList.remove('open');
      }
    });
  });
}

/* ---- Portfolio Grid (dynamic from JSON config) ---- */
function buildCardHeader(p) {
  if (p.type === 'image') {
    return `<div class="relative h-52 overflow-hidden bg-gray-200">
        <img src="${p.image}" alt="${p.imageAlt}" class="w-full h-full object-cover" loading="lazy" />
        <div class="portfolio-card-overlay">
          <div class="text-white">
            <div class="text-xs font-semibold text-blue-200 mb-1" data-lang="fr">${p.overlayCategory.fr}</div>
            <div class="text-xs font-semibold text-blue-200 mb-1" data-lang="ar">${p.overlayCategory.ar}</div>
            <div class="font-bold" data-lang="fr">${p.overlayTitle.fr}</div>
            <div class="font-bold" data-lang="ar">${p.overlayTitle.ar}</div>
          </div>
        </div>
        <div class="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">✓ 24H</div>
      </div>`;
  }
  return `<div class="relative h-52 overflow-hidden bg-gradient-to-br ${p.bg} flex items-center justify-center">
      <span class="text-6xl" aria-hidden="true">${p.emoji}</span>
      <div class="portfolio-card-overlay">
        <div class="text-white">
          <div class="text-xs font-semibold text-blue-200 mb-1" data-lang="fr">${p.overlayCategory.fr}</div>
          <div class="text-xs font-semibold text-blue-200 mb-1" data-lang="ar">${p.overlayCategory.ar}</div>
          <div class="font-bold" data-lang="fr">${p.overlayTitle.fr}</div>
          <div class="font-bold" data-lang="ar">${p.overlayTitle.ar}</div>
        </div>
      </div>
      <div class="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">✓ 24H</div>
    </div>`;
}

function buildPortfolioCard(p, index) {
  const delays = ['', 'delay-100', 'delay-200'];
  const delay = delays[index % delays.length];
  const linkSvg = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`;

  const article = document.createElement('article');
  article.className = `portfolio-card fade-up${delay ? ' ' + delay : ''}`;
  article.innerHTML = `
    ${buildCardHeader(p)}
    <div class="p-5">
      <div class="flex items-center justify-between mb-2">
        <span class="${p.badgeClass}" data-lang="fr">${p.badge.fr}</span>
        <span class="${p.badgeClass}" data-lang="ar">${p.badge.ar}</span>
        <span class="text-xs text-gray-400 font-mono" data-lang="fr">${p.delivery.fr}</span>
        <span class="text-xs text-gray-400 font-mono" data-lang="ar">${p.delivery.ar}</span>
      </div>
      <h3 class="font-bold text-gray-900 mb-2" data-lang="fr">${p.title.fr}</h3>
      <h3 class="font-bold text-gray-900 mb-2" data-lang="ar">${p.title.ar}</h3>
      <p class="text-gray-600 text-sm mb-4" data-lang="fr">${p.description.fr}</p>
      <p class="text-gray-600 text-sm mb-4" data-lang="ar">${p.description.ar}</p>
      <a href="${p.url}" class="text-primary text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1" aria-label="${p.ariaLabel}" target="_blank" rel="noopener noreferrer">
        <span data-lang="fr">Voir le site</span><span data-lang="ar">زيارة الموقع</span>
        ${linkSvg}
      </a>
    </div>`;
  return article;
}

function initPortfolioGrid() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  const ctaCard = grid.querySelector('.portfolio-cta');
  const fragment = document.createDocumentFragment();
  PORTFOLIO_PROJECTS.forEach((project, i) => fragment.appendChild(buildPortfolioCard(project, i)));
  grid.insertBefore(fragment, ctaCard);
  initScrollAnimations();
}

/* ---- Init on DOM Ready ---- */
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initLangBtn();
  initMobileMenu();
  initStickyNav();
  initScrollAnimations();
  initCounters();
  initFAQ();
  initScrollTop();
  initContactForm();
  initSmoothScroll();
  initPortfolioGrid();
});
