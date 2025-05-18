import FAQSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import { generateMetadata } from "@/components/seo";
import type { Metadata } from "next";
import path from "path";
import { promises as fs } from "fs";
import FeatureSection from "@/components/feature-section";
import PartnersSection from "@/components/partners";
import { LogoSlider } from "@/components/ui/logo-slider";

export async function getSolutions() {
  const filePath = path.join(process.cwd(), "db", "solutions.json");
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}
export const metadata: Metadata = generateMetadata({
  title: "Solutions | Quantum",
  description:
    "Explore Quantum's tailored solutions for government procurement, AI-powered platforms, IT systems, and multi-industry sourcing. Discover how we deliver precision, speed, and innovation across sectors.",
  url: "https://quantumints.com/solutions",
  image: "/solutions/hero.png",
  keywords:
    "Quantum Solutions, Government Procurement, AI Platforms, IT Services, Industrial Sourcing, Vendor Network, Public Sector Projects, Technology Integration, Procurement Experts, Quantum International Services",
});

interface Logo {
  alt: string;
  image: string;
}

interface Solution {
  id: string;
  title: string;
  description: string;
  first_paragraph: string;
  second_paragraph: string;
  image: string;
  logos: Logo[];
}

export default async function FaqPage() {
  const solutions = await getSolutions();
  return (
    <>
      <HeroSection
        image={solutions.hero_image}
        title={solutions.title}
        subtitle={solutions.subtitle}
        buttonLink="/contact"
      />
      {(solutions.solutions as Solution[]).map((solution, i) => {
        const bgColor = i % 2 === 0 ? "#C9D1D3" : "#FFFFFF";
        const sectionId =
          solution.id || solution.title.toLowerCase().replace(/\W+/g, "-");

        return (
          <section
            key={i}
            id={sectionId}
            style={{ backgroundColor: bgColor }}
            className="py-16"
          >
            <FeatureSection
              image={solution.image || "/placeholder.jpg"}
              alt={solution.title}
              description={
                <>
                  <h2 className="text-2xl font-bold mb-4 text-[#00204E]">
                    {solution.title}
                  </h2>
                  <p>{solution.description}</p>
                  <p>{solution.first_paragraph}</p>
                  <p>{solution.second_paragraph}</p>
                </>
              }
              reverse={i % 2 !== 1}
              backgroundColor="transparent"
              textColor="#00204E"
              buttonText="Get a Quote"
              buttonLink="/contact"
            />
            {solution?.logos && (
              <LogoSlider
                logos={solution.logos}
                direction="left"
                speed="fast"
              />
            )}
          </section>
        );
      })}
    </>
  );
}
