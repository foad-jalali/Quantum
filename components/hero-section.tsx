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
    <section className={cn("relative w-full overflow-hidden", height)}>
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        priority
      />

      {hasContent && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-center text-white px-4">
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
      )}
    </section>
  );
};

export default HeroSection;
