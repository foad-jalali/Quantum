"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  image: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({
  image,
  alt = "Hero background",
  title,
  subtitle,
  buttonText,
  buttonLink = "#",
}: HeroSectionProps) => {
  const hasContent = title || subtitle || buttonText;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* تصویر پس‌زمینه */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-[75%_25%] md:object-center"
        />
      </div>

      {/* محتوای متنی */}
      {hasContent && (
        <div className="relative z-10 h-full flex items-end md:items-center justify-center md:justify-start px-4 md:px-24 text-white text-left pb-8 md:pb-0">
          <div className="max-w-3xl w-full text-center md:text-left">
            {/* Title */}
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-md md:text-xl mb-6 text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>

            {/* Button */}
            {buttonText && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href={buttonLink}
                  className="inline-block bg-amber-500 text-black font-semibold px-6 py-3 rounded hover:bg-amber-600 transition"
                >
                  {buttonText}
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
