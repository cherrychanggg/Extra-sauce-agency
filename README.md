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
- `docs/CONTENT_EDITING_GUIDE.md`: How to edit site content
- `docs/component-guide.md`: Component usage and customization
- `docs/WEBSITE_CUSTOMIZATION.md`: Customizing the website
- `docs/troubleshooting.md`: Common issues and solutions

## Contributing & Support
Pull requests and issues are welcome! For questions or support, please open an issue in this repository.
