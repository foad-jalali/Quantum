"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";
import ParticleBackground from "@/components/particle-background";
import PartnersSection from "@/components/partners";
import FeatureGridSection from "@/components/feature-grid-section";
import StorySection from "@/components/story-slider";
import FeatureHighlightSection from "@/components/feature-highlight-section";
import FeatureSection from "@/components/feature-section";
import Quantum from "@/components/quantum";
import ContentSlider from "./content-slider";
import Link from "next/link";
import BannerSection from "./banner-section";
import { TimelineSection } from "./timeline-section";
import ServicesIndustriesMarquee from "./services-industries-marquee";
import { BentoGridDemo } from "./bento-grid-item";
import CreativeTimeline from "./CreativeTimeline";

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

  const services = [
    {
      title: "End-to-End Procurement & Sourcing",
      image: "/services/1.png",
      href: "/services/end-to-end-procurement-and-sourcing",
    },
    {
      title: "Tender Management & Consortium Building",
      image: "/services/2.png",
      href: "/services/tender-management-and-consortium-building",
    },
    {
      title: "Vendor Identification & Matchmaking",
      image: "/services/3.png",
      href: "/services/vendor-identification-and-matchmaking",
    },
    {
      title: "Project Management & Execution Oversight",
      image: "/services/4.png",
      href: "/services/project-management-and-execution-oversight",
    },
    {
      title: "Tender Preparation & Bid Management",
      image: "/services/5.png",
      href: "/services/tender-preparation-and-bid-management",
    },
    {
      title: "IT Infrastructure Deployment & Software Integration",
      image: "/services/6.png",
      href: "/services/it-infrastructure-deployment-and-software-integration",
    },
    {
      title: "Custom Software & Embedded AI Solutions",
      image: "/services/7.png",
      href: "/services/custom-software-and-embedded-ai-solutions",
    },
    {
      title: "Custom Fabrication & Product Customization",
      image: "/services/8.png",
      href: "/services/custom-fabrication-and-product-customization",
    },
  ];
  const industries = [
    {
      title: "Military & Defence",
      subtitle: "Specialized equipment and tactical technology procurement.",
      image: "/industries/1.png",
      href: "/industries/military-and-defenc",
    },
    {
      title: "Airports",
      subtitle: "Airport equipment, tech solutions, navigation systems, etc.",
      image: "/industries/2.png",
      href: "/industries/airports",
    },
    {
      title: "Airlines & MRO ",
      subtitle: "Airport equipment, tech solutions, navigation systems, etc.",
      image: "/industries/3.png",
      href: "/industries/airlines-and-mro",
    },
    {
      title: "Energy, Oil & Gas",
      subtitle: "Oil, gas, and renewable energy systems integration.",
      image: "/industries/4.jpeg",
      href: "/industries/energy-oil-and-gas",
    },
    {
      title: "Marine & Shipbuilding",
      subtitle: "Shipbuilding and maritime equipment sourcing.",
      image: "/industries/5.png",
      href: "/industries/marine-and-shipbuilding",
    },
    {
      title: "Healthcare & HealthTech",
      subtitle: "Medical technology and integrated health solutions.",
      image: "/industries/6.png",
      href: "/industries/healthcare-and-healthtech",
    },
    {
      title: "Manufacturing & Industrial Fabrication",
      subtitle: "Precision machinery and automated production systems.",
      image: "/industries/7.png",
      href: "/industries/manufacturing-and-industrial",
    },
    {
      title: "Navigation, GPS, GNSS",
      subtitle: "Advanced positioning and satellite tracking solutions.",
      image: "/industries/8.png",
      href: "/industries/navigation-gps-gnss",
    },
    {
      title: "IT & Emerging Technologies",
      subtitle:
        "Cutting-edge IT infrastructure, AI, and next-gen digital innovation.",
      image: "/industries/9.png",
      href: "/industries/it-and-emerging-technologies",
    },
  ];
  const slides = [
    {
      title: "Turnkey Government & Commercial Solutions",
      slug: "/solutions#turnkey-government-and-commercial-solutions",
      content:
        "Complete project lifecycle support – from bid strategy to multi-vendor coordination and delivery. ",
      color: "#f59e0b",
      image: "/solutions/1.png"
    },
    {
      title: "AI & Advanced Software Platforms",
      slug: "/solutions#ai-and-advanced-software-platforms",
      content:
        "Custom-built AI/ML solutions tailored for aviation, healthcare, energy, and industrial sectors. ",
      color: "#f59e0b",
      image: "/solutions/2.png"
    },
    {
      title: "Secure Infrastructure & Data Systems",
      slug: "/solutions#secure-infrastructure-and-data-systems",
      content:
        "AI-ready server infrastructure, cloud systems, and secure data centers for mission-critical deployments. ",
      color: "#f59e0b",
      image: "/solutions/3.png"
    },
    {
      title: "Navigation & Remote Monitoring Systems",
      slug: "/solutions#navigation-and-remote-monitoring-systems",
      content:
        "GNSS, GPS, drones, satellite-based monitoring, and fleet/workforce tracking platforms. ",
      color: "#f59e0b",
      image: "/solutions/4.png"
    },
    {
      title: "Embedded & Edge Computing Solutions",
      slug: "/solutions#embedded-and-edge-computing-solutions",
      content:
        "Real-time embedded systems for aviation, hospitals, industrial automation, and edge AI devices. ",
      color: "#f59e0b",
      image: "/solutions/5.png"
    },
    {
      title: "Industrial Equipment & Automation",
      slug: "/solutionssolutions#industrial-equipment-and-automation",
      content:
        "High-precision CNC machines, laser tools, waterjet cutters, and 3D metal printers for advanced manufacturing. ",
      color: "#f59e0b",
      image: "/solutions/6.png"
    },
    {
      title: "Power & Energy Systems",
      slug: "/solutions#power-and-energy-systems",
      content:
        "UPS, battery packs, generators, solar arrays – from commercial to military-grade resilience. ",
      color: "#f59e0b",
      image: "/solutions/7.png"
    },
    {
      title: "Field Monitoring & Instrumentation",
      slug: "/solutions#field-monitoring-and-instrumentation",
      content:
        "Multi-sensor analyzers, hydrogen flow meters, gas detection, testers, and remote diagnostic tools. ",
      color: "#f59e0b",
      image: "/solutions/8.png"
    },
    {
      title: "Enterprise IT & Network Integration",
      slug: "/solutions#enterprise-it-and-network-integration",
      content:
        "End-to-end IT infrastructure including servers, networking equipment, and system management. ",
      color: "#f59e0b",
      image: "/solutions/9.png"
    },
    {
      title: "Smart Connectivity & Signal Solutions",
      slug: "/solutions#smart-connectivity-and-signal-solutions",
      content:
        "Wire, cable, ruggedized harnesses, and fiber optics for secure communications and control. ",
      color: "#f59e0b",
      image: "/solutions/10.png"
    },
    {
      title: "Custom Fabrication & Modular Manufacturing",
      slug: "/solutions#custom-fabrication-and-modular-manufacturing",
      content:
        "Tailored metalwork, assemblies, and fabrication systems – from prototyping to production scale. ",
      color: "#f59e0b",
      image: "/solutions/11.png"
    },
    {
      title: "Lighting & Sustainable Infrastructure",
      slug: "/solutions#lighting-and-sustainable-infrastructure",
      content:
        "LED lighting for commercial, industrial, and public projects, along with solar-integrated smart tech.",
      color: "#f59e0b",
      image: "/solutions/12.png"
    },
  ];

  const caseStudies = [
    {
      title: "Total Solution Procurement Across Multi-Vendor Brands",
      quote:
        "Unified procurement for diverse technologies from different vendors to meet complex GoC tender requirements.",
      tags: ["Government", "Strategic Sourcing", "Consortium"],
    },
    {
      title: "Military Batteries & Custom Packaging for DND",
      quote:
        "Successfully procured military-grade batteries and engineered custom packaging solutions for the Department of National Defence (DND).",
      tags: ["Government", "Military", "Power Solutions"],
    },
    {
      title: "Innovative Solar Batteries for Natural Resources Canada",
      quote:
        "Delivered cutting-edge solar-integrated battery systems to NRCan, supporting Canada’s clean energy mandate.",
      tags: ["Government", "Energy", "Sustainability"],
    },
    {
      title: "Specialized Test Bench for Environment Canada",
      quote:
        "Providing consulting services to a private company in relation to the procurement and delivery of a water testing bench to a government entity.",
      tags: ["Government", "Instrumentation", "Energy"],
    },
    {
      title: "Sensor Procurement for NRCan",
      quote:
        "Sourced and supplied advanced environmental sensors to support real-time climate and field monitoring programs.",
      tags: ["Government", "Sensors", "Environment"],
    },
    {
      title: "Appliances for Municipalities",
      quote:
        "Coordinated large-scale procurement and delivery of durable appliances to a Canadian municipality.",
      tags: ["Municipal", "Procurement", "Public Infrastructure"],
    },
    {
      title: "Special Structures for Municipal Projects",
      quote:
        "Delivered customized modular and prefabricated structures for public spaces and field operations.",
      tags: ["Municipal", "Construction", "Custom Fabrication"],
    },
    {
      title: "Innovative Baggage Handling Solution for Airport",
      quote:
        "Worked on an AI-supported baggage handling system for a regional airport client.",
      tags: ["Airport", "AI", "Aviation Infrastructure"],
    },
    {
      title: "Specialized Structures for Municipal Facilities",
      quote:
        "Engineered and delivered functional architectural structures tailored for public use.",
      tags: ["Municipal", "Structures", "Custom Solutions"],
    },
    {
      title: "Global Cable Sourcing for Wire Manufacturer",
      quote:
        "Identified and managed supply chain for high-purity industrial cables for North American wire producer.",
      tags: ["Manufacturing", "Global Sourcing", "Cables"],
    },
    {
      title: "AI Data Center Solution Development",
      quote:
        "In collaboration with AI tech firms, worked on a scalable data center strategy supporting machine learning workflows.",
      tags: ["AI/ML", "Data Infrastructure", "Innovation"],
    },
    {
      title: "Custom IT Procurement",
      quote:
        "Executed several contracts for IT hardware and software delivery, supporting critical digital infrastructure.",
      tags: ["IT", "Government", "Infrastructure"],
    },
    {
      title: "Collaborative AI & Aviation Data Project",
      quote:
        "Worked with multiple software and aviation data providers to prepare a government solicitation response for advanced flight planning.",
      tags: ["AI", "Aviation", "Government Solicitation"],
    },
    {
      title: "Ongoing Projects – Innovation Pipeline",
      quote:
        "Several projects currently in development spanning marine, AI, surveillance, and logistics verticals.",
      tags: ["Ongoing", "Innovation", "Pipeline"],
    },
  ];

  const logos = [
    { image: "/partners/logo/intel.svg", alt: "Logo 3" },
    { image: "/partners/logo/mop.png", alt: "Logo 2" },
    { image: "/partners/logo/nvidia.png", alt: "Logo 3" },
    { image: "/partners/logo/abb.png", alt: "Logo 1" },
    { image: "/partners/logo/autel.png", alt: "Logo 2" },
    { image: "/partners/logo/microsoft.svg", alt: "Logo 1" },
    { image: "/partners/logo/calian.png", alt: "Logo 3" },
    { image: "/partners/logo/concept.png", alt: "Logo 3" },
    { image: "/partners/logo/hp.png", alt: "Logo 3" },
    { image: "/partners/logo/dhc.png", alt: "Logo 3" },
    { image: "/partners/logo/dji.png", alt: "Logo 1" },
    { image: "/partners/logo/dtn.png", alt: "Logo 2" },
    { image: "/partners/logo/eventid.png", alt: "Logo 3" },
    { image: "/partners/logo/expresso.svg", alt: "Logo 3" },
    { image: "/partners/logo/hpe.png", alt: "Logo 1" },
    { image: "/partners/logo/ibm.png", alt: "Logo 2" },
    { image: "/partners/logo/led.png", alt: "Logo 3" },
    { image: "/partners/logo/metal.png", alt: "Logo 3" },
    { image: "/partners/logo/pro.png", alt: "Logo 3" },
    { image: "/partners/logo/siemense.png", alt: "Logo 3" },
    { image: "/partners/logo/super-micro.png", alt: "Logo 3" },
    { image: "/partners/logo/td.png", alt: "Logo 3" },
    { image: "/partners/logo/textron-aviation.svg", alt: "Logo 3" },
    { image: "/partners/logo/unisys.png", alt: "Logo 3" },
    // { image: "/solutions/logos/5/5.png", alt: "intel" },
    // { image: "/solutions/logos/5/6.png", alt: "logo6" },
    // { image: "/solutions/logos/9/4.svg", alt: "do" },
    // { image: "/solutions/logos/9/7.svg", alt: "msi" },
    // { image: "/solutions/logos/10/4.png", alt: "msi" },
    // { image: "/solutions/logos/12/3.png", alt: "msi" },
  ];
  const features = [
    {
      icon: "/icon/1.svg",
      // title: "Pan-African Vision",
      description: "Military-Grade Equipment Vendors",
    },
    {
      icon: "/icon/2.svg",
      // title: "Innovative Approach",
      description: "AI/ML & Software Solution Providers",
    },
    {
      icon: "/icon/3.svg",
      // title: "Affordable Excellence",
      description: "IT Hardware Distributors (Dell, HPE, etc.)",
    },
    {
      icon: "/icon/4.svg",
      // title: "Future-Focused",
      description:
        "Airport & Airline Equipment Suppliers (ATC, ASMCGS, GSE, Simulators)",
    },
    {
      icon: "/icon/5.svg",
      // title: "Future-Focused",
      description: "Airline OEMs and Component Manufacturers",
    },
    {
      icon: "/icon/6.svg",
      // title: "Future-Focused",
      description: "Energy Solution Providers (Solar, Wind, Battery, UPS)",
    },
    {
      icon: "/icon/7.svg",
      // title: "Future-Focused",
      description: "Marine Equipment and Vessel Manufacturers",
    },
    {
      icon: "/icon/8.svg",
      // title: "Future-Focused",
      description:
        "Healthcare Equipment Manufacturers & Medical Tech Solution Developers",
    },
    {
      icon: "/icon/9.svg",
      // title: "Future-Focused",
      description: "Sensor and Analytical Instrument Vendors",
    },
    {
      icon: "/icon/10.svg",
      // title: "Future-Focused",
      description:
        "Advanced Fabrication & CNC Engineering & Manufacturing Partners",
    },
    {
      icon: "/icon/11.svg",
      // title: "Future-Focused",
      description: "Automation & Instrumentation Providers",
    },
    {
      icon: "/icon/12.svg",
      // title: "Future-Focused",
      description: "Training & Consulting Firms",
    },
  ];

  useEffect(() => {
    if (aboutInView) {
      controls.start("visible");
    }
  }, [aboutInView, controls]);

  return (
    <div className="flex min-h-screen flex-col bg-amber-50 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden flex flex-col md:flex-row items-center justify-center min-h-screen md:h-screen pt-16 md:pt-0">
        <div className="absolute inset-0 bg-gradient-radial from-amber-100/50 to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-center">
            
            <motion.div
              className="space-y-6 text-center md:text-start"
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
                  Quantum
                </motion.span>{" "}
                <motion.span
                  className="text-white inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  International Services
                </motion.span>{" "}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Innovating Public Procurement & Supply Solutions Globally
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/solutions">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                      <span className="relative z-10">Explore Our Solutions</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-amber-500 text-amber-500 hover:bg-amber-500/10 group bg-amber-500/10"
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
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden lg:block h-screen max-h-[90vh] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ServicesIndustriesMarquee />
            </motion.div>
          </div>
        </div>
         <ParticleBackground />
      </section>

      {/* <TimelineSection /> */}
      <CreativeTimeline />
      <PartnersSection items={logos} backgroundColor="#ffffff" />
      <FeatureGridSection
        title="Our Core Services"
        subtitle="Tailored solutions for complex projects"
        items={services}
        backgroundColor="#000000"
      />
      {/* <BentoGridDemo
        title="Our Core Services"
        subtitle="Tailored solutions for complex projects"
        items={services}
        backgroundColor="#000000"
      /> */}
      <BentoGridDemo
        title="Industries We Empower"
        subtitle="Enabling growth across diverse sectors"
        items={industries}
        textColor="text-black"
        backgroundColor="#FFFFFF"
      />

      <StorySection
        title="Solutions We Deliver"
        subtitle="Integrated systems for governments and enterprises"
        slides={slides}
      />

      <FeatureHighlightSection
        title="Together, We Engineer the Extraordinary"
        subtitle="QIS proudly collaborates with vendors across multiple sectors to build end-to-end solutions for military, government, and commercial clients. Our vendor network is an essential part of the value we deliver to clients worldwide."
        features={features}
      />

      <FeatureSection
        image="/home/1.png"
        alt="AI Services"
        description={
          <>
            <h2 className="text-white">Join Our Global Vendor Network:</h2>
            <p className="text-white">
              Are you a forward-thinking supplier, integrator, or technology
              firm? Join QIS's growing global vendor ecosystem. By partnering
              with us, you’ll have the opportunity to contribute to complex,
              high-impact projects across multiple sectors, including defence,
              energy, healthcare, aviation, and infrastructure.
            </p>
            <h2 className="text-white">Benefits of Joining:</h2>
            <ul className="text-white">
              <li>Access to Government and International Projects</li>
              <li>Be Considered for Strategic Consortiums</li>
              <li>Collaborate on Custom, Turnkey Solutions</li>
              <li>Enhance Visibility Across B2G & B2B Channels</li>
            </ul>
          </>
        }
        buttonText="Join Our Global Vendor Network"
        buttonLink="/coming-soon"
        textColor="#FFFFFF"
        backgroundColor="#000000"
        reverse={false}
      />
      <ContentSlider
        title="Case Studies"
        subtitle="Our Successful Projects Across Industries"
        items={caseStudies}
      />

      <BannerSection
        image="/home/hero.png"
        title="Wrap with Confidence Statement"
        subtitle="With our network of global vendors, project management experience, and direct access to major tendering platforms (GoC, NATO, UN), QIS empowers you to secure, source, and deliver what matters most — without the usual friction."
        buttonText="Partner with Us"
        buttonLink="/coming-soon"
      />
    </div>
  );
}
