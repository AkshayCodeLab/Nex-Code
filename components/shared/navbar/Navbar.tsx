import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav
      className="flex-between
  background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12"
    >
      <Link
        href="/"
        className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-90"
      >
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="nex-code"
        />
        <p className="h2-bold hidden font-spaceGrotesk text-dark-100 dark:text-light-900 sm:block">
          Nex<span className="text-primary-500">Code</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex items-center gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox:
                  "h-10 w-10 hover:shadow-lg transition-shadow duration-300",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
