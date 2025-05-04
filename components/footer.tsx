"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    InstagramIcon,
    YoutubeIcon,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-amber-50 text-gray-800 text-sm">
            <div className="container mx-auto px-4 md:px-6 py-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold">
                            <svg viewBox="0 0 24 24" className="w-5 h-5">
                                <path d="M12,3 L19,7 L19,17 L12,21 L5,17 L5,7 Z" fill="rgba(0, 0, 0, 0.8)" />
                                <circle cx="12" cy="12" r="2" fill="rgba(0, 0, 0, 1)" />
                            </svg>
                        </div>
                        <span className="font-bold">Quantum</span>
                    </div>
                    <div className="flex space-x-4">
                        {[FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-amber-600"
                                whileHover={{ scale: 1.2 }}
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-6" />

                {/* Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
                    {/* Services */}
                    <FooterList title="Services" items={[
                        "Procurement & Sourcing",
                        "Tender Management & Consortium Building",
                        "Vendor Identification & Matchmaking",
                        "Project Management & Execution Oversight",
                        "Tender Preparation & Bid Management",
                        "IT Infrastructure & System Integration",
                        "Custom Software & Embedded AI Solutions",
                        "Custom Fabrication & Manufacturing",
                    ]} />

                    {/* Industries */}
                    <FooterList title="Industries" items={[
                        "Military & Defence", "Airports", "Airlines", "Energy, Oil & Gas",
                        "Marine", "HealthTech", "Manufacturing", "Navigation", "IT"
                    ]} />

                    {/* Solutions */}
                    <FooterList title="Solutions" items={[
                        "Tenders Turnkey Solutions", "AI/ML & Custom Software",
                        "Data Centre Infrastructure", "Navigation Systems", "Embedded System",
                        "Industrial Equipment", "Power Solutions", "Connectivity",
                        "Fabrication & Manufacturing", "Lighting & Sustainable Tech",
                        "Field Monitoring and Remote Sensing", "End-to-End IT Infrastructure Solutions"
                    ]} />

                    {/* Company Info */}
                    <FooterList title="Company Info" items={[
                        "About Us", "Contact Us", "Partnerships", "Case Studies",
                        "FAQ", "Blog", "Careers"
                    ]} />

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-3">Quantum International Services Ltd</h4>
                        <p className="mb-2">
                            Address:<br />#302 - 10650 113 Street NW,<br />Edmonton, AB, Canada T5H 3H6
                        </p>
                        <p className="mb-2">
                            Working Hours:<br />Mon to Fri - 8:30 A.M. to 5 P.M. MST
                        </p>
                        <p className="text-gray-600 text-xs">
                            Stay tuned for tips on outdoor living and unique Quantum experiences. No spam—just good stuff!
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 pt-4 text-center">
                    <p>© {new Date().getFullYear()} Quantum. All rights reserved.</p>
                    <div className="mt-2 flex justify-center space-x-4">
                        <Link href="#" className="hover:text-amber-600">Terms of Service</Link>
                        <Link href="#" className="hover:text-amber-600">Cookies Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterList = ({ title, items }: { title: string; items: string[] }) => (
    <div>
        <h4 className="font-semibold mb-3">{title}</h4>
        <ul className="space-y-1">
            {items.map((item, idx) => (
                <li key={idx}>
                    <Link href="#" className="hover:text-amber-600 transition-colors">
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;
