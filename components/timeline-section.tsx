import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion, Variants } from "framer-motion";


export function TimelineSection() {
    const rawData = [
        {
            title: "2024",
            text: `<h2>Public Tenders in Canada</h2>
          <h4>🔹 How We Help:</h4>
          <ul>
            <li>Identifying the right government tenders for your business</li>
            <li>Preparing documents, pricing proposals, and required submissions to secure contracts</li>
            <li>Partnering with reliable suppliers to successfully execute projects</li>
          </ul>`,
            image: "/timeline/1.png",
        },
        {
            title: "Early 2023",
            text: `<h2>Sourcing & Procurement</h2>
<h4>🔹How We Help:</h4>
<ul>
  <li>Finding reliable suppliers across various industries</li>
  <li>Negotiating the best prices and purchase terms</li>
  <li>Managing logistics and delivery processes</li>
</ul>
`,
            image: "/timeline/2.png",
        },
        {
            title: "Changelog",
            text: `<h2>Selling & Market Expansion</h2>
<h4>🔹 How We Help:</h4>
<ul>
  <li>Identifying new customers and expanding market reach</li>
  <li>Leveraging Quantum’s extensive network to promote your brand</li>
  <li>Connecting you with large-scale projects that need your products</li>
</ul>
`,
            image: "/timeline/3.png",
        },
    ];
    const slideLeft: Variants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };
    const slideRight: Variants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };
    const data = rawData.map((item, index) => {
        const isEven = index % 2 === 0;

        const textMarginClass = isEven ? "md:mr-[100px]" : "md:ml-[100px]";
        const imgMarginClass = isEven ? "md:ml-[100px]" : "md:mr-[100px]";

        return {
            title: item.title,
            content: (
                <div className="relative flex flex-col md:flex-row justify-center items-start gap-8 w-full">

                    {isEven ? (
                        <>
                            <motion.div
                                className={`flex-shrink-0 w-full md:w-auto ${textMarginClass} flex justify-center items-center`}
                                variants={slideRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="relative w-[350px] h-[350px] bg-neutral-100/60 dark:bg-neutral-800/40 rounded-xl p-6 shadow-sm backdrop-blur-md">
                                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shadow-md">
                                        {index + 1}
                                    </div>
                                    <div
                                        className="pt-8 text-sm leading-loose text-neutral-800 dark:text-neutral-200 overflow-auto h-full text-left"
                                        dangerouslySetInnerHTML={{ __html: item.text }}
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className={`flex-shrink-0 w-full md:w-auto ${imgMarginClass} flex justify-center items-center`}
                                variants={slideLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-sky-400 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </>
                    ) : (
                        <>
                            <motion.div
                                className={`flex-shrink-0 w-full md:w-auto ${imgMarginClass} flex justify-center items-center`}
                                variants={slideLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-sky-400 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className={`flex-shrink-0 w-full md:w-auto ${textMarginClass} flex justify-center items-center`}
                                variants={slideRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="relative w-[350px] h-[350px] bg-neutral-100/60 dark:bg-neutral-800/40 rounded-xl p-6 shadow-sm backdrop-blur-md">
                                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shadow-md">
                                        {index + 1}
                                    </div>
                                    <div
                                        className="pt-8 text-sm leading-loose text-neutral-800 dark:text-neutral-200 overflow-auto h-full text-left"
                                        dangerouslySetInnerHTML={{ __html: item.text }}
                                    />
                                </div>
                            </motion.div>
                        </>
                    )}
                </div>
            ),
        };
    });

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
