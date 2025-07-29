// BLOG POST TEMPLATE
// Copy this template to create new blog posts
// 1. Copy this file and rename it to your-blog-post-slug.ts
// 2. Update all the fields below with your content
// 3. Add the import and export to src/content/resources/blogs.ts
// 4. The blog post will automatically appear on the blog page

export const templateBlogPost = {
  id: "UNIQUE_ID", // Use a unique number or string
  title: "Your Blog Post Title Here",
  excerpt: "A brief description of your blog post that appears on the blog listing page. Keep it under 160 characters for best SEO.",
  content: `
    <div class="prose prose-lg max-w-none">
      <h2>Your Main Heading</h2>
      
      <p>Your introduction paragraph. Explain what this blog post is about and why it's valuable to your readers.</p>
      
      <h3>Subheading 1</h3>
      
      <p>Your content here. You can use HTML tags for formatting:</p>
      
      <ul>
        <li><strong>Bold text</strong> for emphasis</li>
        <li><em>Italic text</em> for subtle emphasis</li>
        <li>Regular list items</li>
      </ul>
      
      <h3>Subheading 2</h3>
      
      <p>More content. You can also use ordered lists:</p>
      
      <ol>
        <li>First step or point</li>
        <li>Second step or point</li>
        <li>Third step or point</li>
      </ol>
      
      <h3>Key Takeaways</h3>
      
      <p>Summarize the main points and provide a clear conclusion that reinforces the value of your content.</p>
      
      <p>End with a call-to-action or next steps for your readers.</p>
    </div>
  `,
  author: "Author Name", // Can be "The Sauce Team" or individual author
  date: "YYYY-MM-DD", // Use YYYY-MM-DD format
  category: "Category Name", // Must match one from blogCategories in blogs.ts
  tags: ["tag1", "tag2", "tag3"], // Array of relevant tags
  image: "IMAGE_URL", // Use high-quality images from Unsplash or upload your own
  slug: "your-blog-post-slug", // URL-friendly version of your title (lowercase, hyphens instead of spaces)
  featured: false, // Set to true if this should be featured prominently
  readTime: "X min read" // Estimate reading time
};