"use client";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SectionProps {
  children: React.ReactNode;
  className: string;
}

function Section({ children, className }: SectionProps) {
  return <section className={`${className} flex flex-col`}>{children}</section>;
}

export function SectionMain() {
  return (
    <div className="w-full h-dvh sm:bg-[url(/image/lowongan/background.jpg)] bg-[url(/image/lowongan/bg-phone.jpg)] bg-cover">
      <Section className="w-full h-dvh bg-black bg-opacity-45 justify-center">
        <p className="sm:text-6xl text-2xl font-extrabold text-white sm:px-24 px-5">
          Tempat Kerja Idaman Akan
        </p>
        <p className="sm:text-6xl text-2xl font-extrabold text-white sm:px-24 px-5">
          Membuat Produktifitas Berkualitas
        </p>
        <p className="sm:text-lg text-sm sm:w-1/2 w-2/3 font-semibold text-white pt-5 sm:px-24 px-5">
          kami akan memberikan lingkungan kerja yang mendukung, memotivasi, dan
          memungkinkan Anda untuk berkembang secara profesional.
        </p>
      </Section>
    </div>
  );
}

export function SectionJob() {
  interface dataProps {
    id: number;
    title: string;
    desc: string;
    category: string;
    company: string;
    type: string;
    location: string;
    created_at: string;
    update_at: string;
  }
  interface linkProps {
    active: boolean;
    url: string;
    label: string;
  }

  const [data, setData] = useState<dataProps[]>([]);
  const [dataLink, setDataLink] = useState<linkProps[]>([]);
  const [prevLink, setPrevLink] = useState("");
  const [nextLink, setNextLink] = useState("");
  const [loading, setLoading] = useState(true);
  // const [currentApi, setCurrentApi] = useState(
  //   "http://127.0.0.1:8000/api/lowongan"
  // );
  const [currentApi, setCurrentApi] = useState(
    `${process.env.API_URL}/api/lowongan`
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(currentApi);
        // console.log(res.data.data);
        setData(res.data.data.data);
        setDataLink(
          res.data.data.links.slice(1, res.data.data.links.length - 1)
        );
        setPrevLink(res.data.data.prev_page_url);
        setNextLink(res.data.data.next_page_url);
        setLoading(!loading);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentApi]);
  // console.log(currentApi);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB");
  };

  const category = (value: string) => {
    switch (value) {
      case "Technology":
        return "/image/lowongan/category/Tech.png";
      case "Multimedia":
        return "/image/lowongan/category/Multimedia.png";
      case "Construction":
        return "/image/lowongan/category/Structure.png";
      case "Management":
        return "/image/lowongan/category/Agency.png";
      case "Manufacture":
        return "/image/lowongan/category/Manufacture.png";
      case "Engineer":
        return "/image/lowongan/category/Engineer.png";
    }
  };
  return (
    <Section className="w-full h-full p-5">
      <p className="text-center text-3xl font-bold pb-5">
        Lowongan Yang Tersedia
      </p>
      {loading ? (
        <div className="mx-auto w-[200px] h-[200px]">
          <img src="/image/lowongan/loading.gif" className="w-full h-full" />
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-5 grid-cols-2 gap-5">
            {data.map((item, index) => (
              <div key={index} className="mx-auto">
                <Card className="w-full h-full">
                  <CardHeader>
                    <img
                      src={category(item.category)}
                      className="w-full h-full object-cover"
                    />
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="flex mb-2">
                      <img src="/icons/marker.svg" className="h-6" />
                      {item.location}
                    </p>
                    <Dialog>
                      <DialogTrigger>More Detail</DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <DialogDescription>{item.company} <br/> {item.type}</DialogDescription>
                        </DialogHeader>
                        <div>
                        <p className="text-base">
                            {item.category}
                          </p>
                          <p className="text-base">
                            {formatDate(item.created_at)}
                          </p>
                          <p className="text-base">{item.desc}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div>
            <Pagination className="mt-3">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => {
                      if (prevLink) {
                        setCurrentApi(prevLink);
                        setLoading(!loading);
                      } else {
                        console.log("no need refresh");
                      }
                    }}
                    className="cursor-pointer"
                  />
                </PaginationItem>
                {dataLink.map((item, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => {
                        if (item.active) {
                          console.log("no need refresh");
                        } else {
                          setCurrentApi(item.url);
                          setLoading(!loading);
                        }
                      }}
                      isActive={item.active}
                      className="cursor-pointer"
                    >
                      {item.label}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => {
                      if (nextLink) {
                        setCurrentApi(nextLink);
                        setLoading(!loading);
                      } else {
                        console.log("no need refresh");
                      }
                    }}
                    className="cursor-pointer"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      )}
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="grid grid-cols-2 gap-0 bg-[#4e7dd4] text-white justify-center items-center xl:px-10 sm:px-10 xs: py-5">
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
