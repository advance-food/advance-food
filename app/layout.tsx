import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advance Food - Celebrating 5 Years of Excellence in Food Export & Import",
  description: "Advance Food - Your trusted partner in global food trade. Premium processor and exporter of dehydrated garlic, dehydrated onion, and specialty spice powders to over 50+ countries.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "food export",
    "food import",
    "global food trade",
    "Advance Food",
    "dehydrated garlic",
    "dehydrated onion",
    "specialty powders",
    "exporters",
    "importers",
    "food products",
    "international trade",
    "APMC Marketing Yard",
    "Mahuva Gujarat"
  ],
  authors: [{ name: "Advance Food" }],
  openGraph: {
    title: "Advance Food - Celebrating 5 Years of Excellence in Food Export & Import",
    description: "Your trusted partner in global food trade. Celebrating 5 years of excellence with 500+ satisfied clients worldwide.",
    type: "website",
    url: "https://www.advancefood.co.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

