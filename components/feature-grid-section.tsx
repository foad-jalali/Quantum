"use client";

import React from "react";
import FeatureGrid from "./ui/feature-grid";

interface FeatureItem {
  title: string;
  image: string;
  href?: string;
  subtitle?: string;
}

interface FeatureGridSectionProps {
  title: string;
  subtitle: string;
  items: FeatureItem[];
  backgroundColor?: string;
  textColor?: string;
  lg?: number;
}

const FeatureGridSection = ({
  title,
  subtitle,
  items,
  backgroundColor = "transparent",
  textColor = "text-white",
  lg = 4,
}: FeatureGridSectionProps) => {
  return (
    <section
      style={{ backgroundColor }}
      className={`py-16 ${textColor}`}
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4 text-center">
        <header className="mb-10">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl opacity-80">{subtitle}</p>
        </header>
        <FeatureGrid items={items} cols={{ base: 1, md: 3, lg }} />
      </div>
    </section>
  );
};

export default FeatureGridSection;
