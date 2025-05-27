"use client";

import { HoverEffect } from "./ui/card-hover-effect";

type Project = {
    title: string;
    description: string;
    link: string;
    backgroundColor?: string;
    titleColor?: string;
    descriptionColor?: string;
};


type Props = {
    items: Project[];
};

export function CardHoverEffectDemo({ items }: Props) {
    return (
        <div className="max-w-7xl mx-auto px-8">
            <HoverEffect items={items} />
        </div>
    );
}
