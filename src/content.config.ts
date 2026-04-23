import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    excerpt: z.string().optional(),
    categories: z.union([z.string(), z.array(z.string())]).optional().transform((value) => {
      if (!value) return [];
      return Array.isArray(value) ? value : [value];
    }),
    tags: z.array(z.string()).default([]),
    toc: z.boolean().default(true),
    toc_sticky: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
