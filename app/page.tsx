import HomeClient from "@/components/home-client";
import { generateMetadata } from "@/components/seo";

export const metadata = generateMetadata({
  title: "Quantum | Smart Solutions for Complex Projects",
  keywords: "Government Procurement, Tenders, Supply Chain, Public Sector Bids, Strategic Sourcing, Quantum",
  description: "From military-grade procurement to AI-enabled platforms, we engineer integrated solutions across industries.",
  url: "https://quantumints.com",
  image: "https://quantumints.com/og-image.png",
});

export default function HomePage() {
  return <HomeClient />;
}
