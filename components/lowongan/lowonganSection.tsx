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

interface SectionProps {
  children: React.ReactNode;
  className: string;
}

function Section({ children, className }: SectionProps) {
  return <section className={`${className} flex flex-col`}>{children}</section>;
}

export function SectionMain() {
  return (
    <div className="w-full h-dvh bg-[url(/image/lowongan/background.jpg)] bg-cover">
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
    title: string;
    desc: string;
    category: string;
    location: string;
    created_at: Date;
    update_at: Date;
  }
  interface linkProps {
    active: boolean;
    url: string;
    label: string;
  }
  const [data, setData] = useState<dataProps[]>([]);
  const [dataLink, setDataLink] = useState<linkProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentApi, setCurrentApi] = useState(
    "http://127.0.0.1:8000/api/lowongan"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(currentApi);
        setData(res.data.data.data);
        setDataLink(res.data.data.links);
        setLoading(!loading);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentApi]);

  const category = (value: string) => {
    switch (value) {
      case "Technology":
        return "/image/lowongan/Tech.png";
      case "Multimedia":
        return "/image/lowongan/Multimedia.png";
      case "Infrastructure":
        return "/image/lowongan/Structure.png";
    }
  };
  return (
    <Section className="w-full h-full p-5">
      {loading ? (
        <div className="mx-auto">Loading</div>
      ) : (
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-5">
          {data.map((item, index) => (
            <div key={index} className="mx-auto">
              <Card className="w-full">
                <CardHeader>
                    <img src={category(item.category)} className="w-full h-full object-cover" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.desc}</p>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
