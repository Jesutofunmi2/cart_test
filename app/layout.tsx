"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./page";
import Checkout from "./checkout";

const inter = Inter({ subsets: ["latin"] });

  const metadata: Metadata = {
  title: "Enlumi Test",
  description: "Enlumi test Assignment",
  keywords: [],
};


export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                {" "}
              </Route>
              <Route path="/checkout" element={<Checkout />}>
                {" "}
              </Route>
            </Routes>
          </BrowserRouter>
        </ReduxProvider>
      </body>
    </html>
  );
}
