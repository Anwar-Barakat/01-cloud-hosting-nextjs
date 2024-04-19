import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import HeaderSection from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });


export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud Hosting, NEXTJS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderSection />
        <main>{children}</main>
      </body>
    </html>
  );
}
