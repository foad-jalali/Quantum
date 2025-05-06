"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  image: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  height?: string;
}

const HeroSection = ({
  image,
  alt = "Hero background",
  title,
  subtitle,
  buttonText,
  buttonLink = "#",
  height = "h-[80vh]",
}: HeroSectionProps) => {
  const hasContent = title || subtitle || buttonText;

  return (
    <section className="relative w-full min-h-[70vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          className="object-cover md:object-cover object-center"
        />
      </div>

      {hasContent && (
        <div className="absolute bottom-0 left-0 w-full z-10 px-4 pb-8 md:pb-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            {title && <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>}
            {subtitle && <p className="text-lg md:text-xl mb-6">{subtitle}</p>}
            {buttonText && (
              <Link
                href={buttonLink}
                className="inline-block bg-amber-500 text-black font-semibold px-6 py-3 rounded hover:bg-amber-600 transition"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      )}
    </section>

  );
};

export default HeroSection;
