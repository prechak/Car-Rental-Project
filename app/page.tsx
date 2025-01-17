"use client";

import ToastMsg from "@/components/CarBooking/ToastMsg";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlag";
import { getCarLists } from "@/services";
import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);

  useEffect(() => {
    getCarLists_();
  }, []);

  const getCarLists_ = async () => {
    const result: any = await getCarLists();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter(
      (item: any) => item.carBrand == brand
    );
    setCarsList(filterList);
  };

  const filterCarPrice = (order: any) => {
    const sortedList = [...carsOrgList].sort((a: any, b: any) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedList);
  };

  useEffect(() => {
    if (showToastMsg) {
      setTimeout(function () {
        setShowToastMsg(false);
      }, 4000);
    }
  }, [showToastMsg]);

  return (
    <>
      <div className="p-5 sm:px-10 md:px-20">
        <BookCreatedFlagContext.Provider
          value={{ showToastMsg, setShowToastMsg }}
        >
          <Hero />
          <SearchInput />
          <CarsFiltersOption
            carsList={carsOrgList}
            setBrand={(value: string) =>
              filterCarList(value.toLocaleLowerCase())
            }
            setPrice={(value: string) => filterCarPrice(value)}
          />
          <CarsList carsList={carsList} />
          {showToastMsg ? (
            <ToastMsg msg={"Booking Created Successfully"} />
          ) : null}
        </BookCreatedFlagContext.Provider>
      </div>
    </>
  );
}
