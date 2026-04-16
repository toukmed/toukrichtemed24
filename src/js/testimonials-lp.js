/* ================================
   toukrichtemed — Landing Page Testimonials
   Bilingual FR/AR · Vanilla JS
   ================================ */

// Testimonials are tied to real portfolio projects (see portfolio-projects.js).
// Each entry corresponds to a delivered project: Creatif PRO, Entra PT, ERP Industrie, DoIt IA.
const LP_TESTIMONIALS = [
  {
    // Project: Creatif PRO — Peinture industrielle, Casablanca — Livré en 22H
    stars: 5,
    quote: {
      fr: '"Nous avions besoin d\'une présence en ligne qui reflète notre sérieux. Mohammed a livré un site interactif, moderne et parfaitement à notre image en seulement 22 heures. Résultat au-delà de nos attentes !"',
      ar: '"كنا بحاجة إلى حضور رقمي يعكس احترافيتنا. سلّم لنا محمد موقعاً تفاعلياً وعصرياً يعكس هويتنا في 22 ساعة فقط. النتيجة فاقت توقعاتنا!"'
    },
    name: { fr: 'Directeur Creatif PRO', ar: 'مدير Creatif PRO' },
    role: { fr: 'Peinture industrielle, Casablanca', ar: 'طلاء صناعي، الدار البيضاء' },
    initials: 'CP',
    avatarColor: 'bg-orange-100 text-accent'
  },
  {
    // Project: Entra PT — Société BTP, Agadir — Livré en 22H
    stars: 5,
    quote: {
      fr: '"Site livré avec une présentation claire de nos services BTP. L\'équipe a su comprendre notre secteur et mettre en valeur notre expertise. Un vrai gain pour décrocher de nouveaux marchés."',
      ar: '"سُلِّم الموقع مع عرض واضح لخدماتنا في البناء. أدرك الفريق طبيعة قطاعنا وأبرز خبرتنا بشكل احترافي. ربح حقيقي لاستقطاب صفقات جديدة."'
    },
    name: { fr: 'Gérant Entra PT', ar: 'مدير Entra PT' },
    role: { fr: 'Société BTP, Agadir', ar: 'شركة البناء، أكادير' },
    initials: 'EP',
    avatarColor: 'bg-blue-100 text-primary'
  },
  {
    // Project: ERP Industrie — Casablanca — Livré sur mesure
    stars: 5,
    quote: {
      fr: '"On avait besoin d\'un ERP qui gère nos opérations, et Mohamed a pu développer notre ERP industriel sur mesure : pointages, stocks, facturation et KPIs dans une seule plateforme. Qualité d\'exécution impressionnante, formation de nos operateurs et accompagnement au top."',
      ar: '"طوّر لنا محمد نظام ERP صناعياً مخصصاً: الحضور والمخزون والفواتير ومؤشرات الأداء في منصة واحدة. جودة تنفيذ رائعة ومرافقة ممتازة."'
    },
    name: { fr: 'Responsable IT, Creatif PRO', ar: 'مسؤول تقنية المعلومات، صناعة الدار البيضاء' },
    role: { fr: 'ERP Industrie, Casablanca', ar: 'نظام ERP صناعي، الدار البيضاء' },
    initials: 'RI',
    avatarColor: 'bg-teal-100 text-teal-700'
  },
  {
    // Project: DoIt — Plateforme IA & Productivité — Livré sur mesure
    stars: 5,
    quote: {
      fr: '"Mon besoin etait simple : une plateforme IA pour améliorer ma productivité. La plateforme DoIt dépasse tout ce qu\'on espérait : IA, suivi de progrès, recommandations personnalisées… Mohamed a transformé notre vision en produit concret. On recommande sans hésiter."',
      ar: '"منصة DoIt تجاوزت كل ما كنا نأمله: ذكاء اصطناعي، تتبع التقدم، توصيات مخصصة... حوّل محمد رؤيتنا إلى منتج ملموس. نوصي بهم بكل ثقة."'
    },
    name: { fr: 'Fondateur DoIt, Casablanca', ar: 'مؤسس DoIt، الدار البيضاء' },
    role: { fr: 'Plateforme IA & Productivité', ar: 'منصة ذكاء اصطناعي وإنتاجية' },
    initials: 'DI',
    avatarColor: 'bg-purple-100 text-purple-700'
  }
];

const DELAY_CLASSES = ['fade-up', 'fade-up delay-100', 'fade-up delay-200', 'fade-up delay-300'];

function buildStars(count) {
  const filled = '★'.repeat(count);
  const label = count === 5
    ? '5 étoiles sur 5'
    : `${count} étoiles sur 5`;
  return `<div class="stars mb-3" aria-label="${label}">${filled}</div>`;
}

function buildCard(testimonial, index) {
  const delayClass = DELAY_CLASSES[index] || 'fade-up';

  return `
    <div class="testimonial-card ${delayClass}">
      ${buildStars(testimonial.stars)}
      <p class="text-gray-700 leading-relaxed mb-5 text-sm">
        <span data-lang="fr">${testimonial.quote.fr}</span>
        <span data-lang="ar">${testimonial.quote.ar}</span>
      </p>
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full ${testimonial.avatarColor} flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">${testimonial.initials}</div>
        <div>
          <div class="font-semibold text-gray-900 text-sm" data-lang="fr">${testimonial.name.fr}</div>
          <div class="font-semibold text-gray-900 text-sm" data-lang="ar">${testimonial.name.ar}</div>
          <div class="text-xs text-gray-500" data-lang="fr">${testimonial.role.fr}</div>
          <div class="text-xs text-gray-500" data-lang="ar">${testimonial.role.ar}</div>
        </div>
      </div>
    </div>`;
}

function renderTestimonials() {
  const container = document.getElementById('lp-testimonials-grid');
  if (!container) return;

  container.innerHTML = LP_TESTIMONIALS.map(buildCard).join('');

  // Trigger scroll animation observer re-evaluation for newly inserted elements
  if (typeof initScrollAnimations === 'function') {
    initScrollAnimations();
  }

  // Apply current language visibility rules
  const lang = document.documentElement.lang || 'fr';
  container.querySelectorAll('[data-lang]').forEach(function(el) {
    const elLang = el.getAttribute('data-lang');
    if (lang === 'ar') {
      el.style.display = elLang === 'ar' ? '' : 'none';
    } else {
      el.style.display = elLang === 'fr' ? '' : 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', renderTestimonials);
