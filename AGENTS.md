# AGENTS.md: ronaldrbb

CV de Ronald Bello en dos formas: `README.md` (perfil de GitHub, español e
inglés en `<details>`) y una página React 19 + Vite 8 + Bulma publicada en
`https://ronaldrbb.github.io/ronaldrbb/`.

## Datos clave

| Qué | Valor |
|---|---|
| Contenido de la página | `public/files/cv_es.json` y `cv_en.json`, que lee `src/services/cv.js` |
| PDFs y foto | `public/files/*.pdf` (enlazados desde `downloadCV` del JSON), `public/img/profile.jpeg` |
| Componentes | `src/components/` (`header`, `content`, `aside`, `main.jsx`) |
| Comandos | `npm start` (desarrollo), `npm run build` (sale a `build/`), `npm run preview` |
| Publicación | `npm run deploy`: compila y sube `build/` a la rama `gh-pages` con `gh-pages`; Pages sirve esa rama. No hay workflows |
| Ruta base | `base: '/ronaldrbb/'` en `vite.config.js` y `homepage` en `package.json` |

## Reglas

- El CV vive en tres sitios que no se generan entre sí: `README.md`, los JSON
  y los PDFs. Un cambio de contenido toca los que correspondan, en ambos idiomas.
- `.gitignore` ignora `public/`: los archivos nuevos ahí van con `git add -f`.
- No editar la rama `gh-pages` a mano; la escribe `npm run deploy`.
