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
                    className="block rounded-lg overflow-hidden bg-white text-black hover:scale-105 transition-transform shadow-lg shadow-black/20"
                >
                    <div className="relative w-full aspect-square">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-3 font-semibold text-center">{item.title}</div>
                </a>
            ))}
        </div>
    );
};

export default FeatureGrid;
