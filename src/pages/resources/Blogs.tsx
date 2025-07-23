import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { blogPosts, blogCategories } from "@/content/resources/blogs";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import BreadcrumbNavigation from "@/components/SEO/BreadcrumbNavigation";
import { organizationSchema } from "@/data/structured-data";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Create structured data for blog listing
  const blogListingSchema = {
    "@type": "Blog",
    "name": "Extra Sauce Agency Blog",
    "description": "Insights, strategies, and stories from the world of content-led growth",
    "url": "https://www.extrasauceagency.com/resources/blogs",
    "publisher": {
      "@type": "Organization", 
      "name": "Extra Sauce Agency"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://www.extrasauceagency.com/resources/blogs/${post.slug}`
    }))
  };

  const breadcrumbItems = [
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/resources/blogs', current: true }
  ];

  const structuredData = [organizationSchema, blogListingSchema];

  return (
    <>
      <EnhancedSEOHead
        title="Blog | B2B Marketing Insights | Extra Sauce Agency"
        description="Read the latest insights on B2B marketing, founder-led growth strategies, and content marketing best practices from Extra Sauce Agency."
        keywords={[
          "B2B marketing blog",
          "content marketing insights",
          "founder-led marketing",
          "SaaS growth strategies",
          "thought leadership",
          "marketing best practices",
          "business growth content"
        ]}
        canonicalUrl="https://www.extrasauceagency.com/resources/blogs"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
      
      <main className="pt-20">
        <div className="container-premium py-16">
          {/* Breadcrumb Navigation */}
          <BreadcrumbNavigation items={breadcrumbItems} className="mb-8" />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, strategies, and stories from the world of content-led growth
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted-foreground/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                {post.image && (
                  <div className="h-48 bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    By {post.author}
                  </span>
                  <div className="text-sm text-primary hover:text-primary/80 cursor-pointer">
                    Read More →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      </div>
    </>
  );
};

export default Blogs;