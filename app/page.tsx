"use client";
import { SectionCarousel, SectionMain, SectionServiceCarousel,SectionServiceBlock, SectionFooter, SectionCopyright } from "@/components/homeSection";

export default function Home() {
  return (
    <>
      <SectionMain />
      <SectionServiceBlock />
      <SectionCarousel />
      <SectionFooter />
      <SectionCopyright />
    </>
  );
}
