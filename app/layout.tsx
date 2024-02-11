
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enlumi Test",
  description: "Enlumi test Assignment",
  keywords: [],
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <Navbar />
        <MobileNavbar />
            {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
