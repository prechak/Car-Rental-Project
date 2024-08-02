"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPublicImage } from "@/services";
import CarCardSkelton from "./CarCardSkelton";

function Hero() {
  const [heroUrl, setHeroUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const result: any = await getPublicImage();
        // console.log(result);

        const heroData = result?.publics[0]?.hero;
        setHeroUrl(heroData?.url || null);
      } catch (error) {
        console.error("Error fetching hero image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImage();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Drive a Low-Carbon Society
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Discover the freedom of the open road with our top-notch electric car
          rental services.
        </h2>
        <button className="p2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all">
          Explore Cars
        </button>
      </div>
      <div className="justify-self-center">
        {loading ? (
          <CarCardSkelton />
        ) : heroUrl ? (
          <Image src={heroUrl} alt="hero" width={500} height={500} />
        ) : null}
      </div>
    </div>
  );
}

export default Hero;
