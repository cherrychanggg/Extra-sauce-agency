import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "@/content/resources/blogs";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import BreadcrumbNavigation from "@/components/SEO/BreadcrumbNavigation";
import { organizationSchema } from "@/data/structured-data";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    navigate("/resources/blogs");
    return null;
  }

  const breadcrumbItems = [
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/resources/blogs' },
    { name: post.title, href: `/resources/blogs/${post.slug}`, current: true }
  ];

  const blogPostSchema = {
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Extra Sauce Agency"
    },
    "url": `https://www.extrasauceagency.com/resources/blogs/${post.slug}`,
    "image": post.image,
    "articleSection": post.category,
    "keywords": post.tags.join(", ")
  };

  const structuredData = [organizationSchema, blogPostSchema];

  return (
    <>
      <EnhancedSEOHead
        title={`${post.title} | Extra Sauce Agency Blog`}
        description={post.excerpt}
        keywords={post.tags}
        canonicalUrl={`https://www.extrasauceagency.com/resources/blogs/${post.slug}`}
        structuredData={structuredData}
        ogImage={post.image}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section with dark overlay */}
          <div className="relative bg-gradient-to-br from-background to-muted border-b">
            <div className="container-premium py-16">
              <BreadcrumbNavigation items={breadcrumbItems} className="mb-8" />
              
              <Button
                variant="ghost"
                onClick={() => navigate("/resources/blogs")}
                className="mb-8 hover:bg-muted/50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
              
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="secondary" className="text-sm">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    {post.readTime && (
                      <span>{post.readTime}</span>
                    )}
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          {post.image && (
            <div className="container-premium py-8">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-muted">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Blog Content */}
          <div className="container-premium pb-16">
            <div className="max-w-4xl mx-auto">
              <article 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Navigation */}
              <div className="mt-12 pt-8 border-t">
                <Button
                  variant="outline"
                  onClick={() => navigate("/resources/blogs")}
                  className="w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Posts
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;