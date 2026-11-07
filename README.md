# martinrosenzweig.com

Sitio personal bilingüe (español e inglés) en Astro, TypeScript, Tailwind CSS y MDX. Se despliega en Cloudflare Pages.

## Estado

Fase 1 (fundaciones) en curso: configuración, i18n (`/es`, `/en`), layout base y páginas de inicio. Sin verificar todavía con `npm run build`.

## Desarrollo

```bash
npm install
npm run dev      # vista previa local
npm run build    # check de tipos y build estático en dist/
```

## Estructura

- `src/i18n/ui.ts`: textos de interfaz en ambos idiomas.
- `src/layouts/BaseLayout.astro`: `<head>`, SEO, hreflang, navegación y tema.
- `src/pages/es/` y `src/pages/en/`: páginas por idioma.
- `src/styles/global.css`: tokens de color (claro y oscuro) y tipografía.

## Próximos pasos

Artículos en `src/content/articles/` (un archivo MDX por idioma), páginas de sección, búsqueda y despliegue en Cloudflare Pages.
