"use client"

import { cn } from "@/lib/utils"
import React from "react"
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import Link from "next/link"


interface FeatureGridSectionProps {
  title: string
  subtitle: string
  backgroundColor?: string
  textColor?: string
  items: {
    title: string
    description?: string
    image?: string
    href?: string
    icon?: React.ReactNode
    header?: React.ReactNode
  }[]
}


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

export function BentoGridDemo({
  title,
  subtitle,
  backgroundColor = "#fff",
  textColor = "text-black",
  items,
}: FeatureGridSectionProps) {
  return (
    <section style={{ backgroundColor }} className={`${textColor} py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <h3 className="text-lg md:text-xl opacity-80 mb-10">{subtitle}</h3>

        <BentoGrid className="mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "row-span-1",
                i === 8 ? "md:col-span-2" :
                  i === 7 ? "md:col-span-1" :
                    i === 3 ? "md:col-span-3" : ""
              )}
            >
              <Link href={item.href ?? "#"} className="block h-full">
                <BentoGridItem
                  title={item.title}
                  description={item.description ?? ""}
                  header={
                    item.image ? (
                      <div className="relative w-full h-auto overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : item.header ?? (
                      <div className="h-24 w-full bg-gray-100 rounded-xl dark:bg-neutral-900"></div>
                    )
                  }
                  icon={item.icon}
                  className="h-full"
                />
              </Link>
            </div>
          ))}
        </BentoGrid>

      </div>
    </section>
  )
}