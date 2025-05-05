"use client";

import { motion } from "framer-motion";
import React from "react";

interface SimpleCardProps {
  icon?: string;
  title?: string;
  description: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SimpleCard = ({ icon, title, description }: SimpleCardProps) => {
  return (
    <motion.div
      className="bg-gray-200 p-6 rounded-lg border border-gray-200 hover:border-amber-500 transition-colors group"
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="h-16 w-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src={icon} alt="Feature Icon" className="w-8 h-8" />
      </motion.div>
      <h3 className="font-semibold mb-2 text-center text-gray-900">
        {title}
      </h3>
      <p className="text-gray-700 text-sm text-center">{description}</p>
    </motion.div>
  );
};

export default SimpleCard;
