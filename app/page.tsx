import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
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
