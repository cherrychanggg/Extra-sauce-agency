import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSection } from "@/content/homepage";

const FAQSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container-premium relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqSection.questions.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="group bg-white/50 backdrop-blur-sm rounded-3xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 px-8 py-6 group-hover:bg-white/80 [&[data-state=open]]:bg-primary/5">
                  <span className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-8 pb-6 bg-white/30">
                  <div className="pl-12">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;