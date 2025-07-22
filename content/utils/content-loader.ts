
// CONTENT LOADING UTILITIES
// Helper functions to load and validate JSON content files

export type ContentFile = {
  meta?: {
    description?: string;
    lastUpdated?: string;
    editInstructions?: string;
  };
  [key: string]: any;
};

/**
 * Loads and validates JSON content files
 */
export async function loadContentFile(filePath: string): Promise<ContentFile> {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load content file: ${filePath} (${response.status})`);
    }
    const content = await response.json();
    
    // Validate content structure
    if (typeof content !== 'object' || content === null) {
      throw new Error(`Invalid content format in ${filePath}`);
    }
    
    console.log(`✅ Successfully loaded content from ${filePath}`);
    return content;
  } catch (error) {
    console.error(`❌ Error loading content file ${filePath}:`, error);
    return {
      meta: {
        description: "Fallback content due to loading error",
        lastUpdated: new Date().toISOString(),
        editInstructions: `Fix the error in ${filePath}`
      },
      error: true,
      message: "Content could not be loaded. Please check the JSON file."
    };
  }
}

/**
 * Loads multiple content files at once
 */
export async function loadMultipleContentFiles(
  files: Array<{ path: string; key: string }>
): Promise<Record<string, ContentFile>> {
  const content: Record<string, ContentFile> = {};
  
  await Promise.all(
    files.map(async ({ path, key }) => {
      content[key] = await loadContentFile(path);
    })
  );
  
  return content;
}

/**
 * Safely gets nested content properties
 */
export function getContentValue(
  content: ContentFile, 
  path: string, 
  fallback: any = ''
): any {
  const keys = path.split('.');
  let current = content;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return fallback;
    }
  }
  
  return current;
}

/**
 * Validates required content fields
 */
export function validateContentFields(
  content: ContentFile, 
  requiredFields: string[]
): { isValid: boolean; missingFields: string[] } {
  const missingFields: string[] = [];
  
  for (const field of requiredFields) {
    const value = getContentValue(content, field);
    if (value === undefined || value === null || value === '') {
      missingFields.push(field);
    }
  }
  
  return {
    isValid: missingFields.length === 0,
    missingFields
  };
}

/**
 * Merges content with fallback values
 */
export function mergeContentWithFallbacks(
  content: ContentFile,
  fallbacks: ContentFile
): ContentFile {
  return {
    ...fallbacks,
    ...content,
    meta: {
      ...fallbacks.meta,
      ...content.meta
    }
  };
}

/**
 * Content validation rules for different content types
 */
export const contentValidationRules = {
  homepage: ['heroSection.headline', 'heroSection.subheadline'],
  successStories: ['heroSection.headline', 'stories'],
  seo: ['pageTitle', 'metaDescription', 'keywords'],
  navigation: ['mainNavigation', 'callToActionButton'],
  footer: ['companySection.name', 'linkSections'],
  blogs: ['heroSection.headline', 'posts'],
  newsletters: ['heroSection.headline', 'newsletter.title'],
  companyNews: ['heroSection.headline', 'news']
};

/**
 * Validates content based on type
 */
export function validateContentByType(
  content: ContentFile, 
  type: keyof typeof contentValidationRules
): { isValid: boolean; missingFields: string[] } {
  const rules = contentValidationRules[type];
  if (!rules) {
    return { isValid: true, missingFields: [] };
  }
  
  return validateContentFields(content, rules);
}

/**
 * Formats content for display (handles arrays, objects, etc.)
 */
export function formatContentForDisplay(value: any): string {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return value.toString();
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'object' && value !== null) return JSON.stringify(value, null, 2);
  return String(value);
}

/**
 * Gets content file paths for different page types
 */
export const contentPaths = {
  homepage: '/content/pages/homepage-content.json',
  successStories: '/content/pages/success-stories-content.json', 
  sauceRecipe: '/content/pages/sauce-recipe.json',
  bookingPage: '/content/pages/booking-page.json',
  blogs: '/content/pages/resources/blogs.json',
  newsletters: '/content/pages/resources/newsletters.json',
  companyNews: '/content/pages/resources/company-news.json',
  navigation: '/content/shared/navigation-menu.json',
  footer: '/content/shared/footer-information.json',
  siteConfig: '/content/global/site-configuration.json',
  // Services
  executiveGhostwriting: '/content/services/executive-ghostwriting.json',
  videoContentEngine: '/content/services/video-content-engine.json',
  contentLedGTMCoaching: '/content/services/content-led-gtm-coaching.json'
};
