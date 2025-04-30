"use client"

import { motion } from "framer-motion"

type DivisionIconProps = {
  type: "tech" | "audio" | "publishing" | "forex" | "capital" | "consulting"
  className?: string
}

const DivisionIcon = ({ type, className = "w-6 h-6" }: DivisionIconProps) => {
  // SVG paths and animations for each division type
  const icons = {
    tech: {
      viewBox: "0 0 24 24",
      path: (
        <>
          <motion.path
            d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M8 10l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
        </>
      ),
    },
    audio: {
      viewBox: "0 0 24 24",
      path: (
        <>
          <motion.path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M8 7v10"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M16 7v10"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M4 10v4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M20 10v4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
        </>
      ),
    },
    publishing: {
      viewBox: "0 0 24 24",
      path: (
        <>
          <motion.path
            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M8 7h8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M8 11h8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M8 15h4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
        </>
      ),
    },
    forex: {
      viewBox: "0 0 24 24",
      path: (
        <>
          <motion.path
            d="M3 3v18h18"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M7 14l3-3 4 4 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M16 9h3v3"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
        </>
      ),
    },
    capital: {
      viewBox: "0 0 24 24",
      path: (
        <>
          <motion.path
            d="M3 21h18"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.rect
            x="5"
            y="12"
            width="4"
            height="9"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ height: 0, y: 21 }}
            animate={{ height: 9, y: 12 }}
            transition={{ duration: 1, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.rect
            x="10"
            y="8"
            width="4"
            height="13"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ height: 0, y: 21 }}
            animate={{ height: 13, y: 8 }}
            transition={{ duration: 1, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.rect
            x="15"
            y="4"
            width="4"
            height="17"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ height: 0, y: 21 }}
            animate={{ height: 17, y: 4 }}
            transition={{ duration: 1, delay: 0.9, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
        </>
      ),
    },
    consulting: {
      viewBox: "0 0 24 24",
      path: (
        <>
          <motion.circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M9 3.6a9 9 0 0 1 6 0"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
          <motion.path
            d="M9 20.4a9 9 0 0 0 6 0"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          />
        </>
      ),
    },
  }

  const selectedIcon = icons[type]

  return (
    <svg viewBox={selectedIcon.viewBox} className={`text-amber-500 ${className}`} xmlns="http://www.w3.org/2000/svg">
      {selectedIcon.path}
    </svg>
  )
}

export default DivisionIcon
