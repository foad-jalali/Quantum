"use client"

import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Calendar, Users, Rocket, Trophy, Lightbulb, Target } from "lucide-react"

const timelineData = [
  {
    id: 1,
    year: "01",
    title: "Public Tender Support in Canada",
    subtitle: "Win more government contracts with expert guidance.",
    description: `How We Help:
  <ul>
    <li>Identifying the right government tenders for your business</li>
    <li>Preparing documents, pricing proposals, and required submissions to secure contracts</li>
    <li>Partnering with reliable suppliers to successfully execute projects</li>
  </ul>`,
    image: "/placeholder.svg?height=300&width=400",
    icon: Lightbulb,
    color: "from-gray-500 to-gray-800",
    stats: "3 Founders",
  },
  {
    id: 2,
    year: "02",
    title: "Strategic Sourcing & Procurement",
    subtitle: "Secure quality suppliers and optimal pricing across industries.",
    description: `How We Help:
  <ul>
    <li>Finding reliable suppliers across various industries</li>
    <li>Negotiating the best prices and purchase terms</li>
    <li>Managing logistics and delivery processes</li>
  </ul>`,
    image: "/placeholder.svg?height=300&width=400",
    icon: Rocket,
    color: "from-gray-500 to-gray-800",
    stats: "10K Users",
  },
  {
    id: 3,
    year: "03",
    title: "Selling & Market Expansion",
    subtitle: "Grow your customer base and enter new markets with confidence.",
    description: `How We Help:
    <li>Identifying new customers and expanding market reach</li>
    <li>Leveraging Quantum’s extensive network to promote your brand</li>
    <li>Connecting you with large-scale projects that need your products</li>
  </ul>`,
    image: "/placeholder.svg?height=300&width=400",
    icon: Users,
    color: "from-gray-500 to-gray-800",
    stats: "50 Team Members",
  },
  {
    id: 4,
    year: "04",
    title: "Vendor Identification & Qualification",
    subtitle: "Find, assess, and onboard the right partners for your projects.",
    description: `How We Help:
  <ul>
    <li>Evaluating supplier capabilities, certifications, and reliability</li>
    <li>Creating a shortlist of verified vendors aligned with your technical and budgetary needs</li>
    <li>Managing the onboarding and compliance processes for selected vendors</li>
  </ul>`,
    image: "/placeholder.svg?height=300&width=400",
    icon: Trophy,
    color: "from-gray-500 to-gray-800",
    stats: "1M+ Users",
  },
  {
    id: 5,
    year: "05",
    title: "Proposal & Bid Management",
    subtitle: "Craft winning proposals that meet all technical and compliance needs.",
    description: `How We Help:
  <ul>
    <li>Crafting compelling technical and financial proposals</li>
    <li>Coordinating multi-partner bid submissions for large contracts</li>
    <li>Providing expert review to maximize scoring and compliance</li>
  </ul>`,
    image: "/placeholder.svg?height=300&width=400",
    icon: Target,
    color: "from-gray-500 to-gray-800",
    stats: "50+ Countries",
  },
]

export default function CreativeTimeline() {
  const [activeCard, setActiveCard] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })

  const backgroundX = useTransform(scrollXProgress, [0, 1], ["0%", "-50%"])

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Header */}
      <div className="relative z-10 text-center py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Journey
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          From a small garage startup to a global phenomenon. This is the story of passion, perseverance, and the power
          of dreams.
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div
        ref={containerRef}
        className="relative overflow-x-auto pb-20 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex flex-col md:flex-row items-center min-w-full md:min-w-max px-4 md:px-8 py-16 relative gap-12">
          {/* Fixed Line based on total width */}
          <div className="
  absolute 
  bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-yellow-500 to-red-500 
  md:top-1/2 md:left-0 md:w-full md:h-1 md:-translate-y-1/2 md:translate-x-0
  top-0 left-1/2 w-1 h-full -translate-x-1/2 
  z-0
" />

          {/* Cards */}
          {timelineData.map((item, index) => (
            <div className="relative z-10">
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                isActive={activeCard === index}
                onActivate={() => setActiveCard(index)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Progress Indicator
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {timelineData.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${activeCard === index ? "bg-white" : "bg-gray-600"}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setActiveCard(index)}
          />
        ))}
      </div> */}
    </div>
  )
}

function TimelineCard({
  item,
  index,
  isActive,
  onActivate,
}: {
  item: (typeof timelineData)[0]
  index: number
  isActive: boolean
  onActivate: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  const Icon = item.icon

  return (
    <motion.div
      ref={cardRef}
      className="relative flex-shrink-0 mx-8"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Timeline Node */}
      {/* <motion.div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} z-20 border-4 border-gray-900`}
        whileHover={{ scale: 1.5 }}
        animate={isActive ? { scale: 1.3 } : { scale: 1 }}
      /> */}

      {/* Card */}
      <motion.div
        className={`relative w-80 bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer border border-gray-900
  ${index % 2 === 0 ? "md:mb-32" : "md:mt-32"} my-8`}
        whileHover={{ scale: 1.05, y: -10 }}
        onClick={onActivate}
        animate={isActive ? { scale: 1.05, y: -10 } : {}}
      >
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60`} />

          {/* Icon Overlay */}
          <motion.div
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          {/* Year Badge */}
          <motion.div
            className="absolute bottom-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            <span className="text-white font-bold text-lg">{item.year}</span>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <motion.h3
            className="text-2xl font-bold text-amber-500 mb-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            {item.title}
          </motion.h3>

          <motion.p
            className={`text-sm font-medium mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {item.subtitle}
          </motion.p>

          <motion.p
            className="text-gray-300 text-sm leading-relaxed mb-4 prose"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.6 }}
            dangerouslySetInnerHTML={{ __html: item.description }}
          >
          </motion.p>

          {/* Stats */}
          <motion.div
            className={`inline-flex items-center px-3 py-1 rounded bg-gradient-to-r ${item.color} text-white text-sm font-medium`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.7, type: "spring" }}
          >
            <Calendar className="w-4 h-4 mr-2" />
            {item.stats}
          </motion.div>
        </div>

        {/* Connecting Line to Node */}
        <motion.div
          className={`absolute ${index % 2 === 0 ? "top-full" : "bottom-full"
            } left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b ${item.color}`}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.8 }}
        />
      </motion.div>
    </motion.div>
  )
}
