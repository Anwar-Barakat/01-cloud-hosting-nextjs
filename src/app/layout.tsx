import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import HeaderSection from "../components/Header/Header";
import FooterSection from "@/components/footer/footer";

// toastr notification 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });


export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud Hosting, NEXTJS App",
};

interface RootLayoutRoot {
  children: React.ReactNode
}

export default function RootLayout({children }: RootLayoutRoot) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderSection />
        <ToastContainer theme="colored" />
        <main className="fix-height">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
