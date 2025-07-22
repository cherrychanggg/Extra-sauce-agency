
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Megaphone } from "lucide-react";
import { useContentLoader } from "@/hooks/useContentLoader";

const CompanyNews = () => {
  const { content, loading, error } = useContentLoader('/content/pages/resources/company-news.json');
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading company news...</p>
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
            <p className="text-muted-foreground mb-8">Unable to load company news. Please try again later.</p>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { heroSection, categories, news, newsletter } = content;
  
  // Filter news based on category
  const filteredNews = news?.filter((item: any) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  }) || [];

  const featuredNews = news?.find((item: any) => item.featured) || news?.[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-subtle">
        <div className="container-premium text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Megaphone className="w-8 h-8 text-primary" />
            <Badge variant="secondary">Company Updates</Badge>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            {heroSection?.headline || "Company News"}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroSection?.description || "Stay updated with our latest announcements and milestones."}
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="section-padding">
          <div className="container-premium">
            <div className="mb-12">
              <Badge variant="secondary" className="mb-4">Featured Announcement</Badge>
              <div className="card-premium overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8 lg:p-12">
                    <Badge className="mb-4">{featuredNews.category}</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      {featuredNews.title}
                    </h2>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredNews.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredNews.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Button className="group">
                      Read Full Announcement
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

      {/* Category Filters */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
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

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredNews.map((item: any) => (
              <div key={item.id} className="card-premium group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <Badge className="mb-4">{item.category}</Badge>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {item.author}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="group w-full">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-4">No news found</h3>
              <p className="text-muted-foreground mb-8">
                Try selecting a different category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory("All")}
              >
                View All News
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

export default CompanyNews;
