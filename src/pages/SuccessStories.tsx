import React, { useState } from "react";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { successStories, SuccessStory } from "@/content/success-stories";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";

const SuccessStories: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"B2B" | "B2C">("B2B");

  const openModal = (idx: number) => setOpenIndex(idx);
  const closeModal = () => setOpenIndex(null);
  const nextStory = () => setOpenIndex((prev) => (prev !== null ? (prev + 1) % successStories.length : null));
  const prevStory = () => setOpenIndex((prev) => (prev !== null ? (prev - 1 + successStories.length) % successStories.length : null));

  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore-section');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
        <div className="container-premium text-center relative z-10">
          <h1 className="text-5xl lg:text-8xl font-bold leading-tight mb-8 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            You're<br />
            in great<br />
            company
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Extra Sauce is trusted by more than 50+ of the world's leading B2B brands. 
            Read their stories to discover how teams like yours are revolutionizing 
            how they build demand for the web.
          </p>
          
          <Button 
            onClick={scrollToExplore}
            size="lg" 
            className="rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            View all stories
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Floating success metrics */}
        <div className="absolute top-1/4 left-8 lg:left-16 bg-card/80 backdrop-blur-md rounded-2xl p-6 border border-border/30 animate-fade-in shadow-lg">
          <div className="text-3xl font-bold text-primary">16M+</div>
          <div className="text-sm text-muted-foreground">Total Views Generated</div>
        </div>
        
        <div className="absolute top-1/3 right-8 lg:right-16 bg-card/80 backdrop-blur-md rounded-2xl p-6 border border-border/30 animate-fade-in shadow-lg" style={{ animationDelay: '300ms' }}>
          <div className="text-3xl font-bold text-primary">$428K</div>
          <div className="text-sm text-muted-foreground">ARR Added</div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4 bg-card/80 backdrop-blur-md rounded-2xl p-6 border border-border/30 animate-fade-in shadow-lg" style={{ animationDelay: '600ms' }}>
          <div className="text-3xl font-bold text-primary">500K+</div>
          <div className="text-sm text-muted-foreground">Followers Gained</div>
        </div>
      </section>

      {/* Explore Success Stories Section */}
      <section id="explore-section" className="section-padding bg-background">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Explore<br />
              success stories
            </h2>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-muted rounded-full p-1">
                <button
                  onClick={() => setActiveTab("B2B")}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === "B2B" 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  B2B
                </button>
                <button
                  onClick={() => setActiveTab("B2C")}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === "B2C" 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  B2C
                </button>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Learn how {activeTab === "B2B" ? "businesses" : "brands"} are using Extra Sauce to build high-quality client 
              work, faster — without growing their budget.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={story.id}
                className="group bg-card rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-2"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-muted">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">ES</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Read story</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6" style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {story.detailed.slice(0, 150)}...
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">{story.author}</span>
                      <span className="text-muted-foreground">{story.authorRole}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => openModal(idx)}
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Read story
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Modal/Lightbox */}
      {openIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in">
          <div className="relative bg-background rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
            {/* Image */}
            <div className="md:w-1/2 bg-black flex items-center justify-center p-6">
              <div className="w-full aspect-[16/9] md:h-[32rem] h-56 max-w-full flex items-center justify-center overflow-hidden rounded-xl bg-black">
                <img
                  src={successStories[openIndex].image}
                  alt={successStories[openIndex].title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
            {/* Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  {successStories[openIndex].title}
                </h2>
                <div className="mb-4 text-muted-foreground">
                  <span className="font-semibold text-primary">{successStories[openIndex].author}</span>
                  {successStories[openIndex].authorRole && (
                    <span className="ml-2 text-sm">({successStories[openIndex].authorRole})</span>
                  )}
                </div>
                <p className="text-lg text-foreground mb-6 whitespace-pre-line">
                  {successStories[openIndex].detailed}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <Button variant="ghost" onClick={prevStory}>&larr; Prev</Button>
                <Button variant="outline" onClick={closeModal}>Close</Button>
                <Button variant="ghost" onClick={nextStory}>Next &rarr;</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SuccessStories; 