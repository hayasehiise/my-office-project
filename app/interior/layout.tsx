import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Interior Page",
    description: "",
};

export default function InteriorLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main className="">{children}</main>
  }