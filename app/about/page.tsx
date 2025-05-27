import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"

export const metadata: Metadata = {
    title: "About Us - Glow Unisex Salon",
    description: "Learn about Glow Unisex Salon's history, mission, and our team of expert stylists.",
}

export default function AboutPage() {
    return (
        <>
            <section className="mt-24">
                <SectionHeading
                    title="About Quantum"
                    subtitle="Learn more about our mission, global expertise, and the industries we serve with precision and purpose."
                    subTextColor="#52575D"
                />
                <div className="container mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="heading-lg mb-6 text-gray-800">Who We Are</h2>
                            <p className="text-gray-600 mb-4">
                                Quantum International Services helps businesses and government organizations by taking care of important services, so they can focus on what they do best.
                            </p>
                            <p className="text-gray-600 mb-4">
                                We are known for our work with government contracts and our ability to provide smart, customized solutions. From supplying specialized equipment to offering IT and software services, we make sure every project is handled with care and professionalism.
                            </p>
                            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/about/1.png"
                                alt="Glow Salon Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center mb-20">
                        <h2 className="heading-lg mb-6 text-gray-800">Our Vendor Ecosystem</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                            We work with a diverse network of global partners to deliver tailored solutions for defense, government, and commercial clients. Our vendors specialize in military-grade equipment, IT hardware, energy systems, aviation and marine technology, healthcare devices, automation, and consulting services.
                        </p>
                        <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>

                    <div className="mb-20">
                        <h2 className="heading-lg text-center mb-12 text-gray-800">Meet Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
                                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
                            ].map((image, index) => (
                                <div key={index} className="salon-card text-center p-6">
                                    <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                                        <Image src={image || "/placeholder.svg"} alt={`Stylist ${index + 1}`} fill className="object-cover" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Stylist Name</h3>
                                    <p className="text-gray-600 mb-4">Expert in haircuts, coloring, and styling</p>
                                    <Link href="/booking" className="text-primary hover:text-primary-dark transition-colors">
                                        Book with this stylist
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mb-20">
                        <h2 className="heading-lg mb-6 text-gray-800">Global Reach</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            While we are proudly rooted in Alberta, Canada, our solutions are designed to support organizations of all sizes, anywhere in the world. Our global execution capabilities ensure timely, compliant, and scalable results.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/about/2.png"
                                alt="Glow Salon Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="heading-lg mb-6 text-gray-800">Awards & Government Contracts</h2>
                            <p className="text-gray-600 mb-4">
                                Our track record includes several long-term Supply Arrangement contracts, as well as several multi-million-dollar contracts demonstrating excellence in delivering goods and services to the government and private sector. Examples includes:
                            </p>
                            <ul className="list-disc list-inside pl-5 text-gray-600 space-y-2">
                                <li>Government of Canada – Long-term procurement partner</li>
                                <li>Department of National Defence (DND) – Customized equipment supplier</li>
                                <li>Natural Resources Canada (NRCan) – Energy equipment supplier</li>
                                <li>Environment Canada – Energy equipment supplier</li>
                                <li>District of Thunder Bay – Municipal procurement partner</li>
                                <li>City of Edmonton – Strategic procurement partner</li>
                                <li>Edmonton Valley Zoo – Product innovation supplier</li>
                                <li>and many more ...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
