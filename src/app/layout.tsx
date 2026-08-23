import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I Am Foundation",
  description: "Growing God's Kingdom - Christian Outreach & Community Support Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main" className="flex-grow">
          <div className="container-max px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
