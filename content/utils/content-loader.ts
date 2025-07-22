
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
      throw new Error(`Failed to load content file: ${filePath}`);
    }
    const content = await response.json();
    
    // Validate content structure
    if (typeof content !== 'object' || content === null) {
      throw new Error(`Invalid content format in ${filePath}`);
    }
    
    return content;
  } catch (error) {
    console.error(`Error loading content file ${filePath}:`, error);
    return {};
  }
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
  successStories: ['heroSection.headline', 'exploreSection.headline'],
  seo: ['pageTitle', 'metaDescription', 'keywords'],
  navigation: ['mainNavigation', 'callToActionButton'],
  footer: ['companySection.name', 'linkSections']
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
