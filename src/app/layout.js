import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/homepage/navbar/Navbar";
import Footer from "@/components/homepage/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SEBI RA Varun Kumar | Research Analyst | INH000024833",
  description:
    "SEBI Registered Research Analyst Varun Kumar (INH000024833) - 6+ years of equity market experience providing research-driven, transparent and disciplined market insights.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
