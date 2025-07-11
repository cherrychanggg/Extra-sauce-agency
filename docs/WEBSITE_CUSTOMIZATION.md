# 🎨 Website Customization Guide for Business Owners

## 🎯 Overview

This guide helps business owners understand how to customize their Extra Sauce website without technical knowledge.

---

## 🏗️ Website Structure

### 📄 **Main Pages**
1. **Homepage** (`/`) - Main landing page
2. **The Sauce Recipe** (`/the-sauce-recipe`) - Process explanation
3. **Services** (`/services`) - Service overview
4. **Individual Service Pages** - Detailed service information
5. **Success Stories** (`/success-stories`) - Case studies
6. **Booking Page** (`/book-strategy-call`) - Contact form
7. **Resources** - Blog, newsletters, company news

### 🧩 **Page Components**
Each page is built from reusable sections:
- **Hero Section** - Main headline and call-to-action
- **Features Section** - Benefits and features
- **Testimonials** - Client reviews
- **FAQ Section** - Common questions
- **CTA Section** - Call-to-action

---

## 🎨 Customization Options

### 1. **Colors & Branding**
**File:** `src/index.css` (Lines 8-50)

```css
/* Primary brand color (orange/red) */
--primary: 14 85% 55%;

/* Secondary color (warm orange) */
--secondary: 25 95% 60%;

/* Accent color (deep sauce) */
--accent: 8 75% 45%;
```

**How to Change:**
- Use a color picker tool to get HSL values
- Replace the numbers while keeping the format

### 2. **Logo & Images**
**Location:** `public/` folder
- `chili.png` - Chili pepper logo
- `sauce.png` - Extra Sauce text logo
- Company logos in root of public folder

**To Update:**
1. Replace image files with same names
2. Keep same dimensions for best results
3. Use PNG format for logos with transparency

### 3. **Fonts**
**Current Font:** Inter (Google Fonts)
**File:** `index.html` (Line 15)

To change fonts:
1. Find new font on Google Fonts
2. Replace the font link in `index.html`
3. Update CSS font family in `src/index.css`

---

## 📝 Content Management

### **Quick Content Updates**
Most content can be updated in these files:

| Content Type | File Location | What You Can Change |
|--------------|---------------|-------------------|
| Homepage text | `src/content/homepage.ts` | Headlines, descriptions, buttons |
| Navigation menu | `src/content/navigation.ts` | Menu items, links |
| Footer info | `src/content/footer.ts` | Contact info, social links |
| Service details | `src/content/services/` | Service descriptions, features |
| Success stories | `src/content/success-stories.ts` | Case studies, testimonials |

### **Adding New Content**

#### **New FAQ Item:**
```typescript
// Add to src/content/homepage.ts
{
  question: "Your new question?",
  answer: "Your detailed answer here."
}
```

#### **New Testimonial:**
```typescript
// Add to src/content/success-stories.ts
{
  id: "unique-id",
  title: "Client Success Story",
  quote: "Amazing results quote...",
  author: "Client Name",
  company: "Company Name"
}
```

#### **New Service Feature:**
```typescript
// Add to service content files
"New feature description"
```

---

## 🖼️ Image Management

### **Image Guidelines**
- **Format:** PNG for logos, JPG for photos
- **Size:** Optimize for web (under 500KB)
- **Dimensions:** 
  - Logos: 200x200px recommended
  - Hero images: 1200x600px
  - Testimonial photos: 400x400px

### **Adding New Images**
1. Add image to `public/` folder
2. Reference in content files: `"/your-image.png"`
3. Update alt text for accessibility

---

## 📱 Mobile Responsiveness

The website automatically adapts to mobile devices. Test on:
- Desktop (1200px+)
- Tablet (768px-1199px)  
- Mobile (320px-767px)

---

## 🔧 Common Customizations

### **Change Contact Information**
**File:** `src/content/footer.ts`
```typescript
export const contact = {
  phone: "+1 (647) 957 9757", // ← Update this
  email: "manny@getextrasauce.com" // ← Update this
}
```

### **Update Social Media Links**
**File:** `src/content/footer.ts`
```typescript
export const socialMedia = {
  linkedin: "https://linkedin.com/company/your-company",
  instagram: "https://instagram.com/your-handle"
}
```

### **Modify Call-to-Action Buttons**
**File:** `src/content/homepage.ts`
```typescript
export const heroSection = {
  primaryButton: "Your New Button Text",
  secondaryButton: "Another Button Text"
}
```

---

## 🚀 Publishing Changes

### **Development Environment**
1. Make changes to content files
2. Save files
3. Check localhost preview
4. Test on mobile and desktop

### **Production Deployment**
1. Commit changes to version control
2. Deploy to hosting platform
3. Test live website
4. Monitor for any issues

---

### **Contact Form Tracking**
Monitor form submissions through:
- Email notifications
- Analytics events
- CRM integration

---

## 🆘 Troubleshooting

### **Common Issues**

| Problem | Solution |
|---------|----------|
| Text not updating | Check for syntax errors (missing quotes/commas) |
| Images not showing | Verify file path and name spelling |
| Layout broken | Undo recent changes, check for missing brackets |
| Mobile issues | Test responsive design, check image sizes |

## 📋 Maintenance Checklist

### **Monthly Tasks**
- [ ] Update contact information if changed
- [ ] Review and update testimonials
- [ ] Check all links work correctly
- [ ] Update success stories with new results
- [ ] Review FAQ for new common questions

### **Quarterly Tasks**
- [ ] Update service descriptions
- [ ] Refresh hero section messaging
- [ ] Review and optimize images
- [ ] Update team photos if needed
- [ ] Check mobile responsiveness

---