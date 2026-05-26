import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Blog schema — mirrors the current Hugo frontmatter + two additions:
 * - `featured`: flag for the homepage's "selected items" rail
 * - `source`: which channel the post originated from (medium, youtube, etc.)
 *
 * Every field is optional except what's strictly needed to render a post,
 * so existing Hugo posts migrate without per-post edits.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/[!_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    date: z.coerce.date(),
    // Accept either absolute URL or site-relative path (e.g. "/images/x.png").
    image: z.string().optional().nullable(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Guy Michaelis"),
    draft: z.boolean().default(false),
    // Hugo-era fields, preserved
    aliases: z.array(z.string()).default([]),
    medium_url: z.string().optional().nullable(),
    // New fields
    featured: z.boolean().default(false),
    unlisted: z.boolean().default(false),
    source: z
      .enum(["general", "medium", "youtube", "presentations", "meta"])
      .default("general"),
    series_part: z.number().optional(),
    series_recap: z.boolean().default(false),
    updated_date: z.coerce.date().optional(),
  }),
});

const readingLists = defineCollection({
  loader: glob({ pattern: "**/[!_]*.md", base: "./src/content/reading-lists" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    tagline: z.string().optional().nullable(),
    description: z.string(),
    duration: z.string().optional().nullable(),
    level: z.string().optional().nullable(),
    syllabus: z
      .array(
        z.object({
          title: z.string(),
          summary: z.string().optional().nullable(),
          topics: z.array(z.string()).optional().default([]),
        }),
      )
      .default([]),
    relatedPosts: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, readingLists };
