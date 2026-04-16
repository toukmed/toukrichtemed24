/* =============================================
   Portfolio Projects Configuration
   Add / edit / remove entries here.
   ============================================= */
var PORTFOLIO_PROJECTS = [
  {
    type: "image",
    image: "images/creatifpro.png",
    imageAlt: "Site web interactif CREATIF PRO création en 24H",
    overlayCategory: { fr: "Entreprise Industrielle · Casablanca", ar: "شركة صناعية · الدار البيضاء" },
    overlayTitle:    { fr: "Peinture et revêtement industriel",       ar: "الطلاء والتغطية الصناعية" },
    badgeClass: "badge badge-accent text-xs",
    badge:    { fr: "Peinture Industrielle", ar: "Peinture Industrielle" },
    delivery: { fr: "Livré en 22H",          ar: "سُلِّم في 22 ساعة" },
    title:    { fr: "Creatif PRO",           ar: "Creatif PRO" },
    description: {
      fr: "Site interactif pour l'entreprise de peinture industrielle et systèmes de traitement de surface, met en valeur l'activité et represente les valeurs et engagement de l'entreprise.",
      ar: "موقع تفاعلي لشركة الطلاء الصناعي وأنظمة معالجة الأسطح، يبرز النشاط ويعكس قيم الشركة والتزاماتها."
    },
    url: "https://creatif-pro.com/",
    ariaLabel: "Voir le site Creatif PRO"
  },
  {
    type: "image",
    image: "images/entrapt.png",
    imageAlt: "Site web cabinet comptable — exemple création en 24H",
    overlayCategory: { fr: "Socièté BTP · Agadir", ar: "شركة البناء · أكادير" },
    overlayTitle:    { fr: "Entra PT",              ar: "Entra PT" },
    badgeClass: "badge badge-primary text-xs",
    badge:    { fr: "Socièté BTP",     ar: "شركة البناء" },
    delivery: { fr: "Livré en 22H",    ar: "سُلِّم في 22 ساعة" },
    title:    { fr: "Entra PT",        ar: "Entra PT" },
    description: {
      fr: "Site professionnel avec présentation des services et expertises de la société en terme de construction et des infrastructures.",
      ar: "موقع احترافي يعرض خدمات وخبرات الشركة في مجال البناء والبنية التحتية."
    },
    url: "https://entra-pt.com",
    ariaLabel: "Voir le site Entra PT"
  },
  {
    type: "image",
    image: "images/erp-creatif.png",
    imageAlt: "ERP pour entrerise de peinture industrielle",
    overlayCategory: { fr: "Industrie · Casablanca",          ar: "صناعة · الدار البيضاء" },
    overlayTitle:    { fr: "ERP Peinture Industrielle Casablanca",   ar: "نظام تخطيط موارد المؤسسات للطلاء الصناعي الدار البيضاء" },
    badgeClass: "badge text-xs bg-teal-50 text-teal-700",
    badge:    { fr: "ERP Industrie",                      ar: "صناعة" },
    delivery: { fr: "Livré sur mesure",                 ar: "سُلِّم حسب الطلب" },
    title:    { fr: "ERP de gestion destiné au secteur Industriel", ar: "نظام تخطيط موارد المؤسسات للطلاء الصناعي الدار البيضاء" },
    description: {
      fr: "ERP de gestion destiné au secteur Industriel, avec modules gestion de pointages, dashboard KPIs, de gestion de stock, commandes, facturation et rapports personnalisés.",
      ar: "نظام تخطيط موارد المؤسسات للطلاء الصناعي، مع وحدات إدارة المخزون، الطلبات، الفواتير والتقارير المخصصة."
    },
    url: "https://demo.toukrichtemed.com",
    ariaLabel: "Voir le site ERP industriel (lien demo)"
  },
  {
    type: "image",
    imageAlt: "Plateforme d'apprentissage guidée par IA et gestion de tâches et productivité",
    image: "images/doit.png",
    overlayCategory: { fr: "Open source · Casablanca",            ar: "مفتوح المصدر · الدار البيضاء" },
    overlayTitle:    { fr: "Apprentissage IA et productivité",              ar: "التعلم الآلي وإدارة المهام والإنتاجية" },
    badgeClass: "badge text-xs bg-purple-50 text-purple-700",
    badge:    { fr: "IA et productivité",          ar: "إدارة المهام والإنتاجية" },
    delivery: { fr: "Livré sur mesure",       ar: "سُلِّم حسب الطلب" },
    title:    { fr: "Apprentissage IA et productivité", ar: "التعلم الآلي وإدارة المهام والإنتاجية" },
    description: {
      fr: "Plateforme d'apprentissage guidée par IA et gestion de tâches et productivité, avec fonctionnalités de suivi de progrès, recommandations personnalisées et intégration d'outils de productivité.",
      ar: "منصة تعلم موجهة بالذكاء الاصطناعي وإدارة المهام والإنتاجية، مع ميزات تتبع التقدم، وتوصيات مخصصة، ودمج أدوات الإنتاجية."
    },
    url: "https://doit.toukrichtemed.com",
    ariaLabel: "Voir le site Apprentissage IA et productivité"
  },
//   {
//     type: "emoji",
//     emoji: "🔧",
//     bg: "from-yellow-100 to-orange-100",
//     imageAlt: "Site web plomberie artisan — exemple création en 24H",
//     overlayCategory: { fr: "Plomberie · Tanger",        ar: "سباكة · طنجة" },
//     overlayTitle:    { fr: "Plomberie Express 24H",      ar: "سباكة اكسبريس" },
//     badgeClass: "badge text-xs bg-yellow-50 text-yellow-700",
//     badge:    { fr: "Artisan",                           ar: "حرفي" },
//     delivery: { fr: "Livré en 16H",                      ar: "سُلِّم في 16 ساعة" },
//     title:    { fr: "Plomberie Express Tanger",          ar: "سباكة إكسبريس طنجة" },
//     description: {
//       fr: "Site artisan avec liste des interventions, zone de couverture, avis clients et bouton d'urgence WhatsApp.",
//       ar: "موقع حرفي مع قائمة التدخلات ومنطقة التغطية وآراء العملاء وزر طوارئ واتساب."
//     },
//     url: "#",
//     ariaLabel: "Voir le site Plomberie Express (lien exemple)"
//   }
];
