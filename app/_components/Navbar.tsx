"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HyperText from "@/components/magicui/hyper-text";
import BoxReveal from "@/components/magicui/box-reveal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ borderBottom: "none", boxShadow: "none" }}
      animate={
        isScrolled
          ? {
              borderBottom: "2px solid #e5e5e5",
              boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      className="w-full flex justify-between items-center lg:px-20 px-10 lg:py-6 py-4 bg-white text-black"
    >
      <Link href="/">
        <HyperText
          className="lg:text-3xl text-2xl font-extrabold font-heimdal uppercase cursor-pointer"
          text="Grove"
        />
      </Link>
      <div className="lg:flex hidden items-center gap-x-8 font-unbounded">
        <BoxReveal boxColor="#ffffff" duration={0.6}>
          <ul className="flex items-center font-medium gap-x-8">
            <li className="text-xs text-black/75 duration-300 hover:text-black">
              <Link href="/blogs">Blog</Link>
            </li>
            <li className="text-xs text-black/75 duration-300 hover:text-black">
              <Link href="/about">About</Link>
            </li>
            <li className="text-xs text-black/75 duration-300 hover:text-black">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-xs text-black/75 duration-300 hover:text-black">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </BoxReveal>
        <BoxReveal boxColor="#ffffff" duration={1.0}>
          <Button
            size="sm"
            className="hover:bg-white uppercase hover:text-black border-2 border-black duration-300"
            asChild
          >
            <Link href="/projects">Projects</Link>
          </Button>
        </BoxReveal>
      </div>
      <div className="flex lg:hidden">
        <MobileMenu />
      </div>
    </motion.div>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <BoxReveal boxColor="#ffffff" duration={1.0}>
            <Menu
              className="w-6 h-6 stroke-[2] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </BoxReveal>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="bg-white flex text-center flex-col justify-center items-center w-full h-[100%] text-black font-unbounded lg:gap-y-16 gap-y-10"
        >
          <Link href="/blogs" onClick={closeSheet}>
            <h1 className="text-2xl uppercase font-medium">Blog</h1>
          </Link>
          <Link href="/about" onClick={closeSheet}>
            <h1 className="text-2xl uppercase font-medium">About</h1>
          </Link>
          <Link href="/services" onClick={closeSheet}>
            <h1 className="text-2xl uppercase font-medium">Services</h1>
          </Link>
          <Link href="/contact" onClick={closeSheet}>
            <h1 className="text-2xl uppercase font-medium">Contact</h1>
          </Link>
          <button className="w-full text-xl py-4 bg-black text-white mt-6 rounded-xl hover:bg-white uppercase hover:text-black border-2 border-black duration-300">
            <Link href="/projects" onClick={closeSheet}>
              Projects
            </Link>
          </button>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
