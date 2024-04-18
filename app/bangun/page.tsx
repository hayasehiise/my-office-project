import { SecondSection, SectionMain, SectionProject, SectionTahap, SectionLast, SectionKonsul, Footer } from "@/components/bangun/sectionBangun"



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
            <Footer />
        </main>
        </>
    )
}
