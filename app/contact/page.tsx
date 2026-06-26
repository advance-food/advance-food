"use client";

import React from "react";
import ContactForm from "../../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      icon: <Phone className="w-5 h-5 mt-1 shrink-0" />,
      title: "Direct Export Support",
      value: "+91 9825895232",
      href: "tel:+919825895232",
    },
    {
      icon: <Mail className="w-5 h-5 mt-1 shrink-0" />,
      title: "Business Email Support",
      value: "sales@advancefood.in",
      href: "mailto:sales@advancefood.in",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Premium Visual Banner Header */}
      <section
        className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 to-brand-dark/80"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Contact Our Global Team
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Main Form and Corporate Information split section */}
      <section className="pt-20 pb-10 bg-white relative">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-50/20 rounded-full filter blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Corporate Coordinate Columns */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase">
                  Global Support
                </h2>
                <p className="text-3xl font-extrabold text-gray-900 mt-2 leading-tight">
                  Connect With Us Today
                </p>
                <p className="text-base text-gray-500 mt-4 leading-relaxed">
                  Have specific queries regarding crop analytics, export pricing sheets, moisture parameters, or freight dispatch terms? Submit your specs or ring us directly.
                </p>
              </div>

              {/* Actionable Click-to-dial contacts - Clean, borderless premium list */}
              <div className="flex flex-col gap-6 w-full pl-2">
                {contacts.map((c, idx) => (
                  <a
                    key={idx}
                    href={c.href}
                    className="flex items-center gap-5 group py-1"
                  >
                    <div className="h-12 w-12 rounded-full bg-sky-50 text-brand-primary flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-xs">
                      {c.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        {c.title}
                      </h4>
                      <p className="text-lg sm:text-xl font-extrabold text-gray-900 mt-1.5 break-all group-hover:text-brand-primary transition-colors tracking-tight">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

            </div>

            {/* Right Interactive Form Column with single wrapper and glow */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary/10 to-sky-500/10 rounded-3xl filter blur-xl -z-10 opacity-70 animate-pulse-slow"></div>
              <ContactForm preselectedProduct="General Inquiry" isModal={true} />
            </div>

          </div>
        </div>
      </section>

      {/* Styled Interactive Location coordinates section */}
      <section className="bg-white pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-50/50 rounded-full filter blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Strategic Information Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block">
                  Strategic Processing Advantage
                </span>
                <h3 className="font-extrabold text-gray-900 text-2xl sm:text-3xl tracking-tight leading-tight">
                  Mahuva APMC Marketing Yard Unit
                </h3>
                <div className="h-1 bg-brand-primary w-12 rounded-full"></div>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed pt-2">
                  Stationed directly inside the garlic and onion agricultural trading capital of India, Mahuva (Gujarat). Connected with direct, rapid heavy logistics access to major Indian deepwater export terminals.
                </p>
              </div>


              {/* Google Maps External Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=APMC+Marketing+Yard,+Mahuva,+Gujarat,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-primary/95 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer text-sm tracking-wide font-semibold"
                >
                  <span>Open in Google Maps App</span>
                  <MapPin size={16} className="animate-bounce" />
                </a>
              </div>
            </div>

            {/* Right Real Map Embed Column */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-brand-primary/10 to-sky-500/10 rounded-3xl filter blur-2xl -z-10 opacity-70"></div>
              <div className="bg-white rounded-3xl border border-gray-150/80 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden h-[380px] shadow-inner">
                  {/* Google Map IFrame */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.7335967069176!2d71.76100917604313!3d21.093284585257924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958de6f9a0c7931%3A0x7d028448ebf5d21b!2sAPMC%20Market%20Yard%2C%20Mahuva!5e0!3m2!1sen!2sin!4v1716650000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Advance Food Mahuva Processing Unit Map Location"
                    className="grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  ></iframe>

                  {/* Premium Live Connection Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm border border-gray-200/80 px-3 py-1.5 rounded-full text-[10px] font-bold text-emerald-600 flex items-center gap-2 shadow-md select-none">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>LIVE CONNECTIVITY</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
