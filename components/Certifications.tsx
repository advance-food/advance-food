"use client";

import React from "react";

export default function Certifications() {
  const logos = [
    { src: "/fda.png", alt: "FDA", className: "h-8 md:h-11" },
    { src: "/fssai.png", alt: "FSSAI", className: "h-9 md:h-12" },
    { src: "/halal.png", alt: "HALAL", className: "h-11 md:h-16" },
    { src: "/apeda.png", alt: "APEDA", className: "h-11 md:h-16" },
    { src: "/sgs.png", alt: "SGS ISO 9001", className: "h-12 md:h-18" },
    { src: "/kosher.png", alt: "Certified Kosher", className: "h-11 md:h-16" },
    { src: "/iso.png", alt: "ISO", className: "h-10 md:h-14" },
  ];

  // Duplicate logos for seamless infinite loop
  const allLogos = [...logos, ...logos];

  return (
    <section
      className="select-none overflow-hidden flex items-center"
      style={{ backgroundColor: "#0ea5e9" }}
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full flex items-center" style={{ height: '110px' }}>
        <div className="marquee-track">
          {allLogos.map((logo, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center shrink-0 mx-5 md:mx-8 transition-all duration-300 hover:opacity-70 hover:scale-110 ${logo.className}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
