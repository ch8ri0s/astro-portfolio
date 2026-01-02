import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    number: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string(),
    linkText: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    period: z.string(),
    description: z.string(),
    achievements: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  projects: projectsCollection,
  experience: experienceCollection,
};
