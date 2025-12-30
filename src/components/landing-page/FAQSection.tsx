import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the Kyoorious identify my weak areas?",
      answer: "Kyoorious uses advanced AI algorithms to analyze your test responses and identify patterns in your mistakes. It tracks which concepts you struggle with and provides targeted practice to help you improve those specific areas."
    },
    {
      question: "Can I use for any subject?",
      answer: "Currently, Kyoorious supports Mathematics and Science subjects for classes 8-12. We're actively working on adding more subjects and expanding our coverage to help students across all academic areas."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! You can start with our free tier which includes unlimited practice tests. Premium features like detailed analytics, personalized study plans, and advanced revision tools are available with our paid plans."
    },
    {
      question: "How is this different from a question bank or a test series?",
      answer: "Unlike traditional question banks, Kyoorious doesn't just give you questions—it learns from your responses. It identifies your weak concepts, provides simple explanations, and creates a personalized revision path. It's like having a smart tutor who knows exactly what you need to work on."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-6 data-[state=open]:border-[var(--accent-color)]"
            >
              <AccordionTrigger className="text-[var(--text-primary)] text-left hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--text-secondary)] pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
