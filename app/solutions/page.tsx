import FAQSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import { generateMetadata } from "@/components/seo";
import type { Metadata } from "next";
import path from "path";
import { promises as fs } from "fs";
import FeatureSection from "@/components/feature-section";

export async function getSolutions() {
    const filePath = path.join(process.cwd(), "db", "solutions.json");
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
}
export const metadata: Metadata = generateMetadata({
    title: "FAQs | Quantum",
    description: "Find answers to common questions about Quantum's procurement solutions, IT services, international logistics, government contracting, and vendor collaboration.",
    url: "https://quantumints.com/faq",
    image: "/homehero.jpg",
    keywords: "Quantum FAQs, Government Contracting Questions, Procurement FAQs, IT Service FAQs, Vendor Support, Supply Chain FAQ, Global Sourcing Help, Quantum International Services Support",
});

interface Brand {
    id: string;
    image: string;
}

interface Solution {
    id: string;
    title: string;
    description: string;
    image: string;
    brands: Brand[];
}


export default async function FaqPage() {
    const solutions = await getSolutions();
    return (
        <>
            <HeroSection
                image={solutions.hero_image}
                buttonLink="/contact"
            />
            <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-[#00204E]">{solutions.title}</h1>
                    <h3 className="container text-xl text-[#00204E]">{solutions.subtitle}</h3>
                </div>
            </section>


            {(solutions.solutions as Solution[]).map((solution, i) => {
                const bgColor = i % 2 === 0 ? "#C9D1D3" : "#FFFFFF";
                const sectionId = solution.id || solution.title.toLowerCase().replace(/\W+/g, "-");

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
                                    <h2 className="text-2xl font-bold mb-4 text-[#00204E]">{solution.title}</h2>
                                    <p>{solution.description}</p>
                                </>
                            }
                            reverse={i % 2 !== 1}
                            backgroundColor="transparent"
                            textColor="#00204E"
                            buttonText="Get a Quote"
                            buttonLink="/"
                        />

                        {solution.brands?.length > 0 && (
                            <div className="container mx-auto px-4 mt-10 flex flex-wrap justify-center items-center gap-6">
                                {solution.brands.map((brand) => (
                                    <img
                                        key={brand.id}
                                        src={brand.image}
                                        alt={`Brand ${brand.id}`}
                                        className="h-32 w-32 object-contain"
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                );
            })}

        </>
    );
}
