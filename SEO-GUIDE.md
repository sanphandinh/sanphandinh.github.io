# SEO & Performance Guide

## ✅ What's Included

Your blog now has comprehensive SEO and performance optimization:

### 🔍 SEO Features

1. **Meta Tags** - Complete Open Graph and Twitter Cards
2. **Structured Data** - JSON-LD schema for blog posts
3. **Sitemap** - Auto-generated XML sitemap at `/sitemap.xml`
4. **Robots.txt** - Configured to allow all bots including AI crawlers
5. **RSS Feed** - Available at `/rss.xml`
6. **Canonical URLs** - Proper canonical tags on all pages

### 🤖 AI Bot Support

Your blog is configured to be crawled by:
- ✅ GPTBot (OpenAI)
- ✅ ChatGPT-User
- ✅ Google-Extended
- ✅ ClaudeBot (Anthropic)
- ✅ PerplexityBot
- ✅ All other search engines

### 📊 What Google Sees

Each blog post includes:
- **Title & Description** - Optimized for search results
- **Publish Date** - Helps with freshness ranking
- **Author Information** - Builds authority
- **Structured Data** - Rich snippets in search results

### 🎨 Design Improvements

**Modern Minimalist Theme:**
- Clean black & white color scheme
- Excellent typography with proper line-height and spacing
- Smooth dark mode support
- Professional code blocks with syntax highlighting
- Responsive design that works perfectly on mobile

**Technical Writing Support:**
- Beautiful code blocks with proper styling
- Inline code highlighting
- Blockquotes for important notes
- Table support
- Image optimization-ready

## 📝 Writing Blog Posts

### Markdown Features Supported

#### Code Blocks
\`\`\`javascript
const greeting = "Hello World";
console.log(greeting);
\`\`\`

#### Inline Code
Use \`inline code\` for variable names or short snippets.

#### Blockquotes
> Important note or quote

#### Lists
- Bullet points
- Another item

1. Numbered list
2. Another item

#### Links & Images
[Link text](https://example.com)
![Alt text](image.jpg)

#### Tables
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |

## 🚀 Performance Tips

1. **Images** - Always optimize images before uploading
2. **Code Examples** - Keep code snippets concise
3. **External Links** - Use sparingly to maintain speed
4. **Markdown** - Prefer Markdown over HTML when possible

## 📈 Tracking & Analytics

To add analytics:

### Google Analytics
Add to `src/layouts/Layout.astro` in the `<head>`:
\`\`\`html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
\`\`\`

### Plausible (Privacy-friendly)
\`\`\`html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
\`\`\`

## 🎯 SEO Checklist

- ✅ Sitemap submitted to Google Search Console
- ✅ robots.txt is accessible
- ✅ RSS feed working
- ✅ All pages have unique titles
- ✅ All pages have meta descriptions
- ✅ Images have alt text
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ HTTPS enabled (via GitHub Pages)

## 🔗 Important URLs

- Homepage: `https://sanphandinh.github.io`
- RSS Feed: `https://sanphandinh.github.io/rss.xml`
- Sitemap: `https://sanphandinh.github.io/sitemap.xml`
- Robots.txt: `https://sanphandinh.github.io/robots.txt`

## 📊 Submit to Search Engines

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `sanphandinh.github.io`
3. Verify ownership (via DNS or HTML file)
4. Submit sitemap: `https://sanphandinh.github.io/sitemap.xml`

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

## 🎨 Customization

### Change Color Theme
Edit `src/layouts/Layout.astro`:
\`\`\`css
:root {
  --color-bg: #ffffff;
  --color-text: #0a0a0a;
  /* Customize other colors... */
}
\`\`\`

### Update Site Information
Edit these files:
- `astro.config.mjs` - Site URL
- `src/layouts/Layout.astro` - Site title in nav
- `src/pages/rss.xml.js` - RSS feed info
- `src/pages/about.astro` - About page content

### Add More Features
- Comments: Giscus or Utterances
- Search: Algolia or Pagefind
- Newsletter: Mailchimp or ConvertKit
- Code highlighting: Shiki (already included)

Enjoy your optimized blog! 🎉
