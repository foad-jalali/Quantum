import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function SimpleHoverCard() {
  const features = [
    { icon: "/icon/1.svg", description: "Military-Grade Equipment Vendors" },
    { icon: "/icon/2.svg", description: "AI/ML & Software Solution Providers" },
    { icon: "/icon/3.svg", description: "IT Hardware Distributors (Dell, HPE, etc.)" },
    { icon: "/icon/4.svg", description: "Airport & Airline Equipment Suppliers" },
    { icon: "/icon/5.svg", description: "Airline OEMs and Component Manufacturers" },
    { icon: "/icon/6.svg", description: "Energy Solution Providers" },
    { icon: "/icon/7.svg", description: "Marine Equipment and Vessel Manufacturers" },
    { icon: "/icon/8.svg", description: "Healthcare Equipment & Medical Tech Developers" },
    { icon: "/icon/9.svg", description: "Sensor and Analytical Instrument Vendors" },
    { icon: "/icon/10.svg", description: "CNC Engineering & Fabrication Partners" },
    { icon: "/icon/11.svg", description: "Automation & Instrumentation Providers" },
    { icon: "/icon/12.svg", description: "Training & Consulting Firms" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} index={index} />
      ))}
    </section>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  index,
}: {
  title?: string;
  description: string;
  icon: string;
  index: number;
}) {
  const itemsPerRow = 4;
  const total = 12;
  const row = Math.floor(index / itemsPerRow);
  const col = index % itemsPerRow;
  const isFirstCol = col === 0;
  const isBottomRow = row < Math.floor((total - 1) / itemsPerRow);

  return (
    <article
      className={cn(
        "flex flex-col py-10 group/feature border-gray-300 dark:border-gray-300",
        "lg:border-r",
        isFirstCol && "lg:border-l",
        isBottomRow && "lg:border-b",
        "relative"
      )}
    >
      {(index < 4 || index >= 8) && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 w-full h-full bg-gradient-to-t from-amber-200 dark:from-amber-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && index < 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 w-full h-full bg-gradient-to-b from-amber-200 dark:from-amber-100 to-transparent pointer-events-none" />
      )}

      <figure className="flex flex-col items-start px-10 gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="mx-auto group-hover:bg-amber-500/20 transition-colors z-10"
        >
          <img src={icon} alt={title || description} className="w-12 h-12" />
        </motion.div>

        {title && (
          <figcaption className="text-lg font-bold text-gray-900 dark:text-neutral-100 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
            <span className="pl-4 group-hover/feature:translate-x-2 transition duration-200 inline-block">
              {title}
            </span>
          </figcaption>
        )}

        <p className="text-sm text-gray-900 dark:text-gray-900">{description}</p>
      </figure>
    </article>
  );
}
