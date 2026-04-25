# Him HEY — Portfolio

A modern, responsive personal portfolio built as a Progressive Web App (PWA). It showcases an about section, technical skills, projects, and contact information, and exports a clean PDF resume.

## ✨ Features

- ⚡ React + Vite + TypeScript + Tailwind CSS
- 🎨 Dark + neon design system with optional light mode toggle
- 📱 Fully responsive — mobile-first, tablet, desktop
- 📄 PDF export via [`html2pdf.js`](https://github.com/eKoopmans/html2pdf.js) → `him_hey_portfolio.pdf`
- 🧊 Glassmorphism cards, scroll/hover animations, sticky navbar
- 🪄 PWA-ready — `manifest.webmanifest`, app icons, "Add to Home Screen"
- ♿ Accessible — semantic HTML, keyboard-friendly nav

## 🚀 Getting started

```bash
bun install      # or: npm install
bun run dev      # or: npm run dev
bun run build
```

## ✏️ Customizing

- Update text/links in `src/components/portfolio/*` (Hero, Skills, Projects, Contact).
- Replace images in `src/assets/` (`profile.jpg`, `project-*.jpg`).
- Update icons in `public/icon-512.png` & `public/icon-192.png`.
- Edit metadata in `index.html` and `public/manifest.webmanifest`.
- Tweak design tokens in `src/index.css` and `tailwind.config.ts`.

## 📦 Deployment

### GitHub Pages (Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push: { branches: [main] }
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: ./dist }
      - id: deployment
        uses: actions/deploy-pages@v4
```

If deploying to a project subpath, set `base: '/<repo-name>/'` in `vite.config.ts`.

### GitLab Pages

Create `.gitlab-ci.yml`:

```yaml
image: oven/bun:1
pages:
  script:
    - bun install --frozen-lockfile
    - bun run build
    - mv dist public
  artifacts:
    paths: [public]
  only: [main]
```

## 🔗 Links

- **Live URL**: _add your deployed URL here_
- **Repository**: _add your GitHub/GitLab URL here_

## 📝 License

MIT — fork and personalize freely.
