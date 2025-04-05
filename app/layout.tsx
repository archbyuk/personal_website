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
    <html lang="ko" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-50`}>
          <div className="bg-white w-full max-w-7xl mx-auto flex flex-col text-center rounded-lg px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 pt-20">
            <Navbar />
            {children}
            <Footer />
          </div>
      </body>
    </html>
  );
}