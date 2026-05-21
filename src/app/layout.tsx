import type { Metadata } from "next";
import { Cormorant_Garamond, Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sokara Group",
  description:
    "An elite advisory firm for principals and family offices. By invitation.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/sokara-s-mark-icon-180.png",
  },
  openGraph: {
    title: "Sokara Group",
    description:
      "An elite advisory firm for principals and family offices. By invitation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${bodoni.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
