"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { Button } from "@components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
}

type carouselProjectType = {
  image: string;
};

const carouselProjectItem: carouselProjectType[] = [
  { image: "/image/bangun/carousel/proyek1.jpg" },
  { image: "/image/bangun/carousel/proyek2.jpg" },
  { image: "/image/bangun/carousel/proyek3.jpg" },
  { image: "/image/bangun/carousel/proyek4.jpg" },
];

function Section({ children }: SectionProps) {
  return <section className="flex flex-col">{children}</section>;
}

export function SectionMain() {
  return (
    <Section>
      <div className="static w-full h-full xl:w-full sm:w-full xl:h-screen sm:h-full bg-gradient-to-b from-amber-700 via-amber-500 to-amber-100 justify-center text-center">
        <img
          src="/image/logo/logo_2.png"
          className="relative top-[15px] mx-auto z-10 sm:h-[100px] h-[50px]"
        />
        <p className="text-white mt-10 sm:text-4xl text-xl font-extrabold w-full mx-auto px-10">
        Bangun Rumah Impian Keluarga dengan Konsep Rumah Tumbuh tanpa Ribet, Mau?
        </p>
        <motion.img
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            bounce: 0.6,
            mass: 1,
            stiffness: 300,
            damping: 20,
          }}
          src="/image/bangun/main_section.png"
          className="relative z-10 left-0 right-0 transform -translate-x-1/2 mx-auto h-[250px] xl:h-[680px] sm:h-[550px]"
        />
      </div>
    </Section>
  );
}

