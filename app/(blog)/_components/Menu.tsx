import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Menubar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 stroke-[1] cursor-pointer" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-white flex text-center flex-col justify-center items-center w-full h-[100%] text-black font-unbounded lg:gap-y-16 gap-y-10"
        >
          <Link href="/">
            <h1 className="text-2xl uppercase font-medium">Home</h1>
          </Link>
          <Link href="/about">
            <h1 className="text-2xl uppercase font-medium">About</h1>
          </Link>
          <Link href="/services">
            <h1 className="text-2xl uppercase font-medium">Services</h1>
          </Link>
          <Link href="/contact">
            <h1 className="text-2xl uppercase font-medium">Contact</h1>
          </Link>
          <button className="w-full text-xl py-4 bg-black text-white mt-6 rounded-xl hover:bg-white uppercase hover:text-black border-2 border-black duration-300">
            <Link href="/projects">Projects</Link>
          </button>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Menubar;
