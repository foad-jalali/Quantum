import React from "react";

interface FeatureGridItem {
  image: string;
  title: string;
  href?: string;
}

interface FeatureGridProps {
  items: FeatureGridItem[];
  cols?: {
    base?: number; // default: 2
    md?: number;
    lg?: number;
  };
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ items, cols = { base: 2, md: 3, lg: 4 } }) => {
  const className = `
    grid 
    grid-cols-${cols.base || 2}
    ${cols.md ? `md:grid-cols-${cols.md}` : ""}
    ${cols.lg ? `lg:grid-cols-${cols.lg}` : ""}
    gap-6
  `;

  return (
    <div className={className}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href || "#"}
          className="block bg-white rounded-lg overflow-hidden text-black hover:scale-105 transition-transform"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full aspect-square object-cover"
          />
          <div className="p-3 font-semibold text-center">{item.title}</div>
        </a>
      ))}
    </div>
  );
};

export default FeatureGrid;
