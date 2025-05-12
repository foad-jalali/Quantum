"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Services",
    subItems: [
      {
        label: "End-to-End Procurement & Sourcing",
        href: "/services/end-to-end-procurement-and-sourcing",
        image: "/navbar/services/1.png",
      },
      {
        label: "Tender Management & Consortium Building",
        href: "/services/tender-management-and-consortium-building",
        image: "/navbar/services/2.png",
      },
      {
        label: "Vendor Identification & Matchmaking",
        href: "/services/vendor-identification-and-matchmaking",
        image: "/navbar/services/3.png",
      },
      {
        label: "Project Management & Execution Oversight ",
        href: "/services/project-management-and-execution-oversight",
        image: "/navbar/services/4.png",
      },
      {
        label: "Tender Preparation & Bid Management",
        href: "/services/tender-preparation-and-bid-management",
        image: "/navbar/services/5.png",
      },
      {
        label: "IT Infrastructure Deployment & Software Integration",
        href: "/services/it-infrastructure-deployment-and-software-integration",
        image: "/navbar/services/6.png",
      },
      {
        label: "Custom Software & Embedded AI Solutions",
        href: "/services/custom-software-and-embedded-ai-solutions",
        image: "/navbar/services/7.png",
      },
      {
        label: "Custom Fabrication & Product Customization",
        href: "/services/custom-fabrication-and-product-customization",
        image: "/navbar/services/8.png",
      },
    ],
  },
  {
    label: "Industries",
    subItems: [
      {
        label: "Military & Defence",
        href: "/industries/military-and-defence",
        image: "/navbar/industries/1.png",
      },
      {
        label: "Airports",
        href: "/industries/airports",
        image: "/navbar/industries/2.png",
      },
      {
        label: "Airlines & MRO",
        href: "/industries/airlines-and-mro",
        image: "/navbar/industries/3.png",
      },
      {
        label: "Energy, Oil & Gas",
        href: "/industries/energy-oil-and-gas",
        image: "/navbar/industries/4.png",
      },
      {
        label: "Marine & Shipbuilding",
        href: "/industries/marine-and-shipbuilding",
        image: "/navbar/industries/5.png",
      },
      {
        label: "Healthcare & HealthTech",
        href: "/industries/healthcare-and-healthtech",
        image: "/navbar/industries/6.png",
      },
      {
        label: "Manufacturing & Industrial Fabrication",
        href: "/industries/manufacturing-and-industrial",
        image: "/navbar/industries/7.png",
      },
      {
        label: "Navigation, GPS, GNSS",
        href: "/industries/navigation-gps-gnss",
        image: "/navbar/industries/8.png",
      },
      {
        label: "IT & Emerging Technologies",
        href: "/industries/it-and-emerging-technologies",
        image: "/navbar/industries/9.png",
      },
    ],
  },
  { label: "Solutions", href: "solutions" },
  { label: "About Us", href: "about" },
  { label: "Blog", href: "blog" },
  { label: "Career", href: "career" },
  { label: "FAQ", href: "faq" },
  { label: "Contact Us", href: "contact" },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleSubmenu = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.header
      className="border-b border-amber-100 fixed w-full top-0 z-50 backdrop-blur-md bg-white"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image width={100} height={100} alt="logo" src="/favicon.svg" />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, i) => {
              if (!item.subItems) {
                return (
                  <Link key={i} href={`/${item.href}`}>
                    <motion.div
                      className="text-[#00204E] hover:text-amber-600 transition-colors relative"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                    >
                      {item.label}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </Link>
                );
              } else {
                return (
                  <div key={i} className="relative group">
                    <motion.div
                      className="flex items-center space-x-1 text-[#00204E] hover:text-amber-600 transition-colors relative cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                    >
                      <span>{item.label}</span>
                      <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>

                    <div
                      className="fixed left-0   mt-4  
             invisible opacity-0 group-hover:visible group-hover:opacity-100 
             transition-all w-screen duration-300 bg-transparent delay-100 ease-in-out 
             z-50 py-4 "
                    >
                      <div className="bg-white border container mx-auto shadow-lg p-4 rounded-md  border-gray-300 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                          {item.subItems.map((sub, j) => (
                            <a
                              key={j}
                              href={sub.href}
                              className="block bg-white hover:bg-amber-100 transition rounded-lg overflow-hidden border border-gray-200"
                            >
                              <img
                                src={sub.image || "/placeholder.jpg"}
                                alt={sub.label}
                                className="w-full h-42 object-cover"
                              />
                              <div className="p-2 text-left text-sm font-medium text-gray-700">
                                {sub.label}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden ml-auto">
            <button onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Button className="bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                <span className="relative z-10">Partner with Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-gray-300 py-4"
            >
              {navItems.map((item, i) => (
                <div key={i} className="px-4 py-2 border-b border-gray-200">
                  {!item.subItems ? (
                    <Link
                      href={
                        item.href.startsWith("/") ? item.href : `/${item.href}`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-left font-medium text-gray-700 hover:text-amber-600"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full text-left font-medium text-gray-700 flex justify-between items-center"
                        onClick={() => toggleSubmenu(i)}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transform transition-transform ${
                            openIndex === i ? "rotate-90" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>

                      {openIndex === i && (
                        <div className="mt-2 pl-4">
                          {item.subItems.map((sub, j) => (
                            <Link
                              key={j}
                              href={
                                sub.href.startsWith("/")
                                  ? sub.href
                                  : `/${sub.href}`
                              }
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center space-x-2 py-1 text-sm text-gray-600 hover:text-amber-500"
                            >
                              {sub.image && (
                                <Image
                                  src={sub.image}
                                  alt={sub.label}
                                  width={48}
                                  height={48}
                                  className="rounded"
                                />
                              )}
                              <span>{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
