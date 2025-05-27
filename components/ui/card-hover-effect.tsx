import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        backgroundColor?: string;
        titleColor?: string;
        descriptionColor?: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <a
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-amber-500/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.5 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.5, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card
                        backgroundColor={item.backgroundColor}
                    >
                        <CardTitle textColor={item.titleColor}>
                            {item.title}
                        </CardTitle>
                        <CardDescription textColor={item.descriptionColor}>
                            {item.description}
                        </CardDescription>
                    </Card>

                </a>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
    backgroundColor = "bg-black",
    borderColor = "border-transparent",
}: {
    className?: string;
    children: React.ReactNode;
    backgroundColor?: string;
    borderColor?: string;
}) => {
    return (
        <div
            className={cn(
                `rounded-2xl h-full w-full p-4 overflow-hidden ${backgroundColor} border ${borderColor} group-hover:border-slate-700 relative z-20`,
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
    textColor = "text-zinc-100",
}: {
    className?: string;
    children: React.ReactNode;
    textColor?: string;
}) => {
    return (
        <h4 className={cn(`${textColor} font-bold tracking-wide mt-4`, className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
    textColor = "text-zinc-400",
}: {
    className?: string;
    children: React.ReactNode;
    textColor?: string;
}) => {
    return (
        <p
            className={cn(
                `${textColor} mt-8 tracking-wide leading-relaxed text-sm`,
                className
            )}
        >
            {children}
        </p>
    );
};

