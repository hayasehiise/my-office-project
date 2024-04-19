import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XQZ652E0YZ"></script>
      </head>
      <body className={inter.className}>
      <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XQZ652E0YZ');
        </script>
        {children}
      </body>
    </html>
  );
}
