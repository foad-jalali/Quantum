"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DivisionIcon from "@/components/division-icon";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

interface DivisionCardProps {
    icon?: string;
    title?: string;
    description?: string;
    content: string;
    services?: string[];
    index: number;
}

const DivisionCard = ({
    icon,
    title,
    description,
    content,
    services = [],
    index,
}: DivisionCardProps) => {
    return (
        <motion.div
            variants={fadeInUp}
            custom={index}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
            <Card className="max-w-md w-full mx-auto bg-white border-gray-100 hover:border-amber-500 transition-colors h-full overflow-hidden group">
                <CardHeader className="pb-2 relative">
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full"></div>
                    {(icon || title) && (
                        <CardTitle className="text-xl text-white flex items-center">
                            {icon && (
                                <div className="mr-2 text-amber-500">
                                    <DivisionIcon type={icon as any} className="w-6 h-6" />
                                </div>
                            )}
                            {title}
                        </CardTitle>
                    )}
                    {description && <CardDescription className="text-[#00204E]">{description}</CardDescription>}
                </CardHeader>

                <CardContent className="flex flex-col items-center justify-center text-center min-h-[200px] px-4">
                    <p className="text-base sm:text-lg text-[#00204E] leading-relaxed max-w-xs mx-auto m-0">
                        {content}
                    </p>
                </CardContent>

            </Card>
        </motion.div>
    );
};

export default DivisionCard;
