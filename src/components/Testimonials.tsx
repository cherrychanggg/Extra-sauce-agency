import { useState } from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "We've had old prospects come back to book a demo and thought we were a completely different company.",
      author: "Vik Soni",
      title: "Head of Sales",
      company: "TechCorp",
      avatar: "/viksoni.png",
      impact: "300% increase in demo bookings"
    },
    {
      quote: "I just want to say, I have a good ghostwriter.",
      author: "Nadia Isani",
      title: "CEO & Founder",
      company: "InnovateLabs",
      avatar: "/nadiairani.png",
      impact: "Built thought leadership presence"
    },
    {
      quote: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
      author: "Alex Salois",
      title: "Senior Content Manager",
      company: "GrowthTech",
      avatar: "/alexsalois.png",
      impact: "500% growth in 6 months"
    },
    {
      quote: "Manny's expertise & dedication have been instrumental in crafting a compelling strategic narrative, and generating insightful content on LinkedIn that drives leads.",
      author: "Sharlene Dumela",
      title: "CEO & Founder",
      company: "ScaleUp Inc",
      avatar: "/sharlenegumbs.png",
      impact: "Consistent lead generation"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-divider mb-20"></div>
      <div className="container-premium relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Extra Sauce.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl lg:text-3xl font-medium text-center text-foreground mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Impact Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                  <span className="text-sm font-semibold text-primary">
                    {testimonials[currentTestimonial].impact}
                  </span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center">
                {testimonials[currentTestimonial].avatar ? (
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className="text-center">
                  <div className="font-bold text-lg text-foreground">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].title} • {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white hover:scale-110 transition-all duration-300"
              onClick={prevTestimonial}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white hover:scale-110 transition-all duration-300"
              onClick={nextTestimonial}
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                index === currentTestimonial
                  ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30 scale-105'
                  : 'bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 hover:border-primary/20'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-4xl text-primary/20 mb-4 font-serif">"</div>
                <p className="text-lg leading-relaxed text-foreground font-medium">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Impact Badge */}
              <div className="mt-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-xs font-semibold text-primary">
                    {testimonial.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;