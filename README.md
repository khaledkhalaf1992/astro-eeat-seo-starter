<div align="center">
  <h1>🚀 Astro E-E-A-T SEO Starter</h1>
  <p><strong>A battle-tested Astro template engineered for maximum Google E-E-A-T authority, sub-100ms Core Web Vitals, and automated Schema.org JSON-LD structured data.</strong></p>

  <p>
    <a href="https://github.com/khaledkhalaf1992/astro-eeat-seo-starter/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="MIT License" /></a>
    <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-4.x-FF5D01?style=flat-square&logo=astro&logoColor=white" alt="Astro" /></a>
    <a href="https://pages.cloudflare.com"><img src="https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Pages" /></a>
    <a href="https://pagespeed.web.dev"><img src="https://img.shields.io/badge/Lighthouse-100%2F100-00CC66?style=flat-square&logo=lighthouse&logoColor=white" alt="Lighthouse Score" /></a>
  </p>
</div>

---

## 🌟 Why This Architecture?

Traditional web frameworks often ship heavy JavaScript payloads and bloated DOM trees that destroy Google's **Core Web Vitals** (INP, LCP, CLS) and squander crawl budgets on large portals.

This starter kit embodies over a decade of real-world Technical SEO engineering experience in high-concurrency e-commerce, directory portals, and content hubs:
- **Zero Runtime JS by Default:** Pure static HTML delivery for instant crawler comprehension.
- **Automated Google E-E-A-T Structured Data:** Built-in TypeScript generators for `Organization`, `Person` (Author), `TechArticle`, and `BreadcrumbList` schemas.
- **Canonical & Meta Hygiene:** Automatic canonical URL generation, OpenGraph images, Twitter cards, and robots meta tags.
- **Sitemap Integration:** Dynamic XML sitemaps with custom change frequencies and prioritization.

---

## ⚡ Architecture & Directory Structure

```text
astro-eeat-seo-starter/
├── src/
│   ├── components/
│   │   └── SEOHead.astro         # Reusable metadata, OG tags, and JSON-LD injector
│   ├── layouts/
│   │   └── BaseLayout.astro      # Master layout with semantic HTML5 architecture
│   ├── pages/
│   │   └── index.astro           # 100/100 Lighthouse score showcase page
│   └── utils/
│       └── schemaGenerator.ts    # Type-safe Schema.org E-E-A-T JSON-LD generator
├── astro.config.mjs              # Astro & XML sitemap configuration
├── package.json
└── tsconfig.json
```

---

## 🚀 Quick Start

### 1. Clone the repository:
```bash
git clone https://github.com/khaledkhalaf1992/astro-eeat-seo-starter.git
cd astro-eeat-seo-starter
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start local development server:
```bash
npm run dev
```

### 4. Build for production:
```bash
npm run build
```

---

## 🛡️ E-E-A-T Structured Data Usage

```typescript
import { generateArticleSchema } from '@utils/schemaGenerator';

const articleSchema = generateArticleSchema({
  title: 'Advanced Technical SEO for Core Web Vitals',
  description: 'How to optimize crawl budget and eliminate render-blocking CSS.',
  url: 'https://example.com/blog/technical-seo',
  publishDate: '2026-11-06T20:00:00Z',
  author: {
    name: 'Khaled Gamal Khalaf',
    url: 'https://github.com/khaledkhalaf1992',
    jobTitle: 'Senior Technical SEO & Growth Architect',
    knowsAbout: ['Technical SEO', 'Web Performance', 'Cloudflare Pages'],
  },
  publisher: {
    name: 'Tech Portal',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png',
    description: 'Enterprise Technical SEO Publishing',
  },
  image: 'https://example.com/cover.jpg',
});
```

---

## 👨‍💻 Author & Maintainer

**Khaled Gamal Khalaf**
- Senior Technical SEO & Digital Growth Architect (12+ Years in Production Platforms)
- LinkedIn: [linkedin.com/in/khaledkhalaf92](https://www.linkedin.com/in/khaledkhalaf92/)
- GitHub: [@khaledkhalaf1992](https://github.com/khaledkhalaf1992)

---

## 📄 License
This project is licensed under the [MIT License](LICENSE). Free for personal and commercial usage.
