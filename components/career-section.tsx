"use client";

import Link from "next/link";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const CareerSection = () => {
    const applyRef = useRef(null);
    const inView = useInView(applyRef, { once: true, margin: "0px 0px -20% 0px" });

    return (
        <>
            <section className="min-h-screen">
                {/* Section 1: Immediate animation */}
                <motion.section
                    id="open-positions"
                    className="section-padding mt-24 "
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                >
                    <div className="container">
                        <SectionHeading
                            title="Join Our Team"
                            subtitle="We're always looking for talented individuals to join our team."
                            subTextColor="#52575D"
                        />

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                ["Account Manager, Aviation", "Manages aviation-related client accounts, ensuring strong relationships, timely communication, and alignment with industry regulations and needs."],
                                ["Account Manager, Oil and Gas", "Oversees client portfolios in the oil and gas sector, focusing on contract fulfillment, performance tracking, and stakeholder coordination."],
                                ["Project Manager, IT", "Leads IT projects from initiation to completion, managing teams, timelines, budgets, and ensuring alignment with technical and business goals."]
                            ]
                                .map((position, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white border border-[#00204E]/10 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * index }}
                                    >
                                        <h3 className="text-xl text-[#00204E] font-bold mb-2">{position[0]}</h3>
                                        <p className="text-[#00204E] mb-4">{position[1]}</p>
                                        <Link
                                            href="#application-form"
                                            className="text-[#00204E] hover:text-amber-600 inline-flex items-center"
                                        >
                                            <span>Apply Now</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                </motion.section>

                {/* Section 2: Animate on scroll */}
                <motion.section
                    id="application-form"
                    ref={applyRef}
                    className="pt-8 pb-24 mt-8 bg-black to-transparent"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                >
                    <div className="container text-white">
                        <SectionHeading
                            textColor="#FFFFFF"
                            subTextColor="#FFFFFF"
                            title="Join Quantum and Build the Future"
                            subtitle="We're looking for talented individuals. Apply now and become part of a team shaping tomorrow's technology."
                        />
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link
                                href="mailto:info@quantumints.com"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group"
                            >
                                Send Resume
                            </Link>
                        </div>
                    </div>
                </motion.section>
            </section>
        </>
    );
};

export default CareerSection;
