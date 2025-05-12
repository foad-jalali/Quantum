"use client";

import React from "react";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0e0c15] overflow-hidden text-white px-4 text-center">
      <div className="relative w-[90vw] max-w-[580px] aspect-square flex flex-col items-center justify-center mb-8">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-b from-transparent via-[#ff9966]/40 to-transparent blur-2xl animate-pulse z-0" />

        <div className="relative w-full h-full bg-[#1b1924] rounded-full shadow-inner shadow-black flex flex-col items-center justify-center z-10">
          <h1 className="text-xl md:text-2xl tracking-[0.3em] font-light mb-6">
            COMING SOON
          </h1>

          <div className="w-40 md:w-48 h-2 bg-[#121016] rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-[#fbbf24] rounded-l-full transition-all duration-500" />
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm md:text-base max-w-md mb-6">
        We're currently working to design this page. It will be available soon!
      </p>

      <Link
        href="/"
        className="inline-block bg-amber-500 text-black font-semibold px-6 py-2 rounded hover:bg-amber-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
