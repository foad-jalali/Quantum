"use client";

import { motion } from "framer-motion";
import React from "react";

interface SimpleCardProps {
  icon?: string;
  title?: string;
  description: string;
  color: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SimpleCard = ({ icon, title, description, color }: SimpleCardProps) => {
  return (
    <motion.div
      className="bg-white p-6 overflow-hidden rounded-[12px] border relative border-white hover:border-amber-500 transition-colors group shadow-lg shadow-black/5"
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <div
        style={{ backgroundColor: color }}
        className="h-[150%] rotate-[-9deg] absolute -left-7 top-0 bg-black w-12"
      ></div>
      <motion.div
        className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src={icon} alt="Feature Icon" className="w-12 h-12" />
      </motion.div>
      <h3 className="font-semibold mb-2 text-center text-gray-900">{title}</h3>
      <p className="text-gray-700 text-sm text-center">{description}</p>
    </motion.div>
  );
};

export default SimpleCard;
