import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { companyNews, newsCategories } from "@/content/resources/companynews";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const CompanyNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = selectedCategory === "All" 
    ? companyNews 
    : companyNews.filter(item => item.category === selectedCategory);

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Company Update":
        return "bg-primary/10 text-primary";
      case "Partnership":
        return "bg-secondary/10 text-secondary";
      case "Team Growth":
        return "bg-accent/10 text-accent-foreground";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container-premium py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Company <span className="text-primary">News</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest announcements, milestones, and company updates
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {newsCategories.map((category) => (
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
          
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyles(item.category)}`}>
                    {item.category}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {item.excerpt}
                </p>
                {item.author && (
                  <div className="text-sm text-muted-foreground">
                    By {item.author}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyNews;