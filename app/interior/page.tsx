// import SectionCarousel from "@/components/interior/sectionInterior";

import {
  SectionMain,
  SectionSecond,
  SectionThird,
  SectionKonsul,
  Footer,
} from "@components/interior/interiorSection";

export default function Interior() {
  return (
    <>
    <div className="bg-gradient-to-b from-stone-600 via-stone-400 to-stone-100 bg-fixed">
    <SectionMain />
    <SectionSecond />
    </div>
    <SectionThird />
    <SectionKonsul />
    <Footer />
    </>
  );
}
