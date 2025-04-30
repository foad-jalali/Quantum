"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

type ChartData = {
  label: string
  value: number
  color: string
  previousValue?: number
}

type PerformanceChartProps = {
  title: string
  data: ChartData[]
  type: "bar" | "line" | "pie"
  currency?: boolean
  percentage?: boolean
}

const PerformanceChart = ({ title, data, type, currency = false, percentage = false }: PerformanceChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(chartRef, { once: true, amount: 0.3 })
  const [maxValue, setMaxValue] = useState(0)

  useEffect(() => {
    if (data.length > 0) {
      setMaxValue(Math.max(...data.map((item) => item.value)))
    }
  }, [data])

  const formatValue = (value: number) => {
    if (currency) {
      // Format as ZAR currency
      return new Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
        maximumFractionDigits: 0,
      }).format(value)
    } else if (percentage) {
      // Format as percentage
      return `${value}%`
    } else {
      // Format as number with thousand separators
      return new Intl.NumberFormat("en-ZA").format(value)
    }
  }

  const calculateGrowth = (current: number, previous?: number) => {
    if (!previous) return null
    const growth = ((current - previous) / previous) * 100
    return growth.toFixed(1)
  }

  const renderBarChart = () => {
    return (
      <div className="mt-6 space-y-4">
        {data.map((item, index) => {
          const growth = calculateGrowth(item.value, item.previousValue)

          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">{item.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-200">{formatValue(item.value)}</span>
                  {growth && (
                    <span className={`text-xs ${Number(growth) >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {Number(growth) >= 0 ? `+${growth}%` : `${growth}%`}
                    </span>
                  )}
                </div>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${(item.value / maxValue) * 100}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const renderLineChart = () => {
    const chartHeight = 200
    const chartWidth = 100 * data.length

    return (
      <div className="mt-6 overflow-x-auto">
        <svg width={chartWidth} height={chartHeight} className="mx-auto">
          <g>
            {/* Horizontal grid lines */}
            {[0, 1, 2, 3, 4].map((i) => {
              const y = chartHeight - (i * chartHeight) / 4
              return (
                <g key={i}>
                  <line x1="0" y1={y} x2={chartWidth} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="-5" y={y + 5} textAnchor="end" fontSize="12" fill="rgba(255,255,255,0.5)">
                    {formatValue((maxValue * i) / 4)}
                  </text>
                </g>
              )
            })}

            {/* Data points and lines */}
            {data.map((item, index) => {
              const x = (index + 0.5) * (chartWidth / data.length)
              const y = chartHeight - (item.value / maxValue) * chartHeight

              // Only draw line if not the first point
              const prevPoint =
                index > 0
                  ? {
                      x: (index - 0.5) * (chartWidth / data.length),
                      y: chartHeight - (data[index - 1].value / maxValue) * chartHeight,
                    }
                  : null

              return (
                <g key={index}>
                  {prevPoint && (
                    <motion.line
                      x1={prevPoint.x}
                      y1={prevPoint.y}
                      x2={x}
                      y2={y}
                      stroke={item.color}
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  )}

                  <motion.circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill={item.color}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  />

                  <text x={x} y={chartHeight + 20} textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.7)">
                    {item.label}
                  </text>
                </g>
              )
            })}
          </g>
        </svg>
      </div>
    )
  }

  const renderPieChart = () => {
    const size = 200
    const radius = size / 2
    const centerX = size / 2
    const centerY = size / 2

    // Calculate total for percentages
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Calculate segments
    const segments: { color: string; startAngle: number; endAngle: number; value: number; label: string }[] = []
    let currentAngle = 0

    data.forEach((item) => {
      const angle = (item.value / total) * 360
      segments.push({
        color: item.color,
        startAngle: currentAngle,
        endAngle: currentAngle + angle,
        value: item.value,
        label: item.label,
      })
      currentAngle += angle
    })

    // Function to convert angle to radians
    const toRadians = (angle: number) => (angle * Math.PI) / 180

    // Function to calculate point on circle
    const pointOnCircle = (angle: number, radius: number) => {
      return {
        x: centerX + radius * Math.cos(toRadians(angle - 90)),
        y: centerY + radius * Math.sin(toRadians(angle - 90)),
      }
    }

    // Generate SVG path for each segment
    const createArc = (startAngle: number, endAngle: number) => {
      const start = pointOnCircle(startAngle, radius)
      const end = pointOnCircle(endAngle, radius)
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

      return [
        `M ${centerX} ${centerY}`,
        `L ${start.x} ${start.y}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
        "Z",
      ].join(" ")
    }

    return (
      <div className="mt-6 flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size}>
            {segments.map((segment, index) => (
              <motion.path
                key={index}
                d={createArc(segment.startAngle, segment.endAngle)}
                fill={segment.color}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </svg>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }}></div>
              <span className="text-sm text-gray-300">{segment.label}</span>
              <span className="text-sm font-medium text-gray-200">{((segment.value / total) * 100).toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={chartRef} className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-lg font-medium text-white">{title}</h3>

      {type === "bar" && renderBarChart()}
      {type === "line" && renderLineChart()}
      {type === "pie" && renderPieChart()}
    </div>
  )
}

export default PerformanceChart
