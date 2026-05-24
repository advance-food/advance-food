"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

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
    subject: preselectedProduct ? `Business Quote Request - ${preselectedProduct}` : "",
    message: "",
    website: "", // Honeypot spam prevention
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
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
            name="website"
            value={formData.website}
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
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Bulk dehydrated onion pricing"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-brand-primary focus:bg-white outline-hidden transition-all text-gray-800 font-semibold"
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
