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
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [isLoading, setIsLoading] = useState(true)
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
        setIsLoading(!isLoading)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentApi]);

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

  console.log();
  if (isLoading) return (
    <div className="mx-auto w-[200px] h-[200px]">
          <img src="/image/lowongan/loading.gif" className="w-full h-full" />
    </div>
  )
  return (
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
                      <DialogDescription>
                        {item.company} <br /> {item.type}
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <p className="text-base">{item.category}</p>
                      <p className="text-base">{formatDate(item.created_at)}</p>
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
                    setIsLoading(!isLoading)
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
                      setIsLoading(!isLoading)
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
                    setIsLoading(!isLoading)
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
  );
}
