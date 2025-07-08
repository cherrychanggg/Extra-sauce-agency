const Testimonials = () => {
  const testimonials = [
    {
      quote: "We've had old prospects come back to book a demo and thought we were a completely different company.",
      author: "Vik Soni",
      title: "Head of Sales",
      company: "TechCorp",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "I just want to say, I have a good ghostwriter.",
      author: "Nadia Isani",
      title: "CEO & Founder",
      company: "InnovateLabs",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
      author: "Alex Garcia",
      title: "Senior Content Manager",
      company: "GrowthTech",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "Manny's expertise & dedication have been instrumental in crafting a compelling strategic narrative, and generating insightful content on LinkedIn that drives leads.",
      author: "Sharlena Dumela",
      title: "CEO & Founder",
      company: "ScaleUp Inc",
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <section className="section-padding bg-background relative">
      <div className="section-divider mb-20"></div>
      <div className="container-premium">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Extra Sauce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-testimonial animate-fade-in-up group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote */}
              <div className="mb-8">
                <div className="text-6xl text-primary/20 mb-4 font-serif">"</div>
                <p className="text-lg leading-relaxed text-foreground font-medium">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title} • {testimonial.company}
                  </div>
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