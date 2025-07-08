import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long until we should expect results?",
      answer: "You will be able to generate 11-16 high-converting leads in your inbox every month after generating an initial realm of influence anywhere from 2-5 months and the client's product typical sales cycle plays a role."
    },
    {
      question: "What is the difference between founder-led marketing & personal branding?",
      answer: "Founder-led marketing focuses on building business value and driving pipeline through strategic content, while personal branding is more about individual reputation. We align your personal expertise with business goals."
    },
    {
      question: "Why should we work with your agency for B2B content?",
      answer: "We've built our own agency using the same SAUCE™ Recipe we share with clients. We understand the challenges of B2B growth and have proven systems that work across multiple industries."
    }
  ];

  return (
    <section className="section-padding bg-card/30 relative">
      <div className="section-divider mb-20"></div>
      <div className="container-premium">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our founder-led content strategy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-border/50 last:border-b-0"
            >
              <button
                className="w-full py-8 flex items-center justify-between text-left hover:text-primary transition-all duration-300 focus-enhanced group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="animate-fade-in-up">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;