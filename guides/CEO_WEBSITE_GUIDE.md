# 👔 CEO Guide to Website Management
*A Non-Technical Guide to Managing Your Extra Sauce Agency Website*

---

## 🎯 Executive Summary

Your website is built like a modern content management system where **all business content is separated from technical code**. This means you can update text, add services, create blog posts, and manage content **without touching any complex programming**.

Think of it like **editing a Word document** - you can change the content while the formatting and structure stay intact.

---

## 🏗️ How Your Website is Organized

### **The Simple Structure**
```
📁 Your Website Folder
├── 📝 Content Files (SAFE TO EDIT) ← You work here
├── 🎨 Design Files (Technical)
├── ⚙️ Code Files (Technical)  
└── 📄 Documentation (This guide!)
```

### **What You Need to Know**
- **Green Zone**: `src/content/` folder - Safe for you to edit
- **Red Zone**: Everything else - Technical files (don't edit)

---

## 📝 Content Management - Your Daily Tasks

### **📁 The Content Folder - Your Workspace**
*Location: `src/content/`*

This is **your office** within the website. Everything here is written in plain English and safe to edit.

```
📂 src/content/
├── 📄 homepage.ts          ← Homepage text and sections
├── 🧭 navigation.ts        ← Menu items and links  
├── 👥 footer.ts            ← Contact info and social links
├── 📞 booking-page.ts      ← Contact/booking page content
├── 🏆 success-stories.ts   ← Customer testimonials
├── 📂 services/            ← All service descriptions
├── 📂 resources/           ← Blog posts (ready to use)
└── 📂 global/              ← Company info and settings
```

### **💡 Think of Each File Like:**
- **homepage.ts** = Your homepage brochure
- **navigation.ts** = Your website menu
- **services/executive-ghostwriting.ts** = A service brochure
- **success-stories.ts** = Your testimonial collection

---

## 🔧 Common Business Tasks (Step-by-Step)

### **1. 📝 Update Homepage Text**
**File to Edit**: `src/content/homepage.ts`

**What You'll See:**
```typescript
export const heroSection = {
  headline: "Unleash Growth with Founder-Led Marketing for B2B SaaS",
  subheadline: "Build authentic connections, enhance credibility...",
  description: "Transform your approach to digital marketing..."
};
```

**How to Edit:**
1. Find the text between the quotes `"like this"`
2. Change the text, keep the quotes
3. Save the file

**Example Change:**
```typescript
// BEFORE
headline: "Unleash Growth with Founder-Led Marketing for B2B SaaS",

// AFTER  
headline: "Scale Your B2B SaaS with Authentic Founder-Led Marketing",
```

### **2. 🔧 Add a New Service**
**Location**: `src/content/services/`

**Step 1**: Copy an existing service file
- Right-click on `executive-ghostwriting.ts`
- Select "Copy"
- Paste in the same folder
- Rename to `your-new-service.ts`

**Step 2**: Edit the content
```typescript
export const yourNewService = {
  title: "Your New Service Name",
  description: "What this service does for customers",
  headline: "Main headline for the service page",
  
  features: [
    "Feature 1 that customers get",
    "Feature 2 that customers get",
    "Feature 3 that customers get"
  ],
  
  benefits: [
    "Benefit 1 for customers",
    "Benefit 2 for customers"
  ]
};
```

**Step 3**: Add to navigation (if needed)
Edit `src/content/navigation.ts` to add menu link.

### **3. ✍️ Create a Blog Post**
**Location**: `src/content/resources/blogs/`

**Step 1**: Create new file
- Name it: `your-blog-title.ts`

**Step 2**: Add content
```typescript
export const blogPost = {
  title: "Your Blog Post Title",
  description: "Short summary of the post",
  author: "Your Name",
  publishedDate: "2025-07-24",
  category: "Content Marketing", // or "Founder-Led Marketing", "Business Growth"
  tags: ["B2B", "SaaS", "marketing"],
  
  content: `
  # Your Blog Post Title
  
  Your blog post content goes here. You can write in plain text or use simple formatting:
  
  ## Section Headings
  - Bullet points
  - More bullet points
  
  **Bold text** and *italic text* work too.
  `
};
```

### **4. 📞 Update Contact Information**
**Files to Edit**: 
- `src/content/footer.ts` (footer contact info)
- `src/content/global/site-config.ts` (main business info)

**Example Update:**
```typescript
// In footer.ts
export const footerContent = {
  contact: {
    phone: "+1-647-957-9757",    ← Change phone number
    email: "manny@getextrasauce.com",  ← Change email
    address: "Toronto, ON, Canada"     ← Change address
  }
};
```

### **5. 🏆 Add Customer Testimonials**
**File to Edit**: `src/content/success-stories.ts`

**Add New Testimonial:**
```typescript
// Find the existing testimonials and add a new one
{
  id: "new-customer-2025",
  title: "Customer Success Story Title",
  quote: "Amazing results we achieved with Extra Sauce...",
  author: "Customer Name",
  title: "Customer Job Title", 
  company: "Customer Company",
  image: "/customer-photo.png", // Add photo to public folder
  results: [
    "Specific result 1",
    "Specific result 2"
  ]
}
```

### **6. 🏢 Add/Remove Client Logos (Trusted By Section)**
**File to Edit**: `src/content/homepage.ts`

**Step 1**: Add logo image to `public/` folder
- Name it something simple like: `new-client-logo.png`
- Keep it under 100KB for fast loading

**Step 2**: Add to trusted by section
```typescript
// Find trustedBySection and add to companies array:
{
  name: "New Client Name",
  logo: "/new-client-logo.png",
},
```

**Step 3**: To remove a logo
- Simply delete the entire logo block (from `{` to `},`)

**📝 Example of full entry:**
```typescript
export const trustedBySection = {
  title: "Trusted by",
  companies: [
    {
      name: "Your New Client",
      logo: "/your-new-client-logo.png",
    },
    // ... other companies
  ]
};
```

### **7. 📄 Update Service Pages**
}
```

---

## 🎨 Visual Elements Management

### **📸 Images and Photos**
**Location**: `public/` folder

**How to Add New Images:**
1. Put image files directly in the `public/` folder
2. Use simple names like: `new-customer.png`, `team-photo.jpg`
3. Reference in content files like: `"/new-customer.png"`

**Common Image Updates:**
- Team photos
- Customer logos  
- Service illustrations
- Blog post images

### **🎨 Company Branding**
**Key Image Files:**
- `public/sauce.png` - Main logo
- `public/chili.png` - Icon/favicon
- Replace these files with same names to update branding

---

## 📋 Content Guidelines for Business Success

### **✍️ Writing Effective Content**

#### **Headlines and Titles**
```typescript
// ❌ Weak
headline: "Our Services"

