"use client";
import Link from "next/link";
import { Button, Carousel, Flowbite } from "flowbite-react";

import styles from "./dashboardPage.module.css";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { motion } from "framer-motion";
import VideoBackground from "./videoBackground";

interface SectionProps {
  children: React.ReactNode;
}

const fullScreenCarousel: CustomFlowbiteTheme["carousel"] = {
  scrollContainer: {
    base: "flex w-full xl:h-[750px] sm:h-96 xs:h-56 snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
  },
};

const myServiceCarousel: CustomFlowbiteTheme["carousel"] = {
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black group-hover:bg-slate-400 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70",
  },
};

const myServiceButton: CustomFlowbiteTheme["button"] = {
  color: {
    amber:
      "text-white bg-amber-500 border border-transparent enabled:hover:bg-amber-300 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
  },
};

interface myServiceType {
  links: string;
  images: string;
}

interface carouselImageType {
  images: string;
}

const carouselImageData: carouselImageType[] = [
  { images: "./image/homepage/carousel/1.jpg" },
  { images: "./image/homepage/carousel/2.jpg" },
  { images: "./image/homepage/carousel/3.jpg" },
  { images: "./image/homepage/carousel/4.jpg" },
  { images: "./image/homepage/carousel/5.jpg" },
];

const myServiceData: myServiceType[] = [
  {
    images: "./image/homepage/agen.png",
    links: "/agen",
  },
  {
    images: "./image/homepage/desain.jpg",
    links: "/desain",
  },
  {
    images: "./image/homepage/bangun.png",
    links: "/bangun",
  },
  {
    images: "./image/homepage/interior.png",
    links: "/interior",
  },
];

function Section({ children }: SectionProps) {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  )
}
export function SectionMain() {
  return (
    <Section>
      <div className="w-full h-screen">
        <div className="relative">
          <div className="absolute xl:right-0 z-10 xl:h-screen xl:w-fit sm:w-full xs:w-full sm:top-0 xs:top-0">
            <VideoBackground
              src="/image/homepage/backvideo.mp4"
              width="100%"
              height="100%"
            />
          </div>
          <div className="relative w-full h-screen xl:bg-gradient-to-r sm:bg-gradient-to-t xs:bg-gradient-to-t from-amber-400 xs:from-20% via-white xs:60% z-20 flex flex-col xl:justify-center xl:items-start sm:justify-end sm:items-center xs:justify-end xs:items-center">
            <p className="text-black xl:text-7xl sm:text-7xl xs:text-4xl font-black xl:mx-24 sm:-ml-28 xs:-ml-16">
              AWALUDIN
            </p>
            <p className="text-black xl:text-7xl sm:text-7xl xs:text-4xl font-black xl:mx-36 sm:ml-20 xs:ml-16">
              DG. MALEWA
            </p>
            <p className="text-black xl:text-lg sm:text-lg xs:text-sm xl:mx-24 sm:mx-24 xl:my-10 sm:my-10 xs:my-5 xl:w-[30%] sm:w-96 xs:w-[300px] border-l-8 xl:px-3 sm:px-3 xs:px-4 border-black">
              Awaludin Dg. Malewa adalah seorang broker properti dengan
              pengalaman yang luas dan sekaligus CEO dari CV Infinity Project
              Property yang bergerak aktif dalam industri properti. Kami tidak
              hanya berfokus pada jual beli properti, tetapi juga terlibat dalam
              tahapan desain dan konstruksi. Dengan dedikasi kami dalam
              menciptakan solusi properti yang inovatif dan berkualitas, kami
              berkomitmen untuk memberikan layanan terbaik kepada klien-klien
              kami.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionCarousel() {
  return (
    <Section>
      <Carousel
        indicators={false}
        theme={fullScreenCarousel}
        className=" border-t-[10px] border-b-[10px] border-amber-400 mt-2"
      >
        {carouselImageData.map((item, index) => (
          <img
            src={item.images}
            key={index}
            className="h-full object-cover object-center"
          />
        ))}
      </Carousel>
    </Section>
  );
}

export function SectionServiceCarousel() {
  return (
    <Section>
      <div className="w-full h-full border-t-[10px] border-white">
        <img
          src="/image/homepage/service.jpg"
          className="absolute w-fit xl:h-[700px] object-contain scale-x-[-1] xl:left-0 z-10"
        />
        <div className="relative w-full xl:h-[700px] sm:h-[900px] xs:h-[500px] xl:bg-gradient-to-l sm:bg-gradient-to-t xs:bg-gradient-to-t from-white xl:from-50% sm:from-50% xs:from-60% z-20 flex flex-col xl:justify-center xl:items-end sm:justify-end sm:items-center xs:justify-end xs:items-center">
          <div className="xl:w-1/2 sm:w-1/2 xs:w-full flex flex-col justify-center items-center p-5">
            <p className="xl:text-5xl sm:text-5xl xs:text-2xl font-extrabold">
              MY SERVICE
            </p>
            {/* Ini Untuk Versi Carousel */}
            <Carousel
              pauseOnHover
              indicators={false}
              theme={myServiceCarousel}
              className="xl:w-[700px] sm:w-[500px] xs:w-[350px] xl:h-[500px] sm:h-96 xs:h-64 p-5"
            >
              {myServiceData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-black"
                >
                  <img src={item.images} className="xl:h-80 sm:h-56 xs:h-32" />
                  <Link href={item.links}>
                    <Button pill color="amber" theme={myServiceButton}>
                      Klik Disini
                    </Button>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionServiceBlock() {
  return (
    <Section>
      <div className="w-full h-full bg-amber-400 xl:p-10 sm:p-5 xs:p-2">
        <div className="flex flex-col w-full justify-center">
          {myServiceData.map((item, index) => (
            <div key={index} className="p-5">
              <img src={item.images} className="xs:w-full sm:w-96 xl:w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function SectionFooter() {
  return (
    <Section>
      <div className="w-full h-full py-2">
            <Link href={"https://www.instagram.com/awaludin_infinity/"} className="flex justify-between xl:mx-96 p-3 bg-amber-400 mb-2" target="_blank">
            <img src="/image/homepage/instagram.png" className="h-10" />
            <p className="p-2 font-bold">Instagram</p>
            </Link>
          <Link href={"https://www.tiktok.com/@awaludin_infinity?lang=id-ID"} className="flex justify-between xl:mx-96 p-3 bg-amber-400 mb-2" target="_blank">
            <img src="/image/homepage/tiktok.png" className="h-10" />
            <p className="p-2 font-bold">Tiktok</p>
            </Link>
          <Link href={"https://www.youtube.com/@awaludin1832"} className="flex justify-between xl:mx-96 p-3 bg-amber-400 mb-2" target="_blank">
            <img src="/image/homepage/youtube.png" className="h-10" />
            <p className="p-2 font-bold">Youtube</p>
            </Link>
          <Link href={"https://api.whatsapp.com/send?phone=6282223199958&text=Assalamualaikum"} className="flex justify-between xl:mx-96 p-3 bg-amber-400 mb-2" target="_blank">
            <img src="/image/homepage/whatsapp.png" className="h-10" />
            <p className="p-2 font-bold">Whatsapp</p>
            </Link>
        </div>
    </Section>
  );
}

export function SectionCopyright() {
  return (
    <Section>
      <div className="w-full h-full bg-white">
        <div className="flex justify-center">
          <p>
            &copy; <span className="font-bold">2024</span> Infinity Project
            Property - Staff IT
          </p>
        </div>
      </div>
    </Section>
  );
}
