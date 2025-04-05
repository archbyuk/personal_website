import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

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
      <body className="bg-gray-50">
        <div className="w-full max-w-7xl mx-auto flex flex-col text-center bg-white rounded-lg px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 pt-18">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}