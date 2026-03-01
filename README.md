# NeuralPulse — AI & Innovation Intelligence

A premium bilingual (EN/ES) Astro news magazine for the AI & Innovation niche.
Optimized for Google AdSense monetization with Forbes/WIRED-level design.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and configure
cp .env.example .env

# 3. Start dev server
npm run dev
# → http://localhost:4321

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
neuralpulse/
├── public/              # Static assets (favicon, og images)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── SEOMeta.astro      # Full SEO meta tag system
│   │   ├── Header.astro       # Header with lang toggle
│   │   ├── Nav.astro          # Sticky navigation
│   │   ├── Hero.astro         # Featured article hero
│   │   ├── ArticleCard.astro  # Article card component
│   │   ├── AdSlot.astro       # AdSense slot component
│   │   ├── Sidebar.astro      # Sidebar with widgets
│   │   ├── Ticker.astro       # Live data ticker
│   │   ├── BreakingBar.astro  # Breaking news bar
│   │   └── Footer.astro       # Footer
│   ├── content/
│   │   ├── config.ts          # Content collection schema
│   │   └── articles/          # ← ADD YOUR ARTICLES HERE (Markdown)
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base layout (all pages)
│   │   └── ArticleLayout.astro # Article page layout
│   ├── lib/
│   │   └── seo.ts             # SEO utilities & schema builders
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── articulo/[slug].astro  # Article pages
│   │   ├── categoria/[cat].astro  # Category pages
│   │   ├── rss.xml.ts         # RSS feed (auto-generated)
│   │   └── robots.txt.ts      # robots.txt (auto-generated)
│   └── styles/
│       └── global.css         # Design system & global styles
├── astro.config.mjs           # Astro config (sitemap, MDX)
├── package.json
└── .env.example               # Environment variables template
```

---

## ✍️ How to Add Articles

Create a new `.md` file in `src/content/articles/`:

```markdown
---
title: "Your Article Title Here"
titleEs: "Título del Artículo en Español"
slug: "your-article-url-slug"
excerpt: "2-3 sentence description shown on cards (EN)"
excerptEs: "Descripción en español"
category: "AI Models"  # See valid options below
author: "Your Name"
authorTitle: "Your Title"
date: 2026-03-01
image: "https://images.unsplash.com/photo-XXXXX?w=1200&q=80"
imageAlt: "Descriptive alt text for SEO"
badge: "trending"  # breaking | exclusive | trending | analysis | ""
featured: false  # Set true for ONE article to be homepage hero

# SEO Fields
metaTitle: "SEO Title | NeuralPulse (50-65 chars)"
metaDescription: "Meta description 140-160 characters for best CTR in Google results"
keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"]
readingTime: 8  # minutes
---

Your article content in Markdown...

## Section Heading

Paragraph text here.

> Blockquote for impactful quotes

**Bold text** for important terms.
```

### Valid Categories:
- `AI Models`
- `Hardware`
- `Big Tech`
- `Robotics`
- `Research`
- `Startups`
- `Policy`
- `Tools`

---

## 💰 AdSense Setup

1. Get approved for Google AdSense at https://adsense.google.com
2. Copy your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)
3. Add to `.env`:
   ```
   PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
   ```
4. In `src/components/SEOMeta.astro`, uncomment the AdSense script tag
5. Replace `AdSlot` components with your actual slot IDs

### Ad Slot Locations (7 total):
| Location | Type | Expected CPC |
|---|---|---|
| After top nav | Leaderboard 728×90 | High |
| Sidebar top | Rectangle 300×250 | Premium |
| Mid-content | Inline 728×90 | Best CTR |
| Sidebar bottom | Rectangle 300×250 | High |
| Second inline | Inline 728×90 | Good |
| Article top | Inline 728×90 | High (captive) |
| Article bottom | Inline 728×90 | Good |

AI niche typical CPCs: **$0.80–$4.50 USD per click**

---

## 🌍 Bilingual System

The site supports EN/ES with a language toggle. To add translations:

1. In **articles**: Add `titleEs`, `excerptEs`, `metaDescriptionEs` fields
2. In **components**: Use `data-en="English text"` and `data-es="Spanish text"` attributes
3. Language preference is saved in `localStorage`

---

## 🔍 SEO Features

- ✅ Auto-generated sitemap.xml via `@astrojs/sitemap`
- ✅ robots.txt with proper crawler rules (blocks AI scrapers)
- ✅ JSON-LD structured data (NewsArticle, Organization, WebSite, BreadcrumbList)
- ✅ Open Graph meta tags (Facebook, LinkedIn)
- ✅ Twitter Card meta tags
- ✅ Hreflang tags for EN/ES
- ✅ RSS feed
- ✅ Canonical URLs
- ✅ Reading progress bar
- ✅ Lazy loading images
- ✅ Semantic HTML (article, nav, aside, header, footer)
- ✅ ARIA labels throughout

---

## 🚀 Deployment

### Vercel (recommended — free tier)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy `dist/` folder to Netlify
```

### GitHub Pages
```bash
# Add to astro.config.mjs:
# base: '/your-repo-name'
npm run build
```

---

## 📊 Recommended Content Strategy

**Posting frequency**: 3–5 articles/week minimum for SEO traction

**High-value keywords for AI niche**:
- "GPT-5 review" / "best AI tools 2026"
- "NVIDIA stock AI" / "AI chip shortage"
- "how to use Claude" / "ChatGPT vs Claude"
- "AI jobs future" / "AI regulation 2026"
- "open source AI models" / "LLM comparison"

**Best content types for AdSense revenue**:
1. Comparison articles ("X vs Y")
2. "How to use [AI tool]" guides
3. Breaking news analysis
4. Roundups ("Best AI tools for X")
5. Explainers ("What is [AI concept]")

---

Built with ❤️ using [Astro](https://astro.build) · Designed for AdSense monetization
# neuralpulse
# neuralpulse
# neuralpulse
# neuralpulse
# neuralpulse
