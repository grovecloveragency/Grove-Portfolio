import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black lg:px-20 lg:block hidden lg:py-8 lg:mt-20">
      <Section1 />
      <div className="lg:my-10" />
      <Section2 />
    </div>
  );
};

const Section1 = () => {
  return (
    <div className="flex justify-between items-center text-neutral-100 font-unbounded">
      <div className="flex justify-center items-center lg:gap-x-14">
        <ul className="flex flex-col lg:gap-y-2">
          <li className="lg:mb-2 lg:text-sm">Socials:</li>
          <Link href="">
            <li className="flex items-center lg:text-xs hover:underline">
              Github
              <span>
                <Github className="w-4 h-4 ml-2" />
              </span>
            </li>
          </Link>
          <Link href="">
            <li className="flex items-center lg:text-xs hover:underline">
              LinkedIn
              <span>
                <Linkedin className="w-4 h-4 ml-2" />
              </span>
            </li>
          </Link>
          <Link href="">
            <li className="flex items-center lg:text-xs hover:underline">
              Instagram
              <span>
                <Instagram className="w-4 h-4 ml-2" />
              </span>
            </li>
          </Link>
          <Link href="">
            <li className="flex items-center lg:text-xs hover:underline">
              Twitter
              <span>
                <Twitter className="w-4 h-4 ml-2" />
              </span>
            </li>
          </Link>
        </ul>
        <ul className="flex flex-col lg:gap-y-2">
          <li className="lg:mb-2 lg:text-sm">Team Members:</li>
          <Link href="">
            <li className="flex items-center lg:text-xs hover:underline">
              Amaan Shaikh - Founder
            </li>
          </Link>
          <Link href="">
            <li className="flex items-center lg:text-xs hover:underline">
              Ayman Sayed - Co-Founder
            </li>
          </Link>
          <Link href="">
            <li className="flex items-center lg:text-xs hover:underline">
              Saad Sayyed - CEO/Director
            </li>
          </Link>
          <Link href="">
            <li className="flex items-center lg:text-xs hover:underline">
              Faraz Pathan - Project Manager
            </li>
          </Link>
          <Link href="">
            <li className="flex items-center lg:text-xs hover:underline">
              Abdul Basit Khan - Digital Marketing
            </li>
          </Link>
        </ul>
      </div>
      <div />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-center text-neutral-100 font-unbounded">
      <h1 className="relative lg:text-[5rem] tracking-wide uppercase font-bold font-heimdal">
        Grove
        <sup className="absolute top-0 text-base lg:text-[1rem] p-2 rounded-[100%] font-unbounded">
          TM
        </sup>
      </h1>
      <h3 className="lg:text-[0.8rem] tracking-wide capitalize font-semibold lg:mb-40 lg:mr-10">
        Kondhwa Khurd, Pune - 411048, Pune, maharashtra, India
      </h3>
    </div>
  );
};

export default Footer;
