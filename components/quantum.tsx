"use client";
import React from "react";
import { motion } from "framer-motion";


const Quantum = () => {
    return (
        <section className="...">
            <div className="relative w-60 h-60 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 animate-spin-slow blur-sm opacity-30"></div>

                <motion.div
                    className="w-full h-full flex items-center justify-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full text-amber-500 animate-spin"
                    >
                        <defs>
                            <radialGradient id="glow" r="50%" cx="50%" cy="50%">
                                <stop offset="0%" stopColor="#facc15" stopOpacity="1" />
                                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                            </radialGradient>
                        </defs>

                        <circle cx="100" cy="100" r="80" fill="url(#glow)" />
                        <ellipse
                            cx="100"
                            cy="100"
                            rx="80"
                            ry="20"
                            stroke="#facc15"
                            strokeWidth="2"
                            fill="none"
                            className="animate-spin-slower origin-center"
                        />
                        <ellipse
                            cx="100"
                            cy="100"
                            rx="80"
                            ry="20"
                            stroke="#fcd34d"
                            strokeWidth="1"
                            fill="none"
                            transform="rotate(45 100 100)"
                            className="animate-spin-reverse-slower origin-center"
                        />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Quantum;
