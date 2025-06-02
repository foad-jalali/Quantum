"use client";

import React from "react";

interface FeatureGridItem {
  image: string;
  title: string;
  subtitle?: string;
  href?: string;
}

interface FeatureGridProps {
  items: FeatureGridItem[];
  cols?: {
    base?: number;
    md?: number;
    lg?: number;
  };
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  items,
  cols = { base: 2, md: 3, lg: 4 },
}) => {
  const baseCols = cols.base || 2;
  const mdCols = cols.md ? `md:grid-cols-${cols.md}` : "";
  const lgCols = cols.lg ? `lg:grid-cols-${cols.lg}` : "";

  return (
    <div className={`grid grid-cols-${baseCols} ${mdCols} ${lgCols} gap-6`}>
      {items.map((item, index) => (
        <article
          key={index}
          className="rounded-lg overflow-hidden bg-white text-black shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 hover:border hover:border-amber-500 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-duration="600"
        >
          <a href={item.href || "#"} aria-label={item.title} className="block">
            <figure className="w-full aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="p-4 text-left">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              {item.subtitle && <p className="text-sm mt-1">{item.subtitle}</p>}
            </div>
          </a>
        </article>
      ))}
    </div>
  );
};

export default FeatureGrid;
