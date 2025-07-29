import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "@/content/resources/blogs";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { organizationSchema } from "@/data/structured-data";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    navigate("/resources/blogs");
    return null;
  }

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
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="container max-w-4xl mx-auto px-6 py-16">
              <Button
                variant="ghost"
                onClick={() => navigate("/resources/blogs")}
                className="mb-8 text-white/70 hover:text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
              
              {/* Author info header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ES</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-white/70">
                  <span className="font-medium text-white">{post.author}</span>
                  <span>extrasauceagency@gmail.com</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="bg-white">
            <div className="container max-w-4xl mx-auto px-6 py-16">
              <article className="prose prose-lg max-w-none">
                <div 
                  className="[&>div]:space-y-6 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:text-lg [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-6 [&_ul]:space-y-3 [&_ul]:mb-6 [&_li]:text-lg [&_li]:text-slate-700 [&_li]:leading-relaxed [&_strong]:text-slate-900 [&_strong]:font-semibold [&_ol]:space-y-3 [&_ol]:mb-6"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
              
              {/* Tags Section */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm bg-slate-100 text-slate-700 hover:bg-slate-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Back Button */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <Button
                  variant="outline"
                  onClick={() => navigate("/resources/blogs")}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
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