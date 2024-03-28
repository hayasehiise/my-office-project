"use client";
import {
  SectionCarousel,
  SectionMain,
  SectionServiceCarousel,
  SectionServiceBlock,
  SectionFooter,
  SectionCopyright,
} from "@/components/homeSection";
import NavMenu from "@/components/navbar";

export default function Home() {

  return (
    <>
      <NavMenu />
      <SectionMain />
      <SectionServiceBlock />
      {/* <SectionCarousel /> */}
      <SectionFooter />
      <SectionCopyright />
    </>
  );
}
