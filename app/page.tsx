"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Products from "../components/Products";
import CTABanner from "../components/CTABanner";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { X } from "lucide-react";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleGetQuoteClick = () => {
    setSelectedProduct("General Inquiry");
    setIsQuoteModalOpen(true);
  };

  const handleProductSelect = (productName: string) => {
    setSelectedProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct("");
  };

  return (
    <>
      {/* Persistent sticky navigation header */}
      <Header />

      {/* Main Page Layout Sections */}
      <main className="min-h-screen">
        <Hero onGetQuoteClick={handleGetQuoteClick} />
        
        <Stats />
        
        <WhyChooseUs />
        
        <Products onProductSelect={handleProductSelect} />
        
        <CTABanner onContactClick={handleGetQuoteClick} />
        
        <ContactForm preselectedProduct="General Inquiry" />
      </main>

      {/* Persistent dark footer and WhatsApp widget */}
      <Footer />
      <WhatsAppButton />

      {/* Premium Backdrop Quote Modal Form */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div 
            className="bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl relative border border-gray-100/50 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header Bar */}
            <div className="bg-brand-primary p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Request a Business Quote</h3>
                <p className="text-xs text-sky-100 mt-1">
                  Fill out the specifications to dispatch an enquiry directly to our team.
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                aria-label="Close quote modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Inner Scrollable Form */}
            <div className="p-2 max-h-[75vh] overflow-y-auto">
              <ContactForm 
                preselectedProduct={selectedProduct} 
                isModal={true} 
                onClose={handleCloseModal} 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
