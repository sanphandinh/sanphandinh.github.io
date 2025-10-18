# Deployment Guide

## Quick Start

Your blog is now ready! Here's how to deploy it to GitHub Pages:

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial blog setup"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub (https://github.com/sanphandinh/sanphandinh.github.io)
2. Click on **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The workflow will automatically deploy your site!

### Step 3: Access Your Blog

Your blog will be available at: `https://sanphandinh.github.io`

## Local Development

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

## Adding New Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2024-03-01
author: "Your Name"
---

# Your content here...
```

3. Save the file - it will appear on your blog automatically!

## Customization

### Change Site Title

Edit `src/layouts/Layout.astro` and update the `.logo` text.

### Modify Colors

Colors are defined as CSS variables in `src/layouts/Layout.astro`:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --color-primary: #2563eb;
  /* ... */
}
```

### Update About Page

Edit `src/pages/about.astro` with your information.

### Change Site URL

Update `site` in `astro.config.mjs` if you're using a custom domain.

## Features

✅ **Lightweight**: Fast loading times with minimal JavaScript
✅ **Responsive**: Works great on all devices
✅ **Dark Mode**: Automatically adapts to system preferences
✅ **SEO Friendly**: Proper meta tags and semantic HTML
✅ **Markdown Support**: Write posts in Markdown or MDX
✅ **Type Safe**: Full TypeScript support
✅ **Auto Deploy**: Automatic deployment via GitHub Actions

## Project Structure

```
/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── content/         # Blog posts
│   │   ├── config.ts    # Content collection schema
│   │   └── blog/        # Your blog posts (.md files)
│   ├── layouts/         # Layout components
│   │   └── Layout.astro
│   └── pages/           # Routes
│       ├── index.astro  # Homepage
│       ├── about.astro  # About page
│       └── blog/
│           ├── index.astro     # Blog list
│           └── [slug].astro    # Blog post page
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
└── astro.config.mjs     # Astro configuration
```

## Troubleshooting

### Build Fails on GitHub Actions

- Check that your `package.json` dependencies are correct
- Verify all blog posts have valid frontmatter
- Look at the Actions logs for specific errors

### Changes Not Showing

- Wait a few minutes for GitHub Actions to complete
- Clear your browser cache
- Check the Actions tab to see if deployment succeeded

## Next Steps

- Customize the design to match your style
- Add more pages (portfolio, contact, etc.)
- Set up analytics (Google Analytics, Plausible, etc.)
- Add an RSS feed
- Implement search functionality
- Add comments (Giscus, Utterances, etc.)

Enjoy your new blog! 🎉
