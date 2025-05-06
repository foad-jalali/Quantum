"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Twitter,
    Linkedin,
    Instagram,
} from "lucide-react";

const socialLinks = [
    { icon: Twitter, href: "/#" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/quantumints" },
    { icon: Instagram, href: "/#" },
];
const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 text-sm">
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
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-amber-600"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            );
                        })}
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-6" />

                {/* Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
                    <FooterList title="Services" items={[
                        { label: "End-to-End Procurement & Sourcing", href: "/services/end-to-end-procurement-and-sourcing" },
                        { label: "Tender Management & Consortium Building", href: "/services/tender-management-and-consortium-building" },
                        { label: "Vendor Identification & Matchmaking", href: "/services/vendor-identification-and-matchmaking" },
                        { label: "Project Management & Execution Oversight", href: "/services/project-management-and-execution-oversight" },
                        { label: "Tender Preparation & Bid Management", href: "/services/tender-preparation-and-bid-management" },
                        { label: "IT Infrastructure Deployment & Software Integration", href: "/services/it-infrastructure-deployment-and-software-integration" },
                        { label: "Custom Software & Embedded AI Solutions", href: "/services/custom-software-and-embedded-ai-solutions" },
                        { label: "Custom Fabrication & Product Customization", href: "/services/custom-fabrication-and-product-customization" },
                    ]}
                        category="services"
                    />

                    <FooterList title="Industries" items={[
                        { label: "Military & Defence", href: "/industries/military-and-defence" },
                        { label: "Airports", href: "/industries/airports" },
                        { label: "Airlines & MRO ", href: "/industries/airlines-and-mro" },
                        { label: "Energy, Oil & Gas", href: "/industries/energy-oil-and-gas" },
                        { label: "Marine & Shipbuilding", href: "/industries/marine-and-shipbuilding" },
                        { label: "Healthcare & HealthTech", href: "/industries/healthcare-and-healthtech" },
                        { label: "Manufacturing & Industrial Fabrication", href: "/industries/manufacturing-and-industrial" },
                        { label: "Navigation, GPS, GNSS", href: "/industries/navigation-gps-gnss" },
                        { label: "IT & Emerging Technologies", href: "/industries/it-and-emerging-technologies" },
                    ]}
                        category="industries"
                    />

                    <FooterList
                        title="Solutions"
                        items={[
                            { label: "Tenders Turnkey Solutions", href: "/solutions/tenders-turnkey-solutions" },
                            { label: "AI/ML & Custom Software", href: "/solutions/ai-ml-custom-software" },
                            { label: "Data Centre Infrastructure", href: "/solutions/data-centre-infrastructure" },
                            { label: "Navigation Systems", href: "/solutions/navigation-systems" },
                            { label: "Embedded System", href: "/solutions/embedded-system" },
                            { label: "Industrial Equipment", href: "/solutions/industrial-equipment" },
                            { label: "Power Solutions", href: "/solutions/power-solutions" },
                            { label: "Connectivity", href: "/solutions/connectivity" },
                            { label: "Fabrication & Manufacturing", href: "/solutions/fabrication-manufacturing" },
                            { label: "Lighting & Sustainable Tech", href: "/solutions/lighting-sustainable-tech" },
                            { label: "Field Monitoring and Remote Sensing", href: "/solutions/field-monitoring" },
                            { label: "End-to-End IT Infrastructure Solutions", href: "/solutions/end-to-end-it" },
                        ]}
                        category="solutions"
                    />

                    <FooterList
                        title="Company Info"
                        items={[
                            { label: "About Us", href: "/about" },
                            { label: "Contact Us", href: "/contact" },
                            { label: "Partnerships", href: "/partnerships" },
                            { label: "Case Studies", href: "/case-studies" },
                            { label: "FAQ", href: "/faq" },
                            { label: "Blog", href: "/blog" },
                            { label: "Careers", href: "/careers" },
                        ]}
                        category=""
                    />

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[#00204E] font-semibold mb-3">Quantum International Services Ltd</h4>
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
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-sm text-gray-600">
                        <p>© {new Date().getFullYear()} Quantum. All rights reserved.</p>
                        <span className="hidden md:inline">|</span>
                        <div className="flex space-x-4">
                            <Link href="/terms" className="hover:text-amber-600">Terms of Service</Link>
                            <span className="md:hidden"></span>
                            <Link href="/cookies" className="hover:text-amber-600">Cookies Policy</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

const FooterList = ({
    title,
    items,
    category,
}: {
    title: string;
    items: { label: string; href: string }[];
    category: "services" | "industries" | "solutions" | "";
}) => (
    <div>
        <h4 className="text-[#00204E] font-semibold mb-3">{title}</h4>
        <ul className="space-y-1">
            {items.map((item, idx) => (
                <li key={idx}>
                    <Link href={item.href} className="hover:text-amber-600 transition-colors">
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);


export default Footer;
