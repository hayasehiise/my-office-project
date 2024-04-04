"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
}

type carouselProjectType = {
  image: string;
  alt: string;
};

const carouselProjectItem: carouselProjectType[] = [
  { image: "/image/interior/carousel/item1.jpg", alt: "item1" },
  { image: "/image/interior/carousel/item2.jpg", alt: "item2" },
  { image: "/image/interior/carousel/item3.jpg", alt: "item3" },
  { image: "/image/interior/carousel/item4.jpg", alt: "item4" },
];

function Section({ children }: SectionProps) {
  return <section className="flex flex-col">{children}</section>;
}

export function SectionMain() {
  return (
    <Section>
      <div className="w-full h-screen max-h-screen sm:bg-[url(/image/interior/background1.jpg)] bg-[url(/image/interior/background1-phone.jpg)] bg-cover bg-center">
        <div className="flex flex-col w-full h-screen justify-end items-end">
          <div className="my-auto sm:mr-14 mr-14 w-fit">
            <motion.p
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-black xl:text-7xl sm:text-7xl xs:text-4xl text-4xl font-black text-right"
            >
              Welcome to Infinity Interior Workshops
            </motion.p>
            <p className="p-5 xl:text-lg sm:text-lg xs:text-sm text-sm text-right">
              Kami akan membuat interior terbaik untuk rumah anda
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionSecond() {
  return (
    <Section>
      <div className="w-full h-screen max-h-screen sm:bg-[url(/image/interior/background2.jpg)] bg-[url(/image/interior/background2-phone.jpg)] bg-cover bg-center">
        <div className="flex flex-col w-full h-screen">
          <div className="xl:mt-80 sm:my-80 mt-[50%] mb-[60%]">
            <motion.p
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-black xl:text-7xl sm:text-7xl xs:text-4xl text-4xl font-black text-center"
            >
              Ubah Ruangan Dalam Rumah Anda
            </motion.p>
            <p className="p-5 xl:text-lg sm:text-lg xs:text-sm text-sm text-center">
              Kami memiliki pengalaman yang dalam dalam mendesain & membuat
              interior untuk segala kebutuhan
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionProject() {
  return (
    <Section>
      <div className="w-full sm:h-screen h-full max-h-screen bg-gray-400">
        <div className="flex flex-col w-full sm:h-screen h-full sm:my-0 my-16">
          <div className="xl:w-full sm:w-full my-auto">
          <motion.p
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-black xl:text-4xl sm:text-4xl xs:text-2xl text-2xl mb-10 font-black text-center"
            >
              Project Interior
            </motion.p>
            <Carousel
              className="w-full xl:max-w-5xl sm:max-w-xl xs:max-w-64 max-w-64 mx-auto"
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {carouselProjectItem.map((item, index) => (
                  <CarouselItem
                    className="xl:basis-1/2"
                    key={index}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="object-cover rounded-full h-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext variant="secondary" className="h-24" />
              <CarouselPrevious variant="secondary" className="h-24" />
            </Carousel>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionKonsul() {
  return (
    <Section>
      <div className="w-full h-screen max-h-screen sm:bg-[url(/image/interior/background4.jpg)] bg-[url(/image/interior/background4-phone.jpg)] bg-cover bg-center">
        <div className="flex flex-col w-full h-screen">
          <div className="my-auto mx-auto xl:rounded-xl rounded-none bg-white w-fit p-5 justify-center items-center text-center bg-opacity-70">
            <p className="text-black xl:text-5xl sm:text-4xl xs:text-2xl text-2xl font-black">
              Yuk, Mulai Rencanakan Interiormu Sekarang
            </p>
            <p className="pt-3 xl:text-lg sm:text-lg xs:text-sm text-sm">
              Dengan konsultasi melalui WhatsApp tim kami akan memberikan hasil
              yang terbaik untuk perencanaan interior anda
            </p>
            <Button variant="success" className="rounded-full p-6 mt-5" asChild>
              <Link
                href="https://api.whatsapp.com/send?phone=6281352294435&text=Saya%20ingin%20Rancang%20Interior%20"
                target="_blank"
                className="xl:text-xl sm:text-xl xs:text-lg text-lg"
              >
                Mulai Konsultasi
                <img src="./image/wa_icon.png" className="h-8 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
