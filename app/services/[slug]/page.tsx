import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SimpleCard from "@/components/simple-card";
import DivisionCard from "@/components/division-card";
import { GlowingEffectDemoSecond } from "@/components/glowing-effect-item";
import { CardHoverEffectDemo } from "@/components/card-effect-item";

interface ServicePageProps {
  params: { slug: string };
}

async function getServiceData(slug: string) {
  const filePath = path.join(process.cwd(), "db/services", `${slug}.json`);
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "db/services");
  const files = await fs.readdir(dir);
  return files.map((file) => ({
    slug: file.replace(/\.json$/, ""),
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const data = await getServiceData(slug);

  return {
    title: data?.title ? `${data.title} | Quantum` : "Service | Quantum",
    description: data?.short_description || "",
    url: `https://quantumints.com/services/${data?.slug || slug}`,
    image: data?.hero_image || "/home/hero.png",
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const data = await getServiceData(slug);

  if (!data) return notFound();

  return (
    <div>
      <HeroSection
        title={data.hero_title}
        subtitle={data.short_description}
        image={data.hero_image}
        buttonLink="/contact"
      />

      <div className="bg-[#FFFFFF] py-16">
        <div className="container mx-auto px-4">
          <FeatureSection
            image={data.first_section_image}
            alt={data.title}
            description={
              <>
                <h2>
                  {data.first_section_content.title}
                </h2>
                <p>
                  {data.first_section_content.description}
                </p>
              </>
            }
            backgroundColor="transparent"
            reverse={false}
            textColor="#111111"
          />

          {data?.first_section_cards?.length > 0 && (
            <CardHoverEffectDemo
              items={data.first_section_cards.map((item) => ({
                title: item.title,
                description: item.content,
                link: "#",
                backgroundColor: "bg-black/90",
                titleColor: "text-gray-300",
                descriptionColor: "text-gray-400",
              }))}
            />
          )}

          <div className="text-center">
            <p className="container text-white text-lg mb-4 pt-8">
              {data.first_section_content.bottom_content}
            </p>
            <a
              href="/coming-soon"
              className="px-6 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-600 transition mt-16"
            >
              {data.first_section_content.btn}
            </a>
          </div>
        </div>
      </div>

      <section className="py-16" style={{ backgroundColor: "#000000" }}>
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {data.card_section.title}
          </h2>
          <h3 className="container text-xl text-white">
            {data.card_section.top_content}
          </h3>
        </div>

        {data?.divisions?.length > 0 && (
          <div className="max-w-7xl mx-auto px-4">
            <GlowingEffectDemoSecond
              items={data.divisions.map((division: any) => ({
                title: division.title,
                description: division.content,
                icon: division.icon,
              }))}
            />
          </div>
        )}


        <div className="text-center mt-16">
          <p className="container text-white text-lg mb-4 pt-8">
            {data.card_section.bottom_content}
          </p>
        </div>
      </section>

      <FeatureSection
        image={data.second_section_image}
        alt={data.title}
        description={
          <>
            <h2>{data.second_section_content.title}</h2>
            <p>
              {data.second_section_content.description}
            </p>
          </>
        }
        buttonText={data.second_section_content.btn}
        buttonLink="/contact"
        backgroundColor="#FFFFFF"
        reverse={true}
      />
    </div>
  );
}
