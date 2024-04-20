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
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XQZ652E0YZ"
        ></Script>
        <Script id="google-analytics">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-XQZ652E0YZ');
    `}
        </Script>
        <Script id="google-tag-analytics">
          {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TNGVJMB3');
          `}
          </Script> */}
      </head>
      <body className={inter.className}>
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNGVJMB3"
height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript> */}

        {process.env.APP_ENV == 'production' ? (<GoogleAnalytics gaId="G-XQZ652E0YZ" />) : ''}
        {children}
      </body>
    </html>
  );
}
