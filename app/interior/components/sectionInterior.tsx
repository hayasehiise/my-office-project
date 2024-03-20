"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <>
      <div>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            WheelGesturesPlugin({
              forceWheelAxis: "y",
              wheelDraggingClass: "is-wheel-dragging",
            }),
          ]}
          className="w-full h-screen"
        >
          <CarouselContent>{children}</CarouselContent>
        </Carousel>
      </div>
    </>
  );
}

export default function SectionCarousel() {
  return (
    <Section>
      <CarouselItem>
        <div className="w-full h-screen bg-[url(/image/interior/background1.jpg)] bg-cover bg-center">
          <div className="flex flex-col xl:h-screen xl:w-full">
            <div className="xl:mt-96 xl:mr-32">
              <motion.p
                initial={{ y: "-100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-black xl:text-7xl font-black text-right"
              >
                Welcome to Infinity Interior Workshops
              </motion.p>
              <p className="p-5 xl:text-lg text-right">
                Kami akan membuat interior terbaik untuk rumah anda
              </p>
            </div>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="w-full h-screen bg-[url(/image/interior/background2.jpg)] bg-cover bg-center">
          <div className="flex flex-col xl:h-screen xl:w-full">
            <div className="xl:mt-80">
              <motion.p
                initial={{ y: "-100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-black xl:text-7xl font-black text-center"
              >
                Ubah Ruangan Dalam Rumah Anda
              </motion.p>
              <p className="p-5 xl:text-lg text-center">
                Kami memiliki pengalaman yang dalam dalam mendesain & membuat interior untuk segala kebutuhan
              </p>
            </div>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="w-full h-screen bg-[url(/image/interior/background3.jpg)] bg-cover bg-center">
          <div className="flex flex-col xl:h-screen xl:w-full">
            <div className="xl:mt-16">
              <motion.p
                initial={{ y: "-100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-black xl:text-4xl font-black text-center"
              >
                Project Interior
              </motion.p>
            </div>
            <div className="xl:mt-5 justify-center items-center text-center">
                Isi Project Interior
            </div>
          </div>
        </div>
      </CarouselItem>
    </Section>
  );
}
// function Section({ children }: SectionProps) {
//   return <div className="flex flex-col">{children}</div>;
// }

// export function SectionMain() {
//   return (
//     <Section>
//   <div className="w-full h-screen bg-[url(/image/interior/background.jpg)] bg-cover bg-center">
//     <div className="flex xl:flex-row-reverse h-screen w-full">
//       <div className="xl:w-full xl:my-auto xl:mx-36">
//         <p className="text-black xl:text-7xl font-black text-right">
//           Serahkan Keindahan Ruang Anda: Selamat Datang di Dunia Desain
//           Interior yang Menginspirasi!
//         </p>
//       </div>
//       <div className="xl:w-full xl:my-auto xl:mx-96">
//         <Button variant="transparent" size="xl" asChild>
//           <Link href="#" className="text-xl font-bold">
//             Let's Check out{" "}
//             <Image
//               src="./icons/arrow-down.svg"
//               alt="arrow down"
//               width={35}
//               height={35}
//               className="pl-2"
//             />
//           </Link>
//         </Button>
//       </div>
//     </div>
//   </div>
//     </Section>
//   );
// }
