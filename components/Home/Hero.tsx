"use client";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid grid-col-1 md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Drive Your Adventure with Our Reliable Car Rentals
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Discover the freedom of the open road with our top-notch car rental
          services.
        </h2>
        <button className="p2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all">
          Explore Cars
        </button>
      </div>
      <div>
        <Image src="/Hero.png" alt="hero" width={500} height={500} />
      </div>
    </div>
  );
}

export default Hero;
