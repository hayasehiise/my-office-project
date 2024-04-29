"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function SectionMain() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  const slideInText = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  return (
    <>
      <motion.section
        style={{ opacity: opacity }}
        className="relative h-[200vh] w-full"
        ref={targetRef}
      >
        <motion.div
          style={{ position }}
          className="flex flex-col inset-0 justify-center items-center text-black"
        >
          <motion.p
            initial="hidden"
            animate="show"
            variants={slideInText}
            transition={{ duration: 0.8, type: "spring" }}
            className="sm:text-7xl text-4xl font-black text-center"
          >
            Welcome to Infinity Interior Workshops
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            variants={slideInText}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="p-5 sm:text-lg text-sm text-center"
          >
            Kami akan membuat interior terbaik untuk rumah anda
          </motion.p>
        </motion.div>
      </motion.section>
    </>
  );
}

export function SectionSecond() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.8, 1],
    [0, 1, 1, 0]
  );
  const x1 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [100, 0, 0, 100]);
  const x2 = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.8, 1],
    [100, 0, 0, 100]
  );
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <>
      <section
        className="relative h-[200vh] w-full overflow-x-hidden"
        ref={targetRef}
      >
        <motion.div
          style={{ position }}
          className="flex flex-col inset-0 justify-center items-center text-black"
        >
          <motion.p
            style={{ x: x1, opacity: opacity1 }}
            className="sm:text-7xl text-4xl font-black text-center"
          >
            Ubah Ruangan Dalam Rumah Anda
          </motion.p>
          <motion.p
            style={{ x: x2, opacity: opacity2 }}
            className="p-5 sm:text-lg xs:text-sm text-sm text-center"
          >
            Dengan interior terbaik membuat suasana rumah menjadi nyaman dan
            enak dipandang
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}

export function SectionThird() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollSection } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const position = useTransform(scrollSection, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  const opacity = useTransform(scrollSection, [0.05, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollSection, [0.05, 0.1, 0.9, 1], [100, 0, 0, 100]);

  const xImage1 = useTransform(scrollSection, [0.1, 0.2], ["100vw", "-100vw"]);
  const xImage2 = useTransform(scrollSection, [0.3, 0.4], ["100vw", "-100vw"]);
  const xImage3 = useTransform(scrollSection, [0.5, 0.6], ["100vw", "-100vw"]);
  const xImage4 = useTransform(scrollSection, [0.7, 0.8], ["100vw", "-100vw"]);
  return (
    <>
      <section
        className="relative h-[1200vh] w-full overflow-x-hidden"
        ref={targetRef}
      >
        <motion.div
          style={{ y, opacity, position }}
          className="top-[15%] flex inset-0 text-black"
        >
          <p className="sm:text-5xl text-2xl font-black text-center mx-auto">
            Interior yang telah dibuat
          </p>
        </motion.div>
          <motion.img
            style={{ x: xImage1 }}
            src="/image/interior/carousel/item1.jpg"
            className="fixed top-[22%] sm:h-[600px] sm:w-[600px] h-[400px] w-[400px] object-cover rounded-full"
          />
          <motion.img
            style={{ x: xImage2 }}
            src="/image/interior/carousel/item2.jpg"
            className="fixed top-[22%] sm:h-[600px] sm:w-[600px] h-[400px] w-[400px] object-cover rounded-full"
          />
          <motion.img
            style={{ x: xImage3 }}
            src="/image/interior/carousel/item3.jpg"
            className="fixed top-[22%] sm:h-[600px] sm:w-[600px] h-[400px] w-[400px] object-cover rounded-full"
          />
          <motion.img
            style={{ x: xImage4 }}
            src="/image/interior/carousel/item4.jpg"
            className="fixed top-[22%] sm:h-[600px] sm:w-[600px] h-[400px] w-[400px] object-cover rounded-full"
          />
      </section>
    </>
  );
}

export function SectionKonsul() {
  return (
    <section className="w-full h-screen relative flex flex-col inset-0 sm:bg-[url(/image/interior/background4.jpg)] bg-[url(/image/interior/background4-phone.jpg)] bg-cover bg-center">
          <div className="my-auto mx-auto xl:rounded-xl rounded-none bg-white w-fit p-5 text-center bg-opacity-70">
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
                <img src="/image/wa_icon.png" className="h-8 ml-2" />
              </Link>
            </Button>
          </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative flex flex-col inset-0 sm:px-24 px-12 pt-5 pb-2 bg-stone-600 text-white">
      <div className="flex mb-5">
        <img src="/image/logo/logo_2.png" className="h-10" />
        <p className="my-auto ml-2 text-white text-xl font-bold select-none">
          Awaludin Agen
        </p>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-5 mb-2">
        <div className="flex flex-col">
          <p className="mb-3 text-lg font-semibold">Ikuti Saya Di:</p>
          <div className="flex gap-5">
            <Link href={`https://www.instagram.com/awaludin_infinity/`} target="_blank">
              <img src="/icons/instagram.png" className="h-10" />
            </Link>
            <Link href={`https://www.tiktok.com/@awaludin_infinity?lang=id-ID`} target="_blank">
            <img src="/icons/tiktok.png" className="h-10" />
            </Link>
            <Link href={`https://www.youtube.com/@awaludin1832`} target="_blank">
            <img src="/icons/youtube.png" className="h-10" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mb-3 text-lg font-semibold">Hubungi Saya</p>
          <div className="flex flex-col">
            <div className="flex">
            <img src="/icons/mail.png" className="h-5" />
            <p className="my-auto ml-2">awaludin.malewa@gmail.com</p>
            </div>
            <div className="flex">
            <img src="/icons/whatsapp.png" className="h-5" />
            <p className="my-auto ml-2">(+62) 821-2222-9500</p>
            </div>
            <div className="flex">
            <img src="/icons/map.png" className="h-5" />
            <p className="my-auto ml-2 w-1/2">Jl. Domba No.22, Talise, Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94118</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ height: 5, borderWidth: 0, backgroundColor: 'white' }} />
      <div className="flex mt-2 justify-center">
        <p>Copyright &copy; | Staff IT (Hery Setiawan)</p>
      </div>
    </footer>
  );
}
