
# Content Structure Guide

## Overview
This project uses a clean separation between **content** (for non-technical users) and **source code** (for technical users).

## For Non-Technical Users (Content Editing)

### Content Files Location: `/content/`

All website content is stored in JSON files that can be edited without technical knowledge:

#### 📄 Pages
- `content/pages/homepage-content.json` - Homepage content
- `content/pages/success-stories-content.json` - Success stories page
- `content/pages/booking-page.json` - Strategy call booking page
- `content/pages/resources/blogs.json` - Blog posts and content
- `content/pages/resources/newsletters.json` - Newsletter content and archive
- `content/pages/resources/company-news.json` - Company announcements

#### 🔧 Services
- `content/services/executive-ghostwriting.json` - Executive Ghostwriting service page
- `content/services/video-content-engine.json` - Video Content Engine service page  
- `content/services/content-led-gtm-coaching.json` - Content-Led GTM Coaching service page

#### 🌐 Global/Shared
- `content/global/site-configuration.json` - Site-wide settings, contact info, social media
- `content/shared/navigation-menu.json` - Main navigation menu items
- `content/shared/footer-information.json` - Footer content and links

### How to Edit Content

1. **Find the right JSON file** for the page you want to edit
2. **Edit the values** (text between quotes)
3. **Save the file** - changes will appear on the website immediately
4. **Follow the structure** - don't change the keys (field names), only the values

### Example
```json
{
  "heroSection": {
    "headline": "Your New Headline Here",
    "description": "Your new description here"
  }
}
```

## For Technical Users (Development)

### Source Code Location: `/src/`

#### 🎨 Components (`src/components/`)
- UI components and layouts
- No hardcoded content - pulls from JSON files
- Uses Tailwind CSS for styling

#### 📱 Pages (`src/pages/`)
- Page components that load content from JSON
- Uses `useContentLoader` hook to fetch content
- Handles loading states and errors

#### 🛠 Utils (`src/utils/`)
- Content loading utilities
- Helper functions
- Type definitions

#### 🎯 Hooks (`src/hooks/`)
- `useContentLoader` - Loads JSON content files
- Handles loading states, errors, and fallbacks

### Content Loading System

Pages use the `useContentLoader` hook to load JSON content:

```typescript
const { content, loading, error } = useContentLoader('/content/pages/homepage.json');
```

This provides:
- `content` - The loaded JSON data
- `loading` - Loading state
- `error` - Error state if loading fails

### Adding New Content

1. **Create JSON file** in appropriate `/content/` folder
2. **Add path to** `content/utils/content-loader.ts` contentPaths
3. **Update page component** to use the new content file
4. **Add validation rules** if needed

## Content Validation

Each JSON file includes a `meta` section with:
- `description` - What this file contains
- `lastUpdated` - When it was last modified  
- `editInstructions` - How to edit safely

## Benefits of This Structure

✅ **Clear Separation**: Content editors work with JSON, developers work with code
✅ **No Duplication**: Single source of truth for all content
✅ **Easy Updates**: Change content without touching code
✅ **Type Safety**: Content loading includes validation and fallbacks
✅ **Maintainable**: Organized, clean file structure

## Getting Help

- **Content Issues**: Check the JSON file structure and syntax
- **Technical Issues**: Check the component code and content loading
- **Missing Content**: Verify the file path and content loader configuration
