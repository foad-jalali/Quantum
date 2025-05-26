// components/ServicesIndustriesMarquee.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Define the shape of an item
interface Item {
    name: string
    image: string
    slug: string
}

// Props for the vertical marquee
interface MarqueeProps {
    items: Item[]
    reverse?: boolean
    speed?: number // animation duration in seconds
}

// VerticalMarquee duplicates items to create an infinite scroll effect
export function VerticalMarquee({ items, reverse = false, speed = 40 }: MarqueeProps) {
    const marqueeItems = [...items, ...items]
    const animationClass = reverse ? 'animate-marquee-down' : 'animate-marquee-up'

    return (
        <div className="overflow-hidden relative w-full h-full group">
            <div
                className={`flex flex-col ${animationClass} group-hover:paused`}
                style={{ animationDuration: `${speed}s` }}
            >
                {marqueeItems.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.slug}
                        className="flex-shrink-0 p-1 w-[300px] group"
                    >
                        <div className="relative aspect-video overflow-hidden rounded-sm group-hover:scale-85 transition-transform">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all z-10" />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <span className="text-white text-lg font-semibold text-center px-2">
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}



// Main component rendering two synchronized marquees side by side
export default function ServicesIndustriesMarquee() {
    const services: Item[] = [
        { name: 'End-to-End Procurement & Sourcing', image: '/services/1.png', slug: "/services/end-to-end-procurement-and-sourcing"},
        { name: 'Tender Management & Consortium Building', image: '/services/2.png', slug: "/services/tender-management-and-consortium-building"},
        { name: 'Vendor Identification & Matchmaking', image: '/services/3.png', slug: "/services/vendor-identification-and-matchmaking" },
        { name: 'Project Management & Execution Oversight', image: '/services/4.png', slug: "/services/project-management-and-execution-oversight" },
        { name: 'Tender Preparation & Bid Management', image: '/services/5.png', slug: "/services/tender-preparation-and-bid-management" },
        { name: 'IT Infrastructure Deployment & Software Integration', image: '/services/6.png', slug: "/services/it-infrastructure-deployment-and-software-integration" },
        { name: 'Custom Software & Embedded AI Solutions', image: '/services/7.png', slug: "/services/custom-software-and-embedded-ai-solutions" },
        { name: 'Custom Fabrication & Product Customization', image: '/services/8.png', slug: "/services/custom-fabrication-and-product-customization" },
    ]

    const industries: Item[] = [
        { name: 'Military & Defence', image: '/industries/1.png', slug: "/industries/military-and-defence" },
        { name: 'Airports', image: '/industries/2.png', slug: "/industries/airports" },
        { name: 'Airlines & MRO', image: '/industries/3.png', slug: "/industries/airlines-and-mro" },
        { name: 'Energy, Oil & Gas', image: '/industries/4.jpeg', slug: "/industries/energy-oil-and-gas" },
        { name: 'Marine & Shipbuilding', image: '/industries/5.png', slug: "/industries/marine-and-shipbuilding" },
        { name: 'Healthcare & HealthTech', image: '/industries/6.png', slug: "/industries/healthcare-and-healthtech" },
        { name: 'Manufacturing & Industrial Fabrication', image: '/industries/7.png', slug: "/industries/manufacturing-and-industrial" },
        { name: 'Navigation, GPS, GNSS', image: '/industries/8.png', slug: "/industries/navigation-gps-gnss" },
        { name: 'IT & Emerging Technologies', image: '/industries/9.png', slug: "/industries/it-and-emerging-technologies" },
    ]

    return (
        <div className="h-full w-full relative overflow-hidden grid lg:grid-cols-2">
            <div className="relative">
                <VerticalMarquee items={services} speed={40} />
            </div>
            <div className="relative">
                <VerticalMarquee items={industries} reverse speed={40} />
            </div>
        </div>
    )
}
