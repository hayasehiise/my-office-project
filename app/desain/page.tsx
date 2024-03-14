import {
  SectionContact,
  SectionOne,
  SectionProject,
  SectionThree,
  SectionTwo,
} from "./components/desainSection";

const Desain = () => {
  return (
    <>
      <main className="xl:container-xl sm:container-sm">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionProject />
          <SectionContact />
      </main>
    </>
  );
};

export default Desain;
