export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'site.name': 'Martín Rosenzweig',
    'site.tagline': 'Data Team Lead · BI & Data Engineer · Analytics Engineer',
    'nav.data': 'Datos',
    'nav.softskills': 'Soft Skills',
    'nav.about': 'Sobre mí',
    'nav.archive': 'Archivo',
    'nav.contact': 'Contacto',
    'lang.switch': 'Cambiar idioma',
    'home.title': 'Inicio',
    'home.description': 'Datos, analytics y tecnología, y también liderazgo y comunicación.',
    'home.intro':
      'Más de 15 años en Data & Analytics: plataformas de datos escalables, orientadas al negocio y con métricas confiables.',
    'home.cta.data': 'Ver artículos de datos',
    'home.cta.softskills': 'Ver soft skills',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'site.name': 'Martín Rosenzweig',
    'site.tagline': 'Data Team Lead · BI & Data Engineer · Analytics Engineer',
    'nav.data': 'Data',
    'nav.softskills': 'Soft Skills',
    'nav.about': 'About',
    'nav.archive': 'Archive',
    'nav.contact': 'Contact',
    'lang.switch': 'Change language',
    'home.title': 'Home',
    'home.description': 'Data, analytics and technology, plus leadership and communication.',
    'home.intro':
      'More than 15 years in Data & Analytics: scalable, business-oriented data platforms with trusted metrics.',
    'home.cta.data': 'Read data articles',
    'home.cta.softskills': 'Read soft skills',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];
