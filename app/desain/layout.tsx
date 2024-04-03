import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Desain Rumah Page",
    description: "",
};

export default function DesainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main>{children}</main>
  }