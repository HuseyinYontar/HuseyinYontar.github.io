# Portfolio Website

Personal portfolio website built with Astro and deployed on GitHub Pages.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── content/        # Markdown content (projects, blog posts)
│   ├── blog/       # Blog posts (*.md files)
│   └── projects/   # Project descriptions (*.md files)
├── layouts/        # Page layouts
├── pages/          # Route pages
└── styles/         # Global CSS
public/
├── images/         # Static images (profile, projects)
└── favicon.svg     # Site favicon
```

## 📝 Adding Content

### New Blog Post

Create `src/content/blog/my-post.md`:

```markdown
---
title: "My Post Title"
date: 2024-01-20
excerpt: "A brief description of the post."
tags: ["tag1", "tag2"]
---

Your post content here...
```

### New Project

Create `src/content/projects/my-project.md`:

```markdown
---
title: "Project Name"
description: "Short description"
date: 2024-01-15
image: "/images/projects/my-project.png"
technologies: ["React", "Node.js"]
github: "https://github.com/username/repo"
live: "https://example.com"
featured: true
---

Detailed project description...
```

## 🎨 Customization

### Personal Info

Update these files with your info:
- `src/components/Header.astro` - Site title
- `src/components/Footer.astro` - Social links
- `src/pages/about.astro` - Bio, skills, experience
- `src/pages/index.astro` - Hero section text

### Styling

Edit `src/styles/global.css` to customize:
- Colors (CSS variables in `:root`)
- Typography
- Spacing

## 🚀 Deployment

### GitHub Pages

1. Create repo `HuseyinYontar.github.io` on GitHub
2. Push this code to the repo
3. Go to Settings → Pages → Source: "GitHub Actions"
4. Push to `main` - site auto-deploys!

Your site will be live at: `https://huseinyontar.github.io`

## 📄 License

MIT
