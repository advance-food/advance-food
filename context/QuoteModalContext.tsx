"use client";

import React, { createContext, useContext, useState } from "react";
import { X } from "lucide-react";
import ContactForm from "../components/ContactForm";

interface QuoteModalContextType {
  isOpen: boolean;
  selectedProduct: string;
  openQuoteModal: (productName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openQuoteModal = (productName: string = "General Inquiry") => {
    setSelectedProduct(productName);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setSelectedProduct("");
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, selectedProduct, openQuoteModal, closeQuoteModal }}>
      {children}

      {/* Global Premium Backdrop Quote Modal Form */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in"
          onClick={closeQuoteModal}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl relative border border-gray-150 animate-fade-in-up"
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
                onClick={closeQuoteModal}
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
                onClose={closeQuoteModal} 
              />
            </div>
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
