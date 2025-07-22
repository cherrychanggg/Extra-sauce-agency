import React, { useState } from "react";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { successStories } from "@/content/success-stories";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

const SuccessStories: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openModal = (idx: number) => setOpenIndex(idx);
  const closeModal = () => setOpenIndex(null);
  const nextStory = () => setOpenIndex((prev) => (prev !== null ? (prev + 1) % successStories.length : null));
  const prevStory = () => setOpenIndex((prev) => (prev !== null ? (prev - 1 + successStories.length) % successStories.length : null));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Combined Hero and Content Section */}
      <section className="section-padding pt-32 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-premium relative z-10">
          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto mb-32">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              What Happens When You Find{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Your Sauce
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Extra Sauce is trusted by more than 50+ of the world's leading B2B brands. 
              Read their stories to discover how teams like yours are revolutionizing how they build demand for the web.
            </p>
            
            <Button className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center">
                View All Stories
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Success Stories Grid */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Explore Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Learn how businesses are using Extra Sauce to build high-quality client work, faster.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <Card
                key={story.id}
                className="group bg-card rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-elegant hover:-translate-y-2 cursor-pointer"
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
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {story.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">{story.author}</span>
                      {story.authorRole && (
                        <span className="text-muted-foreground">{story.authorRole}</span>
                      )}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Read Story
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {openIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in">
          <div className="relative bg-background rounded-2xl shadow-2xl max-w-4xl w-full mx-4 flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Image */}
            <div className="md:w-1/2 bg-muted flex items-center justify-center p-6">
              <div className="w-full aspect-[16/9] md:h-[32rem] h-56 max-w-full flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={successStories[openIndex].image}
                  alt={successStories[openIndex].title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
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
                <p className="text-lg text-foreground mb-6 whitespace-pre-line leading-relaxed">
                  {successStories[openIndex].detailed}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <Button variant="ghost" onClick={prevStory} className="flex items-center">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  {openIndex + 1} of {successStories.length}
                </span>
                <Button variant="ghost" onClick={nextStory} className="flex items-center">
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
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