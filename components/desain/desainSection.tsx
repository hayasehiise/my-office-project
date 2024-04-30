"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

interface SectionProps {
  children: React.ReactNode;
}

interface carouselProyekData {
  image: string;
}

const carouselProyekItem: carouselProyekData[] = [
  { image: "/image/desain/carousel/proyek1.jpg" },
  { image: "/image/desain/carousel/proyek2.jpg" },
  { image: "/image/desain/carousel/proyek3.jpg" },
  { image: "/image/desain/carousel/proyek4.jpg" },
];

function Section({ children }: SectionProps) {
  return <section className="flex flex-col">{children}</section>;
}

export function SectionOne() {
  return (
    <Section>
      <div className="static w-full h-full xl:w-full sm:w-full xl:h-screen sm:h-full bg-gradient-to-b from-slate-900 via-slate-600 to-slate-100 items-center justify-center text-center">
      <img
          src="/image/logo/logo_2.png"
          className="relative top-[15px] mx-auto z-10 sm:h-[100px] h-[50px]"
        />
        <p className="text-white mt-10 sm:text-4xl text-xl font-extrabold">
          Wujudkan Rumah Impian Anda Yang
          <br />
          Nyaman Dengan Konsep Rumah Tumbuh
        </p>
        <p className="text-white text-sm sm:text-base font-medium">
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
          src="/image/desain/desain_dashboard.png"
          className="relative z-10 left-0 right-0 transform -translate-x-1/2 mx-auto h-[250px] xl:h-[680px] sm:h-[550px]"
        />
      </div>
    </Section>
  );
}

