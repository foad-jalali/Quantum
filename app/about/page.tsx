import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import { Metadata } from "next";
import { generateMetadata } from "@/components/seo";


export const metadata: Metadata = generateMetadata({
    title: "About Us | Quantum International Services",
    description: "Learn more about Quantum International Services — a trusted Canadian partner in global procurement, project management, and multi-industry solutions. Discover our mission, values, and international impact.",
    url: "https://quantumints.com/about",
    image: "/homehero.jpg",
    keywords: "About Quantum, Quantum International Services, Global Procurement Experts, Canadian Government Contractor, Project Management, Strategic Sourcing, International Supply Partner, Company Overview",
});

export default function AboutUsPage() {
    return (
        <>
            <section className="container mt-24">
                <FeatureSection
                    image="/about/1.png"
                    alt="our mission"
                    description={
                        <>
                            <h2 className="text-[#00204E]">Our Mission</h2>
                            <p className="text-[#00204E]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </>
                    }

                    backgroundColor="transparent"
                    textColor="#00204E"
                    reverse={false}
                />
                <FeatureSection
                    image="/about/2.png"
                    alt="our mission"
                    description={
                        <>
                            <h2 className="text-[#00204E]">Our Mission</h2>
                            <p className="text-[#00204E]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </>
                    }

                    backgroundColor="transparent"
                    textColor="#00204E"
                    reverse={true}
                />
                <FeatureSection
                    image="/about/1.png"
                    alt="our mission"
                    description={
                        <>
                            <h2 className="text-[#00204E]">Our Mission</h2>
                            <p className="text-[#00204E]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </>
                    }

                    backgroundColor="transparent"
                    textColor="#00204E"
                    reverse={false}
                />
                <FeatureSection
                    image="/about/2.png"
                    alt="our mission"
                    description={
                        <>
                            <h2 className="text-[#00204E]">Our Mission</h2>
                            <p className="text-[#00204E]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </>
                    }

                    backgroundColor="transparent"
                    textColor="#00204E"
                    reverse={true}
                />
            </section>
        </>
    );
}
