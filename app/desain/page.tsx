import {
  SectionContact,
  SectionOne,
  SectionPaket,
  SectionProject,
  SectionThree,
  SectionTwo,
} from "./components/desainSection";

export default function Desain() {
  return (
    <>
      <main className="container-xl">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionProject />
          <SectionPaket />
          <SectionContact />
      </main>
    </>
  );
};
