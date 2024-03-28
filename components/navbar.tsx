"use client";
import Link from "next/link";
import { Navbar, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";

export default function NavMenu() {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar fluid className={`fixed top-0 z-40 w-full bg-[#4b3621]`}>
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap italic text-4xl font-extrabold text-[#ffffff]">
          AWL
        </span>
      </Navbar.Brand>
      <div className="xs:hidden sm:block">
        <Link href="#" className="px-3 text-xl text-white">
          Home
        </Link>
        <Link href="#" className="px-3 text-xl text-white">
          About
        </Link>
        <Dropdown label="" renderTrigger={() => <Link href="#" className="inline-block px-3 text-xl text-white">Service</Link>} className="z-50" dismissOnClick={false}>
          <Dropdown.Item as="a" href="/desain" className="text-lg">Desain</Dropdown.Item>
          <Dropdown.Item className="text-lg">Konstruksi</Dropdown.Item>
          <Dropdown.Item className="text-lg">Interior</Dropdown.Item>
          <Dropdown.Item className="text-lg">Jual Beli</Dropdown.Item>
        </Dropdown>
        <Link href="#" className="px-3 text-xl text-white">
          Contact
        </Link>
      </div>
      <Navbar.Toggle className="sm:invisible bg-white" />
      <Navbar.Collapse className="bg-white">
        <Link href="#" className=" border-b-2 p-2">Home</Link>
        <Link href="#" className=" border-b-2 p-2">About</Link>
        <Dropdown label="" renderTrigger={() => <p className="border-b-2 p-2">Service</p>} className="w-72 z-50" dismissOnClick={false}>
          <Dropdown.Item as="a" href="/desain">Desain</Dropdown.Item>
          <Dropdown.Item>Konstruksi</Dropdown.Item>
          <Dropdown.Item>Interior</Dropdown.Item>
          <Dropdown.Item>Jual Beli</Dropdown.Item>
        </Dropdown>
        <Link href="#" className=" p-2">Contact</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
