# 🧩 Component Guide for Extra Sauce Website

## 🎯 Overview

This guide explains how the website components are organized and how they work together to create the user experience.

---

## 🏗️ Component Architecture

### **Layout Components** (`src/components/layout/`)
Core structural components that define page layout:

- **`Navigation.tsx`** - Top navigation bar with menu items
- **`Footer.tsx`** - Bottom footer with links and contact info
- **`PageLayout.tsx`** - Wrapper for consistent page structure

### **Section Components** (`src/components/sections/`)
Reusable page sections:

- **`HeroSection.tsx`** - Main page headers with headlines and CTAs
- **`ServicesSection.tsx`** - Services overview grid
- **`TestimonialsSection.tsx`** - Client testimonials carousel
- **`FAQSection.tsx`** - Frequently asked questions
- **`CTASection.tsx`** - Call-to-action sections

### **UI Components** (`src/components/ui/`)
Basic building blocks and interactive elements:

- **`Button.tsx`** - Styled buttons with variants
- **`Card.tsx`** - Content cards with consistent styling
- **`Input.tsx`** - Form input fields
- **`Modal.tsx`** - Popup dialogs and overlays

---

## 📄 Page Structure

### **Typical Page Layout:**
```
Navigation
├── Hero Section
├── Content Sections
│   ├── Features/Services
│   ├── Testimonials
│   ├── Process Steps
│   └── FAQ
├── CTA Section
└── Footer
```

### **Homepage Sections:**
1. **Hero** - Main headline and primary CTA
2. **Trusted By** - Company logos carousel
3. **Who Is This For** - Target audience grid
4. **Testimonials** - Client success stories
5. **Process** - Step-by-step methodology
6. **Services Overview** - Three main services
7. **FAQ** - Common questions
8. **CTA** - Final call-to-action

---

## 🎨 Design System

### **Color Scheme:**
- **Primary:** Orange/Red (`#FF6B35`)
- **Secondary:** Warm Orange (`#F7931E`)
- **Accent:** Deep Sauce (`#D2691E`)
- **Background:** Light neutral
- **Text:** Dark gray/black

### **Typography:**
- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, large sizes for hierarchy
- **Body Text:** Regular weight, readable sizes
- **Buttons:** Semi-bold, clear labels

### **Spacing System:**
- **Base Unit:** 8px
- **Small:** 8px, 16px
- **Medium:** 24px, 32px
- **Large:** 48px, 64px
- **Extra Large:** 80px, 96px

---

## 🔧 Component Props

### **Hero Section Props:**
```typescript
interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}
```

### **Service Card Props:**
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  icon?: React.ReactNode;
}
```

### **Testimonial Props:**
```typescript
interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  company?: string;
  avatar?: string;
}
```

---

## 📱 Responsive Design

### **Breakpoints:**
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1439px
- **Large Desktop:** 1440px+

### **Responsive Patterns:**
- **Grid Layouts:** 1 column mobile → 2-3 columns desktop
- **Navigation:** Hamburger menu mobile → horizontal desktop
- **Typography:** Smaller sizes mobile → larger desktop
- **Spacing:** Reduced mobile → full desktop

---

## 🎭 Interactive Elements

### **Hover States:**
- **Buttons:** Color change, slight scale
- **Cards:** Lift effect, shadow increase
- **Links:** Color change, underline
- **Images:** Subtle zoom or overlay

### **Animations:**
- **Page Load:** Fade in from bottom
- **Scroll Reveal:** Elements appear as user scrolls
- **Hover Transitions:** Smooth 300ms transitions
- **Loading States:** Skeleton screens and spinners

### **Form Interactions:**
- **Focus States:** Border color change, outline
- **Validation:** Real-time error messages
- **Success States:** Green checkmarks, confirmation
- **Loading States:** Disabled buttons, progress indicators

---

## 🔄 State Management

### **Component State:**
- **Form Data:** Input values, validation errors
- **UI State:** Modal open/closed, active tabs
- **Loading States:** API calls, image loading
- **User Interactions:** Hover states, selections

### **Global State:**
- **Site Configuration:** Contact info, social links
- **User Preferences:** Theme, language settings
- **Navigation State:** Current page, menu open/closed

---

## 🧪 Component Testing

### **Visual Testing:**
- **Responsive Design:** Test all breakpoints
- **Browser Compatibility:** Chrome, Firefox, Safari, Edge
- **Accessibility:** Screen readers, keyboard navigation
- **Performance:** Loading times, smooth animations

### **Functional Testing:**
- **Links:** All navigation and CTA links work
- **Forms:** Validation, submission, error handling
- **Interactive Elements:** Buttons, dropdowns, modals
- **Content Loading:** Images, text, dynamic content

---

## 🔧 Customization Guide

### **Adding New Components:**
1. Create component file in appropriate folder
2. Define props interface
3. Implement responsive design
4. Add to component exports
5. Update documentation

### **Modifying Existing Components:**
1. Locate component file
2. Update props or styling
3. Test across all breakpoints
4. Verify no breaking changes
5. Update content files if needed

### **Styling Changes:**
1. Use existing design tokens
2. Maintain responsive patterns
3. Test accessibility
4. Update style guide if needed

---

## 📚 Component Library

### **Button Variants:**
- **Primary:** Main call-to-action buttons
- **Secondary:** Supporting actions
- **Outline:** Alternative style
- **Ghost:** Minimal style
- **Link:** Text-only buttons

### **Card Types:**
- **Service Card:** Service descriptions with features
- **Testimonial Card:** Client quotes and attribution
- **Feature Card:** Product features with icons
- **Blog Card:** Article previews with images

### **Form Elements:**
- **Text Input:** Single-line text entry
- **Textarea:** Multi-line text entry
- **Select:** Dropdown selections
- **Checkbox:** Multiple selections
- **Radio:** Single selections

---

## 🚀 Performance Optimization

### **Image Optimization:**
- **Format:** WebP with fallbacks
- **Sizing:** Responsive images
- **Loading:** Lazy loading for below-fold images
- **Compression:** Optimized file sizes

### **Code Splitting:**
- **Route-based:** Separate bundles per page
- **Component-based:** Lazy load heavy components
- **Vendor:** Separate third-party libraries

### **Caching Strategy:**
- **Static Assets:** Long-term caching
- **API Responses:** Appropriate cache headers
- **Service Worker:** Offline functionality

---

*This component system provides a solid foundation for maintaining and extending the Extra Sauce website while ensuring consistency and performance.*