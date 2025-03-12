import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});


const project = defineCollection({
	// Load Markdown and MDX files in the `src/content/project/` directory.
	loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		codeLink: z.string().optional(),
		deploymentLink: z.string().optional(),
		demoLink: z.string().optional(),
		heroImage: z.string().optional(),
		rank:  z.coerce.number(),
		tags: z.array(z.string()).optional()
	}),
});


const pull_request = defineCollection({
	// Load Markdown and MDX files in the `src/content/project/` directory.
	loader: glob({ base: './src/content/pull_request', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		orgName: z.string().optional(),
		orgLink: z.string().optional(), 
		orgDescription: z.string().optional(), 
		repoName: z.string().optional(), 
		repoLink: z.string().optional(), 
		orgLabels: z.array(z.string()).optional(),
		
		prTitle: z.string().optional(),
		prNumber: z.string().optional(),
		prLink: z.string().optional(),
		prStatus: z.string().optional(),
		prDescription: z.string().optional(),
		prDate: z.coerce.date().optional(),
		prLabels: z.array(z.string()).optional(),
		
		issueTitle: z.string().optional(),
		issueNumber: z.string().optional(),
		issueLink: z.coerce.date().optional(),
		issueDescription: z.string().optional(),
		issueStatus: z.string().optional(),
		issueDate: z.coerce.date().optional().optional(),
		issueLabels: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, project, pull_request};
