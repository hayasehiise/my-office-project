import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Buat Iklan Page",
  description: "",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function IklanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={montserrat.className}>{children}</main>;
}
