import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Freelance Page",
    description: "",
};

export default function FreelanceLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main>{children}</main>
  }