"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  suffix?: string
}

const AnimatedCounter = ({ from, to, duration = 2, delay = 0, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from)
  const controls = useAnimation()

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(from + progress * (to - from)))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    const startAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, delay * 1000))
      animationFrame = requestAnimationFrame(updateCount)
      controls.start({ opacity: 1, y: 0 })
    }

    startAnimation()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [from, to, duration, delay, controls])

  return (
    <motion.span initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.5 }}>
      {count}
      {suffix}
    </motion.span>
  )
}

export default AnimatedCounter
