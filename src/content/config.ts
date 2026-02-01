import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        image: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        github: z.string().url().optional(),
        live: z.string().url().optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    projects: projectsCollection,
};
