"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
    image: string;
    alt: string;
    description: React.ReactNode;
    buttonText?: string;
    buttonLink?: string;
    reverse?: boolean;
    backgroundColor?: string;
}

const FeatureSection = ({
    image,
    alt,
    description,
    buttonText,
    buttonLink,
    reverse = false,
    backgroundColor = "transparent",
}: FeatureSectionProps) => {
    return (
        <section className="py-10" style={{ backgroundColor }}>
            <div
                className={cn(
                    "container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-6",
                    reverse && "md:flex-row-reverse"
                )}
            >

                <div className="w-full md:w-1/2 md:ml-[60px]">
                    <div className="prose prose-lg text-white prose-headings:text-white max-w-none mb-6 font-semibold">
                        {description}
                    </div>


                    {buttonText && buttonLink && (
                        <Link
                            href={buttonLink}
                            className="inline-block px-6 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-600 transition"
                        >
                            {buttonText}
                        </Link>
                    )}
                </div>
                <div className="relative w-full max-w-md h-auto rounded-[10px] overflow-hidden shadow-md mx-auto">
                    <Image
                        src={image}
                        alt={alt}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>

    );
};

export default FeatureSection;
