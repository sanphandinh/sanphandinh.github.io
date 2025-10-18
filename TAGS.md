# Tag System

## Overview
The blog now supports tagging posts and filtering by tags.

## How to Add Tags to Posts

In your blog post frontmatter, add a `tags` array:

```markdown
---
title: "Your Post Title"
description: "Your description"
pubDate: 2024-01-15
author: "Your Name"
tags: ["JavaScript", "Frontend", "Tutorial"]
---
```

## Tag Filtering

### On the Homepage
- Tags are displayed on each post card (up to 3 tags shown)
- Tags are styled with accent colors for visibility

### On the Blog Listing Page
- A filter bar appears at the top showing all available tags
- Click "All" to see all posts
- Click any tag to filter posts by that tag
- The active filter is highlighted
- URL updates to `/blog?tag=TagName` for shareable filtered views

### On Individual Posts
- All tags are displayed below the post date
- Tags are clickable and link to the filtered blog view
- Hover effects provide visual feedback

## Tag Styling
- Tags use the accent color scheme (cyan/purple gradient)
- Consistent styling across homepage, blog listing, and post pages
- Interactive hover states with transform and glow effects

## Example Tags
- **Technical**: JavaScript, CSS, Frontend, Performance, React, TypeScript
- **Topics**: Web Development, Tutorial, Tips, Best Practices
- **Personal**: Thoughts, Life, Career, Learning
- **Tools**: Astro, Git, VS Code, Node.js

## Tips
- Keep tags concise (1-2 words)
- Use consistent capitalization
- Limit to 3-5 tags per post for best UX
- Consider creating a standard set of tags for consistency
