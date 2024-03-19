"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
}
type CarouselMainType = {
  url: string;
};

type carouselProjectType = {
  url: string;
};

const carouselMainItem: CarouselMainType[] = [
  { url: "./image/bangun/1.jpg" },
  { url: "./image/bangun/2.jpg" },
  { url: "./image/bangun/3.jpg" },
  { url: "./image/bangun/4.jpg" },
  { url: "./image/bangun/5.jpg" },
];

const carouselProjectItem: carouselProjectType[] = [
  { url: "./image/bangun/carousel/project_01.png" },
  { url: "./image/bangun/carousel/project_01.png" },
  { url: "./image/bangun/carousel/project_01.png" },
  { url: "./image/bangun/carousel/project_01.png" },
];

function Section({ children }: SectionProps) {
  return <div className="flex flex-col">{children}</div>;
}

export function SectionMain() {
  return (
    <Section>
      <div className="static bg-gradient-to-r from-amber-300 from-20% via-amber-200 via-40% to-white to-90% xl:w-full xl:h-screen">
        <img
          src="./image/infinity_logo.png"
          className="relative left-1/2 right-1/2 top-[15px] -translate-x-1/2 z-10 h-[100px] max-h-screen"
        />
        <div className="flex xl:flex-row sm:flex-row xs:flex-col flex-col justify-center items-center text-center xl:mt-32 sm:mt-5 xs:mt-10 mt-5">
          <div className="xl:p-10 sm:p-16 xl:w-1/2 sm:w-1/2">
            <p className="xl:text-5xl sm:text-xl font-black xl:p-0 sm:p-0 xs:p-2 p-2">
              Bangun Rumah Impian Keluarga dengan Konsep Rumah Tumbuh tanpa
              Ribet, Mau?
            </p>
          </div>
          <div className=" xl:p-5 sm:p-5 xs:p-5 p-5 xl:w-1/2 sm:w-1/2 xs:w-96 w-76">
            <Carousel
              plugins={[Autoplay({ delay: 2000 })]}
              className="xl:w-full sm:w-full"
            >
              <CarouselContent>
                {carouselMainItem.map((item, index) => (
                  <CarouselItem key={index}>
                    <img src={item.url} className="object-cover rounded-lg" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
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
              src="./image/bangun/family_art.png"
              className="w-[700px] mx-auto"
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
          <p className="font-extrabold xl:text-5xl sm:text-3xl xs:text-xl text-xl">
            Proyek Rumah Yang Telah Selesai Dibuat Tim Infinity
          </p>
          <div className="my-10">
            <Carousel className="xl:w-1/3 sm:w-1/2 xs:w-1/2 w-1/2 mx-auto">
              <CarouselContent>
                {carouselProjectItem.map((item, index) => (
                  <CarouselItem key={index}>
                    <img src={item.url} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="bg-black text-white hover:bg-white hover:text-black" />
              <CarouselPrevious className="bg-black text-white hover:bg-white hover:text-black" />
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
            <p className="text-center xl:text-4xl sm:text-xl xs:text-xl text-xl font-extrabold">
              Flow Tahapan Pembangunan Rumah Anda?
            </p>
          </div>
          <div className="xl:w-1/3 sm:w-1/2 xs:w-1/2 w-1/2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="xl:text-xl sm:text-xl xs:text-lg text-lg font-bold">
                    Konsultasi
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="xl:text-lg sm:text-lg xs:text-sm text-sm">
                      Analisa kebutuhan ruangan
                    </li>
                    <li className="text-lg">Analisa anggaran</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="./icons/arrow-down.svg"
                width={50}
                height={50}
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
                src="./icons/arrow-down.svg"
                width={50}
                height={50}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <p className="xl:text-xl sm:text-xl xs:text-lg text-lg font-bold">
                    Desain & Perencanaan
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="xl:text-lg sm:text-lg xs:text-sm text-sm">
                      Denah, Desain 3D, Gambar Kerja & RAB
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="./icons/arrow-down.svg"
                width={50}
                height={50}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <p className="xl:text-xl sm:text-xl xs:text-lg text-lg font-bold">
                    Kontrak Kerja
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="xl:text-lg sm:text-lg xs:text-sm text-sm">
                      Memperjelas hak & kewajiban
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="./icons/arrow-down.svg"
                width={50}
                height={50}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <p className="xl:text-xl sm:text-xl xs:text-lg text-lg font-bold">
                    Pembangunan
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="xl:text-lg sm:text-lg xs:text-sm text-sm">
                      Dilakukan sampai serah terima
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="./icons/arrow-down.svg"
                width={50}
                height={50}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <p className="xl:text-xl sm:text-xl xs:text-lg text-lg font-bold">
                    Masa Retensi
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="xl:text-lg sm:text-lg xs:text-sm text-sm">
                      Garansi kerusakan 3 bulan dari tim Infinity
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="./icons/arrow-down.svg"
                width={50}
                height={50}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  <p className="xl:text-xl sm:text-xl xs:text-lg text-lg font-bold">
                    Selesai
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="xl:text-lg sm:text-lg xs:text-sm text-sm">
                      Akad pembangunan selesai
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <Image
                src="./icons/arrow-down.svg"
                width={50}
                height={50}
                className="mx-auto my-5"
                alt="Arrow Down"
              />
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  <p className="xl:text-xl sm:text-xl xs:text-lg text-lg font-bold">
                    Testimoni
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    <li className="xl:text-lg sm:text-lg xs:text-sm text-sm">
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
        <div className="flex flex-col justify-center items-center bg-gray-950 xl:py-10 sm:py-10 xs:py-3 p-3 text-white">
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
  return(
    <Section>
      <div className="w-full h-full">
      <div className="flex flex-col text-center">
          <div className="bg-amber-400 h-[250px] xl:py-20 sm:py-20 py-10">
            <p className="xl:text-3xl sm:text-3xl text-xl font-extrabold mb-5">
              Klik tombol dibawah ini untuk mulai Konsultasi Gratis via WhatsApp
            </p>
            <Button variant="success" className="rounded-full p-6" asChild>
              <Link
                href="https://api.whatsapp.com/send?phone=6281352294435&text=Saya%20ingin%20Bangun%20rumah%20"
                target="_blank"
                className=" text-xl"
              >
                Mulai Konsultasi
                <img src="./image/wa_icon.png" className="h-8 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-0 bg-black text-white justify-center items-center xl:px-10 sm:px-10 xs: py-5">
            <div className="text-left">
              <p>CV.Infinity Project Property</p>
              <p>Kantor Infinity</p>
              <p>Jl.Domba no.13 Kel.Talise</p>
              <p>Palu, Sulawesi Tengah</p>
              <p>infinityprojectproperty22@gmail.com</p>
            </div>
            <div>
              <img
                src="./image/infinity_logo.png"
                className="h-[100px] mx-auto"
              />
            </div>
            <div>
              <p className="text-right">
                Copyright &copy; Hery Setiawan (Staff IT Infinity Project
                Property)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
