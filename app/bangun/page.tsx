import { SecondSection, SectionMain, SectionProject, SectionTahap } from "./components/sectionBangun"



export default function Bangun() {
    return(
        <>
        <main className="container-xl">
            <SectionMain />
            <SecondSection />
            <SectionProject />
            <SectionTahap />
        </main>
        </>
    )
}
