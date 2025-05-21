"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQSection() {
  const faqItems = [
    {
      question: "What industries does Quantum International Services cater to?",
      answer: "Quantum serves diverse industries including Military & Defence, Airports, Airlines & MRO, Energy & Oil & Gas, Marine & Shipbuilding, Healthcare & HealthTech, Manufacturing, Navigation (GPS/GNSS), and IT & Emerging Technologies.",
    },
    {
      question: "How can Quantum assist my organization with procurement and sourcing?",
      answer: "Quantum offers end-to-end procurement services—from vendor identification and sourcing to tender preparation and bid management—with a proven track record including the Government of Canada.",
    },
    {
      question: "Does Quantum offer custom IT and software development solutions?",
      answer: "Yes. The Quantum IT Suite includes software development, mobile/web apps, embedded AI, hardware supply, and IT infrastructure deployment tailored to your business.",
    },
    {
      question: "Can Quantum manage international logistics and supply chain operations?",
      answer: "Absolutely. With global experience, Quantum handles sourcing, procurement, and delivery with precision across international markets.",
    },
    {
      question: "How does Quantum support tender participation and consortium building?",
      answer: "Quantum facilitates tender management, documentation, strategic partner matching, and builds strong consortiums for higher bid competitiveness.",
    },
    {
      question: "Is product customization and industrial fabrication available through Quantum?",
      answer: "Yes. Quantum offers custom fabrication and product customization services across several industrial sectors.",
    },
    {
      question: "What types of security and surveillance systems can Quantum deploy?",
      answer: "Quantum delivers advanced security solutions including surveillance systems, networking infrastructure, and drone technology.",
    },
    {
      question: "How does Quantum ensure project success post-procurement?",
      answer: "Quantum offers project management and execution oversight to guarantee smooth implementation, quality, and on-time delivery.",
    },
    {
      question: "Can vendors collaborate with Quantum for global supply opportunities?",
      answer: "Yes. Vendors can partner with Quantum for large-scale procurement projects and benefit from our matchmaking services.",
    },
    {
      question: "What makes Quantum different from other government contractors?",
      answer: "Quantum integrates deep government contracting expertise with modern IT solutions and global sourcing, delivering end-to-end excellence.",
    },
  ];


  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="section-padding mt-24 bg-white"
    >
      <motion.div
        variants={fadeInUp}
        className="container max-w-4xl px-4 text-[#00204E] mb-8"
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <Accordion type="multiple" className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
