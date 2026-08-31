import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WikiFooter } from "@/app/_components/WikiFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "WikiBiome — The Human Microbiome Encyclopedia";
const description =
  "Explore the organisms, ecological pressures, and molecular conversations shaping human health through an evidence-linked encyclopedia.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wikibiome.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "WikiBiome",
    images: [{ url: "/og-blue.png", width: 1732, height: 909, alt: "WikiBiome — the human microbiome encyclopedia" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-blue.png"] },
  icons: { icon: "/favicon.png" },
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
        <WikiFooter />
      </body>
    </html>
  );
}
