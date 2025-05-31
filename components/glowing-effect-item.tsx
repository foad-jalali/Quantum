"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ServiceItem {
    description: string;
    icon?: string;
    borderColor: string;
}

interface GlowingEffectGridProps {
    items: ServiceItem[];
}

export function GlowingEffectDemoSecond({ items }: GlowingEffectGridProps) {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[50rem] xl:grid-rows-2">
            {items.map((item, index) => {
                const gridAreas = [
                    "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
                    "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
                    "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
                    "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
                    "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
                ];
                const area = gridAreas[index % gridAreas.length];

                return (
                    <GridItem
                        key={index}
                        area={area}
                        description={item.description}
                        icon={item.icon}
                        borderColor={item.borderColor}
                    />
                );
            })}
        </ul>
    );
}

interface GridItemProps {
    area: string;
    borderColor: string;
    icon?: string;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description, borderColor }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div
                className={cn(
                    "relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3",
                    borderColor ? `border-${borderColor}` : "border"
                )}
            >
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                    {icon && (
                        <Image
                            src={icon}
                            alt={title}
                            fill
                            className="object-cover z-0"
                        />
                    )}

                    <div className="absolute inset-0 z-10 bg-black/50 p-6 flex flex-col justify-end">
                        <p className="text-md text-white font-semibold">{description}</p>
                    </div>
                </div>
            </div>
        </li>

    );
};

