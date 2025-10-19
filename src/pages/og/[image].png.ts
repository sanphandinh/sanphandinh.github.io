import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { html } from 'satori-html';
import sharp from 'sharp';

// Enable prerendering for static site generation
export const prerender = true;

export const getStaticPaths = (async () => {
  const blogPosts = await getCollection('blog');

  const paths = [
    // Home page
    {
      params: { image: 'home' },
      props: {
        title: "SanPhan's Blog",
        description: "Thoughts on web development, frontend engineering, and life.",
      },
    },
    // About page
    {
      params: { image: 'about' },
      props: {
        title: 'About - SanPhan\'s Blog',
        description: 'Learn more about San, a frontend engineer passionate about web development and building beautiful user experiences.',
      },
    },
    // Blog index page
    {
      params: { image: 'blog' },
      props: {
        title: 'Blog - SanPhan\'s Blog',
        description: "SanPhan's blog sharing thoughts on web development, frontend and life",
      },
    },
    // Individual blog posts
    ...blogPosts.map((post) => ({
      params: { image: post.id },
      props: {
        title: post.data.title,
        description: post.data.description,
      },
    })),
  ];

  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props;

  // Create the HTML template for the OG image - Satori compatible
  const template = html`
    <div style="display: flex; flex-direction: column; width: 100%; height: 100%; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 60px;">

      <div style="display: flex; align-items: center; margin-bottom: 40px;">
        <div style="display: flex; align-items: center; padding: 12px 24px; background: rgba(6, 182, 212, 0.1); border: 2px solid #06b6d4; border-radius: 30px;">
          <span style="font-size: 32px; margin-right: 12px;">✨</span>
          <span style="font-size: 28px; font-weight: 900; color: #22d3ee;">SanPhan's Blog</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; flex: 1; justify-content: center;">
        <div style="display: flex; font-size: 72px; font-weight: 900; color: #f1f5f9; line-height: 1.1; margin-bottom: 30px; max-width: 90%;">
          ${title}
        </div>
        <div style="display: flex; font-size: 32px; color: #cbd5e1; line-height: 1.5; max-width: 85%;">
          ${description}
        </div>
      </div>

      <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 40px;">
        <div style="display: flex; align-items: center; padding: 8px 20px; background: rgba(139, 92, 246, 0.1); border: 2px solid #8b5cf6; border-radius: 20px;">
          <span style="font-size: 20px; color: #a78bfa; font-weight: 600;">Built with Astro</span>
        </div>
      </div>
    </div>
  `;

  // Convert HTML to SVG using Satori
  try {
    // Fetch fonts from a reliable source
    const fontNormal = await fetch(
      'https://og-playground.vercel.app/inter-latin-ext-400-normal.woff'
    ).then((res) => res.arrayBuffer());

    const fontBold = await fetch(
      'https://og-playground.vercel.app/inter-latin-ext-700-normal.woff'
    ).then((res) => res.arrayBuffer());

    const svg = await satori(template, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontNormal,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fontBold,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fontBold,
          weight: 900,
          style: 'normal',
        },
      ],
    });

    // Convert SVG to PNG using Sharp
    const png = await sharp(Buffer.from(svg))
      .png()
      .toBuffer();

    return new Response(png as any, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
};
