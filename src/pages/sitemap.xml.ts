import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import type { CollectionEntry } from 'astro:content';

export async function GET(context: APIContext) {
    const posts = await getCollection('blog');
    const pages = ['', 'blog', 'about'];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${context.site}${page}</loc>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${posts.map((post: CollectionEntry<'blog'>) => `
  <url>
    <loc>${context.site}blog/${post.slug}/</loc>
    <lastmod>${post.data.pubDate.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600',
        },
    });
}
