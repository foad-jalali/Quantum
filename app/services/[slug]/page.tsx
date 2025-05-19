import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SimpleCard from "@/components/simple-card";
import DivisionCard from "@/components/division-card";

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
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-12">
              {data.first_section_cards.map(
                (item: { content: string; icon?: string }, index: number) => (
                  <SimpleCard
                    key={index}
                    description={item.content}
                    icon={item.icon}
                  />
                )
              )}
            </div>
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

      <section className="py-16" style={{ backgroundColor: "#247BA0" }}>
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {data.card_section.title}
          </h2>
          <h3 className="container text-xl text-white">
            {data.card_section.top_content}
          </h3>
        </div>

        {data?.divisions?.length > 0 && (
          <div className="flex justify-center">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl px-4">
              {data.divisions.map((division: any, index: number) => (
                <DivisionCard
                  key={index}
                  index={index}
                  icon={division.icon}
                  title={division.title}
                  description={division.description}
                  content={division.content}
                  services={division.services}
                />
              ))}
            </div>
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
            <h2 className="text-white">{data.second_section_content.title}</h2>
            <p className="text-white">
              {data.second_section_content.description}
            </p>
          </>
        }
        buttonText={data.second_section_content.btn}
        buttonLink="/contact"
        backgroundColor="#00A676"
        reverse={true}
      />
    </div>
  );
}
