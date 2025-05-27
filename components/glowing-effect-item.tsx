"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import React from "react";

interface ServiceItem {
    description: string;
    icon?: string;
}

interface GlowingEffectGridProps {
    items: ServiceItem[];
}

export function GlowingEffectDemoSecond({ items }: GlowingEffectGridProps) {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
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
                        title={`Service ${index + 1}`}
                        description={item.description}
                        icon={
                            item.icon ? <div className="h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-md font-bold">
                                {String(index + 1).padStart(2, "0")}
                            </div> : (
                                <span className="h-4 w-4 bg-gray-400 rounded-full inline-block" />
                            )
                        }
                    />
                );
            })}
        </ul>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
                        <div className="space-y-3">
                            {/* <h3 className="pt-0.5 text-xl font-semibold text-black md:text-2xl dark:text-white">
                {title}
              </h3> */}
                            <h2 className="text-sm text-white md:text-base">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
