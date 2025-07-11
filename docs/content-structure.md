# 📁 Content Structure Guide

## 🎯 Overview

This document explains how content is organized in the Extra Sauce website for easy editing and maintenance.

---

## 📂 Content Organization

### **Global Content** (`src/content/global/`)
Site-wide settings that affect the entire website:

- **`site-config.ts`** - Main site configuration
  - Contact information
  - Social media links
  - Brand colors and assets
  - SEO settings
  - Analytics IDs

### **Page Content** (`src/content/pages/`)
Content specific to individual pages:

- **`homepage.ts`** - Homepage sections and text
- **`booking-page.ts`** - Strategy call booking page
- **`sauce-recipe.ts`** - The Sauce Recipe process page

### **Service Content** (`src/content/services/`)
Individual service page content:

- **`executive-ghostwriting.ts`** - Executive Ghostwriting service
- **`video-content-engine.ts`** - Video Content Engine service  
- **`content-led-gtm-coaching.ts`** - GTM Coaching service

### **Shared Content** (`src/content/shared/`)
Content used across multiple pages:

- **`navigation.ts`** - Menu items and navigation
- **`footer.ts`** - Footer information and links
- **`testimonials.ts`** - Client testimonials and reviews
- **`success-stories.ts`** - Case studies and results

---

## 🏗️ Content Structure Patterns

### **Section Structure**
Each page section follows this pattern:
```typescript
export const sectionName = {
  headline: "Main heading text",
  subheadline: "Supporting description",
  content: "Main content text",
  button: {
    text: "Button label",
    link: "/destination-url"
  }
};
```

### **List Content**
For repeating content like services or FAQs:
```typescript
export const services = [
  {
    title: "Service Name",
    description: "Service description",
    features: ["Feature 1", "Feature 2"],
    link: "/service-url"
  }
];
```

### **Contact Information**
Centralized contact details:
```typescript
export const contact = {
  phone: "+1 (555) 123-4567",
  email: "contact@company.com",
  address: "Company address"
};
```

---

## ✏️ Editing Guidelines

### **Safe to Edit:**
- Text content between quotes
- Phone numbers and email addresses
- URLs and links
- Image file names (if images exist)
- Numbers and metrics

### **Don't Change:**
- Variable names (`export const`)
- Object structure (`{`, `}`)
- Array structure (`[`, `]`)
- TypeScript syntax

### **Adding New Items:**
To add new FAQ, service, or testimonial:
```typescript
// Add to existing array
{
  question: "New question?",
  answer: "New answer text"
}
```

---

## 🔄 Content Updates Workflow

### **1. Locate Content File**
- Find the appropriate file in `src/content/`
- Use the file structure guide above

### **2. Make Changes**
- Edit text between quotes
- Save the file (Ctrl+S or Cmd+S)

### **3. Test Changes**
- Check the website locally
- Verify changes appear correctly
- Test on mobile and desktop

### **4. Deploy Changes**
- Commit changes to version control
- Push to main branch
- Verify on live website

---

## 🚨 Common Issues

### **Syntax Errors**
- **Missing comma:** Add `,` after each object property
- **Missing quote:** Ensure text is wrapped in `"quotes"`
- **Broken brackets:** Check for matching `{` and `}`

### **Content Not Updating**
- Clear browser cache
- Check for syntax errors
- Verify file was saved
- Check build logs for errors

### **Broken Links**
- Verify URL format: `/page-name` or `https://external-site.com`
- Check that linked pages exist
- Test links after changes

---

## 📋 Content Checklist

Before publishing content changes:

- [ ] All text is spelled correctly
- [ ] Phone numbers and emails are accurate
- [ ] All links work and go to correct pages
- [ ] No syntax errors (missing quotes, commas)
- [ ] Content displays correctly on mobile
- [ ] Images load properly
- [ ] Contact information is up to date

---

## 🔧 Advanced Content Features

### **Conditional Content**
Some content can be shown/hidden based on conditions:
```typescript
export const features = {
  enableBlog: true, // Show/hide blog section
  enableNewsletter: true, // Show/hide newsletter signup
  enableLiveChat: false // Show/hide chat widget
};
```

### **Multi-language Support**
For future internationalization:
```typescript
export const content = {
  en: {
    headline: "English headline"
  },
  es: {
    headline: "Spanish headline"
  }
};
```

### **Dynamic Content**
Content that changes based on user behavior or time:
```typescript
export const dynamicContent = {
  seasonalMessage: "Holiday special offer!", // Update seasonally
  urgencyText: "Limited time offer", // Update for campaigns
  featuredTestimonial: "testimonial-id" // Rotate featured content
};
```

---

*This structure makes content editing safe and intuitive for non-technical users while maintaining code organization and maintainability.*