export function SectionTwo() {
  return (
    <Section>
      <div className="w-full h-full xl:w-full xl:h-screen sm:w-full sm:h-full">
        <div className="flex flex-col xl:flex-row sm:flex-col justify-center items-center mb-24">
          <div className="xl:mt-10 sm:mt-0 xl:pl-56 xl:pt-10 sm:pl-16 sm:pt-10 xs:px-10 xs:pt-10">
            <p className=" text-4xl font-extrabold mb-10">Kami Paham...</p>
            <p className=" sm:text-lg text-base mb-5">
              Menyediakan rumah yang nyaman untuk keluarga itu butuh
              <br />
              waktu, proses dan biaya yg nggak sedikit. Tapi,
              <br />
              bukan berarti kita harus menuggu sempurna dulu untuk memulai, kan?
            </p>
            <p className="sm:text-lg text-base mb-5">
              Sebenarnya, Anda bisa mulai mewujudkan rumah impian yang
              <br />
              nyaman untuk keluarga Anda secara bertahap. Iya benar,
              <br />
              tahap demi tahap.
            </p>
            <p className="sm:text-lg text-base mb-5">
              Saat membangun rumahnya nanti, perasaan Anda lebih tenang karena
              <br />
              tidak terburu-buru dan keluarga Anda tetap bisa merasakan
              <br />
              kenyamanan saat beraktivitas di rumah nanti.
            </p>
            <p className="sm:text-lg text-base">
              Harapannya, tahap demi tahap rumah Anda dan Keluarga
              <br />
              jadi semakin nyaman nantinya.
            </p>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            src="/image/desain/desain_asset1.png"
            className="h-[300px] xl:h-[500px] sm:h-[500px] mx-auto"
          />
        </div>
        <div className="flex flex-col justify-center text-white items-center text-center">
          <div className=" bg-slate-900 w-full h-full py-14">
            <p className="text-4xl font-extrabold">Karena Itu,</p>
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
}

export function SectionThree() {
  return (
    <Section>
      <div className="w-full h-full xl:w-full xl:h-full sm:w-full sm:h-full">
        <div className="flex flex-col mt-5 xl:mt-5 sm:mt-5 justify-center items-center text-center">
          <div>
            <p className="text-4xl font-extrabold mb-5">Layanan Tim Kami</p>
            <p className="text-lg">
              Yang bisa Anda sesuaikan dengan kebutuhan Anda dan Keluarga
            </p>
          </div>
          <div className="flex flex-col xl:flex-row sm:flex-col xl:mt-96 sm:mt-80 mt-72 text-white">
            <div className="relative w-56 h-[320px] xl:w-96 xl:h-[420px] sm:w-96 sm:h-[420px] bg-slate-600 xl:mx-5 sm:mx-auto mx-auto xl:pt-36 sm:pt-36 pt-32 z-0 rounded-tl-lg rounded-tr-lg xl:mb-0 sm:mb-80 mb-72">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src="/image/desain/desain_lantai1.jpg"
                className="absolute z-10 origin-center left-1/2 right-1/2 xl:-top-20 sm:-top-20 -top-14 -translate-x-1/2 -translate-y-1/2 mx-auto object-cover w-[180px] h-[320px] sm:w-[280px] sm:h-[420px] xl:w-[280px] xl:h-[420px] border-solid border-4 border-white rounded-2xl"
              />
              <p className="xl:text-3xl sm:text-3xl text-xl font-extrabold xl:mb-10 sm:mb-10 mb-5">
                Desain Lantai 1
              </p>
              <p className="xl:text-lg sm:text-lg text-sm">
                Buat desain perencanaan yg matang, sebelum mulai membangun rumah
                1 lantai impian secara bertahap.
              </p>
            </div>
            <div className="relative w-56 h-[320px] xl:w-96 xl:h-[420px] sm:w-96 sm:h-[420px] bg-slate-600 xl:mx-5 sm:mx-auto mx-auto xl:pt-36 sm:pt-36 pt-32 z-0 rounded-tl-lg rounded-tr-lg">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src="/image/desain/desain_lantai2.jpg"
                className="absolute z-10 origin-center left-1/2 right-1/2 xl:-top-20 sm:-top-20 -top-14 -translate-x-1/2 -translate-y-1/2 mx-auto object-cover w-[180px] h-[320px] sm:w-[280px] sm:h-[420px] xl:w-[280px] xl:h-[420px] border-solid border-4 border-white rounded-2xl"
              />
              <p className="xl:text-3xl sm:text-3xl text-xl font-extrabold xl:mb-10 sm:mb-10 mb-5">
                Desain Lantai 2
              </p>
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
}

export function SectionProject() {
  return (
    <Section>
      <div className="w-full h-full bg-slate-900 text-center">
        <div className="flex flex-col mt-10">
          <p className="xl:text-3xl sm:text-3xl text-xl font-extrabold text-white pb-10">
            Rumah yg Kami Selesaikan Desain Perencanaannya
          </p>
          <div className="flex sm:flex-row flex-col pb-10">
            <div className="mx-auto my-5">
              <Carousel className="w-[70%] mx-auto">
                <CarouselContent>
                  {carouselProyekItem.map((item, index) => (
                    <CarouselItem key={index}>
                      <img src={item.image} className="mx-auto" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext variant={'secondary'} className="sm:h-16 sm:w-16 h-7 w-7 sm:-mr-5" />
                <CarouselPrevious variant={'secondary'} className="sm:h-16 sm:w-16 h-7 w-7 sm:-ml-5"  />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionPaket() {
  return (
    <Section>
      <div className="w-full h-full">
        <div className="flex xl:flex-row flex-col justify-center xl:items-start sm:items-center">
          <div className="xl:my-10 xl:p-5 my-2 p-4">
            <Card className="w-fit">
              <CardHeader>
                <CardTitle>
                  <p className="text-center">Paket Hemat</p>
                </CardTitle>
              </CardHeader>
              <hr/>
              <CardContent>
                <div>
                  <p className="font-semibold py-2">Visualisasi 3D Eksterior</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Fasad Bangunan 2 View</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold py-2">Arsitektur</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Gambar Bangunan</li>
                    <li>Gambar Denah</li>
                    <li>Gambar Tampak</li>
                    <li>Gambar Potongan Melintang Membujur</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <p className="font-bold text-xl">
                  Rp.37.000/M<sup>2</sup>
                </p>
              </CardFooter>
            </Card>
          </div>
          <div className="xl:my-10 xl:p-5 my-2 p-4">
            <Card className="w-fit">
              <CardHeader>
                <CardTitle>
                  <p className="text-center">Paket Pas</p>
                </CardTitle>
              </CardHeader>
              <hr/>
              <CardContent>
                <div>
                  <p className="font-semibold py-2">Visualisasi 3D Eksterior</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Fasad Bangunan 4 View</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold py-2">Arsitektur</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Gambar Bangunan</li>
                    <li>Gambar Denah</li>
                    <li>Gambar Tampak</li>
                    <li>Gambar Potongan Melintang Membujur</li>
                    <li>Gambar Denah Rencana Pola Keramik</li>
                    <li>Gambar Denah Rencana Plafond</li>
                    <li>Gambar Denah Rencana Atap</li>
                    <li>Gambar Denah Rencana Kusen, Pintu & Jendela</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold py-2">Mekanikal Elektrikal</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Gambar Instalasi Listrik</li>
                    <li>Gambar Instalasi Air Bersih</li>
                    <li>Gambar Instalasi Air Kotor</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold py-2">Struktur</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Gambar Denah Pondasi</li>
                    <li>Gambar Denah Sloof</li>
                    <li>Gambar Denah Balok Lantai</li>
                    <li>Gambar Denah Ringbalk</li>
                    <li>Gambar Denah Kolom</li>
                    <li>Gambar Denah Plat Lantai</li>
                    <li>Gambar Detail Pondasi</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold py-2">Estimasi Biaya</p>
                  <ul className="list-outside list-disc px-4">
                    <li>3D Interior 1 View</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <p className="font-bold text-xl">
                  Rp.63.000/M<sup>2</sup>
                </p>
              </CardFooter>
            </Card>
          </div>
          <div className="xl:m-10 xl:p-5 my-2 p-4">
            <Card className="w-fit">
              <CardHeader>
                <CardTitle>
                  <p className="text-center">Paket Lengkap</p>
                </CardTitle>
              </CardHeader>
              <hr/>
              <CardContent>
                <div>
                  <p className="font-semibold py-2">Visualisasi 3D Eksterior</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Fasad Bangunan 6 View</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold py-2">Arsitektur</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Gambar Bangunan</li>
                    <li>Gambar Denah</li>
                    <li>Gambar Tampak</li>
                    <li>Gambar Potongan Melintang Membujur</li>
                    <li>Gambar Denah Rencana Pola Keramik</li>
                    <li>Gambar Denah Rencana Plafond</li>
                    <li>Gambar Denah Rencana Atap</li>
                    <li>Gambar Denah Rencana Kusen, Pintu & Jendela</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold py-2">Mekanikal Elektrikal</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Gambar Instalasi Listrik</li>
                    <li>Gambar Instalasi Air Bersih</li>
                    <li>Gambar Instalasi Air Kotor</li>
                    <li>Gambar Detail Septictank</li>
                    <li>Gambar Detail Sumur Resapan</li>
                    <li>Gambar Detail Bak Kontrol</li>
                    <li>Gambar Detail Resapan Air Hujan</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold py-2">Struktur</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Gambar Denah Pondasi</li>
                    <li>Gambar Denah Sloof</li>
                    <li>Gambar Denah Balok Lantai</li>
                    <li>Gambar Denah Ringbalk</li>
                    <li>Gambar Denah Kolom</li>
                    <li>Gambar Denah Plat Lantai</li>
                    <li>Gambar Detail Pondasi</li>
                    <li>Gambar Detail Penulangan Kolom</li>
                    <li>Gambar Detail Penulangan Sloof</li>
                    <li>Gambar Detail Balok</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold py-2">Estimasi Biaya</p>
                  <ul className="list-outside list-disc px-4">
                    <li>Rencana Anggaran Biaya (RAB)</li>
                    <li>3D Interior 3 View</li>
                    <li>Animasi</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xl font-bold">
                  Rp.98.000/M<sup>2</sup>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionContact() {
  return (
    <Section>
      <div className="w-full h-full max-h-screen">
        <div className="flex flex-col text-center text-white">
          <div className="bg-slate-900 h-[250px] xl:py-20 sm:py-20 py-10">
            <p className="xl:text-3xl sm:text-3xl text-xl font-extrabold mb-5">
              Klik tombol dibawah ini untuk mulai Konsultasi Gratis via WhatsApp
            </p>
            <Button variant="success" className="rounded-full p-6" asChild>
              <Link
                href="https://api.whatsapp.com/send?phone=6282122229500&text=Saya%20ingin%20desain%20rumah%20"
                target="_blank"
                className=" text-xl"
              >
                Mulai Konsultasi
                <img src="/image/wa_icon.png" className="h-8 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative flex flex-col inset-0 sm:px-24 px-12 pt-5 pb-2 bg-slate-600 text-white">
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
            <p className="my-auto ml-2 w-1/2">Jl. Domba No.22, Talise, Kec. Palu Timur., Kota Palu, Sulawesi Tengah 94118</p>
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
