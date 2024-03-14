import { SectionContact, SectionOne, SectionProject, SectionThree, SectionTwo } from "./components/desainSection"

const Desain = () => {
    return (
        <>
        <main className="2xl:container-2xl xl:container-xl md:container-md sm:container-sm ">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionProject />
            <SectionContact />
        </main>
        </>
    )
}

export default Desain