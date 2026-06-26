"use client";

import React from "react";
import Link from "next/link";
import WhyChooseUs from "../../components/WhyChooseUs";
import { 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Users, 
  Leaf, 
  ArrowRight 
} from "lucide-react";

export default function WhyChooseUsPage() {
  const details = [
    {
      icon: <Sparkles className="text-brand-primary w-6 h-6 animate-pulse" />,
      title: "Premium Quality & Purity",
      desc: "Products are processed keeping natural aroma, flavor, and rich nutritional profile fully intact.",
    },
    {
      icon: <Cpu className="text-brand-primary w-6 h-6" />,
      title: "State of the Art Processing",
      desc: "Uncompromising hygiene and consistency through advanced controlled dehydration technologies.",
    },
    {
      icon: <ShieldCheck className="text-brand-primary w-6 h-6" />,
      title: "Food Safety Compliance",
      desc: "Our products fully meet strict international food safety standards (BRCGS, FDA, Halal, Kosher, ISO, FSSAI, Spice Board, APEDA etc.).",
    },
    {
      icon: <Globe className="text-brand-primary w-6 h-6" />,
      title: "Global Supply & Export Capability",
      desc: "Capable of serving demanding industrial seasoning & food brand customers worldwide with dependable maritime logistics.",
    },
    {
      icon: <Users className="text-brand-primary w-6 h-6" />,
      title: "Customer Centric Approach",
      desc: "Delivering customized solutions for bulk packaging sizes, specialized blends, and tailored product specifications.",
    },
    {
      icon: <Leaf className="text-brand-primary w-6 h-6" />,
      title: "Sustainably Sourced Raw Materials",
      desc: "Partnering closely with trusted regional farmers to ensure responsible sourcing, farming equity, and consistent crop quality.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Premium Watercolor Banner Header */}
      <section
        className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center bg-cover bg-center border-b border-gray-150"
        style={{
          backgroundImage: `url('/premium_watercolor_why_choose_us.png')`,
        }}
      >
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
            Our Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
            Why Partner With Us?
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Render the standard Core Values grid component */}
      <WhyChooseUs />

      {/* Expanded Infrastructure Advantage details section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-50/20 rounded-full filter blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase">
              Operational Excellence
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Our Supply Chain Pillars
            </p>
            <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
            <p className="text-base text-gray-600 mt-4 max-w-xl mx-auto">
              Our physical assets, technical compliance systems, and logistical location unite to guarantee high-performance global food supply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-150 shadow-xs hover:shadow-xl hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="h-12 w-12 rounded-xl bg-sky-50 text-brand-primary flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner leading to Contact */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to initiate a trial contract with us?
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mt-4 max-w-xl">
            We support flexible contract sizes and optimized container mix-loading (e.g. half garlic, half onion kibbled in a single container). Let's chat.
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
