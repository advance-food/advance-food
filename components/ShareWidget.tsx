"use client";

import React from "react";
import { Share2 } from "lucide-react";

export default function ShareWidget() {
  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-2xs">
      <h3 className="text-base font-extrabold text-gray-800 border-b border-gray-100 pb-3 mb-4">
        Share Article
      </h3>
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="flex items-center justify-center gap-2 border border-gray-200 hover:border-brand-primary text-gray-600 hover:text-brand-primary px-4 py-2.5 rounded-xl text-xs font-bold w-full transition-colors cursor-pointer"
        >
          <Share2 size={14} />
          <span>Copy Link</span>
        </button>
      </div>
    </div>
  );
}
