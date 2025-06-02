"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  image: string;
  alt: string;
  description: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  reverse?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const FeatureSection = ({
  image,
  alt,
  description,
  buttonText,
  buttonLink,
  reverse = false,
  backgroundColor,
  textColor = "text-gray-800",
}: FeatureSectionProps) => {
  return (
    <motion.section
      className="py-14"
      style={{ backgroundColor }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={cn(
          "container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10",
          reverse && "md:flex-row-reverse"
        )}
      >
        <motion.article
          variants={reverse ? fadeLeft : fadeRight}
          transition={{ duration: 0.6 }}
          className={cn("w-full md:w-1/2", textColor)}
        >
          <div className="mb-6 leading-relaxed text-lg font-medium">
            {description}
          </div>

          {buttonText && buttonLink && (
            <Link
              href={buttonLink}
              className="inline-block mt-4 px-6 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-600 transition"
            >
              {buttonText}
            </Link>
          )}
        </motion.article>

        <motion.figure
          variants={reverse ? fadeRight : fadeLeft}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 max-w-md mx-auto rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src={image}
            alt={alt}
            width={500}
            height={400}
            className="object-cover w-full h-full"
          />
          <figcaption className="sr-only">{alt}</figcaption>
        </motion.figure>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
