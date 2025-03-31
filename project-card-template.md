# Project Card Information Template

Use this template to gather information for project cards. Each section should be filled out with relevant information that will be used to generate a project card component.

## Required Information

### Title
- Project name (keep it concise and clear)
- Example: `"Personal Portfolio Site"`

### Description
- Brief description of the project (2-3 sentences max)
- Focus on the purpose and key features
- Example: `"A modern personal portfolio built with Astro and Svelte. Features a dark mode toggle, responsive design, and animated project cards."`

## Optional Information

### Status
- Choose one of: `'live'`, `'in-progress'`, or `'archived'`
- Default: `'live'`
- Example: `'live'`

### Live URL
- Full URL to the live project (if available)
- Must include `https://` or `http://`
- Example: `"https://example.com"`

### Source URL
- Full URL to the source code repository (if public)
- Typically a GitHub, GitLab, or similar URL
- Example: `"https://github.com/username/project-name"`

### Technologies
- List of technologies, frameworks, and tools used
- Format as an array of strings
- Keep each technology name concise
- Example: `["Astro", "Svelte", "TailwindCSS", "TypeScript"]`

### Image
- Path to project screenshot or logo
- Use relative path from project root
- Recommended size: 800x600px or 400x300px (2:1.5 ratio)
- Supported formats: PNG, JPG, WebP
- Example: `"/images/projects/project-name.png"`

## Example Card Data

```json
{
  "title": "Personal Portfolio Site",
  "description": "A modern personal portfolio built with Astro and Svelte. Features a dark mode toggle, responsive design, and animated project cards.",
  "status": "live",
  "liveUrl": "https://example.com",
  "sourceUrl": "https://github.com/username/project-name",
  "technologies": ["Astro", "Svelte", "TailwindCSS", "TypeScript"],
  "image": "/images/projects/portfolio.png"
}
```

## Instructions for AI Processing

When processing this template:
1. Extract all fields marked with values
2. Validate URLs for proper formatting
3. Ensure image paths are relative to project root
4. Verify status is one of the allowed values
5. Check that technologies are provided as an array
6. Maintain proper JSON structure for output

## Usage in Astro Component

```astro
<Card
  title={projectData.title}
  description={projectData.description}
  status={projectData.status}
  liveUrl={projectData.liveUrl}
  sourceUrl={projectData.sourceUrl}
  technologies={projectData.technologies}
  image={projectData.image}
/>
```

## Notes
- All text fields support basic markdown formatting
- URLs must be complete and valid
- Image paths should be verified to exist in project
- Status must match one of the predefined values
- Technology names should be consistent across projects 