"use client";

import { Button, Table, TableHead, TableHeadCell } from "flowbite-react";
import styles from "./agenPage.module.css";
import Link from "next/link";
import { motion, animate } from "framer-motion";
// import ContactForm from "./components/contactForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactEmail from "./components/contactFormEmail";
import React, { useEffect, useRef } from "react";

function Counter({ from, to }: { from: number, to: number }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
              if (ref.current) {
                const valueString = value.toFixed(1);
                ref.current.textContent = value % 1 === 0 ? valueString.slice(0, -2) : valueString;
              }
            }
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [from, to]);

  return <span ref={ref} />;
}

const Agen = () => {
  const slideInVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <>
        <main className="flex flex-col w-full">
          <section className="flex">
            <div className="flex flex-col mt-10">
              <div className="flex mx-10">
                <p className="font-medium text-4xl sm:text-8xl mb-5 sm:mb-12">
                  Awaludin Agen <br />
                  Berani Melangkah, Lebih Produktif Bersama Kami
                </p>
              </div>
              <div className="flex mx-10 mb-5 sm:mb-10">
                <div className="flex flex-col sm:flex-row justify-between">
                  <p className="sm:w-1/2 w-full text-3xl">
                    Cari tau lebih detail tentang program ini
                  </p>
                  <Link href="#form" className="flex">
                    <Button color="light" className="sm:mx-10 sm:my-auto my-5" pill>
                      Daftar Sekarang
                      <img
                        src="./icons/arrow-upright.svg"
                        alt="next section"
                        className="ml-2 h-6"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex">
                <img
                  src="./image/agen/agen_dashboard.jpg"
                  className="object-cover w-screen sm:h-[520px] sm:w-full"
                />
              </div>
            </div>
          </section>
          <section className=" text-black flex-1" id="section2">
            <div className="flex flex-col p-5 sm:p-10">
              <div className="flex">
                <p className="font-sans font-semibold text-4xl sm:text-7xl">
                  Hasil Yang Telah Dicapai Oleh Tim Agen Kami
                </p>
              </div>
              <div className="flex-1 mb-10 sm:mb-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x items-center justify-center text-center font-bold font-mono mt-16 sm:mt-36">
                  <p className="sm:text-6xl text-4xl">
                    Rp.<Counter from={0} to={100} /><span>+ Juta</span> <br />
                    <span className="sm:text-3xl text-xl">Penghasilan Proyek</span>
                  </p>
                  <p className="sm:text-6xl text-4xl">
                  <Counter from={0} to={10} />+ <br />
                    <span className="sm:text-3xl text-xl">Klien</span>
                  </p>
                  <p className="sm:text-6xl text-4xl">
                  <Counter from={0} to={250} />+ <br />
                    <span className="sm:text-3xl text-xl">Testimoni</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex-1 bg-slate-950 text-white">
            <div className="flex flex-col px-10 py-10">
              <p className="flex font-sans font-black text-5xl">
                Jasa yang kami sediakan
              </p>
              <br />
              <div className="flex">
                <div className="overflow-x-auto sm:overflow-x-auto">
                  <Table className="w-full">
                    <TableHead className="text-lg">
                      <Table.HeadCell className="">Nama Jasa</Table.HeadCell>
                      <Table.HeadCell className="">Detail Jasa</Table.HeadCell>
                    </TableHead>
                    <Table.Body className="divide-y bg-white">
                      <Table.Row>
                        <Table.Cell>Penjualan Properti</Table.Cell>
                        <Table.Cell>
                          <p>
                            Membantu pemilik properti dalam menjual rumah,
                            apartemen, atau properti komersial. Melibatkan
                            pemasaran, penawaran, dan negosiasi dengan pembeli
                            potensial.
                          </p>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Pembelian Properti</Table.Cell>
                        <Table.Cell>
                          <p>
                            Membantu calon pembeli dalam mencari properti yang
                            sesuai dengan kebutuhan dan anggaran mereka.
                            Melibatkan proses penawaran, negosiasi, dan
                            penyelesaian transaksi.
                          </p>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Penyewaan Properti</Table.Cell>
                        <Table.Cell>
                          <p>
                            Membantu pemilik properti dalam mencari penyewa,
                            menyusun perjanjian sewa, dan mengelola aspek-aspek
                            administratif dan operasional penyewaan.
                          </p>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Manajemen Properti</Table.Cell>
                        <Table.Cell>
                          <p>
                            Menyediakan layanan manajemen properti harian,
                            termasuk pemeliharaan, komunikasi dengan penyewa,
                            dan penanganan masalah administratif.
                          </p>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Pengembangan Properti</Table.Cell>
                        <Table.Cell>
                          <p>
                            Memberikan layanan konsultasi dan manajemen proyek
                            untuk pengembangan properti baru atau renovasi.
                            Termasuk perencanaan, pengawasan konstruksi, dan
                            strategi pemasaran.
                          </p>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full text-black" id="form">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInVariants}
            >
              <div className="flex flex-col py-10 px-5 sm:px-10">
                <p className="flex font-sans font-black text-4xl sm:text-8xl">
                  Apakah Kamu Tertarik? <br />
                  Daftar Sekarang!
                </p>
                <p className="flex font-serif my-5 font-medium">
                  Mari kita bersama menciptakan ide menjadi nyata dan hasil yang
                  memuaskan
                </p>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <Tabs defaultValue="email" className="w-1/2">
                      <TabsList>
                        <TabsTrigger value="email">Email</TabsTrigger>
                        <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
                      </TabsList>
                      <TabsContent value="email">
                        <ContactEmail />
                      </TabsContent>
                      <TabsContent value="whatsapp">Coming Soon</TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
    </>
  );
};

export default Agen;
