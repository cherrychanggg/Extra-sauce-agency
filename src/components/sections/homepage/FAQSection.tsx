import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSection } from "@/content/homepage";

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {faqSection.headline}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {faqSection.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqSection.questions.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="card-premium border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-4">
                  {faq.answer}
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