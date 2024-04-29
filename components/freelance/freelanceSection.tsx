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
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SectionProps {
  children: React.ReactNode;
  className: string;
}

type benefitDataType = {
  title: string;
  desc: string;
  icon: string;
};

const freelanceImage = [
  { src: "/image/freelance/freelance1.png" },
  { src: "/image/freelance/freelance2.png" },
  { src: "/image/freelance/freelance3.png" },
];

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

function Section({ children, className }: SectionProps) {
  return <section className={`${className} flex flex-col`}>{children}</section>;
}

export function SectionOne() {
  return (
    <Section className="w-full xl:h-screen sm:h-full sm:bg-[url(/image/freelance/bg-sectionOne.jpg)] bg-[url(/image/freelance/bg-sectionOnePhone.jpg)] bg-cover">
      <div className={`flex flex-col sm:flex-row xl:h-screen sm:h-full h-full`}>
        <div
          className={`xl:w-1/2 sm:w-full w-full my-auto xl:pl-20 sm:pl-5 xl:pt-0 sm:pt-0 pt-3`}
        >
          <p className="xl:text-6xl sm:text-3xl text-center text-2xl font-extrabold px-4">
            Mulailah Meniti Karirmu dengan menjadi Freelance di Bidang Property
            Bersama Kami
          </p>
        </div>
        <img
          src={`/image/freelance/sectionOne_image.png`}
          className={`w-1/2 mx-auto my-auto`}
        />
      </div>
    </Section>
  );
}

export function SectionSecond() {
  return (
    <Section className="w-full h-full bg-[#efefef] justify-center items-center py-5">
      <p className="xl:text-4xl sm:text-2xl text-xl text-center font-bold px-5">
        Ada banyak Job Freelance yang dapat pilih
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-1">
        {freelanceImage.map((item, index) => (
          <div key={index}>
            <img src={item.src} className="w-[70%] rounded-2xl mx-auto" />
          </div>
        ))}
      </div>
      <p className="text-xl mt-5">Dan masih banyak lagi...</p>
    </Section>
  );
}

export function SectionBenefit() {
  return (
    <Section className="w-full h-full py-6">
      <div className={`justify-center items-center text-center mb-5`}>
        <p className={`xl:text-4xl sm:text-2xl text-xl`}>
          Benefit yang anda akan terima jika menjadi{" "}
          <span className="font-bold text-blue-800">Freelance</span> kami
        </p>
      </div>
      <div
        className={`grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 xl:px-10 sm:px-5 px-3`}
      >
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
    </Section>
  );
}

export function SectionHub() {
  return (
    <Section className="w-full h-full p-10 text-center bg-[#efefef]">
      <div>
        <p className="text-4xl font-semibold">Jadilah Freelance sekarang</p>
        <p>dengan menghubungi kami melalui WhatsApp dibawah</p>
        <Button variant={'default'} className="mt-3" asChild>
          <Link
            href="https://api.whatsapp.com/send?phone=6282122229500&text=Saya%20ingin%20Menjadi%20Freelance.%20"
            target="_blank"
            className="xl:text-xl sm:text-xl xs:text-lg text-lg flex"
          >
            Mulai Konsultasi
            <img src="/image/wa_icon.png" className="h-8 ml-2" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col inset-0 sm:px-24 px-12 pt-5 pb-2 text-black">
      <div className="flex mb-5">
        <img src="/image/logo/logo_2.png" className="h-10" />
        <p className="my-auto ml-2 text-xl font-bold select-none">
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
      <hr style={{ height: 5, borderWidth: 0, backgroundColor: 'black' }} />
      <div className="flex mt-2 justify-center">
        <p>Copyright &copy; | Staff IT (Hery Setiawan)</p>
      </div>
    </footer>
  );
}
