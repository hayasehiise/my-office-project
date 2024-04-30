"use client";
import LowonganList from './lowonganList'
import Link from 'next/link'

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
    <footer className="flex flex-col inset-0 sm:px-24 px-12 pt-5 pb-2 bg-[#4e7dd4] text-white">
      <div className="flex mb-5">
        <img src="/image/logo/logo_2.png" className="h-10" />
        <p className="my-auto ml-2 text-xl font-bold select-none">
          Awaludin Agen
        </p>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-5 mb-2">
        <div className="flex flex-col">
          <p className="mb-3 text-lg font-semibold">Ikuti Saya Di:</p>
          <div className="flex gap-5">
            <Link href={`https://www.instagram.com/awaludin_infinity/`} target="_blank">
              <img src="/icons/instagram.png" className="h-10" />
            </Link>
            <Link href={`https://www.tiktok.com/@awaludin_infinity?lang=id-ID`} target="_blank">
            <img src="/icons/tiktok.png" className="h-10" />
            </Link>
            <Link href={`https://www.youtube.com/@awaludin1832`} target="_blank">
            <img src="/icons/youtube.png" className="h-10" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mb-3 text-lg font-semibold">Hubungi Saya</p>
          <div className="flex flex-col">
            <div className="flex">
            <img src="/icons/mail.png" className="h-5" />
            <p className="my-auto ml-2">awaludin.malewa@gmail.com</p>
            </div>
            <div className="flex">
            <img src="/icons/whatsapp.png" className="h-5" />
            <p className="my-auto ml-2">(+62) 821-2222-9500</p>
            </div>
            <div className="flex">
            <img src="/icons/map.png" className="h-5" />
            <p className="my-auto ml-2 w-1/2">Jl. Domba No.22, Talise, Kec. Palu Timur., Kota Palu, Sulawesi Tengah 94118</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ height: 5, borderWidth: 0, backgroundColor: 'black' }} />
      <div className="flex mt-2 justify-center">
        <p>Copyright &copy; | Staff IT (Hery Setiawan)</p>
      </div>
    </footer>
  );
}
