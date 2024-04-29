import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awaludin Channel - Awaludin",
  description: "Selamat Datang di Awaludin Channel - Awaludin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        {process.env.APP_ENV == 'production' ? (<GoogleAnalytics gaId="G-XQZ652E0YZ" />) : ''}
        {children}
      </body>
    </html>
  );
}
