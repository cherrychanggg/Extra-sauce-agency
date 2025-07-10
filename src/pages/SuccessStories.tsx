import React, { useState } from "react";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { successStories, SuccessStory } from "@/content/success-stories";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SuccessStories: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openModal = (idx: number) => setOpenIndex(idx);
  const closeModal = () => setOpenIndex(null);
  const nextStory = () => setOpenIndex((prev) => (prev !== null ? (prev + 1) % successStories.length : null));
  const prevStory = () => setOpenIndex((prev) => (prev !== null ? (prev - 1 + successStories.length) % successStories.length : null));

  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Scroll by one card width
  const scrollByCard = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(".story-card");
    if (card) {
      const width = (card as HTMLElement).offsetWidth + 32; // 32px gap
      scrollRef.current.scrollBy({ left: dir === "left" ? -width : width, behavior: "smooth" });
    }
  };

  // Duplicate stories for seamless scroll
  const allStories = [...successStories, ...successStories];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="section-padding pt-32 bg-muted/30">
        <div className="container-premium text-center">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            What Happens When You Find Your Sauce
          </h1>
          <p className="text-xl text-primary mb-12 max-w-3xl mx-auto">
            From creating brand demand to booking meetings, these stories show the impact of The Sauce Recipe™
          </p>
          <div className="relative overflow-hidden rounded-3xl bg-white/30 backdrop-blur-sm border border-border/30 p-8 mt-0 mb-0">
            <div className="scrolling-stories-wrapper">
              <div className="scrolling-stories animate-scroll-stories">
                {allStories.map((story, idx) => (
                  <div
                    key={story.id + '-' + idx}
                    className="story-card min-w-[320px] max-w-xs flex-1 card-premium group hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between snap-center mx-4"
                    onClick={() => openModal(idx % successStories.length)}
                    style={{ scrollSnapAlign: "center" }}
                  >
                    <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-xl bg-secondary flex items-center justify-center">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <h3 className="text-lg font-bold mb-2 text-foreground">{story.summary}</h3>
                      <Button className="mt-4 w-full" variant="outline">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style>{`
              .scrolling-stories-wrapper {
                overflow: hidden;
                width: 100%;
                position: relative;
              }
              .scrolling-stories {
                display: flex;
                gap: 2rem;
                width: max-content;
              }
              @keyframes scroll-stories {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll-stories {
                animation: scroll-stories 30s linear infinite;
              }
              .animate-scroll-stories:hover {
                animation-play-state: paused;
              }
            `}</style>
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