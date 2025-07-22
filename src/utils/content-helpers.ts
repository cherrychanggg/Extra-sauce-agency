// CONTENT HELPER UTILITIES
// These functions help manage and validate content across the website

import { siteConfig } from '@/content/global/site-config';

/**
 * Validates that required content fields are present
 */
export function validateContent(content: Record<string, any>, requiredFields: string[]): boolean {
  return requiredFields.every(field => {
    const value = content[field];
    return value !== undefined && value !== null && value !== '';
  });
}

/**
 * Safely gets nested content properties
 */
export function getContentValue(content: Record<string, any>, path: string, fallback: string = ''): string {
  const keys = path.split('.');
  let current = content;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return fallback;
    }
  }
  
  return typeof current === 'string' ? current : fallback;
}

/**
 * Formats phone numbers for display
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX for US/Canada numbers
  if (digits.length === 11 && digits.startsWith('1')) {
    const number = digits.slice(1);
    return `+1 (${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
  } else if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  
  return phone; // Return original if format doesn't match
}

/**
 * Validates email addresses
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates URLs
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generates SEO-friendly slugs from text
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Truncates text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Gets the current site configuration
 */
export function getSiteConfig() {
  return siteConfig;
}

/**
 * Formats dates for display
 */
export function formatDate(date: Date | string, format: 'short' | 'long' = 'short'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (format === 'long') {
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Checks if an image URL is valid
 */
export function isValidImageUrl(url: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const lowercaseUrl = url.toLowerCase();
  return imageExtensions.some(ext => lowercaseUrl.includes(ext)) || url.startsWith('data:image/');
}

/**
 * Content validation rules for different content types
 */
export const contentValidationRules = {
  heroSection: ['headline', 'subheadline', 'primaryButton'],
  testimonial: ['quote', 'author'],
  service: ['title', 'description'],
  faq: ['question', 'answer'],
  contact: ['phone', 'email']
};

/**
 * Validates content based on type
 */
export function validateContentByType(content: Record<string, any>, type: keyof typeof contentValidationRules): boolean {
  const rules = contentValidationRules[type];
  if (!rules) return true;
  
  return validateContent(content, rules);
}