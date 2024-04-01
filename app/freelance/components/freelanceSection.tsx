"use cliet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button"
import Link from "next/link";

interface SectionProps {
  children: React.ReactNode;
}

type benefitDataType = {
  title: string;
  desc: string;
  icon: string;
};

type agenDataType = {
  name: string;
  image: string;
  url: string;
};

const benefitDataItem: benefitDataType[] = [
  {
    title: "Fleksibilitas Waktu",
    desc: "Sebagai seorang freelancer, Anda memiliki kendali penuh atas jadwal kerja Anda. Anda dapat menyesuaikan waktu kerja Anda sesuai dengan preferensi pribadi Anda dan mengatur jadwal yang lebih seimbang antara pekerjaan dan kehidupan pribadi.",
    icon: "/image/freelance/icon/time.svg",
  },
  {
    title: "Potensi Penghasilan Tinggi",
    desc: "Sebagai freelancer, Anda memiliki kesempatan untuk mengatur harga Anda sendiri dan menerima kompensasi yang lebih besar jika Anda dapat menemukan klien yang tepat dan menyelesaikan proyek dengan baik. Dengan mengoptimalkan keterampilan dan jaringan Anda, Anda dapat meningkatkan penghasilan Anda secara signifikan.",
    icon: "/image/freelance/icon/riseup.svg",
  },
  {
    title: "Kemandirian",
    desc: "Sebagai freelancer, Anda bertanggung jawab atas bisnis Anda sendiri. Anda dapat mengambil keputusan secara mandiri tanpa harus meminta persetujuan atasan atau berurusan dengan struktur perusahaan yang kompleks.",
    icon: "/image/freelance/icon/person.svg",
  },
  {
    title: "Kesempatan untuk Belajar",
    desc: "Melalui pengalaman kerja dengan berbagai klien dan proyek, Anda akan terus belajar dan mengembangkan keterampilan baru dalam industri properti. Ini bisa termasuk pengetahuan tentang penilaian properti, pasar real estat, manajemen proyek, dan banyak lagi.",
    icon: "/image/freelance/icon/presentation.svg",
  },
  {
    title: "Jaringan yang Luas",
    desc: "Bekerja sebagai freelancer memungkinkan Anda untuk berinteraksi dengan berbagai profesional dalam industri properti, mulai dari agen properti, arsitek, pengembang, hingga investor. Ini membuka kesempatan untuk membangun jaringan yang kuat, yang dapat bermanfaat untuk mengembangkan bisnis Anda di masa depan.",
    icon: "/image/freelance/icon/globe.svg",
  },
  {
    title: "Pengalaman Kerja yang Beragam",
    desc: "Dengan bekerja pada berbagai proyek dan dengan klien yang berbeda, Anda akan mendapatkan pengalaman yang berharga dalam berbagai aspek industri properti. Hal ini dapat meningkatkan nilai Anda sebagai profesional dan membuka pintu untuk peluang karier yang lebih menarik di masa depan.",
    icon: "/image/freelance/icon/sparkle.svg",
  },
];

const agenDataItem: agenDataType[] = [
  { name: "Heru Nisa", url: "#", image: "/image/freelance/agen/agen_1.jpg" },
];

function Section({ children }: SectionProps) {
  return <div className="flex flex-col">{children}</div>;
}

export function SectionOne() {
  return (
    <Section>
      <div className="w-full xl:h-screen sm:h-full sm:bg-[url(/image/freelance/bg-sectionOne.jpg)] bg-[url(/image/freelance/bg-sectionOnePhone.jpg)] bg-cover">
        <div className={`flex flex-col sm:flex-row xl:h-screen sm:h-full h-full`}>
          <div className={`xl:w-1/2 sm:w-full w-full my-auto xl:pl-20 sm:pl-5 xl:pt-0 sm:pt-0 pt-3`}>
            <p className="xl:text-6xl sm:text-3xl text-center text-2xl font-extrabold px-4">
              Mulailah Meniti Karirmu dengan menjadi Freelance di Bidang
              Property Bersama Kami
            </p>
          </div>
          <img
            src={`/image/freelance/sectionOne_image.png`}
            className={`xl:h-[900px] sm:h-[500px] h-[300px] mx-auto my-auto`}
          />
        </div>
      </div>
    </Section>
  );
}

export function SectionTwo() {
  return (
    <Section>
      <div className={`w-full h-full py-6`}>
        <div className={`justify-center items-center text-center mb-5`}>
          <p className={`xl:text-4xl sm:text-2xl text-xl`}>
            Benefit yang anda akan terima jika menjadi{" "}
            <span className="font-bold text-blue-800">Freelance</span> kami
          </p>
        </div>
        <div className={`grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 xl:px-10 sm:px-5 px-3`}>
          {benefitDataItem.map((item, index) => (
            <div key={index}>
              <Card className=" xl:h-full sm:h-full">
                <CardHeader>
                  <CardTitle className="flex mx-auto">
                    <img src={item.icon} className={`h-6`} />
                    <p className="ml-2">{item.title}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function SectionAgen() {
  return (
    <Section>
      <div className={`w-full h-full bg-blue-900 py-5`}>
        <div className={`flex flex-col`}>
          <div className={`justify-center items-center text-center xl:mb-5 sm:mb-5 mb-2`}>
            <p className={`xl:text-4xl sm:text-4xl text-2xl text-white`}>
              Jadilah Freelance melalui Agen Kami
            </p>
            <div className="xl:mt-10 sm:mt-10 mt-5">
              <Carousel className="xl:w-1/2 sm:w-1/2 w-2/3 mx-auto">
                <CarouselContent>
                  {agenDataItem.map((item, index) => (
                    <CarouselItem key={index}>
                      <Card className="xl:w-1/2 sm:w-full w-full mx-auto">
                        <CardHeader>
                            <img src={item.image} className="w-72 mx-auto" />
                          <CardTitle className="pt-3 text-4xl">{item.name}</CardTitle>
                        </CardHeader>
                        <CardFooter>
                            <Button variant={'whatsapp'} asChild className="mx-auto">
                                <Link href={item.url}>
                                    <img src="/image/freelance/icon/wa_icon.png" className="h-6 pr-2" />
                                    Hubungi WhatsApp
                                </Link>
                            </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SectionFooter() {
  return (
    <Section>
      <div className="w-full h-full max-h-screen">
          <div className="grid grid-cols-3 gap-0 justify-center items-center xl:px-10 sm:px-10 xs: py-5">
            <div className="text-left">
              <p>CV.Infinity Project Property</p>
              <p>Kantor Infinity</p>
              <p>Jl.Domba no.13 Kel.Talise</p>
              <p>Palu, Sulawesi Tengah</p>
            </div>
            <div>
              <img
                src="./image/infinity_logo.png"
                className="h-[100px] mx-auto"
              />
            </div>
            <div>
              <p className="text-right">
                Copyright &copy; Hery Setiawan (Staff IT Infinity Project
                Property)
              </p>
            </div>
          </div>
      </div>
    </Section>
  );
}

