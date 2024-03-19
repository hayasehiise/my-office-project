import { SecondSection, SectionMain, SectionProject, SectionTahap, SectionLast, SectionKonsul } from "./components/sectionBangun"



export default function Bangun() {
    return(
        <>
        <main className="container-xl">
            <SectionMain />
            <SecondSection />
            <SectionProject />
            <SectionTahap />
            <SectionLast />
            <SectionKonsul />
        </main>
        </>
    )
}
