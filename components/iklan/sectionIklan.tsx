"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SectionProps {
  children: React.ReactNode;
  className: string;
}

type projectVideoType = {
  url: string;
};

const projectVideoData: projectVideoType[] = [
  { url: "/image/iklan/project_video/project1.mp4" },
  { url: "/image/iklan/project_video/project2.mp4" },
  { url: "/image/iklan/project_video/project3.mp4" },
  { url: "/image/iklan/project_video/project4.mp4" },
];

function Section({ children, className }: SectionProps) {
  return <section className={`${className} flex flex-col`}>{children}</section>;
}

export function SectionMain() {
  return (
    <Section className="w-full max-h-screen sm:bg-[url(/image/iklan/bg-large-device.jpg)] bg-[url(/image/iklan/bg-phone.jpg)] bg-cover bg-no-repeat">
      <div className="flex sm:flex-row flex-col-reverse justify-center items-center h-screen">
        <div className="flex flex-col sm:w-1/2 w-full">
          <p className="text-white sm:text-6xl text-4xl font-bold p-5">
            Ingin Video Iklan dan Konten Unik dan Menarik banyak Penonton?
          </p>
          <div className="flex flex-col">
            <p className="text-white text-lg font-bold mx-auto transition-all ease-in-out hover:mb-5 cursor-pointer">
              Scroll for more
            </p>
            <img src="/icons/arrow-down-white.svg" className="h-10" />
          </div>
        </div>
        <img
          src="/image/iklan/iklan_main.png"
          className="xl:h-[600px] sm:h-96 h-72"
        />
      </div>
    </Section>
  );
}

export function SectionSecond() {
  return (
    <Section className="w-full h-full bg-gradient-to-tl from-[#00041f] from-50% to-[#73091f] to-100%">
      <div className="flex sm:flex-row flex-col justify-center">
        <img
          src="/image/iklan/iklan_second.png"
          className="xl:h-[600px] xl:w-[600px] sm:h-96 sm:w-96 w-72 h-72 mx-auto"
        />
        <div className="my-auto sm:w-1/2 w-full">
          <p className="text-white sm:text-4xl text-xl font-semibold p-10">
            Tim kami dapat memberikan solusi untuk anda yang ingin membuat video
            iklan/konten sesuai keinginan anda.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function SectionThird() {
  return (
    <Section className="w-full h-full bg-gradient-to-br from-[#00041f] from-50% to-[#73091f] to-100%">
      <div className="flex sm:flex-row-reverse flex-col justify-center p-10">
        <img
          src="/image/iklan/iklan_third.jpg"
          className="xl:h-[500px] xl:w-[500px] sm:h-80 sm:w-80 w-64 h-64 object-cover sm:mx-0 mx-auto rounded-full"
        />
        <div className="my-auto sm:w-fit w-full sm:pt-0 pt-5">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <img
                src="/image/iklan/movie_script.png"
                className="h-16 w-16 mx-auto"
              />
              <p className="sm:text-xl text-lg text-white text-center xl:w-1/2 sm:w-52 mx-auto">
                Mulai Dari Pembuatan Skrip/Naskah
              </p>
            </div>
            <img
              src="/image/iklan/right_arrow.png"
              className="h-10 w-10 my-auto"
            />
            <div className="flex flex-col">
              <img
                src="/image/iklan/edting.png"
                className="h-16 w-16 mx-auto"
              />
              <p className="sm:text-xl text-lg text-white text-center xl:w-1/2 sm:w-52 mx-auto">
                Mulai Dari Pembuatan Skrip/Naskah
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionProjects() {
  return (
    <Section className="w-full h-full bg-gradient-to-tr from-[#00041f] from-50% to-[#73091f] to-100% p-10">
      <div className="flex flex-col">
        <p className="text-white text-3xl font-semibold mx-auto mb-10">
          Project yang telah tim kami buat
        </p>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4">
          {projectVideoData.map((item, index) => (
            <div className="relative" key={index}>
              <img
                src="/image/iklan/phone.png"
                className="relative object-fill h-[90%] w-[70%] z-20 mx-auto"
              />
              <div className="absolute top-0 w-full">
                <video
                  controls={false}
                  playsInline
                  autoPlay
                  loop
                  muted
                  className="p-1 mx-auto object-fill w-[70%] z-10 rounded-[50px]"
                >
                  <source src={item.url} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white text-xl font-semibold mx-auto mt-5">
          Dan masih banyak lagi ...
        </p>
      </div>
    </Section>
  );
}

export function SectionLast() {
  return (
    <Section className="w-full h-screen justify-center items-center bg-gradient-to-bl from-[#00041f] from-50% to-[#73091f] to-100%">
      <p className="text-white text-5xl font-bold text-center mb-3">
        Anda Tertarik kan?{" "}
      </p>
      <p className="text-white text-3xl font-semibold text-center mb-3">
        Tunggu apa lagi... <br />
        ayo mulai membuat video anda bersama kami sekarang!{" "}
      </p>
      <Button variant={"whatsappGreen"} asChild>
        <Link
          href={`https://api.whatsapp.com/send?phone=6282122229500&text=Assalamualaikum%0AHai%20Kak,%20Saya%20Mau%20Buat%20Konten/Iklan.`}
          target="_blank"
        >
          <img src="/icons/whatsapp.png" className="h-8 mr-3" />
          Hubungi Kami{" "}
        </Link>
      </Button>
    </Section>
  );
}
