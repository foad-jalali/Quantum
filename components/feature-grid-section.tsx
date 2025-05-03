"use client";

import React from "react";
import FeatureGrid from "./ui/feature-grid";

interface FeatureItem {
  title: string;
  image: string;
  href?: string;
}

interface FeatureGridSectionProps {
  title: string;
  subtitle: string;
  items: FeatureItem[];
  backgroundColor?: string;
}

const FeatureGridSection = ({
  title,
  subtitle,
  items,
  backgroundColor = "#048A81",
}: FeatureGridSectionProps) => {
  return (
    <section style={{ backgroundColor }} className="py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <h3 className="text-lg md:text-xl text-white/80 mb-10">{subtitle}</h3>
        <FeatureGrid items={items} cols={{ base: 2, md: 3, lg: 4 }} />
      </div>
    </section>
  );
};

export default FeatureGridSection;
