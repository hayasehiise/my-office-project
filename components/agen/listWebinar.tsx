"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Button } from "@components/ui/button";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => (axios.get(url).then((res) => res.data))

export default function ListWebinar() {
  const { data, error, isLoading } = useSWR(`${process.env.API_URL}/api/webinar`, fetcher, {
    refreshInterval: 1000,
  });

  const listWebinar = data?.data;

  type dataProps = {
    id: number;
    title: string;
    date: string;
    time: string;
    via: string;
    price: number;
    base_price: number;
    discount: number;
  };

  if (isLoading)
    return (
      <>
      <div className="mx-auto w-[200px] h-[200px]">
        <img src="/image/agen/loading2.gif" className="w-full h-full" />
      </div>
      </>
    );

  if (error)
    return (
      <>
      <div className="mx-auto text-center">
        <div className="mx-auto w-[300px] h-[300px]">
          <img src="/image/agen/no_data.png" className="w-full h-full" />
        </div>
        <p className="text-xl font-semibold text-white">Sorry, Data not found</p>
        <p className="text-base text-white">Refresh after a while</p>
      </div>
      </>
    );

  if (listWebinar.length == 0) {
    return (
      <>
      <div className="mx-auto text-center">
        <div className="mx-auto w-[300px] h-[300px]">
          <img src="/image/agen/no_data.png" className="w-full h-full" />
        </div>
        <p className="text-xl font-semibold text-white">Maaf, Webinar Belum Tersedia</p>
        <p className="text-base text-white">Silahkan Mengecek Kembali Dilain Waktu</p>
      </div>
      </>
    );
  }
  return (
    <>
      <div
        className={`grid sm:grid-cols-${
          listWebinar.length <= 3 ? listWebinar.length : "3"
        } gap-5`}
      >
        {listWebinar.map((item: dataProps, index: number) => (
          <Card className="w-full mx-auto" key={index}>
            <CardHeader>
              <CardTitle className="font-bold text-center sm:w-2/3 w-full mx-auto">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex items-center font-semibold">
                <img src="/image/agen/icon/date.svg" className="h-10 mr-2" />
                {item.date}
              </p>
              <p className="flex items-center font-semibold">
                <img src="/image/agen/icon/time.svg" className="h-10 mr-2" />
                {item.time}
              </p>
              <p className="flex items-center font-semibold">
                <img src="/image/agen/icon/via.svg" className="h-10 mr-2" />
                {item.via}
              </p>
            </CardContent>
            <CardFooter className="sm:justify-between flex-col sm:flex-row">
              <div className="flex flex-col text-2xl mr-2">
                {item.discount == 0 ? (
                  <>
                    <p className="font-semibold">
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                  </>
                ) : item.discount == 100 ? (
                  <>
                    <p className="line-through">
                      {item.base_price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                    <p className="font-semibold">Gratis</p>
                  </>
                ) : (
                  <>
                    <p className="line-through">
                      {item.base_price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                    {/* <Badge className="ml-2 w-fit mx-auto">{item.discount}%</Badge> */}
                    <p className="font-semibold">
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                  </>
                )}
              </div>
              <Button variant={"success"} asChild className="sm:mt-0 mt-5">
                <Link
                  href={`https://api.whatsapp.com/send?phone=6282122229500&text=Assalamualaikum%0AHai%20Kak,%20Saya%20Mau%20${item.title}`}
                  target="_blank"
                >
                  Saya Mau Ikut
                  <img src="/icons/hands-up.png" className="h-7 ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
