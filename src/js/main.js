/* ═══════════════════════════════════════════════════
   ToukrichteMed — Main JavaScript
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initNavbar();
  initMobileNav();
  initFAQ();
  initScrollAnimations();
  initSmoothScroll();
  initLanguageSwitcher();
  initTestimonialsSlider();
});

/* ── Navbar scroll effect ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile navigation ── */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
    document.body.style.overflow = links.classList.contains('active') ? 'hidden' : '';
  });

  links.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ── FAQ accordion ── */
function initFAQ() {
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const isActive = item.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.faq__item.active').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      item.classList.toggle('active', !isActive);
      btn.setAttribute('aria-expanded', !isActive);
    });
  });
}

/* ── Scroll-triggered animations ── */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════
   TRANSLATIONS
   ═══════════════════════════════════════════════════ */
const translations = {
  ar: {
    // Name
    'name': 'محمد توقرشت',

    // Navbar
    'nav.slogan': 'القوة الرقمية بين يديك',
    'nav.offre': 'العرض',
    'nav.inclus': 'المميزات',
    'nav.processus': 'المراحل',
    'nav.temoignages': 'آراء العملاء',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.cta': 'ابدأ الآن',

    // Hero
    'hero.badge': 'متاح — رد في أقل من 5 دقائق',
    'hero.title': 'احصل على موقع إلكتروني<br /><span class="hero__title-gradient">احترافي في 7 أيام</span><br />— بدون توتر',
    'hero.subtitle': 'موقع عصري، متجاوب ومحسّن لمحركات البحث — يُسلَّم جاهزاً بـ <strong>5,000 درهم شاملة</strong>. الاستضافة واسم النطاق للسنة الأولى مشمولان.',
    'hero.whatsapp': 'تواصل عبر واتساب',
    'hero.voirOffre': 'شاهد العرض',
    'hero.authorRole': 'مهندس برمجيات — أكثر من 10 سنوات خبرة',
    'hero.trust1': 'تسليم في 7 أيام',
    'hero.trust2': 'رضا مضمون',
    'hero.trust3': 'أكثر من 10 سنوات خبرة',
    'hero.float1': '100% متجاوب',
    'hero.float2': 'محسّن للسيو',

    // Problem
    'problem.tag': 'الواقع',
    'problem.title': 'شركتك تستحق أن تكون مرئية على الإنترنت',
    'problem.subtitle': 'في 2026، عميل من كل اثنين يبحث عنك على جوجل قبل أن يتواصل معك. بدون موقع إلكتروني، أنت غير مرئي.',
    'problem.painTitle': 'بدون موقع إلكتروني...',
    'problem.pain1Title': 'غياب تام عن الأنظار',
    'problem.pain1Desc': 'منافسوك يستقطبون عملاءك المحتملين عبر جوجل',
    'problem.pain2Title': 'صورة غير احترافية',
    'problem.pain2Desc': 'صفحة فيسبوك وحدها لم تعد كافية لبناء الثقة',
    'problem.pain3Title': 'خسارة عملاء على مدار الساعة',
    'problem.pain3Desc': 'بينما أنت نائم، منافسوك يجذبون العملاء عبر مواقعهم',
    'problem.pain4Title': 'مصداقية محدودة',
    'problem.pain4Desc': '70% من العملاء لا يثقون بشركة بدون موقع إلكتروني',
    'problem.solTitle': 'مع موقعك الإلكتروني...',
    'problem.sol1Title': 'ظاهر على جوجل',
    'problem.sol1Desc': 'عملاؤك يجدونك بسهولة عند البحث عن خدماتك',
    'problem.sol2Title': 'صورة احترافية',
    'problem.sol2Desc': 'موقع عصري يبعث على الثقة من النظرة الأولى',
    'problem.sol3Title': 'متاح على مدار الساعة',
    'problem.sol3Desc': 'موقعك يعمل من أجلك حتى وأنت مغلق',
    'problem.sol4Title': 'المزيد من العملاء',
    'problem.sol4Desc': 'حوّل الزوار إلى عملاء بموقع يحقق النتائج',

    // Offer
    'currency': 'درهم',
    'offer.tag': 'العرض',
    'offer.title': 'موقع إلكتروني متكامل، سعر شفاف',
    'offer.subtitle': 'لا رسوم مخفية، لا مفاجآت. كل شيء مشمول في باقة واحدة.',
    'offer.badge': 'الأكثر طلباً',
    'offer.cardName': 'موقع عرض احترافي',
    'offer.cardDesc': 'كل ما تحتاجه شركتك للتألق على الإنترنت',
    'offer.period': 'شامل كل شيء',
    'offer.f1': 'موقع من 5 إلى 7 صفحات مخصصة',
    'offer.f2': 'تصميم عصري ومتجاوب',
    'offer.f3': 'محسّن للهاتف والحاسوب',
    'offer.f4': 'تحسين محركات البحث الأساسي مشمول',
    'offer.f5': 'استضافة + نطاق السنة الأولى',
    'offer.f6': 'زر واتساب مدمج',
    'offer.f7': 'خرائط جوجل + نموذج اتصال',
    'offer.f8': 'Google Analytics متصل',
    'offer.f9': 'مراجعتان مشمولتان',
    'offer.f10': 'تسليم في 7 أيام',
    'offer.cta': 'ابدأ موقعي الآن',
    'offer.note': 'إمكانية الدفع على مرتين: 50% عند البدء، 50% عند التسليم',

    // Features
    'features.tag': 'التفاصيل',
    'features.title': 'كل شيء مشمول في الباقة',
    'features.subtitle': 'كل ميزة مصممة لتحقيق نتائج ملموسة لموقعك.',
    'features.h1': '5 إلى 7 صفحات مخصصة',
    'features.p1': 'الرئيسية، من نحن، الخدمات، المعرض، اتصل بنا — كل صفحة مصممة لتحويل زوارك إلى عملاء.',
    'features.h2': 'تصميم متجاوب',
    'features.p2': 'موقعك يتكيف مع جميع الشاشات — هاتف، لوحة، حاسوب. Mobile-first.',
    'features.h3': 'تحسين محركات البحث الأساسي',
    'features.p3': 'Meta tags، عناوين محسّنة، أوصاف — لكي يجدك جوجل ويصنّفك.',
    'features.h4': 'زر واتساب',
    'features.p4': 'زر واتساب عائم ليتواصل معك عملاؤك بنقرة واحدة — القناة رقم 1 في المغرب.',
    'features.h5': 'خرائط جوجل مدمجة',
    'features.p5': 'عملاؤك يجدون عنوانك بسهولة. نموذج اتصال فعّال مشمول.',
    'features.h6': 'Google Analytics',
    'features.p6': 'تتبع زوارك، افهم سلوكهم وقِس تأثير موقعك.',
    'features.h7': 'استضافة مشمولة',
    'features.p7': 'استضافة سريعة وآمنة + اسم نطاق — كل شيء مشمول للسنة الأولى.',
    'features.h8': 'مراجعتان',
    'features.p8': 'غير راضٍ عن النسخة الأولى؟ دورتا مراجعة مشمولتان للحصول على نتيجة مثالية.',

    // Process
    'process.tag': 'كيف يعمل',
    'process.title': 'من أول تواصل إلى الإطلاق في 7 أيام',
    'process.subtitle': 'مسار واضح وشفاف — تعرف بالضبط أين وصل مشروعك.',
    'process.h1': 'التواصل الأول',
    'process.p1': 'أرسل لي رسالة على واتساب. نتناقش حول مشروعك، احتياجاتك وأهدافك. مجاني وبدون التزام.',
    'process.h2': 'جمع المحتوى',
    'process.p2': 'ترسل لي نصوصك، صورك، شعارك ومعلوماتك. أوجهك في كل خطوة باستبيان بسيط.',
    'process.h3': 'إنشاء التصميم',
    'process.p3': 'أصمم موقعك بتصميم عصري واحترافي. تتلقى نسخة أولى للموافقة.',
    'process.h4': 'المراجعات',
    'process.p4': 'تعطيني ملاحظاتك. أطبق التعديلات حتى تعجبك النتيجة — مراجعتان مشمولتان.',
    'process.h5': 'الإطلاق',
    'process.p5': 'موقعك يُنشر، يُربط بنطاقك، وجاهز لاستقبال أول زوارك. تدفع المبلغ المتبقي.',

    // About
    'about.tag': 'من أنا',
    'about.role': 'مهندس برمجيات — أكثر من 10 سنوات خبرة',
    'about.text1': 'بعد أكثر من 10 سنوات من الخبرة في تطوير البرمجيات في المغرب وعلى المستوى الدولي، لا سيما في <strong>Ticketmaster</strong> (الرائد العالمي في بيع التذاكر)، <strong>SFR</strong> (الرائد الأوروبي في الاتصالات)، اخترت كمهمة في المغرب: مساعدة رواد الأعمال والشركات الصغيرة والمتوسطة المغربية على الرقمنة بمواقع إلكترونية بمعايير <strong>دولية</strong>.',
    'about.text2': 'أجمع بين الخبرة التقنية العالية وفهم السوق المحلي لأقدم لك موقعاً إلكترونياً يبعث على الثقة ويحقق النتائج.',
    'about.stat1': 'سنوات الخبرة',
    'about.stat2': 'مشروع مُنجز',
    'about.stat3': 'عملاء راضون',
    'about.photoPlaceholder': 'الصورة قريباً',

    // Testimonials
    'testimonials.tag': 'آراء العملاء',
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'رضا عملائي هو أفضل بطاقة تعريف لي.',
    'testimonials.t1': '"محمد أنشأ موقعنا في 5 أيام فقط. النتيجة رائعة وعملاؤنا يجدوننا الآن بسهولة على جوجل. أنصح به 100%."',
    'testimonials.a1Name': 'أحمد ك.',
    'testimonials.a1Role': 'مطعم — الدار البيضاء',
    'testimonials.t2': '"محترف جداً وسريع الاستجابة. محمد يفهم احتياجات الشركات المغربية. موقعنا عصري وزبوناتنا يعجبهن التواصل المباشر عبر واتساب."',
    'testimonials.a2Name': 'سارة ب.',
    'testimonials.a2Role': 'صالون تجميل — الرباط',
    'testimonials.t3': '"نسبة جودة-سعر ممتازة. دفعنا على مرتين، والموقع تم تسليمه في الوقت المحدد. منذ ذلك الحين، نتلقى طلبات مواعيد مباشرة عبر الموقع."',
    'testimonials.a3Name': 'د. يوسف م.',
    'testimonials.a3Role': 'عيادة أسنان — مراكش',
    'testimonials.t4': '"محمد فهم تماماً مجال عملنا. موقع creatif-pro.com يعكس خبرتنا في الطلاء الصناعي والإيبوكسي والراتنج. منذ إطلاق الموقع، نتلقى طلبات عروض أسعار من جميع أنحاء المغرب. عمل متقن."',
    'testimonials.a4Name': 'عبد الجليل',
    'testimonials.a4Role': 'creatif-pro.com — طلاء صناعي، إيبوكسي وراتنج',
    'testimonials.t5': '"كنا نبحث عن شخص يفهم قطاع البناء. محمد قدم لنا موقعاً احترافياً لـ entra-pt.com يبرز إنجازاتنا. في 3 أشهر، ضاعفنا طلبات عروض الأسعار. شكراً محمد!"',
    'testimonials.a5Name': 'عثمان جيتو',
    'testimonials.a5Role': 'entra-pt.com — بناء وأشغال عمومية',

    // Guarantee
    'guarantee.title': 'رضاكم مضمون',
    'guarantee.p1Title': 'مراجعتان مشمولتان',
    'guarantee.p1Desc': 'غير راضٍ عن النسخة الأولى؟ أعدّل حتى تعجبك النتيجة.',
    'guarantee.p2Title': 'مرافقة شخصية',
    'guarantee.p2Desc': 'أوجهك في كل خطوة — بدون مصطلحات تقنية، فقط نتائج.',
    'guarantee.p3Title': 'دعم بعد التسليم',
    'guarantee.p3Desc': 'سؤال بعد الإطلاق؟ أبقى متاحاً على واتساب لمساعدتك.',
    'guarantee.p4Title': 'دفع آمن على مرتين',
    'guarantee.p4Desc': '50% عند البدء، 50% عند التسليم — لا تدفع المتبقي حتى تكون راضياً.',

    // FAQ
    'faq.tag': 'الأسئلة الشائعة',
    'faq.title': 'أسئلة متكررة',
    'faq.subtitle': 'كل ما تحتاج معرفته قبل بدء مشروعك.',
    'faq.q1': 'لماذا 7 أيام فقط؟',
    'faq.a1': 'بفضل خبرتي ومنهجية عمل محسّنة، أستطيع إنشاء موقعك بسرعة دون التضحية بالجودة. مهلة الـ7 أيام تبدأ فور تلقي كل محتواك (نصوص، صور، شعار). كلما كنت أسرع في الرد، كلما كان موقعك جاهزاً أسرع.',
    'faq.q2': 'هل يجب أن أقدم المحتوى؟',
    'faq.a2': 'مثالياً نعم — أنت تعرف شركتك أفضل من أي شخص. لكن لا تقلق: أرسل لك استبياناً بسيطاً لإرشادك. إذا لم تكن لديك صور احترافية، يمكنني استخدام صور عالية الجودة تناسب مجالك.',
    'faq.q3': 'هل يمكنني تعديل الموقع بعد التسليم؟',
    'faq.a3': 'نعم! بعد التسليم، يمكنك طلب تعديلات بسيطة. للتغييرات المنتظمة، أقترح باقة صيانة بـ 500 درهم/شهر تشمل التحديثات والتعديلات والدعم ذو الأولوية.',
    'faq.q4': 'ماذا يحدث بعد السنة الأولى من الاستضافة؟',
    'faq.a4': 'الاستضافة واسم النطاق مشمولان للسنة الأولى. بعدها، التجديد بـ 500 درهم/سنة — استثمار بسيط لإبقاء موقعك متاحاً على مدار الساعة.',
    'faq.q5': 'كيف يتم الدفع؟',
    'faq.a5': 'الدفع على مرتين: 50% عند بدء المشروع (2,500 درهم) و50% عند التسليم النهائي (2,500 درهم). أقبل التحويل البنكي، كاش بلوس، وفاكاش أو نقداً مع إيصال.',
    'faq.q6': 'هل سيكون موقعي مرئياً على جوجل؟',
    'faq.a6': 'نعم! تحسين محركات البحث الأساسي مشمول: meta tags، عناوين محسّنة، أوصاف، وتقديم لجوجل. موقعك سيُفهرس ويبدأ بالظهور في نتائج البحث. لتحسين متقدم، خيارات إضافية متاحة.',

    // CTA Final
    'cta.title': 'مستعد لإطلاق موقعك الإلكتروني؟',
    'cta.text': 'انضم إلى رواد الأعمال الذين اختاروا الظهور على الإنترنت. موقعك الاحترافي على بعد 7 أيام من أن يصبح حقيقة.',
    'cta.priceFrom': 'ابتداءً من',
    'cta.priceAll': 'شامل كل شيء',
    'cta.whatsapp': 'تواصل عبر واتساب',
    'cta.email': 'أرسل بريداً إلكترونياً',
    'cta.reassurance': 'رد مضمون في أقل من 5 دقائق خلال ساعات العمل',

    // Footer
    'footer.desc': 'إنشاء مواقع إلكترونية احترافية لرواد الأعمال والشركات الصغيرة والمتوسطة.',
    'footer.navTitle': 'التنقل',
    'footer.nav1': 'العرض',
    'footer.nav2': 'المميزات',
    'footer.nav3': 'المراحل',
    'footer.nav4': 'آراء العملاء',
    'footer.nav5': 'الأسئلة الشائعة',
    'footer.contactTitle': 'اتصل بنا',
    'footer.location': 'الدار البيضاء، المغرب',
    'footer.copyright': '© 2026 محمد توقرشت. جميع الحقوق محفوظة.',

    // WhatsApp
    'whatsapp.tooltip': 'تحتاج مساعدة؟'
  },
  fr: {
    // Name
    'name': 'Mohamed Toukrichte',

    'nav.slogan': 'Puissance digitale sur mesure',
    'nav.offre': 'Offre',
    'nav.inclus': 'Ce qui est inclus',
    'nav.processus': 'Processus',
    'nav.temoignages': 'Témoignages',
    'nav.faq': 'FAQ',
    'nav.cta': 'Démarrer maintenant',
    'hero.badge': 'Disponible — Réponse en moins de 5 min',
    'hero.title': 'Obtenez un site web<br /><span class="hero__title-gradient">professionnel en 7 jours</span><br />— sans stress',
    'hero.subtitle': 'Un site moderne, responsive et optimisé pour Google — livré clé en main pour <strong>5,000 DH tout compris</strong>. Hébergement et domaine de la première année inclus.',
    'hero.whatsapp': 'Discuter sur WhatsApp',
    'hero.voirOffre': 'Voir l\'offre',
    'hero.authorRole': 'Ingénieur Logiciel — 10+ ans d\'expérience',
    'hero.trust1': 'Livraison 7 jours',
    'hero.trust2': 'Satisfaction garantie',
    'hero.trust3': '10+ ans d\'expérience',
    'hero.mockupUrl': 'www.votre-entreprise.ma',
    'hero.float1': '100% Responsive',
    'hero.float2': 'SEO Optimisé',
    'problem.tag': 'Le constat',
    'problem.title': 'Votre entreprise mérite d\'être visible en ligne',
    'problem.subtitle': 'En 2026, un client sur deux vous cherche sur Google avant de vous contacter. Sans site web, vous êtes invisible.',
    'problem.painTitle': 'Sans site web…',
    'problem.pain1Title': 'Invisibilité totale',
    'problem.pain1Desc': 'Vos concurrents récupèrent vos clients potentiels sur Google',
    'problem.pain2Title': 'Image non professionnelle',
    'problem.pain2Desc': 'Une simple page Facebook ne suffit plus pour inspirer confiance',
    'problem.pain3Title': 'Clients perdus 24h/24',
    'problem.pain3Desc': 'Quand vous dormez, vos concurrents avec un site captent des leads',
    'problem.pain4Title': 'Crédibilité limitée',
    'problem.pain4Desc': '70% des clients ne font pas confiance à une entreprise sans site web',
    'problem.solTitle': 'Avec votre site web…',
    'problem.sol1Title': 'Visible sur Google',
    'problem.sol1Desc': 'Vos clients vous trouvent facilement quand ils cherchent vos services',
    'problem.sol2Title': 'Image professionnelle',
    'problem.sol2Desc': 'Un site moderne qui inspire confiance dès le premier regard',
    'problem.sol3Title': 'Disponible 24h/24',
    'problem.sol3Desc': 'Votre site travaille pour vous même quand vous êtes fermé',
    'problem.sol4Title': 'Plus de clients',
    'problem.sol4Desc': 'Transformez les visiteurs en clients avec un site qui convertit',
    'offer.tag': 'L\'offre',
    'currency': 'DH',
    'offer.title': 'Un site web complet, un prix transparent',
    'offer.subtitle': 'Pas de frais cachés, pas de surprises. Tout est inclus dans un forfait unique.',
    'offer.badge': 'Le plus populaire',
    'offer.cardName': 'Site Vitrine Professionnel',
    'offer.cardDesc': 'Tout ce dont votre entreprise a besoin pour briller en ligne',
    'offer.period': 'tout compris',
    'offer.f1': 'Site 5 à 7 pages personnalisées',
    'offer.f2': 'Design moderne et responsive',
    'offer.f3': 'Optimisé pour mobile et desktop',
    'offer.f4': 'SEO de base inclus',
    'offer.f5': 'Hébergement + domaine 1ère année',
    'offer.f6': 'Bouton WhatsApp intégré',
    'offer.f7': 'Google Maps + formulaire de contact',
    'offer.f8': 'Google Analytics connecté',
    'offer.f9': '2 révisions incluses',
    'offer.f10': 'Livraison en 7 jours',
    'offer.cta': 'Démarrer mon site maintenant',
    'offer.note': 'Paiement en 2 fois possible : 50% au démarrage, 50% à la livraison',
    'features.tag': 'Détails',
    'features.title': 'Tout est inclus dans votre forfait',
    'features.subtitle': 'Chaque fonctionnalité est pensée pour que votre site génère des résultats concrets.',
    'features.h1': '5 à 7 pages sur mesure',
    'features.p1': 'Accueil, À propos, Services, Galerie, Contact — chaque page conçue pour convertir vos visiteurs en clients.',
    'features.h2': 'Design responsive',
    'features.p2': 'Votre site s\'adapte parfaitement à tous les écrans — mobile, tablette et ordinateur. Mobile-first.',
    'features.h3': 'SEO de base',
    'features.p3': 'Meta tags, titres optimisés, descriptions — pour que Google vous trouve et vous positionne.',
    'features.h4': 'Bouton WhatsApp',
    'features.p4': 'Un bouton flottant WhatsApp pour que vos clients vous contactent en un clic — le canal #1 au Maroc.',
    'features.h5': 'Google Maps intégré',
    'features.p5': 'Vos clients trouvent votre adresse facilement. Formulaire de contact fonctionnel inclus.',
    'features.h6': 'Google Analytics',
    'features.p6': 'Suivez vos visiteurs, comprenez leur comportement et mesurez l\'impact de votre site.',
    'features.h7': 'Hébergement inclus',
    'features.p7': 'Hébergement rapide et sécurisé + nom de domaine — tout est inclus pour la première année.',
    'features.h8': '2 révisions',
    'features.p8': 'Pas satisfait du premier rendu ? Deux cycles de révision sont inclus pour un résultat parfait.',
    'process.tag': 'Comment ça marche',
    'process.title': 'De la prise de contact à la mise en ligne en 7 jours',
    'process.subtitle': 'Un processus clair et transparent — vous savez exactement où en est votre projet.',
    'process.h1': 'Prise de contact',
    'process.p1': 'Envoyez-moi un message sur WhatsApp. On discute de votre projet, vos besoins, vos objectifs. C\'est gratuit et sans engagement.',
    'process.h2': 'Recueil du contenu',
    'process.p2': 'Vous m\'envoyez vos textes, photos, logo et informations. Je vous guide à chaque étape avec un questionnaire simple.',
    'process.h3': 'Création du design',
    'process.p3': 'Je conçois votre site avec un design moderne et professionnel. Vous recevez une première version pour validation.',
    'process.h4': 'Révisions',
    'process.p4': 'Vous me donnez vos retours. J\'applique les modifications jusqu\'à ce que le résultat vous plaise — 2 révisions incluses.',
    'process.h5': 'Mise en ligne',
    'process.p5': 'Votre site est publié, connecté à votre domaine, et prêt à accueillir vos premiers visiteurs. Vous payez le solde.',
    'about.tag': 'Qui suis-je',
    'about.role': 'Ingénieur Logiciel — 10+ ans d\'expérience',
    'about.text1': 'Après plus de 10 ans d\'expérience en développement logiciel au Maroc et à l\'international, notamment chez <strong>Ticketmaster</strong> (leader mondial de la billetterie), <strong>SFR</strong> (leader européen de télécommunication), j\'ai choisi comme mission au Maroc : aider les entrepreneurs et PME marocaines à se digitaliser avec des sites web aux <strong>standards internationaux</strong>.',
    'about.text2': 'Je combine expertise technique de haut niveau et compréhension du marché local pour vous livrer un site web qui inspire confiance et génère des résultats.',
    'about.stat1': 'Années d\'expérience',
    'about.stat2': 'Projets livrés',
    'about.stat3': 'Clients satisfaits',
    'about.photoPlaceholder': 'Photo à venir',
    'testimonials.tag': 'Témoignages',
    'testimonials.title': 'Ce que disent mes clients',
    'testimonials.subtitle': 'La satisfaction de mes clients est ma meilleure carte de visite.',
    'testimonials.t1': '"Mohamed a créé notre site en 5 jours seulement. Le résultat est magnifique et nos clients nous trouvent maintenant facilement sur Google. Je recommande à 100%."',
    'testimonials.a1Name': 'Ahmed K.',
    'testimonials.a1Role': 'Restaurant — Casablanca',
    'testimonials.t2': '"Très professionnel et réactif. Mohamed comprend les besoins des entreprises marocaines. Notre site est moderne et nos clientes adorent pouvoir nous contacter via WhatsApp directement."',
    'testimonials.a2Name': 'Sara B.',
    'testimonials.a2Role': 'Salon de beauté — Rabat',
    'testimonials.t3': '"Excellent rapport qualité-prix. On a payé en deux fois, le site a été livré dans les temps. Depuis, on reçoit des demandes de rendez-vous directement via le site."',
    'testimonials.a3Name': 'Dr. Youssef M.',
    'testimonials.a3Role': 'Cabinet dentaire — Marrakech',
    'testimonials.t4': '"Mohamed a parfaitement compris notre métier. Le site de creatif-pro.com reflète notre savoir-faire en peinture industrielle, époxy et résine. Depuis la mise en ligne, on reçoit des demandes de devis de tout le Maroc. Travail impeccable."',
    'testimonials.a4Name': 'Abdeljalil',
    'testimonials.a4Role': 'creatif-pro.com — Peinture industrielle, Époxy & Résine',
    'testimonials.t5': '"On cherchait quelqu\'un qui comprenne le secteur du BTP. Mohamed a livré un site professionnel pour entra-pt.com qui met en valeur nos réalisations. En 3 mois, on a doublé nos demandes de devis. Merci Mohamed !"',
    'testimonials.a5Name': 'Othmane Jitto',
    'testimonials.a5Role': 'entra-pt.com — Construction & BTP',
    'guarantee.title': 'Votre satisfaction est garantie',
    'guarantee.p1Title': '2 révisions incluses',
    'guarantee.p1Desc': 'Pas satisfait du premier rendu ? Je modifie jusqu\'à ce que le résultat vous plaise.',
    'guarantee.p2Title': 'Accompagnement personnalisé',
    'guarantee.p2Desc': 'Je vous guide à chaque étape — pas de jargon technique, juste des résultats.',
    'guarantee.p3Title': 'Support après livraison',
    'guarantee.p3Desc': 'Une question après la mise en ligne ? Je reste disponible sur WhatsApp pour vous aider.',
    'guarantee.p4Title': 'Paiement sécurisé en 2 fois',
    'guarantee.p4Desc': '50% au démarrage, 50% à la livraison — vous ne payez le solde que quand vous êtes satisfait.',
    'faq.tag': 'FAQ',
    'faq.title': 'Questions fréquentes',
    'faq.subtitle': 'Tout ce que vous devez savoir avant de démarrer votre projet.',
    'faq.q1': 'Pourquoi seulement 7 jours ?',
    'faq.a1': 'Grâce à mon expérience et à un processus de travail optimisé, je peux créer votre site rapidement sans sacrifier la qualité. Le délai de 7 jours commence dès que je reçois tout votre contenu (textes, photos, logo). Plus vous êtes réactif, plus vite votre site sera en ligne.',
    'faq.q2': 'Est-ce que je dois fournir le contenu ?',
    'faq.a2': 'Idéalement oui — vous connaissez mieux votre entreprise que quiconque. Mais ne vous inquiétez pas : je vous envoie un questionnaire simple pour vous guider. Si vous n\'avez pas de photos professionnelles, je peux utiliser des images de qualité adaptées à votre secteur.',
    'faq.q3': 'Est-ce que je peux modifier le site après la livraison ?',
    'faq.a3': 'Oui ! Après la livraison, vous pouvez demander des modifications mineures. Pour des changements réguliers, je propose un forfait maintenance à 500 DH/mois qui inclut les mises à jour, modifications et support prioritaire.',
    'faq.q4': 'Que se passe-t-il après la 1ère année d\'hébergement ?',
    'faq.a4': 'L\'hébergement et le domaine sont inclus pour la première année. Ensuite, le renouvellement est de 500 DH/an — un investissement minimal pour garder votre site en ligne 24h/24.',
    'faq.q5': 'Comment se fait le paiement ?',
    'faq.a5': 'Le paiement se fait en 2 fois : 50% au démarrage du projet (2,500 DH) et 50% à la livraison finale (2,500 DH). J\'accepte le virement bancaire, CashPlus, Wafacash ou espèces avec reçu.',
    'faq.q6': 'Mon site sera-t-il visible sur Google ?',
    'faq.a6': 'Oui ! Le SEO de base est inclus : meta tags, titres optimisés, descriptions, et soumission à Google. Votre site sera indexé et commencera à apparaître dans les résultats de recherche. Pour un référencement avancé, des options supplémentaires sont disponibles.',
    'cta.title': 'Prêt à lancer votre site web ?',
    'cta.text': 'Rejoignez les entrepreneurs qui ont fait le choix de la visibilité en ligne. Votre site professionnel est à 7 jours de devenir réalité.',
    'cta.priceFrom': 'À partir de',
    'cta.priceAll': 'tout compris',
    'cta.whatsapp': 'Discuter sur WhatsApp',
    'cta.email': 'Envoyer un email',
    'cta.reassurance': 'Réponse garantie en moins de 5 minutes pendant les heures de travail',
    'footer.desc': 'Création de sites web professionnels pour entrepreneurs et PME.',
    'footer.navTitle': 'Navigation',
    'footer.nav1': 'L\'offre',
    'footer.nav2': 'Ce qui est inclus',
    'footer.nav3': 'Processus',
    'footer.nav4': 'Témoignages',
    'footer.nav5': 'FAQ',
    'footer.contactTitle': 'Contact',
    'footer.location': 'Casablanca, Maroc',
    'footer.copyright': '© 2026 Mohamed Toukrichte. Tous droits réservés.',
    'whatsapp.tooltip': 'Besoin d\'aide ?'
  }
};