// ✅ Strong
headline: "Proven B2B SaaS Marketing Services That Drive Growth"
```

#### **Descriptions**
```typescript
// ❌ Vague  
description: "We help companies grow"

// ✅ Specific
description: "We help B2B SaaS founders build authority through content and generate 3x more qualified leads in 90 days"
```

#### **Customer Benefits** 
Focus on outcomes, not features:
```typescript
benefits: [
  "Generate 50% more qualified leads",        // ✅ Outcome
  "Build thought leadership in your industry", // ✅ Outcome  
  "Save 10 hours per week on content creation" // ✅ Outcome
]
```

### **🎯 SEO-Friendly Content Tips**

#### **Include Location Keywords**
```typescript
// Add Toronto/Canada references
description: "Toronto-based B2B SaaS marketing agency helping Canadian startups..."
```

#### **Use Customer Language**
```typescript
// Use terms your customers actually search for
"founder-led marketing"
"B2B SaaS growth"  
"executive ghostwriting"
"video content marketing"
```

#### **Answer Customer Questions**
```typescript
faqs: [
  {
    question: "How long until we see results?", // Real customer question
    answer: "Most clients see initial engagement within 2-4 weeks..."
  }
]
```

---

## 🔄 Website Update Workflow

### **Daily Content Tasks** (5-10 minutes)
1. **Check customer feedback** - Add to testimonials
2. **Update service descriptions** - Keep current with offerings  
3. **Add FAQ answers** - Based on customer questions
4. **Update contact info** - If anything changes

### **Weekly Content Tasks** (30 minutes)
1. **Write one blog post** - Share industry insights
2. **Update success stories** - Add new customer results
3. **Review homepage content** - Keep messaging current
4. **Check navigation** - Ensure all services listed

### **Monthly Business Reviews** (1 hour)
1. **Review all service descriptions** - Update features/pricing
2. **Update company information** - Team changes, new locations
3. **Refresh customer testimonials** - Rotate featured stories
4. **Plan new content** - Blog topics, service additions

---

## 🚨 Safety Guidelines - What NOT to Touch

### **🚫 Files to Avoid** (Technical Code)
- `src/components/` - Website functionality
- `src/lib/` - Technical utilities  
- `src/hooks/` - Programming logic
- `package.json` - Technical dependencies
- Any file ending in `.tsx`, `.js`, `.css` (except content files)

### **⚠️ Editing Safety Rules**
1. **Only edit files in `src/content/`**
2. **Keep all quotes and commas** when editing
3. **Don't delete structural elements** (like `export const`)
4. **Test after major changes**
5. **Keep backups** of important content

### **🔧 If Something Breaks**
1. **Don't panic** - content changes rarely break websites
2. **Undo your last change** - Most issues come from typos
3. **Check for missing quotes** - Common cause of issues
4. **Ask for technical help** if needed

---

## 📊 Understanding Website Performance

### **Key Business Metrics to Track**
1. **Website Visitors** - More people finding you
2. **Contact Form Submissions** - Potential customers  
3. **Service Page Views** - Interest in your offerings
4. **Blog Readership** - Thought leadership impact
5. **Customer Testimonial Engagement** - Social proof effectiveness

### **Content Performance Indicators**
- **Popular pages** = Good content that works
- **High bounce rate** = Content needs improvement  
- **Long time on page** = Engaging content
- **Contact form completions** = Effective calls-to-action

---

## 🆘 Quick Reference - Common Edits

### **Change Homepage Headline**
**File**: `src/content/homepage.ts`
**Find**: `headline: "Current headline text"`  
**Change**: The text between quotes

### **Add New Team Member**
**File**: `src/content/global/site-config.ts`
**Add**: New team member details in team section

### **Update Phone Number**  
**Files**: `src/content/footer.ts` AND `src/content/global/site-config.ts`
**Find**: Current phone number
**Replace**: With new number (keep quote format)

### **Add New Service to Menu**
**File**: `src/content/navigation.ts`
**Find**: Services menu section
**Add**: New service link

### **Change Contact Email**
**Files**: `src/content/footer.ts` AND `src/content/global/site-config.ts`  
**Find**: Current email address
**Replace**: With new email (keep quotes)

---

## 🎉 You're Ready!

### **Remember:**
- **Content files are safe to edit** - they're designed for business users
- **Focus on customer value** - write content that helps your audience
- **Regular updates help SEO** - search engines love fresh, relevant content
- **Your website structure is business-friendly** - no technical knowledge required

### **When in Doubt:**
1. **Start small** - make minor edits first to get comfortable
2. **Copy before changing** - backup important content
3. **Ask questions** - technical team is there to help
4. **Focus on value** - good content serves customers first

**Your website is designed to grow with your business. The content management system puts you in control while keeping the technical complexity hidden. Happy content creating! 🚀**
