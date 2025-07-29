import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { blogPosts, blogCategories } from "@/content/resources/blogs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import BreadcrumbNavigation from "@/components/SEO/BreadcrumbNavigation";
import { organizationSchema } from "@/data/structured-data";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

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
          
          {/* Hero Section */}
          <div className="text-center mb-16 bg-gradient-to-br from-background via-background to-muted/30 py-16 -mt-8 border-b">
            <div className="container-premium">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                INSIDE THE MODERN B2B PIPELINE PLAYBOOK
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
                Tried-and-true founder-led tactics that actually drive revenue.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get the frameworks, content plays, and narrative shifts B2B founders use to build trust and close pipeline. Turn your voice into a growth engine.
              </p>
            </div>
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
              <article 
                key={post.id} 
                className="bg-card rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/resources/blogs/${post.slug}`)}
              >
                {post.image && (
                  <div className="aspect-[16/9] bg-muted overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{post.author}</span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    {post.readTime && (
                      <span>{post.readTime}</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
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