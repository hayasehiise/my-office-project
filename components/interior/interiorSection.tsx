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
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function SectionMain() {
  const targetRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? 'relative' : 'fixed'
  })

  const slideInText = {
    hidden: {x: 100, opacity: 0},
    show: {x: 0, opacity: 1},
  }
  return (
    <>
      <motion.section style={{ opacity: opacity }} className="relative h-[200vh] w-full" ref={targetRef}>
        <motion.div style={{ position }} className="flex flex-col inset-0 justify-center items-center text-black">
          <motion.p initial='hidden' animate='show' variants={slideInText} transition={{ duration: 0.8, type: 'spring' }} className="sm:text-7xl text-4xl font-black text-center">
            Welcome to Infinity Interior Workshops
          </motion.p>
          <motion.p initial='hidden' animate='show' variants={slideInText} transition={{ duration: 0.8, delay: 0.5, type: 'spring' }} className="p-5 sm:text-lg text-sm text-center">
            Kami akan membuat interior terbaik untuk rumah anda
          </motion.p>
        </motion.div>
      </motion.section>
    </>
  );
}

export function SectionSecond() {
  const targetRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })

  const opacity1 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const x1 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [100, 0, 0, 100]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.4, 0.8, 1], [100, 0, 0, 100]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? 'relative' : 'fixed'
  })

  return (
    <>
      <section className="relative h-[200vh] w-full overflow-x-hidden" ref={targetRef}>
        <motion.div style={{ position }} className="flex flex-col inset-0 justify-center items-center text-black">
          <motion.p style={{x: x1, opacity: opacity1 }} className="sm:text-7xl text-4xl font-black text-center">
            Ubah Ruangan Dalam Rumah Anda
          </motion.p>
          <motion.p style={{x: x2, opacity: opacity2 }} className="p-5 sm:text-lg xs:text-sm text-sm text-center">
            Dengan interior terbaik membuat suasana rumah menjadi nyaman dan enak dipandang
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}

export function SectionThird() {
  const targetRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? 'relative' : 'fixed'
  })

  const imageCarouselOrder = {
    scaleIn: 1,
    scaleOut: 0.5,
  }

  const opacity = useTransform(scrollYProgress, [0.12, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0.12, 0.2], [100, 0]);
  const x = useTransform(scrollYProgress, [0.2, 1], [window?.innerWidth, window?.innerWidth - (window?.innerWidth * 3)])

  return (
    <>
      <section className="relative h-[500vh] w-full overflow-x-hidden" ref={targetRef}>
        <motion.div style={{ y, opacity }} className="fixed flex flex-col inset-0 text-black">
          <p  className="sm:text-4xl text-2xl font-black text-center mt-auto mx-auto">Interior yang telah dibuat</p>
          <motion.div className="mb-auto relative flex flex-nowrap gap-10" style={{ left: x }}>
            <motion.img src="/image/interior/carousel/item1.jpg" className="relative sm:h-[600px] sm:w-[600px] h-[400px] w-[400px] object-cover rounded-full mt-4" />
            <motion.img src="/image/interior/carousel/item2.jpg" className="relative sm:h-[600px] sm:w-[600px] h-[400px] w-[400px] object-cover rounded-full mt-4" />
            <motion.img src="/image/interior/carousel/item3.jpg" className="relative sm:h-[600px] sm:w-[600px] h-[400px] w-[400px] object-cover rounded-full mt-4" />
            <motion.img src="/image/interior/carousel/item4.jpg" className="relative sm:h-[600px] sm:w-[600px] h-[400px] w-[400px] object-cover rounded-full mt-4" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export function SectionKonsul() {
  return (
    <section>
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
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="grid grid-cols-2 gap-0 justify-center items-center xl:px-10 sm:px-10 xs: py-5">
        <div className="text-left">
          <p>CV.Infinity Project Property</p>
          <p>Kantor Infinity</p>
          <p>Jl.Domba no.13 Kel.Talise</p>
          <p>Palu, Sulawesi Tengah</p>
          <p>infinityprojectproperty22@gmail.com</p>
        </div>
        <div>
          <p className="text-right">
            Copyright &copy; Hery Setiawan (Staff IT Infinity Project Property)
          </p>
        </div>
      </div>
    </footer>
  );
}
