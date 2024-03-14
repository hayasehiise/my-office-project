"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <div className="flex flex-col">{children}</div>;
};

export const SectionOne = () => {
  return (
    <Section>
      <div className="static w-full h-screen max-h-screen bg-black items-center justify-center text-center">
        <img
          src="./image/logo_infinity.png"
          className="relative left-1/2 right-1/2 top-[15px] -translate-x-1/2 z-10 h-[70px] max-h-screen"
        />
        <p className="text-white mt-10 text-[40px]/[52px] font-extrabold">
          Wujudkan Rumah Impian Anda Yang
          <br />
          Nyaman Dengan Konsep Rumah Tumbuh
        </p>
        <p className="text-white mt-5 text-[20px]/[32px] font-medium">
          Karena rumah yang nyaman adalah rumah yang bikin bahagia{" "}
        </p>
        <motion.img
          initial={{ opacity: 0, x: "-100vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            bounce: 0.6,
            mass: 1,
            stiffness: 300,
            damping: 20,
          }}
          viewport={{ once: false }}
          src="./image/desain_dashboard.png"
          className="relative z-10 left-1/3 h-[680px]"
        />
        <div className="absolute bottom-0 w-full z-0 h-[310px] bg-white"></div>
      </div>
    </Section>
  );
};
export const SectionTwo = () => {
  return (
    <Section>
      <div className="w-full max-h-screen">
        <div className="flex flex-row justify-center items-center mb-24">
          <div className="">
            <p className=" text-4xl font-extrabold mb-10">Kami Paham...</p>
            <p className=" text-lg mb-10">
              Menyediakan rumah yang nyaman untuk keluarga itu butuh
              <br />
              waktu, proses dan biaya yg nggak sedikit. Tapi,
              <br />
              bukan berarti kita harus menuggu sempurna dulu untuk memulai, kan?
            </p>
            <p className="text-lg mb-10">
              Sebenarnya, Anda bisa mulai mewujudkan rumah impian yang
              <br />
              nyaman untuk keluarga Anda secara bertahap. Iya benar,
              <br />
              tahap demi tahap.
            </p>
            <p className="text-lg mb-10">
              Saat membangun rumahnya nanti, perasaan Anda lebih tenang karena
              <br />
              tidak terburu-buru dan keluarga Anda tetap bisa merasakan
              <br />
              kenyamanan saat beraktivitas di rumah nanti.
            </p>
            <p className="text-lg">
              Harapannya, tahap demi tahap rumah Anda dan Keluarga
              <br />
              jadi semakin nyaman nantinya.
            </p>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            src="./image/desain_asset1.png"
            className="h-[500px] ml-10"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" bg-amber-400 w-full h-[300px]">
            <p className="mt-20 mb-10 text-4xl font-extrabold">Karena Itu,</p>
            <p className="text-lg">
              Tim Infinity siap menjadi partner untuk membantu mewujudkan rumah
              impian Anda dan keluarga
              <br />
              yang nyaman dengan konsep rumah tumbuh (bertahap).
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const SectionThree = () => {
  return (
    <Section>
      <div className="w-full h-screen">
        <div className="flex flex-col mt-5 justify-center items-center text-center">
          <div>
            <p className="text-4xl font-extrabold mb-5">Layanan Tim Kami</p>
            <p className="text-lg">
              Yang bisa Anda sesuaikan dengan kebutuhan Anda dan Keluarga
            </p>
          </div>
          <div className="flex flex-row mt-96">
            <div className="relative w-96 h-[420px] bg-amber-400 mr-10 pt-36 z-0 rounded-tl-lg rounded-tr-lg">
              <motion.img
                whileHover={{ rotate: 30 }}
                transition={{ duration: 0.5 }}
                src="./image/desain_lantai1.jpg"
                className="absolute z-10 origin-center -top-[300px] left-[54px]  right-[54px] object-cover w-[280px] h-[420px] border-solid border-4 border-white rounded-2xl"
              />
              <p className="text-3xl font-extrabold mb-10">Desain Lantai 1</p>
              <p className="text-lg">
                Buat desain perencanaan yg matang, sebelum mulai membangun rumah
                1 lantai impian secara bertahap.
              </p>
            </div>
            <div className="relative w-96 h-[420px] bg-amber-400 ml-10 pt-36 z-0 rounded-tl-lg rounded-tr-lg">
              <motion.img
                whileHover={{ rotate: 30 }}
                transition={{ duration: 0.5 }}
                src="./image/desain_lantai2.jpg"
                className="absolute z-10 -top-[300px] left-[54px] right-[54px] object-cover w-[280px] h-[420px] border-solid border-4 border-white rounded-2xl"
              />
              <p className="text-3xl font-extrabold mb-10">Desain Lantai 2</p>
              <p className="text-lg">
                Buat desain perencanaan yg matang, sebelum mulai membangun rumah
                2 lantai impian secara bertahap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const SectionProject = () => {
  return (
    <Section>
      <div className="w-full h-full bg-gray-400 text-center">
        <div className="flex flex-col mt-10">
          <p className="text-3xl font-extrabold text-white">
            Rumah yg Kami Selesaikan Desain Perencanaannya
          </p>
        </div>
        <div className="flex flex-initial justify-center items-center my-10">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./image/project_01.png"
              className="w-[500px] object-cover"
            />
            <img
              src="./image/project_02.png"
              className="w-[500px] object-cover"
            />
            <img
              src="./image/project_01.png"
              className="w-[500px] object-cover"
            />
            <img
              src="./image/project_02.png"
              className="w-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export const SectionContact = () => {
  return (
    <Section>
      <div className="w-full h-full max-h-screen">
        <div className="flex flex-col text-center">
          <div className="bg-amber-400 h-[250px] py-20">
            <p className="text-3xl font-extrabold mb-5">
              Klik tombol dibawah ini untuk mulai Konsultasi Gratis via WhatsApp
            </p>
            <Button variant="success" className="rounded-full p-6" asChild>
              <Link href="#" className=" text-xl">
                Mulai Konsultasi
                <img src="./image/wa_icon.png" className="h-8 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-0 bg-black text-white justify-center items-center px-10 py-5">
            <div className="text-left">
              <p>CV.Infinity Project Property</p>
              <p>Kantor Infinity</p>
              <p>Jl.Domba no.13 Kel.Talise</p>
              <p>Palu, Sulawesi Tengah</p>
              <p>infinityprojectproperty22@gmail.com</p>
            </div>
            <div>
              <img src="./image/logo_infinity.png" className="h-[100px] mx-auto" />
            </div>
            <div>
              <p className="text-right">Copyright &copy; Hery Setiawan (Staff IT Infinity Project Property)</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