/* ── Language Switcher ── */
function initLanguageSwitcher() {
  const btn = document.getElementById('langSwitch');
  const saved = localStorage.getItem('lang');
  if (saved && saved !== 'fr') {
    setLanguage(saved);
  }

  btn.addEventListener('click', () => {
    const current = document.documentElement.lang || 'fr';
    const next = current === 'fr' ? 'ar' : 'fr';
    setLanguage(next);
  });
}

function setLanguage(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update switcher button label
  const btn = document.getElementById('langSwitch');
  btn.querySelector('.lang-switch__label').textContent = lang === 'ar' ? 'Français' : 'عربي';

  // Update all data-i18n elements (text content)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all data-i18n-html elements (HTML content)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update WhatsApp links
  const waText = lang === 'ar'
    ? encodeURIComponent('مرحبا محمد، أنا مهتم(ة) بإنشاء موقع إلكتروني.')
    : encodeURIComponent('Bonjour Mohamed, je suis intéressé(e) par la création d\'un site web.');
  const waUrl = 'https://wa.me/212698921518?text=' + waText;
  document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
    a.href = waUrl;
  });

  // Update page title
  document.title = lang === 'ar'
    ? 'محمد توقرشت — إنشاء مواقع إلكترونية احترافية | 7 أيام، 5000 درهم'
    : 'Mohamed Toukrichte — Création de Sites Web Professionnels | 7 Jours, 5000 DH';

  // Swap images with lang variants
  document.querySelectorAll('[data-i18n-img]').forEach(img => {
    const base = img.getAttribute('data-i18n-img');
    if (base === 'mockup') {
      img.src = lang === 'ar' ? 'images/site-exemple-ar.png' : 'images/site-exemple.jpg';
    }
  });

  // Toggle body class for CSS
  document.body.classList.toggle('lang-ar', lang === 'ar');

  // Save preference
  localStorage.setItem('lang', lang);
}

