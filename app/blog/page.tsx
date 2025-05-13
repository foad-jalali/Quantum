import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next";
import { generateMetadata } from "@/components/seo";
import path from "path";
import { promises as fs } from "fs";
import SectionHeading from "@/components/section-heading";
import BlogPostGrid from "@/components/blog-post-grid";

export const metadata: Metadata = generateMetadata({
    title: "Blog | Quantum",
    description: "Stay informed with the latest insights, updates, and trends in global procurement, supply chain, IT solutions, and international project management from Quantum.",
    url: "https://quantumints.com/blog",
    image: "/home/hero.png",
    keywords: "Quantum Blog, Procurement Insights, Global Sourcing News, IT Solutions Trends, Project Management, Defense Technology, Supply Chain Innovation, Quantum International Services Blog",
});

export async function getBlogPosts() {
    const filePath = path.join(process.cwd(), "db", "blogPost.json");
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
}

export default async function BlogPage() {
    // Sample blog posts
    const blogPosts = await getBlogPosts();

    return (
        <>

            <section id="blog-posts" className="section-padding mt-24" data-aos="fade-up">
                <div className="container">
                    <SectionHeading
                        title="Latest Articles"
                        subtitle="Explore articles on procurement strategy, project delivery, and business empowerment."
                    />

                            <BlogPostGrid posts={blogPosts} />


                </div>
            </section>

        </>
    )
}
