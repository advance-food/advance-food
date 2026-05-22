"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

interface CTABannerProps {
  onContactClick: () => void;
}

export default function CTABanner({ onContactClick }: CTABannerProps) {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
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
    <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative bg-brand-primary rounded-3xl py-16 px-6 sm:px-12 text-center flex flex-col items-center justify-center shadow-xl overflow-hidden group">
        {/* Subtle visual glows overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-orange-600/10 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full filter blur-xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/5 rounded-full filter blur-xl"></div>

        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Partner with Advance Food?
          </h2>
          <p className="text-base sm:text-lg text-orange-100/90 max-w-2xl mt-4 leading-relaxed font-semibold">
            Connect with our global export and processing specialists today. Get exact custom specification sheets, transparent containers pricing, and reliable delivery shipping schedules.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full sm:w-auto">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-secondary text-white hover:bg-brand-secondary/90 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare size={18} />
              <span>Contact Us Today</span>
            </button>
            
            <button
              onClick={scrollToAbout}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group/btn"
            >
              <span>Learn More</span>
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
