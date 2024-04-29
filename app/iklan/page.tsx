import {
  SectionMain,
  SectionSecond,
  SectionThird,
  SectionProjects,
  SectionLast,
  Footer
} from "@components/iklan/sectionIklan";

export default function IklanPage() {
  return (
    <>
        <SectionMain />
        <SectionSecond />
        <SectionThird />
        <SectionProjects />
        <SectionLast />
        <Footer />
    </>
  );
}
