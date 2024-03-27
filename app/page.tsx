"use client";
import { SectionCarousel, SectionMain, SectionService, SectionFooter, SectionCopyright } from "@/components/homeSection";

export default function Home() {
  return (
    <>
      <SectionMain />
      <SectionService />
      <SectionCarousel />
      <SectionFooter />
      <SectionCopyright />
    </>
  );
}
