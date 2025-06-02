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
    <section className="py-16 bg-white text-center">
      {(title || subtitle) && (
        <header className="mb-8 px-4 max-w-4xl mx-auto">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 text-lg">{subtitle}</p>
          )}
        </header>
      )}

      <div className="px-4">
        <InfiniteMovingCards items={items} />
      </div>
    </section>
  );
};

export default ContentSlider;
