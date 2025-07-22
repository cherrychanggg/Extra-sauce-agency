import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Extra Sauce transformed our content strategy completely. We went from struggling to get noticed to being recognized as thought leaders in our industry.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "TechFlow"
    },
    {
      quote: "The founder-led approach helped us build authentic connections with our audience. Our engagement rates have increased by 300%.",
      author: "Michael Rodriguez",
      role: "Founder, DataSync",
      company: "DataSync"
    },
    {
      quote: "Working with Extra Sauce was a game-changer. They helped us scale our content while maintaining our authentic voice.",
      author: "Emily Watson",
      role: "Marketing Director, CloudScale",
      company: "CloudScale"
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from founders and executives who've transformed their marketing with Extra Sauce
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-lg leading-relaxed text-foreground">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;