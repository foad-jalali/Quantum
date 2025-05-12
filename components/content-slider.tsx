"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

interface ContentSliderProps {
  title?: string;
  subtitle?: string;
  items: {
    quote: string;
    name?: string;
    title: string;
    tags: string[];
  }[];
}

const ContentSlider = ({ title, subtitle, items }: ContentSliderProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-gray-600 text-lg mb-8">{subtitle}</p>
        )}

        <InfiniteMovingCards items={items} />
      </div>
    </section>
  );
};

export default ContentSlider;
