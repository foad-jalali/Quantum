import SectionHeading from "@/components/section-heading";
import { generateMetadata } from "@/components/seo";
import { Metadata } from "next";
import Link from "next/link";
import CareerSection from "@/components/career-section";

export const metadata: Metadata = generateMetadata({
    title: "Careers | InovativAI - Build the Future with AI Innovation",
    description: "Explore career opportunities at InovativAI. Join our team of innovators shaping the future of AI, aviation, cloud, data, and software solutions.",
    url: "https://inovativai.com/career",
    image: "/home/hero.png",
    keywords: "InovativAI Careers, AI Jobs, Technology Careers, Software Engineering Jobs, Cloud Jobs, Data Analytics Careers, Work at InovativAI, AI Innovation Jobs",
});

export default function CareerPage() {
    return (
        <>
            <CareerSection/>
        </>
    );
}
