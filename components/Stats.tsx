import React from "react";

export default function Stats() {
  const stats = [
    { value: "5+", label: "Years of Excellence", sub: "Established credibility" },
    { value: "500+", label: "Satisfied Clients", sub: "Global business partners" },
    { value: "50+", label: "Countries Served", sub: "Worldwide logistics reach" },
    { value: "100+", label: "Product Varieties", sub: "Wide food processing range" },
  ];

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-4 bg-white rounded-xl shadow-xs border border-gray-100/50 hover:shadow-md hover:border-brand-primary/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Animated looking bold statistical number digits */}
              <div className="text-4xl sm:text-5xl font-extrabold text-brand-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-gray-800 mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
