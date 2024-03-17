"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
}
interface CarouselMainType {
  url: string;
}

const carouselMainItem: CarouselMainType[] = [
  { url: "./image/bangun/1.jpg" },
  { url: "./image/bangun/2.jpg" },
  { url: "./image/bangun/3.jpg" },
  { url: "./image/bangun/4.jpg" },
  { url: "./image/bangun/5.jpg" },
];

function Section({ children }: SectionProps) {
  return <div className="flex flex-col">{children}</div>;
};

export function SectionMain() {
  return (
    <Section>
      <div className="static bg-gradient-to-r from-amber-300 from-20% via-amber-200 via-40% to-white to-90% xl:w-full xl:h-screen">
        <img src="./image/infinity_logo.png" className="relative left-1/2 right-1/2 top-[15px] -translate-x-1/2 z-10 h-[100px] max-h-screen" />
          <div className="flex xl:flex-row justify-center items-center text-center xl:mt-48">
            <div className="p-24 xl:w-1/2">
              <p className="xl:text-5xl font-black">Bangun Rumah Impian Keluarga dengan Konsep Rumah Tumbuh tanpa Ribet, Mau?</p>
            </div>
            <div className="xl:w-1/2">
              <Carousel
                plugins={[Autoplay({delay: 2000})]}
                className="w-[700px]"
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
};

export function SecondSection() {
  return(
    <Section>
      <div className="w-full h-full">
        <div className="flex xl:flex-row justify-center items-center">
          <div className="xl:w-1/2">
          <img src="./image/bangun/family_art.png" className="w-[700px] mx-auto"/>
          </div>
          <div className="xl:w-1/2">
            <p className="xl:text-4xl font-extrabold pb-5">Kami Paham...</p>
            <p className="text-lg text-left">Anda pasti pengen kasih yg terbaik untuk Keluarga, apalagi urusan rumah, <br/>pasti diusahakan rumah itu jadi tempat yg nyaman untuk mereka, setuju?</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="xl:w-full">
            <p className="xl:text-4xl font-extrabold text-center">Ada 2 Kabar Baik untuk Anda :</p>
            <p className="xl:text-2xl font-bold xl:pt-10 xl:px-[500px]">Kabar Baik 1</p>
            <div className="xl:text-lg xl:px-[500px]">
            <p className="pt-5">Sebenarnya, Anda nggak mesti bangun rumahnya langsung sekaligus. Dengan desain perencanaan yg matang sebelumnya, Anda bisa mulai membangun dengan konsep rumah tumbuh (bertahap).</p>
            <p className="pt-5">Walaupun bertahap, rumahnya bisa didesain supaya tetap nyaman saat dihuni.</p>
            <p className="pt-5">Nanti, kalau anak-anak makin rame, rezeki juga sudah terkumpul, mau lanjutkan pembangunannya pun Anda nggak akan bingung gimana tata ruang dan biaya bangunnya.</p>
            </div>
            <p className="xl:text-2xl font-bold xl:pt-10 xl:px-[500px]">Kabar Baik 2</p>
            <div className="xl:text-lg xl:px-[500px]">
            <p className="pt-5">Bangun rumah itu bukan hal yg mudah, mesti ngorbanin waktu, tenaga dan pikiran yg ekstra di sela-sela kesibukan Anda di kantor.</p>
            <p className="pt-5">Kabar baiknya, supaya Anda nggak pusing dan ribet kesana-kemari, tim Rumia akan membantu membangun rumah impian Anda dan Keluarga. Urusan rumah beres, kerjaan kantor Anda pun juga beres.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
