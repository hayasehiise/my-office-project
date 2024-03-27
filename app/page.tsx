"use client";
import { SectionCarousel, SectionMain, SectionService, SectionFooter } from "@/components/homeSection";

export default function Home() {
  return (
    <>
      <SectionMain />
      <SectionCarousel />
      <SectionService />
      <SectionFooter />
    </>
  );
}
