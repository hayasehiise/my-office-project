"use client";
import { Button, Table, TableHead, TableHeadCell } from "flowbite-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import styles from "./agenPage.module.css";
import Link from "next/link";
import { motion, animate } from "framer-motion";
import ContactEmail from "./contactFormEmail";
import React, { useEffect, useRef } from "react";

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return <div className="flex flex-col">{children}</div>;
}

export function SectionMain() {
  return (
    <Section>
      <div className="w-full h-full">
        <div className="p-5">
          <p className="sm:text-7xl text-4xl font-bold italic text-blue-900">
            Awaludin{" "}
            <span className="sm:text-7xl text-4xl font-bold italic text-gray-600">
              Agen
            </span>
          </p>
          <p className="font-medium text-2xl sm:text-7xl">
            Berani Melangkah, Lebih Produktif Bersama Kami
          </p>
        </div>
        <div className={`flex sm:flex-row flex-col justify-between px-5 pb-10`}>
          <p className="sm:w-1/2 w-full sm:text-3xl text-xl">
            Cari tau lebih detail tentang program ini
          </p>
          <Link href="#desc" className="flex">
            <Button color="light" className="sm:mt-0 mt-5" pill>
              Saya Tertarik
              <img
                src="./icons/arrow-upright.svg"
                alt="next section"
                className="ml-2 h-6"
              />
            </Button>
          </Link>
        </div>
        <img
          src="/image/agen/agen_main.jpg"
          className="w-full sm:h-[650px] object-cover"
        />
      </div>
    </Section>
  );
}

export function SectionDesc() {
  const webinar = {
    date: "Senin 15 April",
    time: "16.00 - 18.00",
    via: "Zoom Meeting",
    url: `#`,
    price: '250.000',
    free: true,
  };
  return (
    <Section>
      <div className="w-full h-full bg-slate-800" id="desc">
        <div className="px-5 py-5">
          <p className="sm:text-6xl text-4xl font-semibold underline text-white">
            Selamat Datang Di Area Awaludin Agen
          </p>
        </div>
        <div className="px-5 py-1">
          <p className="sm:text-2xl text-sm font-semibold text-white">
            Kami Mengundang Teman teman, Para Calon Agen Sukses, Insya Allah,
            Dunia Akhirat.
          </p>
          <p className="sm:text-2xl text-sm font-semibold w-full text-white">
            Siapkan Diri Teman teman, bergabung di komunitas kecil kami, Kami
            menerima Siapapun yang Ingin Memiliki Penghasilan yang Halal dan
            Berkah,
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
                <span className={webinar.free ? `line-through` : ``}>Rp.{webinar.price}</span>{" "}
                {webinar.free && 
                <span className="font-bold">Gratis</span>
                }
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

export function SectionFormAgen() {
    const slideInVariants = {
        hidden: { x: "-100%" },
        visible: { x: 0, transition: { duration: 0.8, ease: "easeOut" } },
      };
    return(
        <Section>
            <div className="w-full h-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInVariants}
            >
              <div className="flex flex-col py-10 px-5 sm:px-10">
                <p className="flex font-sans font-black text-4xl sm:text-8xl">
                  Apakah Kamu Tertarik? <br />
                  Daftar Sekarang!
                </p>
                <p className="flex font-serif my-5 font-medium">
                  Mari kita bersama menciptakan ide menjadi nyata dan hasil yang
                  memuaskan
                </p>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <Tabs defaultValue="email" className="w-1/2">
                      <TabsList>
                        <TabsTrigger value="email">Email</TabsTrigger>
                        <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
                      </TabsList>
                      <TabsContent value="email">
                        <ContactEmail />
                      </TabsContent>
                      <TabsContent value="whatsapp">Coming Soon</TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
        </Section>
    )
}