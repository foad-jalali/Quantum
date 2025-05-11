import path from "path";
import React from "react";
import fs from "fs";
import { notFound } from "next/navigation";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SimpleCard from "@/components/simple-card";
import Image from "next/image";

interface IndustryPageProps {
    params: { slug: string };
}


export async function generateMetadata({ params }: IndustryPageProps) {
    const data = await getIndustryData(params.slug);
    return {
        title: `${data?.title} | Quantum` || "Service",
        description: data?.short_description || "",
        url: `https://quantumints.com/services/${data.slug}`,
        image: data.hero_image || "/homehero.jpg",
    };
}

async function getIndustryData(slug: string) {
    const filePath = path.join(process.cwd(), "db/industries", `${slug}.json`);
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    } catch {
        return null;
    }
}
export default async function IndustryPage({ params }: IndustryPageProps) {
    const data = await getIndustryData(params.slug);

    if (!data) return notFound();

    return (
        <div>
            <HeroSection
                title={data.hero_title}
                subtitle={data.hero_subtitle}
                image={data.hero_image}
                buttonLink="/contact"
            />

            <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4" style={{ color: data.title_color }}>{data.title}</h2>
                    <h3 className="container text-xl text-[#00204E]">{data.short_description}</h3>
                </div>
            </section>

            <div className="bg-[#111111] py-16">
                <div className="container mx-auto px-4">
                    <FeatureSection
                        image={data.first_section_image}
                        alt={data.title}
                        description={
                            <>
                                <h2 className="text-white">{data.first_section_content.title}</h2>
                                <p className="text-gray-300">
                                    {data.first_section_content.description}
                                </p>
                            </>
                        }

                        backgroundColor="transparent"
                        reverse={false}
                    />

                    {data?.first_section_cards?.length > 0 && (
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-12">
                            {data.first_section_cards.map((item: { content: string; icon?: string }, index: number) => (
                                <SimpleCard
                                    key={index}
                                    description={item.content}
                                    icon={item.icon}
                                />
                            ))}
                        </div>
                    )}

                    <div className="text-center">
                        <p className="container text-white text-lg mb-4 pt-8">
                            {data.first_section_content.bottom_content}
                        </p>
                        <a
                            href="/contact"
                            className="px-6 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-600 transition mt-16"
                        >
                            {data.first_section_content.btn}
                        </a>
                    </div>
                </div>
            </div>
            <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[#00204E]">{data.card_section.title}</h2>
                    <h3 className="container text-xl text-[#00204E]">{data.card_section.top_content}</h3>
                </div>
                <div className="flex justify-center mb-16">
                    <Image
                        src={data.card_section.image}
                        alt="Illustration"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div className="text-center mt-16">
                    <p className="container text-[#00204E] text-lg mb-4 pt-8">{data.card_section.bottom_content}</p>
                </div>
            </section>

            <section className="py-16" style={{ backgroundColor: "#C9D1D3" }}>
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[#00204E]">{data.info_section.title}</h2>
                    <h3 className="container text-xl text-[#00204E]">{data.info_section.top_content}</h3>
                </div>
                <div className="flex justify-center mb-16">
                    <Image
                        src={data.info_section.image}
                        alt="Illustration"
                        width={800}
                        height={600}
                        className="rounded-lg"
                    />
                </div>
                <div className="text-center mt-16">
                    <p className="container text-[#00204E] text-lg mb-4 pt-8">{data.info_section.bottom_content}</p>
                </div>
            </section>
            <FeatureSection
                image={data.second_section_image}
                alt={data.title}
                description={
                    <>
                        <h2 className="text-white">{data.second_section_content.title}</h2>
                        <p className="text-white">
                            {data.second_section_content.description}
                        </p>
                    </>
                }
                buttonText={data.second_section_content.btn}
                buttonLink="/contact"
                backgroundColor={data.second_section_content.bg_color}
                reverse={true}
            />
        </div>
    );
}

