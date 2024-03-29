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
      <div className="bg-gradient-to-t from-[#6f4e37] from-50% to-[#856d4d] to-60%">
      <NavMenu />
      <SectionMain />
      <SectionServiceBlock />
      {/* <SectionCarousel /> */}
      <SectionFooter />
      <SectionCopyright />
      </div>
    </>
  );
}
