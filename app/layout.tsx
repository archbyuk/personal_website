import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navigation";
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
  title: "정진욱 – Portfolio",
  description: "Personal site for showcasing work and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen bg-gray-50`}
      >
        <div className="max-w-7xl pt-8 px-24 mx-auto flex flex-col text-center w-full bg-white rounded-lg">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}