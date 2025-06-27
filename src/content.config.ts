import { glob, file } from 'astro/loaders'
import { defineCollection } from 'astro:content'

import { feedLoader } from '@ascorbic/feed-loader'

import {
  pageSchema,
  postSchema,
  projectSchema,
  streamSchema,
} from '~/content/schema'

const pages = defineCollection({
  loader: glob({ base: './src/pages', pattern: '**/*.mdx' }),
  schema: pageSchema,
})

const home = defineCollection({
  loader: glob({ base: './src/content/home', pattern: 'index.{md,mdx}' }),
})

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: postSchema,
})

const projects = defineCollection({
  loader: file('src/content/projects/data.json'),
  schema: projectSchema,
})

const changelog = defineCollection({
  loader: glob({
    base: './src/content/changelog',
    pattern: '**/[^_]*.{md,mdx}',
  }),
  schema: postSchema,
})

const streams = defineCollection({
  loader: file('src/content/streams/data.json'),
  schema: streamSchema,
})

const feeds = defineCollection({
  loader: feedLoader({
    url: 'https://astro.build/rss.xml',
  }),
})


const highlights = defineCollection({
  loader: glob({ base: './src/content/highlights', pattern: '**/[^_]*.{md,mdx}' }),
  schema: postSchema,
})

export const collections = {
  pages,
  home,
  blog,
  projects,
  changelog,
  streams,
  feeds,
  highlights,
}
