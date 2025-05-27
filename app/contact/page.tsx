import ContactSection from "@/components/contact";
import LocationMap from "@/components/location-map";
import { generateMetadata } from "@/components/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us | Quantum",
  description: "Reach out to Quantum for inquiries about procurement, IT solutions, vendor partnerships, or international sourcing projects. Our global team is here to assist.",
  url: "https://quantumints.com/contact",
  image: "/home/hero.png",
  keywords: "Contact Quantum, Procurement Inquiries, IT Solutions Contact, Global Vendor Network, Supply Chain Assistance, Quantum International Services Contact, Business Inquiry",
});


export default function FaqPage() {
  return (
    <>
      <ContactSection />
      <div className="container mt-20 mb-20">
        <h2 className="heading-md mb-6">Find Us</h2>
        <LocationMap />
      </div>
    </>
  );
}
