"use client"

import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Calendar, Users, Rocket, Trophy, Lightbulb, Target } from "lucide-react"
import Image from "next/image"

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
    image: "/home/1.webp",
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
    image: "/home/2.webp",
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
    <ul>
    <li>Identifying new customers and expanding market reach</li>
    <li>Leveraging Quantum’s extensive network to promote your brand</li>
    <li>Connecting you with large-scale projects that need your products</li>
  </ul>`,
    image: "/home/3.webp",
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
    image: "/home/4.webp",
    icon: Trophy,
    color: "from-gray-500 to-gray-800",
    stats: "1M+ Users",
  }
  // {
  //   id: 5,
  //   year: "05",
  //   title: "Proposal & Bid Management",
  //   subtitle: "Craft winning proposals that meet all technical and compliance needs.",
  //   description: `How We Help:
  // <ul>
  //   <li>Crafting compelling technical and financial proposals</li>
  //   <li>Coordinating multi-partner bid submissions for large contracts</li>
  //   <li>Providing expert review to maximize scoring and compliance</li>
  // </ul>`,
  //   image: "/home/5.webp",
  //   icon: Target,
  //   color: "from-gray-500 to-gray-800",
  //   stats: "50+ Countries",
  // },
]

export default function CreativeTimeline() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }
  const [activeCard, setActiveCard] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })

  const backgroundX = useTransform(scrollXProgress, [0, 1], ["0%", "-50%"])

  return (
    <div className="min-h-screen bg-black">
      <motion.div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </motion.div>

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

      <div className="relative bg-black py-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="hidden md:block w-[calc(100%-64px)] h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-red-500" />
          <div className="block md:hidden w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-red-500" />
        </div>

        <div className="relative z-10 mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center md:gap-4 xl:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {timelineData.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                isActive={activeCard === index}
                onActivate={() => setActiveCard(index)}
              />
            ))}
          </motion.div>

          <div className="flex flex-col items-center gap-16 md:hidden">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative">
                <TimelineCard
                  item={item}
                  index={index}
                  isActive={activeCard === index}
                  onActivate={() => setActiveCard(index)}
                />
                {index !== timelineData.length - 1 && (
                  <div className="absolute left-1/2 top-full h-10 w-1 bg-gradient-to-b from-purple-500 to-pink-500 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
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
  const Icon = item.icon
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div
        className={`relative w-80 bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer border border-gray-900
  ${index % 2 === 0 ? "md:mb-32" : "md:mt-32"} my-8`}
        whileHover={{ scale: 1.01, y: -10 }}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            width={320}
            height={192}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <motion.div
            className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div
            className="absolute bottom-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            <span className="text-white font-bold text-lg">{item.year}</span>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-amber-500 mb-2">{item.title}</h3>
          <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">
            {item.subtitle}
          </p>
          <p
            className="text-gray-300 text-sm leading-relaxed mb-4 prose"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></p>
        </div>

        <motion.div
          className={`absolute ${index % 2 === 0 ? "top-full" : "bottom-full"} left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b ${item.color}`}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.8 }}
        />
      </motion.div>
    </motion.div>
  )
}