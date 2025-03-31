export type ProjectStatus = 'live' | 'in-progress' | 'archived';

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  liveUrl?: string | null;
  sourceUrl?: string | null;
  technologies: string[];
  image?: string | null;
  featured?: boolean;
  sortOrder?: number;
  updatedAt: string; // ISO date string
}

/**
 * Project data store
 * Add new projects at the top of the array
 * Set featured: true for projects you want to highlight
 * Use sortOrder to control the display order (lower numbers appear first)
 */
export const projects: Project[] = [
  {
    title: "Personal Portfolio Site",
    description: "A modern personal portfolio built with Astro and Svelte. Features a dark mode toggle, responsive design, and animated project cards.",
    status: "live",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/username/project-name",
    technologies: ["Astro", "Svelte", "TailwindCSS", "TypeScript"],
    image: "/images/projects/portfolio.png",
    featured: true,
    sortOrder: 1,
    updatedAt: new Date().toISOString()
  },
  {
    title: "Veteran Assist",
    description: "A web application designed to help veterans find local resources including food kitchens, utility assistance, and other support services. Built with AstroJS, TypeScript, and Tailwind CSS.",
    status: "in-progress",
    liveUrl: null,
    sourceUrl: null,
    technologies: [
      "Astro",
      "TypeScript",
      "TailwindCSS",
      "Google Maps API"
    ],
    image: null,
    updatedAt: new Date().toISOString(),
    featured: true,
    sortOrder: 2,
  }
];

/**
 * Get all projects sorted by sortOrder and updatedAt
 */
export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => {
    // Sort by sortOrder first if both have it
    if (a.sortOrder !== undefined && b.sortOrder !== undefined) {
      return a.sortOrder - b.sortOrder;
    }
    // Sort by updatedAt if no sortOrder
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
}

/**
 * Get featured projects only
 */
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(project => project.featured);
}

/**
 * Get projects by status
 */
export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return getAllProjects().filter(project => project.status === status);
}

/**
 * Get projects by technology
 */
export function getProjectsByTechnology(technology: string): Project[] {
  return getAllProjects().filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase() === technology.toLowerCase()
    )
  );
} 