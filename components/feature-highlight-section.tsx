"use client";

import { motion } from "framer-motion";
import React from "react";

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
        <section className="py-16 bg-amber-50" id="why-us">
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
                        <motion.div
                            key={index}
                            className="bg-gray-200 p-6 rounded-lg border border-gray-200 hover:border-amber-500 transition-colors group"
                            variants={fadeInUp}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <motion.div
                                className="h-16 w-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img src={feature.icon} alt="Feature Icon" className="w-8 h-8" />
                            </motion.div>

                            <h3 className="font-semibold mb-2 text-center text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 text-sm text-center">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureHighlightSection;
