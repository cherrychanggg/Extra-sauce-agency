# 📋 CEO Quick Reference Card
*Print this page and keep it handy for quick website updates*

---

## 🎯 SAFE ZONE - Files You Can Edit
```
✅ src/content/homepage.ts           (Homepage text)
✅ src/content/navigation.ts         (Menu items) 
✅ src/content/footer.ts             (Contact info)
✅ src/content/booking-page.ts       (Contact page)
✅ src/content/success-stories.ts    (Testimonials)
✅ src/content/services/             (All service descriptions)
✅ src/content/resources/            (Blog posts)
✅ src/content/global/               (Company info)
```

## 🚫 DANGER ZONE - Don't Touch These
```
❌ src/components/    (Technical code)
❌ src/lib/          (Programming files)  
❌ src/hooks/        (Complex code)
❌ package.json      (Dependencies)
❌ Any .tsx/.js/.css files (except content)
```

---

## ⚡ Quick Edits Cheat Sheet

### **Change Homepage Headline**
1. Open `src/content/homepage.ts`
2. Find: `headline: "Current text"`
3. Change text between quotes
4. Save file

### **Add New Service**
1. Copy existing service file in `src/content/services/`
2. Rename to `new-service-name.ts`
3. Edit the content inside
4. Add to menu in `navigation.ts`

### **Update Phone/Email**
1. Edit `src/content/footer.ts`
2. Edit `src/content/global/site-config.ts`
3. Change text between quotes
4. Save both files

### **Add Blog Post**
1. Create new file: `src/content/resources/blogs/blog-title.ts`
2. Copy template from existing blog
3. Change title, content, date
4. Save file

### **Add Customer Testimonial**
1. Open `src/content/success-stories.ts`
2. Find existing testimonials
3. Copy format and add new one
4. Add customer photo to `public/` folder

---

## 🎨 Content Writing Tips

### **Headlines That Work**
```
❌ "Our Services"
✅ "Proven B2B SaaS Marketing That Drives Growth" 

❌ "About Us"  
✅ "Toronto's Leading Founder-Led Marketing Agency"
```

### **Descriptions That Convert**
```
❌ "We help companies grow"
✅ "We help B2B SaaS founders generate 3x more qualified leads in 90 days through authentic content marketing"
```

### **Local SEO Keywords to Include**
- "Toronto B2B marketing"
- "Canadian SaaS agency"  
- "Ontario content marketing"
- "B2B marketing agency Toronto"

---

## 🆘 Emergency Fixes

### **If Website Looks Broken**
1. **Check your last edit** - likely a missing quote or comma
2. **Undo the change** - revert to previous version
3. **Look for syntax errors** - missing `"` or `,`
4. **Contact technical support** if issue persists

### **Common Syntax Issues**
```
❌ headline: "Missing quote at end,
✅ headline: "Proper quote at end",

❌ "Missing comma after quote"
✅ "Proper comma after quote",
```

---


### **Content Questions**
- Review this guide first
- Check existing examples in content files
- Focus on customer value and clear messaging

### **Technical Issues**  
- Website not loading properly
- Files won't save or open
- Structural changes needed

### **SEO Questions**
- Keyword optimization
- Search ranking improvements  
- Analytics and performance

---

**Keep this reference handy and remember: The content system is designed for business users. Focus on creating value for your customers, and the technical aspects will take care of themselves! 🚀**
