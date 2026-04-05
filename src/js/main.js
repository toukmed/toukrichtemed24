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
});
