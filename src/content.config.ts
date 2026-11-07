import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/index.*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(1).max(90),
    summary: z.string().min(40).max(200),
    slug: z.string().regex(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones'),
    lang: z.enum(['es', 'en']),
    section: z.enum(['data', 'softskills']),
    category: z.string().min(1),
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    translationKey: z.string().min(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
