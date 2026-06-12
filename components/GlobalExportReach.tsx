"use client";

import React, { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  Marker,
} from "react-simple-maps";

// ISO 3166-1 numeric codes (as strings) — export destination countries
const EXPORT_IDS = new Set([
  "276",        // Germany
  "704",        // Vietnam
  "156",        // China
  "840",        // United States
  "566",        // Nigeria
  "784",        // UAE (Dubai)
  "250",        // France
  "608",        // Philippines
  "100",        // Bulgaria
  "56", "056",  // Belgium
  "360",        // Indonesia
]);

// Marker [longitude, latitude] positions
const MARKERS: { coordinates: [number, number]; label: string }[] = [
  { coordinates: [10.5, 51.2], label: "Germany" },
  { coordinates: [108.0, 14.0], label: "Vietnam" },
  { coordinates: [104.2, 35.9], label: "China" },
  { coordinates: [-95.7, 37.1], label: "United States" },
  { coordinates: [8.7, 9.1], label: "Nigeria" },
  { coordinates: [54.0, 24.0], label: "UAE (Dubai)" },
  { coordinates: [2.5, 46.5], label: "France" },
  { coordinates: [121.8, 12.9], label: "Philippines" },
  { coordinates: [25.5, 42.7], label: "Bulgaria" },
  { coordinates: [4.5, 50.5], label: "Belgium" },
  { coordinates: [113.9, -0.8], label: "Indonesia" },
];

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const GlobalExportReach = memo(function GlobalExportReach() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  return (
    <section
      id="global-export-reach"
      className="pt-12 pb-4 md:pt-16 md:pb-6 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <style>{`
        @keyframes tooltipPop {
          from {
            opacity: 0;
            transform: translateY(4px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .tooltip-animate {
          animation: tooltipPop 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: 0px -10px;
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-3">
          <span className="text-sm font-bold tracking-widest text-brand-primary uppercase block mb-2">
            International Trade
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Global{" "}
            <span className="text-brand-primary">Export</span>{" "}
            Reach
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-6 leading-relaxed">
            We proudly serve international markets across multiple continents,
            delivering our premium dehydrated products to key countries
            worldwide. Our global network reflects our commitment to quality
            and customer satisfaction.
          </p>
        </div>

        {/* ── World Map ── */}
        <div className="w-full">
          {/*
            geoEqualEarth gives a smooth oval shape (similar to Robinson / Natural Earth)
            but its outer boundary is perfectly elliptical — no concave C-shaped sides.
            scale 153 + translate to center in 800x430 viewBox.
          */}
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{
              scale: 140,
              center: [0, 0],
            }}
            style={{ width: "100%", height: "auto" }}
            viewBox="0 70 800 350"
            onClick={() => setActiveLabel(null)}
          >
            {/* Sphere: sky-50 gives a gentle blue-ocean feel */}
            <Sphere
              id="ocean-sphere"
              fill="#f0f9ff"
              stroke="#bae6fd"
              strokeWidth={0.8}
            />

            {/* Curved lat/lon grid lines */}
            <Graticule
              stroke="#bae6fd"
              strokeWidth={0.3}
              opacity={0.6}
            />

            {/* Country polygons */}
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => {
                  const id = String(geo.id);
                  const isExport = EXPORT_IDS.has(id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isExport ? "#38bdf8" : "#bfdbfe"}
                      stroke="#f0f9ff"
                      strokeWidth={0.6}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          fill: isExport ? "#0284c7" : "#93c5fd",
                          outline: "none",
                          cursor: "default",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* Brand-primary markers */}
            {MARKERS.map(({ coordinates, label }) => {
              const isActive = activeLabel === label;
              return (
                <Marker
                  key={label}
                  coordinates={coordinates}
                  onMouseEnter={() => setActiveLabel(label)}
                  onMouseLeave={() => setActiveLabel(null)}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    setActiveLabel(activeLabel === label ? null : label);
                  }}
                  style={{
                    default: { outline: "none", cursor: "pointer" },
                    hover: { outline: "none", cursor: "pointer" },
                    pressed: { outline: "none" }
                  }}
                >
                  {/* Brand primary fill */}
                  <circle r={5.5} fill="#0ea5e9" className="transition-all duration-200 hover:scale-125" />
                  {/* White center hole */}
                  <circle r={2.2} fill="white" />

                  {isActive && (
                    <g className="tooltip-animate" style={{ pointerEvents: "none" }}>
                      {/* Tooltip Background Card */}
                      <rect
                        x={-(label.length * 3.5 + 10)}
                        y={-37}
                        width={label.length * 7 + 20}
                        height={22}
                        rx={6}
                        fill="#0b0f19" // brand-dark
                        stroke="#0ea5e9" // brand primary border
                        strokeWidth={1}
                      />
                      {/* Tooltip pointer */}
                      <polygon
                        points="-5,-15 0,-10 5,-15"
                        fill="#0b0f19"
                        stroke="#0ea5e9"
                        strokeWidth={1}
                      />
                      {/* Cover border line where triangle meets rect */}
                      <line x1={-4} y1={-15} x2={4} y2={-15} stroke="#0b0f19" strokeWidth={1.5} />
                      <text
                        textAnchor="middle"
                        y={-23}
                        fill="#ffffff"
                        fontSize={9.5}
                        fontWeight="extrabold"
                        letterSpacing={0.5}
                        style={{ userSelect: "none" }}
                      >
                        {label.toUpperCase()}
                      </text>
                    </g>
                  )}
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

      </div>
    </section>
  );
});

export default GlobalExportReach;
