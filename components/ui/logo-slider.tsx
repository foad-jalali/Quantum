"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoSliderProps {
  logos: { image: string; alt: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export function LogoSlider({
  logos,
  direction = "left",
  speed = "normal",
  pauseOnHover = false,
  className,
}: LogoSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current!.appendChild(clone);
      });
      setStart(true);
      applySettings();
    }
  }, []);

  const applySettings = () => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");

    const duration =
      speed === "fast" ? "20s" : speed === "slow" ? "60s" : "40s";
    container.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {logos.map((logo, idx) => (
          <li key={idx} className="w-32 h-32 flex items-center justify-center rounded">
            <div className="relative w-24 h-24">
              <Image
                src={logo.image}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          </li>

        ))}
      </ul>
    </div>
  );
}
