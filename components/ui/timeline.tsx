"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl mx-auto text-center">
          What can Quantum do for you?
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-neutral-200 dark:bg-neutral-700 z-0">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center py-12"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-black z-10 flex items-center justify-center border border-neutral-300 dark:border-neutral-700">
              <div className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            </div>

            <div className="mt-8 z-10">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
