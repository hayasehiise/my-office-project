"use client";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";
import { useState } from "react";
import FaqAccordion from "@components/website/faqAccordion";

interface SectionProps {
  children: React.ReactNode;
  className: string;
  id?: string;
}

function Section({ children, className, id }: SectionProps) {
  return <section className={`${className}`} id={id}>{children}</section>;
}

function scrollTo(element: string) {
  const ele = document.getElementById(element)
  ele?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})
}

export function SectionMain() {
  return (
    <Section className="w-full h-dvh bg-[url(/image/website/bg-section.jpg)] bg-cover flex justify-end">
      <div className="sm:w-1/2 h-dvh bg-white bg-opacity-70 flex items-center">
        <div className="w-fit px-[5%]">
          <p className="text-4xl font-bold">
            Jasa Pembuatan Website
          </p>
          <p className="text-xl py-3">Buatlah Bisnis anda mendunia</p>
          <Button variant={"default"} className="text-xl" onClick={() => scrollTo('secondSection')}>
            Buatkan Website &raquo;
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function SectionSecond() {
  return (
    <Section className="w-full h-full py-5 sm:px-10 px-5" id="secondSection">
      <div
        className="w-fit border-2 rounded-lg shadow-md flex flex-col py-5 px-2"
      >
        <p className="text-3xl font-bold text-center pb-10">
          Saya ingin website dan saya...
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <div>
            <p className="text-center font-semibold">
              Sudah Siap Dengan Materinya/Isinya
            </p>
            <img
              src="/image/website/fitur1.png"
              className="w-1/3 object-cover mx-auto"
            />
            <p className="text-center">
              Kirimkan konten / materi website yang telah disusun kepada tim
              kami.
            </p>
          </div>
          <div className="sm:border-x-2 sm:border-y-0 border-y-2">
            <p className="text-center font-semibold">
              Punya Contoh atau Materi Lain
            </p>
            <img
              src="/image/website/fitur2.png"
              className="w-1/3 object-cover mx-auto"
            />
            <p className="text-center">
              Tim kami akan bantu aplikasikan konten dari brosur / materi lain
              yang telah Anda miliki ke dalam website.
            </p>
          </div>
          <div>
            <p className="text-center font-semibold">
              Ingin Dibuatkan Materi/Isinya
            </p>
            <img
              src="/image/website/fitur3.png"
              className="w-1/3 object-cover mx-auto"
            />
            <p className="text-center">
              Jangan khawatir, tim kami juga dapat membantu menulis konten untuk
              website yang akan dibuat.
            </p>
          </div>
        </div>
        <Button variant={"default"} className="text-xl w-fit mx-auto mt-10" onClick={() => scrollTo('sectionPaket')}>
          Saya Ingin Buat Sekarang &raquo;
        </Button>
      </div>
    </Section>
  );
}

export function SectionPaket() {
  return (
    <Section className="w-full h-full flex flex-col" id="sectionPaket">
      <p className="text-center text-4xl font-bold mt-10 pb-5">
        Paket Yang Kami Miliki
      </p>
      <div className="overflow-x-auto w-full">
      <table className="table-auto mx-auto mb-10">
        <thead className=" bg-gray-200 border-b-4 border-black">
          <tr className="h-24 ">
            <th className="bg-gray-300 text-lg font-bold rounded-tl-xl">
              Spesifikasi Layanan
            </th>
            <th className="text-lg font-bold border-x-2 border-black">Hemat</th>
            <th className="text-lg font-bold border-x-2 border-black">
              Standar
            </th>
            <th className="text-lg font-bold border-l-2 border-black rounded-tr-xl">
              Lengkap
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="p-5 border-y-2 text-left">
              Pembuatan Halaman Website
            </td>
            <td className="p-5 border-y-2 ">x Halaman</td>
            <td className="p-5 border-y-2 ">x Halaman</td>
            <td className="p-5 border-y-2 ">x Halaman</td>
          </tr>
          <tr>
            <td className="p-5 border-y-2 text-left">Waktu Pengerjaan</td>
            <td className="p-5 border-y-2 ">x Hari Kerja</td>
            <td className="p-5 border-y-2 ">x Hari Kerja</td>
            <td className="p-5 border-y-2 ">x Hari Kerja</td>
          </tr>
          <tr>
            <td className="p-5 border-y-2 text-left">Free Domain</td>
            <td className="p-5 border-y-2 ">
              <img src="/icons/checkmark.svg" className="h-7 mx-auto" />
            </td>
            <td className="p-5 border-y-2 ">
              <img src="/icons/checkmark.svg" className="h-7 mx-auto" />
            </td>
            <td className="p-5 border-y-2 ">
              <img src="/icons/checkmark.svg" className="h-7 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-5 border-y-2 text-left">Free Hosting</td>
            <td className="p-5 border-y-2 ">
              <img src="/icons/checkmark.svg" className="h-7 mx-auto" />
            </td>
            <td className="p-5 border-y-2 ">
              <img src="/icons/checkmark.svg" className="h-7 mx-auto" />
            </td>
            <td className="p-5 border-y-2 ">
              <img src="/icons/checkmark.svg" className="h-7 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-5 border-y-2 text-left">Biaya Setup</td>
            <td className="p-5 border-y-2 ">Rp. x</td>
            <td className="p-5 border-y-2 ">Rp. x</td>
            <td className="p-5 border-y-2 ">Rp. x</td>
          </tr>
          <tr>
            <td className=""></td>
            <td className="p-5 border-y-2 ">
              <Button variant={"default"} className="text-xl w-fit" asChild>
                <Link
                  href={`https://api.whatsapp.com/send?phone=6282122229500&text=Assalamualaikum%0AHai%20Kak,%20Saya%20Mau%20Buat%20Website.%0APaket%20Hemat`}
                  target="_blank"
                >
                  Pesan
                  <img src="/icons/trolly.png" className="h-7" />
                </Link>
              </Button>
            </td>
            <td className="p-5 border-y-2 ">
              <Button variant={"default"} className="text-xl w-fit" asChild>
                <Link
                  href={`https://api.whatsapp.com/send?phone=6282122229500&text=Assalamualaikum%0AHai%20Kak,%20Saya%20Mau%20Buat%20Website.%0APaket%20Standar`}
                  target="_blank"
                >
                  Pesan
                  <img src="/icons/trolly.png" className="h-7" />
                </Link>
              </Button>
            </td>
            <td className="p-5 border-y-2 ">
              <Button variant={"default"} className="text-xl w-fit" asChild>
                <Link
                  href={`https://api.whatsapp.com/send?phone=6282122229500&text=Assalamualaikum%0AHai%20Kak,%20Saya%20Mau%20Buat%20Website.%0APaket%20Lengkap`}
                  target="_blank"
                >
                  Pesan
                  <img src="/icons/trolly.png" className="h-7" />
                </Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </Section>
  );
}

export function SectionFaq() {
  return (
    <Section className="w-full h-full flex flex-col items-center py-10">
      <p className="text-4xl font-bold mb-5">FAQ</p>
      <div className="w-1/2 h-full mb-3">
        <Accordion type="single" collapsible>
          <FaqAccordion
            value="faq-1"
            question='Jenis website apa saja yang "bisa" dibuat menggunakan layanan ini??'
          >
            <>
              <p>
                Layanan ini support untuk pembuatan website company
                profile/personal/landing page sederhana.
              </p>
            </>
          </FaqAccordion>
          <FaqAccordion
          value="faq-2"
          question='Jenis website apa saja yang "tidak bisa" dibuat menggunakan layanan ini?'
        >
          <>
            <p>
              Layanan ini tidak support untuk pembuatan website dengan jenis
              forum, portal berita, dan jenis website lainnya yang membutuhkan
              data login klien.
            </p>
            <br />
            <p>
              Layanan ini juga tidak bisa digunakan untuk membuat toko online
              dengan shopping cart, shipping, dan payment gateway. Namun
              demikian banyak yang menggunakan layanan ini untuk menampilkan
              produk dan menangani transaksinya melalui WhatsApp, telepon,
              email, atau platform komunikasi lainnya.
            </p>
          </>
        </FaqAccordion>
        <FaqAccordion
          value="faq-3"
          question="Bagaimana jika website sudah jadi dan perlu revisi??"
        >
          <>
            <p>
              Setelah website selesai diproses, maksimal 1 kali revisi. Jika
              masih ada revisi selanjutnya, maka akan dikenakan biaya update
              halaman sebesar x per halaman (belum termasuk PPN). Revisi hanya
              sebatas mengubah/mengurangi konten yang sudah ada. Jika menambah
              konten baru, maka akan dikenakan biaya update.
            </p>
          </>
        </FaqAccordion>
        <FaqAccordion
          value="faq-4"
          question="Apakah mendapatkan domain gratis pada tiap paketnya?"
        >
          <>
            <p>
              Gratis domain ekstensi tertentu untuk 1 tahun pertama. Jika ingin
              menggunakan domain lain seperti .ID atau .CO.ID, maka akan
              dikenakan biaya sesuai ekstensi domainnya.
            </p>
          </>
        </FaqAccordion>
        <FaqAccordion
          value="faq-5"
          question="Berapa kapasitas hosting websitenya?"
        >
          <>
            <p>Besaran space hosting sesuai paket yang digunakan.</p>
          </>
        </FaqAccordion>
        <FaqAccordion
          value="faq-6"
          question="Apakah bisa menambahkan logo sosmed yang terhubung langsung ke sosmednya?"
        >
          <>
            <p>
              Ya. Integrasi ke sosial media ( Facebook, Instagram, dan Twitter )
              dapat dilakukan.
            </p>
          </>
        </FaqAccordion>
        </Accordion>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="grid grid-cols-2 gap-0 bg-gray-300 justify-center items-center xl:px-10 sm:px-10 xs: py-5">
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
