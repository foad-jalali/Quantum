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
                <SectionHeading
                    title="About Quantum"
                    subtitle="Learn more about our mission, global expertise, and the industries we serve with precision and purpose."
                />

                <FeatureSection
                    image="/about/1.png"
                    alt="our mission"
                    description={
                        <>
                            <h2 className="text-[#00204E]">Who We Are</h2>
                            <p>
                                Quantum International Services helps businesses and government organizations by taking care of important services, so they can focus on what they do best.
                            </p>
                            <p>
                                We are known for our work with government contracts and our ability to provide smart, customized solutions. From supplying specialized equipment to offering IT and software services, we make sure every project is handled with care and professionalism.
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
                            <h2 className="text-[#00204E]">Our Vendor Ecosystem</h2>
                            <p className="text-[#00204E]">
                                We work with a diverse network of global partners to deliver tailored solutions for defense, government, and commercial clients. Our vendors specialize in military-grade equipment, IT hardware, energy systems, aviation and marine technology, healthcare devices, automation, and consulting services.
                            </p>
                        </>
                    }

                    backgroundColor="transparent"
                    textColor="#00204E"
                    reverse={true}
                />
                <FeatureSection
                    image="/about/3.png"
                    alt="our mission"
                    description={
                        <>
                            <h2 className="text-[#00204E]">Global Reach</h2>
                            <p className="text-[#00204E]">
                                While we are proudly rooted in North America, our solutions are designed to support organizations of all sizes, anywhere in the world. Our global execution capabilities ensure timely, compliant, and scalable results.
                            </p>
                        </>
                    }

                    backgroundColor="transparent"
                    textColor="#00204E"
                    reverse={false}
                />
                <FeatureSection
                    image="/about/4.png"
                    alt="our mission"
                    description={
                        <>
                            <h2 className="text-[#00204E]">Awards & Government Contracts</h2>
                            <p>
                                Our track record includes major contracts and recognitions that demonstrate our excellence in service delivery. Examples include:
                            </p>
                            <ul>
                                <li>Government of Canada – Strategic procurement partner</li>
                                <li>Department of National Defence (DND) – Customized equipment supplier</li>
                                <li>Natural Resources Canada (NRCan) – Energy solutions provider</li>
                                <li>District of Thunder Bay – Municipal procurement partner</li>
                                <li>City of Edmonton – Strategic sourcing partner</li>
                                <li>Edmonton Valley Zoo – Product innovation supplier</li>
                            </ul>
                        </>
                    }

                    backgroundColor="transparent"
                    textColor="#00204E"
                    reverse={true}
                />

                <FeatureSection
                    image="/about/5.png"
                    alt="our mission"
                    description={
                        <>
                            <h2 className="text-[#00204E]">Why Choose Quantum</h2>
                            <p>
                                We anticipate our clients' needs and deliver with excellence. Quantum offers:
                            </p>
                            <ul>
                                <li>End-to-end service from sourcing to implementation</li>
                                <li>Custom-fit solutions at any operational scale</li>
                                <li>Proven government contracting experience</li>
                                <li>Technology-driven innovation and efficiency</li>
                                <li>A trusted global vendor ecosystem</li>
                            </ul>
                            <p>
                                At Quantum, we turn complexity into clarity and vision into results.
                            </p>
                        </>
                    }

                    backgroundColor="transparent"
                    textColor="#00204E"
                    reverse={false}
                />
            </section>
        </>
    );
}
