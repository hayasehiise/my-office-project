"use client";
import LowonganList from './lowonganList'

interface SectionProps {
  children: React.ReactNode;
  className: string;
}

function Section({ children, className }: SectionProps) {
  return <section className={`${className} flex flex-col`}>{children}</section>;
}

export function SectionMain() {
  return (
    <div className="w-full h-dvh sm:bg-[url(/image/lowongan/background.jpg)] bg-[url(/image/lowongan/bg-phone.jpg)] bg-cover">
      <Section className="w-full h-dvh bg-black bg-opacity-45 justify-center">
        <p className="sm:text-6xl text-2xl font-extrabold text-white sm:px-24 px-5">
          Tempat Kerja Idaman Akan
        </p>
        <p className="sm:text-6xl text-2xl font-extrabold text-white sm:px-24 px-5">
          Membuat Produktifitas Berkualitas
        </p>
        <p className="sm:text-lg text-sm sm:w-1/2 w-2/3 font-semibold text-white pt-5 sm:px-24 px-5">
          kami akan memberikan lingkungan kerja yang mendukung, memotivasi, dan
          memungkinkan Anda untuk berkembang secara profesional.
        </p>
      </Section>
    </div>
  );
}

export function SectionJob() {
  return (
    <Section className="w-full h-full p-5">
      <p className="text-center text-3xl font-bold pb-5">
        Lowongan Yang Tersedia
      </p>
      {/* bagian list lowongan dari API */}
      <LowonganList />
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="grid grid-cols-2 gap-0 bg-[#4e7dd4] text-white justify-center items-center xl:px-10 sm:px-10 xs: py-5">
        <div className="text-left">
          <p>CV.Infinity Project Property</p>
          <p>Kantor Infinity</p>
          <p>Jl.Domba no.13 Kel.Talise</p>
          <p>Palu, Sulawesi Tengah</p>
          <p>infinityprojectproperty22@gmail.com</p>
        </div>
        <div>
          <p className="text-right">
            Copyright &copy; Hery Setiawan (Staff IT Infinity Project Property)
          </p>
        </div>
      </div>
    </footer>
  );
}
