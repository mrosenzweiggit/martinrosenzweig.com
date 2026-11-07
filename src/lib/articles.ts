import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import type { Section } from '../i18n/routes';

export type Entry = CollectionEntry<'articles'>;

// Los borradores se ven en desarrollo, pero no se publican en producción.
const showDrafts = import.meta.env.DEV;

export async function getEntries(section: Section): Promise<Entry[]> {
  const items = await getCollection(
    'articles',
    (e) => e.data.section === section && (showDrafts || !e.data.draft),
  );
  return items.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export async function getEntriesFor(section: Section, lang: Lang): Promise<Entry[]> {
  return (await getEntries(section)).filter((e) => e.data.lang === lang);
}

/** Devuelve la versión del artículo en otro idioma, si existe. */
export async function findTranslation(entry: Entry, lang: Lang): Promise<Entry | undefined> {
  return (await getEntries(entry.data.section)).find(
    (e) => e.data.lang === lang && e.data.translationKey === entry.data.translationKey,
  );
}

/**
 * Rutas de detalle para un idioma. Si un artículo solo existe en el otro idioma,
 * se genera una página de cortesía (missing: true) en esta ruta.
 */
export async function getArticleRoutes(section: Section, lang: Lang) {
  const all = await getEntries(section);
  const available = new Set(all.filter((e) => e.data.lang === lang).map((e) => e.data.translationKey));
  return all
    .filter((e) => e.data.lang === lang || !available.has(e.data.translationKey))
    .map((entry) => ({
      params: { slug: entry.data.slug },
      props: { entry, missing: entry.data.lang !== lang },
    }));
}

export function readingTime(body: string | undefined): number {
  const text = (body ?? '').replace(/```[\s\S]*?```/g, '').replace(/^import .*$/gm, '');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
