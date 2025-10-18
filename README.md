# Personal Blog

A minimal, beautiful personal blog built with Astro featuring modern design and comprehensive SEO.

## ✨ Features

- 🎨 **Modern Minimalist Design** - Clean black & white theme with excellent typography
- 🚀 **Fast & Lightweight** - Astro's zero-JS approach for blazing fast performance
- 📝 **Markdown/MDX Support** - Write posts in Markdown with beautiful styling
- � **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards
- 🤖 **AI Bot Friendly** - Configured for GPTBot, ClaudeBot, and other AI crawlers
- � **Structured Data** - JSON-LD schema for rich search results
- 🗺️ **Sitemap & RSS** - Auto-generated sitemap and RSS feed
- 🌙 **Dark Mode** - Automatic dark mode based on system preferences
- � **Responsive** - Works perfectly on all devices
- 💻 **Tech Blog Ready** - Beautiful code blocks and syntax highlighting

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
# Visit http://localhost:4321

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── content/         # Blog posts
│   │   ├── config.ts    # Content schema
│   │   └── blog/        # Your markdown posts
│   ├── layouts/         
│   │   └── Layout.astro # Main layout with SEO
│   └── pages/           
│       ├── index.astro      # Homepage
│       ├── about.astro      # About page
│       ├── blog/
│       │   ├── index.astro    # Blog list
│       │   └── [slug].astro   # Blog post
│       ├── rss.xml.js         # RSS feed
│       ├── sitemap.xml.ts     # Sitemap
│       └── robots.txt.ts      # Robots.txt
└── astro.config.mjs     # Astro config
```

## ✍️ Writing Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description for SEO"
pubDate: 2024-10-17
author: "Your Name"
---

# Your content here

Write your post using Markdown...
```

### Supported Markdown Features

- Code blocks with syntax highlighting
- Inline code
- Blockquotes
- Lists (ordered & unordered)
- Tables
- Images
- Links

## 🔧 Deployment

### GitHub Pages

1. Push to GitHub:
```bash
git add .
git commit -m "Update blog"
git push origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy your site

3. Your blog will be live at: `https://sanphandinh.github.io`

## 🎯 SEO Configuration

Your blog includes:

- ✅ Meta tags (title, description)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap (`/sitemap.xml`)
- ✅ RSS Feed (`/rss.xml`)
- ✅ Robots.txt (`/robots.txt`)

### Submit to Search Engines

**Google Search Console:**
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add property: `sanphandinh.github.io`
3. Submit sitemap: `https://sanphandinh.github.io/sitemap.xml`

**Bing Webmaster Tools:**
1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site and submit sitemap

## 🎨 Customization

### Colors

Edit `src/layouts/Layout.astro` to change the color scheme:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #0a0a0a;
  --color-text-secondary: #525252;
  /* ... */
}
```

### Site Information

- **Site title**: `src/layouts/Layout.astro` (`.logo` in nav)
- **Site URL**: `astro.config.mjs` (`site` property)
- **About page**: `src/pages/about.astro`
- **RSS info**: `src/pages/rss.xml.js`

## 📚 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [SEO-GUIDE.md](./SEO-GUIDE.md) - Complete SEO documentation

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Language**: TypeScript
- **Styling**: CSS (Scoped styles)
- **Content**: Markdown/MDX
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📄 License

MIT

---

Built with ❤️ using Astro

