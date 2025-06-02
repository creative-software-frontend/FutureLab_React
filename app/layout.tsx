import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "../components/Home/ScrollButton";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Admission from "@/components/Home/Admission";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Future Lab :: Best Freelancing Training center in bangladesh",
  description: "Future Lab: Learn, Grow, Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`TK${geistSans.variable} TK${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <ScrollToTopButton />
        <Admission/>
        <Footer/>
      </body>
    </html>
  );
}
