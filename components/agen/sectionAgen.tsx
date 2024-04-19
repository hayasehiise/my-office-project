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

// import styles from "./agenPage.module.css";
import Link from "next/link";
import { motion, animate } from "framer-motion";
import ContactEmail from "@components/agen/contactFormEmail";
import React, { useEffect, useRef } from "react";

interface SectionProps {
  children: React.ReactNode;
  className: string;
}

type agenDataType = {
  name: string;
  image: string;
};

const agenDataItem: agenDataType[] = [
  { name: "Heru Nisa", image: "/image/agen/agenList/agen_1.jpg" },
];

function Section({ children, className }: SectionProps) {
  return <section className={`${className} flex flex-col`}>{children}</section>;
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
            <Link href="#desc" className="flex">
              <Button color="light" className="sm:mt-0 mt-0" pill>
                Saya Tertarik
                <img
                  src="./icons/arrow-upright.svg"
                  alt="next section"
                  className="ml-2 h-6"
                />
              </Button>
            </Link>
          </motion.div>
        </div>
        <img src="/image/agen/awaluding.png" className="flex object-cover w-fit sm:h-[120%] h-96 mx-auto justify-end" />
      </div>
    </Section>
  );
}

export function SectionDesc() {
  const webinar = {
    date: "Senin 15 April",
    time: "16.00 - 18.00",
    via: "Zoom Meeting",
    url: `https://api.whatsapp.com/send?phone=6282122229500&text=Assalamualaikum%0AHai%20Kak,%20Saya%20Mau%20Ikut%20Webinar.`,
    price: "250.000",
    free: true,
  };
  return (
    <Section className="w-full h-full bg-slate-800">
      <div id="desc">
        <div className="px-5 py-5">
          <p className="sm:text-6xl text-4xl font-bold text-white">
            Selamat Datang Di Area <br />
            Awaludin Agen
          </p>
        </div>
        <div className="px-5 py-1">
          <p className="sm:text-2xl text-sm font-normal text-white">
            Kami Mengundang Teman teman, Para Calon Agen Sukses, Insya Allah,
            Dunia Akhirat.
          </p>
          <p className="sm:text-2xl text-sm font-normal w-full text-white">
            Siapkan Diri Teman teman, bergabung di komunitas kecil kami, Kami
            menerima Siapapun yang Ingin Memiliki Penghasilan yang Halal dan
            Berkah,
          </p>
        </div>
        <hr className="" />
        <div className="flex px-5 py-5 justify-center">
          <p className="sm:text-3xl text-xl font-semibold sm:w-1/2 w-full text-white text-center">
            Adapun kami mengadakan Webinar untuk memberikan wawasan kepada
            kalian yang ingin/tertarik untuk bergabung
          </p>
        </div>
        <div className="px-5 my-5">
          <Card className="sm:w-96 w-full mx-auto">
            <CardHeader>
              <CardTitle className="font-bold text-center">
                Webinar Awaludin Agen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex items-center font-semibold">
                <img src="/image/agen/icon/date.svg" className="h-10 mr-2" />
                {webinar.date}
              </p>
              <p className="flex items-center font-semibold">
                <img src="/image/agen/icon/time.svg" className="h-10 mr-2" />
                {webinar.time}
              </p>
              <p className="flex items-center font-semibold">
                <img src="/image/agen/icon/via.svg" className="h-10 mr-2" />
                {webinar.via}
              </p>
            </CardContent>
            <CardFooter className="justify-between">
              <p className="text-2xl mr-2">
                <span className={webinar.free ? `line-through` : ``}>
                  Rp.{webinar.price}
                </span>{" "}
                {webinar.free && <span className="font-bold">Gratis</span>}
              </p>
              <Link href={webinar.url} className="flex">
                <Button color="success" className="" pill>
                  Saya Mau Gabung
                </Button>
              </Link>
            </CardFooter>
          </Card>
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
      </div>
    </Section>
  );
}

export function SectionAgen() {
  return (
    <Section className={`w-full h-full bg-blue-900 py-5`}>
      <div className={`flex flex-col`}>
        <div
          className={`justify-center items-center text-center xl:mb-5 sm:mb-5 mb-2`}
        >
          <p
            className={`xl:text-4xl sm:text-4xl text-2xl font-bold text-white`}
          >
            Agen - Agen Yang Telah Saya Rekrut
          </p>
          <div className="xl:mt-10 sm:mt-10 mt-5">
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
          </div>
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
    <Section className="w-full h-full">
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
