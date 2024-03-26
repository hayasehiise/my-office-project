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
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
  },
};

const myServiceCarousel: CustomFlowbiteTheme["carousel"] = {
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black group-hover:bg-slate-400 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
  },
};

const myServiceButton: CustomFlowbiteTheme["button"] = {
  color: {
    amber:
      "text-white bg-amber-500 border border-transparent enabled:hover:bg-amber-300 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
  },
};

interface myServiceType {
  title: string;
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
    title: "Ingin Jadi Agen?",
    images: "./image/homepage/agen_icon.png",
    links: "/agen",
  },
  {
    title: "Ingin Desain Rumah?",
    images: "./image/homepage/desain_icon.png",
    links: "/desain",
  },
  {
    title: "Ingin Bangun Rumah?",
    images: "./image/homepage/bangun_rumah_icon.png",
    links: "/bangun",
  },
  {
    title: "Ingin Desain & Bangun Interior?",
    images: "./image/homepage/interior_icon.png",
    links: "/interior",
  },
  {
    title: "Ingin Jual Rumah?",
    images: "./image/homepage/jual_rumah_icon.png",
    links: "#",
  },
  {
    title: "Ingin Bahan Bangunan?",
    images: "./image/homepage/material_icon.png",
    links: "#",
  },
  {
    title: "Ingin info kerja?",
    images: "./image/homepage/kerja_icon.png",
    links: "#",
  },
  {
    title: "Ingin tau tentang infinity?",
    images: "./image/infinity_logo.png",
    links: "#",
  },
];

function Section({ children }: SectionProps) {
  return <div className="flex flex-col">{children}</div>;
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
          <div className="absolute w-full h-screen xl:bg-gradient-to-r sm:bg-gradient-to-t xs:bg-gradient-to-t from-black xl:from-55% sm:from-30% xs:from-55% z-20 flex flex-col xl:justify-center xl:items-start sm:justify-end sm:items-center xs:justify-end xs:items-center">
            <p className="text-white xl:text-7xl sm:text-7xl xs:text-4xl font-extrabold xl:mx-24 sm:-ml-28 xs:-ml-16">AWALUDIN</p>
            <p className="text-white xl:text-7xl sm:text-7xl xs:text-4xl font-extrabold xl:mx-36 sm:ml-20 xs:ml-16">
              DG. MALEWA
            </p>
            <p className="text-white xl:text-lg sm:text-lg xs:text-sm xl:mx-24 sm:mx-24 xl:my-10 sm:my-10 xs:my-5 xl:w-[30%] sm:w-96 xs:w-[300px] border-l-8 xl:px-3 sm:px-3 xs:px-4 border-white">
              Awaludin Dg. Malewa adalah seorang broker properti dengan
              pengalaman yang luas dan sekaligus CEO dari CV Infinity Project Property yang
              bergerak aktif dalam industri properti. Kami tidak hanya berfokus
              pada jual beli properti, tetapi juga terlibat dalam tahapan desain
              dan konstruksi. Dengan dedikasi kami dalam menciptakan solusi
              properti yang inovatif dan berkualitas, kami berkomitmen untuk
              memberikan layanan terbaik kepada klien-klien kami.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
