"use client";

import React from "react";
import { Award } from "lucide-react";

interface HeroProps {
  onGetQuoteClick: () => void;
}

export default function Hero({ onGetQuoteClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/video/hero-bg-vid.mp4" type="video/mp4" />
      </video>
      {/* Dark gradient overlay so the text remains readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 -z-10"></div>
      {/* Visual glowing elements for deep micro-animation premium feel */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-sky-500/10 rounded-full filter blur-3xl -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center animate-fade-in-up">
        {/* Milestone Pill indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg">
          <Award className="text-amber-400" size={18} />
          <span>One-stop solution for all masala manufacturers.</span>
        </div>

        {/* Brand Main Slogan Headings */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
          ADVANCE <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 bg-clip-text text-transparent">FOOD</span>
        </h1>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mt-6 leading-relaxed">
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 font-semibold text-sm sm:text-base mr-1.5 align-middle">Premium</span> processor and exporter of dehydrated vegetables and specialty spice powders. Connecting Indian agricultural excellence with international markets across 11+ countries.
        </p>
      </div>
    </section>
  );
}
