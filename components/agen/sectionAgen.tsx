"use client";
import { Button } from "flowbite-react";
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
import ListWebinar from './listWebinar';

interface SectionProps {
  children: React.ReactNode;
  className: string;
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
  return <section className={`${className} flex flex-col`} id={id}>{children}</section>;
}

function scrollTo(element: string) {
  const ele = document.getElementById(element)
  ele?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})
}

export function SectionMain() {
  const animateVariant = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <Section className="w-full h-dvh max-h-dvh overflow-hidden">
      <div className="flex sm:flex-row flex-col-reverse h-dvh justify-center">
        <div className="flex flex-col justify-center">
          <div className="px-5 py-2">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, type: "spring" }}
              variants={animateVariant}
              className="flex"
            >
              <img src="/image/logo/logo_2.png" className="sm:h-16 h-9 pr-2" />
              <p className="sm:text-7xl text-4xl font-bold italic text-[#bf9b30]">
                Awaludin{" "}
                <span className="sm:text-7xl text-4xl font-bold italic text-gray-600">
                  Agen
                </span>
              </p>
            </motion.div>
            <motion.p
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, duration: 1, type: "spring" }}
              variants={animateVariant}
              className="font-medium sm:text-3xl text-lg"
            >
              Berani Melangkah, Lebih Produktif Bersama Kami
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5, duration: 1, type: "spring" }}
            variants={animateVariant}
            className={`flex flex-col px-5 sm:pb-5`}
          >
            <p className="sm:w-fit w-full sm:text-xl text-base">
              Cari tau lebih detail tentang program ini
            </p>
              <Button color="light" className="sm:mt-0 mt-0 w-fit" pill onClick={() => scrollTo('desc')}>
                Saya Tertarik
                <img
                  src="/icons/arrow-upright.svg"
                  alt="next section"
                  className="ml-2 h-6"
                />
              </Button>
          </motion.div>
        </div>
        <img src="/image/agen/awaluding.png" className="flex object-cover w-fit sm:h-full h-96 mx-auto sm:mt-16 mt-0 justify-end" />
      </div>
    </Section>
  );
}

export function SectionDesc() {
  return (
    <Section className="w-full h-full bg-slate-800">
        <div className="flex px-5 py-5 justify-center">
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

export function SectionAgen() {
  const slideVariant = {
    hidden: { x: 100, opacity: 0},
    show: {x: 0, opacity: 1, transition: { duration: 1}}
  }
  return (
    <Section className={`w-full h-full bg-blue-900 py-10`} id="desc">
      <div className={`flex flex-col`}>
      <div className="px-5 mb-5">
          <p className="sm:text-6xl text-3xl font-extrabold text-white mb-2">
            Selamat Datang Di Area <br />
            Awaludin Agen
          </p>
          <p className="sm:text-lg text-base font-normal text-white sm:w-1/2 w-full">
            Kami Mengundang Teman teman, Para Calon Agen Sukses, Insya Allah,
            Dunia Akhirat. Siapkan Diri Teman teman, bergabung di komunitas kecil kami, Kami
            menerima Siapapun yang Ingin Memiliki Penghasilan yang Halal dan
            Berkah.
          </p>
        </div>
        <div
          className={`justify-center items-center text-center`}
        >
          <p
            className={`sm:text-4xl text-2xl font-extrabold text-white`}
          >
            Agen - Agen Yang Telah Saya Rekrut
          </p>
          <motion.div initial={`hidden`} whileInView={`show`} viewport={{ once: true }} variants={slideVariant} className="sm:mt-10 mt-5">
            <Carousel className="sm:w-fit w-[70%] mx-auto">
              <CarouselContent>
                {agenDataItem.map((item, index) => (
                  <CarouselItem key={index}>
                    <Card className="w-fit mx-auto">
                      <CardHeader>
                        <img
                          src={item.image}
                          className="w-72 mx-auto rounded-full"
                        />
                        <CardTitle className="pt-3 sm:text-4xl text-xl">
                          {item.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </div>
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
          <p className="flex font-sans font-black text-4xl sm:text-6xl">
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
                    <Button color="light" className="" pill>
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
