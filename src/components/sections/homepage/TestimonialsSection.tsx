import { useState } from "react";
import { Quote, Star, ArrowLeft, ArrowRight, TrendingUp, Users, DollarSign, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "We've had old prospects come back to book a demo and thought we were a completely different company.",
      author: "Vik Saini",
      title: "Head of Sales",
      avatar: "/viksoni.png",
      impact: "16M+ Views Generated",
      metrics: [
        { label: "Views Generated", value: "16M+", icon: TrendingUp },
        { label: "Revenue Added", value: "$124K", icon: DollarSign }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com"
    },
    {
      quote: "I just want to say, I have a good ghostwriter.",
      author: "Nadia Irani",
      title: "CEO & Founder", 
      avatar: "/nadiairani.png",
      impact: "$428K ARR Added",
      metrics: [
        { label: "ARR Added", value: "$428K", icon: DollarSign },
        { label: "Qualified Meetings", value: "16+/month", icon: Users }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com"
    },
    {
      quote: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
      author: "Alex Salois",
      title: "Senior Content Manager",
      avatar: "/alexsalois.png",
      impact: "500K+ Followers Gained",
      metrics: [
        { label: "Followers Growth", value: "500K+", icon: Users },
        { label: "Channel Growth", value: "0-60K", icon: TrendingUp }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com"
    },
    {
      quote: "Manny's expertise & dedication have been instrumental in crafting a compelling strategic narrative, and generating insightful content on LinkedIn that drives leads.",
      author: "Sharlene Gumbs",
      title: "CEO & Founder",
      avatar: "/sharlenegumbs.png", 
      impact: "Complete Brand Transformation",
      metrics: [
        { label: "Pipeline Generated", value: "Consistent", icon: BarChart3 },
        { label: "Brand Clarity", value: "100%", icon: CheckCircle }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com"
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
            Real{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Results
            </span>{" "}
            from Real Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the measurable impact we've delivered for B2B leaders and their companies.
          </p>
        </div>

        {/* Main Testimonials Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Featured Testimonial - Shows first on mobile, right on desktop */}
            <div className="lg:sticky lg:top-8 order-1 lg:order-2">
              <Card className="border-primary/20 shadow-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified Client
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Results Achieved</h3>
                    <p className="text-muted-foreground">Measurable impact in real numbers</p>
                  </div>

                  {/* Featured Quote */}
                  <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center mb-6">
                    {testimonials[currentTestimonial].avatar ? (
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].author}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-lg text-foreground">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentTestimonial].title}
                      </div>
                    </div>
                  </div>

                </CardHeader>

                <CardContent className="pt-0">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {testimonials[currentTestimonial].metrics.map((metric, index) => {
                      const Icon = metric.icon;
                      return (
                        <div key={index} className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Impact Badge */}
                  <div className="text-center">
                    <Badge variant="outline" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {testimonials[currentTestimonial].impact}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials List - Shows second on mobile, left on desktop */}
            <div className="space-y-6 order-2 lg:order-1">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'border-primary/30 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5'
                      : 'border-border hover:border-primary/20 hover:shadow-md'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <CardContent className="p-6">
                    {/* Author */}
                    <div className="flex items-center mb-4">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold mr-4">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;