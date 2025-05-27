"use client"

import dynamic from "next/dynamic"

const LocationMap = dynamic(() => import("./location-map"), { ssr: false });

export default function MapWrapper() {
  return <LocationMap />
}
