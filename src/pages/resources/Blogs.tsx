
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useContentLoader } from "@/hooks/useContentLoader";

const Blogs = () => {
  const { content, loading, error } = useContentLoader('/content/pages/resources/blogs.json');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading blog content...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-premium py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Content Loading Error</h1>
            <p className="text-muted-foreground mb-8">Unable to load blog content. Please try again later.</p>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { heroSection, categories, posts, newsletter } = content;
  
  // Filter posts based on category and search
  const filteredPosts = posts?.filter((post: any) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  const featuredPost = posts?.find((post: any) => post.featured) || posts?.[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-subtle">
        <div className="container-premium text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            {heroSection?.headline || "Blog"}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroSection?.description || "Insights and strategies for modern B2B growth."}
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding">
          <div className="container-premium">
            <div className="mb-12">
              <Badge variant="secondary" className="mb-4">Featured Post</Badge>
              <div className="card-premium overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8 lg:p-12">
                    <Badge className="mb-4">{featuredPost.category}</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button className="group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="bg-muted/30 flex items-center justify-center min-h-[300px]">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-4"></div>
                      Featured Image
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1">
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-md"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories?.map((category: string) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post: any) => (
              <div key={post.id} className="card-premium group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <Badge className="mb-4">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-4">No articles found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your search terms or selected category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      {newsletter && (
        <section className="section-padding bg-gradient-subtle">
          <div className="container-premium">
            <div className="card-premium p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">{newsletter.title}</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                {newsletter.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder={newsletter.placeholder} className="flex-1" />
                <Button>{newsletter.buttonText}</Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Blogs;
