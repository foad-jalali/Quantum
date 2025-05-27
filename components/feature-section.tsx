"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  textColor,
}: FeatureSectionProps) => {
  return (
    <section className="py-10 overflow-x-hidden " style={{ backgroundColor }}>
      <div
        className={cn(
          "container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-6",
          reverse && "md:flex-row-reverse"
        )}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={reverse ? fadeLeft : fadeRight}
          className="w-full md:w-1/2 md:ml-[60px]"
        >
          <div
            className={cn(
              "prose prose-lg max-w-none mb-6 font-semibold",
              `text-[${textColor}]`,
              `prose-headings:text-[${textColor}]`
            )}
          >
            {description}
          </div>

          {buttonText && buttonLink && (
            <Link
              href={buttonLink}
              className="inline-block px-6 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-600 transition"
            >
              {buttonText}
            </Link>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={reverse ? fadeRight : fadeLeft}
          className="relative w-full max-w-md h-auto rounded-[10px] overflow-hidden shadow-md mx-auto"
        >
          <Image
            src={image}
            alt={alt}
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
