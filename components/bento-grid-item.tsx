"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

interface FeatureGridSectionProps {
  title: string;
  subtitle: string;
  backgroundColor?: string;
  textColor?: string;
  items: {
    title: string;
    description?: string;
    image?: string;
    href?: string;
    icon?: React.ReactNode;
    header?: React.ReactNode;
  }[];
}

export function BentoGridDemo({
  title,
  subtitle,
  backgroundColor = "#fff",
  textColor = "text-black",
  items,
}: FeatureGridSectionProps) {
  return (
    <section
      style={{ backgroundColor }}
      className={`${textColor} py-16`}
      aria-labelledby="bento-title"
    >
      <div className="container mx-auto px-4 text-center">
        <header className="mb-10">
          <h2
            id="bento-title"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {title}
          </h2>
          <p className="text-lg md:text-xl opacity-80">{subtitle}</p>
        </header>

        <BentoGrid className="mx-auto">
          {items.map((item, i) => (
            <article
              key={i}
              className={cn(
                "row-span-1",
                i === 8
                  ? "md:col-span-2"
                  : i === 7
                  ? "md:col-span-1"
                  : i === 3
                  ? "md:col-span-3"
                  : ""
              )}
            >
              <BentoGridItem
                title={
                  <Link href={item.href ?? "#"}>
                    <span className="hover:underline">{item.title}</span>
                  </Link>
                }
                description={item.description ?? ""}
                header={
                  item.image ? (
                    <figure className="relative w-full h-auto overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="object-cover w-full h-full"
                      />
                    </figure>
                  ) : (
                    item.header ?? (
                      <div className="h-24 w-full bg-gray-100 rounded-xl dark:bg-neutral-900"></div>
                    )
                  )
                }
                icon={item.icon}
                className="h-full"
              />
            </article>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
