import {
  SectionMain,
  SectionSecond,
  SectionThird,
  SectionProjects
} from "@/components/iklan/sectionIklan";

export default function IklanPage() {
  return (
    <>
      <main className="">
        <SectionMain />
        <SectionSecond />
        <SectionThird />
        <SectionProjects />
      </main>
    </>
  );
}