export function SecondSection() {
  return (
    <Section>
      <div className="w-full h-full xl:mt-0 sm:mt-0 xs:mt-5 mt-5">
        <div className="flex xl:flex-row justify-center items-center">
          <div className="xl:w-1/2">
            <img
              src="/image/bangun/family_art.png"
              className="sm:w-[700px] w-[500px] mx-auto"
            />
          </div>
          <div className="xl:w-1/2">
            <p className="xl:text-4xl sm:text-2xl xs:text-xl text-lg font-extrabold pb-5">
              Kami Paham...
            </p>
            <p className="xl:text-lg sm:text-lg xs:text-sm text-sm text-left">
              Anda pasti pengen kasih yg terbaik untuk Keluarga, apalagi urusan
              rumah, <br />
              pasti diusahakan rumah itu jadi tempat yg nyaman untuk mereka,
              setuju?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center xl:mt-0 sm:mt-0 xs:mt-5 mt-5">
          <div className="xl:w-1/2 sm:w-96 xs:w-60 w-60">
            <p className="xl:text-4xl sm:text-2xl xs:text-xl text-lg font-extrabold text-center pb-5">
              Ada 2 Kabar Baik untuk Anda :
            </p>
            <p className="xl:text-2xl sm:text-xl xs:text-lg text-lg font-bold xl:pt-10 sm:pt-10 xs:pt-0 pt-0">
              Kabar Baik 1
            </p>
            <div className="xl:text-lg sm:text-lg xs:text-sm text-sm">
              <p className="pt-5">
                Sebenarnya, Anda nggak mesti bangun rumahnya langsung sekaligus.
                Dengan desain perencanaan yg matang sebelumnya, Anda bisa mulai
                membangun dengan konsep rumah tumbuh (bertahap).
              </p>
              <p className="pt-5">
                Walaupun bertahap, rumahnya bisa didesain supaya tetap nyaman
                saat dihuni.
              </p>
              <p className="pt-5">
                Nanti, kalau anak-anak makin rame, rezeki juga sudah terkumpul,
                mau lanjutkan pembangunannya pun Anda nggak akan bingung gimana
                tata ruang dan biaya bangunnya.
              </p>
            </div>
            <p className="xl:text-2xl sm:text-xl xs:text-lg text-lg font-bold pt-10">
              Kabar Baik 2
            </p>
            <div className="xl:text-lg sm:text-lg xs:text-sm text-sm">
              <p className="pt-5">
                Bangun rumah itu bukan hal yg mudah, mesti ngorbanin waktu,
                tenaga dan pikiran yg ekstra di sela-sela kesibukan Anda di
                kantor.
              </p>
              <p className="pt-5">
                Kabar baiknya, supaya Anda nggak pusing dan ribet kesana-kemari,
                tim Rumia akan membantu membangun rumah impian Anda dan
                Keluarga. Urusan rumah beres, kerjaan kantor Anda pun juga
                beres.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionProject() {
  return (
    <Section>
      <div className="w-full h-full xl:mt-24 sm:mt-10 xs:mt-10 mt-10">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-extrabold sm:text-3xl xs:text-xl text-xl">
            Proyek Rumah Yang Telah Selesai Dibuat Tim Infinity
          </p>
          <div className="mx-auto my-5">
              <Carousel className="w-[70%] mx-auto">
                <CarouselContent>
                  {carouselProjectItem.map((item, index) => (
                    <CarouselItem key={index}>
                      <img src={item.image} className="mx-auto" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext variant={'default'} className="sm:h-16 sm:w-16 h-7 w-7 sm:-mr-5" />
                <CarouselPrevious variant={'default'} className="sm:h-16 sm:w-16 h-7 w-7 sm:-ml-5"  />
              </Carousel>
            </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionTahap() {
  return (
    <Section>
      <div className="w-full h-full xl:my-10">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-10 xl:w-1/2">
            <p className="text-center sm:text-4xl text-xl font-extrabold">
              Flow Tahapan Pembangunan Rumah Anda?
            </p>
          </div>
          <div className="sm:w-1/2 xs:w-1/2 w-1/2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="sm:text-xl xs:text-lg text-lg font-bold">
                    Konsultasi
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="sm:text-lg xs:text-sm text-sm">
                      Analisa kebutuhan ruangan
                    </li>
                    <li className="text-lg">Analisa anggaran</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="/icons/arrow-down.svg"
                width={30}
                height={30}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <p className="xl:text-xl sm:text-xl xs:text-lg text-lg font-bold">
                    Survey Lokasi
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="xl:text-lg sm:text-lg xs:text-sm text-sm">
                      Analisa kondisi lahan
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="/icons/arrow-down.svg"
                width={30}
                height={30}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <p className="sm:text-xl xs:text-lg text-lg font-bold">
                    Desain & Perencanaan
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="sm:text-lg xs:text-sm text-sm">
                      Denah, Desain 3D, Gambar Kerja & RAB
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="/icons/arrow-down.svg"
                width={30}
                height={30}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <p className="sm:text-xl xs:text-lg text-lg font-bold">
                    Kontrak Kerja
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="sm:text-lg xs:text-sm text-sm">
                      Memperjelas hak & kewajiban
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="/icons/arrow-down.svg"
                width={30}
                height={30}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <p className="sm:text-xl xs:text-lg text-lg font-bold">
                    Pembangunan
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="sm:text-lg xs:text-sm text-sm">
                      Dilakukan sampai serah terima
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="/icons/arrow-down.svg"
                width={30}
                height={30}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <p className="sm:text-xl xs:text-lg text-lg font-bold">
                    Masa Retensi
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="sm:text-lg xs:text-sm text-sm">
                      Garansi kerusakan 3 bulan dari tim Infinity
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="/icons/arrow-down.svg"
                width={30}
                height={30}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  <p className="sm:text-xl xs:text-lg text-lg font-bold">
                    Selesai
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="sm:text-lg xs:text-sm text-sm">
                      Akad pembangunan selesai
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="/icons/arrow-down.svg"
                width={30}
                height={30}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  <p className="sm:text-xl xs:text-lg text-lg font-bold">
                    Testimoni
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="sm:text-lg xs:text-sm text-sm">
                      Pendapat Client Terhadap Hasil Pembangunan
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionLast() {
  return (
    <Section>
      <div className="w-full h-full">
        <div className="flex flex-col justify-center items-center bg-amber-700 xl:py-10 sm:py-10 xs:py-3 p-3 text-white">
          <div className="xl:w-1/2 sm:w-full xs:w-full xl:p-5 sm:p-5 xs:p-2 p-2">
            <p className="xl:text-2xl sm:text-2xl xs:text-lg font-semibold text-center">
              Untuk selanjutnya, Anda dapat mengkonsultasikan dulu bagaimana
              rencana Anda dan Keluarga,{" "}
              <span className="font-extrabold">Gratis.</span>
            </p>
          </div>
          <div className="xl:w-1/3 sm:w-96 xs:w-60 w-52">
            <Card>
              <CardHeader>
                <CardTitle className="xl:text-xl sm:text-xl xs:text-lg text-lg">
                  Beberapa Hal yang akan anda dapatkan ketika konsultasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-image-checkmark marker:text-4xl">
                  <div className="divide-y divide-black divide-dashed xl:text-lg sm:text-lg xs:text-sm text-sm">
                    <li className="p-3">Estimasi Biaya Pembangunan</li>
                    <li className="p-3">Estimasi Durasi Pembangunan</li>
                    <li className="p-3">Detail Sistem Kerja Tim Rumia</li>
                  </div>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionKonsul() {
  return (
    <Section>
      <div className="w-full h-full">
        <div className="flex flex-col text-center">
          <div className="bg-amber-500 h-[250px] xl:py-20 sm:py-20 py-10">
            <p className="sm:text-3xl text-xl font-extrabold mb-5">
              Klik tombol dibawah ini untuk mulai Konsultasi Gratis via WhatsApp
            </p>
            <Button variant="success" className="rounded-full p-6" asChild>
              <Link
                href="https://api.whatsapp.com/send?phone=6281352294435&text=Saya%20ingin%20Bangun%20rumah%20"
                target="_blank"
                className=" text-xl"
              >
                Mulai Konsultasi
                <img src="/image/wa_icon.png" className="h-8 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col inset-0 sm:px-24 px-12 pt-5 pb-2 text-black">
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
            <p className="my-auto ml-2 w-1/2">Jl. Domba No.22, Talise, Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94118</p>
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