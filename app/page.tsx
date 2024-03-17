"use client";

import Link from "next/link";
import { Button, Carousel, Flowbite } from "flowbite-react";
import styles from "./dashboardPage.module.css";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { motion } from "framer-motion";

export default function Home() {
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
    {images: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"},
    {images: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"},
    {images: "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"},
  ]

  const myServiceData: myServiceType[] = [
    {title: "Ingin Jadi Agen?", images: "./image/agen_icon.png", links: "/agen"},
    {title: "Ingin Desain Rumah?", images: "./image/desain_icon.png", links: "/desain"},
    {title: "Ingin Bangun Rumah?", images: "./image/bangun_rumah_icon.png", links: "#"},
    {title: "Ingin Jual Rumah?", images: "./image/jual_rumah_icon.png", links: "#"},
    {title: "Ingin Bahan Bangunan?", images: "./image/material_icon.png", links: "#"},
    {title: "Ingin info kerja?", images: "./image/kerja_icon.png", links: "#"},
    {title: "Ingin tau tentang infinity?", images: "./image/infinity_logo.png", links: "#"},
  ]

  return (
    <>
      <div className="container-lg md:container-md mx-auto">
        <main>
          <section className="bg-black ">
            <div className="flex flex-col items-center justify-center">
              <div className="flex-initial mt-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img
                    src="./profile/awaludin.png"
                    className="object-cover mx-auto w-1/2 sm:w-full"
                  />
                </motion.div>
              </div>
              <div className="flex-initial">
                  <h1 className="font-serif font-black text-2xl sm:text-6xl text-white">
                    Awaludin .Dg Malewa
                  </h1>
              </div>
              <div className="flex-initial">
                  <p className="text-white mx-auto w-60 sm:w-1/3 my-2">
                    Perkenalkan Saya Awaludin. CEO Infinity Project Property.
                    Pengalaman singkat dalam dunia desain rumah dengan beberapa
                    konsep yang digunakan mulai dari konsep scandinavian,
                    modern, minimalis, klasik dan lainnya.
                  </p>
              </div>
              <div className="flex-initial mb-10">
                <Link href="#section3">
                  <Button color="light" pill>
                    Next Section
                    <img
                      src="./icons/forward.svg"
                      alt="next section"
                      className="ml-2 mt-0 w-6 h-6"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col">
              <div className="flex-auto h-52 sm:h-[720px]">
                <Carousel
                  indicators={false}
                  theme={fullScreenCarousel}
                >
                  {carouselImageData.map((item, index) => (
                    <img src={item.images} key={index} />
                  ))}
                </Carousel>
              </div>
            </div>
          </section>
          <section id="section3" className="">
            <div className="flex flex-col sm:flex-row items-center justify-center mx-10 my-5 sm:my-5">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                >
                  <img
                    src="./profile/awaludin.png"
                    className="mx-auto w-1/2 sm:w-1/2"
                  />
                </motion.div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col items-center">
                  <div className="flex-initial">
                    <p className="font-mono font-semibold text-4xl text-black">
                      My Services
                    </p>
                  </div>
                  <div className="flex-auto w-screen sm:w-full h-96">
                    <Carousel
                      pauseOnHover
                      indicators={false}
                      theme={myServiceCarousel}
                    >
                      {myServiceData.map((item, index) => (
                        <div key={index} className="flex flex-col h-full items-center justify-center text-black">
                        <img src={item.images} className="h-1/2" />
                        <p className="py-3">{item.title}</p>
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
            </div>
          </section>
          <section>
            <div className="flex flex-col bg-amber-400 h-20 items-center justify-center">
              <div className="flex-initial">
                <p className="text-black">My Social Media</p>
              </div>
              <div className="flex flex-row">
                <div className="flex-auto">
                  <Link
                    href="https://www.instagram.com/awaludin_infinity/"
                    target="_blank"
                  >
                    <img
                      src="./icons/instagram.svg"
                      alt="instagram"
                      className="ml-2 mt-0"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="flex-auto">
                  <Link
                    href="https://www.youtube.com/@awaludin1832"
                    target="_blank"
                  >
                    <img
                      src="./icons/youtube.svg"
                      alt="instagram"
                      className="ml-2 mt-0"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="flex-auto">
                  <Link
                    href="https://www.tiktok.com/@awaludin_infinity?lang=id-ID"
                    target="_blank"
                  >
                    <img
                      src="./icons/tiktok.svg"
                      alt="instagram"
                      className="ml-2 mt-0"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col bg-white items-center justify-center">
          <div className="flex-1">
            <p className="text-black">
              &#169; Team IT Infinity Project Property
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
