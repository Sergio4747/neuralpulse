import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    // Core
    title: z.string(),
    titleEs: z.string().optional(),
    excerpt: z.string(),
    excerptEs: z.string().optional(),
    category: z.enum(['AI Models', 'Hardware', 'Big Tech', 'Robotics', 'Research', 'Startups', 'Policy', 'Tools']),
    categoryEs: z.string().optional(),
    author: z.string(),
    authorTitle: z.string().optional(),
    date: z.date(),
    updatedDate: z.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    badge: z.enum(['breaking', 'exclusive', 'trending', 'analysis', '']).optional().default(''),

    // SEO
    metaTitle: z.string().optional(),
    metaTitleEs: z.string().optional(),
    metaDescription: z.string().max(165),
    metaDescriptionEs: z.string().max(165).optional(),
    keywords: z.array(z.string()),
    canonical: z.string().optional(),
    noindex: z.boolean().optional().default(false),

    // Open Graph
    ogImage: z.string().optional(),
    ogType: z.enum(['article', 'website']).optional().default('article'),

    // Article specifics
    readingTime: z.number().optional(),
    featured: z.boolean().optional().default(false),
    lang: z.enum(['en', 'es', 'both']).optional().default('en'),

    // Related (slugs = filenames without .md)
    relatedSlugs: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { articles };
