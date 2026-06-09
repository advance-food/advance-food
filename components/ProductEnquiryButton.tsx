"use client";

import React from "react";
import { useQuoteModal } from "../context/QuoteModalContext";
import { Send } from "lucide-react";

interface ProductEnquiryButtonProps {
  productTitle: string;
  className?: string;
  label?: string;
}

export default function ProductEnquiryButton({
  productTitle,
  className = "",
  label = "Request Business Quote"
}: ProductEnquiryButtonProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <button
      onClick={() => openQuoteModal(productTitle)}
      className={`inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-white font-extrabold px-8 py-4 rounded-xl text-base transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer group ${className}`}
    >
      <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      <span>{label}</span>
    </button>
  );
}
