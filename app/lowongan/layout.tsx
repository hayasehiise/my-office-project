import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Lowongan Page",
    description: "",
};

export default function AgenLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main>{children}</main>
  }