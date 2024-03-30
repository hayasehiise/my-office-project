"use client";
import Link from "next/link";
import { Button, Carousel, Flowbite } from "flowbite-react";

import styles from "./dashboardPage.module.css";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { motion } from "framer-motion";
import VideoBackground from "./videoBackground";
import { useEffect, useState } from "react";

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
    images: "./image/homepage/desain.jpg",
    links: "/desain",
  },
];

const myServiceDataGrid: myServiceType[] = [
  {
    images: "./image/homepage/desain.jpg",
    links: "/desain",
  },
  {
    images: "./image/homepage/bangun.jpg",
    links: "/bangun",
  },
  {
    images: "./image/homepage/interior.jpg",
    links: "/interior",
  },
  {
    images: "./image/homepage/agen.jpg",
    links: "/agen",
  },
];

function Section({ children }: SectionProps) {
  return <div className="flex flex-col">{children}</div>;
}

export function SectionMain() {
  return (
    <Section>
      <div className="w-full h-full">
        <div className="flex flex-col xs:mt-20">
          <img
            src="/image/homepage/profile_pic.png"
            className="xs:w-3/4 sm:w-1/3 mx-auto"
          />
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
        className=" border-t-[10px] border-b-[10px] border-[#6f4e37] mt-2"
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
  const [showMore, setShowMore] = useState(false);

  const handlerClick = () => {
    setShowMore(!showMore);
  };

  const slideInVariants = {
    hidden: {
      x: "-200%",
      height: 1,
      transition: { type: "slide", stiffness: 100 },
    },
    visible: {
      x: 0,
      height: "100%",
      transition: { type: "slide", stiffness: 100 },
      
    },
  };

  return (
    <Section>
      <div className="w-full h-full xl:p-10 sm:p-5 xs:p-2">
        <div className="flex flex-col w-full justify-center">
          {myServiceData.map((item, index) => (
            <div key={index} className="p-5">
              <Link href={item.links}>
              <img
                src={item.images}
                className="xs:w-full sm:w-1/2 mx-auto rounded-lg"
              />
              </Link>
            </div>
          ))}
          <div className="mx-auto cursor-pointer" onClick={handlerClick}>
            <p className="text-xl font-bold text-white -mb-4">
              Click for more...
            </p>
            <img
              src="/image/homepage/arrow-down.svg"
              className="h-16 mx-auto"
            />
          </div>
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            animate={showMore ? "visible" : "hidden"}
            className={`overflow-hidden grid grid-cols-2 sm:gap-10 xs:gap-4 w-full`}
          >
            {myServiceDataGrid.map((item, index) => (
              <div key={index}>
                <Link href={item.links}>
                <img src={item.images} className="sm:w-3/4 xs:w-full sm:mx-auto" />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export function SectionFooter() {
  return (
    <Section>
      <div className="w-full h-full py-2">
        <Link
          href={"https://www.instagram.com/awaludin_infinity/"}
          className="flex justify-between xl:mx-96 p-3 bg-[#4b3621] mb-2"
          target="_blank"
        >
          <img src="/image/homepage/instagram.png" className="h-10" />
          <p className="p-2 font-bold text-white">Instagram</p>
        </Link>
        <Link
          href={"https://www.tiktok.com/@awaludin_infinity?lang=id-ID"}
          className="flex justify-between xl:mx-96 p-3 bg-[#4b3621] mb-2"
          target="_blank"
        >
          <img src="/image/homepage/tiktok.png" className="h-10" />
          <p className="p-2 font-bold text-white">Tiktok</p>
        </Link>
        <Link
          href={"https://www.youtube.com/@awaludin1832"}
          className="flex justify-between xl:mx-96 p-3 bg-[#4b3621] mb-2"
          target="_blank"
        >
          <img src="/image/homepage/youtube.png" className="h-10" />
          <p className="p-2 font-bold text-white">Youtube</p>
        </Link>
        <Link
          href={
            "https://api.whatsapp.com/send?phone=6282223199958&text=Assalamualaikum"
          }
          className="flex justify-between xl:mx-96 p-3 bg-[#4b3621] mb-2"
          target="_blank"
        >
          <img src="/image/homepage/whatsapp.png" className="h-10" />
          <p className="p-2 font-bold text-white">Whatsapp</p>
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
