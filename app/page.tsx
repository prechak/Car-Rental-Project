"use client";

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarLists } from "@/services";
import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);

  useEffect(() => {
    getCarLists_();
  }, []);

  const getCarLists_ = async () => {
    const result: any = await getCarLists();
    setCarsList(result?.carLists);
    console.log(result);
  };

  return (
    <>
      <div className="p-5 sm:px-10 md:px-20">
        <Hero />
        <SearchInput />
        <CarsFiltersOption />
        <CarsList carsList={carsList} />
      </div>
    </>
  );
}
