import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Awaludin Agen Page",
    description: "Selamat Datang di Awaludin Agen Page",
};

export default function AgenLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main>{children}</main>
  }