export const siteConfig = {
  // Site metadata
  title: "SanPhan's Blog",
  description: "Thoughts on web development, frontend engineering, and life.",
  author: "San Phan",

  // Social links - Add your URLs here, leave empty to hide
  social: {
    github: {
      url: "https://github.com/sanphandinh", // e.g., "https://github.com/sanphandinh"
      label: "GitHub",
      icon: "🐙",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/san-phan-a2b467122/", // e.g., "https://linkedin.com/in/your-profile"
      label: "LinkedIn",
      icon: "💼",
    },
    twitter: {
      url: "", // e.g., "https://twitter.com/your-handle"
      label: "Twitter",
      icon: "🐦",
    },
    email: {
      url: "mailto:phandinhsan1993@gmail.com", // e.g., "mailto:your@email.com"
      label: "Email",
      icon: "📧",
    },
    devto: {
      url: "", // e.g., "https://dev.to/your-username"
      label: "Dev.to",
      icon: "📝",
    },
  },
};

// Helper to get only active social links (with URLs)
export const getActiveSocialLinks = () => {
  return Object.entries(siteConfig.social)
    .filter(([_, config]) => config.url)
    .map(([platform, config]) => ({
      platform,
      ...config,
    }));
};
