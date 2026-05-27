"use client";

import React, { useState, useEffect } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const PRODUCT_CATEGORIES = {
  "Main Specialties": [
    "Dehydrated Garlic",
    "Dehydrated White Onion",
    "Dehydrated Red/Pink Onion",
    "Dried Red Chilli",
    "Cumin Seeds",
    "Dry Ginger",
    "Turmeric",
    "Green Chilli Powder",
    "Mringa Leaves/Powder",
  ],
  "Other Herbs & Powders": [
    "Dehy./Fried/Coated Onion",
    "Lemon Powder",
    "Tamarind Powder",
    "Beet Root Flakes/Powder",
    "Carrot Flakes/Powder",
    "Fennel (Saunf) Powder",
    "Coriander (Dhania) Leaves/Powder",
    "Fenugreek (Methi) Powder",
    "Ajwain (Carom) Seeds/Powder",
    "Aamchur/Mango Powder",
    "Oregano Seasoning Green/Red",
    "Kasuri Methi Leaves/Powder",
    "Mint Leaves Powder",
    "Spinach (Palak) Powder",
    "Neem Powder",
    "Amla (Gooseberry) Powder",
    "Isabgol (Psyllium Husk/Powder)",
    "Tulsi (Holy Basil) Powder",
    "Triphala Powder",
    "Ashwagandha Powder",
  ],
};

interface ContactFormProps {
  preselectedProduct?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export default function ContactForm({
  preselectedProduct = "",
  isModal = false,
  onClose
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: preselectedProduct && preselectedProduct !== "General Inquiry"
      ? `Business Quote Request - ${preselectedProduct}`
      : "",
    message: "",
    botTrap: "", // Honeypot spam prevention (unique name to avoid browser autofill)
  });

  const [selectedProducts, setSelectedProducts] = useState<string[]>(() => {
    if (preselectedProduct && preselectedProduct !== "General Inquiry") {
      return [preselectedProduct];
    }
    return [];
  });
  const [showProductSelector, setShowProductSelector] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedProducts.length > 0) {
      setFormData((prev) => ({
        ...prev,
        subject: `Business Quote Request - ${selectedProducts.join(", ")}`,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        subject: preselectedProduct === "General Inquiry" ? "General Inquiry" : "",
      }));
    }
  }, [selectedProducts, preselectedProduct]);

  const handleRemoveProduct = (productName: string) => {
    setSelectedProducts((prev) => prev.filter((p) => p !== productName));
  };

  const handleToggleProduct = (productName: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productName)
        ? prev.filter((p) => p !== productName)
        : [...prev, productName]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSuccess(true);
      setSelectedProducts([]);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        botTrap: "",
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-md">
      {success ? (
        <div className="text-center py-8 animate-fade-in-up flex flex-col items-center">
          <div className="h-16 w-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Request Sent Successfully!</h3>
          <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out to Advance Food. We have dispatched a confirmation email to you. Our export sales team will review your specifications and reply within 24 hours.
          </p>
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="mt-8 bg-brand-primary text-white font-bold py-2.5 px-6 rounded-xl hover:bg-brand-primary/95 transition-all shadow-md cursor-pointer"
            >
              Close Window
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-semibold">
              {error}
            </div>
          )}

          {/* Invisible Honeypot Field for Spam Protection */}
          <input
            type="text"
            name="botTrap"
            value={formData.botTrap}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Your Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-brand-primary focus:bg-white outline-hidden transition-all text-gray-800 font-semibold"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Business Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. buyer@company.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-brand-primary focus:bg-white outline-hidden transition-all text-gray-800 font-semibold"
              />
            </div>
          </div>

          {/* Premium Multiple Products Selection Area */}
          <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                Select Products for Quote
              </label>
              <button
                type="button"
                onClick={() => setShowProductSelector(!showProductSelector)}
                className="text-xs font-bold text-brand-primary hover:underline cursor-pointer focus:outline-hidden"
              >
                {showProductSelector ? "Hide Product List ▲" : "Manage Products ▼"}
              </button>
            </div>

            {/* Selected products pills */}
            <div className="flex flex-wrap gap-2 mb-1">
              {selectedProducts.length === 0 ? (
                <span className="text-xs text-gray-400 italic">
                  No products selected. (Click 'Manage Products' to select items, or leave blank for general inquiries)
                </span>
              ) : (
                selectedProducts.map((prod) => (
                  <span
                    key={prod}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-sky-50 text-brand-primary border border-sky-100 animate-fade-in"
                  >
                    {prod}
                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(prod)}
                      className="hover:text-red-500 font-extrabold text-sm line-height-none focus:outline-hidden cursor-pointer"
                    >
                      &times;
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* Dropdown Checklist selector */}
            {showProductSelector && (
              <div className="mt-4 bg-white border border-gray-200 rounded-xl p-4 shadow-xs animate-fade-in-up">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:border-brand-primary focus:bg-white outline-hidden transition-all text-gray-800 font-semibold mb-3"
                />

                <div className="max-h-48 overflow-y-auto space-y-4 pr-1">
                  {Object.entries(PRODUCT_CATEGORIES).map(([category, items]) => {
                    const filteredItems = items.filter(item =>
                      item.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                    if (filteredItems.length === 0) return null;

                    return (
                      <div key={category}>
                        <h4 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">
                          {category}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {filteredItems.map((item) => {
                            const isChecked = selectedProducts.includes(item);
                            return (
                              <label
                                key={item}
                                className={`flex items-center gap-2 p-2 rounded-lg border text-xs font-semibold cursor-pointer select-none transition-all ${isChecked
                                    ? "bg-sky-50/50 border-brand-primary/30 text-brand-primary"
                                    : "bg-gray-50/50 border-gray-150 text-gray-600 hover:bg-gray-100"
                                  }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleToggleProduct(item)}
                                  className="rounded-sm border-gray-300 text-brand-primary focus:ring-brand-primary h-3.5 w-3.5 cursor-pointer"
                                />
                                <span>{item}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Telephone / Whatsapp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 555 019 2834"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-brand-primary focus:bg-white outline-hidden transition-all text-gray-800 font-semibold"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                readOnly={selectedProducts.length > 0}
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Bulk dehydrated onion pricing"
                className={`w-full border rounded-xl px-4 py-3 text-sm focus:bg-white outline-hidden transition-all text-gray-800 font-semibold ${selectedProducts.length > 0
                    ? "bg-gray-100 border-gray-250 cursor-not-allowed text-gray-400"
                    : "bg-gray-50 border-gray-200 focus:border-brand-primary"
                  }`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Detailed Specifications / Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={isModal ? "Detail your required quantity, cut size, packaging type, and target delivery port..." : "Write your detailed message here..."}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-brand-primary focus:bg-white outline-hidden transition-all text-gray-800 font-semibold resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-3.5 rounded-xl text-base transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Processing Request...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>{isModal ? "Request Technical Quote" : "Send Message"}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return formContent;
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Information Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase">
                Contact Us
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
                Connect With Us Today
              </p>
              <div className="h-1.5 w-16 bg-brand-primary mt-4 rounded-full"></div>
              <p className="text-base text-gray-600 mt-5 leading-relaxed">
                Have questions regarding raw specs, phytosanitary certificates, or ocean logistics? Submit your details through the form to dispatch an enquiry directly to our team.
              </p>
            </div>
          </div>

          {/* Right Column Form wrapper */}
          <div className="lg:col-span-7">
            {formContent}
          </div>
        </div>
      </div>
    </section>
  );
}
