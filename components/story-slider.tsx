"use client";

import { motion } from "framer-motion";
import InfoSlider from "./info-slider";

interface Slide {
    title: string;
    content: string;
    color: string;
}

interface StorySectionProps {
    title: string;
    subtitle?: string;
    slides: Slide[];
    backgroundColor?: string;
}

const StorySection = ({
    title,
    subtitle,
    slides,
    backgroundColor = "#fef3c7",
}: StorySectionProps) => {
    return (
        <section className="py-16" style={{ backgroundColor }}>
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    className="text-3xl font-bold tracking-tight text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        className="text-amber-500 inline-block"
                        animate={{
                            rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 5,
                        }}
                    >
                    </motion.span>{" "}
                    {title}
                </motion.h2>

                {subtitle && (
                    <motion.h3
                        className="text-lg md:text-xl text-center text-gray-600 mb-12"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {subtitle}
                    </motion.h3>
                )}

                <InfoSlider slides={slides} />
            </div>
        </section>
    );
};

export default StorySection;
