"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return(
    <div className="flex flex-col">{children}</div>
  );
};

export const SectionOne = () => {
  return (
    <Section>
      <div className="static w-full h-[579px] xl:w-full sm:w-full xl:h-screen sm:h-screen bg-black items-center justify-center text-center">
        <img
          src="./image/infinity_logo.png"
          className="relative left-1/2 right-1/2 top-[15px] -translate-x-1/2 z-10 h-[70px] max-h-screen"
        />
        <p className="text-white mt-10 xl:text-[40px]/[52px] sm:text-2xl font-extrabold">
          Wujudkan Rumah Impian Anda Yang
          <br />
          Nyaman Dengan Konsep Rumah Tumbuh
        </p>
        <p className="text-white mt-5 2xl:text-[20px]/[32px] text-xs sm:text-sm font-medium">
          Karena rumah yang nyaman adalah rumah yang bikin bahagia
        </p>
        <motion.img
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            bounce: 0.6,
            mass: 1,
            stiffness: 300,
            damping: 20,
          }}
          src="./image/desain_dashboard.png"
          className="relative z-10 left-24 xl:left-[600px] sm:left-12 h-[250px] xl:h-[680px] sm:h-[550px]"
        />
        <div className="absolute bottom-80 xl:bottom-0 sm:bottom-0 w-full h-[210px] z-0 xl:h-[310px] sm:h-[310px] bg-white"></div>
      </div>
    </Section>
  );
};
export const SectionTwo = () => {
  return (
    <Section>
      <div className="w-full h-[1400px] xl:w-full xl:h-screen sm:w-full sm:h-[800px]">
        <div className="flex flex-col xl:flex-row sm:flex-col justify-center items-center mb-24">
          <div className="xl:mt-10 sm:mt-0">
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
            className="h-[300px] xl:h-[500px] sm:h-[500px] ml-10"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" bg-amber-400 w-full h-[270px]">
            <p className="mt-14 mb-10 text-4xl font-extrabold">Karena Itu,</p>
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
      <div className="w-full h-[980px] xl:w-full xl:h-screen sm:w-full sm:h-[2170px]">
        <div className="flex flex-col xl:mt-5 sm:mt-[600px] justify-center items-center text-center">
          <div>
            <p className="text-4xl font-extrabold mb-5">Layanan Tim Kami</p>
            <p className="text-lg">
              Yang bisa Anda sesuaikan dengan kebutuhan Anda dan Keluarga
            </p>
          </div>
          <div className="flex flex-col xl:flex-row sm:flex-col xl:mt-96 sm:mt-80 mt-40">
            <div className="relative w-1/2 xl:w-96 xl:h-[420px] sm:w-96 sm:h-[420px] bg-amber-400 xl:mr-10 ml-[120px] xl:ml-0 sm:ml-6 pt-36 z-0 rounded-tl-lg rounded-tr-lg sm:mb-80 mb-40">
              <motion.img
                whileHover={{ rotate: 30 }}
                transition={{ duration: 0.5 }}
                src="./image/desain_lantai1.jpg"
                className="absolute z-10 origin-center -top-[100px] left-[34px] right-[34px] w-[150px] h-[200px] xl:-top-[300px] xl:left-[54px] xl:right-[54px] sm:-top-[300px] sm:left-[54px] sm:right-[54px] object-cover sm:w-[280px] sm:h-[420px] xl:w-[280px] xl:h-[420px] border-solid border-4 border-white rounded-2xl"
              />
              <p className="xl:text-3xl sm:text-3xl text-xl font-extrabold xl:mb-10 sm:mb-10 mb-5">Desain Lantai 1</p>
              <p className="xl:text-lg sm:text-lg text-sm">
                Buat desain perencanaan yg matang, sebelum mulai membangun rumah
                1 lantai impian secara bertahap.
              </p>
            </div>
            <div className="relative w-1/2 xl:w-96 xl:h-[420px] sm:w-96 sm:h-[420px] bg-amber-400 xl:ml-10 sm:ml-6 ml-[120px] pt-36 z-0 rounded-tl-lg rounded-tr-lg">
              <motion.img
                whileHover={{ rotate: 30 }}
                transition={{ duration: 0.5 }}
                src="./image/desain_lantai2.jpg"
                className="absolute z-10 -top-[100px] left-[34px] right-[34px] w-[150px] h-[200px] xl:-top-[300px] xl:left-[54px] xl:right-[54px] sm:-top-[300px] sm:left-[54px] sm:right-[54px] object-cover sm:w-[280px] sm:h-[420px] xl:w-[280px] xl:h-[420px] border-solid border-4 border-white rounded-2xl"
              />
              <p className="xl:text-3xl sm:text-3xl text-xl font-extrabold xl:mb-10 sm:mb-10 mb-5">Desain Lantai 2</p>
              <p className="xl:text-lg sm:text-lg text-sm">
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
          <div className="bg-amber-400 h-[250px] xl:py-20 sm:py-20 py-10">
            <p className="text-3xl font-extrabold mb-5">
              Klik tombol dibawah ini untuk mulai Konsultasi Gratis via WhatsApp
            </p>
            <Button variant="success" className="rounded-full p-6" asChild>
              <Link href="https://api.whatsapp.com/send?phone=6281352294435&text=Saya%20ingin%20desain%20rumah%20" target="_blank" className=" text-xl">
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
              <img src="./image/infinity_logo.png" className="h-[100px] mx-auto" />
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
