import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WikiBiome — The living world, connected",
  description:
    "An open field guide to Earth's living systems, from rainforest canopies to coral reefs.",
  openGraph: {
    title: "WikiBiome — The living world, connected",
    description:
      "An open field guide to Earth's living systems, from rainforest canopies to coral reefs.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WikiBiome — The living world, connected",
    description:
      "An open field guide to Earth's living systems, from rainforest canopies to coral reefs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
