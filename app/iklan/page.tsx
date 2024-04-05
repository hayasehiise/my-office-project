import {
  SectionMain,
  SectionSecond,
  SectionThird,
  SectionProjects,
  SectionLast
} from "@/components/iklan/sectionIklan";

export default function IklanPage() {
  return (
    <>
      <main className=" snap-y snap-mandatory h-screen overflow-y-scroll">
        <SectionMain />
        <SectionSecond />
        <SectionThird />
        <SectionProjects />
        <SectionLast />
      </main>
    </>
  );
}
