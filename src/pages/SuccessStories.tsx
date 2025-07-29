import React, { useState } from "react";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { successStories, SuccessStory } from "@/content/success-stories";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";

const SuccessStories: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(234,88,12,0.15),rgba(255,255,255,0))]"></div>
        
        <div className="container-premium text-center relative z-10">
          <h1 className="text-5xl lg:text-8xl font-bold leading-tight mb-8 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            What Happens<br />
            When You Find<br />
            Your Sauce
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            From creating brand demand to booking meetings, these stories show the impact of The Sauce Recipe™
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

        {/* Floating success metrics - Now responsive for smaller screens */}
        <div className="hidden sm:block absolute top-1/4 left-4 sm:left-8 lg:left-16 bg-card/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border/30 animate-fade-in shadow-lg">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">16M+</div>
          <div className="text-xs sm:text-sm text-muted-foreground">Total Views Generated</div>
        </div>
        
        <div className="hidden sm:block absolute top-1/3 right-4 sm:right-8 lg:right-16 bg-card/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border/30 animate-fade-in shadow-lg" style={{ animationDelay: '300ms' }}>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">$428K</div>
          <div className="text-xs sm:text-sm text-muted-foreground">ARR Added</div>
        </div>
        
        <div className="hidden md:block absolute bottom-1/4 left-1/4 bg-card/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border/30 animate-fade-in shadow-lg" style={{ animationDelay: '600ms' }}>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">500K+</div>
          <div className="text-xs sm:text-sm text-muted-foreground">Followers Gained</div>
        </div>

        <div className="hidden sm:block absolute top-16 left-1/2 transform -translate-x-1/2 bg-card/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border/30 animate-fade-in shadow-lg" style={{ animationDelay: '900ms' }}>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">50+</div>
          <div className="text-xs sm:text-sm text-muted-foreground">B2B Brands Served</div>
        </div>

        <div className="hidden md:block absolute bottom-1/4 right-1/4 bg-card/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border/30 animate-fade-in shadow-lg" style={{ animationDelay: '1200ms' }}>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">16+</div>
          <div className="text-xs sm:text-sm text-muted-foreground">Qualified Meetings/Month</div>
        </div>

        <div className="hidden sm:block absolute top-1/2 left-2 sm:left-4 lg:left-8 bg-card/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border/30 animate-fade-in shadow-lg" style={{ animationDelay: '1500ms' }}>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">8X</div>
          <div className="text-xs sm:text-sm text-muted-foreground">ROI Improvement</div>
        </div>

        <div className="hidden sm:block absolute bottom-16 right-4 sm:right-8 lg:right-20 bg-card/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border/30 animate-fade-in shadow-lg" style={{ animationDelay: '1800ms' }}>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">90%</div>
          <div className="text-xs sm:text-sm text-muted-foreground">Time Saved on Content</div>
        </div>

        <div className="hidden md:block absolute top-2/3 left-1/3 bg-card/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border/30 animate-fade-in shadow-lg" style={{ animationDelay: '2100ms' }}>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">$2B+</div>
          <div className="text-xs sm:text-sm text-muted-foreground">Enterprise Client Value</div>
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
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Learn how businesses are using Extra Sauce to build high-quality client 
              work, faster — without growing their budget.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={story.id}
                className="group bg-card rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(idx)}
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
                      className="hover:bg-primary hover:text-primary-foreground transition-colors pointer-events-none"
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
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 animate-fade-in p-2 sm:p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            className="relative bg-background rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col lg:flex-row overflow-hidden my-2 sm:my-4 max-h-[95vh] sm:max-h-[90vh] lg:max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="lg:w-1/2 bg-black flex items-center justify-center p-2 sm:p-4 lg:p-6">
              <div className="w-full aspect-[16/9] lg:h-[32rem] h-40 sm:h-48 md:h-56 max-w-full flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl bg-black">
                <img
                  src={successStories[openIndex].image}
                  alt={successStories[openIndex].title}
                  className="w-full h-full object-contain rounded-lg sm:rounded-xl"
                />
              </div>
            </div>
            {/* Details */}
            <div className="lg:w-1/2 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 text-foreground leading-tight">
                  {successStories[openIndex].title}
                </h2>
                <div className="mb-2 sm:mb-3 lg:mb-4 text-muted-foreground">
                  <span className="font-semibold text-primary text-xs sm:text-sm md:text-base">{successStories[openIndex].author}</span>
                  {successStories[openIndex].authorRole && (
                    <span className="ml-1 sm:ml-2 text-xs">({successStories[openIndex].authorRole})</span>
                  )}
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground mb-3 sm:mb-4 lg:mb-6 whitespace-pre-line leading-relaxed overflow-y-auto max-h-[150px] sm:max-h-[200px] md:max-h-[300px] lg:max-h-none">
                  {successStories[openIndex].detailed}
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 sm:mt-4 gap-1 sm:gap-2 flex-wrap sm:flex-nowrap">
                <Button variant="ghost" onClick={prevStory} size="sm" className="text-xs sm:text-sm px-2 sm:px-3">&larr; Prev</Button>
                <Button variant="outline" onClick={closeModal} size="sm" className="text-xs sm:text-sm px-2 sm:px-3 order-last sm:order-none">Close</Button>
                <Button variant="ghost" onClick={nextStory} size="sm" className="text-xs sm:text-sm px-2 sm:px-3">Next &rarr;</Button>
              </div>
            </div>
            
            {/* Close button - positioned absolutely for easy access */}
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 sm:top-2 sm:right-2 lg:top-4 lg:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors z-10 text-sm sm:text-base"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SuccessStories; 