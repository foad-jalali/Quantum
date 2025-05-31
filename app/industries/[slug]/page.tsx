import path from "path";
import fs from "fs/promises";
import { notFound } from "next/navigation";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SimpleCard from "@/components/simple-card";
import Image from "next/image";
import { CardHoverEffectDemo } from "@/components/card-effect-item";
import { GlowingEffectDemoSecond } from "@/components/glowing-effect-item";

interface IndustryPageProps {
  params: { slug: string };
}

async function getIndustryData(slug: string) {
  const filePath = path.join(process.cwd(), "db/industries", `${slug}.json`);
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "db/industries");
  const files = await fs.readdir(dir);

  return files.map((file) => ({
    slug: file.replace(/\.json$/, ""),
  }));
}

export const dynamicParams = false; // optional, disables runtime fallback

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const data = await getIndustryData(slug);
  return {
    title: data?.title ? `${data.title} | Quantum` : "Service | Quantum",
    description: data?.short_description || "",
    url: `https://quantumints.com/services/${data?.slug || slug}`,
    image: data?.hero_image || "/home/hero.png",
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const data = await getIndustryData(slug);

  if (!data) return notFound();

  return (
    <div>
      <HeroSection
        title={data.hero_title}
        subtitle={data.short_description}
        image={data.hero_image}
        buttonLink="/contact"
      />

      <div className="bg-[#111111] py-16">
        <div className="container mx-auto px-4">
          <FeatureSection
            image={data.first_section_image}
            alt={data.title}
            description={
              <>
                <h2 className="text-white">
                  {data.first_section_content.title}
                </h2>
                <p className="text-gray-300">
                  {data.first_section_content.description}
                </p>
              </>
            }
            backgroundColor="transparent"
            reverse={false}
          />

          {data?.first_section_cards?.length > 0 && (
            <CardHoverEffectDemo
              items={data.first_section_cards.map((item) => ({
                title: item.title,
                description: item.content,
                link: "#",
                backgroundColor: "bg-white/90",
                titleColor: "text-gray-900",
                descriptionColor: "text-gray-800",
              }))}
            />
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
          <h2 className="text-4xl font-bold mb-4 text-[#00204E]">
            {data.card_section.title}
          </h2>
          <h3 className="container text-xl text-[#00204E]">
            {data.card_section.top_content}
          </h3>
        </div>
        {data?.card_section.cards?.length > 0 && (
          <div className="max-w-7xl mx-auto px-4">
            <GlowingEffectDemoSecond
              items={data.card_section.cards.map((item: any) => ({
                title: item.title,
                description: item.text,
                icon: item.icon,
                borderColor: "gray-300"
              }))}
            />
          </div>
        )}
        <div className="text-center mt-16">
          <p className="container text-[#00204E] text-lg mb-4 pt-8">
            {data.card_section.bottom_content}
          </p>
        </div>
      </section>

      {/* <section className="py-16" style={{ backgroundColor: "#000000" }}>
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#FFFFFF]">
            {data.info_section.title}
          </h2>
          <h3 className="container text-xl text-[#FFFFFF]">
            {data.info_section.top_content}
          </h3>
        </div>
        {data?.info_section.cards?.length > 0 && (
          <div className="max-w-7xl mx-auto px-4">
            <GlowingEffectDemoSecond
              items={data.info_section.cards.map((item: any) => ({
                title: item.title,
                description: item.text,
                icon: item.icon,
              }))}
            />
          </div>
        )}
        <div className="text-center mt-16">
          <p className="container text-[#FFFFFF] text-lg mb-4 pt-8">
            {data.info_section.bottom_content}
          </p>
        </div>
      </section> */}

      <FeatureSection
        image={data.second_section_image}
        alt={data.title}
        description={
          <>
            <h2 className="text-[#FFFFFF]">{data.second_section_content.title}</h2>
            <p className="text-[#FFFFFF]">
              {data.second_section_content.description}
            </p>
          </>
        }
        buttonText={data.second_section_content.btn}
        buttonLink="/coming-soon"
        backgroundColor={data.second_section_content.bg_color}
        reverse={true}
      />
    </div>
  );
}
