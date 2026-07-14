import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { QuoteModalProvider } from "../context/QuoteModalContext";

export const metadata: Metadata = {
  title: "Advance Food | Premium Food Ingredients Exporter",
  description: "Advance Food is a premium food ingredients exporter. Your trusted partner in global food trade as a top food ingredients exporters. Processor of dehydrated garlic, onion, and spices.",
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
    "dehydrated garlic flakes",
    "dehydrated garlic powder",
    "dehydrated onion",
    "dehydrated white onion",
    "dehydrated white onion powder",
    "dehydrated red onion",
    "dehydrated pink onion",
    "dehydrated onion powder",
    "cumin seeds",
    "cumin powder",
    "coriander seeds",
    "coriander powder",
    "fennel seeds",
    "fennel powder",
    "dehydrated fried onion",
    "fresh fried onion",
    "red chilli",
    "red chilli flakes",
    "red chilli powder",
    "turmeric finger",
    "turmeric powder",
    "spray dried lemon powder",
    "mint leaves",
    "mint powder",
    "moringa leaves",
    "moringa powder",
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
    title: "Top Supplier of Dehydrated Onion, Garlic and Spices | Export and Wholesale",
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
        <link rel="preload" as="video" href="/video/hero-bg-vid.mp4" type="video/mp4" />
        {/* Google Analytics - Must be in <head> for Google Search Console Verification */}
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

