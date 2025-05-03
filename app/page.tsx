"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Youtube,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView, useAnimation } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";
import ParticleBackground from "@/components/particle-background";
import AnimatedCounter from "@/components/animated-counter";
import DivisionIcon from "@/components/division-icon";
import PerformanceChart from "@/components/performance-chart";
import InfoSlider from "@/components/info-slider";
import PartnersSection from "@/components/partners";
import FeatureGridSection from "@/components/feature-grid-section";

export default function Home() {
  const isMobile = useMobile();
  const controls = useAnimation();
  const aboutRef = useRef(null);
  const divisionsRef = useRef(null);
  const expertiseRef = useRef(null);
  const whyUsRef = useRef(null);
  const contactRef = useRef(null);
  const performanceRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const divisionsInView = useInView(divisionsRef, { once: true, amount: 0.1 });
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.3 });
  const whyUsInView = useInView(whyUsRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });
  const performanceInView = useInView(performanceRef, {
    once: true,
    amount: 0.3,
  });
  const services = [
    { title: "End-to-End Procurement & Sourcing", image: "/services/1.png", href: "/services/ai" },
    { title: "Tender Management & Consortium Building", image: "/services/2.png", href: "/services/ai" },
    { title: "Vendor Identification & Matchmaking", image: "/services/3.png", href: "/services/ai" },
    { title: "Project Management & Execution Oversight", image: "/services/4.png", href: "/services/ai" },
    { title: "Tender Preparation & Bid Management", image: "/services/5.png", href: "/services/ai" },
    { title: "IT Infrastructure Deployment & Software Integration", image: "/services/6.png", href: "/services/ai" },
    { title: "Custom Software & Embedded AI Solutions", image: "/services/7.png", href: "/services/ai" },
    { title: "Custom Fabrication & Product Customization", image: "/services/8.png", href: "/services/ai" },
  ];
  

  useEffect(() => {
    if (aboutInView) {
      controls.start("visible");
    }
  }, [aboutInView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-amber-50 text-gray-800 overflow-hidden">
      {/* Navigation */}
      {/* <motion.header
        className="border-b border-amber-100 sticky top-0 z-50 backdrop-blur-md bg-amber-50/80"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 flex items-center justify-center text-black font-bold relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg viewBox="0 0 24 24" className="w-6 h-6 relative z-10">
                  <path
                    d="M12,3 L19,7 L19,17 L12,21 L5,17 L5,7 Z"
                    fill="rgba(0, 0, 0, 0.8)"
                  />
                  <circle cx="12" cy="12" r="2" fill="rgba(0, 0, 0, 1)" />
                </svg>
              </div>
              <span className="text-xl font-bold text-amber-500">
                Chiloane Holdings
              </span>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {["About", "Divisions", "Performance", "Why Us", "Contact"].map(
                (item, i) => (
                  <motion.a
                    key={i}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-700 hover:text-amber-600 transition-colors relative"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                  >
                    {item}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                )
              )}
            </nav>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header> */}

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden min-h-[90vh] flex items-center">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-radial from-amber-100/50 to-transparent opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1
                className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.span
                  className="text-amber-500 inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Chiloane
                </motion.span>{" "}
                Holdings
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Empowering the Digital, Financial & Creative Economy of Africa
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                    <span className="relative z-10">Explore Our Divisions</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-amber-500 text-amber-500 hover:bg-amber-500/10 group"
                  >
                    <span>Contact Us</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:text-amber-400" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            >
              <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-700/10 backdrop-blur-sm flex items-center justify-center animate-pulse-slow"></div>
                <motion.div
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-500/10 to-amber-700/5 backdrop-blur-md"
                  animate={{
                    boxShadow: [
                      "0 0 20px 0px rgba(245, 158, 11, 0.3)",
                      "0 0 60px 10px rgba(245, 158, 11, 0.2)",
                      "0 0 20px 0px rgba(245, 158, 11, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="relative w-48 h-48">
                    {/* Abstract Logo */}
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <motion.path
                        d="M100,20 L160,50 L160,150 L100,180 L40,150 L40,50 Z"
                        fill="none"
                        stroke="rgba(245, 158, 11, 0.8)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                      <motion.path
                        d="M100,40 L140,60 L140,140 L100,160 L60,140 L60,60 Z"
                        fill="none"
                        stroke="rgba(245, 158, 11, 0.6)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 1.3 }}
                      />
                      <motion.path
                        d="M100,60 L120,70 L120,130 L100,140 L80,130 L80,70 Z"
                        fill="rgba(245, 158, 11, 0.3)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.6 }}
                      />
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="10"
                        fill="rgba(245, 158, 11, 1)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                      />
                      <motion.path
                        d="M40,50 L100,100 L160,50"
                        fill="none"
                        stroke="rgba(245, 158, 11, 0.4)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2.2 }}
                      />
                      <motion.path
                        d="M40,150 L100,100 L160,150"
                        fill="none"
                        stroke="rgba(245, 158, 11, 0.4)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2.4 }}
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16 bg-amber-50" id="about" ref={aboutRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tight mb-4"
              variants={fadeIn}
            >
              <motion.span
                className="text-amber-500 inline-block"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 5,
                }}
              >
                🧭
              </motion.span>{" "}
              About Us
            </motion.h2>
            <motion.p
              className="text-gray-700 text-lg mb-6 leading-relaxed"
              variants={fadeIn}
            >
              Chiloane Holdings is a South African-based, youth-led holding
              company investing in the future of business, technology, finance,
              and culture. We develop and manage a dynamic portfolio of
              innovative ventures that empower individuals and businesses to
              thrive.
            </motion.p>
            <motion.p
              className="text-gray-700 text-lg mb-8 leading-relaxed"
              variants={fadeIn}
            >
              From software to soulful soundscapes, from trading floors to
              creative publishing—we are shaping the next generation of African
              enterprise.
            </motion.p>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mt-8"
              variants={staggerContainer}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
            >
              {[
                { value: 6, label: "Divisions" },
                { value: 20, label: "Projects" },
                { value: 100, label: "Satisfaction" },
                { value: 24, label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={scaleUp}
                >
                  <div className="text-4xl font-bold text-amber-500">
                    <AnimatedCounter
                      from={0}
                      to={stat.value}
                      duration={2}
                      delay={0.5 + index * 0.1}
                      suffix={
                        stat.label === "Satisfaction"
                          ? "%"
                          : stat.label === "Support"
                            ? "/7"
                            : "+"
                      }
                    />
                  </div>
                  <div className="text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section> */}
      <PartnersSection />
      <FeatureGridSection
        title="Our Core Services"
        subtitle="Tailored solutions for complex projects"
        items={services}
      />
      {/* Divisions Section */}
      <section className="py-16 bg-amber-50" id="divisions" ref={divisionsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              divisionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-block text-amber-500"
              animate={{
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            >
              <svg viewBox="0 0 24 24" className="inline-block h-8 w-8">
                <motion.path
                  d="M4 4h6v6H4V4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 5,
                  }}
                />
                <motion.path
                  d="M14 4h6v6h-6V4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 5,
                  }}
                />
                <motion.path
                  d="M4 14h6v6H4v-6z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 5,
                  }}
                />
                <motion.path
                  d="M14 14h6v6h-6v-6z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.9,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 5,
                  }}
                />
              </svg>
            </motion.div>{" "}
            Our Divisions
          </motion.h2>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate={divisionsInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: "tech",
                title: "Khoding Technologies",
                description: "Smart Tech for Smart Living",
                content:
                  "A technology hub that builds real-world digital solutions, including mobile apps, smart tools, and next-gen platforms. We believe in solving problems through functionality, simplicity, and speed.",
                services: [
                  "Web & Mobile App Development",
                  "Software Engineering & Tool Creation",
                  "Platform Design",
                  "UI/UX Strategy",
                ],
              },
              {
                icon: "audio",
                title: "Audiolab",
                description: "Sound. Soul. Frequency.",
                content:
                  "A music production and sound design studio producing high-quality house, soulful, and Afro-inspired music. Perfect for DJs, vocalists, producers, and creatives.",
                services: [
                  "Music Production & Remixes",
                  "Professional Mixing & Mastering",
                  "Vocal Processing & Audio Engineering",
                  "Sound Branding",
                ],
              },
              {
                icon: "publishing",
                title: "Afrimu Publishing",
                description: "Publish. Promote. Perform.",
                content:
                  "Combining traditional publishing with modern music and content marketing strategies to amplify African voices, authors, and artists.",
                services: [
                  "Book Publishing & eBook Development",
                  "Artist Branding & Digital Marketing",
                  "Social Media Content Strategy",
                  "Content Writing & Distribution Support",
                ],
              },
              {
                icon: "forex",
                title: "Trading101 FX",
                description: "Trade Smarter, Live Freer",
                content:
                  "Our forex and crypto arm focuses on high-precision trading tools, mentorship, and automated systems for consistent performance in volatile markets.",
                services: [
                  "Forex & Crypto Strategy (Smart Money Concepts)",
                  "Expert Advisor (EA) Development for MT4/MT5",
                  "Market Mentorship & Analysis",
                  "Trading Content & Education",
                ],
              },
              {
                icon: "capital",
                title: "Trading101 Capital",
                description: "Build Wealth. Think Long-Term.",
                content:
                  "Focused on strategic investments in property and equities, Trading101 Capital supports individuals and entities looking to grow wealth sustainably.",
                services: [
                  "Share & Property Investment",
                  "Portfolio Strategy & Management",
                  "Investment Research & Reports",
                  "Passive Income Guidance",
                ],
              },
              {
                icon: "consulting",
                title: "VisionSpark Consulting",
                description: "Ignite Your Business Potential",
                content:
                  "VisionSpark is our premium business consulting agency helping startups, creatives, and enterprises grow through strategic thinking, data-backed insights, and future-focused development.",
                services: [
                  "Business & Brand Strategy",
                  "Market Research & Competitor Analysis",
                  "Process Optimization",
                  "Startup Support & Business Growth Planning",
                ],
              },
            ].map((division, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="bg-gray-50 border-gray-200 hover:border-amber-500 transition-colors h-full overflow-hidden group">
                  <CardHeader className="pb-2 relative">
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full"></div>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <div className="mr-2 text-amber-500">
                        <DivisionIcon
                          type={division.icon as any}
                          className="w-6 h-6"
                        />
                      </div>
                      {division.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {division.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">
                      {division.content}
                    </p>
                    <ul className="text-sm space-y-2 text-gray-700">
                      {division.services.map((service, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.1 * i + 0.2, duration: 0.3 }}
                            viewport={{ once: true }}
                          ></motion.span>
                          {service}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      <section
        className="py-16 bg-amber-50"
        id="performance"
        ref={performanceRef}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              performanceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-amber-500 inline-block"
              animate={{
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            >
              📊
            </motion.span>{" "}
            Future Projections
          </motion.h2>

          <motion.div
            className="grid gap-8 md:grid-cols-2 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={performanceInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp}>
              <PerformanceChart
                title="Revenue Projections (ZAR)"
                type="bar"
                currency={true}
                data={[
                  {
                    label: "2024",
                    value: 2500000,
                    color: "rgba(245, 158, 11, 0.8)",
                  },
                  {
                    label: "2025",
                    value: 5800000,
                    color: "rgba(245, 158, 11, 0.8)",
                  },
                  {
                    label: "2026",
                    value: 9500000,
                    color: "rgba(245, 158, 11, 0.8)",
                  },
                  {
                    label: "2027",
                    value: 15000000,
                    color: "rgba(245, 158, 11, 0.7)",
                  },
                  {
                    label: "2028",
                    value: 22000000,
                    color: "rgba(245, 158, 11, 0.6)",
                  },
                ]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <PerformanceChart
                title="Projected Division Growth"
                type="pie"
                data={[
                  {
                    label: "Khoding Technologies",
                    value: 35,
                    color: "rgba(245, 158, 11, 0.9)",
                  },
                  {
                    label: "Trading101 FX",
                    value: 25,
                    color: "rgba(245, 158, 11, 0.7)",
                  },
                  {
                    label: "Audiolab",
                    value: 15,
                    color: "rgba(245, 158, 11, 0.5)",
                  },
                  {
                    label: "Trading101 Capital",
                    value: 12,
                    color: "rgba(245, 158, 11, 0.4)",
                  },
                  {
                    label: "VisionSpark",
                    value: 8,
                    color: "rgba(245, 158, 11, 0.3)",
                  },
                  {
                    label: "Afrimu Publishing",
                    value: 5,
                    color: "rgba(245, 158, 11, 0.2)",
                  },
                ]}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate={performanceInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-amber-500" />,
                title: "Projected Growth",
                value: "45%",
                description: "Annual growth target across all divisions",
              },
              {
                icon: <Users className="h-8 w-8 text-amber-500" />,
                title: "Target Client Base",
                value: "200+",
                description: "Clients across South Africa by end of 2025",
              },
              {
                icon: <Target className="h-8 w-8 text-amber-500" />,
                title: "5-Year Target",
                value: "R22M",
                description: "Projected annual revenue by 2028",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 p-6 rounded-lg border border-gray-200 hover:border-amber-500/50 transition-all"
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1)",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                  >
                    {stat.icon}
                  </motion.div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {stat.title}
                  </h3>
                  <div className="mt-2 text-3xl font-bold text-amber-500">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Info Slider */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-amber-500 inline-block"
              animate={{
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            >
              ✨
            </motion.span>{" "}
            Our Story
          </motion.h2>

          <InfoSlider
            slides={[
              {
                title: "Our Beginning",
                content:
                  "Chiloane Holdings was founded in 2023 with a vision to create a dynamic ecosystem of businesses that empower the digital, financial, and creative economy of Africa. Starting with just two divisions, we've rapidly expanded to six specialized business units.",
                color: "#f59e0b",
              },
              {
                title: "Our Mission",
                content:
                  "We aim to be the leading youth-led holding company in Africa, creating innovative solutions that address real-world challenges while building sustainable wealth and opportunities for the next generation of African entrepreneurs and creatives.",
                color: "#f59e0b",
              },
              {
                title: "Our Approach",
                content:
                  "We believe in the power of multidisciplinary thinking. By combining expertise across technology, finance, media, and consulting, we create unique synergies that allow our divisions to thrive independently while benefiting from shared resources and knowledge.",
                color: "#f59e0b",
              },
              {
                title: "Our Future",
                content:
                  "Looking ahead, we're focused on strategic expansion across the African continent, forming key partnerships with industry leaders, and investing in emerging technologies that will shape the future of business and creativity in Africa.",
                color: "#f59e0b",
              },
              {
                title: "Join Our Journey",
                content:
                  "Whether you're a potential client, partner, or team member, we invite you to be part of our growth story. Together, we can build innovative solutions that drive economic empowerment and creative excellence across Africa.",
                color: "#f59e0b",
              },
            ]}
          />
        </div>
      </section>

      {/* Skills/Expertise Section */}
      <section className="py-16 bg-amber-50" ref={expertiseRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-amber-500 inline-block"
              animate={{
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            >
              💪
            </motion.span>{" "}
            Our Expertise
          </motion.h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              {[
                { skill: "Technology & Development", percentage: 95 },
                { skill: "Financial Markets", percentage: 92 },
                { skill: "Music & Audio Production", percentage: 98 },
                { skill: "Publishing & Content", percentage: 90 },
                { skill: "Business Consulting", percentage: 94 },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    expertiseInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{skill.skill}</span>
                    <span className="text-amber-500">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 bg-amber-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={
                        expertiseInView
                          ? { width: `${skill.percentage}%` }
                          : { width: "0%" }
                      }
                      transition={{
                        duration: 1,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut",
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="space-y-6"
              variants={slideInRight}
              initial="hidden"
              animate={expertiseInView ? "visible" : "hidden"}
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                Why We Excel
              </h3>
              <p className="text-gray-700">
                Our multidisciplinary approach allows us to bring diverse
                perspectives to every project. We combine technical expertise
                with creative thinking to deliver solutions that not only meet
                but exceed expectations.
              </p>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate={expertiseInView ? "visible" : "hidden"}
              >
                {[
                  { value: "10+", label: "Years Combined Experience" },
                  { value: "50+", label: "Satisfied Clients" },
                  { value: "6", label: "Specialized Divisions" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-200 p-4 rounded-lg"
                    variants={scaleUp}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-amber-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-700">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-amber-50" id="why-us" ref={whyUsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-amber-500 inline-block"
              animate={{
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            >
              🌟
            </motion.span>{" "}
            Why Choose Us?
          </motion.h2>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: "🌍",
                title: "Pan-African Vision",
                description:
                  "Youth-led with a bold, pan-African vision that drives innovation and growth across the continent.",
              },
              {
                icon: "💡",
                title: "Innovative Approach",
                description:
                  "We combine creativity with technical expertise to deliver cutting-edge solutions across all our divisions.",
              },
              {
                icon: "⚡",
                title: "Affordable Excellence",
                description:
                  "Premium quality services at competitive rates, making excellence accessible to businesses of all sizes.",
              },
              {
                icon: "🔮",
                title: "Future-Focused",
                description:
                  "We don't just solve today's problems—we anticipate tomorrow's opportunities and prepare you to capitalize on them.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 p-6 rounded-lg border border-gray-200 hover:border-amber-500 transition-colors group"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.span
                    className="text-amber-500 text-xl"
                    animate={
                      whyUsInView
                        ? {
                          scale: [1, 1.2, 1],
                        }
                        : {}
                    }
                    transition={{
                      duration: 1,
                      delay: index * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 5,
                    }}
                  >
                    {feature.icon}
                  </motion.span>
                </motion.div>
                <h3 className="font-semibold mb-2 text-center text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-amber-50" id="contact" ref={contactRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                <motion.span
                  className="text-amber-500 inline-block"
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 5,
                  }}
                >
                  💬
                </motion.span>{" "}
                Ready to Elevate?
              </h2>
              <p className="text-gray-700 mb-8">
                Whether you're a creator, investor, startup, or
                entrepreneur—Chiloane Holdings is your growth partner.
              </p>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    contactInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <MapPin className="h-5 w-5 mr-3 text-amber-500" />
                  <span className="text-gray-700">
                    Turfloop, Polokwane, South Africa
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    contactInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Mail className="h-5 w-5 mr-3 text-amber-500" />
                  <span className="text-gray-700">audiolab@afrimail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    contactInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Phone className="h-5 w-5 mr-3 text-amber-500" />
                  <span className="text-gray-700">0680813261</span>
                </motion.div>
                <motion.div
                  className="flex space-x-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {[Linkedin, Instagram, Youtube].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-gray-700 hover:text-amber-600 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-200 p-6 rounded-lg"
              variants={fadeInUp}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    className="space-y-2"
                    variants={fadeIn}
                    transition={{ delay: 0.1 }}
                  >
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-800 focus:border-amber-600 focus:ring-amber-600 transition-colors"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-800 focus:border-amber-600 focus:ring-amber-600 transition-colors"
                      placeholder="Your email"
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="space-y-2"
                  variants={fadeIn}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-800 focus:border-amber-600 focus:ring-amber-600 transition-colors"
                    placeholder="Subject"
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  variants={fadeIn}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-800 focus:border-amber-600 focus:ring-amber-600 min-h-[120px] transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                    <span className="relative z-10">Let's Work Together</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-amber-50 text-gray-700">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 md:mb-0 flex items-center space-x-2">
              <motion.div
                className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-xs"
                whileHover={{ rotate: 10 }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    d="M12,3 L19,7 L19,17 L12,21 L5,17 L5,7 Z"
                    fill="rgba(0, 0, 0, 0.8)"
                  />
                  <circle cx="12" cy="12" r="2" fill="rgba(0, 0, 0, 1)" />
                </svg>
              </motion.div>
              <p className="text-sm">
                © {new Date().getFullYear()} Chiloane Holdings. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-700 hover:text-amber-600 transition-colors text-sm"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-700 hover:text-amber-600 transition-colors text-sm"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
