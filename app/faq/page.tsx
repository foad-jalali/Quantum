import FAQSection from "@/components/faq-section";
import { generateMetadata } from "@/components/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "FAQs | Quantum",
  description: "Find answers to common questions about Quantum's procurement solutions, IT services, international logistics, government contracting, and vendor collaboration.",
  url: "https://quantumints.com/faq",
  image: "/homehero.jpg",
  keywords: "Quantum FAQs, Government Contracting Questions, Procurement FAQs, IT Service FAQs, Vendor Support, Supply Chain FAQ, Global Sourcing Help, Quantum International Services Support",
});


export default function FaqPage() {
  return (
    <>
      <FAQSection />
    </>
  );
}
