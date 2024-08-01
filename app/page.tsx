"use client";

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarLists } from "@/services";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getCarLists_();
  }, []);

  const getCarLists_ = async () => {
    const result = getCarLists();
    console.log(result);
  };

  return (
    <>
      <div className="p-5 sm:px-10 md:px-20">
        <Hero />
        <SearchInput />
        <CarsFiltersOption />
      </div>
    </>
  );
}
