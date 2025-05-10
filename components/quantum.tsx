"use client";
import React from "react";
import { motion } from "framer-motion";

const Quantum = () => {
    const orbits = [
        { radius: 65, particles: 6, duration: 4 },
        { radius: 45, particles: 4, duration: 6 },
        { radius: 30, particles: 3, duration: 3 },
    ];

    return (
        <section className="py-12">
            <div className="relative w-120 h-120 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 animate-spin-slow blur-sm opacity-30 z-0" />

                <div className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-10 animate-ping z-0" />

                {orbits.map((orbit, idx) => (
                    <div
                        key={`orbit-line-${idx}`}
                        className="absolute border border-amber-300/20 rounded-full z-0"
                        style={{
                            width: `${orbit.radius * 2}px`,
                            height: `${orbit.radius * 2}px`,
                            top: `calc(50% - ${orbit.radius}px)`,
                            left: `calc(50% - ${orbit.radius}px)`,
                        }}
                    />
                ))}

                {orbits.map((orbit, orbitIdx) => (
                    <motion.div
                        key={`orbit-${orbitIdx}`}
                        className="absolute w-full h-full top-0 left-0"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: orbit.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...Array(orbit.particles)].map((_, i) => {
                            const angle = (2 * Math.PI * i) / orbit.particles;
                            const x = orbit.radius * Math.cos(angle);
                            const y = orbit.radius * Math.sin(angle);
                            return (
                                <motion.div
                                    key={i}
                                    animate={{ scale: [1, 1.4, 1] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                        delay: i * 0.2,
                                    }}
                                    className="absolute w-1.5 h-1.5 rounded-full bg-yellow-100 shadow-[0_0_6px_2px_rgba(253,230,138,0.6)]"
                                    style={{
                                        top: `calc(50% + ${y}px - 5px)`,
                                        left: `calc(50% + ${x}px - 5px)`,
                                    }}
                                />
                            );
                        })}
                    </motion.div>
                ))}

                <motion.div
                    className="w-full h-full flex items-center justify-center z-10"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full text-amber-500 animate-spin-slower"
                    >
                        <defs>
                            <radialGradient id="glow" r="50%" cx="50%" cy="50%">
                                <stop offset="0%" stopColor="#facc15" stopOpacity="1" />
                                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                            </radialGradient>
                        </defs>

                        <circle cx="100" cy="100" r="80" fill="url(#glow)" />
                        {[0, 45, 90, 135].map((angle, i) => (
                            <motion.ellipse
                                key={i}
                                cx="100"
                                cy="100"
                                rx="80"
                                ry="20"
                                stroke={i % 2 === 0 ? "#facc15" : "#fcd34d"}
                                strokeWidth={i % 2 === 0 ? 2 : 1}
                                fill="none"
                                transform={`rotate(${angle} 100 100)`}
                                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5 + i,
                                    ease: "linear"
                                }}
                                style={{ transformOrigin: "center" }}
                            />
                        ))}


                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Quantum;
