import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://sanphandinh.github.io',
  base: '/',
  title: "San Phan's Blog",
  description:
    'Passionate frontend developer with 8 years of experience. Family man, book lover, and coding enthusiast. Join my blog for insights and fun',
  author: 'San Phan',
  lang: 'en',
  ogLocale: 'en_US',
  imageDomains: ['cdn.bsky.app'],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: 'Blog',
      displayMode: 'alwaysText',
      text: 'Blog',
    },
    // {
    //   path: '/shorts',
    //   title: 'Shorts',
    //   displayMode: 'iconToTextOnMobile',
    //   text: 'Shorts',
    //   icon: 'i-material-symbols-note-stack-outline-sharp',
    // },
    // {
    //   path: '/highlights',
    //   title: 'Highlights',
    //   displayMode: 'iconToTextOnMobile',
    //   text: 'Highlights',
    //   icon: 'i-ri-screenshot-line',
    // },
    // {
    //   path: '/changelog',
    //   title: 'Changelog',
    //   displayMode: 'iconToTextOnMobile',
    //   text: 'Changelog',
    //   icon: 'i-ri-draft-line',
    // },
  ],
  socialLinks: [
    {
      link: 'https://github.com/sanphandinh',
      title: 'SanPhan on Github',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    {
      link: 'https://x.com/sanphandinh',
      title: 'SanPhan on Twitter',
      displayMode: 'alwaysIcon',
      icon: 'i-ri-twitter-x-fill',
    },
    {
      link: 'https://www.linkedin.com/in/san-phan-a2b467122/',
      title: 'SanPhan on LinkedIn',
      displayMode: 'alwaysIcon',
      icon: 'i-mingcute-linkedin-line',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
      'hr',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'AstroBlog', path: '/feeds' },
    { title: 'AstroStreams', path: '/streams' },
  ],
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
  postMetaStyle: 'minimal',
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'content',
    },
  ],
  share: [
    true,
    {
      twitter: [true, '@sanphandinh'],
      bluesky: false,
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  giscus: [
    true,
    {
      'data-repo': 'lin-stephanie/astro-antfustyle-theme',
      'data-repo-id': 'R_kgDOLylKbA',
      'data-category': 'Giscus',
      'data-category-id': 'DIC_kwDOLylKbM4Cpugn',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-lang': 'en',
    },
  ],
}
