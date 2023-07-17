import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "./head";
import { Poppins } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin App",
  description: "Get Links",
  keywords: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
