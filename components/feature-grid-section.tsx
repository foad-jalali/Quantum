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
    textColor?: string;
    lg?: number;
}
const FeatureGridSection = ({
    title,
    subtitle,
    items,
    backgroundColor,
    textColor = "text-white", // ← پیش‌فرض سفید
    lg = 4,
  }: FeatureGridSectionProps) => {
    return (
      <section style={{ backgroundColor }} className={`${textColor} py-16`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <h3 className="text-lg md:text-xl text-opacity-80 mb-10">{subtitle}</h3>
          <FeatureGrid items={items} cols={{ base: 2, md: 3, lg }} />
        </div>
      </section>
    );
  };


export default FeatureGridSection;
