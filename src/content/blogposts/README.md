# Blog Posts Folder

This folder contains individual blog post files. Each blog post is stored as a separate TypeScript file for easy management by non-technical team members.

## How to Add a New Blog Post

1. **Copy the template**: Start by copying `_template.ts` and renaming it to match your blog post slug (e.g., `my-new-blog-post.ts`)

2. **Update the content**: Fill in all the required fields:
   - `id`: Use a unique identifier
   - `title`: Your blog post title
   - `excerpt`: Brief description (under 160 characters for SEO)
   - `content`: Full blog post content in HTML format
   - `author`: Author name
   - `date`: Publication date in YYYY-MM-DD format
   - `category`: Must match one of the categories in `../resources/blogs.ts`
   - `tags`: Array of relevant tags
   - `image`: Featured image URL
   - `slug`: URL-friendly version of your title
   - `readTime`: Estimated reading time

3. **Add to the main blog list**: 
   - Import your blog post in `../resources/blogs.ts`
   - Add it to the `blogPosts` array

4. **Content formatting**: Use HTML tags within the content field:
   - `<h2>` and `<h3>` for headings
   - `<p>` for paragraphs
   - `<ul>` and `<li>` for bullet lists
   - `<ol>` and `<li>` for numbered lists
   - `<strong>` for bold text
   - `<em>` for italic text

## Available Categories

Make sure your blog post category matches one of these exactly:
- Strategy
- Leadership
- Video Marketing
- Case Studies
- Industry Insights

## Image Guidelines

- Use high-quality images (recommended size: 800x600px)
- You can use Unsplash URLs or upload your own images
- Images should be relevant to your blog post content

## Example Workflow

1. Copy `_template.ts` → `founder-led-marketing-tips.ts`
2. Update all fields with your content
3. Add import to `../resources/blogs.ts`: 
   ```ts
   import { founderBlogPost } from "../blogposts/founder-led-marketing-tips";
   ```
4. Add to blogPosts array:
   ```ts
   export const blogPosts: BlogPost[] = [
     founderBlogPost,
     // ... other posts
   ];
   ```

Your blog post will automatically appear on the website!
