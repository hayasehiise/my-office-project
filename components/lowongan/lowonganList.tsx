import axios from "axios";
import useSWR from "swr";
import { useEffect, useState } from "react";
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

const fetcher = (url: string) =>
  axios.get(`${process.env.API_URL}${url}`).then((res) => res.data);

export default function ListLowongan() {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const { data, error, isLoading } = useSWR(
    `/api/lowongan?page=${pageIndex}`,
    fetcher,
    { refreshInterval: 1000, shouldRetryOnError: false }
  );
  const listLowongan = data?.data.data;
  const listPaginate = data?.data.links.slice(1, data.data.links.length - 1);
  const lastPage = data?.data.last_page;

  const handlePrevPage = () => {
    if (pageIndex == 0 || pageIndex == 1) {
      console.info("no more previous page");
    } else {
      setPageIndex(pageIndex - 1);
    }
  };
  const handleNextPage = () => {
    if (pageIndex == lastPage) {
      console.info("no more next page");
    } else {
      setPageIndex(pageIndex + 1);
    }
  };
  const handlePage = (page: number) => {
    if (page == pageIndex) {
      console.info("on the page");
    } else {
      setPageIndex(page);
    }
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
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB");
  };

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
  interface pageProps {
    label: string;
    active: boolean;
  }

  //   console.log(pageIndex);
  // console.log(isLoading)
  //   console.log(data)
  // console.log(error)

  if (isLoading)
    return (
      <div className="mx-auto w-[200px] h-[200px]">
        <img src="/image/lowongan/loading.gif" className="w-full h-full" />
      </div>
    );

  if (error)
    return (
      <div className="mx-auto text-center">
        <div className="mx-auto w-[300px] h-[300px]">
          <img src="/image/lowongan/no_data.png" className="w-full h-full" />
        </div>
        <p className="text-xl font-semibold">Sorry, Data not found</p>
        <p className="text-base">Refresh after a while</p>
      </div>
    );
  return (
    <>
      <div className="grid sm:grid-cols-5 grid-cols-2 gap-5">
        {listLowongan.map((item: dataProps, index: number) => (
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
                      <p className="text-base font-semibold">Deskripsi :</p>
                      <div
                        className="text-base"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></div>
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
              <PaginationPrevious onClick={() => handlePrevPage()} />
            </PaginationItem>
            {listPaginate.map((item: pageProps, index: number) => (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => handlePage(+item.label)}
                  isActive={item.active}
                >
                  {item.label}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => handleNextPage()} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
