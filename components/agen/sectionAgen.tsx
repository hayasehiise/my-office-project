"use client";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import Link from "next/link";
import { motion, animate } from "framer-motion";
import ContactEmail from "@components/agen/contactFormEmail";
import React, { useEffect, useRef } from "react";
import ListWebinar from "./listWebinar";

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

type agenDataType = {
  name: string;
  image: string;
};

const agenDataItem: agenDataType[] = [
  { name: "Heru Nisa", image: "/image/agen/agenList/agen_1.jpg" },
];

function Section({ children, className, id }: SectionProps) {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
}

function scrollTo(element: string) {
  const ele = document.getElementById(element);
  ele?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

export function SectionMain() {
  return (
    <Section className="relative w-full h-dvh text-white">
      <nav className="flex flex-wrap justify-between sm:px-24 lg:px-36 xs:px-5 py-2 bg-[#0b5394]">
        <div className="flex shrink">
          <img src="/image/logo/logo_2.png" className="sm:h-14 xs:h-7" />
          <p className="my-auto ml-2 text-white sm:text-2xl xs:text-xl font-bold select-none">
            Awaludin Agen
          </p>
        </div>
      </nav>
      <div className="flex flex-col inset-0 items-center h-full bg-[#0b5394]">
        <div className="mb-4 w-[80%] lg:mt-[10%] sm:mt-[30%] xs:mt-[35%]">
          <p className="text-center lg:text-6xl sm:text-6xl xs:text-3xl font-black">
            Selamat Datang Di Awaludin Agen
          </p>
        </div>
        <div className="w-[80%] mb-5">
          <p className="text-center lg:text-4xl sm:text-2xl xs:text-base leading-relaxed">
            Bergabunglah dengan kami dan jadilah bagian dari tim yang
            berdedikasi untuk membawa impian properti menjadi kenyataan.
          </p>
        </div>
        <div className="w-[80%] mb-4">
          <p className="text-center lg:text-lg sm:text-base xs:text-[10px]">
            Sekaranglah waktunya untuk mengambil langkah pertama menuju
            kesuksesan. Bergabunglah dengan kami hari ini!
          </p>
        </div>
        <div>
          <Button className="p-6" onClick={() => scrollTo('webinar')}>Daftar Sekarang</Button>
        </div>
      </div>
      <div className="absolute bottom-0 flex shrink w-full justify-between lg:px-36 sm:px-24 xs:px-2 bg-[#3d85c6]">
        <div className="flex">
          <img
            src="/image/logo/logo_2.png"
            className="lg:h-28 sm:h-24 xs:h-10"
          />
          <p className="my-auto ml-2 text-white lg:text-4xl sm:text-2xl xs:text-base font-bold select-none">
            Awaludin Agen
          </p>
        </div>
        <div className="flex">
          <img
            src="/image/logo/logo_2.png"
            className="lg:h-28 sm:h-24 xs:h-10"
          />
          <p className="my-auto ml-2 text-white lg:text-4xl sm:text-2xl xs:text-base font-bold select-none">
            Awaludin Agen
          </p>
        </div>
      </div>
    </Section>
  );
}

export function SectionDesc() {
  return (
    <Section className="relative w-full h-full bg-[#6fa8dc] text-white">
      <div className="flex flex-col inset-0 px-12 pt-16 pb-10">
        <div className="flex lg:flex-row flex-col-reverse justify-normal items-center text-center">
          <div className="my-auto flex flex-col w-full">
            <p className="sm:text-3xl text-xl font-bold mb-4">
              Assalamualaikum warahmatullahi wabarakatuh
            </p>
            <p className="sm:text-xl text-sm lg:w-2/3 w-full text-justify">
              Saya Awaludin CEO dari Infinity Project Property mengamati keadaan
              saat ini, kami turut merasakan kondisi melemahnya perekonomian
              umat. Sebagai seorang enterpreneur saya mengajak anda semua untuk
              menjadi bagian dari Awaludin Agen. Menjadi Agen berarti anda telah
              membuka peluang sebagai pengusaha dengan waktu dan penghasilan
              yang dapat anda tentukan sendiri. Bahkan dari kasur ternyaman anda
              sekalipun.
            </p>
          </div>
          <div className="flex w-full">
            <img
              src="/image/agen/awaluding.png"
              className="mx-auto lg:w-1/2 lg:h-1/2 w-1/2"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <p className="sm:text-2xl text-sm sm:w-[80%] w-full text-center mb-5">
            Anda akan mendapatkan bimbingan langsung dari para ahli, mendapatkan
            skill baru sebagai pengusaha dan berinteraksi dengan sesama Agen
            lain
          </p >
          <p className="sm:text-2xl text-sm font-black text-center">Sungguh Menarik Bukan ?</p>
        </div>
      </div>
    </Section>
  );
}

export function SectionWebinar() {
  return (
    <Section className="relative w-full h-full bg-[#073763] py-5" id="webinar">
      <div className="flex px-5 justify-center mb-5">
        <p className="sm:text-4xl text-2xl font-extrabold sm:w-1/2 w-full text-white text-center">
          Webinar yang akan dilaksanakan
        </p>
      </div>
      <div className="flex px-10 pb-5 justify-center">
        <ListWebinar />
      </div>
      <div className="px-5 mb-5">
        <p className="text-white sm:text-xl text-sm">Ket :</p>
        <ol className="list-decimal list-inside text-sm text-white">
          <li>Uang Pendaftaran Tidak dapat di kembalikan</li>
          <li>Kami tidak menjanjikan pendapatan pasti 10jt/bulan</li>
          <li>Pendapatan Sesuai dengan Usaha Agen Masing Masing</li>
          <li>Pendaftaran Sebagai Agen Awaludin Resmi, Berbayar 99ribu</li>
        </ol>
      </div>
    </Section>
  );
}

export function SectionFormAgen() {
  const slideInVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <Section className="w-full h-full" id="">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInVariants}
      >
        <div className="flex flex-col py-10 px-5 sm:px-10">
          <p className="flex font-black text-4xl sm:text-6xl">
            Apakah Kamu Tertarik Menjadi Agen? <br />
            Daftar Sekarang!
          </p>
          <p className="flex font-serif my-5 font-medium">
            Mari kita bersama menciptakan ide menjadi nyata dan hasil yang
            memuaskan
          </p>
          <div className="flex-1">
            <div className="flex flex-col">
              <Tabs defaultValue="whatsapp" className="w-1/2">
                <TabsList>
                  <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                </TabsList>
                <TabsContent value="whatsapp">
                  <Link
                    href={`https://api.whatsapp.com/send?phone=6282122229500&text=Assalamualaikum%0AHai%20Kak,%20Saya%20Mau%20Jadi%20Agen.`}
                    target="_blank"
                  >
                    <Button variant={"success"}>
                      <img
                        src="/image/agen/whatsapp.png"
                        className="h-8 mr-2"
                      />
                      Hubungi Saya
                    </Button>
                  </Link>
                </TabsContent>
                <TabsContent value="email">
                  <ContactEmail />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
