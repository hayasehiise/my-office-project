import type { Metadata } from "next";
import {Montserrat} from 'next/font/google'
import {Roboto} from 'next/font/google'
export const metadata: Metadata = {
    title: "Awaludin Agen Page",
    description: "Selamat Datang di Awaludin Agen Page",
};

const montserrat = Montserrat({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], weight: '400' });

export default function AgenLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main className={montserrat.className}>{children}</main>
  }