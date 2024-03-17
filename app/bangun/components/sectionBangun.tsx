"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
}
interface CarouselMainType {
  url: string;
}

const carouselMainItem: CarouselMainType[] = [
  { url: "./image/1.jpg" },
  { url: "./image/2.jpg" },
  { url: "./image/3.jpg" },
  { url: "./image/4.jpg" },
  { url: "./image/5.jpg" },
];

const Section = ({ children }: SectionProps) => {
  return <div className="flex flex-col">{children}</div>;
};

export const SectionMain = () => {
  return (
    <Section>
      <div className="static bg-gradient-to-b from-amber-500 to-white xl:w-full xl:h-screen">
        <img src="./image/infinity_logo.png" className="relative left-1/2 right-1/2 top-[15px] -translate-x-1/2 z-10 h-[70px] max-h-screen" />
          <div className="flex xl:flex-row justify-center items-center text-center mt-10">
            <div className="p-24">
              <p>Detail</p>
            </div>
            <div>
              <Carousel
                plugins={[Autoplay({delay: 2000})]}
                className="w-[700px]"
              >
                <CarouselContent>
                  {carouselMainItem.map((item, index) => (
                    <CarouselItem key={index}>
                      <img src={item.url} className="object-cover rounded-lg" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
        </div>
      </div>
    </Section>
  );
};
