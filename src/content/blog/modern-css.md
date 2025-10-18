---
title: "Modern CSS Techniques"
description: "Exploring modern CSS features that make styling easier and more powerful."
pubDate: 2024-02-15
author: "Your Name"
tags: ["CSS", "Frontend", "Web Development"]
---

# Modern CSS Techniques

CSS has evolved tremendously in recent years. Let's explore some modern techniques that can improve your styling workflow.

## Container Queries

Container queries let you style elements based on their container's size:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

## CSS Grid & Subgrid

Grid layout has revolutionized CSS layouts:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

## Custom Properties (CSS Variables)

Create dynamic, maintainable styles:

```css
:root {
  --primary-color: #2563eb;
  --spacing-unit: 8px;
}

.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
}
```

## Modern Selectors

### `:has()` Selector

Style parent elements based on their children:

```css
.card:has(img) {
  padding: 0;
}
```

### `:is()` and `:where()`

Simplify complex selectors:

```css
:is(h1, h2, h3) {
  line-height: 1.2;
}
```

## Logical Properties

Write direction-agnostic CSS:

```css
.element {
  margin-inline: 1rem; /* Instead of margin-left/right */
  padding-block: 2rem; /* Instead of padding-top/bottom */
}
```

## Conclusion

Modern CSS is powerful and expressive. These features help us write better, more maintainable stylesheets with less code.

Keep exploring and experimenting! 🎨
