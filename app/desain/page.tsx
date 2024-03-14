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
      <main className="container-xl">
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
