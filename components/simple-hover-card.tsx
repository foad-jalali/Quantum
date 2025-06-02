import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function SimpleHoverCard() {
  const features = [
    {
      icon: "/icon/1.svg",
      // title: "Pan-African Vision",
      description: "Military-Grade Equipment Vendors",
    },
    {
      icon: "/icon/2.svg",
      // title: "Innovative Approach",
      description: "AI/ML & Software Solution Providers",
    },
    {
      icon: "/icon/3.svg",
      // title: "Affordable Excellence",
      description: "IT Hardware Distributors (Dell, HPE, etc.)",
    },
    {
      icon: "/icon/4.svg",
      // title: "Future-Focused",
      description:
        "Airport & Airline Equipment Suppliers (ATC, ASMCGS, GSE, Simulators)",
    },
    {
      icon: "/icon/5.svg",
      // title: "Future-Focused",
      description: "Airline OEMs and Component Manufacturers",
    },
    {
      icon: "/icon/6.svg",
      // title: "Future-Focused",
      description: "Energy Solution Providers (Solar, Wind, Battery, UPS)",
    },
    {
      icon: "/icon/7.svg",
      // title: "Future-Focused",
      description: "Marine Equipment and Vessel Manufacturers",
    },
    {
      icon: "/icon/8.svg",
      // title: "Future-Focused",
      description:
        "Healthcare Equipment Manufacturers & Medical Tech Solution Developers",
    },
    {
      icon: "/icon/9.svg",
      // title: "Future-Focused",
      description: "Sensor and Analytical Instrument Vendors",
    },
    {
      icon: "/icon/10.svg",
      // title: "Future-Focused",
      description:
        "Advanced Fabrication & CNC Engineering & Manufacturing Partners",
    },
    {
      icon: "/icon/11.svg",
      // title: "Future-Focused",
      description: "Automation & Instrumentation Providers",
    },
    {
      icon: "/icon/12.svg",
      // title: "Future-Focused",
      description: "Training & Consulting Firms",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title?: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const itemsPerRow = 4;
  const total = 12; // یا features.length
  const row = Math.floor(index / itemsPerRow);
  const col = index % itemsPerRow;
  const isFirstCol = col === 0;
  const isTopRow = row === 0;
  const isBottomRow = row < Math.floor((total - 1) / itemsPerRow); // ردیف‌هایی که زیرشون border می‌گیرن

  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature dark:border-gray-300",
        "lg:border-r",
        isFirstCol && "lg:border-l dark:border-gray-300",
        isBottomRow && "lg:border-b dark:border-gray-300"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-amber-200 dark:from-amber-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && index < 9 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-amber-200 dark:from-amber-100 to-transparent pointer-events-none" />
      )}
      {index >= 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-amber-200 dark:from-amber-100 to-transparent pointer-events-none" />
      )}
      <motion.div
        className="items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors z-10"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src={icon} alt="Feature Icon" className="w-12 h-12" />
      </motion.div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-900 dark:text-gray-900 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
