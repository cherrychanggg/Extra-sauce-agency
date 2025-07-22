# 📝 Content Editing Guide for Extra Sauce Website

## 🎯 Quick Start for Content Editors

This guide helps you edit website content without touching code. All content is organized in easy-to-find files.

---

## 📁 Where to Find Content

### 🏠 **Homepage Content**
**File:** `src/content/homepage.ts`
- Hero section text and buttons
- Services overview
- FAQ questions and answers
- Call-to-action sections

### 🧭 **Navigation Menu**
**File:** `src/content/navigation.ts`
- Menu items and links
- Dropdown menu options
- CTA button text

### 🦶 **Footer Content**
**File:** `src/content/footer.ts`
- Company information
- Contact details
- Social media links
- Quick links

### 📄 **Service Pages**
**Files:** `src/content/services/`
- `executive-ghostwriting.ts` - Executive Ghostwriting page
- `video-content-engine.ts` - Video Content Engine page
- `content-led-gtm-coaching.ts` - GTM Coaching page

### 📞 **Booking Page**
**File:** `src/content/booking-page.ts`
- Strategy call information
- Benefits list
- Testimonials

### 🏆 **Success Stories**
**File:** `src/content/success-stories.ts`
- Case studies and testimonials
- Client results and quotes

---

## ✏️ How to Edit Content

### 1. **Text Changes**
```typescript
// Example: Changing homepage headline
export const heroSection = {
  headline: "Your New Headline Here", // ← Edit this text
  subheadline: "Your new description...", // ← Edit this text
}
```

### 2. **Button Text**
```typescript
// Example: Changing button text
export const ctaButton = {
  text: "New Button Text", // ← Edit this
  link: "/your-link" // ← Change destination
}
```

### 3. **Adding FAQ Items**
```typescript
// Add new FAQ to the questions array
{
  question: "Your new question?",
  answer: "Your detailed answer here..."
}
```

### 4. **Updating Contact Information**
```typescript
// In footer.ts
export const contact = {
  phone: "+1 (555) 123-4567", // ← Update phone
  email: "new@email.com" // ← Update email
}
```

---

## 🚨 Important Rules

### ✅ **Safe to Edit:**
- Text between quotes: `"Edit this text"`
- Numbers and phone numbers
- Email addresses
- URLs and links
- Image file names (if images exist)

### ❌ **Don't Touch:**
- Code structure: `export const`, `{`, `}`
- Variable names: `heroSection`, `ctaButton`
- Commas and semicolons
- File extensions: `.ts`, `.tsx`

---

## 🔄 After Making Changes

1. **Save the file** (Ctrl+S or Cmd+S)
2. **Check the website** - changes appear automatically
3. **If something breaks** - undo your changes (Ctrl+Z)

---

### Common Issues:
- **Missing comma:** Add `,` after each line except the last
- **Missing quote:** Make sure text is wrapped in `"quotes"`
- **Broken layout:** Check for missing `{` or `}`

### Emergency Reset:
If you break something, you can always revert to the previous version using your version control system.

---

## 📋 Content Checklist

Before publishing changes:
- [ ] All text is spelled correctly
- [ ] Phone numbers and emails are accurate
- [ ] Links work and go to correct pages
- [ ] No broken quotes or missing commas
- [ ] Website displays correctly on desktop and mobile

---
