import { Home } from "lucide-react";
import Link from "next/link";
import Menubar from "./Menu";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <div className="flex bg-white text-black gap-y-6 flex-col justify-center items-center h-min w-full lg:px-6 lg:pt-8 px-4 py-2">
      <h3 className="lg:text-2xl text-lg text-center font-light font-unbounded uppercase">
        Welcome to our blog page
      </h3>
      <Link href="/">
        <h1 className="lg:text-[5rem] text-5xl text-center font-semibold font-heimdal uppercase tracking-wider">
          Grove
        </h1>
      </Link>
      <div className="border-y border-black lg:w-[90%] w-[95%] font-unbounded mt-2">
        <ul className="flex items-center justify-center lg:gap-x-4">
          <li className="px-6 py-2 border-x border-black">
            <Menubar />
          </li>
          <li className="px-6 py-2  border-black">
            <Link href="/">
              <Home className="stroke-[1]" />
            </Link>
          </li>

          <li className="px-6 py-4 border-x flex justify-center items-center gap-x-4 border-black">
            <Link href="/">
              <GitHubLogoIcon />
            </Link>
            <Link href="/">
              <LinkedInLogoIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
