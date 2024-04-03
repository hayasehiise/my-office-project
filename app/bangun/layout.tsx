import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bangun Rumah Page",
    description: "",
};

export default function BangunLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main>{children}</main>
  }