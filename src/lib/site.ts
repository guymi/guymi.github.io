/**
 * Central site metadata. Change once, reflect everywhere.
 */
export const SITE = {
  title: "Portfolio",
  author: "Guy Michaelis",
  description:
    "DevOps, SRE, Platform Engineering, and AI-driven delivery — by Guy Michaelis.",
  url: "https://guymi.github.io",
  locale: "en",
  postsPerPage: 10,
  // Homepage rails
  latestCount: 12,
  featuredCount: 3,
  social: {
    github: "https://github.com/guymi",
    linkedin: "https://www.linkedin.com/in/guy-michaelis-56889/",
    rss: "/rss.xml",
  },
  // Giscus — update `giscus.repoId` and `giscus.categoryId` after enabling
  // Discussions at github.com/guymi/guymi.github.io.
  giscus: {
    repo: "guymi/guymi.github.io" as const,
    repoId: "",
    category: "Announcements",
    categoryId: "",
    mapping: "pathname",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "bottom",
    theme: "transparent_dark",
    lang: "en",
  },
};

export type SiteConfig = typeof SITE;
