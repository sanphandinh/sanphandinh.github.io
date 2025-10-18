import type { APIContext } from 'astro';

export function GET(context: APIContext) {
    const robotsTxt = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${new URL('sitemap.xml', context.site || 'https://sanphandinh.github.io').href}
`;

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