/* ── Testimonials Slider ── */
function initTestimonialsSlider() {
  const slider = document.getElementById('testimonialsSlider');
  if (!slider) return;

  const track = slider.querySelector('.testimonials__track');
  const cards = Array.from(track.children);
  const dotsContainer = document.getElementById('testimonialsDots');
  let currentIndex = 0;
  let autoplayTimer;
  let visibleCount = getVisibleCount();

  function getVisibleCount() {
    const card = cards[0];
    if (!card) return 1;
    const style = getComputedStyle(card);
    const cardW = card.offsetWidth + parseFloat(style.marginRight || 0);
    const sliderW = slider.offsetWidth;
    return Math.max(1, Math.floor(sliderW / cardW));
  }

  const totalSlides = Math.max(1, cards.length - visibleCount + 1);

  function buildDots() {
    dotsContainer.innerHTML = '';
    const count = Math.max(1, cards.length - getVisibleCount() + 1);
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('button');
      dot.className = 'testimonials__dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlide() {
    visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, cards.length - visibleCount);
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const card = cards[0];
    const style = getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseFloat(style.marginRight || 0);
    const isRTL = document.documentElement.dir === 'rtl';
    const offset = currentIndex * cardWidth;

    track.style.transform = isRTL
      ? 'translateX(' + offset + 'px)'
      : 'translateX(-' + offset + 'px)';

    const dots = dotsContainer.querySelectorAll('.testimonials__dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  function goTo(index) {
    currentIndex = index;
    updateSlide();
    resetAutoplay();
  }

  function next() {
    const maxIndex = Math.max(0, cards.length - getVisibleCount());
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateSlide();
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(next, 4000);
  }

  // Touch/swipe support
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - e.changedTouches[0].clientX;
    const isRTL = document.documentElement.dir === 'rtl';
    const maxIndex = Math.max(0, cards.length - getVisibleCount());
    if (Math.abs(diff) > 50) {
      if ((diff > 0 && !isRTL) || (diff < 0 && isRTL)) {
        currentIndex = Math.min(currentIndex + 1, maxIndex);
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }
      updateSlide();
      resetAutoplay();
    }
  }, { passive: true });

  // Pause on hover
  slider.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  slider.addEventListener('mouseleave', () => resetAutoplay());

  // Rebuild on resize
  window.addEventListener('resize', () => {
    buildDots();
    updateSlide();
  });

  buildDots();
  updateSlide();
  resetAutoplay();
}
