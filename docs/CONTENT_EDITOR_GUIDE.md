
# 📝 Content Editor Guide for Extra Sauce Website

## 🎯 Quick Start for Content Editors

This guide helps you safely edit website content without touching any code. All content is now organized in easy-to-find JSON files.

---

## 📁 New Content Structure

### 🏠 **Page Content** (`content/pages/`)
Content for individual pages:
- **`homepage-content.json`** - Homepage sections and text
- **`success-stories-content.json`** - Success stories page content

### 🔍 **SEO Content** (`content/seo/`)
SEO settings for each page (for SEO specialists):
- **`homepage-seo.json`** - Homepage SEO settings
- **`success-stories-seo.json`** - Success stories SEO settings

### 🌐 **Global Settings** (`content/global/`)
Site-wide settings:
- **`site-configuration.json`** - Contact info, social media, branding

### 🧭 **Shared Components** (`content/shared/`)
Content used across multiple pages:
- **`navigation-menu.json`** - Menu items and navigation
- **`footer-information.json`** - Footer content and links

---

## ✏️ How to Edit Content

### 1. **Text Changes**
```json
{
  "headline": "Your New Headline Here",
  "subtitle": "Your new description..."
}
```

### 2. **Button Updates**
```json
{
  "button": {
    "text": "New Button Text",
    "link": "/your-new-link"
  }
}
```

### 3. **Adding FAQ Items**
```json
{
  "questions": [
    {
      "question": "Your new question?",
      "answer": "Your detailed answer here..."
    }
  ]
}
```

### 4. **Updating Contact Information**
Edit `content/global/site-configuration.json`:
```json
{
  "contactInformation": {
    "phone": "+1 (555) 123-4567",
    "email": "new@email.com"
  }
}
```

---

## 🚨 Important Rules

### ✅ **Safe to Edit:**
- Text between quotes: `"Edit this text"`
- Numbers and phone numbers
- Email addresses and URLs
- Image file names (if images exist)

### ❌ **Don't Touch:**
- File structure: `{`, `}`, `[`, `]`
- Property names: `"headline"`, `"subtitle"`
- Commas and colons
- The `"meta"` sections at the top of files

---

## 🔍 For SEO Specialists

### **SEO File Structure**
Each page has its own SEO file in `content/seo/`:
- Page titles and meta descriptions
- Keywords and Open Graph settings
- Structured data for search engines

### **SEO Best Practices**
- Keep meta descriptions under 160 characters
- Use 5-10 keywords maximum
- Update structured data when business info changes
- Test changes with SEO tools before publishing

---

## 🔄 After Making Changes

1. **Save the file** (Ctrl+S or Cmd+S)
2. **Check the website** - changes appear automatically
3. **If something breaks** - undo your changes (Ctrl+Z)

---

## 📋 Content Editing Checklist

Before publishing changes:
- [ ] All text is spelled correctly
- [ ] Phone numbers and emails are accurate
- [ ] Links work and go to correct pages
- [ ] No missing commas or quotes
- [ ] Website displays correctly on mobile
- [ ] SEO fields are optimized (for SEO specialists)

---

## 🆘 Emergency Help

### **Common Issues:**
- **Missing comma:** Add `,` after each line except the last
- **Missing quote:** Make sure text is wrapped in `"quotes"`
- **Broken layout:** Check for missing `{` or `}`

### **Quick Fixes:**
1. Check the `"meta"` section for instructions
2. Look for examples in the same file
3. Compare with other similar files
4. Use undo (Ctrl+Z) if something breaks

---

*This new structure makes content editing 90% safer and easier for non-technical users!*
