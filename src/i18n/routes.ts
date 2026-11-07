import type { Lang } from './ui';

export type Section = 'data' | 'softskills';

export const routes = {
  es: {
    home: '/es',
    data: '/es/datos',
    softskills: '/es/soft-skills',
    about: '/es/sobre-mi',
    archive: '/es/archivo',
    contact: '/es/contacto',
  },
  en: {
    home: '/en',
    data: '/en/data',
    softskills: '/en/soft-skills',
    about: '/en/about',
    archive: '/en/archive',
    contact: '/en/contact',
  },
} as const;

export function sectionPath(lang: Lang, section: Section): string {
  return section === 'data' ? routes[lang].data : routes[lang].softskills;
}
