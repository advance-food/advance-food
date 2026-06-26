"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const showSolidHeader = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { label: "Home", target: "/" },
    { label: "About Us", target: "/about" },
    { label: "Products", target: "/products" },
    { label: "Why Choose Us", target: "/why-choose-us" },
    { label: "Process", target: "/process" },
    { label: "Blogs", target: "/blogs" },
    { label: "Contact", target: "/contact" },
  ];

  const filteredNavLinks = isHomePage
    ? navLinks.filter((link) => link.target !== "/")
    : navLinks;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${showSolidHeader
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 h-20"
          : "bg-transparent h-24"
          } flex items-center`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group text-left"
          >
            <div className="h-10 w-10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="Advance Food Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className={`font-extrabold text-lg sm:text-xl tracking-tight transition-colors block ${showSolidHeader ? "text-brand-dark group-hover:text-brand-primary" : "text-white group-hover:text-sky-200"
                }`}>
                Advance Food
              </span>
              <span className={`text-[10px] font-semibold tracking-wider uppercase block -mt-1 transition-colors ${showSolidHeader ? "text-gray-500" : "text-white/70"
                }`}>
                Import & Export
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {filteredNavLinks.map((link) => {
              const isActive = pathname === link.target;
              return (
                <Link
                  key={link.target}
                  href={link.target}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-2 ${isActive
                    ? "text-brand-primary"
                    : showSolidHeader
                      ? "text-gray-700 hover:text-brand-primary"
                      : "text-white/90 hover:text-white"
                    } group`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                </Link>
              );
            })}

            {/* Quick Call Action */}
            <a
              href="tel:+919825895232"
              className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full border transition-all duration-300 ${showSolidHeader
                ? "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                : "border-white/40 text-white hover:bg-white hover:text-brand-dark"
                }`}
            >
              <PhoneCall size={15} />
              <span>+91 9825895232</span>
            </a>
          </nav>

          {/* Mobile Menu Open Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="block md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className={showSolidHeader ? "text-gray-800" : "text-white"} size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Top Branding and Close */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Advance Food Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-brand-dark">
                Advance Food
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-all"
              aria-label="Close navigation menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav Links list */}
          <div className="flex flex-col gap-4 mt-8">
            {filteredNavLinks.map((link) => {
              const isActive = pathname === link.target;
              return (
                <Link
                  key={link.target}
                  href={link.target}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left font-bold text-lg py-2 px-3 rounded-lg transition-all cursor-pointer block ${isActive
                    ? "bg-sky-50 text-brand-primary"
                    : "text-gray-800 hover:bg-sky-50 hover:text-brand-primary"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Drawer Quick Contact Details */}
          <div className="mt-auto border-t border-gray-100 pt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Direct Enquiry
            </p>
            <a
              href="tel:+919825895232"
              className="flex items-center gap-3 text-brand-primary font-bold text-base hover:underline"
            >
              <PhoneCall size={18} />
              <span>+91 9825895232</span>
            </a>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Mahuva, Gujarat, India - 364290
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
