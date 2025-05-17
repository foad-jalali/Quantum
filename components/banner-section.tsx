"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface BannerSectionProps {
  image: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  height?: string;
}

const BannerSection = ({
  image,
  alt = "Hero background",
  title,
  subtitle,
  buttonText,
  buttonLink = "#",
  height = "h-[80vh]",
}: BannerSectionProps) => {
  const hasContent = title || subtitle || buttonText;

  return (
    <section
      className="relative w-full h-[50vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-sky-900/40 z-0" />

      <div className="relative z-10 h-full flex items-center justify-center px-4 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {title && (
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          )}
          {subtitle && <p className="text-lg md:text-xl mb-6">{subtitle}</p>}
          {buttonText && (
            <Link
              href={buttonLink}
              className="inline-block bg-amber-500 text-black font-semibold px-6 py-3 rounded hover:bg-amber-600 transition"
            >
              {buttonText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
