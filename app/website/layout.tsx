import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Website Page",
    description: "",
};

export default function WebsiteLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main className="flex flex-col">{children}</main>
  }