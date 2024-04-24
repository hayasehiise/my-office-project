"use client";
import { useEffect, useState } from "react";
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
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
export default function ListLowongan() {
  const [data, setData] = useState<dataProps[]>([]);
  const [dataLink, setDataLink] = useState<linkProps[]>([]);
  const [prevLink, setPrevLink] = useState("");
  const [nextLink, setNextLink] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(!isLoading);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentApi]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB");
  };

  const handlePaginate = ({
    url,
    loading,
  }: {
    url: string;
    loading: boolean;
  }) => {
    setCurrentApi(url);
    setIsLoading(loading);
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

  if (isLoading)
    return (
      <div className="mx-auto w-[200px] h-[200px]">
        <img src="/image/lowongan/loading.gif" className="w-full h-full" />
      </div>
    );
  return (
    <>
      <div className="grid sm:grid-cols-5 grid-cols-2 gap-5">
        {data.map((item, index) => (
          <div key={index} className="mx-auto">
            <Card className="w-full h-full flex flex-col">
              <CardHeader className="grow">
                <img
                  src={category(item.category)}
                  className="w-full h-full object-cover"
                />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.category}</CardDescription>
                <p className="flex">
                  <img src="/icons/marker.svg" className="h-6" />
                  {item.location}
                </p>
              </CardHeader>
              <CardFooter className="self-center">
                <Dialog>
                  <Button variant={"default"} asChild>
                    <DialogTrigger>More Detail</DialogTrigger>
                  </Button>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <DialogDescription>
                        {item.company} <br /> {item.type}
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <p className="text-base">
                        <span className="font-semibold">Kategory : </span>
                        {item.category}
                      </p>
                      <p className="text-base">
                        <span className="font-semibold">Tanggal Post : </span>
                        {formatDate(item.created_at)}
                      </p>
                      <p className="text-base font-semibold">
                        Deskripsi :
                      </p>
                      <div className="text-base" dangerouslySetInnerHTML={{ __html: item.desc }} ></div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant={"default"}
                        className="text-base w-fit"
                        asChild
                      >
                        <Link
                          href={`https://api.whatsapp.com/send?phone=6282122229500&text=Assalamualaikum%0AHai%20Kak,%20Saya%20Mau%20Daftar%20Kerja.%0ABagian:%20${item.title}%0APerusahaan:%20${item.company}`}
                          target="_blank"
                        >
                          Daftar
                        </Link>
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
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
                  prevLink
                    ? handlePaginate({ url: prevLink, loading: !isLoading })
                    : console.log("First Paginate!");
                }}
                className="cursor-pointer"
              />
            </PaginationItem>
            {dataLink.map((item, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => {
                    !item.active
                      ? handlePaginate({ url: item.url, loading: !isLoading })
                      : console.log("On This Paginate!");
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
                  nextLink
                    ? handlePaginate({ url: nextLink, loading: !isLoading })
                    : console.log("Last Paginate!");
                }}
                className="cursor-pointer"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
