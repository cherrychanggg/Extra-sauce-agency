# Extra Sauce Agency

A modern, customizable web application built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

## Features
- Fast development with Vite
- Type-safe codebase using TypeScript
- Modern UI with React and shadcn-ui components
- Utility-first styling with Tailwind CSS
- Easily editable content files for non-technical users

## Tech Stack
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Directory Structure
```
src/
  components/      # Reusable UI components and sections
  content/         # Editable content files (pages, navigation, services, etc.)
  hooks/           # Custom React hooks
  lib/             # Utility libraries
  pages/           # Top-level route components
  utils/           # Content helpers and utilities
  index.css        # Global styles
  main.tsx         # App entry point
public/            # Static assets (images, etc.)
docs/              # Project and content editing documentation
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node.js)

### Installation
```sh
git clone <YOUR_GIT_URL>
cd sauce-dream-weave
npm install
```

### Development
```sh
npm run dev
```
Visit the local server URL (usually http://localhost:5173 or http://localhost:8080) to view the app.

### Build for Production
```sh
npm run build
```

### Linting
```sh
npm run lint
```

## Editing Content
All editable content (text, navigation, service descriptions, etc.) is stored in the `src/content/` directory. Non-technical users can update these files to change site content without touching the codebase.

See `docs/CONTENT_EDITING_GUIDE.md` for detailed instructions.

## Deployment
You can deploy this app to any static hosting provider (e.g., Netlify, Vercel, GitHub Pages). Configuration files for Netlify (`netlify.toml`) and Vercel (`vercel.json`) are included.

## Documentation
- `WEBSITE_CUSTOMIZATION.md`: Complete website customization guide for business owners
- `SEO_HANDOVER_GUIDE.md`: Comprehensive SEO handover documentation for specialists
- `SEO_AUDIT_CHECKLIST.md`: Quick SEO audit checklist and 90-day action plan
- `SEO_CONTENT_GUIDE.md`: Content management guide for SEO optimization

## SEO Handover Ready 🚀
This website is **fully prepared for SEO handover** with:
- ✅ Complete technical SEO infrastructure
- ✅ Advanced schema markup implementation
- ✅ Performance-optimized Core Web Vitals
- ✅ Mobile-first responsive design
- ✅ Comprehensive content management system

See the SEO handover documentation above for a smooth transition to your SEO specialist.

## Contributing & Support
Pull requests and issues are welcome! For questions or support, please open an issue in this repository.
