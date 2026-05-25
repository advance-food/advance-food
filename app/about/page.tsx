"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, Leaf, Award, ArrowRight, Target, Eye } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck className="text-brand-primary w-8 h-8" />,
      title: "Laboratory-Grade Quality",
      desc: "Every batch of our dehydrated crops undergoes rigorous microbiological and biological analysis. We conform strictly to ISO, FSSAI, APEDA, and Spice Board certifications to guarantee zero contamination.",
    },
    {
      icon: <HeartHandshake className="text-brand-primary w-8 h-8" />,
      title: "Customer-First Partnerships",
      desc: "We prioritize long-term global industrial partnerships. Offering customized product mesh sizing, bespoke moisture-proof packaging, and transparent freight rates to build true supply chain trust.",
    },
    {
      icon: <Leaf className="text-brand-primary w-8 h-8" />,
      title: "Direct Sourcing Integrity",
      desc: "Operating directly from the fertile agricultural heartlands of Gujarat, we work hand-in-hand with local farming networks, ensuring fair trade practices and sustainable crop sourcing.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Premium Visual Banner Header */}
      <section
        className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 to-brand-dark/80"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            About Advance Food
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-50 text-brand-primary text-xs font-bold uppercase tracking-wider select-none">
                <Award size={14} className="shrink-0" />
                <span>Our Journey Since 2021</span>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                Advance Food Industries
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                <strong>Advance Food Industries</strong> is a trusted manufacturer, processor and exporter of premium quality food ingredients, specializing in Dehydrated vegetables (especially dehydrated onion and garlic) and a wide spectrum of Indian spices. We are committed to delivering authentic taste, superior flavor, and unmatched food safety to customers across domestic and global markets.
              </p>
            </div>

            {/* Right Interactive Image Board */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-sky-500/10 rounded-3xl filter blur-2xl -z-10 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop"
                alt="Advance Food spice trade"
                className="rounded-3xl shadow-2xl border border-gray-100 object-cover w-full h-[450px]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Beautiful Split Mission & Vision Section */}
      <section className="pt-10 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-50/20 rounded-full filter blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-150 shadow-xs hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 border-l-4 border-l-brand-primary flex flex-col group">
              <div className="h-12 w-12 rounded-xl bg-sky-50 text-brand-primary flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-300">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Our Mission</h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Driving Purpose & Action</p>
              
              <ul className="mt-6 space-y-4 flex-1">
                <li className="flex gap-3.5 items-start">
                  <span className="h-5 w-5 rounded-full bg-sky-50 text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary"></span>
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Provide superior quality dehydrated food ingredients and spices that enhance culinary experiences worldwide.
                  </span>
                </li>
                <li className="flex gap-3.5 items-start">
                  <span className="h-5 w-5 rounded-full bg-sky-50 text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary"></span>
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Maintain stringent quality, hygiene, and food safety standards across all products and processes.
                  </span>
                </li>
                <li className="flex gap-3.5 items-start">
                  <span className="h-5 w-5 rounded-full bg-sky-50 text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary"></span>
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Build long term partnerships with customers by delivering reliable products, exceptional service, and timely supply.
                  </span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-150 shadow-xs hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 border-l-4 border-l-amber-500 flex flex-col group">
              <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-300">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Our Vision</h3>
              <p className="text-sm text-amber-500/80 font-bold uppercase tracking-widest mt-1">Sights Set On The Future</p>
              
              <ul className="mt-6 space-y-4 flex-1">
                <li className="flex gap-3.5 items-start">
                  <span className="h-5 w-5 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Be recognized as a global leader in dehydrated food ingredients and spices.
                  </span>
                </li>
                <li className="flex gap-3.5 items-start">
                  <span className="h-5 w-5 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Supply authentic, natural, and high-performance ingredients to kitchens, food processors, and spice brands around the world.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase">
              Operational Standards
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Our Core Company Values
            </p>
            <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-150 shadow-xs hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="h-16 w-16 rounded-xl bg-sky-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beautiful Call to Action Conversion Banner */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to partner with a trusted global food supplier?
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mt-4 max-w-xl">
            Get in touch with our export sales team today to discuss volume pricing, custom packaging, and custom cut specifications.
          </p>
          <Link
            href="/contact"
            className="mt-8 flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group"
          >
            <span>Contact Our Team</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
