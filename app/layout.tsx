import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { QuoteModalProvider } from "../context/QuoteModalContext";

export const metadata: Metadata = {
  title: "Advance Food - Celebrating 15 Years of Excellence in Food Export & Import",
  description: "Advance Food - Your trusted partner in global food trade. Premium processor and exporter of dehydrated garlic, dehydrated onion, and specialty spice powders to over 11+ countries.",
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
    title: "Advance Food - Celebrating 15 Years of Excellence in Food Export & Import",
    description: "Your trusted partner in global food trade. Celebrating 15 years of excellence with 500+ satisfied clients worldwide.",
    type: "website",
    url: "https://www.advancefood.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-NQWB310SDQ";

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <QuoteModalProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </QuoteModalProvider>
      </body>
    </html>
  );
}

