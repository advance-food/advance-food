"use client";

import React from "react";
import Link from "next/link";
import Certifications from "@/components/Certifications";
import {
  ArrowRight,
  Award,
  Sprout,
  Droplets,
  Crop,
  Thermometer,
  ShieldCheck,
  Box,
  Truck
} from "lucide-react";

export default function ProcessPage() {
  const steps = [
    {
      number: "1",
      title: "Raw material sourcing",
      desc: "Fresh vegetables, spices, and herbs are procured directly from trusted farmers across Gujarat and nearby regions. Each batch is evaluated for moisture content, freshness, freedom from pesticides, and overall quality before acceptance.",
      qcChecks: ["Farm-direct sourcing", "Pesticide testing", "Seasonal procurement"],
      icon: Sprout
    },
    {
      number: "2",
      title: "Washing & cleaning",
      desc: "Raw materials undergo a multi-stage washing process using clean, food-grade water to remove dirt, foreign matter, and surface contaminants, ensuring hygienically clean produce enters processing.",
      qcChecks: ["Multi-stage washing", "Food-grade water", "Foreign matter removal"],
      icon: Droplets
    },
    {
      number: "3",
      title: "Peeling, cutting & sizing",
      desc: "Produce is peeled where applicable and precision-cut into uniform sizes — slices, granules, minced, or powder grade — as per product specification and buyer requirement. Uniformity ensures consistent dehydration results.",
      qcChecks: ["Uniform sizing", "Custom cut grades", "Slices / granules / powder"],
      icon: Crop
    },
    {
      number: "4",
      title: "Dehydration / drying",
      desc: "Cut material is loaded into our industrial dehydration units and dried at carefully controlled temperatures and airflow rates. The process preserves colour, aroma, and nutritional value while reducing moisture to safe export levels (typically below 6-8%).",
      qcChecks: ["Temperature controlled", "Aroma preserved", "6-8% moisture target"],
      icon: Thermometer
    },
    {
      number: "5",
      title: "Quality inspection & sorting",
      desc: "Dried product is inspected on vibro-sifters and optical/manual sorters to remove discoloured, undersized, or defective pieces. Lab testing checks moisture %, microbial counts, colour value, and compliance with FSSAI and ISO 22000:2018.",
      qcChecks: ["FSSAI compliant", "ISO 22000:2018", "Lab-tested every batch"],
      icon: ShieldCheck
    },
    {
      number: "6",
      title: "Packaging & labelling",
      desc: "Approved product is packed in food-grade laminated pouches, HDPE bags, or cartons as per client requirement — from 1 kg retail packs to 25 kg bulk export bags. Each pack is labelled with batch number, manufacturing date, and all regulatory information.",
      qcChecks: ["1 kg - 25 kg options", "Food-grade packaging", "Batch traceability"],
      icon: Box
    },
    {
      number: "7",
      title: "Storage & dispatch",
      desc: "Finished goods are stored in a cool, dry, hygienic warehouse. Domestic orders are dispatched via road freight; export orders are shipped via JNPT/Mundra ports under APEDA registration with full documentation including COA, COO, and phytosanitary certificates.",
      qcChecks: ["APEDA registered", "Mundra / JNPT ports", "Full export documentation"],
      icon: Truck
    }
  ];

  return (
    <main className="min-h-screen pt-20 bg-gray-50/30">
      {/* Premium Watercolor Banner Header */}
      <section
        className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center bg-cover bg-center border-b border-gray-150"
        style={{
          backgroundImage: `url('/premium_watercolor_process.png')`,
        }}
      >
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
            Standard Operating Procedures
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
            Our Production Process
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pt-16 md:pt-24 pb-4 md:pb-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Central/Left Timeline Vertical Axis Line (Mobile left, Desktop center) */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-sky-300 via-sky-400 to-sky-500 rounded-full"></div>

            {/* Alternating Step Cards */}
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 1;
                const StepIcon = step.icon;

                // Card component JSX
                const cardJSX = (
                  <div className="w-full bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:border-brand-primary/45 transition-all duration-300 relative group hover:-translate-y-1.5 overflow-hidden">
                    {/* Decorative background gradient glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

                    <div className="relative z-10">
                      {/* Top Row: Icon & Title */}
                      <div className="flex items-center gap-3.5 pr-4 sm:pr-8 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300 shrink-0">
                          <StepIcon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div>
                          <span className="text-[10px] sm:text-xs font-extrabold text-brand-primary tracking-widest uppercase">
                            Stage 0{step.number}
                          </span>
                          <h2 className="text-lg sm:text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug mt-0.5">
                            {step.title}
                          </h2>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base font-medium">
                        {step.desc}
                      </p>

                      {/* QC Checks Bullets */}
                      <div className="pt-5 border-t border-gray-100">
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-primary mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                          QC Checks Performed
                        </p>
                        <ul className="grid grid-cols-1 gap-2.5">
                          {step.qcChecks.map((qc, qcIdx) => (
                            <li key={qcIdx} className="flex items-center gap-3">
                              <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                                <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="text-gray-700 font-semibold text-xs sm:text-sm">{qc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row justify-between items-center w-full relative"
                  >
                    {/* Left Column (Even index holds card, Odd is empty) */}
                    <div className="w-full md:w-[calc(50%-35px)] flex justify-end z-10 pl-10 sm:pl-14 md:pl-0">
                      {!isEven && cardJSX}
                    </div>

                    {/* Central/Left Timeline Circle Node (Mobile left, Desktop center) */}
                    <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 z-20 border-4 border-white flex items-center justify-center shadow-md select-none top-8 sm:top-10 md:top-1/2 md:-translate-y-1/2">
                      <span className="text-white text-[10px] font-black">{step.number}</span>
                    </div>

                    {/* Right Column (Odd index holds card, Even is empty) */}
                    <div className="w-full md:w-[calc(50%-35px)] flex justify-start z-10 pl-10 sm:pl-14 md:pl-0">
                      {isEven && cardJSX}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Block */}
      <section className="bg-white select-none pt-8 md:pt-12 pb-8">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase">
            Global Accreditations
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
            Our Certifications
          </p>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-xl mx-auto font-medium">
            We adhere strictly to international food safety and quality compliance accreditations.
          </p>
        </div>
        <div className="h-12 bg-white"></div>
        <Certifications />
        <div className="h-16 bg-white"></div>
      </section>

      {/* Conversion Banner leading to Contact */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to initiate a trial contract with us?
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mt-4 max-w-xl">
            We support flexible contract sizes and optimized container mix-loading. Let's chat.
          </p>
          <Link
            href="/contact"
            className="mt-8 flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group"
          >
            <span>Inquire for Partnership</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
