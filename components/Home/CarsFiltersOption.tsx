import React, { useEffect, useState } from "react";

function CarsFiltersOption({ carsList, setBrand, setPrice }: any) {
  const [brandList, setBrandList] = useState<any>();
  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet).sort());
    // console.log(BrandSet);
  };

  const uppercaseFirstLetter = (str: string) => {
    if (str.length <= 3) {
      return str.toUpperCase();
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  };

  return (
    <div className="flex mt-10 items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select w-full max-w-xs"
          onChange={(e) => setPrice(e.target.value)}
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>

        <select
          className="select w-full md:block max-w-xs select-bordered hidden"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        >
          <option disabled selected>
            Brand
          </option>
          {brandList &&
            brandList.map((brand: string, index: number) => (
              <option key={index}>{uppercaseFirstLetter(brand)}</option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
