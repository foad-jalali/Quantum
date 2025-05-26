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

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
]

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
            <BentoGridItem

              key={i}
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
              className={
                i === 8 ? "md:col-span-2" :
                  i === 7 ? "md:col-span-1" :
                    i === 3 ? "md:col-span-3" : ""
              }

            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}