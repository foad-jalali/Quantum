import clsx from "clsx";

interface SectionHeadingProps {
    title: string
    subtitle?: string
    centered?: boolean
    badge?: string
    textColor?: string
}

const SectionHeading = ({
    title,
    subtitle,
    centered = true,
    badge,
    textColor = "#00204E",
}: SectionHeadingProps) => {
    return (
        <div
            className={clsx("mb-12 animate-fade-in", centered ? "text-center mt-16" : "text-left")}
            data-aos="fade-up"
            data-aos-duration="600"
        >
            {badge && (
                <div
                    className={clsx(
                        "inline-block bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-full px-3 py-1 text-sm mb-4",
                        centered && "mx-auto"
                    )}
                >
                    {badge}
                </div>
            )}
            <h2
                className={`text-3xl md:text-4xl font-bold mb-4`}
                style={{ color: textColor }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={clsx(centered && "max-w-2xl mx-auto")}
                    style={{ color: textColor }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};
export default SectionHeading
