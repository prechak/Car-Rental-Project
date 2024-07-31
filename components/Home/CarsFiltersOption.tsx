import React from "react";

function CarsFiltersOption() {
  return (
    <div className="flex mt-10 items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className="flex gap-5">
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select w-full md:block max-w-xs select-bordered hidden">
          <option disabled selected>
            Brand
          </option>
          <option>Toyota</option>
          <option>Honda</option>
          <option>BMW</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
