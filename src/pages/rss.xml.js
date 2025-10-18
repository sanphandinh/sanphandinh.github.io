import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) =>
    b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: 'My Blog',
    description: 'A personal blog by a frontend engineer sharing insights on web development, programming, and technology',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
    })),
    customData: `<language>en-us</language>`,
  });
}
