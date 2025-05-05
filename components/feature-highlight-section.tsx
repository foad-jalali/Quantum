"use client";

import { motion } from "framer-motion";
import React from "react";
import SimpleCard from "./simple-card";

interface Feature {
    icon: string;
    title?: string;
    description: string;
}

interface FeatureHighlightSection {
    title: string;
    subtitle: string;
    features: Feature[];
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const FeatureHighlightSection = ({ title, subtitle, features }: FeatureHighlightSection) => {
    return (
        <section className="py-16 bg-[#F5F5F5]" id="why-us">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    className="text-3xl font-bold tracking-tight text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        className="text-amber-500 inline-block"
                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                    >
                    </motion.span>{" "}
                    {title}
                </motion.h2>

                <motion.h3
                    className="text-lg text-center text-gray-700 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {subtitle}
                </motion.h3>

                <motion.div
                    className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <SimpleCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureHighlightSection;
