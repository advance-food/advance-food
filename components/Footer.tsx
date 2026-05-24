"use client";

import React from "react";
import { Clock, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-brand-dark text-white border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 cursor-pointer text-left"
            >
              <div className="h-10 w-10 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Advance Food Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  Advance Food
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase block -mt-1">
                  Import & Export
                </span>
              </div>
            </button>
            <p className="text-sm text-gray-400 leading-relaxed pt-2">
              Connecting premium quality Indian dehydrated vegetables and spice powders to global industrial food markets.
            </p>
            {/* Certifications & Registrations Badges */}
            <div className="flex flex-wrap gap-2 pt-3">
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white tracking-wide select-none">
                FSSAI Certified
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white tracking-wide select-none">
                ISO Certified
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white tracking-wide select-none">
                APEDA
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white tracking-wide select-none">
                Spice Board
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white tracking-wide select-none">
                MSME
              </span>
            </div>
            {/* Clock icon / Hours */}
            <div className="flex items-center gap-2.5 text-sm text-gray-400 pt-3">
              <Clock size={16} className="text-brand-primary shrink-0" />
              <span>Mon - Sun: 9 AM - 6 PM IST</span>
            </div>
          </div>

          {/* Column 2: Social Media profiles */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Follow Our Journey
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Stay connected with our global trading operations and milestones.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-brand-primary text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-brand-primary text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-brand-primary text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Quick Navigation
            </h3>
            <div className="flex flex-col gap-3.5">
              {[
                { label: "Home", target: "home" },
                { label: "About Us", target: "about" },
                { label: "Products Catalog", target: "products" },
                { label: "Why Choose Us", target: "why-choose-us" },
                { label: "Contact Us", target: "contact" },
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.target)}
                  className="text-left text-sm text-gray-400 hover:text-white transition-colors cursor-pointer w-fit group flex items-center gap-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Global Support
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Mahuva, Gujarat, India - 364290
                </span>
              </div>
              <div className="flex gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-brand-primary shrink-0 mt-1" />
                <div>
                  <a href="tel:+919825895232" className="hover:text-white transition-colors block">+91 9825895232</a>
                </div>
              </div>
              <div className="flex gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-brand-primary shrink-0 mt-1" />
                <div>
                  <a href="mailto:info@advancefood.in" className="hover:text-white transition-colors block">info@advancefood.in</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider and Copyright block */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
          <p>© {currentYear} Advance Food. All rights reserved. Celebrating 5 Years of Global Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
