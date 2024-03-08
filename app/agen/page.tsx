"use client";

import { Button, Table, TableHead, TableHeadCell } from "flowbite-react";
import styles from "./agenPage.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Agen = () => {
  const slideInVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  return (
    <>
      <div className="container-xl">
        <main className="flex flex-col">
          <section className="flex-1">
            <div className="flex flex-col mt-10">
              <div className="flex-1 mx-10">
                <p className="font-medium text-8xl mb-12">
                  Desain Masa depan, <br />
                  Buat Pengalaman
                </p>
              </div>
              <div className="flex-1 mx-10">
                <div className="flex flex-row justify-between">
                  <p className="flex-initial w-1/4 mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at urna sapien. Duis et justo id sem finibus
                    ultrices. Sed a felis sagittis, tempus leo.
                  </p>
                  <Link href="#">
                    <Button color="light" className="flex-initial" pill>
                      Lets Check out
                      <img
                        src="./icons/arrow-upright.svg"
                        alt="next section"
                        className="ml-2 h-6"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src="./image/agen_dashboard.jpg"
                  className="object-cover h-520p w-full"
                />
              </div>
            </div>
          </section>
          <section className=" text-black flex-1" id="section2">
            <div className="flex flex-col p-10">
              <div className="flex-1">
                <p className="mb-4 font-sans font-medium text-2xl">About Us</p>
              </div>
              <div className="flex-1">
                <p className="font-sans font-semibold text-7xl">
                  Selamat Datang di Landing Page Agen. Tim kami adalah{" "}
                  <span className="text-amber-500">
                    Tim yang penuh semangat untuk berkreasi dalam pembuatan
                    marketing digital.
                  </span>
                </p>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-3 divide-x items-center justify-center text-center font-bold font-mono mt-36">
                  <p className="text-6xl">
                    Rp.100 Juta <br />
                    <span className="text-3xl">Penghasilan Proyek</span>
                  </p>
                  <p className="text-6xl">
                    100+ <br />
                    <span className="text-3xl">Klien</span>
                  </p>
                  <p className="text-6xl">
                    500+ <br />
                    <span className="text-3xl">Testimoni</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className=" flex-1 bg-slate-950 text-white">
            <div className="flex flex-col px-10 py-10">
              <p className="flex font-sans font-semibold text-2xl mb-4">Jasa</p>
              <p className="flex font-sans font-black text-5xl">
                Jasa yang kami sediakan
              </p>
              <br />
              <div className="flex">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHead className="text-lg">
                      <Table.HeadCell className="">Nama Jasa</Table.HeadCell>
                      <Table.HeadCell className="w-96">Display</Table.HeadCell>
                      <Table.HeadCell className="">Detail Jasa</Table.HeadCell>
                    </TableHead>
                    <Table.Body className="divide-y bg-white">
                      <Table.Row>
                        <Table.Cell>Penjualan Properti</Table.Cell>
                        <Table.Cell>
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <img
                              src="./image/jasa1.jpg"
                              className="rounded-md"
                            />
                          </motion.div>
                        </Table.Cell>
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
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <img
                              src="./image/jasa2.jpg"
                              className="rounded-md"
                            />
                          </motion.div>
                        </Table.Cell>
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
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <img
                              src="./image/jasa3.jpg"
                              className="rounded-md"
                            />
                          </motion.div>
                        </Table.Cell>
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
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <img
                              src="./image/jasa4.jpg"
                              className="rounded-md"
                            />
                          </motion.div>
                        </Table.Cell>
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
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <img
                              src="./image/jasa5.jpg"
                              className="rounded-md"
                            />
                          </motion.div>
                        </Table.Cell>
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
          <section className="flex-1 text-black">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInVariants} >
            <div className="flex flex-col p-10">
                <p className="flex-auto font-sans font-black text-8xl">Apakah Kamu Tertarik? <br/>Daftar Sekarang!</p>
                <p className="flex-auto font-serif my-5 font-medium">Mari kita bersama menciptakan ide menjadi nyata dan hasil yang memuaskan</p>
                <div className="flex-auto">
                <Button pill color="light" className="w-auto">Register Now <img src="./icons/resume.svg" className="ml-2 h-7" /></Button>
                </div>
            </div>
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Agen;
