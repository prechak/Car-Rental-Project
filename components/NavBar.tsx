import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="flex items-center justify-between p-5 shadow-md border-b-[1px]">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer">
          Home
        </h2>
        <h2 className="hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer">
          History
        </h2>
        <h2 className="hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer">
          Contact Us
        </h2>
      </div>
      <UserButton />
    </div>
  );
}

export default NavBar;
