import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion"
  

  const faqItems = [
    {
      question: "What services do you provide?",
      answer: "We provide end-to-end procurement, software development, and AI integration.",
    },
    {
      question: "How can I partner with you?",
      answer: "Please contact us via the form or email. We welcome global partnerships.",
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes, we specialize in tailoring solutions to fit each client's unique needs.",
    },
    // Add more FAQs as needed
  ]
  
  const FAQSection = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Frequently Asked Questions</h2>
          <Accordion type="multiple" className="w-full text-black">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  export default FAQSection

  