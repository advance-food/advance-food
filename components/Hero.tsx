"use client";

import React from "react";
import { Award, ArrowRight } from "lucide-react";

interface HeroProps {
  onGetQuoteClick: () => void;
}

export default function Hero({ onGetQuoteClick }: HeroProps) {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.65)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
      {/* Visual glowing elements for deep micro-animation premium feel */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center animate-fade-in-up">
        {/* Milestone Pill indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg">
          <Award className="text-amber-400" size={18} />
          <span>Celebrating 5 Years of Excellence</span>
        </div>

        {/* Brand Main Slogan Headings */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          ADVANCE FOOD
        </h1>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mt-6 leading-relaxed">
          Premium processor and exporter of dehydrated vegetables and specialty spice powders. Connecting Indian agricultural excellence with international markets across 50+ countries.
        </p>

        {/* Primary and Secondary CTA Button Groups */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 w-full sm:w-auto px-6 sm:px-0">
          <button
            onClick={scrollToProducts}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-brand-primary/20 transform hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Explore Specialties</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onGetQuoteClick}
            className="w-full sm:w-auto flex items-center justify-center bg-brand-primary border border-brand-primary text-white hover:bg-transparent hover:border-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 cursor-pointer"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
