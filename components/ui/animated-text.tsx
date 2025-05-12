"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, delayOffset = 0 }) => {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: i * 0.05 + delayOffset,
                ease: "easeOut",
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
