import { z } from "zod";

/**
 * Project status schema
 */
export const ProjectStatusSchema = z.enum(["live", "in-progress", "archived"]);

/**
 * Project schema for validation
 */
export const ProjectSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(10).max(500),
  status: ProjectStatusSchema,
  liveUrl: z.string().url().optional(),
  sourceUrl: z.string().url().optional(),
  technologies: z.array(z.string()).min(1),
  image: z.string().optional(),
  featured: z.boolean().optional().default(false),
  sortOrder: z.number().int().positive().optional(),
  updatedAt: z.string().datetime()
});

/**
 * Projects array schema
 */
export const ProjectsSchema = z.array(ProjectSchema);

/**
 * Validate a single project
 * @throws {ZodError} if validation fails
 */
export function validateProject(project: unknown) {
  return ProjectSchema.parse(project);
}

/**
 * Validate projects array
 * @throws {ZodError} if validation fails
 */
export function validateProjects(projects: unknown[]) {
  return ProjectsSchema.parse(projects);
}

/**
 * Safe version of validateProject that returns null on error
 */
export function validateProjectSafe(project: unknown) {
  try {
    return validateProject(project);
  } catch (error) {
    console.error("Project validation failed:", error);
    return null;
  }
}

/**
 * Safe version of validateProjects that filters out invalid projects
 */
export function validateProjectsSafe(projects: unknown[]) {
  return projects
    .map(project => validateProjectSafe(project))
    .filter((project): project is z.infer<typeof ProjectSchema> => project !== null);
} 